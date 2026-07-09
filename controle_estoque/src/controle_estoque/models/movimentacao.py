from datetime import datetime
from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base

class Movimentacao(Base):
    __tablename__ = "movimentacoes"

    id:         Mapped[int]       = mapped_column(primary_key = True)
    tipo:       Mapped[enumerate] = mapped_column(nullable = False)
    quantidade: Mapped[int]       = mapped_column(nullable = False)
    data:       Mapped[datetime]  = mapped_column(nullable = False)
    observacao: Mapped[str]       = mapped_column(String(500), nullable = False)

    produto_id = Mapped[int] = relationship(
        ForeignKey("produtos.id")
    )

    usuario_id = Mapped[int] = relationship(
        ForeignKey("usuarios.id")
    )