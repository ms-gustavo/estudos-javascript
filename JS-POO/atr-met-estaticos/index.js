class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 150;

  static showBaseFee() {
    console.log(`Base fee is ${Reservation.baseFee}`);
  }

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();

const hotel = new Reservation(1, "201", 4);
Reservation.baseFee = 200;
Reservation.showBaseFee();
const catussaba = new Reservation(2, "305", 7);
console.table({ hotel, catussaba });

console.log(`Premium fee is ${Reservation.premiumFee}`);
