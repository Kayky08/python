from controle_estoque.models import Usuario

from sqlalchemy import select
from sqlalchemy.orm import Session

class UsuarioRepository:

    def buscar_por_id(self, session, id):
        usuario = session.get(Usuario, id)

    def listar(self, session):
        return session.scalars(select(Usuario)).all()

    def criar(self, session, usuario):
        pass

    def atualizar(self, session, usuario):
        pass

    def atualizar(self, session, usuario):
        pass
