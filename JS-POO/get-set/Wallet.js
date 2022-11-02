class Wallet {
  #amount;
  #username;
  constructor() {
    this.#amount = 100.99 * 100;
  }

  get amount() {
    return this.#amount / 100;
  }
  /*  getAmount() {
    return this.#amount / 100;
  }*/

  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log(`username must be of type string`);
    }
  }
  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

myWallet.username = "Gustavo";
console.log(myWallet.username);
