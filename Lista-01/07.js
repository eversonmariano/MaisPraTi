const prompt = require('prompt-sync')();

function calcularValorMaças() {
  let quantidadeMaças;
  while (isNaN(quantidadeMaças) || quantidadeMaças <= 0) {
    quantidadeMaças = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
    if (isNaN(quantidadeMaças) || quantidadeMaças <= 0) {
      console.log("Quantidade inválida. Por favor, insira um valor positivo.");
    }
  }

  const valorUnitario = quantidadeMaças < 12 ? 0.30 : 0.25;
  const valorTotal = quantidadeMaças * valorUnitario;

  console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
}

calcularValorMaças();