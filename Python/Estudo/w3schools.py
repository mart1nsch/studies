# Mostra dado em tela
print('Hello World!')

# Varíaveis
a = 3
b = 2

c, d, e = 1, 2, 3

f = g = 9

h = [6, 7, 8]
i, j, k = h

global l
l = 5

print(a + b)

# IF, ELIF, ELSE
if b > a:
    print("b é maior que a")
elif b == a:
    print("b é igual a a")
else:
    print("b é menor que a")

# Funções
def soma(a, b):
    print(a + b)

soma(98, 1)

# Converter para números
x = 1
x = int(x) # integer
x = float(x) # float

# Random
import random
print(random.randrange(1, 50)) # pode pegar valor de 1 até 49