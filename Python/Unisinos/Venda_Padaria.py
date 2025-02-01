broas = int(input("Quantidade de broas vendidas: "))
paes = int(input("Quantidade de pães vendidos: "))

vlr_total_broas = round(float(2 * broas), 2)
vlr_total_paes = round(float(0.5 * paes), 2)

print("Valores")
print("Broas: R$", vlr_total_broas)
print("Pães: R$", vlr_total_paes)
print("Total: R$", vlr_total_broas + vlr_total_paes)