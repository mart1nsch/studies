const prompt = require('prompt-sync')();

// Ordena um array, as duas fazem a exata mesma coisa
const array = [5, 9, 3, 4, 98, 6, 9, 2, 1, 10];

/*function ordenaArray(arrayRecebido) {
    const novoArray = [];

    for (let i=0; i<arrayRecebido.length; i++) {
        for (let i=0; i<(arrayRecebido.length-1); i++) {
            if (arrayRecebido[i] > arrayRecebido[i+1]) {
                const valorTrocar = arrayRecebido[i+1];
                arrayRecebido[i+1] = arrayRecebido[i];
                arrayRecebido[i] = valorTrocar;
            }
        }
    }

    return arrayRecebido;
}

function ordenaArrayFuncaoPronta(arrayRecebido) {
    return arrayRecebido.sort((a, b) => a - b)
}

console.log(ordenaArray(array));
console.log(ordenaArrayFuncaoPronta(array));*/

// Soma todos os elementos de um array

/*function somaElementosArray(arrayRecebido) {
    soma = 0;
    for (num of arrayRecebido) soma += num;
    return soma;
}

function somaElementosArrayFuncaoPronta(arrayRecebido) {
    return arrayRecebido.reduce((a, n) => {
        a += n;
        return a;
    });
}

console.log(somaElementosArray(array));
console.log(somaElementosArrayFuncaoPronta(array));*/