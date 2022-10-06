const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 31, nome: "Void", raca: "Orc", classe: "Guerreiro" },
  { nivel: 65, nome: "Razor", raca: "Humano", classe: "Mago" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Paladino" },
];

// MAP - Retorna o pedido

const nomes = [];
for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome);
}

const nomesHof = personagens.map(function (personagem) {
  return personagem.nome;
});

// FILTER - Filtra um elemento determinado

const orcs = [];

for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcs.push(personagens[i]);
  }
}

const orcsHof = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});

// REDUCE - Transforma o array em alguma outra coisa

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0);

//console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }

  return valorAcumulado;
}, {});

//console.log(racas);

// SORT - Ordenar arrays

/*personagens.sort((maior, menor) => {
  return maior.nivel - menor.nivel;
});*/
console.log(personagens);

const personagensOrdenados = personagens.slice().sort((maior, menor) => {
  return maior.nivel - menor.nivel;
});
console.log(personagensOrdenados);
