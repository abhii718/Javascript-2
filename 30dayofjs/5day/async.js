function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

// Using async/await
async function runSteps() {
  try {
    await step1();
    await step2();
    await step3();
    console.log("All Steps Completed!");
  } catch (error) {
    console.log("Something went wrong!", error);
  }
}

runSteps();
