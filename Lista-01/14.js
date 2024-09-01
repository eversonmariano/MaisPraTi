let prompt = require('prompt-sync')();


function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número inteiro: "));
  
    if (isNaN(numero)) {
      console.log("Valor inválido. Por favor, insira um número inteiro.");
      return;
    }
  
    if (numero < 0) {
      console.log("O fatorial não é definido para números negativos.");
      return;
    }
  
    let fatorial = 1;
  
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
  
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
  }
  
  calcularFatorial();