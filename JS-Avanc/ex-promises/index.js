const Spaceship = require("./Spaceship");
const SpaceShipEngine = require("./SpaceShipEngine");

const sophia = new Spaceship("Sophia", 10, 5);
const amsterda = new Spaceship("Amsterda", 14, 10);
const dwarfStar = new Spaceship("Estrela-Anã", 20, 4);

const sophiaEngine = new SpaceShipEngine(sophia);
const amsterdaEngine = new SpaceShipEngine(amsterda);
const dwarfStarEngine = new SpaceShipEngine(dwarfStar);

sophiaEngine.turnOn();
amsterdaEngine.turnOn();
dwarfStarEngine.turnOn();

console.log(`Promises`);
