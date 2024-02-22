//* ============================
//* Data Types Section - part 2
//* ============================

//* Concatenation in JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

// const str = "Hello " + "World";
// console.log(str); // Output: Hello World

//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

// let sum = "5" + 10; // Implicit coercion: "5" is converted to a number before addition
// console.log(sum); // Output: 15

// let sum = "5" - 10; // Implicit coercion: "5" is converted to a number before subtraction
// console.log(sum); // Output: -5

// let sum = " " + 0; // Implicit coercion: " " is converted to a number before addition
// console.log(typeof sum); // Output: number

// let sum = "vinod" - "thapa"; // Implicit coercion: both strings are converted to numbers before subtraction
// console.log(sum); // Output: NaN (Not a Number)

// let sum = true + true; // Implicit coercion: true is converted to a number (1) before addition
// console.log(sum); // Output: 2

// let sum = true + false; // Implicit coercion: true is converted to a number (1) before addition, false is converted to a number (0) before addition
// console.log(sum); // Output: 1

// let sum = false + true; // Implicit coercion: false is converted to a number (0)