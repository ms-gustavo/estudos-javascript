export default function calculate() {
  const resultInput = document.querySelector("#result");
  resultInput.value = "ERRO"; //ao clicar no =, input de resultado vai pra ERRO
  resultInput.classList.add("error"); //adiciona classe Erro ao input (CSS)
  const result = eval(input.value); //executa o codigo JS escrito no input
  resultInput.value = result;
  resultInput.classList.remove("error");
}
