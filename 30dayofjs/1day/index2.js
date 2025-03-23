let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (Primitive Type - Copy of Value)

let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Doe";
console.log(obj1.name); // "Doe" (Reference Type - Shared Memory)

