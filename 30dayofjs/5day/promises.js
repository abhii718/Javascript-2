const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to see rejection
    setTimeout(() => {
      if (success) {
        resolve("✅ Task Completed!");
      } else {
        reject("❌ Task Failed!");
      }
    }, 2000);
  });
  
  myPromise
    .then(result => console.log(result)) // Runs if promise is resolved
    .catch(error => console.log(error)) // Runs if promise is rejected
    .finally(() => console.log("✅ Always Runs (Success or Failure)"));
  