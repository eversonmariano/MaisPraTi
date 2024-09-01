let prompt = require('prompt-sync')();

function calcularMedia() {
    let soma = 0;
    let contador = 0;
  
    while (true) {
      const numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair): "));
  
      if (numero === 0) {
        break; // sai do loop quando o usuário digita 0
      }
  
      if (isNaN(numero)) {
        console.log("Valor inválido. Por favor, insira um número decimal.");
        continue; // volta para a iteração anterior
      }
  
      soma += numero;
      contador++;
    }
  
    if (contador === 0) {
      console.log("Nenhum número foi digitado.");
    } else {
      const media = soma / contador;
      console.log(`A média aritmética é: ${media.toFixed(2)}`);
    }
  }
  
  calcularMedia();