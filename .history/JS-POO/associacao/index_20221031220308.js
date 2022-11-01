const Address = require("./Adress");
const Person = require("./Person");

//Caso dependencia de Address por Person, não precisa dessa linha
const addr = new Address(
  "Leonor Calmon",
  385,
  "Cidade Jardim",
  "Salvador",
  "Bahia"
);
//Caso dependencia de Address por Person, trocar "addr" pelas instancias necessárias
const gustavo = new Person("Gustavo Maia", addr);

console.log(gustavo);
console.log(gustavo.adress.fullAdress());
