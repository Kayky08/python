import sys

def iniciar(lista):
    opcao = 0

    while True:
        print("============= CENTRAL DE ALUNOS =============")
        print("1. Adicionar aluno")
        print("2. Listar todos os alunos")
        print("3. Buscar aluno pelo nome")
        print("4. Remover aluno")
        print("5. Mostrar média geral das notas")
        print("6. Sair")

        opcao = int(input("\nInsira a opção que deseja: "))

        match opcao:
            case 1:
                adicionar_aluno(lista)
            case 2:
                listar_todos_alunos(lista)
            case 3:
                buscar_aluno_nome(lista)
            case 4:
                remover_aluno(lista)
            case 5:
                media_notas(lista)
            case _:
                sys.exit()

def adicionar_aluno(lista):
    aluno = {
        "nome":  input("Por favor insira o nome do aluno: "),
        "idade": int(input("Por favor insira a idade do aluno: ")),
        "nota":  float(input("Por favor insira a nota do aluno: "))
    }

    lista.append(aluno)

def listar_todos_alunos(lista):
    for aluno in lista:
        print("----------------------------------------")
        print(f"Nome: {aluno["nome"]}")
        print(f"Idade: {aluno["idade"]} anos")
        print(f"Nota: {aluno["nota"]:.2f}")
        print("----------------------------------------")

def buscar_aluno_nome(lista):
    nome = input("Digite o nome do aluno: ")

    for aluno in lista:
        if nome in aluno["nome"]:
            print("----------------------------------------")
            print(f"Nome: {aluno["nome"]}")
            print(f"Idade: {aluno["idade"]} anos")
            print(f"Nota: {aluno["nota"]:.2f}")
            print("----------------------------------------")

def remover_aluno(lista):
    nome = input("Digite o nome do aluno: ")

    for aluno in lista:
        if aluno["nome"] == nome:
            print("O seguinte registro foi deletado:")
            print("----------------------------------------")
            print(f"Nome: {aluno["nome"]}")
            print(f"Idade: {aluno["idade"]} anos")
            print(f"Nota: {aluno["nota"]:.2f}")
            print("----------------------------------------")

            lista.remove(aluno)
            break

def media_notas(lista):
    nota = 0
    qtda = 0
    resultado = 0

    for aluno in lista:
        nota += aluno["nota"]
        qtda += 1

    resultado = nota/qtda

    print(f"\nA media geral da turma é de: {resultado}")

lista_alunos = [
    {
        "nome":  "Marcos Silva",
        "idade": 15,
        "nota":  10
    }
]

iniciar(lista_alunos)