let firstNumber = prompt(`Digite o primeiro número`);
let secondNumber = prompt(`Digite o segundo número`);

alert(
  `Primeiro Número: ${firstNumber}\nSegundo Número ${secondNumber}\n\nSoma: ${
    Number(firstNumber) + Number(secondNumber)
  }\nSubtração: ${Number(firstNumber) - Number(secondNumber)}\nMultiplicação: ${
    Number(firstNumber) * Number(secondNumber)
  }\nDivisão: ${Number(firstNumber) / Number(secondNumber)}`
);
