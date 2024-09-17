// Criando o array de objetos produtos
const produtos = [
    { nome: "Televisão", preco: 2500, desconto: 0 },
    { nome: "Geladeira", preco: 3000, desconto: 0 },
    { nome: "Fogão", preco: 1500, desconto: 0 },
    { nome: "Máquina de Lavar", preco: 2200, desconto: 0 }
  ];
  
  // Usando forEach para aplicar o desconto de 10% e exibir o novo preço
  produtos.forEach(produto => {
    // Aplicando o desconto de 10%
    produto.desconto = 0.10; // 10%
    const descontoAplicado = produto.preco * produto.desconto;
    const novoPreco = produto.preco - descontoAplicado;
    
    console.log(`Produto: ${produto.nome}, Preço original: R$${produto.preco.toFixed(2)}, Novo Preço: R$${novoPreco.toFixed(2)}`);
  });
  