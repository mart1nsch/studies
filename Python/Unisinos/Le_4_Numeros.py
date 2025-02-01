primeiro_numero = int(input("Primeiro número: "))
segundo_numero = int(input("Segundo número: "))
terceiro_numero = int(input("Terceiro número: "))
quarto_numero = int(input("Quarto número: "))

soma = primeiro_numero + segundo_numero + terceiro_numero + quarto_numero

if soma == 0:
    print("O número é zero!")
elif ((soma / 2) - (int(soma / 2))) > 0:
    print("O número é ímpar!")
elif ((soma / 2) - (int(soma / 2))) == 0:
    print("O número é par!")