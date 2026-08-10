import pdfplumber
import pandas as pd
import sys

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

def lista_para_df(dados):
    df = pd.DataFrame(dados)

    df["cont_antigo"] = df["cont_antigo"].apply(normalizar_numero)
    df["cont_atual"]  = df["cont_atual"].apply(normalizar_numero)

    return df

def status(row):
    if pd.isna(row["cont_atual_arquivo1"]) or pd.isna(row["cont_atual_arquivo2"]):
        return "Serial ausente em um dos arquivos"
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
    dados1 = pdf_para_linhas_array(arquivo1)
    dados2 = pdf_para_linhas_array(arquivo2)

    df1 = lista_para_df(dados1)
    df2 = lista_para_df(dados2)

    comparacao = pd.merge(
        df1[["serial", "modelo", "cont_atual"]],
        df2[["serial", "cont_atual"]],
        on="serial",
        how="outer",
        suffixes=("_arquivo1", "_arquivo2")
    )

    comparacao["diferenca"] = comparacao["cont_atual_arquivo2"] - comparacao["cont_atual_arquivo1"]
    comparacao["status"] = comparacao.apply(status, axis=1)

    comparacao.to_excel("comparacao_contadores.xlsx", index=False)

#comparacoes_impressoras("arquivo1.pdf","arquivo2.pdf")