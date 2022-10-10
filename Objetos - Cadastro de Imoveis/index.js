const vacancys = [];

function showVacancys() {
  const stringVacancys = vacancys.reduce(function (finalText, vacancy, index) {
    finalText += index + ". ";
    finalText += vacancy.name;
    finalText += " (" + vacancy.candidates.length + " candidatos)\n";
    return finalText;
  }, "");

  alert(stringVacancys);
}

function newVacancy() {
  const name = prompt(`Informe um nome para vaga`);
  const description = prompt(`Informe uma descrição para a vaga`);
  const limitDate = prompt(`Informe uma data limite (DD/MM/AAAA) para vaga`);

  const confirmation = confirm(`Confirme os dados da vaga:
  Nome: ${name}
  Descrição: ${description}
  Data limite: ${limitDate}`);
  if (confirmation) {
    const newVacancy = { name, description, limitDate, candidates: [] };
    vacancys.push(newVacancy);
    alert(`Vaga criada`);
  }
}

function showInfos() {
  const index = prompt(`Informe o índice da vaga que deseja exibir`);
  const vacancy = vacancys[index];

  const stringCandidates = vacancy.candidates.reduce(function (
    finalText,
    candidate
  ) {
    return finalText + "\n - " + candidate;
  },
  "");

  alert(`Vaga nº ${index}:
  Nome: ${vacancy.name}
  Descrição: ${vacancy.description}
  Data limite: ${vacancy.limitDate}
  Quantidade de candidatos: ${vacancy.candidates.length}
  Candidatos inscritos: ${stringCandidates}`);
}

function applyCandidate() {
  const candidate = prompt(`Informe o nome do(a) candidato(a)`);
  const index = prompt(`Informe o índice da vaga desejada`);
  const vacancy = vacancys[index];

  const confirmation =
    confirm(`Deseja inscrever o candidato ${candidate} na vaga ${index}?
  Nome: ${vacancy.name}
  Descrição: ${vacancy.description}
  Data limite: ${vacancy.limitDate}`);
  if (confirmation) {
    vacancy.candidates.push(candidate);
    alert(`Inscrição realizada`);
  }
}

function removeVacancy() {
  const index = prompt(`Informe o índice da vaga a ser removida`);
  const vacancy = vacancys[index];

  const confirmation = confirm(`Você deseja excluir a vaga ${index}?
  Nome: ${vacancy.name}
  Descrição: ${vacancy.description}
  Data limite: ${vacancy.limitDate}`);
  if (confirmation) {
    vacancys.splice(index, 1);
    alert(`Vaga ${index} removida`);
  }
}

function showMenu() {
  const option = prompt(`Cadastro de vagas de emprego
  Escolha uma das opções abaixo
  
  1- Listar vagas disponíveis
  2- Criar nova vaga
  3- Exibir uma vaga
  4- Inscrever candidato
  5- Remover vaga
  6- Sair`);

  return option;
}

function execute() {
  let option = "";

  do {
    option = showMenu();

    switch (option) {
      case "1":
        showVacancys();
        break;
      case "2":
        newVacancy();
        break;
      case "3":
        showInfos();
        break;
      case "4":
        applyCandidate();
        break;
      case "5":
        removeVacancy();
        break;
      case "6":
        alert(`Saindo...`);
        break;
      default:
        alert(`Opção inválida`);
    }
  } while (option !== "6");
}

execute();
