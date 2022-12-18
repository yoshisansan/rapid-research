import React, { FC, useState, useRef, useEffect } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Header from 'components/popup/header/Header';
import Footer from 'components/popup/footer/Footer';
import InputSearchEngine from 'components/popup/btn/InputSearchEngine';
import Source, { InputSearchData } from 'components/popup/data/searchEngine';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type { DropResult, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import ChromeMethods from 'components/popup/api/chrome';
import BrowserMethods from 'components/popup/api/browser';

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

  const getBrowserId = async (): Promise<number | undefined> => {
    const queryOptions = { active: true, currentWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
  };

  const getKeywordFromBrowser = async (tabId: number): Promise<string> => {
    const res = await chrome.scripting.executeScript({
      target: { tabId },
      func: () => {
        const url = location.href;
        if (/.+:\/\/(.+)?duckduckgo\..*/.test(url)) {
          const inputElm = Array.from(
            document.querySelectorAll('input[type="text"]')
          )[1] as HTMLInputElement;
          return inputElm?.value;
        }
        if (/.+:\/\/(.+)?bing\..*/.test(url)) {
          const inputElm = document.querySelector('input[type="search"]') as HTMLInputElement;
          return inputElm?.value;
        }
        if (/.+:\/\/(.+)?baidu\..*/.test(url)) {
          const inputElm = document.querySelector('input#kw') as HTMLInputElement;
          return inputElm?.value;
        }
        if (/.+:\/\/(.+)?you\..*/.test(url)) {
          const inputElm = document.querySelector(
            'input[data-testid="search-input"]'
          ) as HTMLInputElement;
          return inputElm?.value;
        }

        const inputElm = document.querySelector('input[type="text"]') as HTMLInputElement;
        return inputElm?.value;
      }
    });
    const keyword = res[0].result;
    return keyword;
  };

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
    // let queryOptions = { active: true, currentWindow: true };
    (async () => {
      fetchNewData();
      const tabId = await getBrowserId();
      const browserMethods = new BrowserMethods();
      if (tabId === undefined) return;
      const keyword = await getKeywordFromBrowser(tabId);
      keywordRef.current = keyword;
      const searchEngineData = await browserMethods.setSearchEngineKeyword(keyword);
      if (searchEngineData !== undefined && searchEngineData !== null) {
        await setSearchEngines(searchEngineData);
      } else {
        setSearchEngines(browserMethods.getDefaultData());
      }
    })();
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
      </Main>
      <Footer />
    </Box>
  );
};

export default PopUp;
