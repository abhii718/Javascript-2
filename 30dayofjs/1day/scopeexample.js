let globalVar = "I am Global";

function outer() {
  let outerVar = "Outer Scope";
  
  function inner() {
    let innerVar = "Inner Scope";
    console.log(outerVar);  // ✅ Accessible
    console.log(globalVar); // ✅ Accessible
    console.log(innerVar);  // ✅ Accessible
  }
  inner();
  
  // console.log(innerVar); ❌ Error (Not Accessible)
}

outer();
