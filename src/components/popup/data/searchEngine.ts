import Google from 'assets/searchEngine/logo-google.png';
import GoogleScholar from 'assets/searchEngine/logo-scholar.png';
import DuckDuckGo from 'assets/searchEngine/logo-duckduckgo.png';
import Yandex from 'assets/searchEngine/logo-yandex.png';
import You from 'assets/searchEngine/logo-you.png';
import Bing from 'assets/searchEngine/logo-bing.png';
import Baidu from 'assets/searchEngine/logo-baidu.png';

export default [
  {
    id: 1,
    engineName: 'Google',
    iconUrl: Google,
    searchUrl: 'https://www.google.com/search?q=',
    placeholder: 'Search on Google',
    value: ''
  },
  {
    id: 2,
    engineName: 'Google Scholar',
    iconUrl: GoogleScholar,
    searchUrl: 'https://scholar.google.co.jp/scholar?q=',
    placeholder: 'Search on Google Scholar',
    value: ''
  },
  {
    id: 3,
    engineName: 'DuckDuckGo',
    iconUrl: DuckDuckGo,
    searchUrl: 'https://duckduckgo.com/?q=',
    placeholder: 'Search on DuckDuckGo',
    value: ''
  },
  {
    id: 4,
    engineName: 'Yandex',
    iconUrl: Yandex,
    searchUrl: 'https://yandex.com/search/?text=',
    placeholder: 'Search on Yandex',
    value: ''
  },
  {
    id: 5,
    engineName: 'Bing',
    iconUrl: Bing,
    searchUrl: 'https://www.bing.com/search?q=',
    placeholder: 'Search on Bing',
    value: ''
  },
  {
    id: 6,
    engineName: 'Baidu',
    iconUrl: Baidu,
    searchUrl: 'https://www.baidu.com/s?wd=',
    placeholder: 'Search on Baidu',
    value: ''
  },
  {
    id: 7,
    engineName: 'You',
    iconUrl: You,
    searchUrl: 'https://you.com/search?q=',
    placeholder: 'Search on You',
    value: ''
  }
];

export type InputSearchData = {
  id: number;
  iconUrl: string;
  searchUrl: string;
  engineName: string;
  placeholder: string;
  value: string;
};
