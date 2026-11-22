let redirectPath = "./blocked.html"
const delay = 0; 
const websites = []; 
const {blocklist} = require("./popup.js");
let date = new Date();  
let hours = date.getHours();
function recordNavigation(details) {
    if (details.frameId !== 0) return;
    if (!details.url.startsWith("http")) return;
    const parsed = new URL(details.url);
    for(i = 0; i++; i < blocklist.length) {
        if(parsed.hostname = blocklist[i]) {
            window.location.assign("blocked.html");
        }
    }
    console.log("went to ", details.url, "using", details.transitionType);
}
browser.webNavigation.onCommited.addListener(recordNavigation);
browser.webNavigation.onHistoryStateUpdated.addListener(recordNavigation);
