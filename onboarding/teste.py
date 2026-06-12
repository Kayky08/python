from pathlib import Path
import os

diretorio = Path("teste")

if not os.path.exists(diretorio):
    os.mkdir('teste')