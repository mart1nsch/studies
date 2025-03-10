def pesquisaBinaria(lista, item):
    baixo = 0
    alto = len(lista) - 1

    while baixo <= alto:
        meio = int((baixo + alto) / 2)
        chute = lista[meio]

        print('Tentativa')
        if chute == item:
            return meio
        elif chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1
    
    return None

numeros = [1, 3, 5, 7, 9]
print(pesquisaBinaria(numeros, 3)) # 1
print(pesquisaBinaria(numeros, 2)) # None
print(pesquisaBinaria(numeros, 1)) # 0
print(pesquisaBinaria(numeros, 9)) # 4

arrayGrande = list(range(1, 129))
print(pesquisaBinaria(arrayGrande, 1)) # 7 Tentativas

arrayGrande = list(range(1, 257))
print(pesquisaBinaria(arrayGrande, 1)) # 8 Tentativas