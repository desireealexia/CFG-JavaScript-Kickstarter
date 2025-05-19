// Creating and adding new HTML elements

const newHeader = document.createElement("h2");

newHeader.textContent = "This is our header 2";

document.body.appendChild(newHeader);

// Removing HTML elements
const elementToRemove = document.getElementById("remove-element");
elementToRemove.remove();

// Modifying HTML elements 

const changeText = document.getElementById("change-text");
const hideText = document.getElementById("hide-text");

changeText.textContent = "This paragraph has been changed";
hideText.remove();