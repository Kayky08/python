import pdfplumber
import pandas as pd
import sys

def pdf_para_linhas_array(caminho_pdf):
    conteudo = ["MULTIFUNCIONAL","IMPRESSORA"]

    resultado = []
    with pdfplumber.open(caminho_pdf) as pdf:
        for num_pagina, page in enumerate(pdf.pages, start=1):
            texto = page.extract_text(layout=True)
            if not texto:
                continue
            for num_linha, linha in enumerate(texto.split("\n"), start=1):
                elementos = linha.split()  # separa por espaços (qualquer quantidade)
                if elementos and elementos[0] in conteudo:  # ignora linhas vazias
                    if "4062" in elementos[4]:
                        elementos[3] = "teste"
                        resultado.append(elementos)
                
                    resultado.append(elementos)
    return resultado

elementos = pdf_para_linhas_array("arquivo1.pdf")

for elemento in elementos:
    print(elemento)
