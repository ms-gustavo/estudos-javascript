const Address = require("./Adress").default;
const Person = require("./Person");

const addr = new Address(
  "Leonor Calmon",
  385,
  "Cidade Jardim",
  "Salvador",
  "Bahia"
);
const gustavo = new Person("Gustavo Maia", addr);

console.log(gustavo);
console.log(gustavo.adress.fullAdress());
