let option;
let allProperties = [];

do {
  option = prompt(`Quantidade de imóveis cadastrados: ${allProperties.length}
  Você deseja:
  1- Salvar um imóvel novo
  2- Mostrar Imóveis
  3- Sair`);

  switch (option) {
    case "1":
      const propertie = {};
      propertie.owner = prompt(`Qual o nome do proprietário?`);
      propertie.rooms = Number(prompt(`Qual a quantidade de quartos?`));
      propertie.bathrooms = Number(prompt(`Qual a quantidade de banheiros?`));
      propertie.garage = prompt(`Possui garagem? [S/N]`);

      const confirmation = confirm(`Os dados estão corretos?
      Proprietário: ${propertie.owner}
      Quartos: ${propertie.rooms}
      Banheiros: ${propertie.bathrooms}
      Garagem: ${propertie.garage}`);
      if (confirmation) {
        allProperties.push(propertie);
      }
      break;
    case "2":
      for (i = 0; i < allProperties.length; i++) {
        alert(`Imóvel ${i + 1}:
         Proprietário: ${allProperties[i].owner}
         Quartos: ${allProperties[i].rooms}
         Banheiros: ${allProperties[i].bathrooms}
         Garagem: ${allProperties[i].garage}`);
      }
      break;
    case "3":
      alert(`Encerrando...`);
      break;
    default:
      alert(`Opção Inválida`);
  }
} while (option !== "3");
