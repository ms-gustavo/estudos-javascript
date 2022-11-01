class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    discount = (this.price * discount) / 100;
    this.price = this.price - discount;
    //return this.price * ((100 - discount) / 100)
  }
}

const caneta = new Product("Caneta", "Serve pra escrever", 10);
console.log(caneta);
caneta.addToStock(2);
caneta.calculateDiscount(5);
console.log(`-------------------`);
console.log(caneta);
