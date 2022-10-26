import calculate from "./calculate.js";

const input = document.getElementById("input");
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

function getValues(charKeyBtn) {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
}

function clearValues() {
  input.value = "";
  input.focus();
}

export default function handleType(ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1); //Apagar último valor quando Backspace
  }
  if (ev.key === "Enter") {
    calculate(); //Chama a função "Calculate()" quando pressionar Enter
  }
}

export { getValues, clearValues };
