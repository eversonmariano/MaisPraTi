// Criando o array de objetos filmes
const filmes = [
    { titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", ano:  2001 },

    { titulo: "Parasita", diretor: "Bong Joon-ho", anoLancamento: 2019 },
    { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anoLancamento: 1972 }
  ];
  
  // Criando um novo array para armazenar apenas os títulos
  const titulos = [];
  
  // Usando forEach para adicionar os títulos ao novo array
  filmes.forEach(filme => {
    titulos.push(filme.titulo);
  });
  
  // Exibindo o array de títulos
  console.log(titulos);
  