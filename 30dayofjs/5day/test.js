// function greet(name, callback) {
//   console.log("Fetching user data...");
//   setTimeout(() => {
//     // console.log("Fetched user data!");
//     callback(name);
//   }, 2000);
// }

// greet("Abhi", (name) => {
//   console.log(`Welcome, ${name}!`);
// });

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// wait(1000)
//   .then(() => {
//     console.log("Step 1");
//     return wait(1000);
//   })
//   .then(() => {
//     console.log("Step 2");
//     return wait(1000);
//   })
//   .then(() => {
//     console.log("Step 3");
//   });

// async function executeSteps(ms) {
//   await wait(1000);
//   console.log("Step 1");
//   await wait(1000);
//   console.log("Step 2");
//   await wait(1000);
//   console.log("Step 3");
// }
// executeSteps();
// Output:
// Step 1                 // after 1 second
// Step 2                 // after 2 seconds
// Step 3                 // after 3 seconds

// async function fetchData() {
//   return await new Promise(resolve => {
//       setTimeout(() => resolve("Data received"), 2000);
//   });
// }

// async function getData() {
//   console.log("Fetching data...");
//   const data = await fetchData();
//   console.log(data);
// }

// // fetchData().then(data => console.log(data));

// getData();

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           console.log("DATA FETCHED SUCCESSFULLY");
//           resolve("User data loaded");  // Resolving the promise
//       }, 2000);
//   });
// }

// fetchUserData()
//   .then(data => console.log("Fetching data successful:", data))
//   .catch(err => console.log("Error occurred:", err));

// using Promise
// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           console.log("DATA FETCHED SUCCESSFULLY");
//           resolve("User data loaded");  // Resolving the promise
//       }, 2000);
//   });
// }

// fetchUserData()
//   .then(data => console.log("Fetching data successful:", data))
//   .catch(err => console.log("Error occurred:", err));

//using async await
// ! async function fetchUserData() {
//   return await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("DATA FETCHED SUCCESSFULLY");
//       resolve("User data loaded");
//     }, 2000);
//   });
// }

// async function call(){
//   let a = await fetchUserData();
//   console.log(a)
// }

// call();

// function fetchUserData(callback) {
//   setTimeout(() => {
//       callback("User data loaded");
//   }, 2000);
// }

// fetchUserData((data) => console.log(data));

// function fetchUserData() {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve("User data loaded");
//     }, 2000)
//   );
// }
// fetchUserData().then((data) => console.log("data feched successfully", data));

// Modify the following function to reject the promise if success is false.
// function fetchData() {
//   return new Promise(resolve => {
//       setTimeout(() => resolve("Data fetched"), 2000);
//   });
// }

// fetchData()
//   .then(data => console.log(data))
//   .catch(error => console.log("Error:", error));

// function fetchData() {
//   let success = false;
//   if (!success) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => reject("Data failed"), 2000);
//     });
//   } else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Data fetched"), 2000);
//     });
//   }
// }

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error:", error));

// Now, modify the function below to fetch user data first, then fetch posts sequentially using async/await.
// async function fetchUser() {
//   return await new Promise((resolve) => {
//     setTimeout(() => resolve("User data received"), 2000);
//   });
// }

// async function fetchPosts() {
//   return await new Promise((resolve) => {
//     setTimeout(() => resolve("Posts received"), 2000);
//   });
// }

// // Your task: Write an async function to call both functions sequentially.
// async function fetchUserData() {
//   try {
//     let [a, b] = await Promise.all([
//       fetchUser(),
//       fetchPosts(),
//     ]);
//     console.log(b, a);
//   } catch (error) {
//     console.log(error, "errrrrro");
//   }
// }
// fetchUserData();

// here's a snippet demonstrating parallel execution with Promise.all:
// async function fetchUserData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("User data loaded"), 2000);
//   });
// }

// async function fetchPostsData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Posts loaded"), 3000);
//   });
// }

// async function fetchAllData() {
//   try {
//     const [userData, postsData] = await Promise.all([
//       fetchUserData(),
//       fetchPostsData()
//     ]);
//     console.log(userData);
//     console.log(postsData);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchAllData();

// Promise.race
function fetchUser() {
  return new Promise((resolve) => setTimeout(() => resolve("User Data"), 2003));
}
function fetchPosts() {
  return new Promise((resolve) => setTimeout(() => resolve("Posts Data"), 2002));
}


// Promise.race - Returns the first completed promise (resolve or reject)
Promise.race([fetchUser(), fetchPosts()])
  .then((data) => console.log("First resolved:", data))
  .catch((error) => console.log("Error:", error));

