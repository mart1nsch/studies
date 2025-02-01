(function iniciaValidador() {
    eventosBtns();
})();

function eventosBtns() {
    const btnElement = document.querySelector(`.btn-validar`);
    btnElement.addEventListener(`click`, validaCpf);
}

// Minha que eu fiz, sem usar nada de array
/*function validaCpf() {
    const inputElement = document.querySelector(`#input`);
    const inputValue = inputElement.value.replace(`.`, ``).replace(`.`, ``).replace(`-`, ``);
    let contador = 0;
    let somaPrimeiroDigito = 0;
    let somaSegundoDigito = 0;

    for(let i=10; i>=2; i--) {
        somaPrimeiroDigito += Number(inputValue[contador]) * i;
        contador++;
    }
        
    const contaPrimeiroDigito = 11 - (somaPrimeiroDigito % 11);
    const primeiroDigito = contaPrimeiroDigito > 9 ? 0 : contaPrimeiroDigito;
    contador = 0;

    for(let i=11; i>=2; i--) {
        somaSegundoDigito += Number(inputValue[contador]) * i;
        contador++;
    }

    const contaSegundoDigito = 11 - (somaSegundoDigito % 11);
    const segundoDigito = contaSegundoDigito > 9 ? 0 : contaSegundoDigito;
    
    if(Number(inputValue[inputValue.length - 1]) === segundoDigito
       && Number(inputValue[inputValue.length - 2]) === primeiroDigito) {
        alert(`CPF Valido!`);
    } else {
        alert(`CPF Invalido!`);
    }
}*/

// Usando array
function validaCpf() {
    const inputElement = document.querySelector(`#input`);
    const inputValue = inputElement.value.replace(`.`, ``).replace(`.`, ``).replace(`-`, ``);
    const arrayInput = [];

    for(value of inputValue) {
        arrayInput.push(value);
    }

    const primeiroDigito = executaContaDigito(executaReduce(arrayInput, 10));
    const segundoDigito = executaContaDigito(executaReduce(arrayInput, 11));

    if(Number(arrayInput[arrayInput.length - 1]) === segundoDigito
       && Number(arrayInput[arrayInput.length - 2]) === primeiroDigito) {
        alert(`CPF Valido!`);
    } else {
        alert(`CPF Invalido`);
    }
}

function executaReduce(array, comecoContador) {
    let contador = comecoContador;
    const maxIndice = comecoContador === 10 ? 9 : 10;

    return array.reduce((ac, numero, indice) => {
        indice >= maxIndice ? ac : ac += (Number(numero) * contador);
        contador--;
        return ac;
    }, 0);
}

function executaContaDigito(valorSomado) {
    const calculo = 11 - (valorSomado % 11);
    return calculo > 9 ? 0 : calculo;
}
