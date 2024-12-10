// Função para calcular a média válida de um atleta
function calcularMedia(atletas) {
    // Loop para percorrer cada atleta
    atletas.forEach(atleta => {
      // Ordena as notas de forma crescente
      let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
      
      // Remove a menor e a maior nota
      let notasValidas = notasOrdenadas.slice(1, 4);
  
      // Calcula a soma das notas válidas
      let somaNotas = 0;
      notasValidas.forEach(nota => {
        somaNotas += nota;
      });
  
      // Calcula a média
      let media = somaNotas / notasValidas.length;
  
      // Exibe os resultados
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(', ')}`);
      console.log(`Média Válida: ${media}`);
      console.log('');
    });
  }
  
  // Entrada dos dados
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Chama a função para calcular a média
  calcularMedia(atletas);