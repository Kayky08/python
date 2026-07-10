from controle_estoque.models import Usuario

from sqlalchemy import select
from sqlalchemy.orm import Session

class UsuarioRepository:

    def buscar_por_id(self, session, id):
        usuario = session.get(Usuario, id)

        print("\n----------------- Dados do Usuario -----------------\n")
        print(f"Codigo: {usuario.id}")
        print(f"Nome: {usuario.nome}")
        print(f"Login: {usuario.login}")
        print(f"Tipo: {usuario.tipo}")

    def listar(self, session):
        usuarios = session.scalars(select(Usuario)).all()

        for usuario in usuarios:
            print("\n----------------- Dados do Usuario -----------------\n")
            print(f"Codigo:{usuario.id}")
            print(f"Nome: {usuario.nome}")
            print(f"Login: {usuario.login}")
            print(f"Tipo: {usuario.tipo}")

    def criar(self, session, usuario):

        pass

    def atualizar(self, session, usuario):
        pass

    def atualizar(self, session, usuario):
        pass
