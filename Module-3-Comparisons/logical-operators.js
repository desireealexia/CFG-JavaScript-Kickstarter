const isSunny = true;
const isWarm = false;

// && (AND)

console.log(isSunny && isWarm);

// || (OR)

console.log(isSunny || isWarm);

// ! (NOT)

console.log(isSunny);
console.log(!isSunny);

// Example
const response = "Yes";

if (response == "yes" || response == "Yes") {
    console.log("Well done, you have completed your todo list!");
} else {
    console.log("Uh oh, you still have some items to do.");
}