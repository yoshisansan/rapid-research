import React, { FC, useState, useEffect, useRef } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Header from 'components/popup/header/Header';
import Footer from 'components/popup/footer/Footer';
import InputSearchEngine from 'components/popup/btn/InputSearchEngine';
import Source, { InputSearchData } from 'components/popup/data/searchEngine';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import type { DropResult, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import ChromeMethods from 'components/popup/api/chrome';
import BrowserMethods from 'components/popup/api/browser';

const Main = styled.div`
  padding-top: 72px;
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
`;

const PopUp: FC = () => {
  const [searchEngines, setSearchEngines] = useState<InputSearchData[] | null>(null);
  const [keyword, setKeyword] = useState('');
  const keywordRef = useRef('');
  keywordRef.current = keyword;
  const chromeMethods = new ChromeMethods();

  // キーワードの更新関数
  const handleKeyword = (val: string) => {
    setKeyword(val);
    if (searchEngines === null) return;
    const updateValue = searchEngines.map((data) => {
      return { ...data, value: val };
    });
    setSearchEngines(updateValue);
    chromeMethods.saveToChromeData(updateValue);
  };

  // ドラッグ&ドロップした要素を入れ替える関数
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

  // アクティブタブのブラウザ上でスクリプトを実行してキーワードをスクレイピングする関数
  const getKeywordFromBrowser = async (tabId: number): Promise<string | null> => {
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
        if (
          /.+:\/\/(.+)?google\..*/.test(url) ||
          /.+:\/\/(.+)?google\..*\..*/.test(url) ||
          /.+:\/\/(.+)?scholar\.google\..*\..*/.test(url) ||
          /.+:\/\/(.+)?scholar\.google\..*/.test(url) ||
          /.+:\/\/(.+)?yandex\..*/.test(url)
        ) {
          const inputElm = document.querySelector('input[type="text"]') as HTMLInputElement;
          return inputElm?.value;
        }

        return null;
      }
    });
    const searchedKeyword = res[0].result;

    return searchedKeyword;
  };

  // Chrome拡張機能で保存しているデータの取り出し
  const fetchNewData = async (): Promise<string> => {
    try {
      if (chrome.storage.sync === undefined) return 'COULD_NOT_SYNC';
      const chromeMethods = await new ChromeMethods();
      const res = (await chromeMethods.readChromeData()) as any;
      // 初期化時にDefaultDataをsetしているが初期化直後にstorageをgetしても値が更新されておらず値がundefinedのままに対する対処
      if (res === null || res === undefined) {
        setSearchEngines(chromeMethods.getDefaultData());
        return '';
      }
      if (chromeMethods.typeCheck(res[0])) {
        setSearchEngines(res);
        return res[0].value;
      }

      setSearchEngines(Source);
      return '';
    } catch (e: any) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    (async () => {
      // 立ち上げ時のデータの呼び出しとキーワードの取得
      const storageKeyword = await fetchNewData();
      if (storageKeyword === 'COULD_NOT_SYNC') return;

      const tabId = await getBrowserId();
      if (tabId === undefined) return;

      // keywordがnullの場合は保存していたデータをそのまま呼び出し
      const browserMethods = new BrowserMethods();
      const keyword = await getKeywordFromBrowser(tabId);
      if (keyword === null) return setKeyword(storageKeyword);
      setKeyword(keyword);

      // ブラウザからキーワードを取得できている場合はそちらへデータを更新
      const searchEngineData = await browserMethods.setSearchEngineKeyword(keyword);
      if (searchEngineData !== undefined && searchEngineData !== null) {
        // Popupで表示させるデータも更新
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
                          keywordRef={keywordRef}
                          handleKeyword={handleKeyword}
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
