let timeOutId = setTimeout(() => {
  console.log(`Executando após 2 segundos`);
}, 2000);
clearTimeout(timeOutId);

setInterval(() => {
  console.log(`Executando a cada 2 segundos`);
}, 2000);
