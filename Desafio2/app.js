//exe 1

function exibirTexto() {
   console.log('Olá, mundo!');
};

//exe 2
let nome = 'João';
function exibirTexto2(nome) {
   console.log(`Olá, ${nome}!`);
};

//exe 3

let numero = 3;
function dobrarNumero(numero) {
   let dobro = numero * 2;
   console.log(`O número inicial era: ${numero} e o dobro deste número será ${dobro}`);
};

//exe 4

let numero1 = 5;
let numero2 = 7;
let numero3 = 3;
function mediaTresNumeros(numero1, numero2, numero3) {
   let media = (numero1 + numero2 + numero3)/3;
   console.log(`A média entre os números ${numero1}, ${numero2}, ${numero3} será ${media}`);
};

//exe 5

let numero4 = 8;
let numero5 = 11;
function maiorNumero(numero4, numero5) {
   let maior;
   if (numero4 > numero5) {
      maior = numero4;
   } else {
      maior = numero5;
   };

   console.log(`O número maior entre ${numero4} e ${numero5} é o ${maior} `);
};

//exe 6

let numero6 = 2024;
function exponenciaDoNumero(numero6) {
   let exponencia = numero6 ** 2;
   console.log(`O número inicial era: ${numero6} e o resultado deste número vezes ele mesmo será ${exponencia}`);
};

