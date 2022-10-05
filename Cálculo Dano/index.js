const atacante = prompt(`Informe o nome do atacante`);
const poderAtq = Number(prompt(`Informe o poder de ataque`));

const defensor = prompt(`Informe o nome do defensor`);
let vidaDef = Number(prompt(`Informe a vida do defensor`));
const poderDef = Number(prompt(`Informe o poder de defesa do defensor`));
const possuiEsc = prompt(`O defensor possui escudo? [S/N]`);

console.log(atacante);
console.log(poderAtq);
console.log(defensor);
console.log(vidaDef);
console.log(poderDef);
console.log(possuiEsc);

let danoCausado = 0;
console.log(danoCausado + "declaração");
if (poderAtq > poderDef && possuiEsc === "N") {
  danoCausado = poderAtq - poderDef;
  console.log(danoCausado + "dentro do if");
} else if (poderAtq > poderDef && possuiEsc === "S") {
  danoCausado = (poderAtq - poderDef) / 2;
  console.log(danoCausado + "dentro do else if");
}
console.log(danoCausado + "fora do if");

vidaDef -= danoCausado;

alert(`${atacante} causou ${danoCausado} de dano a ${defensor}`);
