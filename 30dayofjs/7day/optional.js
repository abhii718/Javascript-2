const user = { profile: { name: "Abhi" } };
console.log(user.profile?.name);  // Abhi
console.log(user.address?.city);  // undefined (No error)

user.profile.name = "John";
console.log(user.profile?.name);  // John