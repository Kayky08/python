from openpyxl import Workbook

wb = Workbook()

ws = wb.active

ws['A1'] = "Olá, Openpyxl!"

wb.save("exemplo.xlsx")