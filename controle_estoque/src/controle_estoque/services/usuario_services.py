from controle_estoque.repositories.usuario_repository import UsuarioRepository

class UsuarioService:

    def __init__(self):
        self.repository = UsuarioRepository()

    def listar_usuarios(self,session):
        
        usuarios = self.repository.listar(session)

        # Validações:
            # Regras de negocio

        if len(usuarios) == 0:
            raise ValueError("Nenhum usuário cadastrado.")

        return usuarios