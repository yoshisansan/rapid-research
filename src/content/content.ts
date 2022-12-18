// import ChromeMethods from 'components/popup/api/chrome';
// import { InputSearchData } from 'components/popup/data/searchEngine';

// const fetchNewData = async (): Promise<InputSearchData[] | null | undefined> => {
//   try {
//     if (chrome.storage.sync === undefined) return null;
//     const chromeMethods = await new ChromeMethods();
//     let res = (await chromeMethods.readChromeData()) as any;
//     if (res === null || res === undefined) {
//       res = chromeMethods.getDefaultData();
//     }
//     if (chromeMethods.typeCheck(res[0])) {
//       res = res as InputSearchData[];
//       return res;
//     } else {
//       return null;
//     }
//   } catch (e: any) {
//     throw new Error(e);
//   }
// };

// const getKeyword = (url: string): string | undefined => {
//   if (/.+:\/\/(.+)?duckduckgo\..*/.test(url)) {
//     const inputElm = <HTMLInputElement>(
//       Array.from(document.querySelectorAll('input[type="text"]'))[1]
//     );
//     return inputElm?.value;
//   }
//   if (/.+:\/\/(.+)?bing\..*/.test(url)) {
//     return document.querySelector<HTMLInputElement>('input[type="search"]')?.value;
//   }
//   if (/.+:\/\/(.+)?baidu\..*/.test(url)) {
//     return document.querySelector<HTMLInputElement>('input#kw')?.value;
//   }
//   if (/.+:\/\/(.+)?you\..*/.test(url)) {
//     return document.querySelector<HTMLInputElement>('input[data-testid="search-input"]')?.value;
//   }

//   return document.querySelector<HTMLInputElement>('input[type="text"]')?.value;
// };

// (async () => {
//   const chromeMethods = await new ChromeMethods();
//   const searchEngines = await fetchNewData();
//   const localeUrl = location.href;
//   // console.log('local', localeUrl);

//   const searchedKeyword = getKeyword(localeUrl);
//   // console.log('keyword', searchedKeyword);
//   if (
//     searchedKeyword !== undefined &&
//     searchedKeyword !== null &&
//     searchEngines !== undefined &&
//     searchEngines !== null
//   ) {
//     const updateValue = searchEngines.map((data) => {
//       return { ...data, value: searchedKeyword };
//     });
//     chromeMethods.saveToChromeData(updateValue);
//   }
// })();
