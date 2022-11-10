/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

chrome.runtime.onInstalled.addListener(async () => {
    const url = chrome.runtime.getURL('index.html');
    const tab = await chrome.tabs.create({ url });
    console.log(`タブのID：${tab.id}`);
});
async function logListener(res) {
    try {
        // const activeTab = await chrome.tabs.get(res.tabId);
        // const tabs = await chrome.tabs.query({ active: true });
        // console.log(tabs);
        // console.log(activeTab);
        // chrome.scripting.executeScript({
        //   target: { tabId: activeTab.id!, allFrames: true },
        //   files: ['/content.js']
        // });
    }
    catch (error) {
        console.error(error);
    }
}
chrome.tabs.onActivated.addListener(logListener);
// function doInCurrentTab(tabCallback: any) {
//   return chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
//     return tabCallback(tabArray[0]);
//   });
// }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssVUFBVSxXQUFXLENBQUMsR0FBUTtJQUNqQyxJQUFJO1FBQ0Ysc0RBQXNEO1FBQ3RELDBEQUEwRDtRQUMxRCxxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLG1DQUFtQztRQUNuQyx1REFBdUQ7UUFDdkQsMkJBQTJCO1FBQzNCLE1BQU07S0FDUDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtBQUNILENBQUM7QUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFakQsOENBQThDO0FBQzlDLDBGQUEwRjtBQUMxRix1Q0FBdUM7QUFDdkMsUUFBUTtBQUNSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXBpYy1yZXNlYXJjaC8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2luZGV4Lmh0bWwnKTtcbiAgY29uc3QgdGFiID0gYXdhaXQgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsIH0pO1xuICBjb25zb2xlLmxvZyhg44K/44OW44GuSUTvvJoke3RhYi5pZH1gKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBsb2dMaXN0ZW5lcihyZXM6IGFueSkge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IGFjdGl2ZVRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmdldChyZXMudGFiSWQpO1xuICAgIC8vIGNvbnN0IHRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0YWJzKTtcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUYWIpO1xuICAgIC8vIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgLy8gICB0YXJnZXQ6IHsgdGFiSWQ6IGFjdGl2ZVRhYi5pZCEsIGFsbEZyYW1lczogdHJ1ZSB9LFxuICAgIC8vICAgZmlsZXM6IFsnL2NvbnRlbnQuanMnXVxuICAgIC8vIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihsb2dMaXN0ZW5lcik7XG5cbi8vIGZ1bmN0aW9uIGRvSW5DdXJyZW50VGFiKHRhYkNhbGxiYWNrOiBhbnkpIHtcbi8vICAgcmV0dXJuIGNocm9tZS50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJBcnJheSkge1xuLy8gICAgIHJldHVybiB0YWJDYWxsYmFjayh0YWJBcnJheVswXSk7XG4vLyAgIH0pO1xuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9