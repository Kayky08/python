import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from controle_estoque.models.base import Base
# Esse from serve para que o create_all() enxergar as tabelas (Categoria, Produto, Usuario, Movimentacao)
from controle_estoque.models import Categoria, Produto, Usuario, Movimentacao

@pytest.fixture
def session_teste():
    """
    Fixture: uma função especial do pytest que prepara algo ANTES do teste rodar, entrega esse "algo" pro teste usar, e limpa DEPOIS que ele termina.
    Qualquer teste que declarar "session_teste" como parâmetro recebe o valor que vem do "yield" abaixo.
    """

    engine = create_engine(
        "sqlite:///:memory:",
        connect_args = {"check_same_thread": False},
        poolclass = StaticPool
    )

    Base.metadata.create_all(engine)

    SessionTeste = sessionmaker(bind = engine)
    session = SessionTeste()

    yield session

    session.close()