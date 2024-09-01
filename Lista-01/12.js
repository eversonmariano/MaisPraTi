let prompt = require('prompt-sync')();

function exibirTabuada() {
    const numero = parseInt(prompt("Digite um número inteiro: "));
  
    if (isNaN(numero)) {
      console.log("Valor inválido. Por favor, insira um número inteiro.");
      return;
    }
  
    console.log(`Tabuada do ${numero}:`);
  
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  exibirTabuada();