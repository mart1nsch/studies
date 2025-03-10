function pesquisaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        let meio = parseInt((baixo + alto) / 2);
        let chute = lista[meio];

        if (chute === item) {
            return meio;
        } else if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }

    }

    return "Não encontrado";

}

numeros = [1, 3, 5, 7, 9];
console.log(pesquisaBinaria(numeros, 3)) // 1
console.log(pesquisaBinaria(numeros, 2)) // Não encontrado
console.log(pesquisaBinaria(numeros, 10)) // Não encontrado
console.log(pesquisaBinaria(numeros, 7)) // 3