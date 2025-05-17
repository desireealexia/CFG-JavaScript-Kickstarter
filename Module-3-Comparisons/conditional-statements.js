// if..else

const response = "yes"; // saying yes to the question of 'have you completed your todo list?

if (response == "yes") {
    console.log("Well done, you have completed your todo list!");
} else {
    console.log("Uh oh, you still have some items to do.");
}

// if...else (multiple options)

// hot day = 30+
// warm day = 20+
// cool day = 10+
// otherwise cold day

let temperature = 30;

if (temperature > 30) {
    console.log("It's a hot day");
} else if (temperature > 20) {
    console.log("It's a warm day");
} else if (temperature > 10) {
    console.log("It's a cool day");
} else {
    console.log("It's a cold day");
}