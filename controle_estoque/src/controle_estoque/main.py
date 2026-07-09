from .database import criar_banco
from .cli import iniciar

def main():
    criar_banco()
    iniciar()

if __name__ == "__main__":
    main()