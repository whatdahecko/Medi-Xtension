//get add form element
const addForm = document.getElementById("add-form");
const websiteinput = document.getElementById("new-site")
const blocklist = [];
addForm.addEventListener("submit", async (e) => {
    //add a way to get data from textbox and save in blocklist.txt or in browser local storage
    const site = websiteinput.value;
    blocklist.push(site);
    websiteinput.value = "";
    console.log("Saved: ", blocklist);
});