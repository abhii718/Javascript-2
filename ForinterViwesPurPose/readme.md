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

## Difference Between Asynchronous and Synchronous Programming

#### Synchronous Programming:

- Tasks are executed one after the other, in sequence.
- Each task waits for the previous one to complete.
- Blocking behavior: If a task takes a long time, it blocks subsequent tasks.
- Example: Traditional procedural programming languages like C.

#### Asynchronous Programming:

- Tasks can execute concurrently or independently of each other.
- Tasks can start and complete independently, without waiting for others to finish.
- Non-blocking behavior: If a task takes a long time, the program can continue executing other tasks.
- Example: JavaScript, where asynchronous operations like fetching data or reading files are common.

## Creating and Manipulating Arrays in JavaScript

### Creating Arrays:

```javascript
const array1 = [1, 2, 3]; // Array literal
const array2 = new Array(4, 5, 6); // Array constructor
```

```js
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");

// Remove elements
fruits.pop();
fruits.shift();

// Modify elements
fruits[1] = "pear";

console.log(fruits); // Output: ['banana', 'pear']
```

## Array

- `length` property: The number of elements in an array. Read only.
- `indexOf()` method: Returns the first index at which a given element appears in an array. It returns -1 if the element is not
- `lastIndexOf()` method: Returns the last index at which a given element appears in an array.

- `includes()` method: Determines whether an array contains a specified element.
- `concat()` method: Combines two or more arrays.
- `join()` method: Joins all elements of an array into a string.
- `split()` method: Splits a string into an array of substrings.
- Sorting methods (`sort()`, `reverse()`): Mutates the original array.
  - `sort((a, b) => a - b)` sorts numbers in ascending order.
  - `sort((a, b) => b - a)` sorts numbers in descending order.

#### Loop in Array

- forEach(), for...of loops, and map() are commonly used when you want to execute a function for each item in an array:

```js
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); //for each item in array log to console
}
// Or using for...of loop
for (const value of array) {
  console.log(value); //for each item in array log to console
}

//  Using forEach() method
const array = [1, 2, 3, 4, 5];
array.forEach((item) => {
  console.log(item); //for each item in array log to console
});

// Using map() method
const array = [1, 2, 3, 4, 5];
const doubledArray = array.map((item) => item * 2);
```

#### Using map()

- The map() method creates a new array by applying a function to each element of the original array.
- It does not modify the original array; instead, it returns a new array with the results of applying the function to each element.
- The length of the new array is the same as the original array.
- Useful for transforming each element of an array into something else.

```js
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]
```

#### Using filter()

- he filter() method creates a new array with all elements that pass a test implemented by the provided function.
- It does not modify the original array; instead, it returns a new array with elements that satisfy the condition.
- The length of the new array may be different from the original array, depending on the number of elements that pass the test.
- Useful for filtering out elements based on a condition.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

#### Using reduce()

- The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
- It does not modify the original array; instead, it returns a single value that is the result of the reduction.
- The reducer function takes four arguments: accumulator, currentValue, currentIndex, and array.
- The accumulator stores the accumulated value, which is returned in the end.
- Useful for aggregating values or performing calculations on array elements.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

## Lexical this Binding in Arrow Functions:

- Arrow functions do not have their own `this` context.
- Instead, they inherit the `this` value from the enclosing lexical context, which is the context in which the arrow function is defined.
- This means that the value of `this` inside an arrow function is determined by the value of `this` in the surrounding code where the arrow function is declared.
- Arrow functions do not bind their own `this` context, so they always retain the `this` value of the enclosing scope.
- This behavior makes arrow functions particularly useful when working with callbacks, event handlers, or methods defined within objects, where the context of `this` needs to be preserved.

### Dynamic this Binding in Regular Functions:

- Regular functions, on the other hand, have their own `this` context.
- The value of `this` inside a regular function is determined dynamically based on how the function is called.
- The value of `this` can change depending on the context in which the function is invoked.
- It can be explicitly set using methods like `call()`, `apply()`, or `bind()`, or it can be implicitly determined by the object on which the function is called (in the case of object methods).
- The value of `this` in regular functions can be unpredictable and may lead to unexpected behavior, especially in complex or nested function calls.

#### Example:

```javascript
const obj = {
  name: "John",
  greetArrow: () => {
    console.log(`Hello, ${this.name}!`);
  },
  greetRegular: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greetArrow(); // Output: "Hello, undefined!"
obj.greetRegular(); // Output: "Hello, John!"
```

### Regular Function vs Arrow Function

```js
// Arrow function
const greet = (name) => `Hello, ${name}!`;

// Regular function
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Arrow Functino vs Regular Function

```js
// Arrow function with rest parameters
const sum = (...args) => {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
};

console.log(sum(1, 2, 3)); // Output: 6

// Regular function accessing arguments object
function product() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

console.log(product(2, 3, 4)); // Output: 24
```

## Lexical Scope

- Lexical scope refers to the set of rules used by the JavaScript engine to determine where variables and functions are accessible within the code based on its physical structure.

```js
// Lexical Scope Example
function outerFunction() {
  const outerVariable = "I am in the outer function";

  function innerFunction() {
    console.log(outerVariable); // Access outerVariable from the outer scope
  }

  innerFunction(); // Call inner function
}

outerFunction(); // Call outer function
```

## Closure

- A closure is a function that retains access to variables from its parent scope even after the parent function has finished executing.

```js
// Closure Example
function createCounter() {
  let count = 0; // Variable count is within the scope of createCounter

  return function () {
    return count++; // Inner function retains access to count via closure
  };
}

const counter = createCounter(); // Create a counter function
console.log(counter()); // Output: 0
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
console.log(counter()); // Output: 4
```

## Event Loop

- How Does the Event Loop Work?

### Call Stack:

- JavaScript code execution starts with the call stack, a data structure tracking function calls.
- Functions are added to the stack when called and removed when completed.

### Asynchronous Tasks:

- Asynchronous tasks like setTimeout, DOM events, AJAX requests are handled separately.
- They're offloaded to Web APIs and processed outside the main thread.
- After completion, corresponding events are placed in the event queue.

### Event Queue:

- The event queue holds tasks ready to be processed by the JavaScript runtime.
- The event loop continuously monitors the call stack and the event queue.

### Event Loop:

- A continuous process running in the background.
- If the call stack is empty, it checks the event queue for pending tasks.
- Tasks in the event queue are moved to the call stack for execution.

## Work with JSON data in JavaScript

### Parsing JSON Data:

#### Example

```js
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John
console.log(jsonObject.age); // Output: 30
```

### Serializing JavaScript Objects to JSON

#### Example

```js
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: {"name":"John","age":30}
```

### Accessing JSON Properties

- Once parsed, you can access properties of the JavaScript object as usual.

#### Example

```js
const jsonObject = JSON.parse('{"name": "John", "age": 30}');
console.log(jsonObject.name); // Output: John
console.log(jsonObject.age); // Output: 30
```

### Iterating Over JSON Objects

- Iterate over properties of a JSON object using for...in loop or Object.keys(), Object.values(), or Object.entries() methods.

#### Example

```js
const jsonObject = JSON.parse('{"name": "John", "age": 30}');
for (const key in jsonObject) {
  console.log(`${key}: ${jsonObject[key]}`);
}
```

### Handling Errors:

- When parsing JSON strings, handle errors using try...catch to handle invalid JSON data.

#### Example

```js
try {
  const jsonObject = JSON.parse("invalid json");
  console.log(jsonObject);
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}
```

## Null, undefined, NaN, and 0

- null represents the intentional absence of any object value. It is often used to indicate that a variable or object property has no value or that a function deliberately returns no value.

- undefined indicates a variable that has been declared but has not been assigned a value. It is also the default value for uninitialized variables and the return value of functions that do not explicitly return a value.

- 0 is a numeric value representing the number zero. It is a falsy value in JavaScript, meaning it is considered false in Boolean contexts.

- NaN represents a value that is "not a number." It is returned when a mathematical operation cannot produce a meaningful result, such as dividing by zero or attempting to perform arithmetic with non-numeric values.

```js
let variable = null; // Variable intentionally set to null

let variable; // Variable declared but not assigned a value (implicitly undefined)
console.log(variable); // Output: undefined

let num = 0; // Variable assigned the numeric value 0

console.log(10 / "apple"); // Output: NaN (attempting to divide by a non-numeric value)
```
