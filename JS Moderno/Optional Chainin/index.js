const user = {
  name: "Gustavo Maia",
  email: "ms.gustavo@outlook.com",
  friends: [
    {
      name: "Felipe",
      adress: {
        street: "Barra",
        number: "50",
      },
    },
  ],
  age: 27,
  phone: {
    countryCode: "+55",
    ddd: "71",
    number: "991108690",
  },
};

//console.log(user.friends[0].phone.ddd);
console.log(user?.friends[0]?.phone?.ddd);
console.log(user?.brothers?.length);

console.log(user.brothers?.[5].name);
