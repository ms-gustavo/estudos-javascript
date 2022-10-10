const choosenWord = prompt(`Digite a palavra desejada:`);
let invertedWord = "";

//.length - 1 pra pegar a ultima letra da string
for (let i = choosenWord.length - 1; i >= 0; i--) {
  invertedWord += choosenWord[i];
}

if (choosenWord === invertedWord) {
  alert(`${choosenWord} é um palíndromo`);
} else {
  alert(
    `${choosenWord} não é um palíndromo\n\n${choosenWord} !== ${invertedWord}`
  );
}
