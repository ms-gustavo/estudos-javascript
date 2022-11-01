class Book {
  constructor(title, pages, publishedYear, author) {
    this.title = title;
    this.pages = pages;
    this.publishedYear = publishedYear;
    this.author = author;
  }
}

const sapiens = new Book("Sapiens", 472, 2020, "Yuval Noah Harari");
console.log(sapiens);
