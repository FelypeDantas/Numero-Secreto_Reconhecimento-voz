function verificaValorValido(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        return;
    }

    if(numeroForMaiorouMenordoQuePermititido(numero)){
        elementoChute.innerHTML += `<div> Valor inválido</div>`;
        return ;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div> o número secreto é menor <i class="fa-duotone fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div> o número secreto é menor <i class="fa-duotone fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorouMenordoQuePermititido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})