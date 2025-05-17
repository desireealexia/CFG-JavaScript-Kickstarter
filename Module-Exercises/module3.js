let age = 12;
let message = " ";

// if (age > 18) {
//     message = "Welcome to the website!";
// } else if (age >= 13) {
//     message = "You are allowed to buy limited groceries.";
// } else {
//     message = "You are too young to buy anything.";
// }

// console.log(message);

// Our online shop has updates the rules.
// Customers are now allowed limited access to purchase items if the customer's age is between 12-16 (inclusive) and full access if they are 16 or older

// Create a new Boolean variable called hasParentalConsent
// Adjust the existing else..if block o include the following conditions:
    // If the user is 12 years old, or older, and has parental consent - output: "You are allowed to access the website with parental consent."
    // If the user is 12 years old, or older, and does not have parental consent - output: "You need parental consent to access this website."

let hasParentalConsent = false;

if (age >= 16) {
    message = "Welcome to the website!";
} else if (age >= 12 && hasParentalConsent) {
    message = "You are allowed to access the website with parental consent.";
} else if (age >= 12 && !hasParentalConsent) {
    message = "You need parental consent to access this website."
} else {
    message = "You are too young to buy anything.";
}

console.log(message);