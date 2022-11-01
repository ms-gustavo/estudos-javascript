import User from "./User.js";

const user1 = new User("Gustavo Maia", "ms.gustavo@outlook.com", "164852");
console.log(user1);
user1.login("ms.gustavo@outlook.com", "164852");
console.log(user1);
