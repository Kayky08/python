from __future__ import annotations

from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base

class Categoria(Base):
    __tablename__ = "categorias"

    id: Mapped[int] = mapped_column(primary_key=True)
    descritivo: Mapped[str] = mapped_column(String(100))

    produtos: Mapped[list[Produto]] = relationship(
        back_populates="categoria"
    )