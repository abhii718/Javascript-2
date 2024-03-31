// //prototypes
// let a = {
//   aname: "abhi",
//   language: "Javascript",
//   run: () => {
//     alert("self run");
//   },
// };

// console.log(a);

// let p = {
//   run: () => {
//     alert("running");
//   },
// };

// p.__proto__ = {
//   name: "abhii",
// };

// a.__proto__ = p;
// // a.run()
// console.log(a.name);

// JavaScript
// const outer = document.getElementById('outer');
// const middle = document.getElementById('middle');
// const inner = document.getElementById('inner');

// Event Bubbling Example
// inner.addEventListener('click', function() {
//     console.log('Inner element clicked');
// });

// outer.addEventListener('click', function() {
//     console.log('Outer element clicked');
// });
// middle.addEventListener('click', function() {
//     console.log('Middle element clicked');
// });

// Event Capturing Example

// outer.addEventListener('click', function(event) {
//     console.log('Outer element clicked during capturing');

// }, 1);

// middle.addEventListener('click', function(event) {
//     console.log('Middle element clicked during capturing');
//     event.stopPropagation();
// }, 1);

// inner.addEventListener('click', function() {
//     console.log('Inner element clicked during capturing');

// }, 1);

// function greet() {
//   console.log("Hello!");
// }
// Calling the function
// greet(); // Output: Hello!'
// function greet() {
//     console.log('Hello!');
// };

// Example of a function with a callback
// function doSomethingAsync(callback) {
//     setTimeout(function() {
//         console.log("Task completed asynchronously");
//         // Invoke the callback function
//         callback();
//     }, 2000);
// }

// // Define the callback function
// function callbackFunction() {
//     console.log("Callback function executed");
// }

// // Call the function with the callback
// doSomethingAsync(callbackFunction);

// Error Handeling
// try {
//     // Attempting to parse an invalid JSON string
//     const invalidJSON = '{ "name": "John", age: 30 }';
//     const parsedData = JSON.parse(invalidJSON);
//     console.log(parsedData);
// } catch (error) {
//     // Handling the error
//     console.error('An error occurred while parsing JSON:', error.message);
// } finally {
//     // Optional: Code that will always execute, regardless of whether an error occurred or not
//     console.log('Finally block executed');
// }

// document.getElementById('myList').addEventListener('click', function(event) {
//     console.log(event.target.tagName)//'LI'
//     console.log(event.target.textContent)//Item .
//     if (event.target.tagName === 'LI') {
//         console.log('Clicked on:', event.target.textContent);
//     }
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((users) => {
//     const userDataDiv = document.getElementById("userData");
//     users.forEach((user) => {
//       userDataDiv.innerHTML += `<p>User name: ${user.name}</p>`;
//     });
//     // Process the fetched data here
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });


// Closure Example
function createCounter() {
    let count = 0; // Variable count is within the scope of createCounter
  
    return function() {
      return count++; // Inner function retains access to count via closure
    };
  }
  
  const counter = createCounter(); // Create a counter function
  console.log(counter()); // Output: 0
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  console.log(counter()); // Output: 4
  