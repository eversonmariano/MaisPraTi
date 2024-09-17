
let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
  };
  
  for (let prop in livro) {
    if (prop === "editora") {
      console.log("A propriedade editora já existe!");
      break;
    }
  }
  
  if (!livro.hasOwnProperty("editora")) {
    livro.editora = "Editora Martins Fontes";
    console.log("A propriedade editora foi adicionada!");
  }
  
  console.log(livro);