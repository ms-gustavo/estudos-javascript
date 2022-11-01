const Author = require("./Author");

const gustavo = new Author("Gustavo Maia");

const post = gustavo.writePost("Título do Post", "lorem ipsum dolor sic...");

post.addComment();
