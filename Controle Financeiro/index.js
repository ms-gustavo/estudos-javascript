let amount = Number(prompt(`Informe o valor disponível:`));
let choosenOption;
let deposit;
let withdraw;

do {
  choosenOption = prompt(
    `Valor disponível: R$${amount}\nO que deseja fazer:\n1- Depositar\n2- Sacar\n3- Sair`
  );
  switch (choosenOption) {
    case "1":
      deposit = Number(prompt(`Qual valor deseja depositar?`));
      amount += deposit;
      break;
    case "2":
      withdraw = Number(prompt(`Qual valor deseja sacar?`));
      amount -= withdraw;
      break;
    case "3":
      alert(`Valor final: R$${amount}\nEncerrando...`);
      break;
    default:
      alert(`Opção inválida`);
  }
} while (choosenOption !== "3");
