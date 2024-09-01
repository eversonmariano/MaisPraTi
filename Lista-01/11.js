let prompt = require('prompt-sync')();

function calcularSoma() {
    let soma = 0;
  
    for (let i = 0; i < 5; i++) {
      const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  
      if (isNaN(numero)) {
        console.log("Valor inválido. Por favor, insira um número inteiro.");
        i--; // volta para a iteração anterior
        continue;
      }
  
      soma += numero;
    }
  
    console.log(`A soma total é: ${soma}`);
  }
  
  calcularSoma();