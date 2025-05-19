// 1. Create an array of three grocery items (butter, eggs and sugar)

// 2. Using a for loop, console.log() each item in the array

// 3. Number the items so the output looks like this:
// "1. Butter"
// "2. Eggs"
// "3. Sugar"

let shoppingList = ["Butter", "Eggs", "Sugar"];

for (i = 0; i < shoppingList.length; i++) {
    let message = `${i +1}. ${shoppingList[i]}`;
    console.log(message);
}

// Write a program to help us budget money for this month's grocery shop, using a while loop.

// 4. Create three number variables:
// budget - set to 0
// goal - set it to a savings goal of 400
// weeklySavings - set it to 100

// 5. Create a while loop

// 6. The loop should run if the value of budget is less than the value of the goal

// 7. Each time the loop runs, add the weeklySavings value to the current budget

// 8. Each time the loop runs, print out: "Current budget: £", including the budget variable

let budget = 0;
let goal = 400;
let weeklySavings = 100;

while (budget < goal) {
    budget = weeklySavings + budget;
    let currentBudget = `Current budget: £${budget}`;
    console.log(currentBudget);
}