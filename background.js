"use strict";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message == "get-cookie") {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            let url = tabs[0].url;
            chrome.cookies.getAll({ url: url }, (e) =>
                sendResponse({ cookie: e.map((i) => `${i.name}=${i.value}`).join("; "), url: url })
            );
        });
        return true;
    }
});
