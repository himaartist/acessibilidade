document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade'); 
    botaoDeAcessibilidade.addEventListener('click', function() { 
      botaoDeAcessibilidade.classList.toggle('rotacao-botao');
   opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    }); 
   const aumentarFonte = document.getElementById('aumentar-fonte'); 
     const diminuirFonte = document.getElementById('diminuir-fonte'); 
     const texto = document.querySelector('p'); 
    aumentarFonte.addEventListener('click', function() {
    
   let tamanhoAtual = window.getComputedStyle(texto, null).getPropertyValue('font-size'); 
     let novoTamanho = parseFloat(tamanhoAtual) + 2; 
     texto.style.fontSize = novoTamanho + 'px'; 
    }); 
     diminuirFonte.addEventListener('click', function() {
    
   let tamanhoAtual = window.getComputedStyle(texto, null).getPropertyValue('font-size'); 
     let novoTamanho = parseFloat(tamanhoAtual) - 2;
    texto.style.fontSize = novoTamanho + 'px';
    }); 
    });