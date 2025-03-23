function outer() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}
outer(); 
//ouput: 3 3 3

function outer() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000);    
    }
}
outer();


var name = "Global";

function outer() {
    var name = "Outer";

    function inner() {
        console.log(name);
    }

    return inner;
}

const func = outer();
func();
//output: Outer

function outerFunction() {
    let outerVar = "I'm outer";

    setTimeout(function() {
        console.log(outerVar);
    }, 1000);
}

outerFunction();
//output: I'm outer

function A() {
    let x = 10;
    
    function B() {
        let y = 20;

        function C() {
            console.log(x, y);
        }

        return C;
    }

    return B();
}

const result = A();
result();
//output: 10 20