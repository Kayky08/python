def iniciar():
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
            print("Encerrando...")
            break

        else:
            print("Opção inválida.")