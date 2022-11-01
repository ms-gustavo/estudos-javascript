class Book {
  constructor(title, pages, publishedYear, author) {
    this.title = title;
    this.pages = pages;
    this.publishedYear = publishedYear;
    this.author = author;
  }
}

const eragon = new Book("Sapiens");
console.log(eragon);
