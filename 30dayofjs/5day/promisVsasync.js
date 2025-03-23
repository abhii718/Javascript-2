// Code to demonstrate the difference between using promises and async/await in JavaScript.
// function getUserData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("User data fetched!"), 1500);
//   });
// }

// getUserData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//   The same code can be written using async/await as follows:
// async function getUserData() {
//   try {
//     const response = await new Promise((resolve) => {
//       setTimeout(() => resolve("User data fetched!"), 900);
//     });
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Successful");
//   }
// }

// getUserData();

//   The async/await syntax is more concise and easier to read than the promise syntax. It also allows you to handle errors using try/catch blocks, making the code more readable and maintainable.

// async function fetchUserAndPosts() {
//   try {
//     const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const user = await userRes.json();

//     console.log("User:", user);

//     const postsRes = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
//     );
//     const posts = await postsRes.json();

//     console.log("Posts:", posts);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// fetchUserAndPosts();

async function a() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log(user);

    const response2 = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await response2.json();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}
a();
