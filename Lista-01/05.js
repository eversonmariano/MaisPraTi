
let prompt = require('prompt-sync')();

function calcularIMC() {
    const peso = parseFloat(prompt("Digite o peso (em kg): "));
    const altura = parseFloat(prompt("Digite a altura (em metros): "));
  
    if (peso <= 0 || altura <= 0) {
      console.log("Valores inválidos. Por favor, insira valores positivos.");
      return;
    }
  
    const imc = peso / (altura ** 2);
  
    if (imc < 18.5) {
      console.log(`IMC: ${imc}. Categoria: Baixo peso`);
    } else if (imc >= 18.5 && imc < 25) {
      console.log(`IMC: ${imc}. Categoria: Peso normal`);
    } else if (imc >= 25 && imc < 30) {
      console.log(`IMC: ${imc}. Categoria: Sobrepeso`);
    } else {
      console.log(`IMC: ${imc}. Categoria: Obesidade`);
    }
  }
  
  calcularIMC();