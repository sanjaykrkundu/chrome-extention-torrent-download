chrome.contextMenus.create({
    "title": "Test parent item",
    "contexts":["link"],
    onclick : dosomething 
});

function dosomething(e){
    console.log(e);
    alert(JSON.stringify(e));
}