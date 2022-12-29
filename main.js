document.title= "New Title";

let HeaderTitle= document.getElementById("main-header");
let AddItemstag= document.getElementsByClassName("title")[0];
let items= document.getElementsByClassName("list-group-item");

HeaderTitle.style.border="solid 3px Black";
AddItemstag.style.fontWeight="bold";
AddItemstag.style.color="green";
items[2].style.background="green";
for (let i=0; i<items.length; i++){
    items[i].style.fontWeight="bold";
}

let li= document.getElementsByTagName("li");
li[4].style.background="green";
