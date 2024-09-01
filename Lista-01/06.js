let prompt = require('prompt-sync')();

function verificarTriangulo() {
    let ladoA = parseFloat(prompt("Digite o lado A: "));
    let ladoB = parseFloat(prompt("Digite o lado B: "));
    let ladoC = parseFloat(prompt("Digite o lado C: "));
  
    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
      console.log("Valores inválidos. Por favor, insira valores positivos.");
      return;
    }
  
    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
      if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo eqüilátero");
      } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles");
      } else {
        console.log("Triângulo escaleno");
      }
    } else {
      console.log("Os lados fornecidos não formam um triângulo.");
    }
  }
  
  verificarTriangulo();