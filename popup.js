const addForm = document.getElementById("add-form");
const websiteinput = document.getElementById("new-site");
const container = document.getElementById("blocklist-container");
const blocklist = [];
const LINK_DETECTION_REGEX = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi
const isitasite = new RegExp(`^(?:${LINK_DETECTION_REGEX.source})$`, 'i')
//this displays inputs
function renderBlockList() {
    container.innerHTML = "     ";    
    blocklist.forEach((site) => {
        const p = document.createElement("p");
        p.textContent = site;
        container.appendChild(p);
    }); 
}
function isSite() {
    if(typeof input != 'string') return false; 
    return isitasite.test(input.trim());
}
//this saves input
addForm.addEventListener("submit", async (e) => {
    //need to save to default storage
    e.preventDefault();
    const site = websiteinput.value;
    if(isSite(site) = true) {
        blocklist.push(site);
        websiteinput.value = ""; 
        console.log("Saved: ", blocklist);     
        renderBlockList();  
    }
}); 
