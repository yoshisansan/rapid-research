(async () => {
  const googleTargetDOM = Array.from(document.querySelectorAll('#rso > div'));
  console.log(googleTargetDOM);

  // chrome.runtime.onMessage.addListener((message, sender) => {
  //   console.log('content');
  //   console.log(message, sender);
  // });
})();
