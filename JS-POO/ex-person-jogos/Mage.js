const Character = require("./Character");

module.exports = class Mage extends Character {
  constructor(name, life, atk, def, magic) {
    super(name, life, atk, def);
    this.magic = magic;
  }

  attack(targetCharacter) {
    targetCharacter.life -= this.atk + this.magic - targetCharacter.def;
  }

  heal(targetCharacter) {
    targetCharacter.life += this.magic * 2;
  }
};
