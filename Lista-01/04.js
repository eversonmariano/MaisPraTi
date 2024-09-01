
let prompt = require('prompt-sync')();

    console.log("Bem-vindo ao menu interativo!");
    console.log("Escolha uma opção:");
    console.log("Opção 1");
    console.log("Opção 2");
    console.log("Opção 3");


  
let resposta = prompt("Digite a opção desejada: ");
  
    switch (resposta) {
      case "1":
        console.log("Oi! Tudo bom?");;
        break;
      case "2":
        console.log("Gosto de pastel!");;
        break;
      case "3":
        console.log("Até logo!");
        return;
      default:
        console.log("Opção inválida. Tente novamente.");
    }