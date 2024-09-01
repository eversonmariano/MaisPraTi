// Recebe um número inteiro do usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número inteiro: ', (numero) => {
    const num = parseInt(numero);
  
    // Verifica se o número é par ou ímpar
    if (num % 2 === 0) {
      console.log('O número é par.');
    } else {
      console.log('O número é ímpar.');
    }
  
    readline.close();
  });