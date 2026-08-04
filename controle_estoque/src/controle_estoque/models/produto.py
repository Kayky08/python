from __future__ import annotations # Possibilita que anotações como o do Mapped[] não de conflito

from sqlalchemy import String, ForeignKey # Definição dos tipos da coluna
"""
String: Define o tamanho de texto, ex: String(100)
ForeignKey: declara uma chave estrangeira
"""

from sqlalchemy.orm import Mapped, mapped_column, relationship 
"""
Mapped: usado para definir um atributo para cada atributo
mapped_column: cria a coluna no banco com configurações setadas por essa função, ex: mapped_column(nullable = False)
relationship: cria a ponte em Python enstre duas tabelas, sem precisar de um SELECT/JOIN
"""

from .base import Base
"""
"Base" é a classe delcarativa, logo é classe que se utiliza como modelo para criar os outros models (Categoria, Movimentação, ...)
"""

class Produto(Base):
    __tablename__ = "produtos" # Nomea a tabela 

    id:           Mapped[int]   = mapped_column(primary_key=True)              # Chave primaria, "int" ja é definido com autoincremento atutomatico1
    descritivo:   Mapped[str]   = mapped_column(String(100), nullable = False) # Definindo um limite de 100 caracteres e que o valor não pode ser vazio
    quantidade:   Mapped[int]   = mapped_column(nullable = False)              # Definindo que o valor não pode ser vazio
    preco:        Mapped[float] = mapped_column(nullable = False)              # Definindo que o valor não pode ser vazio
    categoria_id: Mapped[int]   = mapped_column(ForeignKey("categorias.id"))    # Definindo a categoria que o produto pertence, atraves do "id" da tabela de categorias

    categoria: Mapped[Categoria] = relationship(
        back_populates="produtos"
    )

    """
    É um atalho para o Python que permite buscar o descritivo sem utilizar o caminho "produto.categoria.descritivo", sem precisar fazer um SELECT em categorias usando categoria_id. Ele diz para o SQLAlchemy: "essa relação é o espelho do atributo 'produtos' que existe lá na classe Categoria" - assim sincronizando os dois lados
    """