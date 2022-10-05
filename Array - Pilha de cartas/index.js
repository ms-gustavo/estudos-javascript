let allCards = [];
let option;

do {
  let cards = "";
  for (let i = 0; i < allCards.length; i++) {
    cards += `${i + 1}ª carta: ${allCards[i]}\n`;
  }

  option = prompt(`
   Baralho\n${cards}
   Escolha uma ação:
   1- Adicionar uma carta
   2- Puxar uma carta
   3- Sair`);

  switch (option) {
    case "1":
      const newCard = prompt(`Informe qual carta adicionar`);
      allCards.unshift(newCard);
      break;
    case "2":
      const pulledCard = allCards.shift();
      if (pulledCard) {
        alert(`Carta ${pulledCard} retirada.`);
      } else {
        alert(`Não há cartas no baralho`);
      }
      break;
    case "3":
      alert(`Encerrando`);
      break;
    default:
      alert(`Opção inválida`);
  }
} while (option !== "3");
