let list = document.getElementById("theList")
// ADDING ITEMS TO START AND END OF LIST
let element = document.createElement("li");
// Get the <ul> element
let text = document.createTextNode("cream");
// ADD NEW ITEM TO END OF LIST
element.appendChild(text);
list.appendChild(element);

element = document.createElement("li");

text = document.createTextNode("spinach");

element.appendChild(text);

// ADD NEW ITEM TO START OF LIST
list.insertBefore(element, list.firstChild);

// All <li> elements
let allListItems = document.getElementsByTagName("li");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let h2 = document.createElement("h2");
let itemCountText = document.createTextNode("Number of Items: " + list.children.length);
h2.appendChild(itemCountText);
document.body.insertBefore(h2, list);