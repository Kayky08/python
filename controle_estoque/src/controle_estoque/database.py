from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from controle_estoque.config import DATABASE_URL
from controle_estoque.models import Base

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind = engine)

def criar_banco():
    Base.matadata.create_all(engine)