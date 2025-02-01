nome_jogador1 = input("Nome do primeiro jogador: ")
idade_jogador1 = int(input("Idade do primeiro jogador: "))

nome_jogador2 = input("Nome do segundo jogador: ")
idade_jogador2 = int(input("Idade do segundo jogador: "))

if idade_jogador1 == idade_jogador2:
  print ("Jogadores de mesma idade!")
elif idade_jogador1 > idade_jogador2:
  print(nome_jogador1 + " é mais velho!")
else:
  print(nome_jogador2 + " é mais velho!")