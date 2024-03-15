let text = document.querySelector('h1');
text.innerHTML = 'Hora do Desafio';

function bottonClick() {
   console.log('O botão foi clicado!');
};

function messangeJS() {
   console.log('Eu amo JS!');
};

function cityName() {
   var cidade = prompt('Fale o nome de uma cidade do Brasil:');
   alert(`Estive em ${cidade} e lembrei de você!`);
};

function plusMath() {
   var number1 = parseInt(prompt('Digite um número:'));
   var number2 = parseInt(prompt('Digite outro número:'));

   var result = number1+number2;

   alert(`A soma dos números ${number1} e ${number2} é  ${result}!`);
};
