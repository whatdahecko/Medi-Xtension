const addForm = document.getElementById("add-form");
const websiteinput = document.getElementById("new-site");
const container = document.getElementById("blocklist-container");
const blocklist = [];
//this displays inputs
function renderBlockList() {
    container.innerHTML = "     ";    
    blocklist.forEach((site) => {
        const p = document.createElement("p");
        p.textContent = site;
        container.appendChild(p);
    }); 
}
//this saves input
addForm.addEventListener("submit", async (e) => {
    //need to save to default storage
    e.preventDefault();
    const site = websiteinput.value;
    blocklist.push(site);
    websiteinput.value = ""; 
    console.log("Saved: ", blocklist);     
    renderBlockList();
    console.log("ran renderblock list function")
}); 
