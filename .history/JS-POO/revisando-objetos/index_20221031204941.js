function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };
  this.save = function () {};
}
const author = { name: "Christopher Paolini" };
const tags = ["fantasy", "adventure"];

const eragon = new Book("Eragon", 468, tags, author);
console.log(eragon);
