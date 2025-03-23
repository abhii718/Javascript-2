// What is this
// this is the object that the function is a property of or is referred to by. In other words, this is the object that the function is called on.

const obj = {
  name: "Abhi",
  show() {
    console.log(this.name);
  },
};

obj.show(); // Abhi
const show = obj.show;

show(); // undefined
// The show function is called without an object, so this is undefined. In strict mode, this would throw an error.
//
// To fix this, you can use the bind method to bind the this value to the object:
//
// const show = obj.show.bind(obj);
// show(); // Abhi



// What is Call()
// The call() method calls a function with a given this value and arguments provided individually.

function introduce() {
  console.log(`Hello, I am ${this.name}`);
}

const user = { name: "Abhi" };
introduce.call(user); // Hello, I am Abhi
// The call method is used to call the introduce function with the user object as the this value. The call method can also be used to pass arguments to the function:



//what is apply()
// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

function sayHello(greeting) {
  console.log(`${greeting}, I am ${this.name}`);
}

sayHello.apply(user, ["Hi"]); // Hi, I am Abhi


// function greet(age, city) {
//     console.log(`Hello, I'm ${this.name}, ${age} years old, from ${city}.`);
// }

// const person = { name: "Abhi" };

// // Using apply() to call greet function
// greet.apply(person, [25, "Delhi"]);

// Output: Hello, I'm Abhi, 25 years old, from Delhi.


// The apply method is similar to the call method, but it takes an array of arguments instead of individual arguments.



// What is bind()
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
const boundFunc = introduce.bind(user);
boundFunc(); // Hello, I am Abhi
// The bind method creates a new function that has the this value set to the user object. The new function can be called later with the correct this value.


function greet(age) {
    console.log(`Hello, I'm ${this.name} from ${this.village} and I'm ${age} years old.`);
}

const person = { name: "Abhi" , village: "Delhi"};
greet.call(person, 25); // Immediately calls greet() with `this` set to person
// Output: Hello, I'm Abhi and I'm 25 years old.
