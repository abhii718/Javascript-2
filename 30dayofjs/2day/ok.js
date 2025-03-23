let a = 10;
let b = "10";
console.log(a == b, a === b);
console.log(a != b, a !== b);

console.log(undefined == 0);
console.log(undefined >= 0);

console.log(null == 0);
console.log(null >= 0);

console.log([] == ![]);

console.log([] + []);
console.log([] + {});
console.log(({} + [])); // "[object Object]"

console.log(true + false);
console.log(true - false);
console.log(true + 1);
console.log(false + 1);
console.log(1 + true);
console.log("true" + false);

console.log(1 + "1");    // "11"
console.log(1 - "1");    // 0
console.log("2" * "2");  // 4
console.log("10" / "5"); // 2
console.log("5" + 2 + 3);  // "523" (String concatenation)
console.log(2 + 3 + "5");  // "55" (Addition, then concatenation)

console.log([] + 1);         // "1" ✅
console.log([1, 2] + [3, 4]); // "1,23,4" ✅
console.log({} + []);        // "[object Object]" ✅
console.log([] == 0);        // true ✅
console.log([] == false);    // true ✅
console.log({} == {});       // false ✅

console.log(!!"false");
console.log(!!"0");
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);
console.log(!!"");

console.log([] == false);
console.log({} == false);
console.log(" " == false);
console.log(0 == false);
console.log("0" == false);


console.log(1 < 2 < 3);   // true ✅
console.log(3 > 2 > 1);   // false ✅
console.log(3 > 2 >= 1);  // true ✅
console.log(3 > 2 == 1);  // true ❌ (incorrect in your answer)
console.log(3 < 2 < 1);   // true ❌ (incorrect in your answer)
