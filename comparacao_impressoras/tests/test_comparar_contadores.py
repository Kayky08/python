import pytest
import pandas as pd
import sys
import os

# Garantindo que o Python encontrará os arquivos .py da pasta anterior
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from comparar_contadores import formatar_valor, nome_arquivo_por_data, status, lista_para_df, buscar_todos_pdf, pdf_para_linhas_array

# ----------------- Testes formatar_valor -----------------

def test_formatar_valor_com_milhar_e_decial():
    assert formatar_valor("1.500,00") == 1500

def test_formatar_valor_milhar():
    assert formatar_valor("123.321") == 123321

def test_formatar_zero():
    assert formatar_valor("0,00") == 0

def test_formatar_valor_sem_separador():
    assert formatar_valor("42") == 42

def test_formatar_valor_texto_invalido():
    assert formatar_valor("abc") is None

# ----------------- Testes nome_arquivo_por_data -----------------

def test_nome_arquivo_por_data_valido():
    assert nome_arquivo_por_data("15/03/2026") == "marco_2026.pdf"

def test_nome_arquivo_por_data_invalido():
    assert nome_arquivo_por_data("2026-03-15") is None

def test_nome_arquivo_por_data_texto_invalido():
    assert nome_arquivo_por_data("data invalida") is None

# ----------------- Testes status -----------------

def test_status_sem_alteracao():
    row = pd.Series({
        "cont_atual_arquivo1": 100,
        "cont_atual_arquivo2": 100,
        "diferenca": 0
    })

    assert status(row) == "Sem alteração"

def test_status_ausente_arquivo1():
    row = pd.Series({
        "cont_atual_arquivo1": None,
        "cont_atual_arquivo2": 100,
        "diferenca": 0
    })

    assert status(row) == "Serial ausente em um dos arquivos"

# ----------------- Testes nome_arquivo_por_data -----------------

def test_lista_para_df_normal():
    dados = [{
        "modelo":"SL-M4080",
        "serial":"ABC123",
        "cont_antigo":"1.000",
        "cont_atual":"1.500"
    }]

    df = lista_para_df(dados)

    assert df.loc[0, "cont_antigo"] == 1000
    assert df.loc[0, "cont_atual"] == 1500

def test_lista_para_df_vazio():
    df = lista_para_df([])

    assert df.empty
    assert list(df.columns) == ["modelo","serial","cont_antigo","cont_atual"]

def test_lista_para_df_coluna_faltando():
    dados = [{
        "modelo":"X",
        "serial":"123",
        "cont_antigo":"100"
    }]

    df = lista_para_df(dados)

# ----------------- Testes buscar_todos_pdf -----------------

def test_buscar_todos_pdf_pasta_vazia(tmp_path):
    # tmp_path é uma pasta temporária criada só para esse teste
    (tmp_path / "janeiro_2026.pdf").write_text("conteudo fake")
    (tmp_path / "fevereiro_2026.pdf").write_text("conteudo fake")
    (tmp_path / "outro_arquivo.txt").write_text("não é pdf")

    resultado = buscar_todos_pdf(str(tmp_path))

    assert len(resultado) == 2
    assert all(r.endswith(".pdf") for r in resultado)

def test_buscar_todos_pdf_pasta_vazia(tmp_path):
    resultado = buscar_todos_pdf(str(tmp_path))
    assert resultado == []

def test_buscar_todos_pdf_pasta_inexistente():
    resultado = buscar_todos_pdf("./pasta_que_nao_existe_123")
    assert resultado == []

# ----------------- Testes buscar_todos_pdf -----------------

FIXTURES = os.path.join(os.path.dirname(__file__), "fixtures")

def test_pdf_para_linhas_array_extrai_dados():
    caminho = os.path.join(FIXTURES, "exemplo_valido.pdf")
    resultado = pdf_para_linhas_array(caminho)

    assert len(resultado) > 0
    assert "modelo" in resultado[0]
    assert "serial" in resultado[0]

def test_pdf_para_linhas_array_pdf_sem_impressoras():
    caminho = os.path.join(FIXTURES, "exemplo_sem_impressoras.pdf")
    resultado = pdf_para_linhas_array(caminho)

    assert resultado == []