// Criando o array de objetos estoque
const estoque = [
    { produto: "Notebook", quantidade: 5, minimo: 38 },
    { produto: "Smartphone", quantidade: 15, minimo: 54 },
    { produto: "Tablet", quantidade: 8, minimo: 23 },
    { produto: "Fone de Ouvido", quantidade: 30, minimo: 40 }
  ];
  
  // Usando forEach para atualizar a quantidade dos produtos abaixo do mínimo
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2; // Duplicando a quantidade
    }
  });
  
  // Exibindo o resultado atualizado
  console.log(estoque);
  