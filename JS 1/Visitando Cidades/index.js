let touristName = prompt(`Informe seu nome`);

let city = prompt(`Você já visitou alguma cidade? [S/N]`);
let i = 0;
city = city.toUpperCase();
let allCities = [];
let visitedCity;
while (city === "S") {
  visitedCity = prompt(`Qual cidade você visitou?`);
  allCities.push(visitedCity);
  i++;
  city = prompt(`Alguma outra cidade? [S/N]`);
  city = city.toUpperCase();
}

alert(
  `Nome: ${touristName}\nCidades visitadas: ${allCities}\nQuantidade de cidades: ${i}`
);
