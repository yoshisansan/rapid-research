chrome.runtime.onInstalled.addListener(async () => {
  const url = chrome.runtime.getURL('index.html');
  const tab = await chrome.tabs.create({ url });
  console.log(`タブのID：${tab.id}`);
});

async function logListener(res: any) {
  try {
    // const activeTab = await chrome.tabs.get(res.tabId);
    // const tabs = await chrome.tabs.query({ active: true });
    // console.log(tabs);
    // console.log(activeTab);
    // chrome.scripting.executeScript({
    //   target: { tabId: activeTab.id!, allFrames: true },
    //   files: ['/content.js']
    // });
  } catch (error) {
    console.error(error);
  }
}
chrome.tabs.onActivated.addListener(logListener);

// function doInCurrentTab(tabCallback: any) {
//   return chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
//     return tabCallback(tabArray[0]);
//   });
// }
