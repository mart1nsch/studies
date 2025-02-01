nota_a = float(input("Nota do Grau A: "))
nota_b = float(input("Nota do Grau B: "))

total_a = round(float(nota_a * (1/3)), 2)
total_b = round(float(nota_b * (2/3)), 2)

print("Nota final:", total_a + total_b)