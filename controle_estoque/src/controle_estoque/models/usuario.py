from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base

class Usuario(Base):
    __tablename__ = "usuarios"

    id:    Mapped[int] = mapped_column(primary_key = True)
    nome:  Mapped[str] = mapped_column(String(100), nullable = False)
    login: Mapped[str] = mapped_column(nullable = False)
    senha: Mapped[str] = mapped_column(nullable = False)