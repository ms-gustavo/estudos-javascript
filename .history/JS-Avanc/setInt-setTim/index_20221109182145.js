let timeOutId = setTimeout(() => {
  console.log(`Executando após 2 segundos`);
}, 2000);
clearTimeout(timeOutId);

let seconds = 0;
let intervalId = setInterval(() => {
  seconds += 2;
  console.log(`Executando a cada 2 segundos`);
  if (seconds >= 10) clearInterval(intervalId);
}, 2000);
