const Character = require("./Character");

module.exports = class Warrior extends Character {
  constructor(name, life, atk, def, shield, stance) {
    super(name, life, atk, def);
    this.shield = shield;
    this.stance = stance;
  }

  attack(targetCharacter) {
    if (this.stance === "atk") {
      super.attack(targetCharacter);
    }
  }

  changeStance() {
    if (this.stance === "atk") {
      this.stance = "def";
      this.def += this.shield;
    } else {
      this.stance = "atk";
      this.def -= this.shield;
    }
  }
};
