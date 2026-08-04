from controle_estoque.database import SessionLocal
from controle_estoque.services.usuario_services import UsuarioService
from controle_estoque.services.produto_services import ProdutoService
from controle_estoque.services.categoria_services import CategoriaService
import sys

def iniciar():
    while True:
        print("\n=== CONTROLE DE ESTOQUE ===")
        print("1 - Usuarios")
        print("2 - Produtos")
        print("3 - Categorias")
        print("4 - Movimentações")
        print("5 - Sair")

        opcao = input("\nEscolha: ")

        if opcao == "1":
            interface_usuario()

        elif opcao == "2":
            interface_produto()

        elif opcao == "3":
            interface_categoria()

        elif opcao == "4":
            print("Alterar um Produto...")
        
        elif opcao == "5":
            print("Encerrando...")
            break

        else:
            print("Opção inválida.")

def interface_produto():
    while True:
        print("\n=== CONTROLE DE  ===")
        print("1 - Cadastrar produto")
        print("2 - Listar produtos")
        print("3 - Buscar um produto")
        print("4 - Alterar produto")
        print("5 - Deletar um produto")
        print("6 - Sair")

        opcao = input("\nEscolha: ")

        if opcao == "1":
            cadastrar_produto()

        elif opcao == "2":
            listar_produtos()

        elif opcao == "3":
            buscar_produto()

        elif opcao == "4":
            alterar_produto()

        elif opcao == "5":
            deletar_produto()
        
        elif opcao == "6":
            iniciar()

        else:
            print("Opção inválida.")

def interface_usuario():
    while True:
        print("\n=== USUÁRIOS ===")
        print("1 - Cadastrar usuário")
        print("2 - Listar usuário")
        print("3 - Buscar um usuário")
        print("4 - Alterar usuário")
        print("5 - Deletar um usuário")
        print("6 - Sair")

        opcao = input("\nEscolha: ")

        if opcao == "1":
            print("Cadastrar Usuário...")

        elif opcao == "2":
            listar_usuarios()

        elif opcao == "3":
            print("Buscar um Usuário...")

        elif opcao == "4":
            print("Alterar um Usuário...")

        elif opcao == "5":
            print("Deletar um Usuário...")
        
        elif opcao == "6":
            iniciar()

        else:
            print("Opção inválida.")

def interface_categoria():
    while True:
        print("\n=== Categoria ===")
        print("1 - Cadastrar categoria")
        print("2 - Listar categoria")
        print("3 - Buscar um categoria")
        print("4 - Alterar categoria")
        print("5 - Deletar um categoria")
        print("6 - Sair")

        opcao = input("\nEscolha: ")

        if opcao == "1":
            cadastrar_categoria()

        elif opcao == "2":
            listar_categoria()

        elif opcao == "3":
            buscar_categoria()

        elif opcao == "4":
            alterar_categoria()

        elif opcao == "5":
            deletar_categoria()
        
        elif opcao == "6":
            iniciar()

        else:
            print("Opção inválida.")

#----------------------------------- Usuarios -----------------------------------
def listar_usuarios():
    session = SessionLocal()
    service = UsuarioService()

    try:
        usuarios = service.listar_usuarios(session)

        print("\n========= USUÁRIOS =========\n")
        for usuario in usuarios:
            print(f"Código : {usuario.id}")
            print(f"Nome   : {usuario.nome}")
            print(f"Login  : {usuario.login}")
            print(f"Tipo   : {usuario.tipo.value}")

    except ValueError as erro:
        print(erro)

    finally:
        session.close()

#----------------------------------- Categoria -----------------------------------
def cadastrar_categoria():
    session = SessionLocal()
    service = CategoriaService()

    try:
        descritivo = input("Descrição: ")

        categoria = service.cadastrar_categoria(
            session,
            descritivo
        )

        print(f"\nCategoria '{categoria.descritivo}' cadastrada com o código {categoria.id} ")
    except ValueError as erro:
        print(erro)
    finally:
        session.close()

def listar_categoria():
    session = SessionLocal()
    service = CategoriaService()

    try:
        categorias = service.listar_categoria(session)

        print("\n========= CATEGORIA =========")
        for categoria in categorias:
            print(f"Código     : {categoria.id}")
            print(f"Descritivo : {categoria.descritivo}")

    except ValueError as erro:
        print(erro)

    finally:
        session.close()

def buscar_categoria():
    session = SessionLocal()
    service = CategoriaService()

    try:
        id = int(input("Código da cateogria: "))

        categoria = service.buscar_categoria(session, id)

        print(f"Código     : {categoria.id}")
        print(f"Descritivo : {categoria.descritivo}")

    except ValueError as erro:
        print(erro)
    finally:
        session.close()

def alterar_categoria():
    session = SessionLocal()
    service = CategoriaService()

    try:
        id = int(input("Código da categoria: "))
        categoria = service.buscar_categoria(session, id)

        descritivo = input("Nova descrição (Enter para manter): ")

        categoria = service.atualizar_categoria(
            session,
            id,
            descritivo = descritivo or None
        )

        print(f"\nCategoria '{categoria.descritivo}' atualizado com sucesso.")

    except ValueError as erro:
        print(erro)

    finally:
        session.close()

def deletar_categoria():
    session = SessionLocal()
    service = CategoriaService()

    try:
        id = int(input("Código da categoria: "))
        categoria = service.buscar_categoria(session,id)

        service.deletar_categoria(session,id)

        print(f"\nCategoria '{categoria.descritivo}' deletado com sucesso.")

    except ValueError as erro:
        print(erro)

    finally:
        session.close()

#----------------------------------- Produtos -----------------------------------
def cadastrar_produto():
    session = SessionLocal()
    # Abrindo uma conexão/sessão nova com o banco de dados
    service = ProdutoService()
    # Criando o service que vai aplicar as regras de negocio

    try:
        descritivo = input("Descrição: ")
        quantidade = int(input("Quantidade: "))
        preco = float(input("Preço: "))
        categoria_id = int(input("Código da categoria: "))
        # Pegando as informações do novo produto

        produto = service.cadastrar_produto(
            session,
            descritivo,
            quantidade,
            preco,
            categoria_id
        )
        # Delegando a parte de adição para o service lidar

        print(f"\nProduto '{produto.descritivo}' cadastrado com o código {produto.id}")
        # Retorna a mesagem de sucesso com o cadastro

    except ValueError as erro:
        print(erro)
        # Retorna a mensagem de erro caso alguma das operações não seja concluida corretamente

    finally:
        session.close()
        # Garante que a sessão é fechada no final se deu certo ou errado, evitando deixar as conexões abertas

def listar_produtos():
    session = SessionLocal()
    # Criando a conexão/sessão com o banco de dados
    service = ProdutoService()
    # Criando o service que vai aplicar as regras de negocio

    try:
        produtos = service.listar_produto(session)
        # Delegando para o service a aplicação das regras de negocio na função de listar

        print("\n========= PRODUTOS =========\n")
        for produto in produtos:
            print(f"Código     : {produto.id}")
            print(f"Descritivo : {produto.descritivo}")
            print(f"Qunatidade : {produto.quantidade}")
            print(f"Preço      : R$ {produto.preco:.2f}\n")
        # Exibindo as informações do produto

    except ValueError as erro:
        print(erro)
        # Retorna a mensagem de erro caso alguma das operações não seja concluida corretamente

    finally:
        session.close()
        # Garante que a sessão é fechada no final se deu certo ou errado, evitando deixar as conexões abertas

def buscar_produto():
    session = SessionLocal()
    # Criando a conexão/sessão com o banco de dados
    service = ProdutoService()
    # Criando o serviço para aplicar a regras de negocio

    try:
        id = int(input("Código do produto: "))
        # Input para pegar o id do produto para buscar
        produto = service.buscar_produto(session, id)
        # Buscando o produto e aplicando a regra

        print(f"\nCódigo     : {produto.id}")
        print(f"Descritivo : {produto.descritivo}")
        print(f"Qunatidade : {produto.quantidade}")
        print(f"Preço      : R$ {produto.preco:.2f}\n")
        # Exibindo as informações do produto

    except ValueError as erro:
        print(erro)
        # Retorna a mensagem de erro caso alguma das operações não seja concluida corretamente

    finally:
        session.close()
        # Garante que a sessão é fechada no final se deu certo ou errado, evitando deixar as conexões abertas

def alterar_produto():
    session = SessionLocal()
    service = ProdutoService()

    try:
        id = int(input("Código do produto: "))
        produto = service.buscar_produto(session, id)

        descritivo = input("Nova descrição (Enter para manter): ")
        quantidade = input("Nova descrição (Enter para manter): ")
        preco = input("Nova descrição (Enter para manter): ")

        produto = service.atualizar_produto(
            session,
            id,
            descritivo = descritivo or None,
            quantidade = int(quantidade) if quantidade else None,
            preco = float(preco) if preco else None
        )

        print(f"\nProduto '{produto.descritivo}' atualizado com sucesso.")

    except ValueError as erro:
        print(erro)

    finally:
        session.close()

def deletar_produto():
    session = SessionLocal()
    service = ProdutoService()

    try:
        id = input("Código do produto: ")
        produto = service.buscar_produto(session,id)
        service.deletar_produto(service, id)

        print(f"\nProduto: {produto.descritivo} deletado com sucesso")

    except ValueError as erro:
        print(erro)

    finally:
        session.close()