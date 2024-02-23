// console.log("I'm a exernal file");

// var myName = "Abhi babu";
// var _a = "BCA (Bacholar of Computer Application)";
// console.log(_a, myName);

// var myAge = 22;
// console.log()
// //* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
// var myname="abhii"
// console.log(myname)

//? Boolean: Represents a logical entity with two values: true or false.
// Example:
// var isRaining = true;
// console.log(isRaining)

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
// var vinod;
// console.log(vinod)

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
// var badMemoreis = null;
// console.log(badMemoreis)

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓

//  ans // undefined meand not defind yet and null means a empty box and have't open yet

//? 2: What is the purpose of typeof operator in JavaScript❓

// var aname = "1";
// var aname = 1;
// console.log(aname);
// console.log(typeof aname);
// console.log(aaname);
// console.log(typeof aaname);

//? 3: What is the result of `typeof null` in JavaScript❓
// var aaname = null;

//? 4: What are primitive data types in JavaScript❓

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:
// var myFavNum = "10";
// console.log(typeof +myFavNum);
// console.log(typeof Number(myFavNum));

//? 6: Convert a number to a string?
// We just need to add an empty string after the number
// Example:
// let myFavNum= 10;
// console.log(typeof (myFavNum.toString()))
// console.log(typeof String(myFavNum))
// console.log(typeof (myFavNum + ""))

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.
/* In JavaScript, there are certain values that evaluate as true when used in a conditional statement. These

//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement. */
// var myName = "name";
// if (myName) {
//   console.log("this is true value");
// } else {
//   console.log("its a false value");
// }

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
// console.log(parseInt("123"));
// // 123 (default base-10)
// console.log(parseInt("123", 10));
// // 123 (explicitly specify base-10)
// console.log(parseInt("   123 "));
// // 123 (whitespace is ignored)
// console.log(parseInt("077"));
// // 77 (leading zeros are ignored)
// console.log(parseInt("1.9"));
// 1 (decimal part is truncated)

// When we will not get an Output
// console.log(parseInt("&123"));
// console.log(parseInt("-123"));
// console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript❓
// if (NaN == NaN) {
//   console.log("both are equal");
// } else {
//   console.log("both are not equal");
// }

//* ========== parseInt & parseFloat End Section ==========
