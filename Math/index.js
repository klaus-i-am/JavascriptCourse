// Math = built-in object that provides a collection of properties and methods 

// let x = 3;
// let y = 2;
// let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// z = Math.max(x, y, z);
// z = Math.min(x, y, z);
// console.log(z);

// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

// let age = 15; 
// let isHuman = true;

// if (age >= 18) {
//     console.log("Are you 18 years old?");
// } else {
//     console.log("Nah..fam, you must be 18+ years old to enter!");
//     console.log("Back to the lobby!");
// }

// if (isHuman) {
//     console.log("You are Human!");
// } else {
//     console.log("W-what are you?!");
// }

// .checked -> for radio buttons, evaluates true or false.


// /* Switches */ ========

// let choice = "yes";

// switch(choice) {
//     case "yes": 
//         console.log("Great!");
//         break;
//     case "no": 
//         console.log("Too bad!");
//     default: 
//         console.log(`${choice} is not a choice!`);
//         break;
// }

// String methods = allow you to manipulate and work with text (strings)
    // .repeat(), .toUpperCase(), .replaceAll(), .slice(start, end), 


// let userName = " Klaus";

// let result = userName.padStart(15, "=");

// console.log(result);

// ========= Logical Operators ==========
// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator 
// !== strict inequality operator

// ==== Loops =====

// while loop
// continuous loop

// let isOnline = true;

// while(isOnline) {
//     console.log("User online!");
//     isOnline = false;
//     console.log(isOnline);
// }
// example could be a "log in" screen.


// ===== for loop =====
// limited loop = discrete
 
// for (let i = 0; i < 10; i++) {
//     console.log(`Slime defeated! +${i + 1}exp gained!`);
// }

// ==== Functions ====

// let name = "Klaus";

// function greetings(name) {
//     console.log(`Hello, ${name}!`);
// }
// greetings(name);


// ==== Arrays ====

// let numbers = [1,2,3,4,5,6];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// === Spread operator ====
// spread operator = "..." allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements -> items in the array). ~ Imagine opening a box and taking out what's inside then you can do whatever you want with it.

// let numbers = [1,2,3,4,5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log(max);
// console.log(min);

// let username = "klaus";
// let letters = [...username];
// // makes "klaus" -> ['k','l','a','u','s']

// // join them back together
// let letter = [...username].join('-');

// console.log(letter);