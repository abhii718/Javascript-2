// Save data
localStorage.setItem("username", "Abhi");
localStorage.setItem("password", "1234");

// Get data
console.log(localStorage.getItem("username")); // "Abhi"

// Remove data
localStorage.removeItem("username");

// Clear all
localStorage.clear();




// Storing multiple key-value pairs
localStorage.setItem("username", "Abhi");
localStorage.setItem("email", "abhi@example.com");
localStorage.setItem("age", "30");
localStorage.setItem("isLoggedIn", "true"); // Store booleans as strings
localStorage.setItem("favoriteColor", "blue");

// Retrieving multiple key-value pairs
const username = localStorage.getItem("username");
const email = localStorage.getItem("email");
const age = localStorage.getItem("age");
const isLoggedIn = localStorage.getItem("isLoggedIn");
const favoriteColor = localStorage.getItem("favoriteColor");

console.log("Username:", username);
console.log("Email:", email);
console.log("Age:", age);
console.log("Is Logged In:", isLoggedIn);
console.log("Favorite Color:", favoriteColor);

//Example of data that is not a string.
const myObject = {name: "test", value: 123};
localStorage.setItem("myObject", JSON.stringify(myObject)); //stringify to store.
const retrievedObject = JSON.parse(localStorage.getItem("myObject")); //parse to retrieve.
console.log(retrievedObject);

//Example of storing and retrieving an object
const data = {
    username: "Abhi",
    email: "abhi@example.com",
    age: 30,
    isLoggedIn: true,
    favoriteColor: "blue",
  };
  
  // Store the entire object as a JSON string
  localStorage.setItem("userData", JSON.stringify(data));
  
  // Retrieve the object and parse it back
  const storedData = JSON.parse(localStorage.getItem("userData"));
  
  console.log(storedData.username); // Output: Abhi
  console.log(storedData.email);   // Output: abhi@example.com
  console.log(storedData.age);     // Output: 30
  console.log(storedData.isLoggedIn); // Output: true
  console.log(storedData.favoriteColor); // Output: blue