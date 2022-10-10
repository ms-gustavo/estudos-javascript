let veiculo1 = prompt(`Informe o nome do primeiro veículo`);
let velocidade1 = prompt(`Informe a velocidade do veiculo`);

let veiculo2 = prompt(`Informe o nome do segundo veículo`);
let velocidade2 = prompt(`Informe a velocidade do segundo veículo`);

if (Number(velocidade1) > Number(velocidade2)) {
  alert(`${veiculo1} é mais rápido que ${veiculo2}`);
} else if (Number(velocidade2) > Number(velocidade1)) {
  alert(`${veiculo2} é mais rápido que ${veiculo1}`);
} else {
  alert(`${veiculo1} e ${veiculo2} têm a mesma velocidade`);
}
