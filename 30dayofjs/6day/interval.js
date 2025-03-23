let a = 0;
const interval = setInterval(() => {
    a++;
    console.log(a);
  if (a == 5) clearInterval(interval);
},1000);

