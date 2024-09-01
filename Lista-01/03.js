const prompt = require('prompt-sync')();

let nota = parseInt(prompt("Digite a nota: "));


if (nota < 0 || nota > 10) {
    return console.log("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
}

if (nota >= 7) {
    return console.log("Aprovado");
} else if (nota >= 4 && nota < 7) {
    return console.log("Recuperação");
} else {
    return console.log("Reprovado");
}


