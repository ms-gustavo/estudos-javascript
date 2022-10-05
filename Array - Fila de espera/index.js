let list = [];
let option;

do {
  let pacients = "";
  for (let i = 0; i < list.length; i++) {
    pacients += `${i + 1}º ${list[i]}\n`;
  }

  option = prompt(`
   Pacientes:\n ${pacients}
   Escolha uma ação:
   1- Novo paciente
   2- Consultar paciente
   3- Sair`);

  switch (option) {
    case "1":
      const newPacient = prompt(`Informe o nome do paciente`);
      list.push(newPacient);
      break;
    case "2":
      const consultedPacient = list.shift();
      if (consultedPacient) {
        alert(`Paciente consultado: ${consultedPacient}. Foi removido da fila`);
      } else {
        alert(`Não há pacientes na fila`);
      }
      break;
    case "3":
      alert(`Encerrando`);
      break;
    default:
      alert(`Opção inválida`);
  }
} while (option !== "3");
