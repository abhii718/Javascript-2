let person = {
    name: "Abhi",
    age: 22,
    city: "Delhi"
  };
  console.log(person.name);  // "Abhi"
  person.age = 23;          // Update property
  delete person.city;       // Remove property
  console.log(person);
  