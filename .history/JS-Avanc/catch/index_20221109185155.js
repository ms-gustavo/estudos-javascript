let komodoship = {
  name: "Komodo",
  velocity: 60,
  aceleration: 0,
};
const velocityAfter2Seconds = (velocity, aceleration) => {
  return new Promise((resolve, reject) => {
    if (aceleration > 0) {
      velocity += aceleration * 2;
      console.log(`Nova velocidade: ${velocity}`);
      resolve(velocity);
    } else {
      console.log(`Aceleração inválida`);
      reject(`Não possui aceleração`);
    }
  });
};

velocityAfter2Seconds(komodoship.velocity, komodoship.aceleration).then(
  (velocity) => {
    komodoship.velocity = velocity;
    console.table(komodoship);
  }
);
console.log(`Execução de Promises`);
console.log(komodoship);
