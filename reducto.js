chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: 'reducto_content.js'
      });
});

chrome.commands.onCommand.addListener(function(command) {
    if(command == "reducto-selection") {
        chrome.tabs.executeScript({
            file: 'reducto_content.js'
        });
    } else if(command == "reducto-remove") {
        chrome.tabs.executeScript({
            file: 'reducto_remove.js'
        });
    }
  });