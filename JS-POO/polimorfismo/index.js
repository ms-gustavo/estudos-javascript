class Vehicle {
  move() {
    console.log("O veículo está se movendo");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando");
  }
}

class Airplane extends Vehicle {
  move(speed) {
    console.log(`O avião está voando a ${speed}km/h`);
  }
}

const astra = new Car();
const blackPearl = new Ship();
const airPlane = new Airplane();

//astra.move();
//blackPearl.move();
//airPlane.move(800);

function start(vehicle) {
  console.log("Iniciando um veículo");
  vehicle.move();
}

start(astra);
start(blackPearl);
start(airPlane);
