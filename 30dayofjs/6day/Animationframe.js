const raf = require("raf");

let count = 0;
function animate() {
  if (count < 60) {
    count++;
    console.log(count);
    raf(animate);
  }
}
raf(animate);
