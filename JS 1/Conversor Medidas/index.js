let valor = Number(prompt(`Digite um valor em metros para converter`));

let option = prompt(
  `Você quer converter ${valor} para:\nA: Milimetro(mm)\nB: Centímetro\nC: Quilometro\nD: Jarda\nE: Milha`
);

option = option.toUpperCase();
let result;
switch (option) {
  case "A":
    result = valor * 1000;
    break;
  case "B":
    result = valor * 100;
    break;
  case "C":
    result = valor / 1000;
    break;
  case "D":
    result = valor * 1.094;
    break;
  case "E":
    result = valor / 1609;
    break;
  default:
    result = `0`;
}

alert(Number(result.toFixed(2)));
