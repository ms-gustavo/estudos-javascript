let choosenOption;

do {
  choosenOption = prompt(`1\n2\n3\n4\n5- Encerrar`);
  switch (choosenOption) {
    case "1":
      alert(`Opção 1`);
      break;
    case "2":
      alert(`Opçaõ 2`);
      break;
    case "3":
      alert(`Opção 3`);
      break;
    case "4":
      alert(`Opção 4`);
      break;
    case "5":
      alert(`Encerrando...`);
      break;
    default:
      alert(`Opções de 1 a 5 apenas`);
  }
} while (choosenOption !== "5");
