const fs = require('fs');
let filepath = "./blocklist.txt"; 
let redirectPath = "./blocked.html"
let delay = 0; 
let websites = []; 
let blocker = async () => {
    let date = new Date();  
    let hours = date.getHours();
    if (hours >= 14 && hours < 18) {
        console.log("time to block");
        fs.readFile(filepath, (err, data) => {
            fileContents = data.toString;
            let websitelength = websites.length; 
            for(let i=0; i < websitelength; i++) {
                let addWebsite = "\n" + redirectPath + " " + websites[i]

            } 
        })
    }
    else {
        console.log("not time to block");
    } 
} 
blocker();setInterval(blocker, delay);
