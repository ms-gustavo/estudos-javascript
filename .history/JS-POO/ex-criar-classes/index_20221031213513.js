import { User } from "./User";

const user1 = new User("Gustavo Maia", "ms.gustavo@outlook.com", "164852");
console.log(user1);
user1.login("ms.gustavo@outlook.com", "164852");
console.log(user1);
