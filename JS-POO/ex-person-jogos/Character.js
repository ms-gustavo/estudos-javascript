module.exports = class Character {
  constructor(name, life, atk, def) {
    this.name = name;
    this.life = life;
    this.atk = atk;
    this.def = def;
  }

  attack(targetCharacter) {
    targetCharacter.life -= this.atk - targetCharacter.def;
  }
};
