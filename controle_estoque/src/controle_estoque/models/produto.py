from sqlalchemy import String, Integer, Float, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base

class Produto(Base):
    __tablename__ = "produtos"

    id:         Mapped[int]   = mapped_column(primary_key = True)
    descritivo: Mapped[str]   = mapped_column(String(100))
    quantidade: Mapped[int]   = mapped_column(nullable = False)
    preco:      Mapped[float] = mapped_column(nullable = False)

    categoria_id: Mapped[int] = relationship(
        ForeignKey("categorias.id")
    )