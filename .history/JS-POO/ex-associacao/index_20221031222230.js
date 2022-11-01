const Author = require("./Author");

const gustavo = new Author("Gustavo Maia");

const post = gustavo.writePost("Título do Post", "lorem ipsum dolor sic...");

post.addComment("Ayrton Silas", "Brabissimo!");
post.addComment("David Silva", "BRUXO");

console.log(gustavo);
console.log(post);
