let redirectPath = "./blocked.html"
const delay = 0; 
const websites = []; 
const blocker = async () => {
const {blocklist} = require("./popup.js");
    let date = new Date();  
    let hours = date.getHours();
    if (hours >= 14 && hours < 18) {
        console.log("time to block");
          
    }
    else {
        console.log("not time to block");
    } 
} 
blocker();setInterval(blocker, delay);
