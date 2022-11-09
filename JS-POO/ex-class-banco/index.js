const App = require("./App");
App.createUser("ms.gustavo@outlook.com", "Gustavo Maia");
App.createUser("ayrtonbrabo@gmail.com", "Ayrton Silas");
App.deposit("ms.gustavo@outlook.com", 500);
App.transfer("ms.gustavo@outlook.com", "ayrtonbrabo@gmail.com", 300);
console.table(App.findUser("ms.gustavo@outlook.com"));
console.table(App.findUser("ms.gustavo@outlook.com").account);
console.table(App.findUser("ayrtonbrabo@gmail.com").account);
