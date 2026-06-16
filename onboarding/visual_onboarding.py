import customtkinter as ctk
from tkinter import messagebox
import threading

# Configuração visual global
ctk.set_appearance_mode("light")       # "light" ou "dark"
ctk.set_default_color_theme("blue")    # tema de cor

class App(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.title("Gerador de Onboarding")
        self.geometry("520x680")
        self.resizable(False, False)

        self._criar_campos()
        self._criar_acessos()
        self._criar_botao()

    def _criar_campos(self):
        frame = ctk.CTkFrame(self)
        frame.pack(fill="x", padx=20, pady=(20, 10))

        ctk.CTkLabel(frame, text="Dados do colaborador", font=("", 13)).pack(anchor="w", padx=15, pady=(12,4))

        self.campo_nome    = self._campo(frame, "Nome completo")
        self.campo_usuario = self._campo(frame, "Usuário")
        self.campo_senha   = self._campo(frame, "Senha", show="•")

        # Campos extras (ficam ocultos até o acesso ser marcado)
        self.campo_edata = self._campo(frame, "Usuário Edata", visivel=False)
        self.campo_sag   = self._campo(frame, "Usuário SAG",   visivel=False)
        self.campo_wmw   = self._campo(frame, "Usuário WMW",   visivel=False)

    def _campo(self, parent, label, show=None, visivel=True):
        """Cria um par label + input e retorna o widget de entrada."""
        container = ctk.CTkFrame(parent, fg_color="transparent")
        ctk.CTkLabel(container, text=label, font=("", 12), text_color="gray").pack(anchor="w", padx=15)
        entry = ctk.CTkEntry(container, show=show, width=460)
        entry.pack(padx=15, pady=(0, 8))
        if visivel:
            container.pack(fill="x")
        else:
            container._container = container  # guarda referência
        entry._container = container
        return entry

    def _criar_acessos(self):
        frame = ctk.CTkFrame(self)
        frame.pack(fill="x", padx=20, pady=10)
        ctk.CTkLabel(frame, text="Acessos", font=("", 13)).pack(anchor="w", padx=15, pady=(12,4))

        # Checkboxes — guarda as variáveis para ler depois
        self.chk = {}

        acessos = [
            ("Rede",      None,        None),
            ("Fluig",     "Rede",      None),
            ("Office365", None,        None),
            ("PowerBI",   "Office365", None),
            ("Protheus",  None,        None),
            ("Edata",     None,        self.campo_edata),
            ("SAG",       None,        self.campo_sag),
            ("WMW",       None,        self.campo_wmw),
        ]

        for nome, pai, campo_extra in acessos:
            var = ctk.BooleanVar(value=False)
            self.chk[nome] = var

            padding_left = 40 if pai else 15  # indenta os filhos

            chk_widget = ctk.CTkCheckBox(
                frame, text=nome, variable=var,
                command=lambda n=nome, p=pai, c=campo_extra: self._on_check(n, p, c)
            )
            chk_widget.pack(anchor="w", padx=(padding_left, 15), pady=3)

            if pai:
                chk_widget.configure(state="disabled")  # desabilitado até o pai ser marcado
            
            self.chk[nome + "_widget"] = chk_widget  # guarda o widget para habilitar/desabilitar

        ctk.CTkLabel(frame, text="").pack(pady=4)  # espaçamento final

    def _on_check(self, nome, pai, campo_extra):
        """Chamado quando qualquer checkbox muda de estado."""
        marcado = self.chk[nome].get()

        # Mostra/oculta o campo extra (ex: Usuário Edata)
        if campo_extra:
            container = campo_extra._container
            if marcado:
                container.pack(fill="x")
            else:
                container.pack_forget()
                campo_extra.delete(0, "end")

        # Habilita/desabilita os filhos
        filhos = {"Rede": ["Fluig"], "Office365": ["PowerBI"]}
        for filho in filhos.get(nome, []):
            widget = self.chk[filho + "_widget"]
            if marcado:
                widget.configure(state="normal")
            else:
                widget.configure(state="disabled")
                self.chk[filho].set(False)

    def _criar_botao(self):
        self.btn = ctk.CTkButton(
            self, text="Gerar Onboarding",
            height=42, font=("", 14),
            command=self._gerar
        )
        self.btn.pack(padx=20, pady=20, fill="x")

        self.label_status = ctk.CTkLabel(self, text="", font=("", 12), text_color="gray")
        self.label_status.pack()

    def _gerar(self):
        """Valida os campos e roda a geração em thread separada (não trava a janela)."""
        nome    = self.campo_nome.get().strip()
        usuario = self.campo_usuario.get().strip()
        senha   = self.campo_senha.get().strip()

        if not nome or not usuario or not senha:
            messagebox.showerror("Campos obrigatórios", "Preencha nome, usuário e senha.")
            return

        self.btn.configure(state="disabled", text="Gerando...")
        self.label_status.configure(text="")

        # Roda em thread separada para não travar a interface
        threading.Thread(target=self._executar, args=(nome, usuario, senha), daemon=True).start()

    def _executar(self, nome, usuario, senha):
        try:
            acessos_pai = {k: self.chk[k].get() for k in ["Rede","Office365","Protheus","Edata","SAG","WMW"]}
            acessos_filho = {
                "Fluig":   self.chk["Fluig"].get(),
                "PowerBI": self.chk["PowerBI"].get(),
            }
            usuario_edata = self.campo_edata.get().strip() if acessos_pai["Edata"] else ""
            usuario_sag   = self.campo_sag.get().strip()   if acessos_pai["SAG"]   else ""
            usuario_wmw   = self.campo_wmw.get().strip()   if acessos_pai["WMW"]   else ""

            # Chama sua função de geração existente
            gerar_onboarding(
                nome, usuario, senha,
                acessos_pai, acessos_filho,
                usuario_edata, usuario_sag, usuario_wmw
            )

            self.after(0, self._sucesso)  # atualiza a UI na thread principal
        except Exception as e:
            self.after(0, lambda: self._erro(str(e)))

    def _sucesso(self):
        self.btn.configure(state="normal", text="Gerar Onboarding")
        self.label_status.configure(text="✓ Arquivo gerado com sucesso!", text_color="green")

    def _erro(self, msg):
        self.btn.configure(state="normal", text="Gerar Onboarding")
        messagebox.showerror("Erro", msg)


if __name__ == "__main__":
    app = App()
    app.mainloop()


def gerar_onboarding(nome, usuario, senha, acessos_pai, acessos_filho, usuario_edata, usuario_sag, usuario_wmw):
    print("teste")