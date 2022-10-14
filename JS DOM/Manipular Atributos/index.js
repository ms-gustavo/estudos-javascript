const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", () => {
  input.value = "Olá, mundo!";
  console.log(input.value); //valor em tempo real
  console.log(input.getAttribute("value")); //valor pré-definido do atributo
});

document.getElementById("type").addEventListener("click", () => {
  input.type = input.type !== "radio" ? "radio" : "text";
  //input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", () => {
  input.placeholder = "Digite algo";
});

document.getElementById("disable").addEventListener("click", () => {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", () => {
  const data = input.dataset.something;
  console.log(`O valor do atributo data-something é ${data}`);
  input.dataset.something = `Algum outro valor`;
  console.log(input.dataset.something);
});
