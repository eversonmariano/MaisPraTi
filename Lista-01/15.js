function gerarFibonacci() {
    const quantidade = 10;
    let anterior = 0;
    let atual = 1;
  
    console.log("Os primeiros 10 números da sequência de Fibonacci são:");
  
    for (let i = 0; i < quantidade; i++) {
      console.log(atual);
  
      let proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
    }
  }
  
  gerarFibonacci();