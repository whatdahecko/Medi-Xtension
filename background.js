const fs = require('fs'); 
const filePath = chrome.runtime.getURL('settings.json');
const redirectUrl = "blocked.html";
let websites = []; 
let delay = 0; 
let blocker = () => {
    let date = new date();  
    let hours = date.gethours();
    if(hours >= 14 && hours < 18) {
        console.log("time to block")

    }
}
