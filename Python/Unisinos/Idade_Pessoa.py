nome = input("Seu nome, por favor: ")
idade = int(input("Sua idade: "))

if idade >= 18:
    print("Você é adulto")
elif idade < 18 and idade > 13:
    print("Você é adolescente")
elif idade <= 13 and idade >= 0:
    print("Você é criança")
else:
    print("Idade inválida")