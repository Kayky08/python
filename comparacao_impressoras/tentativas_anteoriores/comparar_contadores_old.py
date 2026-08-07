import pdfplumber
import re
import pandas as pd
import sys

def extrair_todos_numeros(caminho_pdf):
    resultados = []
    with pdfplumber.open(caminho_pdf) as pdf:
        for num_pagina, page in enumerate(pdf.pages, start=1):
            texto = page.extract_text(layout=True)
            if not texto:
                continue
            linhas = texto.split("\n")
            for num_linha, linha in enumerate(linhas, start=1):
                for match in re.finditer(r"-?\d{1,3}(\.\d{3})*(,\d+)?|-?\d+([.,]\d+)?", linha):
                    resultados.append({
                        "pagina": num_pagina,
                        "linha": num_linha,
                        "posicao_na_linha": match.start(),
                        "valor": match.group()
                    })
    return resultados

def extrair_todas_palavras(caminho_pdf):
    resultados = []
    with pdfplumber.open(caminho_pdf) as pdf:
        for num_pagina, page in enumerate(pdf.pages, start=1):
            texto = page.extract_text(layout=True)
            if texto:
                linhas = texto.split("\n")
                for num_linha, linha in enumerate(linhas, start=1):
                    for match in re.finditer(r"\S+", linha):  # qualquer "token" separado por espaço
                        resultados.append({
                            "pagina": num_pagina,
                            "linha": num_linha,
                            "posicao_na_linha": match.start(),
                            "valor": match.group()
                        })
    return resultados

def normalizar_numero(valor_str):
    valor_str = valor_str.strip()
    
    # Remove separador de milhar (ponto)
    # e troca separador decimal (vírgula) por ponto
    if "," in valor_str:
        # tem parte decimal -> remove pontos de milhar, troca vírgula por ponto
        valor_limpo = valor_str.replace(".", "").replace(",", ".")
        numero_float = float(valor_limpo)
    else:
        # não tem vírgula -> só remove pontos de milhar
        valor_limpo = valor_str.replace(".", "")
        numero_float = float(valor_limpo)
    
    return int(numero_float)  # trunca a parte decimal e vira inteiro

def extrair_coluna_normalizada(caminho_pdf, posicoes_validas=(63, 64), posicoes_serial=(40, 31, 27, 24)):
    numeros = extrair_todos_numeros(caminho_pdf)
    palavras = extrair_todas_palavras(caminho_pdf)
    dados = []

    # 1. Monta um dicionário linha -> valor do serial, aceitando qualquer posição da lista
    serial_por_linha = {}
    for palavra in palavras:
        if palavra["posicao_na_linha"] in posicoes_serial:
            serial_por_linha[palavra["linha"]] = palavra["valor"]

    # 2. Consulta o dicionário dentro do loop principal
    for numero in numeros:
        if numero["posicao_na_linha"] in posicoes_validas:
            valor = normalizar_numero(numero["valor"])
            dados.append({
                "pagina": numero["pagina"],
                "linha": numero["linha"],
                "posicao": numero["posicao_na_linha"],
                "valor": valor,
                "serial": serial_por_linha.get(numero["linha"])
            })

    return pd.DataFrame(dados)

df1 = extrair_coluna_normalizada("arquivo1.pdf") # Pegando os numeros dos contadores de cada impressora
df2 = extrair_coluna_normalizada("arquivo2.pdf")

palavras1 = extrair_todas_palavras("arquivo1.pdf")# Pegando todas as palavras de cada arquivo
palavras2 = extrair_todas_palavras("arquivo2.pdf")

conteudo = ["4062","4080","zt","zd"] # Modelo de cada impressora
linhas = [40,31,27,24] # Pegando todos os seriais

info_por_linha = {}
for palavra in palavras1:
    if palavra["posicao_na_linha"] in linhas:
        info_por_linha[palavra["linha"]] = palavra["valor"]

print(info_por_linha)

# df = pd.DataFrame(palavras)
# print(df)

#df1.to_excel("todos_numeros_arq1.xlsx", index=False)