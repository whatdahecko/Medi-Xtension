const addForm = document.getElementById("add-form");
const websiteinput = document.getElementById("new-site");
const container = document.getElementById("blocklist-container");
const blocklist = JSON.parse(localStorage.getItem("blocklist")) || [];
//stolen from github to check if input is a site
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
//implements stolen gitub regex code
function isSite(input) {
    if(typeof input !== 'string') return false; 
    return isitasite.test(input.trim());
}
//this saves input
addForm.addEventListener("submit", async (e) => {
    //need to save to default storage
    e.preventDefault();
    const site = websiteinput.value;
    if (isSite(site)) {
        blocklist.push(site);
        localStorage.setItem("blocklist", JSON.stringify(blocklist));
        websiteinput.value = ""; 
        console.log("Saved: ", blocklist);     
        renderBlockList();  
    }
}); 
renderBlockList();
module.exports = {blocklist};