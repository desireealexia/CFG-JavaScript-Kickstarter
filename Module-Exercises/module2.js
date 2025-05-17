// 1. Create a variable called userName and give it the value of a username of your choice.

let userName = "Des123";

// 2. Create a variable called basketTotal to store the total cost of everything in your shopping basket. Give it the value of 100.

let basketTotal = 100;

// 3. console.log() a message that says: "Welcome [userName], your basket is currently at £[basketTotal]. Would you like to check out?"

console.log(`Welcome ${userName}, your basket is currently at £${basketTotal}. Would you like to check out?`);

// 4. Create an array called basketItems to store our items in.

// 5. Store 3 values in the array: ["apple", "eggs", "milk"].

let basketItems = ["apple", "eggs", "milk"];

// 6. Calculate the length of the array using .length.

let basketLength = basketItems.length;

// 7. Output a message to the console stating how many items are in the shopping basket: "You have _ items in your basket."

console.log(`You have ${basketLength} items in your basket`);

// 8. Add another item to the array using .push() and output another message to the console, with the new total.

basketItems.push("pizza");

console.log(`You have ${basketItems.length} items in your basket`);
console.log(basketItems)