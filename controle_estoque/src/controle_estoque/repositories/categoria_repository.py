from sqlalchemy import select

from controle_estoque.models import Categoria

class CategoriaRepository:
    def criar(self, session, categoria: Categoria) -> Categoria:
        session.add(categoria)
        session.commit()
        session.refresh(categoria)

        return categoria

    def buscar_por_id(self, session) -> Categoria | None:
        return session.get(Categoria,id)

    def listar(self, session) -> list[Categoria]:
        return session.scalars(select(Categoria)).all()

    def atualizar(self, session, categoria: Categoria) -> Categoria:
        session.commit()
        session.refresh(categoria)

        return categoria

    def deletar(self, session, categoria: Categoria) -> None:
        session.delete(categoria)
        session.commit()