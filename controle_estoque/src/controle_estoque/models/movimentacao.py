from enum import Enum as PyEnum
from datetime import datetime

from sqlalchemy import String, ForeignKey, Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base

class TipoMovimentacao(PyEnum):
    ENTRADA = "ENTRADA"
    SAIDA = "SAIDA"

class Movimentacao(Base):
    __tablename__ = "movimentacoes"

    id:         Mapped[int]              = mapped_column(primary_key = True)
    tipo:       Mapped[TipoMovimentacao] = mapped_column(Enum(TipoMovimentacao))
    quantidade: Mapped[int]              = mapped_column(nullable = False)
    data:       Mapped[datetime]         = mapped_column(nullable = False)
    observacao: Mapped[str]              = mapped_column(String(500), nullable = False)

    produto_id: Mapped[int] = mapped_column(
        ForeignKey("produtos.id")
    )

    usuario_id: Mapped[int] = mapped_column(
        ForeignKey("usuarios.id")
    )