const Mage = require("./Mage.js");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior.js");

const invoker = new Mage("Invoker", 200, 29, 0, 35);
const bountyHunter = new Thief("Bounty Hunter", 200, 54, 9);
const axe = new Warrior("Axe", 200, 27, 8, 5, "atk");

console.table({ invoker, bountyHunter, axe });
axe.changeStance();
bountyHunter.attack(axe);
invoker.heal(invoker);
console.table({ invoker, bountyHunter, axe });
