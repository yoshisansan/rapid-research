import DefaultData from 'components/popup/data/searchEngine';
import type { InputSearchData } from 'components/popup/data/searchEngine';
class ChromeMethods {
  constructor() {
    this.initChromeStorage();
  }

  // Create処理 //
  saveToChromeData = (data: InputSearchData[]) => {
    chrome.storage.sync.set({ data }, () => {
      console.log(`settings ${data.length} data`);
    });

    return data;
  };
  // Read処理 //
  readChromeData = ():
    | Promise<InputSearchData[]>
    | Promise<unknown>
    | Promise<chrome.runtime.LastError> => {
    return new Promise((resolve, reject) => {
      // Asynchronously fetch all data from storage.sync.
      chrome.storage.sync.get(null, (items) => {
        // Pass any observed errors down the promise chain.
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        }
        resolve(items.data);
      });
    });
  };

  getDefaultData = () => DefaultData;

  // インストール後の初期処理
  initChromeStorage = async () => {
    let res = await this.readChromeData();

    if (res === null || res === undefined || this.isEmpty(res)) {
      res = this.saveToChromeData(DefaultData);
      console.log('Welcome to Rapid Research! Initial data set. Have a enjoy search engine days🐈');
      return res;
    }

    return res;
  };

  isEmpty = (obj: any) => {
    return !Object.keys(obj).length;
  };

  typeCheck = (d: InputSearchData): d is InputSearchData => {
    return (
      typeof d === 'object' &&
      d !== null &&
      typeof (d as InputSearchData).id === 'number' &&
      typeof (d as InputSearchData).iconUrl === 'string' &&
      typeof (d as InputSearchData).searchUrl === 'string' &&
      typeof (d as InputSearchData).engineName === 'string' &&
      typeof (d as InputSearchData).value === 'string'
    );
  };
}

export default ChromeMethods;
