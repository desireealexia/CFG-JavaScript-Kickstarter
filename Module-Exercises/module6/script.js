// Modify the button element:
// Find the button element
// Store the element to modify in a variable
// Add an event listener to the button, to reduce the stock by one each time it is pressed

let stockButton = document.getElementById("stockButton");
let stockParagraph = document.getElementById("stockParagraph");

let stockCount = 10;

stockButton.addEventListener("click", function() {
    stockCount = stockCount -1;
    stockParagraph.textContent = `Stock: ${stockCount}`;

    // Create a new HTML element and modify the text to say: "Out of stock" and style it to be in red

    let newElement = document.createElement("p");
    newElement.textContent = "Out of stock";
    newElement.style.color = "red";

    // Append (add) it to the body of the webpage when the stock falls to 0

    if (stockCount == 0) {
        document.body.appendChild(newElement);
        stockButton.disabled = true;
    }
});