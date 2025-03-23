//call stack
// A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions.
function first() {
  console.log("First");
  second();
}
function second() {
  console.log("Second");
}
first();
// Output: First → Second
