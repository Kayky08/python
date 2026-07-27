from controle_estoque.database import SessionLocal
from controle_estoque.services.usuario_services import UsuarioService

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
            print("Buscar um Produto...")

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
            print("Cadastrar Produtos...")

        elif opcao == "2":
            print("Listar Produtos...")

        elif opcao == "3":
            print("Buscar um Produto...")

        elif opcao == "4":
            print("Alterar um Produto...")

        elif opcao == "5":
            print("Deletar um Produto...")
        
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