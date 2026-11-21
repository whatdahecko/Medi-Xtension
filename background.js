const filePath = browser.runtime.getURL('settings.json');
const redirectUrl = browser.runtime.getURL("blocked.html");
let websites = []; 
let delay = 0; 
let blocker = async () => {
    let date = new Date();  
    let hours = date.getHours();
    if (hours >= 14 && hours < 18) {
        console.log("time to block");
        const response = await fetch (filePath);
        const settings = await response.json(); 

        websites = Array.isArray(settings) ? settings : (settings.websites || []);
        delay = settings.delay || 0; 
        for (let i = 0; i < websites.length; i++) {
        //blocking mechanism
            const currentsite = websites[i];
            console.log("Blocking", currentsite); 
        }
    }
    else {
        console.log("not time to block");
    } 
} 
