// Hoisting & Scope 

console.log(x);  // undefined
var x = 10;

hoistFunc();  // Works!
function hoistFunc() {
  console.log("Hoisted!");
}
