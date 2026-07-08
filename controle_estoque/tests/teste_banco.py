from sqlalchemy import String, Integer, Float, ForeignKey, select, create_engine
from sqlalchemy.orm import Mapped, DeclarativeBase, Session, mapped_column, relationship
import sys

engine = create_engine("sqlite:///estoque.db")
session = Session(engine)

class Base(DeclarativeBase):
    pass

class Categoria(Base):
    __tablename__ = "categorias"

    id: Mapped[int] = mapped_column(primary_key = True)
    descritivo: Mapped[str] = mapped_column(String(100))

    produtos: Mapped[list["Produto"]] = relationship(
        back_populates = "categoria"
    )

class Produto(Base):
    __tablename__ = "produtos"

    id: Mapped[int] = mapped_column(primary_key = True)
    nome: Mapped[str] = mapped_column(String(100))
    quantidade: Mapped[int]
    preco: Mapped[float]

    categoria_id: Mapped[int] = mapped_column(
        ForeignKey("categorias.id")
    )

    categoria: Mapped["Categoria"] = relationship(
        back_populates = "produtos"
    )

Base.metadata.create_all(engine)

#----------------- Inserindo produtos -----------------
# produto = Produto(
#     nome = "Teclado",
#     quantidade = 15,
#     preco = 120.0
# )

# session.add(produto)
# session.commit()

#----------------- Consultando todos os Produtos -----------------
# produtos = session.scalars(select(Produto)).all()

# for produto in produtos:
#     print(f"Codigo do Produto: {produto.id}")
#     print(f"Descritivo: {produto.nome}")
#     print(f"Quantidade: {produto.quantidade}")
#     print(f"Preco: R${produto.preco:.2f}\n")

#----------------- Consultando um dos Produtos -----------------
# produto = session.scalar(
#     select(Produto).where(Produto.nome == "Mouse")
# )

# print(f"O produto buscado foi o: {produto.id}")

#----------------- Atualizando um Produto -----------------
# busca = session.scalar(
#     select(Produto).where(Produto.id == 1)
# )

# print(f"Quantidade antiga: {busca.quantidade}")

# produto = session.get(Produto, 1)
# produto.quantidade += 10

# session.commit()

# busca = session.scalar(
#     select(Produto).where(Produto.id == 1)
# )

# print(f"Quantidade nova: {busca.quantidade}")

#----------------- Excluindo um Produto -----------------
# produto = session.get(Produto, 9)
# produto_antigo = produto.nome

# session.delete(produto)
# session.commit()

# print(f"Produto deletado: {produto_antigo}")


#-----------------#----------------- Fazendo operações com uma Tabela com chave Estrangeira -----------------#-----------------#

#----------------- Inserindo produtos -----------------
categoria = Categoria(descritivo = "Perifericos")

session.add(categoria)
session.commit()
session.close()

categorias = session.scalars(select(Categoria)).all()

for categoria in categorias:
    print(categoria.descritivo)

session.close()

#----------------- Consultando todos os Produtos -----------------


#----------------- Consultando um dos Produtos -----------------


#----------------- Atualizando um Produto -----------------


#----------------- Excluindo um Produto -----------------
