import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { switchTheme } from "./switchTheme.js";
import handleType, { getValues, clearValues } from "./moreFunctions.js";

document.querySelectorAll(".charKey").forEach(getValues);

document.getElementById("clear").addEventListener("click", clearValues);

document.getElementById("input").addEventListener("keydown", handleType);

document.getElementById("equal").addEventListener("click", calculate);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);

document.getElementById("switchTheme").addEventListener("click", switchTheme);
