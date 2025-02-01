fim_jogo = 'n'
chances = int(6)
palavra = "Martin".upper()
tamanho_palavra = int(len(palavra))
letras_palavra = []
letras = []
letras_usadas = []

print(" ", end="")
print("_", end="")
print("_", end="")
print("_", end="")
print("_", end="")
print("_", end="")
print("_", end="")
print("_")

print("|", end="")
print(" ", end="")
print(" ", end="")
print(" ", end="")
print(" ", end="")
print(" ", end="")
print(" ", end="")
print(" ", end="")
print("|")

print("|")
print("|")
print("|")
print("|")
print("|")
print("|")

for k in range(tamanho_palavra):
    letras_palavra.append(palavra[k:k + 1])
    letras.append("_")

print("")

for u in range(tamanho_palavra):
    print(letras[u], "", end="")

while fim_jogo == "n":
    print("")
    print("")
    tentativa = input("Digite uma letra: ")
    vitoria_derrota = "v"
    errou = "s"
    letra_ja_usada = "n"

    if tentativa.upper() == palavra:
        break

    if letras_usadas.count(tentativa.upper()) > 0:
           letra_ja_usada = "s"
           print("")
           print("")
           print("Esta letra já foi usada!")
           print("")

    letras_usadas.append(tentativa.upper())

    for o in range(tamanho_palavra):

        if tentativa.upper() == letras_palavra[o]:
            letras[o] = letras_palavra[o]
            errou = "n"
    
    if letra_ja_usada == "s":
        errou = "n"

    if errou == "s":
        chances = chances - 1

        if chances == 0:
            fim_jogo = "s"
            vitoria_derrota = "d"

            print(" ", end="")
            print("_", end="")
            print("_", end="")
            print("_", end="")
            print("_", end="")
            print("_", end="")
            print("_", end="")
            print("_")

            print("|", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print("|")

            print("|", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print("_", end="")
            print("O", end="")
            print("_")

            print("|", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print("|")

            print("|", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print(" ", end="")
            print("/", end="")
            print("\\")

            print("|")
            print("|")

    if fim_jogo == "s":
        break
    
    if chances == 6:
        print(" ", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("|")

        print("|")
        print("|")
        print("|")
        print("|")
        print("|")
       
    elif chances == 5:
        print(" ", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("|")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("O")

        print("|")
        print("|")
        print("|")
        print("|")

    elif chances == 4:
        print(" ", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("|")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("_", end="")
        print("O")

        print("|")
        print("|")
        print("|")
        print("|")

    elif chances == 3:
        print(" ", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("|")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("_", end="")
        print("O", end="")
        print("_")

        print("|")
        print("|")
        print("|")
        print("|")

    elif chances == 2:
        print(" ", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("|")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("_", end="")
        print("O", end="")
        print("_")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("|")

        print("|")
        print("|")
        print("|")

    elif chances == 1:
        print(" ", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_", end="")
        print("_")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("|")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("_", end="")
        print("O", end="")
        print("_")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("|")

        print("|", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print(" ", end="")
        print("/")

        print("|")
        print("|")
        
    print("")

    for r in range(tamanho_palavra):
        print(letras[r], "", end="")

    fim_jogo = "s"

    for l in range(tamanho_palavra):
        if letras[l] == "_":
            fim_jogo = "n"

if vitoria_derrota == "v":
    print("")
    print("")
    print("Você acertou! Parabéns!")
    print("")
    print("")
else:
    print("")
    print("")
    print("Você perdeu! A palavra era:", palavra)
    print("")
    print("")