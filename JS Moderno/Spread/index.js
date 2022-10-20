const friends = [
  "Ayrton",
  "Phillipe",
  "Ivson",
  "Yuri",
  "Gilson",
  "David",
  "Fernando",
  "Arnaldo",
];

console.log(friends);
console.log(...friends);
console.log(...friends[0]); // console.log('A', 'y', 'r', 't', 'o', 'n')

const friendsCopy = friends;

friendsCopy.pop();
friendsCopy.pop();
friends.push("Gustavo");

console.log({ friends, friendsCopy });

const friendsClone = [...friends];
friendsClone.push("Adv");

console.log({ friends, friendsCopy, friendsClone });

const friendsObject = { ...friends };
const friendsObjectClone = { ...friendsObject };

friendsObjectClone.test = "Test";
console.log({ friendsObject, friendsObjectClone });
