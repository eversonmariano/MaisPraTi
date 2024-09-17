let prompt = require('prompt-sync')();

let carro = {
  marca: prompt("Marca: "),
  modelo: prompt("Modelo: "),
  ano: prompt("Ano: "),
  cor: prompt("Cor: "),
};

for (let prop in carro) {
  console.log(`${prop}: ${carro[prop]}`);
}