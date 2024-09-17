// Criando o array de objetos pessoas
const pessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 35, cidade: "Belo Horizonte" }
  ];
  
  // Usando o for...of para exibir as informações de cada pessoa
  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }
  