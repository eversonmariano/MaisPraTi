// Criando o array de objetos funcionarios
const funcionarios = [
    { nome: "Lucas", cargo: "Contador", salario: 5000 },
    { nome: "Maria", cargo: "Engenheira", salario: 8000 },
    { nome: "Ana", cargo: "Arquiteta", salario: 4000 },
    { nome: "Carlos", cargo: "Pedreiro", salario: 12000 }
  ];
  
  // Definindo o valor específico do salário
  const valorEspecifico = 6000;
  
  // Usando o for...of para filtrar e exibir funcionários com salário maior que o valor específico
  for (const funcionario of funcionarios) {
    if (funcionario.salario > valorEspecifico) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
    }
  }
  