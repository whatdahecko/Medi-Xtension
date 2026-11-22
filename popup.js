const addForm = document.getElementById("add-form");
const websiteinput = document.getElementById("new-site");
const container = document.getElementById("blocklist-container");
let blocklist = [];
function formatsite(input) {
    let str = input.trim().toLowerCase();
    if (!str) return null;
    if(!str.includes("://")) str = "https://" + str; 

    try {
        const { hostname } = new URL(str); 
        if(!hostname.includes(".") || hostname.endsWith(".")) return null;
        return hostname.startsWith("www.") ? hostname: "www." + hostname;
    }
    catch { 
        return null;
    }
}
//this displays inputs
function renderBlockList() {
    container.innerHTML = " ";    
    blocklist.forEach((formattedsite) => {
        const p = document.createElement("p");
        p.textContent = formattedsite;
        container.appendChild(p);
    }); 
}
async function loadBlockList() {
    const data = await browser.storage.local.get("blocklist");
    blocklist = data.blocklist || [];
    renderBlockList();
}
//this saves input
addForm.addEventListener("submit", async (e) => {
    //need to save to default storage
    e.preventDefault();
    const formattedsite = formatsite(websiteinput.value);
    if (formattedsite && !blocklist.includes(formattedsite)) { 
        blocklist.push(formattedsite);
        await browser.storage.local.set({blocklist});
        websiteinput.value = " ";
        renderBlockList();  
    }
}); 
loadBlockList();