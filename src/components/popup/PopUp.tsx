import React, { FC, useState, useRef, useEffect } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Header from 'components/popup/header/Header';
import InputSearchEngine from 'components/popup/btn/InputSearchEngine';
import Source, { InputSearchData } from 'components/popup/data/searchEngine';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type { DropResult, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import ChromeMethods from 'components/popup/api/chrome';

const Main = styled.div`
  padding-top: 72px;
  display: flex;
  justify-content: center;
`;

const PopUp: FC = () => {
  const [searchEngines, setSearchEngines] = useState<InputSearchData[] | null>(null);
  const [keyword, setKeyword] = useState('');
  const keywordRef = useRef('');
  keywordRef.current = keyword;
  // const getInputKeyword = (): string => {
  //   return (keywordRef.current = keyword);
  // };
  console.log(keyword);
  const handleKeyword = (val: string) => {
    setKeyword(val);
    if (searchEngines === null) return;
    const updateValue = searchEngines.map((data) => {
      return { ...data, value: val };
    });
    setSearchEngines(updateValue);
    chromeMethods.saveToChromeData(updateValue);
  };
  const chromeMethods = new ChromeMethods();
  // ドラッグ&ドロップした要素を入れ替える
  const reorder = (
    list: InputSearchData[],
    startIndex: number,
    endIndex: number
  ): InputSearchData[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (searchEngines === null) return;
    // ドロップ先がない
    if (!result.destination) {
      return;
    }
    // 配列の順序を入れ替える
    let movedItems = reorder(
      searchEngines, //　順序を入れ変えたい配列
      result.source.index, // 元の配列の位置
      result.destination.index // 移動先の配列の位置
    );
    if (chrome.storage.sync === undefined) return;
    const chromeMethods = new ChromeMethods();
    chromeMethods.saveToChromeData(movedItems);
    setSearchEngines(movedItems);
  };

  // ドラッグ&ドロップのリストのスタイル
  const getListStyle = (isDraggingOver: boolean) => ({
    background: '#EBECF0'
  });

  const fetchNewData = async () => {
    try {
      if (chrome.storage.sync === undefined) return;
      const chromeMethods = await new ChromeMethods();
      const res = (await chromeMethods.readChromeData()) as any;
      // 初期化時にDefaultDataをsetしているが初期化直後にstorageをgetしても値が更新されておらず値がundefinedのままに対する対処
      if (res === null || res === undefined)
        return setSearchEngines(chromeMethods.getDefaultData());
      if (chromeMethods.typeCheck(res[0])) return setSearchEngines(res);

      return setSearchEngines(Source);
    } catch (e: any) {
      throw new Error(e);
    }
  };
  useEffect(() => {
    fetchNewData();
    let queryOptions = { active: true, currentWindow: true };
    (async () => {
      let [tab] = await chrome.tabs.query(queryOptions);
      const chromeMethods = await new ChromeMethods();
      function handleSetKeyword() {
        const search = document.getElementsByTagName('input')[0].value;
        console.log(search);
      }
      if (tab.id === undefined) return;
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: handleSetKeyword
      });

      // await chrome.tabs.sendMessage(tab.id, 'hoge');
    })();

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
      // console.log(tabs[0].url);
      // if(tabs.length === 0 && tabs[0].url === undefined) return;
      // if(tabs[0].url.includes('https://www.chatwork.com')) {
      //   alert('please go to https://www.chatwork.com')
      //   return
      // }
      // console.log(tabs[0]);
      // if (tabs[0].id === undefined) return;
      // chrome.tabs.sendMessage(tabs[0].id, 'hoge');
      // chrome.tabs.update(tabs[0].id, { url: `https://google.com/` });
    });
  }, []);

  return (
    <Box color="moji.main">
      <Header />
      <Main>
        {searchEngines !== null && (
          <VStack>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="SearchEngines">
                {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                  <div
                    className="questions"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {/*　ドラッグできる要素　*/}
                    {searchEngines.map((data, i) => (
                      <React.Fragment key={data.engineName}>
                        <InputSearchEngine
                          {...data}
                          handleKeyword={handleKeyword}
                          keywordRef={keywordRef}
                          index={i}
                        />
                      </React.Fragment>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </VStack>
        )}
        {/* <Dnd /> */}
      </Main>
    </Box>
  );
};

export default PopUp;
