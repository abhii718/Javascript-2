for (let i = 0; i < 5; i++) {
  console.log("For Loop Iteration:", i);
}

let j = 0;
while (j < 5) {
  console.log("While Loop Iteration:", j);
  j++;
}

let k = 0;
do {
  console.log("Do-While Loop Iteration:", k);
  k++;
} while (k < 5);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num * 2));

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
