function operateOnArray(arr, operation) {
    return arr.map(operation);
}

const square = (num) => num * num;
console.log(operateOnArray([1, 2, 3], square)); // ✅ [1, 4, 9]


function twice(fn, value) {
    return fn(fn(value));
}

const double = (x) => x * 2;

console.log(twice(double, 5)); // ✅ 20


console.log(a);
var a = 10;

function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();
console.log(a);


const obj = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

setTimeout(obj.greet.bind(obj), 1000);
