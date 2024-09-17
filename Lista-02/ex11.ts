// Criando o array de objetos pedidos
const pedidos = [
    { cliente: "Raquel", produto: "Notebook", quantidade: 2 },
    { cliente: "Maria", produto: "Smartphone", quantidade: 1 },
    { cliente: "Manoel", produto: "Tablet", quantidade: 1 },
    { cliente: "Rita", produto: "Fone de Ouvido", quantidade: 5 },
    { cliente: "Isabel", produto: "Notebook", quantidade: 1 }
  ];
  
  // Objeto para armazenar a quantidade total de produtos por cliente
  const totalPorCliente = {};
  
  // Usando forEach para agrupar a quantidade total de produtos por cliente
  pedidos.forEach(pedido => {
    if (totalPorCliente[pedido.cliente]) {
      totalPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
      totalPorCliente[pedido.cliente] = pedido.quantidade;
    }
  });
  
  // Exibindo o resultado
  console.log(totalPorCliente);
  