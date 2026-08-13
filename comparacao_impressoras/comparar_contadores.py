from datetime import datetime
import pandas as pd
import pdfplumber
import re
import os

MESES = {
    1: "janeiro", 2: "fevereiro", 3: "marco", 4: "abril",
    5: "maio", 6: "junho", 7: "julho", 8: "agosto",
    9: "setembro", 10: "outubro", 11: "novembro", 12: "dezembro"
}

# ---- Utilitarios ---------------------------------

def formatar_valor(valor_str):
    valor_str = valor_str.strip()

    try:
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

    # Retornando erro caso não de para converter o valor
    except (ValueError,AttributeError):
        print(f"Erro: não foi possível converter o valor '{valor_str}' para número")
        return None

def lista_para_df(dados):
    # Pega o arquivo e transforma em um Dataframe
    df = pd.DataFrame(dados)

    # Verificando se o DF vem vazio
    if df.empty:
        print("Aviso: DataFrame vazio - nenhum dado para processar")
        return pd.DataFrame(columns = ["modelo", "serial", "cont_antigo", "cont_atual"])

    colunas_esperadas = ["cont_antigo","cont_atual"]

    # Verificando se a coluna exite no DF
    for coluna in colunas_esperadas:
        if coluna not in df.columns:
            print(f"Erro: coluna '{coluna}' não encontrada nos dados extraídos")
            return pd.DataFrame(columns = ["modelo", "serial", "cont_antigo", "cont_atual"])

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

    return "OK"

def ler_ate_primeira_data(caminho_pdf):
    # Define o padrão da data
    padrao_data = re.compile(r"\d{2}/\d{2}/\d{4}")
    data_encontrada = None

    try:
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

    # Retornando erro caso o não seja possivel ler o PDF
    except Exception as e:
        print(f"Erro ao ler PDF '{caminho_pdf}': {e}")
        return None

    # Retornando erro caso não seja encontrada nenhuma data
    if not data_encontrada:
        print(f"Aviso: nenhuma data encontrada no arquivo '{caminho_pdf}'")

    # Retorna com o valor da data
    return data_encontrada

def nome_arquivo_por_data(data_str):
    try:
        # Transforma a data recebida em texto
        data = datetime.strptime(data_str, "%d/%m/%Y")
        # Pega o nome do mês
        mes_nome = MESES[data.month]

        # retorna com o nome formatado
        return f"{mes_nome}_{data.year}.pdf"

    # Retornando erro caso não seja o formato previsto
    except ValueError:
        print(f"Erro: data '{data_str}' não está no formato esperado (dd/mm/aaaa)")
        return None

    # Verificando se o mes é valido
    except KeyError:
        print(f"Erro: mês inválido extraído da data '{data_str}'")
        return None

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

        if not novo_nome:
            continue

        # Pega o caminho e o novo nome
        novo_caminho = os.path.join(caminho_pasta,novo_nome)

        if os.path.exists(novo_caminho) and novo_caminho != caminho_arquivo:
            print(f"Aviso: já existe um arquivo com o nome '{novo_nome}'."
                  f"'{caminho_arquivo}' não foi renomeado para evitar sobrescrever.")
            continue

        try:
            # Renomeia e salva o arquivo novamente
            os.rename(caminho_arquivo, novo_caminho)

        # Retornando erro caso não exista permissão para renomear o arquivo
        except PermissionError:
            print(f"Erro: sem permissão para renomear '{caminho_arquivo}'"
                  f"(arquivo pode estar aberto em outro programa)")

        # Retorna erro caso não consiga renomear
        except OSError as e:
            print(f"Erro ao renomear '{caminho_arquivo}': {e}")

def validacao_pasta(caminho_pasta):
    # Verifica se o caminho inserido é valido
    if not os.path.isdir(caminho_pasta):
        print(f"Erro: '{caminho_pasta}' não é uma pasta válida ou não existe.")

        return False

    return True

# ---- Funções Principais ---------------------------

def buscar_todos_pdf(caminho_pasta):
    arquivos_pdf = []

    try:
        # Busca no caminho_pasta cada PDF existente
        for arquivo in os.listdir(caminho_pasta):
            # Tranforma o arquivo em minusculo e verifica se termina com a extensção ".pdf"
            if arquivo.lower().endswith('.pdf'):
                # Adiciona na lista todos os PDFs encontrados
                arquivos_pdf.append(os.path.join(caminho_pasta,arquivo))

    # Retorna erro caso não encontre a pasta
    except FileNotFoundError:
        print(f"Erro: pasta não encontrada: '{caminho_pasta}")
        return[]

    # Retorna erro caso não consiga acessar a pasta
    except PermissionError:
        print(f"Erro: sem permissão para acessar a pasta: '{caminho_pasta}'")
        return []

    # Verifica se há arquivos PDF na pasta
    if not arquivos_pdf:
        print(f"Aviso: nenhum arquivo PDF encontrado em '{caminho_pasta}'")

    # Retorna com a lista de PDFs
    return arquivos_pdf

def pdf_para_linhas_array(caminho_pdf):
    # Variavel com os tipos da impressora  
    conteudo = ["MULTIFUNCIONAL","IMPRESSORA"]
    # Resultado com as strings transformadas em array
    resultado = []

    try:
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
                    # Separa por espaços (qualquer quantidade)
                    elementos = linha.split()

                    # Ignora linhas vazias
                    if elementos and elementos[0] in conteudo:
                        item = None
                        try:
                            # Separando o serial do modelo e organiza o dicionario
                            if len(elementos) > 3 and "4062" in elementos[3]:
                                # Pegando o elemento que esta grudado
                                grudado = elementos[3]

                                # Separando ele em cada parte
                                parte1 = grudado[0:10]
                                parte2 = grudado[10:]

                                # Adicionar os elementos alterados no array de elementos
                                elementos_alterados = elementos[:2] + [parte1,parte2] + elementos[4:]

                                # Organizando o dicionarios
                                item = {
                                    "modelo":elementos_alterados[2],
                                    "serial":elementos_alterados[3],
                                    "cont_antigo":elementos_alterados[9],
                                    "cont_atual":elementos_alterados[10]
                                }

                            # Buscando as linhas que possue as impressoras e organiznado os elementos em um dicionario
                            elif len(elementos) > 3 and elementos[3] == "SL-M4080FX":
                                item = {
                                    "modelo":elementos[3],
                                    "serial":elementos[4],
                                    "cont_antigo":elementos[5],
                                    "cont_atual":elementos[6]
                                }

                            elif len(elementos) > 3 and elementos[2] == "ZD220":
                                item = {
                                    "modelo":elementos[2],
                                    "serial":elementos[4],
                                    "cont_antigo":elementos[5],
                                    "cont_atual":elementos[6]
                                }

                            elif len(elementos) > 3 and  elementos[2] == "ZT230":
                                item = {
                                    "modelo":elementos[2],
                                    "serial":elementos[3],
                                    "cont_antigo":elementos[4],
                                    "cont_atual":elementos[5]
                                }

                        # Retornando erro caso não tenha o numero de campos esperados
                        except IndexError:
                            print(f"Aviso: linha {num_linha} da página {num_pagina} em {caminho_pdf} tem menos campos do que o esperado - ignorada."
                                  f"Conteúdo: {elementos}")

                        # Adicionando o item ao resultado
                        if item:
                            resultado.append(item)

    # Retornando erro cso não consiga acessar o PDF
    except Exception as e:
        print(f"Erro ao processar PDF '{caminho_pdf}': {e}")
        return []

    # Retorna vazio caso não encontre nenhuma impressoa
    if not resultado:
        print(f"Aviso: nenhum item de impressora extraído de '{caminho_pdf}'")

    # Retornando com as informações de cada impressora
    return resultado

def comparacoes_pdfs(arquivo1,arquivo2):
    # Pegando os dados de cada arquivo
    dados1 = pdf_para_linhas_array(arquivo1)
    dados2 = pdf_para_linhas_array(arquivo2)

    # Trasformando os arquivos em DF
    df1 = lista_para_df(dados1)
    df2 = lista_para_df(dados2)

    # Verificando se alguma coluna esta ausente em um dos DFs
    for coluna in ["serial", "modelo", "cont_atual"]:
        if coluna not in df1.columns or coluna not in df2.columns:
            print(f"Erro: comparação entre '{arquivo1}' e '{arquivo2}' cancelada coluna '{coluna}' ausente em um dos arquivos")
            return pd.DataFrame()

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
    # Organiza a planilha com base nos modelos do arquivo 1
    comparacao = comparacao.sort_values(by=["modelo_arquivo1", "serial"])

    # Retornando a comparação em DF
    return comparacao

def ordenar_arquivos_por_mes(caminho_pasta):
    # Buscando todos os arquivos dentro da pasta
    arquivos = buscar_todos_pdf(caminho_pasta)

    # Extraindo os (numeros_do_mes, caminho) de cada arquivo, usando o nome ja padronizado
    ordem_mes = {v: k for k, v in MESES.items()}
    arquivos_com_mes = []

    # Entrando em cada caminho
    for caminho in arquivos:
        # Pegando o nome de cada arquivo
        nome = os.path.splitext(os.path.basename(caminho))[0]
        # Pegando somente a parte do mês
        mes_nome = nome.split("_")[0].lower()

        # Pegando cada mes e ordenando com base no nome
        if mes_nome in ordem_mes:
            arquivos_com_mes.append((ordem_mes[mes_nome], caminho))

    # Organizando em ordem
    arquivos_com_mes.sort()
    # 
    return [caminho for _, caminho in arquivos_com_mes]

def gerar_excel_comparacoes(caminho_pasta, caminho_saida="comparacoes.xlsx"):
    # Pega os arquivos ordenados
    arquivos_ordenados = ordenar_arquivos_por_mes(caminho_pasta)
    abas_geradas = 0

    # Verificando se existe pelo menos 2 arquivos para fazer a comparação
    if len(arquivos_ordenados) < 2:
        print(f"Erro: apenas {len(arquivos_ordenados)} arquivo(s) reconhecidos com padrão 'mes_ano.pdf'. São necessários pelo menos 2 para gerar comparações.")
        return

    try:
        # Utiliza o ExcelWriter para criar o arquivo xlsx
        with pd.ExcelWriter(caminho_saida, engine="openpyxl") as writer:
            for arquivo_anterior, arquivo_atual in zip(arquivos_ordenados, arquivos_ordenados[1:]):

                # Pega o nome do mes anterior
                nome_mes_anterior = os.path.splitext(os.path.basename(arquivo_anterior))[0]
                # Pega o nome do mes atual
                nome_mes_atual = os.path.splitext(os.path.basename(arquivo_atual))[0]
                # Cria o nome da aba mesclando os dois nomes, (tem esse limite de 31, por conta da quantidade de caracteres que o excel aceita)
                nome_aba = f"{nome_mes_anterior}_vs_{nome_mes_atual}"[:31]

                # Faz a Comparação entre os PDFs e gera o DF
                comparacao_df = comparacoes_pdfs(arquivo_anterior, arquivo_atual)

                # Verificando se a comparação retorna vazia
                if comparacao_df.empty:
                    print(f"Aviso: comparação '{nome_aba}' vazia, aba não será gerada")
                    continue

                # Transforma o DF em uma aba do excel
                comparacao_df.to_excel(writer, sheet_name=nome_aba, index=False)

                abas_geradas += 1

            # Retorna vazio caso nenhuma aba seja gerada
            if abas_geradas == 0:
                print("Erro: nenhuma comparação válida foi gerada, arquivo Excel não será gerado")
                return

    # Retornando erro caso não tenha permissão para acessar o arquivo
    except PermissionError:
        print(f"Erro: não foi possível salvar '{caminho_saida}', verifique se está aberto no Excel ou se existe uma pasta com esse nome")
        return

    except Exception as e:
        print(f"Erro inesperado ao gerar Excel: {e}")
        return

    # Retorna com o nome do arquivo gerado
    print(f"Arquivo gerado com sucesso: {caminho_saida}")

# ---- Interface ------------------------------------

# print("----------- Comparador de Contadores -----------\n")

# caminho = input("Digite o caminho da pasta: ")

# if not validacao_pasta(caminho):
#     exit(1)

# padronizar_nomes(caminho)
# gerar_excel_comparacoes(caminho,"comparacoes.xlsx")

resultado = pdf_para_linhas_array("./tests/fixtures/exemplo_valido.pdf")
print(len(resultado))