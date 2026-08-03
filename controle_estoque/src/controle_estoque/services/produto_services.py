from controle_estoque.repositories.produto_repository import ProdutoRepository

from controle_estoque.models import Produto

class ProdutoService:

    def __init__(self):
        self.repository = ProdutoRepository()
        # Chama o repository em cada instancia sem precisar chama-lo de novo

    def cadastrar_produto(self,session, descritivo, quantidade, preco, categoria_id):
        # Validações:
        if quantidade < 0:
            raise ValueError("Quantidade não pode ser negativa.")
            # raise ValueError: interrompe a execução e joga o erro pra quem chamou (no caso nosso seria, a CLI, que vai capturar o erro)

        if preco < 0:
            raise ValueError("Preço não pode ser negativo.")
            # Retorna erro se o preço for negativo

        produto = Produto(
            descritivo = descritivo,
            quantidade = quantidade,
            preco = preco,
            categoria_id = categoria_id
        )
        # Montando o objeto sem salvar no banco

        return self.repository.criar(session, produto)
        # Fala pro repository para criar o produto e retorna com o id preenchido

    def listar_produto(self, session):
        produtos = self.repository.listar(session)
        # Chama a função de lsitar todos os produtos no repository e salva

        if len(produtos) == 0:
            raise ValueError("Nenhum produto cadastrado.")
            # Retorna erro se não tiver nenhum produto

        return produtos

    def buscar_produto(self, session, id):
        produto = self.repository.buscar_por_id(session, id)
        # Chama a função de buscar um produto no repository e salva 

        if produto is None:
            raise ValueError(f"Produto com o código {id} não encontrado.")
            # Retorna erro caso não encontre nenhum produto

        return produto

    def atualizar_produto(self, session, id, descritivo = None, quantidade = None, preco = None):
        produto = self.buscar_produto(session, id)
        # Chama a função do proprio service, ja que ela faz a validação antes de executar

        if quantidade is not None and quantidade < 0:
            raise ValueError("Quantidade não pode ser negativa")
            # Retorna erro se não estiver vazio e a quantidade não for negativa

        if preco is not None and preco < 0:
            raise ValueError("Preço não pode ser negativo.")
            # Retorna erro se não estiver vazio e o preço não for negativo

        # Atualização dos campos
        if descritivo is not None:
            produto.descritivo = descritivo
            # Se o descritivo não estiver vazio ele vai alterar

        if quantidade is not None:
            produto.quantidade = quantidade
            # Se a quantidade não estiver vazio ele vai alterar

        if preco is not None:
            produto.preco = preco
            # Se o preco não estiver vazio ele vai alterar

        return self.repository.atualizar(session, produto)
        # Retorna o produto atualizado

    def deletar_produto(self, session, id):
        produto = self.buscar_produto(session, id)
        # Chama a função do proprio service, ja que ela faz a validação antes de executar

        self.repository.deletar(session, produto)
        # Executa a exclusão do repository