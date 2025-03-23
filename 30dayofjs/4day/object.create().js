// let personPrototype = {
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// let person1 = Object.create(personPrototype);
// let person2 = Object.create(personPrototype);
// person1.name = "Abhi";
// person1.greet(); // Hello, my name is Abhi
// person2.name = "John";
// person2.greet(); // Hello, my name is John

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new Person("Abhi", 24);
// console.log(user1.name); // Abhi
// console.log(user1.age); // 24

//* 3. ES6 Classes (Syntactic Sugar over Constructor Functions)
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// const user2 = new Person("Abhi", 24);
// user2.greet(); // Hello, I am Abhi
// console.log(user2.name); // Abhi
 