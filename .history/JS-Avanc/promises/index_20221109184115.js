let komodoship = {
  name: "Komodo",
  velocity: 60,
  aceleration: 10,
};
const velocityAfter2Seconds = (velocity, aceleration) => {
  new Promise((resolve, reject) => {
   setTimeout()=>{
   if(aceleration > 0){
      velocity += aceleration*2
      console.log(`Nova velocidade: ${velocity}`)
      resolve(velocity)
   } else {
      console.log(`Aceleração inválida`);
      reject(`Não possui aceleração`)
   }
  });
};

velocityAfter2Seconds(komodoship.velocity, komodoship.aceleration)
console.log(`Execução de Promises`)
