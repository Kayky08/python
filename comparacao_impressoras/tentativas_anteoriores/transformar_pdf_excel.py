import pandas as pd
import tabula

# Caminho para o seu arquivo PDF e o arquivo Excel de saída

arquivo_pdf = "arquivo1.pdf"
arquivo_excel = "tabela_convertida.xlsx"

# Lê todas as tabelas encontradas no PDF
# pages='all' serve para ler todas as páginas
tabelas = tabula.read_pdf(arquivo_pdf, pages="all", multiple_tables=True)

# Verifica se encontrou alguma tabela
if len(tabelas) > 0:
    # Cria um escritor do Pandas para salvar múltiplas abas no Excel, se necessário
    with pd.ExcelWriter(arquivo_excel, engine="openpyxl") as writer:
        for i, df in enumerate(tabelas):
            # Nomeia cada aba com base na ordem da tabela encontrada
            nome_aba = f"Tabela_{i+1}"
            df.to_excel(writer, sheet_name=nome_aba, index=False)
            
    print(f"Sucesso! Arquivo salvo como '{arquivo_excel}'.")
else:
    print("Nenhuma tabela foi encontrada no PDF fornecido.")