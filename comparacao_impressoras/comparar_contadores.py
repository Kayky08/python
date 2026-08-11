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

# --------------------------- Utilitarios --------------------------- 

def formatar_valor(valor_str):
    valor_str = valor_str.strip()

    # Remove separador de milhar (ponto) e troca separador decimal (vírgula) por ponto
    if "," in valor_str:
        # tem parte decimal -> remove pontos de milhar, troca vírgula por ponto
        valor_limpo = valor_str.replace(".", "").replace(",", ".")
        numero_float = float(valor_limpo)
    else:
        # não tem vírgula -> só remove pontos de milhar
        valor_limpo = valor_str.replace(".", "")
        numero_float = float(valor_limpo)

    # trunca a parte decimal e vira inteiro
    return int(numero_float)

def lista_para_df(dados):
    # Pega o arquivo e transforma em um Dataframe
    df = pd.DataFrame(dados)

    # Aplica a formatação de string para inteiros
    df["cont_antigo"] = df["cont_antigo"].apply(formatar_valor)
    df["cont_atual"]  = df["cont_atual"].apply(formatar_valor)

    # Retorna o DataFrame atualizado
    return df

def status(row):
    # Utiliza o pandas.isna() para verificar se falta alguma das informações nas colunas
    if pd.isna(row["cont_atual_arquivo1"]) or pd.isna(row["cont_atual_arquivo2"]):
        return "Serial ausente em um dos arquivos"

    # Verifica se ouve alguma diferença de valor
    if row["diferenca"] == 0:
        return "Sem alteração"

def ler_ate_primeira_data(caminho_pdf):
    # Define o padrão da data
    padrao_data = re.compile(r"\d{2}/\d{2}/\d{4}")
    data_encontrada = None

    # Utiliza o pdfplumber para ler o PDD
    with pdfplumber.open(caminho_pdf) as pdf:
        # Faz a leitura de cada pagina
        for page in pdf.pages:
            # Extrai o texto de cada pagina
            texto = page.extract_text(layout=True)
            if not texto:
                continue

            # Verifica cada linha
            for linha in texto.split("\n"):
                # Transforma cada linha em um array
                elementos = linha.split()

                # Verifica cada palavra de cada linha
                for item in elementos:
                    # Busca por uma data
                    busca = padrao_data.search(item)

                    # Se encontra ele retorna com a data e para o codigo
                    if busca:
                        data_encontrada = busca.group()
                        break

                if data_encontrada:
                    break
            if data_encontrada:
                break

    # Retorna com o valor da data
    return data_encontrada

def nome_arquivo_por_data(data_str):
    # Transforma a data recebida em texto
    data = datetime.strptime(data_str, "%d/%m/%Y")
    # Pega o nome do mês
    mes_nome = MESES[data.month]

    # retorna com o nome formatado
    return f"{mes_nome}_{data.year}.pdf"

def buscar_todos_pdf(caminho_pasta):
    arquivos_pdf = []

    # Busca no caminho_pasta cada PDF existente
    for arquivo in os.listdir(caminho_pasta):
        # Tranforma o arquivo em minusculo e verifica se termina com a extensção ".pdf"
        if arquivo.lower().endswith('.pdf'):
            # Adiciona na lista todos os PDFs encontrados
            arquivos_pdf.append(os.path.join(caminho_pasta,arquivo))

    # Retorna com a lista de PDFs
    return arquivos_pdf

def padronizar_nomes(caminho_pasta):
    # Busca todos os PDFs do caminho
    arquivos = buscar_todos_pdf(caminho_pasta)

    # Entra em cada arquivo
    for caminho_arquivo in arquivos:
        # Busca a primeira data de cada arquivo
        data = ler_ate_primeira_data(caminho_arquivo)

        # Retorno caso não encontre uma data
        if not data:
            print(f"Nenhuma data encontrada: {caminho_arquivo}")
            continue

        # Pega como vai ficar o novo nome do arquivo
        novo_nome = nome_arquivo_por_data(data)
        # Pega o caminho e o novo nome
        novo_caminho = os.path.join(caminho_pasta,novo_nome)

        # Renomeia e salva o arquivo novamente
        os.rename(caminho_arquivo, novo_caminho)

# --------------------------- Funções Principais --------------------------- 

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

def comparacoes_pdfs(arquivo1,arquivo2):
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

    comparacao = comparacao.sort_values(by=["modelo_arquivo1", "serial"])

    # Transformando em excel as informações
    return comparacao

def ordenar_arquivos_por_mes(caminho_pasta):
    # Buscando todos os arquivos dentro da pasta
    arquivos = buscar_todos_pdf(caminho_pasta)

    # Extraindo os (numeros_do_mes, caminho) de cada arquivo, usando o nome ja padronizado
    ordem_mes = {v: k for k, v in MESES.items()}
    arquivos_com_mes = []

    for caminho in arquivos:
        nome = os.path.splitext(os.path.basename(caminho))[0]
        mes_nome = nome.split("_")[0].lower()

        if mes_nome in ordem_mes:
            arquivos_com_mes.append((ordem_mes[mes_nome], caminho))

    arquivos_com_mes.sort()
    return [caminho for _, caminho in arquivos_com_mes]

def comparar_meses_consecutivos(caminho_pasta):
    arquivos_ordenados = ordenar_arquivos_por_mes(caminho_pasta)

    for arquivo_anterior, arquivo_atual in zip(arquivos_ordenados, arquivos_ordenados[1:]):
        comparacoes_pdfs(arquivo_anterior, arquivo_atual)

def gerar_excel_comparacoes(caminho_pasta, caminho_saida="comparacoes.xlsx"):
    arquivos_ordenados = ordenar_arquivos_por_mes(caminho_pasta)

    with pd.ExcelWriter(caminho_saida, engine="openpyxl") as writer:
        for arquivo_anterior, arquivo_atual in zip(arquivos_ordenados, arquivos_ordenados[1:]):
            
            nome_mes_anterior = os.path.splitext(os.path.basename(arquivo_anterior))[0]
            nome_mes_atual = os.path.splitext(os.path.basename(arquivo_atual))[0]
            nome_aba = f"{nome_mes_anterior}_vs_{nome_mes_atual}"[:31]

            comparacao_df = comparacoes_pdfs(arquivo_anterior, arquivo_atual)
            comparacao_df.to_excel(writer, sheet_name=nome_aba, index=False)

    print(f"Arquivo gerado: {caminho_saida}")

# --------------------------- Interface --------------------------- 

print("----------- Comparador de Contadores -----------\n")

caminho = input("Digite o caminho da pasta: ")

padronizar_nomes(caminho)
gerar_excel_comparacoes(caminho,"comparacoes.xlsx")