from typing import Optional
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

#------------------- FUNÇÕES -------------------
def create(produtos):
    id = int(input("Codigo: "))
    descritivo = input("Descritivo: ")
    quantidade = int(input("Quantidade: "))
    preco = float(input("Preço: "))

    produto = {
        "id":id,
        "descritivo":descritivo,
        "quantidade":quantidade,
        "preco":preco
    }

    produtos.append(produto)

    print("Produto Cadastrado")

def read_all(produtos):
    if len(produtos) == 0:
        print("Nenhum produto cadastrado!")
        return
    
    for produto in produtos:
        print("--------------------------")
        print(f"Codigo: {produto["id"]}")
        print(f"Descritivo: {produto["descritivo"]}")
        print(f"Quantidade: {produto["quantidade"]}")
        print(f"Preço: {produto["preco"]}")

def read_one(produtos):
    id = int(input("Digite o codigo do produto: "))

    for produto in produtos:
        if produto["id"] == id:
            print("--------------------------")
            print(f"Codigo: {produto["id"]}")
            print(f"Descritivo: {produto["descritivo"]}")
            print(f"Quantidade: {produto["quantidade"]}")
            print(f"Preço: {produto["preco"]}")

def update(produtos):
    id = input("Digite o codigo do produto: ")
    campo = input("Digite o campo para ser alterado: ")
    campo_alt = input("Digite o novo valor do campo: ")

    for produto in produtos:
        if produto["id"] == id:
            produto[f"{campo}"] == campo_alt

            print("--------------------------")
            print(f"Codigo: {produto["id"]}")
            print(f"Descritivo: {produto["descritivo"]}")
            print(f"Quantidade: {produto["quantidade"]}")
            print(f"Preço: {produto["preco"]}")
    
    print("\nProduto Alterado")

def delete(produtos):
    id = input("Digite o codigo do produto: ")

    for produto in produtos:
        if produto["id"] == id:
            print("")
            print(f"Codigo: {produto["id"]}")
            print(f"Descritivo: {produto["descritivo"]}")
            print(f"Quantidade: {produto["quantidade"]}")
            print(f"Preço: {produto["preco"]}")
    
    print("\nProduto Alterado")

    print("Produto Deletado")

#------------------- TESTE -------------------
produtos = [
    {
        "id": 1,
        "descritivo": "teste01",
        "quantidade": 5,
        "preco": 52.2
    },
    {
        "id": 2,
        "descritivo": "teste02",
        "quantidade": 25,
        "preco": 10.2
    },
    {
        "id": 3,
        "descritivo": "teste03",
        "quantidade": 50,
        "preco": 78.8
    },
]

while True:
    print("\n=== CONTROLE DE ESTOQUE ===")
    print("1 - Cadastrar produto")
    print("2 - Listar produtos")
    print("3 - Buscar um produto")
    print("4 - Alterar produto")
    print("5 - Deletar um produto")
    print("6 - Sair")

    opcao = input("\nEscolha: ")

    if opcao == "1":
        create(produtos)

    elif opcao == "2":
        read_all(produtos)

    elif opcao == "3":
        read_one(produtos)

    elif opcao == "4":
        update(produtos)

    elif opcao == "5":
        delete(produtos)
    
    elif opcao == "6":
        print("Encerrando...")
        break

    else:
        print("Opção inválida.")