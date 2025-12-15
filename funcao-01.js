// função auto executavel(invocavel)
(function somar(a=10, b=5){
  console.log(a+b);
})();

function verificarIdade(idade) {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

const celsiusParaFahrenheit = (c) => (c * 9/5) + 32;

function parOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}
const contarLetras = (texto) => texto.length;


function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function somarArray(numeros) {
  let total = 0;

  for (let num of numeros) {
    total += num;
  }

  return total;
}
