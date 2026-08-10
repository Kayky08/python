from datetime import datetime
import pdfplumber
import pandas as pd
import re
import os
import sys

MESES = {
    1: "janeiro", 2: "fevereiro", 3: "marco", 4: "abril",
    5: "maio", 6: "junho", 7: "julho", 8: "agosto",
    9: "setembro", 10: "outubro", 11: "novembro", 12: "dezembro"
}

def formatar_valor(valor_str):
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

def lista_para_df(dados):
    # Pega o arquivo e transforma em um Dataframe
    df = pd.DataFrame(dados)

    # Aplica a formatação de string para inteiros
    df["cont_antigo"] = df["cont_antigo"].apply(formatar_valor)
    df["cont_atual"]  = df["cont_atual"].apply(formatar_valor)

    # Retorna o DataFrame atualizado
    return df

def status(row):
    # Utiliza o pandas para verificar se falta alguma das informações nas colunas
    if pd.isna(row["cont_atual_arquivo1"]) or pd.isna(row["cont_atual_arquivo2"]):
        return "Serial ausente em um dos arquivos"

    # Verifica se ouve alguma diferença de valor
    if row["diferenca"] == 0:
        return "Sem alteração"

def pdf_para_linhas_array(caminho_pdf):
    # Variavel com os tipos da impressora  
    conteudo = ["MULTIFUNCIONAL","IMPRESSORA"]
    # Resultado com as strings transformadas em array
    resultado = []

    # Entrando no PDF
    with pdfplumber.open(caminho_pdf) as pdf:
        # Entando pagina por pagina
        for num_pagina, page in enumerate(pdf.pages, start=1):
            # Extraindo o texto de cada pagina
            texto = page.extract_text(layout=True)

            # Pulando cada parte que não possui texto (EX: imagens)
            if not texto:
                continue
            
            # Acessando cada linha
            for num_linha, linha in enumerate(texto.split("\n"), start=1):
                elementos = linha.split()  # separa por espaços (qualquer quantidade)
                
                if elementos and elementos[0] in conteudo:  # ignora linhas vazias
                    item = None

                    # Separando o serial do modelo
                    if "4062" in elementos[3]:
                        grudado = elementos[3]

                        parte1 = grudado[0:10]
                        parte2 = grudado[10:]

                        elementos_alterados = elementos[:2] + [parte1,parte2] + elementos[4:]

                        item = {
                            "modelo":elementos_alterados[2],
                            "serial":elementos_alterados[3],
                            "cont_antigo":elementos_alterados[9],
                            "cont_atual":elementos_alterados[10]
                        }

                    elif elementos[3] == "SL-M4080FX":
                        item = {
                            "modelo":elementos[3],
                            "serial":elementos[4],
                            "cont_antigo":elementos[5],
                            "cont_atual":elementos[6]
                        }

                    elif elementos[2] == "ZD220":
                        item = {
                            "modelo":elementos[2],
                            "serial":elementos[4],
                            "cont_antigo":elementos[5],
                            "cont_atual":elementos[6]
                        }

                    elif elementos[2] == "ZT230":
                        item = {
                            "modelo":elementos[2],
                            "serial":elementos[3],
                            "cont_antigo":elementos[4],
                            "cont_atual":elementos[5]
                        }

                    if item:
                        resultado.append(item)
    
    return resultado

def comparacoes_impressoras(arquivo1,arquivo2):
    # Pegando os dados de cada arquivo
    dados1 = pdf_para_linhas_array(arquivo1)
    dados2 = pdf_para_linhas_array(arquivo2)

    # Trasformando os arquivos em DF
    df1 = lista_para_df(dados1)
    df2 = lista_para_df(dados2)

    # Utilizando o merge para unir e comparar os DF
    comparacao = pd.merge(
        df1[["serial", "modelo", "cont_atual"]], # Definindo os dois DF que serão comparados
        df2[["serial", "modelo", "cont_atual"]],
        on="serial", # Definindo o valor que vai conectar os dois DF
        how="outer", # Defnindo o tipo de retorno (inner: se tem nas duas, left: se tem apenas na da esquerda, right: se tem na da direita, outer: retorna de ambos, mesmo com o valor vazio)
        suffixes=("_arquivo1", "_arquivo2") # Sufixo para definir de qual arquivo veio cada informação
    )

    # Campo que vai mostrar a diferença entre os dois valores
    comparacao["diferenca"] = comparacao["cont_atual_arquivo2"] - comparacao["cont_atual_arquivo1"]
    # Compo que vai definir o status de cada item
    comparacao["status"] = comparacao.apply(status, axis=1)

    # Transformando em excel as informações
    comparacao.to_excel("comparacao_contadores.xlsx", index=False)

def ler_ate_primeira_data(caminho_pdf):
    padrao_data = re.compile(r"\d{2}/\d{2}/\d{4}")
    resultado = []
    data_encontrada = None

    with pdfplumber.open(caminho_pdf) as pdf:
        for page in pdf.pages:
            texto = page.extract_text(layout=True)
            if not texto:
                continue

            for linha in texto.split("\n"):
                elementos = linha.split()
                resultado.append(elementos)

                for item in elementos:
                    busca = padrao_data.search(item)
                    if busca:
                        data_encontrada = busca.group()
                        break

                if data_encontrada:
                    break
            if data_encontrada:
                break

    return resultado, data_encontrada

def nome_arquivo_por_data(data_str, caminho_arquivo):
    data = datetime.strptime(data_str, "%d/%m/%Y")
    mes_nome = MESES[data.month]
    nome_novo = f"{mes_nome}_{data.year}.pdf"

    os.rename(caminho_arquivo, nome_novo)

def buscar_todos_pdf(caminho_pasta):
    arquivos_pdf = []

    for arquivo in os.listdir(caminho_pasta):
        if arquivo.endswith('.pdf'):
            arquivos_pdf.append(arquivo)

    return arquivos_pdf

arquivos = buscar_todos_pdf("./")
print(arquivos)

# arquivos = []
# arquivo = "NF F73854 LOCA IMPR 16_884_99 VENC 05_06 - EXTRATO.PDF"
# linhas, data = ler_ate_primeira_data(arquivo)
# nome_saida = nome_arquivo_por_data(data, arquivo)

#comparacoes_impressoras("arquivo1.pdf","arquivo2.pdf")