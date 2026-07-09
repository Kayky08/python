from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[3]

DATABASE_URL = f"sqlite:///{BASE_DIR / 'data' / 'estoque.db'}"

DEBUG = True