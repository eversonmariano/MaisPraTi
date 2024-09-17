// Criando o objeto empresa
const empresa = {
    departamentos: [
      {
        nome: "TI",
        funcionarios: [
          { nome: "João" },
          { nome: "Maria" },
          { nome: "Pedro" }
        ]
      },
      {
        nome: "Recursos Humanos",
        funcionarios: [
          { nome: "Ana" },
          { nome: "Carlos" }
        ]
      },
      {
        nome: "Financeiro",
        funcionarios: [
          { nome: "Fernanda" },
          { nome: "Ricardo" }
        ]
      }
    ]
  };
  
  // Usando for...in para iterar sobre os departamentos
  for (const departamentoKey in empresa.departamentos) {
    const departamento = empresa.departamentos[departamentoKey];
    
    // Usando for...of para iterar sobre os funcionários do departamento
    for (const funcionario of departamento.funcionarios) {
      console.log(`Funcionário: ${funcionario.nome}, Departamento: ${departamento.nome}`);
    }
  }
  