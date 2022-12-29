// document.title= "New Title";

// let HeaderTitle= document.getElementById("main-header");
// let AddItemstag= document.getElementsByClassName("title")[0];
// let items= document.getElementsByClassName("list-group-item");

// HeaderTitle.style.border="solid 3px Black";
// AddItemstag.style.fontWeight="bold";
// AddItemstag.style.color="green";
// items[2].style.background="green";
// for (let i=0; i<items.length; i++){
//     items[i].style.fontWeight="bold";
// }

// let li= document.getElementsByTagName("li");
// li[4].style.background="green";

// let secondItem= document.querySelector("li:nth-child(2)")
// secondItem.style.background="green";
// let thirdItem= document.querySelector("li:nth-child(3)")
// thirdItem.style.color="transparent";

let list= document.querySelectorAll("li");
list[1].style.color="green";

let oddlist= document.querySelectorAll("li:nth-child(odd)");
for(let i=0; i<oddlist.length; i++){
    oddlist[i].style.background="green";
}
