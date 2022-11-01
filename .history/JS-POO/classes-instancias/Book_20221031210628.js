class Book {
  constructor(title, pages, published, publishedYear, author) {
    this.title = title;
    this.pages = pages;
    this.published = false;
    this.publishedYear = publishedYear;
    this.author = author;
  }

  publish() {
    this.published = true;
  }
}

const sapiens = new Book("Sapiens", 472, 2020, "Yuval Noah Harari");
console.log(sapiens);
