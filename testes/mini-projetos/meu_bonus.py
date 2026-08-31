salario_atual = float(input("Digite seu salario atual: "))
bonus = float(input("Digite seu bonus: "))

salario_final = salario_atual + (bonus * salario_atual)
aumento = salario_final - salario_atual

print(f"\nSeu salario com o bonus é: R${salario_final: .2f}")
print(f"Seu aumento foi de: R${aumento: .2f}")