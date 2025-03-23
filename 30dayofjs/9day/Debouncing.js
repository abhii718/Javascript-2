

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

// Simulated API Call
function searchQuery() {
  document.querySelector("#result").textContent = "Fetching search results...";
  console.log("API Call: Searching...");
}

document.querySelector("#search-box").addEventListener(
  "input",
  debounce(searchQuery, 500) // API call happens after 500ms of inactivity
);