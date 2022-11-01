class User {
  constructor(fullname, email, password) {
    (this.fullname = fullname),
      (this.email = email),
      (this.password = password);
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log(`Login realizado`);
    } else {
      console.log("Usuário/senha incorretos.");
    }
  }
}

export default User;
const user1 = new User("Gustavo Maia", "ms.gustavo@outlook.com", "164852");
console.log(user1);
user1.login("ms.gustavo@outlook.com", "164852");
console.log(user1);
