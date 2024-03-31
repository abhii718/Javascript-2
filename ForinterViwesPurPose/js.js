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
