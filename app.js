let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
};

function mensagemInicial() {
   exibirTextoNaTela('h1', 'Jogo do Número Secreto');
   exibirTextoNaTela('p', 'Escolha um número entre 1 e 100'); 
};

mensagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;
   
   if (chute > 100 || chute < 1) {
      
      exibirTextoNaTela('p', 'Erro! Digite um número entre 1 e 100!');

   } else if (chute > numeroSecreto && chute <= 100) {
      
      exibirTextoNaTela('p', 'O número secreto está abaixo deste número!');
   
   } else if (chute < numeroSecreto && chute <= 100) {
   
      exibirTextoNaTela('p', 'O número secreto está acima deste número!');
   
   } else {
   
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}!`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   
   };

   tentativas++;
   limparCampo();

};

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
};

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
};

function novoJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   tentativas = 1
   limparCampo();
   mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disable', true);
};


