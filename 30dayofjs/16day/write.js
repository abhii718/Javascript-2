// const fs = require('fs');
// fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
//     if (err) throw err;
//     console.log('File written successfully.');
//   });

import fs from "fs/promises";

async function write(file) {
  try {
    const a = await fs.writeFile (file, `<!DOCTYPE html><html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`);
    console.log(a);
    console.log("File written successfully.");
  } catch (error) {
    console.log(error);
  }
}

write("example.html");
