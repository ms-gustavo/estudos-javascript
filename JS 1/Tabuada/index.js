const choosenNumber = Number(prompt(`Informe o número para tabuada`));

let result = `Tabuada de ${choosenNumber}\n`;

for (let i = 1; i <= 20; i++) {
  result += `${choosenNumber} x ${i} = ${choosenNumber * i};\n`;
}

alert(result);
