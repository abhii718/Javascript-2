// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

import fs from "fs/promises";

async function readFileES6(file) {
  try {
    const a = await fs.readFile(file, "utf8");
    console.log(a);
  } catch (error) {
    console.log(error);
  }
}

readFileES6("example.txt");
