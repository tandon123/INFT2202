//Name: Saksham Tandon
//File: list.js
//Description: We are adding 2 new items to the given list and making it worth it.
//Date: 25th jan 2024

// Get the <ul> element with id "theList"
let list = document.getElementById("theList");

// Create a new list item element
let element = document.createElement("li");

// Create a text node with the content "cream"
let text = document.createTextNode("cream");

// Add the text node to the list item element
element.appendChild(text);

// Add the list item element to the end of the list
list.appendChild(element);

// Create another list item element
element = document.createElement("li");

// Create a text node with the content "spinach"
text = document.createTextNode("spinach");

document.getElementsById
// Add the text node to the second list item element
element.appendChild(text);

// Add the second list item element to the start of the list
list.insertBefore(element, list.firstChild);

// Get all <li> elements in the document
let allListItems = document.getElementsByTagName("li");

// Add a class "cool" to all <li> elements
for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].classList.add("cool");
}

// Create an <h2> element
let h2 = document.createElement("h2");

// Create a text node with the content "Number of Items: " + number of child elements in the list
let itemCountText = document.createTextNode("Number of Items: " + list.children.length);

// Add the text node to the <h2> element
h2.appendChild(itemCountText);

// Insert the <h2> element before the list in the body of the document
document.body.insertBefore(h2, list);
