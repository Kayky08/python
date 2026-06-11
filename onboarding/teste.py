from pathlib import Path

diretorio = Path("ONBOARDING") # Diretório de trabalho atual

for caminho in diretorio.iterdir():
    print(caminho.name)