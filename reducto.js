chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: 'reducto_content.js'
      });
});