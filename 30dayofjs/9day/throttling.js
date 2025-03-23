

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

// Function to execute when scrolling
function onScroll() {
  console.log("Scrolled!");
}

window.addEventListener("scroll", throttle(onScroll, 1000)); // Executes every 1s while scrolling

