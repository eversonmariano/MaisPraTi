// Criando o array de objetos clientes
const clientes = [
    { nome: "Pedro", idade: 28, cidade: "São Paulo" },
    { nome: "José", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Everson", idade: 42, cidade: "Belo Horizonte" },
    { nome: "Maria", idade: 29, cidade: "Curitiba" },
    { nome: "Fernanda", idade: 31, cidade: "Porto Alegre" }
  ];
  
  // Variável para contar quantos clientes têm mais de 30 anos
  let contador = 0;
  
  // Usando forEach para contar os clientes com mais de 30 anos
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      contador++;
    }
  });
  
  // Exibindo o número de clientes com mais de 30 anos
  console.log(`Número de clientes com mais de 30 anos: ${contador}`);
  