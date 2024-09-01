let prompt = require('prompt-sync')();

function escreverValoresEmOrdemCrescente() {
  let valor1 = parseInt(prompt("Digite o primeiro valor: "));
  let valor2 = parseInt(prompt("Digite o segundo valor: "));

  // Verificar se os valores são iguais
  while (valor1 === valor2) {
    console.log("Os valores não podem ser iguais. Por favor, insira valores diferentes.");
    valor1 = parseInt(prompt("Digite o primeiro valor: "));
    valor2 = parseInt(prompt("Digite o segundo valor: "));
  }

  // Escrever os valores em ordem crescente
  console.log(`Os valores em ordem crescente são: ${Math.min(valor1, valor2)} e ${Math.max(valor1, valor2)}`);
}

escreverValoresEmOrdemCrescente();