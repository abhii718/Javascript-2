// what is prototyps in javascript
// Prototypes are the mechanism by which JavaScript objects inherit features from one another. In JavaScript, each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

// function Animal(type) {
//   this.type = type;
// }

// Animal.prototype.makeSound = function () {
//   console.log("Some sound...");
// };

// const dog = new Animal("Dog");
// dog.makeSound(); // Some sound...
// console.log(dog.__proto__ === Animal.prototype); // true

// function Animal(type){
//   this.type=type;
// }

// Animal.prototype.makeSound=function(){
//     console.log("some sounde ...");
// }

// const dog=new Animal("Dog");
// dog.makeSound(); // some sounde ...
// console.log(dog.__proto__===Animal.prototype); // true

// function greet(age, city) {
//   console.log(`Hello, I'm ${this.name}, ${age} years old, from ${city}.`);
// }

// const person = { name: "Abhi" };

// Bind does NOT call the function immediately
// const boundGreet = greet.bind(person, );
// const boundGreet = greet.bind(person, 25, "Delhi");

// Now, we can call `boundGreet()` anytime
// boundGreet(35,"Delhi");

// boundGreet(35)
// Output: Hello, I'm Abhi, 25 years old, from Delhi.

// function sayHello() {
//   console.log(`Hello, my name is ${this.name}`);
// }

// const user = { name: "Abhi" };

// sayHello.call(user);
// sayHello.apply(user);
// const boundFunc = sayHello.bind(user);
// boundFunc();

// function multiply(a, b) {
//   return a * b * this.value;
// }
// const abh = { value : 15 }
// const double = multiply.bind(abh, 2);
// console.log(double(5));

// function Employee(name, salary, department) {
//   this.name = name;
//   this.salary = salary;
//   this.department = department;
//   console.log(`Employee: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`);

// }

// Employee.prototype.getDetails = function () {
//   console.log(
//     `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
//   );
// };

// const emp1 = new Employee("Abhii", 50000, "IT");
// emp1.getDetails(); // Name: Abhi, Salary: 50000, Department: IT

// const emp2 = { name: "Rahul", salary: 30000, department: "Marketing" };
// Employee.call(emp2);
// Employee.apply(emp2);
// Output: Name: Rahul, Salary: 30000, Department: Marketing
// Employee.call(emp2);
// // Output: Employee: Rahul, Age: 30000, Department: Marketing
// const boundDetails = Employee.prototype.getDetails.bind(emp2);
// boundDetails();
// // Output: Name: Rahul, Salary: 30000, Department: Marketing
function Employee() {
  console.log(`Employee: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`);
}

const emp2 = { name: "Rahul", salary: 30000, department: "Marketing" };

// Using call() correctly
Employee.call(emp2); // Output: Employee: Rahul, Salary: 30000, Department: Marketing

// Using apply() correctly (same as call, no extra arguments needed)
Employee.apply(emp2); // Output: Employee: Rahul, Salary: 30000, Department: Marketing

