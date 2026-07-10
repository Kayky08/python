from enum import Enum as PyEnum

from sqlalchemy import String, Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base

class TipoPerfil(PyEnum):
    ADMIN = "ADMIN"
    COMUM = "COMUM"

class Usuario(Base):
    __tablename__ = "usuarios"

    id:    Mapped[int] = mapped_column(primary_key = True)
    nome:  Mapped[str] = mapped_column(String(100), nullable = False)
    login: Mapped[str] = mapped_column(nullable = False)
    senha: Mapped[str] = mapped_column(nullable = False)
    tipo:  Mapped[TipoPerfil] = mapped_column(Enum(TipoPerfil))