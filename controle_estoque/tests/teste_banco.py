from sqlalchemy import String, Integer, Float, ForeignKey, select, create_engine
from sqlalchemy.orm import Mapped, DeclarativeBase, Session, mapped_column, relationship
import sys

engine = create_engine("sqlite:///estoque.db")

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
    descritivo: Mapped[str] = mapped_column(String(100))
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

#----------------- Criando uma Categoria e um Produto exibindo -----------------
# with Session(engine) as session:
#     categoria = Categoria(
#         descritivo = "Equipamentos"
#     )

#     session.add(categoria)
#     session.commit()

#     produto = Produto(
#         descritivo = "Switch Ubiquiti",
#         quantidade = 20,
#         preco = 50.0,
#         categoria_id = 2
#     )

#     session.add(produto)
#     session.commit()

#     categorias = session.scalars(select(Categoria)).all()

#     print("----------------- Lista de Categorias -----------------")
#     for categoria in categorias:
#         print(categoria.descritivo)

#     produtos = session.scalars(select(Produto)).all()

#     print("\n----------------- Dados do Produto -----------------")
#     for produto in produtos:
#         categoria = session.scalar(
#             select(Categoria).where(Categoria.id == produto.categoria_id)
#         )
        
#         print(f"\nCodigo: {produto.id}")
#         print(f"Descritivo: {produto.descritivo}")
#         print(f"Quantidade: {produto.quantidade}")
#         print(f"Categoria: {categoria.descritivo}")
#         print(f"Preço: R$ {produto.preco:.2f}")

#----------------- Alterando uma Categoria -----------------

# with Session(engine) as session:
#     categoria = session.get(Categoria, 1)

#     categoria.descritivo = "Periféricos"

#     session.commit()

#     print(f"Categoria Alterada: {categoria.descritivo}")

#     print("\n----------------- Dados do Produto -----------------")
#     for produto in categoria.produtos:
#         print(f"\nCodigo: {produto.id}")
#         print(f"Descritivo: {produto.descritivo}")
#         print(f"Quantidade: {produto.quantidade}")
#         print(f"Categoria: {categoria.descritivo}")
#         print(f"Preço: R$ {produto.preco:.2f}")

#----------------- Deletando uma Categoria e excluindo seus Produtos -----------------

# with Session(engine) as session:
    # produtos_excluidos = []
    # categoria_excluida = ""

    # categoria = session.get(Categoria, 1)

    # for produto in categoria.produtos:
    #     produtos_excluidos.append(produto.descritivo)

    #     session.delete(produto)

    # categoria_excluida = categoria.descritivo

    # session.delete(categoria)
    # session.commit()

    # print(f"Categoria '{categoria_excluida} deletada com sucesso, junto dos seguintes itens:\n'")

    # for produtos in produtos_excluidos:
    #     print(produto)