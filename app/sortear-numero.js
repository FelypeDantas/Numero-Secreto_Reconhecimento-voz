const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorValor = document.getElementById('menor-valor');
const elemntoMaiorValor = document.getElementById('maior-valor');

elementoMenorValor.innerHTML = menorValor;
elemntoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}