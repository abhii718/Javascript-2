sayHello();  // ✅ "Hello!"
function sayHello() {
  console.log("Hello!");
}
sayHello();  // ✅ "Hello!"

goodbye();  // ❌ TypeError: goodbye is not a function
var goodbye = function() {
  console.log("Goodbye!");
};
goodbye();  // ✅ "Goodbye!"
