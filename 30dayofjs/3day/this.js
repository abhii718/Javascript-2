
// Question 1
const obj6 = {
    value: 42,
    print: function() {
        setTimeout(() => {
            console.log(this.value);
        }, 500);
    }
};
const newPrint1 = obj6.print;
newPrint1(); // undefined

// Question 2
const obj7 = {
    value: 30,
    print: function() {
        setTimeout(() => {
            console.log(this.value);
        }, 1000);
    }
};
obj7.print(); // 30

// Question 3
const car = {
    brand: "Toyota",
    getBrand: function() {
        return this.brand;
    }
};
console.log(car.getBrand()); // Toyota

// Question 4
const number = 20;
console.log(number); // 20

// Question 5
const obj8 = {
    value: 50,
    print: function() {
        setTimeout(() => {
            console.log(this.value);
        }, 1000);
    }
};
obj8.print(); // 50 (after 1 sec)

// Question 6
const obj9 = {
    value: 100,
    print: () => {
        console.log(this.value);
    }
};
obj9.print(); // undefined
