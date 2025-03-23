function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("abhi")
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const closureFunc = outerFunction("Hello");
closureFunc("World"); // ✅ "Outer: Hello, Inner: World"



function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const myCounter = counter();
myCounter(); // ✅ 1
myCounter(); // ✅ 2
myCounter(); // ✅ 3
myCounter(); // ✅ 4    
// In this example, the counter function returns an inner function that increments the count variable by 1 each time it is called. The count variable is stored in the closure of the inner function, allowing it to persist between calls to the outer function. This creates a private state that is accessible only to the inner function, making it a useful tool for managing state in JavaScript applications.
