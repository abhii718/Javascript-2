function step1(callback) {
    setTimeout(() => {
      console.log("Step 1 completed");
      callback();
    }, 1000);
  }
  
  function step2(callback) {
    setTimeout(() => {
      console.log("Step 2 completed");
      callback();
    }, 1000);
  }
  
  function step3() {
    setTimeout(() => {
      console.log("Step 3 completed");
    }, 1000);
  }
  
  // Callback Hell (Deep Nesting)
  step1(() => {
    step2(() => {
      step3();
    });
  });
  