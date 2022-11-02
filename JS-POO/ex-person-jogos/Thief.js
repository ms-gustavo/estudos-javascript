const Character = require("./Character");

module.exports = class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.life -= (this.atk - targetCharacter.def) * 2;
  }
};
