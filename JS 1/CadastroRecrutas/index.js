const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

let firstName = prompt(`Digite seu nome`);
let lastName = prompt(`Digite seu sobrenome`);
let studyCamp = prompt(`Qual seu campo de estudo?`);
let birthAge = prompt(`Em que ano você nasceu?`);

alert(
  `Nome: ${firstName}\nSobrenome: ${lastName}\nCampo de Estudo: ${studyCamp}\nIdade: ${
    anoAtual - Number(birthAge)
  } anos`
);
