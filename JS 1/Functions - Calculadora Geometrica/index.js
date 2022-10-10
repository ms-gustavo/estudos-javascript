let choosenOption;

function calcTriang() {
  let basis = Number(prompt(`Informe a base do triângulo`));
  let height = Number(prompt(`Informe a altura do triângulo`));
  let result = (basis * height) / 2;
  let text = alert(`A área do triângulo é ${result}`);
  return text;
}

function calcRet() {
  let basis = Number(prompt(`Informe a base do retângulo`));
  let height = Number(prompt(`Informe a altura do retângulo`));
  let result = basis * height;
  let text = alert(`A área do retângulo é ${result}`);
  return text;
}

function calcQuad() {
  let side = Number(prompt(`Informe o lado do quadrado`));
  let result = side * 2;
  let text = alert(`A área do quadrado é ${result}`);
  return text;
}

function calcTrap() {
  let higherBasis = Number(prompt(`Informe a base maior`));
  let lowerBasis = Number(prompt(`Informe a base menor`));
  let height = Number(prompt(`Informe a altura`));
  let result = ((higherBasis + lowerBasis) * height) / 2;
  let text = alert(`A área do trapézio é ${result}`);
  return text;
}

function calcCirc() {
  let radius = Number(prompt(`Informe o raio do círculo`));
  let result = 3.14 * (radius ^ 2);
  let text = alert(`A área do circulo é ${result}`);
  return text;
}

do {
  choosenOption = prompt(`O que deseja fazer:
   1- Calcular área do triângulo
   2- Calcular área do retângulo
   3- Calcular área do quadrado
   4- Calcular área do trapézio
   5- Calcular área do círculo
   6- Sair`);

  switch (choosenOption) {
    case "1":
      calcTriang();

      break;
    case "2":
      calcRet();

      break;
    case "3":
      calcQuad();

      break;
    case "4":
      calcTrap();

      break;
    case "5":
      calcCirc();

      break;
    case "6":
      alert(`Encerrando`);
      break;
    default:
      alert(`Opção inválida`);
  }
} while (choosenOption !== "6");
