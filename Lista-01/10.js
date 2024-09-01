let prompt = require('prompt-sync')();

function escreverNumero() {
    const numero = parseInt(prompt("Digite um número inteiro: "));
  
    if (isNaN(numero)) {
      console.log("Valor inválido. Por favor, insira um número inteiro.");
      return;
    }
  
    for (let i = 0; i < 10; i++) {
      console.log(`Número: ${numero}`);
    }
  }
  
  escreverNumero();