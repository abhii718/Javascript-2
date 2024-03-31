# JavaScript Concepts Overview

## What is javascript

JavaScript is a high-level, interpreted programming language primarily used for creating interactive and dynamic content on websites. It enables functionalities such as user interactions, form validations, animations, and dynamic content updates without page reloads.

## Key Features:

- Interactivity: Allows dynamic interaction with website elements.
- Client-Side Execution: Runs directly in the web browser for quick feedback to user actions.
- Versatility: Used for server-side programming (Node.js), mobile app development (React Native), and desktop applications (Electron).
- Asynchronous Programming: Supports non-blocking code execution through callbacks, promises, and async/await.
- Cross-Platform Compatibility: Supported by major web browsers and across different operating systems.

## Data Types:

- Primitive Data Types: Numbers, strings, booleans, null, and undefined.
- Complex Data Types: Objects and functions.

## Operators:

- `==` performs type coercion, while `===` is the strict equality operator.
  - Example: `0 == false` is true, but `0 === false` is false.

## Null vs Undefined:

- null represents intentional absence of value.
- undefined indicates lack of defined value.
  - null is a primitive value, while undefined is a type with a single value.

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

#### Example

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

#### Example

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

#### Example

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

#### Example

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

#### Example

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

## Callback Functions

- A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action or operation. Callback functions are commonly used in asynchronous programming to handle tasks that depend on the completion of other tasks.

#### Example

```js
// Example of a function with a callback
function doSomethingAsync(callback) {
  setTimeout(function () {
    console.log("Task completed asynchronously");
    // Invoke the callback function
    callback();
  }, 2000);
}

// Define the callback function
function callbackFunction() {
  console.log("Callback function executed");
}

// Call the function with the callback
doSomethingAsync(callbackFunction);
```

## Error Handling in JavaScript

- In JavaScript, errors can be handled using try-catch blocks, which allow you to catch and handle exceptions that occur within a block of code.

#### Example

```js
try {
  // Code that might throw an error
  throw new Error("This is an error message");
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
} finally {
  // Optional: Code that will always execute, regardless of whether an error occurred or not
  console.log("Finally block executed");
}
```

## Event Delegation in JavaScript

- Event delegation is a technique where a single event listener is attached to a parent element to handle events for all of its children. This is useful for dynamically added elements or when you have many elements with the same event handling logic.

#### HTML

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### JAVASCIPT

```js
document.getElementById("myList").addEventListener("click", function (event) {
  console.log(event.target.tagName); //'LI'
  console.log(event.target.textContent); //Item .
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});
```

## Promises in JavaScript

- Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner alternative to callback-based asynchronous code, making it easier to manage asynchronous operations and handle their results.

#### Example

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((users) => {
    const userDataDiv = document.getElementById("userData");
    users.forEach((user) => {
      userDataDiv.innerHTML += `<p>User name: ${user.name}</p>`;
    });
    // Process the fetched data here
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```
