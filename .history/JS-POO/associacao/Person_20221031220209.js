class Person {
  constructor(name, adress) {
    this.name = name;
    this.adress = adress;
  }
}

module.exports = Person;

/* Dependencia direta de outra classe:
const Adress = require("./Adress");

class Person{
   constructor(name, street, number, neighborhood, city, state) {
      this.name = name;
      this.address = new Address
   }
}
*/
