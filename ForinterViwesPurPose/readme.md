/\*\*

- JavaScript Readme
-
- JavaScript is a high-level, interpreted programming language primarily used for creating interactive and dynamic content on websites. It is commonly used for client-side development, enabling functionalities such as user interactions, form validations, animations, and dynamic content updates without requiring a page reload.
-
- Key features of JavaScript include:
- - Interactivity: JavaScript allows for dynamic interaction with website elements, such as clicking buttons, input validation, and updating content.
- - Client-Side Execution: It runs directly in the web browser, enabling quick feedback to user actions without needing to communicate with the server.
- - Versatility: JavaScript is not limited to web browsers; it can also be used for server-side programming (Node.js), mobile app development (React Native), and even desktop applications (Electron).
- - Asynchronous Programming: JavaScript supports asynchronous operations through features like callbacks, promises, and async/await, facilitating non-blocking code execution.
- - Cross-Platform Compatibility: JavaScript is supported by all major web browsers and can be used across different operating systems.
-
- JavaScript supports several data types, including:
- - Primitive Data Types: such as numbers, strings, booleans, null, and undefined.
- - Complex Data Types: such as objects and functions.
-
- In JavaScript, the == operator is the equality operator, which performs type coercion if the operands are of different types before comparing their values. On the other hand, the === operator is the strict equality operator, which does not perform type coercion and checks both the value and the type of the operands. For example:
- - 0 == false is true because false is coerced to 0.
- - 0 === false is false because they are of different types.
-
- In JavaScript, null represents the intentional absence of any object value, while undefined represents the lack of a defined value. Specifically:
- - null is explicitly assigned by a programmer to indicate no value or absence of an object.
- - undefined typically indicates a variable that has been declared but has not been assigned a value, or the value of a non-existent property.
- - null is a primitive value, while undefined is a type that has only one value, which is undefined.
    \*/

# JavaScript Concepts Overview

## Closure in JavaScript:

A closure is a combination of a function and the lexical environment within which that function was declared. This allows the function to retain access to variables from its containing scope even after the scope has closed. Essentially, a closure allows a function to maintain access to the variables of its parent function even after the parent function has finished executing.

#### Example:

```javascript
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: I am from outer function
```

## Hoisting in JavaScript:

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed. This means that regardless of where variables and functions are declared, they are available for use throughout the scope in which they are defined.

#### Example:

```javascript
console.log(x); // Output: undefined
var x = 5;
```

## Purpose of the `this` Keyword in JavaScript:

In JavaScript, the `this` keyword refers to the object that is currently executing the code. The value of `this` is determined by how a function is called, rather than where the function is declared. It allows functions to operate on different contexts based on how they are invoked.

The purpose of `this` is to provide a convenient way to access and manipulate properties of the object that the function is bound to, without explicitly referring to the object's name.

#### Example:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // Output: John Doe
```

## Understanding the `this` Keyword in JavaScript

In JavaScript, the `this` keyword is a special identifier that refers to the execution context of a function. It plays a crucial role in determining how functions behave and interact with objects and contexts. Below are some of the main use cases of the `this` keyword:

### 1. Method Invocation

When a function is invoked as a method of an object, `this` refers to the object itself. This allows methods to access and manipulate the properties of the object they are called on.

```javascript
const person = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Output: Hello, John
```

## ProtoTypes

```javascript
//prototypes
let a = {
  aname: "abhi",
  language: "Javascript",
  run: () => {
    alert("self run");
  },
};

console.log(a);

let p = {
  run: () => {
    alert("running");
  },
};

p.__proto__ = {
  name: "abhii",
};

a.__proto__ = p;
// a.run()
console.log(a.name);

// a.toLocaleString
// ƒ toLocaleString() { [native code] }
// a.toString()
// '[object Object]'
// a.valueOf
// ƒ valueOf() { [native code] }
// a.valueOf()
// {aname: 'abhi', language: 'Javascript'}
```

## Difference between `let`, `const`, and `var` in JavaScript

In JavaScript, `let`, `const`, and `var` are used to declare variables, but they have different behaviors and scopes.

### `var`, `let` `const` Example:

```javascript
var x = 10;
{
  var x = 20;
}
console.log(x); // Output: 20
let y = 10;
{
  let y = 20;
}
console.log(y); // Output: 10
const z = 10;
{
  const z = 20;
}
console.log(z); // Output: 10
```

## Function declaration vs function expression:

```javascript
// Function expression assigned to a const variable
// function greet() {
//     console.log('Hello!');
// };
// Calling the function
greet(); // Output: Hello!'
function greet() {
  console.log("Hello!");
}

// Another function expression assigned to a const variable
const sayBye = function () {
  console.log("Goodbye!");
};

// Calling the function
sayBye(); // Output: Goodbye!
```

## Declaring Functions in JavaScript and Different Ways to Define a Function

```js
// Function Declaration:

function myFunction() {
  // Function body
}

// Function Expression:

const myFunction = function () {
  // Function body
};

// Arrow Function Expression (ES6+):

const myFunction = () => {
  // Function body
};

// Named Function Expression:

const myFunction = function anotherFunctionName() {
  // Function body
};

// Constructor Function:

const myFunction = function anotherFunctionName() {
  // Function body
};

// Method Definition in Object Literal:

const myObject = {
  myMethod() {
    // Method body
  },
};
```
