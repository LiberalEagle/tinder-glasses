const TINDER_GLASSES_MENU_ITEM_ID = "tinder-glasses-menu-item"; 
const TINDER_GLASSES_MENU_ITEM_TITLE = "Put on Your Glasses";
const TINDER_GLASSES_FILE_NAME = "tinder_glasses.js";

chrome.contextMenus.create({
    id: TINDER_GLASSES_MENU_ITEM_ID,
    title: TINDER_GLASSES_MENU_ITEM_TITLE,
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === TINDER_GLASSES_MENU_ITEM_ID) {
		chrome.tabs.executeScript({
			file: TINDER_GLASSES_FILE_NAME
    });
    }
});