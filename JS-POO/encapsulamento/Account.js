class Account {
  #password;
  #balance = 0;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
    //this.#balance = 0;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }
  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "ms.gustavo@outlook.com",
  password: "164852",
};
const myAccount = new Account(user);
console.log(myAccount);
console.log(myAccount.getBalance("ms.gustavo@outlook.com", "164852"));
