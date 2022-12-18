/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/content/content.ts ***!
  \********************************/

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsMkRBQTJEO0FBQzNELHdFQUF3RTtBQUV4RSxvRkFBb0Y7QUFDcEYsVUFBVTtBQUNWLDBEQUEwRDtBQUMxRCx1REFBdUQ7QUFDdkQsK0RBQStEO0FBQy9ELCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUMsUUFBUTtBQUNSLDZDQUE2QztBQUM3Qyx3Q0FBd0M7QUFDeEMsb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsUUFBUTtBQUNSLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsTUFBTTtBQUNOLEtBQUs7QUFFTCw0REFBNEQ7QUFDNUQsa0RBQWtEO0FBQ2xELDJDQUEyQztBQUMzQyx1RUFBdUU7QUFDdkUsU0FBUztBQUNULDhCQUE4QjtBQUM5QixNQUFNO0FBQ04sNENBQTRDO0FBQzVDLHNGQUFzRjtBQUN0RixNQUFNO0FBQ04sNkNBQTZDO0FBQzdDLDBFQUEwRTtBQUMxRSxNQUFNO0FBQ04sMkNBQTJDO0FBQzNDLG1HQUFtRztBQUNuRyxNQUFNO0FBRU4sa0ZBQWtGO0FBQ2xGLEtBQUs7QUFFTCxpQkFBaUI7QUFDakIscURBQXFEO0FBQ3JELGdEQUFnRDtBQUNoRCxxQ0FBcUM7QUFDckMsd0NBQXdDO0FBRXhDLG1EQUFtRDtBQUNuRCxnREFBZ0Q7QUFDaEQsU0FBUztBQUNULHVDQUF1QztBQUN2QyxrQ0FBa0M7QUFDbEMscUNBQXFDO0FBQ3JDLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1Isd0RBQXdEO0FBQ3hELG9EQUFvRDtBQUNwRCxVQUFVO0FBQ1YsbURBQW1EO0FBQ25ELE1BQU07QUFDTixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFwaWMtcmVzZWFyY2gvLi9zcmMvY29udGVudC9jb250ZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBDaHJvbWVNZXRob2RzIGZyb20gJ2NvbXBvbmVudHMvcG9wdXAvYXBpL2Nocm9tZSc7XG4vLyBpbXBvcnQgeyBJbnB1dFNlYXJjaERhdGEgfSBmcm9tICdjb21wb25lbnRzL3BvcHVwL2RhdGEvc2VhcmNoRW5naW5lJztcblxuLy8gY29uc3QgZmV0Y2hOZXdEYXRhID0gYXN5bmMgKCk6IFByb21pc2U8SW5wdXRTZWFyY2hEYXRhW10gfCBudWxsIHwgdW5kZWZpbmVkPiA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgaWYgKGNocm9tZS5zdG9yYWdlLnN5bmMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG4vLyAgICAgY29uc3QgY2hyb21lTWV0aG9kcyA9IGF3YWl0IG5ldyBDaHJvbWVNZXRob2RzKCk7XG4vLyAgICAgbGV0IHJlcyA9IChhd2FpdCBjaHJvbWVNZXRob2RzLnJlYWRDaHJvbWVEYXRhKCkpIGFzIGFueTtcbi8vICAgICBpZiAocmVzID09PSBudWxsIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICByZXMgPSBjaHJvbWVNZXRob2RzLmdldERlZmF1bHREYXRhKCk7XG4vLyAgICAgfVxuLy8gICAgIGlmIChjaHJvbWVNZXRob2RzLnR5cGVDaGVjayhyZXNbMF0pKSB7XG4vLyAgICAgICByZXMgPSByZXMgYXMgSW5wdXRTZWFyY2hEYXRhW107XG4vLyAgICAgICByZXR1cm4gcmVzO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgICB9XG4vLyAgIH0gY2F0Y2ggKGU6IGFueSkge1xuLy8gICAgIHRocm93IG5ldyBFcnJvcihlKTtcbi8vICAgfVxuLy8gfTtcblxuLy8gY29uc3QgZ2V0S2V5d29yZCA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4vLyAgIGlmICgvLis6XFwvXFwvKC4rKT9kdWNrZHVja2dvXFwuLiovLnRlc3QodXJsKSkge1xuLy8gICAgIGNvbnN0IGlucHV0RWxtID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxuLy8gICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpKVsxXVxuLy8gICAgICk7XG4vLyAgICAgcmV0dXJuIGlucHV0RWxtPy52YWx1ZTtcbi8vICAgfVxuLy8gICBpZiAoLy4rOlxcL1xcLyguKyk/YmluZ1xcLi4qLy50ZXN0KHVybCkpIHtcbi8vICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpPy52YWx1ZTtcbi8vICAgfVxuLy8gICBpZiAoLy4rOlxcL1xcLyguKyk/YmFpZHVcXC4uKi8udGVzdCh1cmwpKSB7XG4vLyAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0I2t3Jyk/LnZhbHVlO1xuLy8gICB9XG4vLyAgIGlmICgvLis6XFwvXFwvKC4rKT95b3VcXC4uKi8udGVzdCh1cmwpKSB7XG4vLyAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W2RhdGEtdGVzdGlkPVwic2VhcmNoLWlucHV0XCJdJyk/LnZhbHVlO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyk/LnZhbHVlO1xuLy8gfTtcblxuLy8gKGFzeW5jICgpID0+IHtcbi8vICAgY29uc3QgY2hyb21lTWV0aG9kcyA9IGF3YWl0IG5ldyBDaHJvbWVNZXRob2RzKCk7XG4vLyAgIGNvbnN0IHNlYXJjaEVuZ2luZXMgPSBhd2FpdCBmZXRjaE5ld0RhdGEoKTtcbi8vICAgY29uc3QgbG9jYWxlVXJsID0gbG9jYXRpb24uaHJlZjtcbi8vICAgLy8gY29uc29sZS5sb2coJ2xvY2FsJywgbG9jYWxlVXJsKTtcblxuLy8gICBjb25zdCBzZWFyY2hlZEtleXdvcmQgPSBnZXRLZXl3b3JkKGxvY2FsZVVybCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKCdrZXl3b3JkJywgc2VhcmNoZWRLZXl3b3JkKTtcbi8vICAgaWYgKFxuLy8gICAgIHNlYXJjaGVkS2V5d29yZCAhPT0gdW5kZWZpbmVkICYmXG4vLyAgICAgc2VhcmNoZWRLZXl3b3JkICE9PSBudWxsICYmXG4vLyAgICAgc2VhcmNoRW5naW5lcyAhPT0gdW5kZWZpbmVkICYmXG4vLyAgICAgc2VhcmNoRW5naW5lcyAhPT0gbnVsbFxuLy8gICApIHtcbi8vICAgICBjb25zdCB1cGRhdGVWYWx1ZSA9IHNlYXJjaEVuZ2luZXMubWFwKChkYXRhKSA9PiB7XG4vLyAgICAgICByZXR1cm4geyAuLi5kYXRhLCB2YWx1ZTogc2VhcmNoZWRLZXl3b3JkIH07XG4vLyAgICAgfSk7XG4vLyAgICAgY2hyb21lTWV0aG9kcy5zYXZlVG9DaHJvbWVEYXRhKHVwZGF0ZVZhbHVlKTtcbi8vICAgfVxuLy8gfSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==