const prompt = require( "prompt-sync")();

// user input//

const num = prompt("Input a number 1-7 to get a corresponding day of the week: ");

const day = Number(num); 

// if statements//

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} else   {
    console.log("ERROR");
}

