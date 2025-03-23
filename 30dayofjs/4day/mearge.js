// const a = ["a", "b", "c", "d"];

// const b = ["e", "f", "g", "h"];
// const c = [...a,...b];
// console.log(c);



async function fetchData() {
    try {
      for (let i = 0; i <= 5; i++) {
       let url = (`https://jsonplaceholder.typicode.com/todos/${i}`);
       let response = await fetch(url);
       let data = await response.json();
       console.log(data);
      }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
