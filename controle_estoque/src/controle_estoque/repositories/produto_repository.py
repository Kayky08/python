from sqlalchemy import select # Importa a função de select() do sqlalchemy

from controle_estoque.models import Produto # Importando a classe/model que o repository vai manipular

class ProdutoRepository:
    # Essa classe é reponsavel por apenas fazer comunicação com o banco sem ter nenhuma regra/validação, focado em apenas funções de CRUD

    def criar(self, session, produto: Produto) -> Produto:
        session.add(produto)     # Marca o produto para ser inserido, mas ainda não vai pro banco
        session.commit()         # Executa o INSERT e salva a transação 
        session.refresh(produto) # Busca os dados atuais do banco e atualiza o objeto Python

        return produto

    def buscar_por_id(self, session, id: int) -> Produto | None:
        return session.get(Produto, id)
        # "session.get()" forma mais direta e rápida de buscar 1 registro e se não existir retorna None (por isso o tipo ta retornando "Produto | None")

    def listar(self, session) -> list[Produto]:
        return session.scalars(select(Produto)).all()
        # select(): Monta o SELECT * FROM produtos
        # session.scalars(): Executa o devolve só os objetos Produto (sem essa parte vira uma linha unica de metadados)
        # .all(): converte o resultado numa lista de verdade

    def atualizar(self, session, produto: Produto) -> Produto:
        session.commit()
        session.refresh(produto)
        return produto

    def deletar(self, session, produto: Produto) -> None:
        session.delete(produto) # Marca o Produto que vai ser deletado
        session.commit()        # Executa o DELETE
