// Modify the paragraph element:
// Find the paragraph element
// Store the element to modify in a variable
// Change the text of the paragraph to: "Get your fresh groceries here!"

let promoParagraph = document.getElementById("promo");

promoParagraph.textContent = "Get your fresh groceries here!";

// Create a new HTML element and modify the text to say: "Fresh produce delivered daily!"

let newElement = document.createElement("p");

newElement.textContent = "Fresh produce delivered daily!";

// Append (add) it to the body of the website.

document.body.appendChild(newElement);