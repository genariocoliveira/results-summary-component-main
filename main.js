console.log('Funcionou')

fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    // aqui você pode acessar os objetos do array JSON
    const objeto1 = data[0];
    const objeto2 = data[1];
    const objeto3 = data[2];
    const objeto4 = data[3];

    
    // aqui você pode acessar as propriedades de cada objeto e exibir na página HTML
    document.getElementById('nome1').textContent = objeto1.category;
    document.getElementById('score1').textContent = objeto1.score;
    

    document.getElementById('nome2').textContent = objeto2.category;
    document.getElementById('score2').textContent = objeto2.score;
    
    document.getElementById('nome3').textContent = objeto3.category;
    document.getElementById('score3').textContent = objeto3.score;
    

    document.getElementById('nome4').textContent = objeto4.category;
    document.getElementById('score4').textContent = objeto4.score;
    
  });