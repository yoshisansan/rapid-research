import React, { ChangeEvent, FC, useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import type {
  DraggingStyle,
  NotDraggingStyle,
  DraggableProvided,
  DraggableStateSnapshot
} from 'react-beautiful-dnd';
import { css } from '@emotion/react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Image,
  IconButton,
  VStack,
  background,
  Tabs
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import Dottoggle from './Dottoggle';
import ChromeMethods from 'components/popup/api/chrome';
import type { InputSearchData } from '../data/searchEngine';

const labelCSS = css`
  border: 0;
  outline: 0;
  font-size: 16px;
  padding: 8px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
  margin: 0;
`;
const inputCSS = css`
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  border-radius: 40px;
  width: 100%;
  color: #333;
  box-sizing: border-box;
  border: 0px;
  outline: 0px;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  height: 52px;

  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;
const searchBtnCSS = css`
  border: 0;
  outline: 0;
  width: 40px;
  height: 40px;
  font-size: 16px;
  padding: 8px 8px;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }

  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }

  .icon {
    margin-right: 16px/2;
  }

  &.unit {
    border-radius: 16px/2;
    line-height: 0;
    width: 16px * 3;
    height: 16px * 3;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 16px/2;
    font-size: 16px * 1.2;

    .icon {
      margin-right: 0;
    }
  }
`;

type InputSearchEngine = {
  id: number;
  iconUrl: string;
  searchUrl: string;
  engineName: string;
  placeholder: string;
  value: string;
  index: number;
  handleKeyword: (val: string) => void;
};

const InputSearchEngine: FC<InputSearchEngine> = (props) => {
  const logListener = async () => {
    try {
      const tabs = await chrome.tabs.query({ active: true });
      console.log(tabs);
    } catch (error) {
      console.error(error);
    }
  };

  const onChagngeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.handleKeyword(e.currentTarget.value);
  };

  const getItemStyle = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
  ) => ({
    background: '#EBECF0',
    boxShadow: isDragging ? '-5px -5px 20px #fff, 5px 5px 20px #babecc' : '',
    ...draggableStyle
  });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key == String(props.index + 1)) {
        e.preventDefault();
        logListener();
        const chromeMethods = new ChromeMethods();
        chromeMethods.readChromeData().then((res: any) => {
          if (res !== null || res !== undefined) {
            if (chromeMethods.typeCheck(res[props.index])) {
              const a = res[props.index].searchUrl;
              const b = props.value.replace(/(\s|[[:blank:]])+/g, '+');
              console.log(a, b);
              const hoge = async () => {
                await chrome.tabs.query(
                  { active: true, currentWindow: true },
                  async (tabs: chrome.tabs.Tab[]) => {
                    if (tabs.length === 0 && tabs[0] === undefined) return;
                    chrome.tabs.create({
                      index: tabs[0].index + 1,
                      url: `${res[props.index].searchUrl}${props.value.replace(
                        /(\s|[[:blank:]])+/g,
                        '+'
                      )}`
                    });
                  }
                );
              };
              hoge();
            }
          }
        });
        // 値を更新するためではなくaddEventListener宣言時の古いstate値が参照されるのでstate自身の関数の呼び出しで最新のstate値を取得するための処理
        // setValue((value) => {
        //   window.open(
        //     `${props.searchUrl}${value.replace(/(\s|[[:blank:]])+/g, '+')}`,
        //     '_blank',
        //     'noreferrer'
        //   );

        //   return value;
        // });
      }
    };
    window.addEventListener('keydown', (e) => handler(e));
    return () => {
      window.removeEventListener('keydown', (e) => handler(e));
    };
  }, []);

  return (
    <Draggable key={props.engineName} draggableId={props.engineName} index={props.index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <Box
          p="8px"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
          <Flex key={props.engineName} alignItems="center" h="80px">
            <Dottoggle />
            <Image h="32px" w="32px" cursor="pointer" src={props.iconUrl} alt="Google" m="8px" />
            <FormControl variant="floating" id="first-name">
              <FormLabel css={labelCSS}>
                <Input
                  onChange={(e) => onChagngeHandle(e)}
                  css={inputCSS}
                  value={props.value}
                  placeholder={props.placeholder}
                />
              </FormLabel>
            </FormControl>
            <a
              href={`${props.searchUrl}${props.value.replace(/(\s|[[:blank:]])+/g, '+')}`}
              target="_blank"
              rel="noreferrer">
              <IconButton
                aria-label="Search database"
                m="8px"
                css={searchBtnCSS}
                icon={<Search2Icon />}
              />
            </a>
            <Box w="140px" p="8px">
              {`cmd + ${props.index + 1}`}
            </Box>
          </Flex>
        </Box>
      )}
    </Draggable>
  );
};

export default InputSearchEngine;
