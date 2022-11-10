module.exports = class SpaceShipEngine {
  constructor(spaceship) {
    this.spaceship = spaceship;
  }

  turnOn() {
    this.checkCurrentCharge()
      .then((currentCharge) => {
        console.log(
          `${this.spaceship.name}: Partida autorizada. Carga atual em ${currentCharge}%`
        );
      })
      .catch((currentCharge) => {
        console.log(
          `${this.spaceship.name}: Partida recusada. Carga atual em ${currentCharge}%`
        );
      });
  }

  checkCurrentCharge() {
    return new Promise((resolve, reject) => {
      let currentCharge = this.spaceship.currentPercentCharge();
      if (currentCharge >= 30) {
        resolve(currentCharge);
      } else {
        reject(currentCharge);
      }
    });
  }
};
