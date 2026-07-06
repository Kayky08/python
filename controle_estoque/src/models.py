class Produto:
    def __init__(self, id, descritivo, quantidade, preco):
        self.id = id
        self.descritivo = descritivo
        self.quantidade = quantidade
        self.preco = preco

class Usuario:
    def __init__(self, id, nome, email, senha):
        self.id = id
        self.nome = nome
        self.email = email
        self.senha = senha

class EntradaSaida:
    def __init__(self, id, produto, data, status):
        self.id = id
        self.produto = produto
        self.status = status
        self.data = data
