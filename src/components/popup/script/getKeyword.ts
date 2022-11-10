const urls = [
  {
    url: 'https://www.google.com/search?*',
    scrape: () => {
      const keyword = document.getElementsByTagName('input')[0].value;
      return keyword;
    }
  },
  {
    url: 'https://duckduckgo.com/?q=*',
    scrape: () => {
      const keyword = document.getElementsByTagName('input')[1].value;
      return keyword;
    }
  },
  {
    url: 'https://www.google.com/search?*',
    scrape: () => {
      const search = document.getElementsByTagName('input')[0].value;
    }
  },
  {
    url: 'https://www.google.com/search?*',
    scrape: () => {
      const search = document.getElementsByTagName('input')[0].value;
    }
  },
  {
    url: 'https://www.google.com/search?*',
    scrape: () => {
      const search = document.getElementsByTagName('input')[0].value;
    }
  }
];
const getKeyword = (url: string) => {};
