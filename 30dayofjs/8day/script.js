document.querySelector("#change-text").addEventListener("click", function () {
  document.querySelector("#title").textContent = "abhiiiiii";
});

document.querySelector("#change-color").addEventListener("click", function () {
  let title = document.querySelector("#title");
  title.style.color = title.style.color === "red" ? "blue" : "red";
});

document.querySelector("#toggle-class").addEventListener("click", function () {
  document.querySelector("#title").classList.toggle("highlight");
});

let count = 0; // Declare count globally to persist across clicks

document.querySelector("#add-paragraph").addEventListener("click", function () {
  count++; // Increment count

  document.querySelector("#list").innerHTML += `<li>Item ${count}</li>`; // Corrected template literal
});
document
  .querySelector("#remove-paragraph")
  .addEventListener("click", function () {
    const list = document.querySelector("#list");
    const items = list.querySelectorAll("li"); // Select all <li> elements

    if (items.length > 0) {
      list.removeChild(items[items.length - 1]); // Remove the last <li>
    }
  });

  document.querySelector("#show-input").addEventListener("click", function () {
    const input = document.querySelector("#user-input");
    const outputDiv = document.querySelector("#output"); // A container to show input values

    const dibb = document.createElement("div");
    dibb.textContent = input.value;
    dibb.classList.add("input-result"); // Add a class for styling

    outputDiv.appendChild(dibb); // Append new div inside the output container
});