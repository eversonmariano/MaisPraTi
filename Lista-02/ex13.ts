// Criando o objeto carrinho
const carrinho = {
    itens: [
      { nome: "Notebook", quantidade: 1, precoUnitario: 3000 },
      { nome: "Smartphone", quantidade: 2, precoUnitario: 1500 },
      { nome: "Tablet", quantidade: 3, precoUnitario: 2000 },
      { nome: "Fone de Ouvido", quantidade: 4, precoUnitario: 200 }
    ]
  };
  
  // Variável para armazenar o valor total do carrinho
  let valorTotal = 0;
  
  // Usando forEach para calcular o valor total do carrinho
  carrinho.itens.forEach(item => {
    const valorItem = item.quantidade * item.precoUnitario;
    valorTotal += valorItem;
  });
  
  // Exibindo o valor total do carrinho
  console.log(`Valor total do carrinho: R$${valorTotal.toFixed(2)}`);
  