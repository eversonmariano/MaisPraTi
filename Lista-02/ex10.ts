// Criando o array de objetos vendas
const vendas = [
    { produto: "Notebook", quantidade: 2, valor: 3000 },
    { produto: "Smartphone", quantidade: 5, valor: 1500 },
    { produto: "Tablet", quantidade: 3, valor: 2000 },
    { produto: "Fone de Ouvido", quantidade: 10, valor: 200 }
  ];
  
  // Variável para armazenar o valor total das vendas
  let valorTotal = 0;
  
  // Usando forEach para calcular o valor total das vendas
  vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
  });
  
  // Exibindo o valor total das vendas
  console.log(`Valor total de vendas: R$${valorTotal.toFixed(2)}`);
  