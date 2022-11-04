const App = require("./App");

const app = new App();

app.createAuthor("J. R. R. Tolkien", "British", "...");
app.createAuthor("Rick Riordan", "American", "...");

const authors = app.getAuthors;

app.createBooks(
  "O Hobbit",
  "...",
  "fantasy",
  300,
  authors[0],
  "...",
  19.99,
  100
);
app.createBooks(
  "A Sociedade do Anel",
  "...",
  "fantasy",
  400,
  authors[0],
  "...",
  24.99,
  100
);
app.createBooks(
  "O Ladrão de Raios",
  "...",
  "fantasy",
  authors[1],
  "...",
  24.99,
  100
);
app.createBooks(
  "A Pirâmide Vermelha",
  "...",
  ",fantasy",
  authors[1],
  "...",
  24.99,
  100
);

const books = app.getBooks;

app.createUser("Gustavo", "ms.gustavo@outlook.com", "164852");
const users = app.getUsers();

const items = [
  {
    product: books[0],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 1,
  },
  {
    product: books[3],
    quantity: 1,
  },
  {
    product: books[4],
    quantity: 1,
  },
];

app.createOrder(items, users[0]);

app.showDatabase;
