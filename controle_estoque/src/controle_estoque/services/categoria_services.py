from controle_estoque.repositories.categoria_repository import CategoriaRepository
from controle_estoque.models import Categoria

class CategoriaService:

    def __init__(self):
        self.repository = CategoriaRepository()

    def cadastrar_categoria(self, session, descritivo):
        if descritivo is None:
            raise ValueError("O Descritivo não pode ser um campo vazio.")

        categoria = Categoria(
            descritivo = descritivo
        )

        return self.repository.criar(session, categoria)

    def listar_categoria(self, session):
        categorias = self.repository.listar()

        if len(categorias) == 0:
            raise ValueError("Nenhuma categoria cadastrada.")

    def buscar_categoria(self, session, id):
        categoria = self.repository.buscar_por_id(session,id)

        if categoria is None:
            raise ValueError(f"Produto com o código {id} não encontrado")

        return categoria

    def atualizar_categoria(self, session, id, descritivo = None):
        categoria = self.buscar_categoria(session,id)

        if categoria is not None:
            categoria.descritivo = descritivo

        return self.repository.atualizar(session, categoria)

    def deletar_categoria(self, session, id):
        categoria = self.buscar_categoria(session, id)

        self.repository.deletar(session, categoria)