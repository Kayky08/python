(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
    WSrY: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, "ConfigModule", (function() {
            return ze
        }
        ));
        var o = i("Valr")
          , r = i("QJY3")
          , a = i("MnXN")
          , n = i("jPUR")
          , c = i("W2xC")
          , s = i("PCNd")
          , l = i("5tAl")
          , b = i("AytR")
          , d = i("TYT/")
          , u = i("cUzu")
          , f = b.a.apiUrl
          , p = function() {
            function e(e) {
                this.http = e
            }
            return e.prototype.getAccessInfo = function() {
                return this.http.get(f + "/configuracaoacesso").pipe(Object(l.a)(1))
            }
            ,
            e.prototype.postAccessInfo = function(e) {
                return this.http.post(f + "/configuracaoacesso", e).pipe(Object(l.a)(1))
            }
            ,
            e.prototype.deleteOnlyCardList = function() {
                return this.http.delete(f + "/listasomentecartaoexcluilista").pipe(Object(l.a)(1))
            }
            ,
            e.prototype.deleteAccessList = function() {
                return this.http.delete(f + "/listaacessoexcluilista").pipe(Object(l.a)(1))
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.ac(u.b))
            }
            ,
            e.\u0275prov = d.Jb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }()
          , m = i("G5J1")
          , h = i("vubp")
          , g = i("sLa7")
          , v = i("VnD/")
          , S = b.a.apiUrl
          , y = function() {
            function e(e) {
                this.http = e
            }
            return e.prototype.getMasterInfo = function() {
                return this.http.get(S + "/configuracaomaster").pipe(Object(l.a)(1))
            }
            ,
            e.prototype.postMasterReleasesAccess = function(e) {
                return this.http.post(S + "/masterpermitecadastro", {
                    masterPermiteCadastro: e
                }).pipe(Object(l.a)(1))
            }
            ,
            e.prototype.postMasterCardNumber = function(e) {
                return this.http.post(S + "/masternumerocartao", {
                    numCartaoMaster: e
                }).pipe(Object(l.a)(1))
            }
            ,
            e.prototype.deleteBio = function(e) {
                var t = {
                    headers: new u.d({
                        "Content-Type": "application/json"
                    }),
                    body: {
                        identificador: e.padStart(16, "0")
                    }
                };
                return this.http.delete(S + "/biometriaexclui", t).pipe(Object(l.a)(1), Object(h.a)(1e3))
            }
            ,
            e.prototype.registerBio = function(e, t) {
                var i = 0 === t ? 1 : 2;
                return this.http.post(S + "/biometriacadastra", {
                    identificador: e.padStart(16, "0"),
                    posicao: i
                }).pipe(Object(l.a)(1))
            }
            ,
            e.prototype.getBioRegisterStatus = function(e) {
                var t = this
                  , i = (new u.e).set("identificador", e.padStart(16, "0"));
                return this.http.get(S + "/biometriastatuscadastro", {
                    params: i
                }).pipe(Object(l.a)(1), Object(h.a)(1e3), Object(g.a)((function(e) {
                    return 0 === e.status ? t.http.get(S + "/biometriastatuscadastro", {
                        params: i
                    }).pipe(Object(l.a)(1), Object(h.a)(1e3)) : m.a
                }
                )), Object(v.a)((function(e) {
                    return 0 !== e.status
                }
                )))
            }
            ,
            e.prototype.getReadCard = function() {
                return this.http.get(S + "/cadastrolecartao").pipe(Object(l.a)(1))
            }
            ,
            e.prototype.getCardRegisterStatus = function() {
                var e = this;
                return this.http.get(S + "/cadastrocartaostatus").pipe(Object(l.a)(1), Object(h.a)(1e3), Object(g.a)((function(t) {
                    return 0 === t.statusCadastro ? e.http.get(S + "/cadastrocartaostatus").pipe(Object(l.a)(1), Object(h.a)(1e3)) : m.a
                }
                )), Object(v.a)((function(e) {
                    return 0 !== e.statusCadastro
                }
                )))
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.ac(u.b))
            }
            ,
            e.\u0275prov = d.Jb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }()
          , R = i("DUip")
          , C = i("K9Ia")
          , E = i("dEwP")
          , k = i("w1EH")
          , w = i("ny24")
          , A = i("z1S0")
          , O = i("nzZL")
          , F = i("s4wE");
        function D(e, t) {
            if (1 & e && (d.Sb(0, "option", 31),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        function N(e, t) {
            if (1 & e && (d.Sb(0, "option", 31),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        function I(e, t) {
            if (1 & e && (d.Sb(0, "option", 31),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        var j = function(e) {
            return {
                "text-danger": e
            }
        };
        function B(e, t) {
            if (1 & e && (d.Sb(0, "div", 4),
            d.Sb(1, "div", 5),
            d.Sb(2, "label", 10),
            d.Bc(3, "Padr\xe3o do Leitor: "),
            d.Rb(),
            d.Rb(),
            d.Sb(4, "div", 32),
            d.Sb(5, "select", 33),
            d.zc(6, I, 2, 2, "option", 9),
            d.Rb(),
            d.Rb(),
            d.Sb(7, "div", 34),
            d.Sb(8, "label", 35),
            d.Bc(9, "N\xba de D\xedgitos: "),
            d.Rb(),
            d.Rb(),
            d.Sb(10, "div", 36),
            d.Ob(11, "input", 37),
            d.Rb(),
            d.Rb()),
            2 & e) {
                var i = d.gc();
                d.Ab(2),
                d.jc("ngClass", d.nc(3, j, i.readerType.invalid && (i.readerType.dirty || i.readerType.touched))),
                d.Ab(4),
                d.jc("ngForOf", i.readerTypeCustomOptions),
                d.Ab(2),
                d.jc("ngClass", d.nc(5, j, i.numberDigitsCard.invalid && (i.numberDigitsCard.dirty || i.numberDigitsCard.touched)))
            }
        }
        function T(e, t) {
            1 & e && (d.Sb(0, "div", 4),
            d.Sb(1, "div", 18),
            d.Sb(2, "label", 25),
            d.Bc(3, " Habilitar Digitos Variaveis: "),
            d.Rb(),
            d.Rb(),
            d.Sb(4, "div", 20),
            d.Sb(5, "div", 23),
            d.Ob(6, "input", 38),
            d.Sb(7, "label", 25),
            d.Bc(8, " Sim "),
            d.Rb(),
            d.Rb(),
            d.Sb(9, "div", 23),
            d.Ob(10, "input", 38),
            d.Sb(11, "label", 25),
            d.Bc(12, " N\xe3o "),
            d.Rb(),
            d.Rb(),
            d.Rb(),
            d.Rb()),
            2 & e && (d.Ab(6),
            d.jc("value", !0),
            d.Ab(4),
            d.jc("value", !1))
        }
        function M(e, t) {
            if (1 & e && (d.Sb(0, "div", 41),
            d.Sb(1, "div", 42),
            d.Ob(2, "input", 43),
            d.Sb(3, "label", 44),
            d.Bc(4),
            d.Rb(),
            d.Rb(),
            d.Rb()),
            2 & e) {
                var i = t.$implicit
                  , o = t.index;
                d.Ab(1),
                d.jc("formGroupName", o),
                d.Ab(3),
                d.Dc(" ", i.value.description, " ")
            }
        }
        function P(e, t) {
            if (1 & e && (d.Sb(0, "div", 4),
            d.Sb(1, "div", 5),
            d.Sb(2, "label", 39),
            d.Bc(3, " Digitos Variaveis: "),
            d.Rb(),
            d.Rb(),
            d.Sb(4, "div", 7),
            d.Sb(5, "div", 2),
            d.zc(6, M, 5, 2, "div", 40),
            d.Rb(),
            d.Rb(),
            d.Rb()),
            2 & e) {
                var i = d.gc();
                d.Ab(6),
                d.jc("ngForOf", i.variableDigitsFormArray.controls)
            }
        }
        function V(e, t) {
            if (1 & e && (d.Sb(0, "option", 31),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        function x(e, t) {
            if (1 & e && (d.Sb(0, "option", 31),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        function L(e, t) {
            if (1 & e && (d.Sb(0, "option", 31),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        var W = function(e) {
            return e[e.door = 2] = "door",
            e[e.highTurnstile = 8] = "highTurnstile",
            e
        }({})
          , z = function(e) {
            return e[e.barcode = 0] = "barcode",
            e[e.magnetic = 1] = "magnetic",
            e[e.prox = 2] = "prox",
            e[e.wiegand = 3] = "wiegand",
            e[e.smartCard = 4] = "smartCard",
            e[e.barcodeSerial = 5] = "barcodeSerial",
            e[e.wiegandNoSeparator = 6] = "wiegandNoSeparator",
            e[e.ascii = 7] = "ascii",
            e
        }({})
          , q = function(e) {
            return e[e.disabled = 0] = "disabled",
            e[e.variable4Digits = 8] = "variable4Digits",
            e[e.variable6Digits = 32] = "variable6Digits",
            e[e.variable8Digits = 128] = "variable8Digits",
            e[e.variable10Digits = 512] = "variable10Digits",
            e[e.variable12Digits = 2048] = "variable12Digits",
            e[e.variable14Digits = 8192] = "variable14Digits",
            e[e.variable16Digits = 32768] = "variable16Digits",
            e[e.all = 43688] = "all",
            e
        }({})
          , H = function() {
            function e(e, t, i, o, a) {
                this.formBuilder = e,
                this.toastr = t,
                this.configAccessService = i,
                this.modalService = o,
                this.connectionErrorService = a,
                this.CUSTOM_READER = 4,
                this.VARIABLE_DIGITS_READER = 2,
                this.editing = !1,
                this.ngUnsubscribe = new C.a,
                this.readerTypeDefaultOptions = [{
                    description: "ABATRACK / QRCODE",
                    value: 0,
                    type: z.prox,
                    digits: 16,
                    variableDigits: q.all
                }, {
                    description: "WIEGAND (6 D\xcdGITOS)",
                    value: 1,
                    type: z.wiegand,
                    digits: 6,
                    variableDigits: q.disabled
                }, {
                    description: "WIEGAND FACILITY CODE (10 D\xcdGITOS)",
                    value: 2,
                    type: z.wiegand,
                    digits: 10,
                    variableDigits: q.disabled
                }, {
                    description: "WIEGAND FACILITY CODE SEM SEPARADOR (8 D\xcdGITOS)",
                    value: 3,
                    type: z.wiegandNoSeparator,
                    digits: 8,
                    variableDigits: q.disabled
                }, {
                    description: "CUSTOMIZADO",
                    value: this.CUSTOM_READER,
                    type: 0,
                    digits: 10,
                    variableDigits: q.disabled
                }],
                this.readerTypeCustomOptions = [{
                    description: "ABATRACK / QRCODE",
                    value: z.prox,
                    digits: 16,
                    variableDigits: q.all
                }, {
                    description: "WIEGAND / WIEGAND FACILITY CODE",
                    value: z.wiegand,
                    digits: 10,
                    variableDigits: q.disabled
                }, {
                    description: "WIEGAND FACILITY CODE S/ SEPARADOR",
                    value: z.wiegandNoSeparator,
                    digits: 8,
                    variableDigits: q.disabled
                }],
                this.directionsOptions = [{
                    description: "ENTRADA",
                    value: 1
                }, {
                    description: "SA\xcdDA",
                    value: 2
                }],
                this.controlOptions = [{
                    description: "PORTA",
                    index: 0,
                    value: 2
                }, {
                    description: "TORNIQUETE",
                    index: 1,
                    value: 8
                }],
                this.externalReaderOptions = [{
                    description: "DESABILITADO",
                    value: 0
                }, {
                    description: "ENTRADA",
                    value: 1
                }, {
                    description: "SA\xcdDA",
                    value: 2
                }],
                this.relayOptions = [{
                    description: "DESABILITADO",
                    value: 0
                }, {
                    description: "NORMALMENTE ABERTO",
                    value: 1
                }, {
                    description: "NORMALMENTE FECHADO",
                    value: 2
                }],
                this.variableDigitsOptions = [{
                    description: "4",
                    value: 4
                }, {
                    description: "6",
                    value: 6
                }, {
                    description: "8",
                    value: 8
                }, {
                    description: "10",
                    value: 10
                }, {
                    description: "12",
                    value: 12
                }, {
                    description: "14",
                    value: 14
                }, {
                    description: "16",
                    value: 16
                }],
                this.configAccessForm = this.formBuilder.group({
                    controlFunction: [],
                    readerDescription: [],
                    readerType: [, r.u.required],
                    numberDigitsCard: [, [r.u.required, r.u.min(4), r.u.max(16)]],
                    primaryReader: [, r.u.required],
                    externalButton: [, r.u.required],
                    activatingTime: [, [r.u.required, r.u.min(1), r.u.max(255)]],
                    leitorExterno: [, r.u.required],
                    buzzer: [, r.u.required],
                    variableDigitsArray: this.createVariableDigitsCheckbox(),
                    variableDigits: [],
                    useVariableDigits: []
                })
            }
            return Object.defineProperty(e.prototype, "controlFunction", {
                get: function() {
                    return this.configAccessForm.get("controlFunction")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "readerDescription", {
                get: function() {
                    return this.configAccessForm.get("readerDescription")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "readerType", {
                get: function() {
                    return this.configAccessForm.get("readerType")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "numberDigitsCard", {
                get: function() {
                    return this.configAccessForm.get("numberDigitsCard")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "primaryReader", {
                get: function() {
                    return this.configAccessForm.get("primaryReader")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "externalButton", {
                get: function() {
                    return this.configAccessForm.get("externalButton")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "activatingTime", {
                get: function() {
                    return this.configAccessForm.get("activatingTime")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "leitorExterno", {
                get: function() {
                    return this.configAccessForm.get("leitorExterno")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "buzzer", {
                get: function() {
                    return this.configAccessForm.get("buzzer")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "variableDigits", {
                get: function() {
                    return this.configAccessForm.get("variableDigits")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "variableDigitsFormArray", {
                get: function() {
                    return this.configAccessForm.get("variableDigitsArray")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "useVariableDigits", {
                get: function() {
                    return this.configAccessForm.get("useVariableDigits")
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.ngOnInit = function() {
                var e = this;
                this.disableFormFields(),
                this.refreshFormData(),
                this.primaryReader.valueChanges.subscribe((function() {
                    e.controlFunction.value === W.highTurnstile && e.setFormValue(e.leitorExterno, 0)
                }
                )),
                this.controlFunction.valueChanges.subscribe((function() {
                    e.setFormValue(e.primaryReader, 1),
                    e.setFormValue(e.leitorExterno, 0)
                }
                )),
                this.readerDescription.valueChanges.subscribe((function(t) {
                    t !== e.CUSTOM_READER && (e.setFormValue(e.numberDigitsCard, e.readerTypeDefaultOptions[t].digits),
                    e.setFormValue(e.variableDigits, e.readerTypeDefaultOptions[t].variableDigits),
                    e.changeVariableDigits(e.variableDigits.value),
                    e.readerType.setValue(e.readerTypeDefaultOptions[t].type),
                    e.useVariableDigits.setValue(0 !== e.variableDigits.value))
                }
                )),
                this.readerType.valueChanges.subscribe((function(t) {
                    e.readerDescription.value === e.CUSTOM_READER && !0 === e.useVariableDigits.value && e.useVariableDigits.setValue(t === z.prox)
                }
                )),
                this.useVariableDigits.valueChanges.subscribe((function(t) {
                    !0 === t ? e.disableForm(e.numberDigitsCard) : e.enableForm(e.numberDigitsCard)
                }
                )),
                this.variableDigitsFormArray.valueChanges.subscribe((function() {
                    !0 === e.useVariableDigits.value && e.setNumberDigitsCardCheckBox()
                }
                ))
            }
            ,
            e.prototype.setNumberDigitsCardCheckBox = function() {
                var e = this.variableDigitsFormArray.getRawValue().filter((function(e) {
                    return e.checked
                }
                ));
                if (e.length) {
                    var t = e[e.length - 1].description
                      , i = this.variableDigitsOptions.find((function(e) {
                        return e.description === t
                    }
                    ));
                    void 0 !== i && this.setFormValue(this.numberDigitsCard, i.value)
                }
            }
            ,
            e.prototype.onEditClick = function() {
                this.editing = !0,
                this.enableFormFields()
            }
            ,
            e.prototype.onSaveClick = function() {
                var e = this;
                if (this.backup.numeroDigitosCartao !== this.numberDigitsCard.value) {
                    var t = this.modalService.open(A.a);
                    t.componentInstance.setMessage("Para que a altera\xe7\xe3o do n\xfamero de d\xedgitos do cart\xe3o tenha efeito, o Inner Acesso precisar\xe1 excluir todos os cart\xf5es cadastrados na lista de acesso. Tem certeza que deseja continuar?", " Aviso", !0, !0),
                    t.result.then((function(t) {
                        "OK" === t && (e.openLoadingModal(),
                        Object(E.a)(e.configAccessService.deleteAccessList(), e.configAccessService.deleteOnlyCardList()).pipe(Object(k.a)()).pipe(Object(w.a)(e.ngUnsubscribe)).subscribe((function() {
                            e.saveData()
                        }
                        ), (function(t) {
                            e.closeLoadingModal(),
                            e.checkConnectionError(t)
                        }
                        )))
                    }
                    ), (function() {}
                    ))
                } else
                    this.saveData()
            }
            ,
            e.prototype.onCancelClick = function() {
                this.editing = !1,
                this.disableFormFields(),
                this.refreshFormData()
            }
            ,
            e.prototype.onClickIncVariabelDigits = function(e) {
                this.variableDigits.setValue(e + this.variableDigits.value)
            }
            ,
            e.prototype.getExternalReaderOptions = function() {
                return this.controlFunction.value === W.highTurnstile ? [{
                    description: "DESABILITADO",
                    value: 0
                }, {
                    description: 2 === this.primaryReader.value ? "SAIDA" : "ENTRADA",
                    value: this.primaryReader.value
                }] : this.externalReaderOptions
            }
            ,
            e.prototype.refreshFormData = function() {
                var e = this;
                this.configAccessService.getAccessInfo().subscribe((function(t) {
                    e.backup = t,
                    e.setFields(t)
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage()
                }
                ))
            }
            ,
            e.prototype.enableFormFields = function() {
                var e = this;
                this.enableForm(this.controlFunction),
                this.enableForm(this.readerDescription),
                this.enableForm(this.readerType),
                !0 === this.useVariableDigits.value ? this.disableForm(this.numberDigitsCard) : this.enableForm(this.numberDigitsCard),
                this.enableForm(this.useVariableDigits),
                this.enableForm(this.primaryReader),
                this.enableForm(this.externalButton),
                this.enableForm(this.activatingTime),
                this.enableForm(this.leitorExterno),
                this.enableForm(this.buzzer),
                this.variableDigitsFormArray.controls.forEach((function(t) {
                    e.enableForm(t)
                }
                ))
            }
            ,
            e.prototype.disableFormFields = function() {
                var e = this;
                this.disableForm(this.controlFunction),
                this.disableForm(this.readerDescription),
                this.disableForm(this.readerType),
                this.disableForm(this.numberDigitsCard),
                this.disableForm(this.useVariableDigits),
                this.disableForm(this.primaryReader),
                this.disableForm(this.externalButton),
                this.disableForm(this.activatingTime),
                this.disableForm(this.leitorExterno),
                this.disableForm(this.buzzer),
                this.variableDigitsFormArray.controls.forEach((function(t) {
                    e.disableForm(t)
                }
                ))
            }
            ,
            e.prototype.saveData = function() {
                var e = this;
                this.editing = !1,
                this.disableFormFields();
                var t = this.readFields();
                Object(E.a)(this.configAccessService.postAccessInfo(t), this.configAccessService.getAccessInfo()).pipe(Object(k.a)()).subscribe((function(t) {
                    e.enableFormFields(),
                    e.disableFormFields(),
                    e.editing = !1,
                    e.closeLoadingModal(),
                    e.backup = t,
                    e.setFields(t),
                    e.toastr.successToastr("Informa\xe7\xf5es salvas com sucesso.", "", {
                        position: "top-center",
                        animate: "fade"
                    })
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.closeLoadingModal(),
                    e.toastr.errorToastr("Erro ao tentar salvar informa\xe7\xf5es.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.enableFormFields(),
                    e.editing = !0
                }
                ))
            }
            ,
            e.prototype.readFields = function() {
                var e = this;
                return {
                    tipoLeitor: this.readerDescription.value !== this.CUSTOM_READER ? this.readerTypeDefaultOptions.find((function(t) {
                        return t.value === e.readerDescription.value
                    }
                    )).type : this.readerType.value,
                    numeroDigitosCartao: parseInt(this.numberDigitsCard.value, 10),
                    funcaoInnerPrincipal: this.primaryReader.value,
                    botaoLibera: this.externalButton.value,
                    tempoAcionamento: parseInt(this.activatingTime.value, 10),
                    leitorExterno: this.leitorExterno.value,
                    buzzer: this.buzzer.value,
                    digitosVariaveis: this.getVariableDigitsValue(),
                    equipamento: this.controlFunction.value
                }
            }
            ,
            e.prototype.setFields = function(e) {
                e.tipoLeitor = this.defineReaderType(e.tipoLeitor);
                var t = this.readerTypeDefaultOptions.find((function(t) {
                    return e.tipoLeitor === z.prox ? t.type === e.tipoLeitor && t.variableDigits === e.digitosVariaveis : t.type === e.tipoLeitor && t.digits === e.numeroDigitosCartao && t.variableDigits === e.digitosVariaveis
                }
                ));
                this.setFormValue(this.readerDescription, t ? t.value : this.CUSTOM_READER),
                this.setFormValue(this.readerType, e.tipoLeitor),
                this.setFormValue(this.numberDigitsCard, e.numeroDigitosCartao),
                this.setFormValue(this.variableDigits, e.digitosVariaveis),
                this.setFormValue(this.primaryReader, e.funcaoInnerPrincipal),
                this.setFormValue(this.externalButton, e.botaoLibera),
                this.setFormValue(this.activatingTime, e.tempoAcionamento),
                this.setFormValue(this.leitorExterno, e.leitorExterno),
                this.setFormValue(this.buzzer, e.buzzer),
                this.setFormValue(this.controlFunction, e.equipamento),
                this.changeVariableDigits(this.variableDigits.value),
                sessionStorage.setItem("equipamento", JSON.stringify(e.equipamento))
            }
            ,
            e.prototype.checkConnectionError = function(e) {
                e.status || this.connectionErrorService.ShowErrorMessage()
            }
            ,
            e.prototype.openLoadingModal = function() {
                this.loadingModalForm = this.modalService.open(O.a, {
                    backdrop: "static",
                    keyboard: !1,
                    centered: !0
                })
            }
            ,
            e.prototype.closeLoadingModal = function() {
                null != this.loadingModalForm && this.loadingModalForm.close()
            }
            ,
            e.prototype.createVariableDigitsCheckbox = function() {
                return this.formBuilder.array([this.createVariableDigitsOption(4, "4"), this.createVariableDigitsOption(6, "6"), this.createVariableDigitsOption(8, "8"), this.createVariableDigitsOption(10, "10"), this.createVariableDigitsOption(12, "12"), this.createVariableDigitsOption(14, "14"), this.createVariableDigitsOption(16, "16")], [r.u.required])
            }
            ,
            e.prototype.createVariableDigitsOption = function(e, t) {
                return this.formBuilder.group({
                    checked: !1,
                    value: e,
                    description: t
                })
            }
            ,
            e.prototype.changeVariableDigits = function(e) {
                this.setFormValue(this.useVariableDigits, !!e);
                for (var t = 0; t < this.variableDigitsOptions.length; t++) {
                    var i = !1;
                    e & 1 << this.variableDigitsOptions[t].value - 1 && (i = !!this.useVariableDigits.value),
                    this.setVariableDigitsCheckbox(t, i)
                }
                this.setNumberDigitsCardCheckBox()
            }
            ,
            e.prototype.setVariableDigitsCheckbox = function(e, t) {
                if (!(this.variableDigitsFormArray.controls.length < e || e < 0)) {
                    var i = this.variableDigitsFormArray.controls[e];
                    this.setFormValue(i.controls.checked, "toggle" === t ? !i.value.checked : t)
                }
            }
            ,
            e.prototype.getVariableDigitsValue = function() {
                var e = 0;
                return this.useVariableDigits.value && this.variableDigitsFormArray.getRawValue().filter((function(e) {
                    return e.checked
                }
                )).forEach((function(t) {
                    e |= 1 << t.value - 1
                }
                )),
                e
            }
            ,
            e.prototype.setFormValue = function(e, t) {
                e.setValue(t, {
                    onlySelf: !0,
                    emitEvent: !1
                })
            }
            ,
            e.prototype.enableForm = function(e) {
                e.enable({
                    onlySelf: !0,
                    emitEvent: !1
                })
            }
            ,
            e.prototype.disableForm = function(e) {
                e.disable({
                    onlySelf: !0,
                    emitEvent: !1
                })
            }
            ,
            e.prototype.defineReaderType = function(e) {
                return e === z.prox || e === z.barcodeSerial ? z.prox : e
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.Nb(r.d),d.Nb(F.a),d.Nb(p),d.Nb(a.h),d.Nb(c.a))
            }
            ,
            e.\u0275cmp = d.Hb({
                type: e,
                selectors: [["app-config-access"]],
                decls: 74,
                vars: 32,
                consts: [[3, "formGroup"], [1, "container", "col-md-12", "col-sm-10"], [1, "row"], [1, "col-md-12", "text-left"], [1, "form-group", "row"], [1, "col-sm-4", "col-md-3"], ["for", "control-function", 1, "control-label"], [1, "col-sm-8", "col-md-8"], ["formControlName", "controlFunction", "id", "control-function", 1, "input-large", "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "prox-type", 1, "control-label", 3, "ngClass"], ["formControlName", "readerDescription", "id", "prox-type", 1, "input-large", "form-control"], ["class", "form-group row", 4, "ngIf"], ["for", "primary-reader", 1, "control-label", 3, "ngClass"], ["formControlName", "primaryReader", "id", "primary-reader", 1, "input-large", "form-control"], ["formControlName", "leitorExterno", "id", "primary-reader", 1, "input-large", "form-control"], ["for", "external-button", 1, "control-label", 3, "ngClass"], ["formControlName", "externalButton", "id", "external-button", 1, "input-large", "form-control"], [1, "col-md-3"], ["for", "activating-time", 1, "control-label", 3, "ngClass"], [1, "col-md-8"], ["formControlName", "activatingTime", "type", "text", "mask", "999", "id", "activating-time", 1, "form-control", "text-left"], [1, "form-label", 3, "ngClass"], [1, "form-check", "form-check-inline", "col-md-2"], ["formControlName", "buzzer", "type", "radio", 1, "form-check-input", 3, "value"], [1, "form-check-label"], [1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "fa", "fa-edit"], [1, "fa", "fa-check"], [1, "fa", "fa-undo"], [3, "ngValue"], [1, "col-sm-5", "col-md-5"], ["formControlName", "readerType", "id", "prox-type", 1, "input-large", "form-control"], [1, "col-md-2", "mx-0"], [1, "control-label", 3, "ngClass"], [1, "col-md-1", "mx-0"], ["formControlName", "numberDigitsCard", "type", "text", "mask", "99", 1, "form-control", "text-left"], ["formControlName", "useVariableDigits", "type", "radio", 1, "form-check-input", 3, "value"], ["for", "variable-digits"], ["formArrayName", "variableDigitsArray", 4, "ngFor", "ngForOf"], ["formArrayName", "variableDigitsArray"], [1, "col", 3, "formGroupName"], ["formControlName", "checked", "type", "checkbox", "data-toggle", "toggle", 1, "control-label"], ["for", "variable-digit"]],
                template: function(e, t) {
                    1 & e && (d.Sb(0, "form", 0),
                    d.Ob(1, "br"),
                    d.Sb(2, "div", 1),
                    d.Sb(3, "div", 2),
                    d.Sb(4, "div", 3),
                    d.Sb(5, "div", 4),
                    d.Sb(6, "div", 5),
                    d.Sb(7, "label", 6),
                    d.Bc(8, " Fun\xe7\xe3o de Controle: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(9, "div", 7),
                    d.Sb(10, "select", 8),
                    d.zc(11, D, 2, 2, "option", 9),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(12, "div", 4),
                    d.Sb(13, "div", 5),
                    d.Sb(14, "label", 10),
                    d.Bc(15, " Padr\xe3o do Cart\xe3o: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(16, "div", 7),
                    d.Sb(17, "select", 11),
                    d.zc(18, N, 2, 2, "option", 9),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.zc(19, B, 12, 7, "div", 12),
                    d.zc(20, T, 13, 2, "div", 12),
                    d.zc(21, P, 7, 1, "div", 12),
                    d.Sb(22, "div", 4),
                    d.Sb(23, "div", 5),
                    d.Sb(24, "label", 13),
                    d.Bc(25, "Opera\xe7\xe3o Inner Principal:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(26, "div", 7),
                    d.Sb(27, "select", 14),
                    d.zc(28, V, 2, 2, "option", 9),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(29, "div", 4),
                    d.Sb(30, "div", 5),
                    d.Sb(31, "label", 13),
                    d.Bc(32, "Opera\xe7\xe3o Leitor Externo:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(33, "div", 7),
                    d.Sb(34, "select", 15),
                    d.zc(35, x, 2, 2, "option", 9),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(36, "div", 4),
                    d.Sb(37, "div", 5),
                    d.Sb(38, "label", 16),
                    d.Bc(39, "Configura\xe7\xe3o Bot\xe3o de Libera\xe7\xe3o:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(40, "div", 7),
                    d.Sb(41, "select", 17),
                    d.zc(42, L, 2, 2, "option", 9),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(43, "div", 4),
                    d.Sb(44, "div", 18),
                    d.Sb(45, "label", 19),
                    d.Bc(46, "Tempo de Acesso:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(47, "div", 20),
                    d.Ob(48, "input", 21),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(49, "div", 4),
                    d.Sb(50, "div", 18),
                    d.Sb(51, "label", 22),
                    d.Bc(52, "Habilitar Sinaliza\xe7\xe3o Sonora:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(53, "div", 20),
                    d.Sb(54, "div", 23),
                    d.Ob(55, "input", 24),
                    d.Sb(56, "label", 25),
                    d.Bc(57, "Sim"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(58, "div", 23),
                    d.Ob(59, "input", 24),
                    d.Sb(60, "label", 25),
                    d.Bc(61, "N\xe3o"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(62, "br"),
                    d.Sb(63, "div", 26),
                    d.Sb(64, "button", 27),
                    d.ec("click", (function() {
                        return t.onEditClick()
                    }
                    )),
                    d.Ob(65, "em", 28),
                    d.Bc(66, " Editar "),
                    d.Rb(),
                    d.Sb(67, "button", 27),
                    d.ec("click", (function() {
                        return t.onSaveClick()
                    }
                    )),
                    d.Ob(68, "em", 29),
                    d.Bc(69, " Salvar "),
                    d.Rb(),
                    d.Sb(70, "button", 27),
                    d.ec("click", (function() {
                        return t.onCancelClick()
                    }
                    )),
                    d.Ob(71, "em", 30),
                    d.Bc(72, " Cancelar "),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(73, "br"),
                    d.Rb()),
                    2 & e && (d.jc("formGroup", t.configAccessForm),
                    d.Ab(11),
                    d.jc("ngForOf", t.controlOptions),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(20, j, t.readerType.invalid && (t.readerType.dirty || t.readerType.touched))),
                    d.Ab(4),
                    d.jc("ngForOf", t.readerTypeDefaultOptions),
                    d.Ab(1),
                    d.jc("ngIf", t.readerDescription.value === t.CUSTOM_READER),
                    d.Ab(1),
                    d.jc("ngIf", t.readerType.value === t.VARIABLE_DIGITS_READER && t.readerDescription.value === t.CUSTOM_READER),
                    d.Ab(1),
                    d.jc("ngIf", !0 === t.useVariableDigits.value && t.readerType.value === t.VARIABLE_DIGITS_READER && t.readerDescription.value === t.CUSTOM_READER),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(22, j, t.primaryReader.invalid && (t.primaryReader.dirty || t.primaryReader.touched))),
                    d.Ab(4),
                    d.jc("ngForOf", t.directionsOptions),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(24, j, t.leitorExterno.invalid && (t.leitorExterno.dirty || t.leitorExterno.touched))),
                    d.Ab(4),
                    d.jc("ngForOf", t.getExternalReaderOptions()),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(26, j, t.externalButton.invalid && (t.externalButton.dirty || t.externalButton.touched))),
                    d.Ab(4),
                    d.jc("ngForOf", t.relayOptions),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(28, j, t.activatingTime.invalid && (t.activatingTime.dirty || t.activatingTime.touched))),
                    d.Ab(6),
                    d.jc("ngClass", d.nc(30, j, t.buzzer.invalid && (t.buzzer.dirty || t.buzzer.touched))),
                    d.Ab(4),
                    d.jc("value", !1),
                    d.Ab(4),
                    d.jc("value", !0),
                    d.Ab(5),
                    d.jc("disabled", t.editing),
                    d.Ab(3),
                    d.jc("disabled", !t.editing || t.configAccessForm.invalid),
                    d.Ab(3),
                    d.jc("disabled", !t.editing))
                },
                directives: [r.w, r.m, r.f, r.s, r.l, r.e, o.j, o.i, o.k, r.b, n.a, r.p, r.o, r.v, r.c, r.g, r.a],
                encapsulation: 2
            }),
            e
        }()
          , _ = i("Cxl7");
        function G(e, t) {
            if (1 & e && (d.Sb(0, "option", 21),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        var U = function(e) {
            return {
                "text-danger": e
            }
        }
          , $ = function() {
            function e(e, t, i, o) {
                this.formBuilder = e,
                this.toastr = t,
                this.configService = i,
                this.connectionErrorService = o,
                this.editEnabled = !0,
                this.securityOptions = [{
                    description: "MUITO ALTO",
                    value: 5
                }, {
                    description: "ALTO",
                    value: 4
                }, {
                    description: "M\xc9DIO (RECOMENDADO)",
                    value: 3
                }],
                this.configBioForm = this.formBuilder.group({
                    habilitaIdentificacao: [, r.u.required],
                    habilitaVerificacao: [, r.u.required],
                    nivelSegurancaIdentificacao: [, r.u.required]
                })
            }
            return Object.defineProperty(e.prototype, "habilitaIdentificacao", {
                get: function() {
                    return this.configBioForm.get("habilitaIdentificacao")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "habilitaVerificacao", {
                get: function() {
                    return this.configBioForm.get("habilitaVerificacao")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "nivelSegurancaIdentificacao", {
                get: function() {
                    return this.configBioForm.get("nivelSegurancaIdentificacao")
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.ngOnInit = function() {
                this.disableFormFields(),
                this.refreshFormData()
            }
            ,
            e.prototype.refreshFormData = function() {
                var e = this;
                this.configService.getBiometryInfo().subscribe((function(t) {
                    e.habilitaIdentificacao.setValue(t.habilitaIdentificacao),
                    e.habilitaVerificacao.setValue(t.habilitaVerificacao),
                    e.nivelSegurancaIdentificacao.setValue(t.nivelSegurancaIdentificacao)
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage()
                }
                ))
            }
            ,
            e.prototype.onEditClick = function() {
                this.editEnabled = !1,
                this.enableFormFields()
            }
            ,
            e.prototype.onSaveClick = function() {
                this.editEnabled = !0,
                this.configBioForm.disable(),
                this.saveData()
            }
            ,
            e.prototype.onCancelClick = function() {
                this.editEnabled = !0,
                this.disableFormFields(),
                this.refreshFormData()
            }
            ,
            e.prototype.enableFormFields = function() {
                this.habilitaIdentificacao.enable(),
                this.habilitaVerificacao.enable(),
                this.nivelSegurancaIdentificacao.enable()
            }
            ,
            e.prototype.disableFormFields = function() {
                this.habilitaIdentificacao.disable(),
                this.habilitaVerificacao.disable(),
                this.nivelSegurancaIdentificacao.disable()
            }
            ,
            e.prototype.saveData = function() {
                var e = this
                  , t = {
                    habilitaIdentificacao: this.habilitaIdentificacao.value,
                    habilitaVerificacao: this.habilitaVerificacao.value,
                    nivelSegurancaIdentificacao: this.nivelSegurancaIdentificacao.value
                };
                Object(E.a)(this.configService.postBiometryInfo(t), this.configService.getBiometryInfo()).pipe(Object(k.a)()).subscribe((function(t) {
                    e.configBioForm.enable(),
                    e.disableFormFields(),
                    e.editEnabled = !0,
                    e.habilitaIdentificacao.setValue(t.habilitaIdentificacao),
                    e.habilitaVerificacao.setValue(t.habilitaVerificacao),
                    e.nivelSegurancaIdentificacao.setValue(t.nivelSegurancaIdentificacao),
                    e.toastr.successToastr("Informa\xe7\xf5es salvas com sucesso.", "", {
                        position: "top-center",
                        animate: "fade"
                    })
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.toastr.errorToastr("Erro ao tentar salvar informa\xe7\xf5es.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.configBioForm.enable(),
                    e.enableFormFields(),
                    e.editEnabled = !1
                }
                ))
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.Nb(r.d),d.Nb(F.a),d.Nb(_.a),d.Nb(c.a))
            }
            ,
            e.\u0275cmp = d.Hb({
                type: e,
                selectors: [["app-config-biometry"]],
                decls: 50,
                vars: 18,
                consts: [[3, "formGroup"], [1, "container", "col-md-12"], [1, "row"], [1, "col-md-12", "text-left"], [1, "form-group", "row"], [1, "col-md-3"], [1, "form-label", 3, "ngClass"], [1, "col-md-8"], [1, "form-check", "form-check-inline", "col-md-2"], ["formControlName", "habilitaIdentificacao", "type", "radio", 1, "form-check-input", 3, "value"], [1, "form-check-label"], ["formControlName", "habilitaVerificacao", "type", "radio", 1, "form-check-input", 3, "value"], ["for", "primary-reader", 1, "control-label", 3, "ngClass"], [1, "col-sm-8", "col-md-8"], ["formControlName", "nivelSegurancaIdentificacao", "id", "primary-reader", 1, "input-large", "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "fa", "fa-edit"], [1, "fa", "fa-check"], [1, "fa", "fa-undo"], [3, "ngValue"]],
                template: function(e, t) {
                    1 & e && (d.Sb(0, "form", 0),
                    d.Sb(1, "div", 1),
                    d.Ob(2, "br"),
                    d.Sb(3, "div", 2),
                    d.Sb(4, "div", 3),
                    d.Sb(5, "div", 4),
                    d.Sb(6, "div", 5),
                    d.Sb(7, "label", 6),
                    d.Bc(8, "Habilita Identifica\xe7\xe3o:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(9, "div", 7),
                    d.Sb(10, "div", 8),
                    d.Ob(11, "input", 9),
                    d.Sb(12, "label", 10),
                    d.Bc(13, "Sim"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(14, "div", 8),
                    d.Ob(15, "input", 9),
                    d.Sb(16, "label", 10),
                    d.Bc(17, "N\xe3o"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(18, "div", 4),
                    d.Sb(19, "div", 5),
                    d.Sb(20, "label", 6),
                    d.Bc(21, "Habilita Verifica\xe7\xe3o:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(22, "div", 7),
                    d.Sb(23, "div", 8),
                    d.Ob(24, "input", 11),
                    d.Sb(25, "label", 10),
                    d.Bc(26, "Sim"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(27, "div", 8),
                    d.Ob(28, "input", 11),
                    d.Sb(29, "label", 10),
                    d.Bc(30, "N\xe3o"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(31, "div", 4),
                    d.Sb(32, "div", 5),
                    d.Sb(33, "label", 12),
                    d.Bc(34, "N\xedvel de Seguran\xe7a:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(35, "div", 13),
                    d.Sb(36, "select", 14),
                    d.zc(37, G, 2, 2, "option", 15),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(38, "br"),
                    d.Sb(39, "div", 16),
                    d.Sb(40, "button", 17),
                    d.ec("click", (function() {
                        return t.onEditClick()
                    }
                    )),
                    d.Ob(41, "em", 18),
                    d.Bc(42, "Editar"),
                    d.Rb(),
                    d.Sb(43, "button", 17),
                    d.ec("click", (function() {
                        return t.onSaveClick()
                    }
                    )),
                    d.Ob(44, "em", 19),
                    d.Bc(45, "Salvar"),
                    d.Rb(),
                    d.Sb(46, "button", 17),
                    d.ec("click", (function() {
                        return t.onCancelClick()
                    }
                    )),
                    d.Ob(47, "em", 20),
                    d.Bc(48, "Cancelar"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(49, "br"),
                    d.Rb()),
                    2 & e && (d.jc("formGroup", t.configBioForm),
                    d.Ab(7),
                    d.jc("ngClass", d.nc(12, U, t.habilitaIdentificacao.invalid && (t.habilitaIdentificacao.dirty || t.habilitaIdentificacao.touched))),
                    d.Ab(4),
                    d.jc("value", !0),
                    d.Ab(4),
                    d.jc("value", !1),
                    d.Ab(5),
                    d.jc("ngClass", d.nc(14, U, t.habilitaVerificacao.invalid && (t.habilitaVerificacao.dirty || t.habilitaVerificacao.touched))),
                    d.Ab(4),
                    d.jc("value", !0),
                    d.Ab(4),
                    d.jc("value", !1),
                    d.Ab(5),
                    d.jc("ngClass", d.nc(16, U, t.nivelSegurancaIdentificacao.invalid && (t.nivelSegurancaIdentificacao.dirty || t.nivelSegurancaIdentificacao.touched))),
                    d.Ab(4),
                    d.jc("ngForOf", t.securityOptions),
                    d.Ab(3),
                    d.jc("disabled", !t.editEnabled),
                    d.Ab(3),
                    d.jc("disabled", t.editEnabled || t.configBioForm.invalid),
                    d.Ab(3),
                    d.jc("disabled", t.editEnabled))
                },
                directives: [r.w, r.m, r.f, o.i, r.b, r.p, r.l, r.e, r.s, o.j, r.o, r.v],
                encapsulation: 2
            }),
            e
        }()
          , J = i("ueP2")
          , K = i("O4hn")
          , Q = function(e) {
            return {
                "text-danger": e
            }
        }
          , Y = function() {
            function e(e, t, i, o, a) {
                this.locale = e,
                this.formBuilder = t,
                this.toastr = i,
                this.configService = o,
                this.connectionErrorService = a,
                this.minDate = {
                    year: 2e3,
                    month: 1,
                    day: 1
                },
                this.maxDate = {
                    year: 2099,
                    month: 1,
                    day: 1
                },
                this.configClockForm = this.formBuilder.group({
                    innerDateTime: [],
                    computerDateTime: [],
                    savingTimeStart: [, [r.u.required]],
                    savingTimeEnd: [, [r.u.required]]
                })
            }
            return Object.defineProperty(e.prototype, "savingTimeStart", {
                get: function() {
                    return this.configClockForm.get("savingTimeStart")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "savingTimeEnd", {
                get: function() {
                    return this.configClockForm.get("savingTimeEnd")
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.ngOnInit = function() {
                this.getSavingTimeInfo(),
                this.getClockInfo()
            }
            ,
            e.prototype.ngOnDestroy = function() {
                this.requestTimer && clearInterval(this.requestTimer),
                this.updateTimer && clearInterval(this.updateTimer)
            }
            ,
            e.prototype.getClockInfo = function() {
                var e = this;
                this.configService.getClockInfo().subscribe((function(t) {
                    e.requestTimer && (clearInterval(e.requestTimer),
                    e.requestTimer = null),
                    e.updateTimer && (clearInterval(e.updateTimer),
                    e.updateTimer = null),
                    e.updateClockData(t),
                    e.requestTimer || (e.requestTimer = setInterval((function() {
                        return e.getClockInfo()
                    }
                    ), 6e4)),
                    e.updateTimer || (e.updateTimer = setInterval((function() {
                        return e.incTime()
                    }
                    ), 1e3))
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage()
                }
                ))
            }
            ,
            e.prototype.getSavingTimeInfo = function() {
                var e = this;
                this.configService.getSavingTimeInfo().subscribe((function(t) {
                    e.updateSavingTimeData(t)
                }
                ), (function(e) {
                    console.log(e)
                }
                ))
            }
            ,
            e.prototype.updateSavingTimeData = function(e) {
                var t, i;
                this.isSavingTimeSet(e) && (t = new Date(e.anoInicio + 2e3,e.mesInicio - 1,e.diaInicio,e.horaInicio,e.minutosInicio,0,0),
                i = new Date(e.anoFim + 2e3,e.mesFim - 1,e.diaFim,e.horaFim,e.minutosFim,0,0)),
                this.configClockForm.get("savingTimeStart").setValue(t),
                this.configClockForm.get("savingTimeEnd").setValue(i)
            }
            ,
            e.prototype.isSavingTimeSet = function(e) {
                return void 0 !== Object.keys(e).find((function(t) {
                    return 255 !== e[t]
                }
                ))
            }
            ,
            e.prototype.savingTimeSendClick = function() {
                var e = this;
                this.configClockForm.disable();
                var t = this.configClockForm.get("savingTimeStart").value
                  , i = this.configClockForm.get("savingTimeEnd").value
                  , o = {
                    diaInicio: t.getDate(),
                    mesInicio: t.getMonth() + 1,
                    anoInicio: t.getFullYear() % 100,
                    horaInicio: 0,
                    minutosInicio: 0,
                    diaFim: i.getDate(),
                    mesFim: i.getMonth() + 1,
                    anoFim: i.getFullYear() % 100,
                    horaFim: 0,
                    minutosFim: 0
                };
                this.configService.postSavingTimeInfo(o).subscribe((function() {
                    e.toastr.successToastr("Informa\xe7\xf5es salvas com sucesso.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.getClockInfo()
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.toastr.errorToastr("Erro ao tentar salvar informa\xe7\xf5es.", "", {
                        position: "top-center",
                        animate: "fade"
                    })
                }
                )).add((function() {
                    e.configClockForm.enable()
                }
                ))
            }
            ,
            e.prototype.incTime = function() {
                var e = Date.parse(this.innerDateTime.toISOString());
                this.innerDateTime = new Date(e += 1e3),
                this.configClockForm.get("innerDateTime").setValue(Object(o.t)(this.innerDateTime, "dd/MM/yyyy HH:mm:ss", this.locale)),
                this.configClockForm.get("computerDateTime").setValue(Object(o.t)(Date.now(), "dd/MM/yyyy HH:mm:ss", this.locale))
            }
            ,
            e.prototype.updateClockData = function(e) {
                this.innerDateTime = new Date(e.ano + 2e3,e.mes - 1,e.dia,e.hora,e.minutos,e.segundos,0),
                this.configClockForm.get("innerDateTime").setValue(Object(o.t)(this.innerDateTime, "dd/MM/yyyy HH:mm:ss", this.locale)),
                this.configClockForm.get("computerDateTime").setValue(Object(o.t)(Date.now(), "dd/MM/yyyy HH:mm:ss", this.locale))
            }
            ,
            e.prototype.dateTimeSendClick = function() {
                var e = this;
                this.configClockForm.disable();
                var t = new Date(Date.now())
                  , i = {
                    dia: t.getDate(),
                    mes: t.getMonth() + 1,
                    ano: t.getFullYear() % 2e3,
                    hora: t.getHours(),
                    minutos: t.getMinutes(),
                    segundos: t.getSeconds(),
                    diaSemana: t.getDay()
                };
                this.configService.postClockInfo(i).subscribe((function() {
                    e.getClockInfo(),
                    e.toastr.successToastr("Informa\xe7\xf5es salvas com sucesso.", "", {
                        position: "top-center",
                        animate: "fade"
                    })
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.toastr.errorToastr("Erro ao tentar salvar informa\xe7\xf5es.", "", {
                        position: "top-center",
                        animate: "fade"
                    })
                }
                )).add((function() {
                    e.configClockForm.enable()
                }
                ))
            }
            ,
            e.prototype.isSavingTimeDatesValid = function() {
                var e;
                try {
                    e = !(!this.savingTimeEnd.value || !this.savingTimeStart.value) && this.savingTimeStart.value < this.savingTimeEnd.value
                } catch (t) {
                    e = !1
                }
                return e
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.Nb(d.u),d.Nb(r.d),d.Nb(F.a),d.Nb(_.a),d.Nb(c.a))
            }
            ,
            e.\u0275cmp = d.Hb({
                type: e,
                selectors: [["app-config-clock"]],
                features: [d.zb([K.b, {
                    provide: a.e,
                    useClass: K.a
                }, {
                    provide: a.b,
                    useClass: a.c
                }, {
                    provide: a.d,
                    useClass: J.a
                }])],
                decls: 57,
                vars: 12,
                consts: [[3, "formGroup"], [1, "container", "col-md-12", "col-sm-12"], [1, "row"], [1, "col-md-12", "text-left"], [1, "card-body"], [1, "col-md-6"], [1, "text-primary"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["formControlName", "innerDateTime", "readonly", "", 1, "form-control"], ["formControlName", "computerDateTime", "readonly", "", 1, "form-control"], [1, "col-md-12", "mt-3", "mb-5"], ["id", "sincronizar", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-sync"], [1, "input-group-text", 3, "ngClass"], ["formControlName", "savingTimeStart", "placement", "top", "ngbDatepicker", "", "readonly", "", 1, "form-control", 3, "minDate", "maxDate"], ["e", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-calendar-alt"], ["formControlName", "savingTimeEnd", "placement", "top", "ngbDatepicker", "", "readonly", "", 1, "form-control", 3, "minDate", "maxDate"], ["d", "ngbDatepicker"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "fa", "fa-check"]],
                template: function(e, t) {
                    if (1 & e) {
                        var i = d.Tb();
                        d.Sb(0, "form", 0),
                        d.Ob(1, "br"),
                        d.Sb(2, "div", 1),
                        d.Sb(3, "div", 2),
                        d.Sb(4, "div", 3),
                        d.Sb(5, "div", 4),
                        d.Sb(6, "div", 2),
                        d.Sb(7, "div", 5),
                        d.Sb(8, "h5", 6),
                        d.Bc(9, "Atualizar Rel\xf3gio"),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(10, "div", 2),
                        d.Sb(11, "div", 5),
                        d.Sb(12, "div", 7),
                        d.Sb(13, "div", 8),
                        d.Sb(14, "span", 9),
                        d.Bc(15, "Inner"),
                        d.Rb(),
                        d.Rb(),
                        d.Ob(16, "input", 10),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(17, "div", 5),
                        d.Sb(18, "div", 7),
                        d.Sb(19, "div", 8),
                        d.Sb(20, "span", 9),
                        d.Bc(21, "Computador"),
                        d.Rb(),
                        d.Rb(),
                        d.Ob(22, "input", 11),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(23, "div", 12),
                        d.Sb(24, "button", 13),
                        d.ec("click", (function() {
                            return t.dateTimeSendClick()
                        }
                        )),
                        d.Ob(25, "i", 14),
                        d.Bc(26, " Sincronizar "),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(27, "div", 2),
                        d.Sb(28, "div", 5),
                        d.Sb(29, "h5", 6),
                        d.Bc(30, "Hor\xe1rio de Ver\xe3o"),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(31, "div", 2),
                        d.Sb(32, "div", 5),
                        d.Sb(33, "div", 7),
                        d.Sb(34, "div", 8),
                        d.Sb(35, "span", 15),
                        d.Bc(36, "In\xedcio"),
                        d.Rb(),
                        d.Rb(),
                        d.Ob(37, "input", 16, 17),
                        d.Sb(39, "div", 18),
                        d.Sb(40, "button", 19),
                        d.ec("click", (function() {
                            return d.sc(i),
                            d.rc(38).toggle()
                        }
                        )),
                        d.Ob(41, "i", 20),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(42, "div", 5),
                        d.Sb(43, "div", 7),
                        d.Sb(44, "div", 8),
                        d.Sb(45, "span", 15),
                        d.Bc(46, "Fim"),
                        d.Rb(),
                        d.Rb(),
                        d.Ob(47, "input", 21, 22),
                        d.Sb(49, "div", 18),
                        d.Sb(50, "button", 19),
                        d.ec("click", (function() {
                            return d.sc(i),
                            d.rc(48).toggle()
                        }
                        )),
                        d.Ob(51, "i", 20),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(52, "div", 12),
                        d.Sb(53, "button", 23),
                        d.ec("click", (function() {
                            return t.savingTimeSendClick()
                        }
                        )),
                        d.Ob(54, "i", 24),
                        d.Bc(55, " Enviar Hor\xe1rio de Ver\xe3o "),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Ob(56, "br"),
                        d.Rb()
                    }
                    2 & e && (d.jc("formGroup", t.configClockForm),
                    d.Ab(35),
                    d.jc("ngClass", d.nc(8, Q, !t.isSavingTimeDatesValid() && (t.savingTimeStart.touched || t.savingTimeEnd.touched))),
                    d.Ab(2),
                    d.jc("minDate", t.minDate)("maxDate", t.maxDate),
                    d.Ab(8),
                    d.jc("ngClass", d.nc(10, Q, !t.isSavingTimeDatesValid() && (t.savingTimeStart.touched || t.savingTimeEnd.touched))),
                    d.Ab(2),
                    d.jc("minDate", t.minDate)("maxDate", t.maxDate),
                    d.Ab(6),
                    d.jc("disabled", !t.isSavingTimeDatesValid()))
                },
                directives: [r.w, r.m, r.f, r.b, r.l, r.e, o.i, a.g],
                encapsulation: 2
            }),
            e
        }()
          , Z = function() {
            function e() {}
            return e.prototype.ipValidator = function() {
                return function(e) {
                    return new RegExp(/^(?!255\.255\.255\.255)((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/).test(e.value) ? null : {
                        ip: {
                            value: e.value
                        }
                    }
                }
            }
            ,
            e.prototype.netMaskValidator = function() {
                return function(e) {
                    return new RegExp(/^(?!0+\.0+\.0+\.0+)(?!255\.255\.255\.255)((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/).test(e.value) ? null : {
                        ip: {
                            value: e.value
                        }
                    }
                }
            }
            ,
            e.prototype.setFormValue = function(e, t) {
                e.setValue(t, {
                    onlySelf: !0,
                    emitEvent: !1
                })
            }
            ,
            e
        }()
          , X = b.a.apiUrl
          , ee = function() {
            function e(e) {
                this.http = e
            }
            return e.prototype.postHabilitaWifi = function(e) {
                return this.http.post(X + "/habilitawifi", e).pipe(Object(l.a)(1))
            }
            ,
            e.prototype.postConnectNetwork = function(e) {
                return this.http.post(X + "/conectawifi", e).pipe(Object(l.a)(1))
            }
            ,
            e.prototype.getScanNetwork = function() {
                var e = this
                  , t = 0;
                return this.http.get(X + "/scanredeswifi").pipe(Object(l.a)(1), Object(h.a)(100), Object(g.a)((function(i) {
                    return "" === i.nomeDeRede && t <= 100 ? (t++,
                    e.http.get(X + "/scanredeswifi").pipe(Object(l.a)(1), Object(h.a)(100))) : (t = 0,
                    m.a)
                }
                )), Object(v.a)((function(e) {
                    return "" !== e.nomeDeRede
                }
                )))
            }
            ,
            e.prototype.getCmdScanSend = function() {
                var e = this
                  , t = (new u.e).set("passoCmd", "0")
                  , i = 0;
                return this.http.get(X + "/enviacmdscanrede", {
                    params: t
                }).pipe(Object(l.a)(1), Object(h.a)(100), Object(g.a)((function(o) {
                    if (t = (new u.e).set("passoCmd", "1"),
                    !1 === o.resultadoScan && i < 300)
                        return i++,
                        e.http.get(X + "/enviacmdscanrede", {
                            params: t
                        }).pipe(Object(l.a)(1), Object(h.a)(100));
                    if (300 === i && !1 === o.resultadoScan)
                        throw i = 0,
                        new Error("Timeout");
                    return i = 0,
                    m.a
                }
                )), Object(v.a)((function(e) {
                    return !0 === e.resultadoScan
                }
                )))
            }
            ,
            e.prototype.getNetwork = function(e) {
                var t = (new u.e).set("redeIndex", e.toString());
                return this.http.get(X + "/cmdgetrede", {
                    params: t
                }).pipe(Object(l.a)(1), Object(h.a)(200))
            }
            ,
            e.prototype.getConnectedNetwork = function() {
                return this.http.get(X + "/redewificonectada").pipe(Object(l.a)(1))
            }
            ,
            e.prototype.getConnectedStatus = function() {
                var e = this
                  , t = 0;
                return this.http.get(X + "/connectstatus").pipe(Object(l.a)(1), Object(h.a)(1e3), Object(g.a)((function(i) {
                    if (!1 === i.statusConectado && t < 60)
                        return t++,
                        e.http.get(X + "/connectstatus").pipe(Object(l.a)(1), Object(h.a)(1e3));
                    if (60 === t && !1 === i.statusConectado)
                        throw t = 0,
                        new Error("Timeout");
                    return t = 0,
                    m.a
                }
                )), Object(v.a)((function(e) {
                    return !0 === e.statusConectado
                }
                )))
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.ac(u.b))
            }
            ,
            e.\u0275prov = d.Jb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }()
          , te = i("1NWo")
          , ie = function() {
            function e(e) {
                this.modal = e,
                this.initIcon = "fa fa-hourglass-start"
            }
            return e.prototype.ngOnInit = function() {
                var e = this;
                setTimeout((function() {
                    e.getloadingIcon()
                }
                ), 1e3)
            }
            ,
            e.prototype.getloadingIcon = function() {
                var t = this;
                0 === e.stateLoadIcon ? setTimeout((function() {
                    e.stateLoadIcon = 1,
                    t.initIcon = "fa fa-hourglass-start",
                    t.getloadingIcon()
                }
                ), 450) : 1 === e.stateLoadIcon ? setTimeout((function() {
                    e.stateLoadIcon = 2,
                    t.initIcon = "fa fa-hourglass-half",
                    t.getloadingIcon()
                }
                ), 1e3) : 2 === e.stateLoadIcon ? setTimeout((function() {
                    e.stateLoadIcon = 3,
                    t.initIcon = "fa fa-hourglass-end",
                    t.getloadingIcon()
                }
                ), 1e3) : 3 === e.stateLoadIcon && setTimeout((function() {
                    e.stateLoadIcon = 0,
                    t.initIcon = "fa fa-hourglass-end spin-half",
                    t.getloadingIcon()
                }
                ), 1e3)
            }
            ,
            e.stateLoadIcon = 0,
            e.\u0275fac = function(t) {
                return new (t || e)(d.Nb(a.a))
            }
            ,
            e.\u0275cmp = d.Hb({
                type: e,
                selectors: [["app-modal-conecting"]],
                decls: 10,
                vars: 3,
                consts: [[1, "modal-body"], [1, "row"], [1, "col-12", "text-center"]],
                template: function(e, t) {
                    1 & e && (d.Sb(0, "div", 0),
                    d.Ob(1, "br"),
                    d.Sb(2, "div", 1),
                    d.Sb(3, "div", 2),
                    d.Sb(4, "h3"),
                    d.Bc(5, " Conectando..."),
                    d.Rb(),
                    d.Sb(6, "small"),
                    d.Bc(7, "Por favor, aguarde. "),
                    d.Rb(),
                    d.Ob(8, "br"),
                    d.Ob(9, "i"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb()),
                    2 & e && (d.Ab(9),
                    d.Db("", t.initIcon, " text-secondary"))
                },
                encapsulation: 2
            }),
            e
        }()
          , oe = function(e) {
            return {
                "text-danger": e
            }
        }
          , re = function(e) {
            return e[e.OPEN = 1] = "OPEN",
            e[e.WPA2 = 2] = "WPA2",
            e[e.WEP = 3] = "WEP",
            e
        }({})
          , ae = function() {
            function e(e, t, i, o, a, n, c) {
                this.formBuilder = e,
                this.configWifiService = t,
                this.activeModal = i,
                this.modalService = o,
                this.toastr = a,
                this.cryptoService = n,
                this.config = c,
                this.networkConnectForm = this.formBuilder.group({
                    wifiNetName: [, r.u.required],
                    wifiNetPassword: [],
                    wifiNetSecurityPattern: []
                }),
                this.config.backdrop = "static"
            }
            return Object.defineProperty(e.prototype, "wifiNetName", {
                get: function() {
                    return this.networkConnectForm.get("wifiNetName")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "wifiNetPassword", {
                get: function() {
                    return this.networkConnectForm.get("wifiNetPassword")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "wifiNetSecurityPattern", {
                get: function() {
                    return this.networkConnectForm.get("wifiNetSecurityPattern")
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.ngOnInit = function() {}
            ,
            e.prototype.passwordIsInvalid = function() {
                var e = this.minLengthPasword();
                return this.wifiNetPassword.value.length < e
            }
            ,
            e.prototype.setWifiConnectForm = function(e) {
                this.wifiNetName.setValue(e.nomeDeRede),
                this.wifiNetPassword.setValue(e.senha),
                this.wifiNetSecurityPattern.setValue(e.seguranca)
            }
            ,
            e.prototype.onCloseModalClick = function(e) {
                var t = this;
                if ("Conectar click" === e) {
                    var i = this.modalService.open(A.a);
                    i.componentInstance.setMessage("Estabelecer conex\xe3o com uma nova rede pode vir a ocasionar a perda de comunica\xe7\xe3o com o Inner.", " Aviso", !1, !0),
                    i.result.then((function(e) {
                        "OK" === e && t.connectProcess()
                    }
                    ), (function() {
                        t.activeModal.dismiss()
                    }
                    ))
                } else
                    this.activeModal.dismiss()
            }
            ,
            e.prototype.openWaitModal = function() {
                this.waitModalRef = this.modalService.open(ie, {
                    backdrop: "static",
                    keyboard: !1,
                    centered: !0
                })
            }
            ,
            e.prototype.closeWaitModal = function() {
                this.waitModalRef && this.waitModalRef.close()
            }
            ,
            e.prototype.connectProcess = function() {
                var e = this;
                this.openWaitModal();
                var t = {
                    nomeDeRede: this.cryptoService.cripto(this.wifiNetName.value),
                    seguranca: this.wifiNetSecurityPattern.value,
                    senha: this.cryptoService.cripto(this.wifiNetPassword.value)
                };
                Object(E.a)(this.configWifiService.postConnectNetwork(t), this.configWifiService.getConnectedStatus()).pipe(Object(k.a)()).subscribe((function(t) {
                    null === t ? (e.toastr.errorToastr("N\xe3o foi poss\xedvel conectar.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.closeWaitModal(),
                    e.activeModal.close()) : (e.toastr.successToastr("Conex\xe3o realizada com sucesso.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.closeWaitModal(),
                    e.activeModal.close())
                }
                ), (function() {
                    e.toastr.errorToastr("N\xe3o foi poss\xedvel conectar.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.closeWaitModal(),
                    e.activeModal.close()
                }
                ))
            }
            ,
            e.prototype.minLengthPasword = function() {
                return this.wifiNetSecurityPattern.value === re.WPA2 ? 8 : this.wifiNetSecurityPattern.value === re.WEP ? 5 : 0
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.Nb(r.d),d.Nb(ee),d.Nb(a.a),d.Nb(a.h),d.Nb(F.a),d.Nb(te.a),d.Nb(a.i))
            }
            ,
            e.\u0275cmp = d.Hb({
                type: e,
                selectors: [["app-network-connect"]],
                decls: 27,
                vars: 5,
                consts: [[1, "modal-header"], [1, "modal-title"], ["id", "modal", 1, "modal-body"], [3, "formGroup", "submit"], [1, "container", "col-md-12"], [1, "form-group", "row"], [1, "col-md-5"], [1, "control-label", 3, "ngClass"], [1, "col-md-7"], ["formControlName", "wifiNetName", "type", "text", "maxlength", "15", "autocomplete", "new-name", 1, "form-control"], [1, "control-label"], ["formControlName", "wifiNetPassword", "type", "password", "placeholder", "Digite a Senha", "maxlength", "64", "autocomplete", "new-password", 1, "form-control"], [1, "row"], [1, "col", "text-right"], ["type", "submit", "ngbAutofocus", "", 1, "btn", "btn-outline-dark", 3, "disabled"], [1, "col-2"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
                template: function(e, t) {
                    1 & e && (d.Sb(0, "div", 0),
                    d.Sb(1, "h4", 1),
                    d.Bc(2, " Conectar \xe0 uma rede Wi-Fi "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(3, "div", 2),
                    d.Sb(4, "form", 3),
                    d.ec("submit", (function() {
                        return t.onCloseModalClick("Conectar click")
                    }
                    )),
                    d.Ob(5, "br"),
                    d.Sb(6, "div", 4),
                    d.Sb(7, "div", 5),
                    d.Sb(8, "div", 6),
                    d.Sb(9, "label", 7),
                    d.Bc(10, " Nome da Rede: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(11, "div", 8),
                    d.Ob(12, "input", 9),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(13, "div", 5),
                    d.Sb(14, "div", 6),
                    d.Sb(15, "label", 10),
                    d.Bc(16, " Senha: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(17, "div", 8),
                    d.Ob(18, "input", 11),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(19, "br"),
                    d.Sb(20, "div", 12),
                    d.Sb(21, "div", 13),
                    d.Sb(22, "button", 14),
                    d.Bc(23, " Conectar "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(24, "div", 15),
                    d.Sb(25, "button", 16),
                    d.ec("click", (function() {
                        return t.onCloseModalClick("Cancel click")
                    }
                    )),
                    d.Bc(26, " Cancela "),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb()),
                    2 & e && (d.Ab(4),
                    d.jc("formGroup", t.networkConnectForm),
                    d.Ab(5),
                    d.jc("ngClass", d.nc(3, oe, t.wifiNetName.invalid && (t.wifiNetName.dirty || t.wifiNetName.touched))),
                    d.Ab(13),
                    d.jc("disabled", t.passwordIsInvalid()))
                },
                directives: [r.w, r.m, r.f, o.i, r.b, r.l, r.e, r.i],
                styles: [""]
            }),
            e
        }();
        function ne(e, t) {
            if (1 & e && (d.Sb(0, "option", 20),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        var ce, se = function(e) {
            return {
                "text-danger": e
            }
        }, le = function(e) {
            return e[e.OPEN = 1] = "OPEN",
            e[e.WPA2 = 2] = "WPA2",
            e[e.WEP = 3] = "WEP",
            e
        }({}), be = function() {
            function e(e, t, i, o, a, n, c) {
                this.formBuilder = e,
                this.configWifiService = t,
                this.activeModal = i,
                this.modalService = o,
                this.toastr = a,
                this.cryptoService = n,
                this.config = c,
                this.wifiNetSecurityPatternOptions = [{
                    description: "OPEN",
                    value: 1
                }, {
                    description: "WPA/WPA2",
                    value: 2
                }, {
                    description: "WEP",
                    value: 3
                }],
                this.networkAddForm = this.formBuilder.group({
                    wifiNetName: [, r.u.required],
                    wifiNetPassword: [],
                    wifiNetSecurityPattern: [, r.u.required]
                }),
                this.config.backdrop = "static"
            }
            return e.prototype.passwordIsInvalid = function() {
                var e = this.minLengthPasword()
                  , t = this.wifiNetPassword.value;
                return null === t && (t = ""),
                t.length < e
            }
            ,
            Object.defineProperty(e.prototype, "wifiNetName", {
                get: function() {
                    return this.networkAddForm.get("wifiNetName")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "wifiNetPassword", {
                get: function() {
                    return this.networkAddForm.get("wifiNetPassword")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "wifiNetSecurityPattern", {
                get: function() {
                    return this.networkAddForm.get("wifiNetSecurityPattern")
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.ngOnInit = function() {
                this.wifiNetSecurityPattern.setValue(2)
            }
            ,
            e.prototype.onCloseModalClick = function(e) {
                var t = this;
                if ("Conectar click" === e) {
                    var i = this.modalService.open(A.a);
                    i.componentInstance.setMessage("Estabelecer conex\xe3o com uma nova rede pode vir a ocasionar a perda de comunica\xe7\xe3o com o Inner.", " Aviso", !1, !0),
                    i.result.then((function(e) {
                        "OK" === e && t.connectProcess()
                    }
                    ), (function() {
                        t.activeModal.dismiss()
                    }
                    ))
                } else
                    this.activeModal.dismiss()
            }
            ,
            e.prototype.openWaitModal = function() {
                this.waitModalRef = this.modalService.open(ie, {
                    backdrop: "static",
                    keyboard: !1,
                    centered: !0
                })
            }
            ,
            e.prototype.closeWaitModal = function() {
                this.waitModalRef && this.waitModalRef.close()
            }
            ,
            e.prototype.connectProcess = function() {
                var e = this;
                this.openWaitModal();
                var t = {
                    nomeDeRede: this.cryptoService.cripto(this.wifiNetName.value),
                    seguranca: this.wifiNetSecurityPattern.value,
                    senha: this.cryptoService.cripto(this.wifiNetPassword.value)
                };
                Object(E.a)(this.configWifiService.postConnectNetwork(t), this.configWifiService.getConnectedStatus()).pipe(Object(k.a)()).subscribe((function(t) {
                    null === t ? (e.toastr.errorToastr("N\xe3o foi poss\xedvel conectar.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.closeWaitModal(),
                    e.activeModal.close()) : (e.toastr.successToastr("Conex\xe3o realizada com sucesso.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.activeModal.close(),
                    e.closeWaitModal(),
                    e.activeModal.close())
                }
                ), (function() {
                    e.toastr.errorToastr("N\xe3o foi poss\xedvel conectar.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.closeWaitModal(),
                    e.activeModal.close()
                }
                ))
            }
            ,
            e.prototype.minLengthPasword = function() {
                return this.wifiNetSecurityPattern.value === le.WPA2 ? 8 : this.wifiNetSecurityPattern.value === le.WEP ? 5 : 0
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.Nb(r.d),d.Nb(ee),d.Nb(a.a),d.Nb(a.h),d.Nb(F.a),d.Nb(te.a),d.Nb(a.i))
            }
            ,
            e.\u0275cmp = d.Hb({
                type: e,
                selectors: [["app-network-add"]],
                decls: 33,
                vars: 9,
                consts: [[1, "modal-header"], [1, "modal-title"], ["id", "modal", 1, "modal-body"], [3, "formGroup", "submit"], [1, "container", "col-md-12"], [1, "form-group", "row"], [1, "col-md-5"], [1, "control-label", 3, "ngClass"], [1, "col-md-7"], ["formControlName", "wifiNetName", "type", "text", "placeholder", "Digite o SSID", "maxlength", "32", "autocomplete", "new-name", 1, "form-control"], [1, "control-label"], ["formControlName", "wifiNetPassword", "type", "password", "placeholder", "Digite a Senha", "maxlength", "64", "autocomplete", "new-password", 1, "form-control"], ["for", "prox-type", 1, "control-label", 3, "ngClass"], ["formControlName", "wifiNetSecurityPattern", "id", "prox-type", 1, "input-large", "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col", "text-right"], ["type", "submit", "ngbAutofocus", "", 1, "btn", "btn-outline-dark", 3, "disabled"], [1, "col-2"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [3, "ngValue"]],
                template: function(e, t) {
                    1 & e && (d.Sb(0, "div", 0),
                    d.Sb(1, "h4", 1),
                    d.Bc(2, " Adicionar uma rede Wi-Fi "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(3, "div", 2),
                    d.Sb(4, "form", 3),
                    d.ec("submit", (function() {
                        return t.onCloseModalClick("Conectar click")
                    }
                    )),
                    d.Sb(5, "div", 4),
                    d.Sb(6, "div", 5),
                    d.Sb(7, "div", 6),
                    d.Sb(8, "label", 7),
                    d.Bc(9, " Nome da Rede: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(10, "div", 8),
                    d.Ob(11, "input", 9),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(12, "div", 5),
                    d.Sb(13, "div", 6),
                    d.Sb(14, "label", 10),
                    d.Bc(15, " Senha: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(16, "div", 8),
                    d.Ob(17, "input", 11),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(18, "div", 5),
                    d.Sb(19, "div", 6),
                    d.Sb(20, "label", 12),
                    d.Bc(21, " Padr\xe3o de Seguran\xe7a: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(22, "div", 8),
                    d.Sb(23, "select", 13),
                    d.zc(24, ne, 2, 2, "option", 14),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(25, "br"),
                    d.Sb(26, "div", 15),
                    d.Sb(27, "div", 16),
                    d.Sb(28, "button", 17),
                    d.Bc(29, " Conectar "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(30, "div", 18),
                    d.Sb(31, "button", 19),
                    d.ec("click", (function() {
                        return t.onCloseModalClick("Cancel click")
                    }
                    )),
                    d.Bc(32, " Cancela "),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb()),
                    2 & e && (d.Ab(4),
                    d.jc("formGroup", t.networkAddForm),
                    d.Ab(4),
                    d.jc("ngClass", d.nc(5, se, t.wifiNetName.invalid && (t.wifiNetName.dirty || t.wifiNetName.touched))),
                    d.Ab(12),
                    d.jc("ngClass", d.nc(7, se, t.wifiNetSecurityPattern.invalid && (t.wifiNetSecurityPattern.dirty || t.wifiNetSecurityPattern.touched))),
                    d.Ab(4),
                    d.jc("ngForOf", t.wifiNetSecurityPatternOptions),
                    d.Ab(4),
                    d.jc("disabled", t.passwordIsInvalid() || t.networkAddForm.invalid))
                },
                directives: [r.w, r.m, r.f, o.i, r.b, r.l, r.e, r.i, r.s, o.j, r.o, r.v],
                styles: [""]
            }),
            e
        }(), de = (ce = function(e, t) {
            return (ce = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var i in t)
                    t.hasOwnProperty(i) && (e[i] = t[i])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function i() {
                this.constructor = e
            }
            ce(e, t),
            e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
            new i)
        }
        );
        function ue(e, t) {
            1 & e && (d.Sb(0, "div", 53),
            d.Ob(1, "i", 54),
            d.Rb())
        }
        function fe(e, t) {
            if (1 & e && (d.Sb(0, "div"),
            d.Sb(1, "li"),
            d.Sb(2, "div", 5),
            d.Sb(3, "div", 48),
            d.Sb(4, "span", 49),
            d.Ob(5, "i", 50),
            d.Rb(),
            d.Sb(6, "span", 51),
            d.Bc(7),
            d.Rb(),
            d.Rb(),
            d.zc(8, ue, 2, 0, "div", 52),
            d.Rb(),
            d.Rb(),
            d.Rb()),
            2 & e) {
                var i = d.gc();
                d.Ab(4),
                d.kc("title", i.getSignalLvlSubtitles(i.getConnectedNetwork().nivelSinal)),
                d.Ab(3),
                d.Dc(" ", i.getConnectedNetwork().nomeDeRede, " "),
                d.Ab(1),
                d.jc("ngIf", 1 !== i.getConnectedNetwork().padraoSeguranca)
            }
        }
        function pe(e, t) {
            1 & e && (d.Sb(0, "div", 55),
            d.Bc(1, " Redes disponiveis: "),
            d.Rb())
        }
        function me(e, t) {
            1 & e && (d.Sb(0, "div", 53),
            d.Ob(1, "i", 54),
            d.Rb())
        }
        function he(e, t) {
            if (1 & e) {
                var i = d.Tb();
                d.Sb(0, "div"),
                d.Sb(1, "li"),
                d.Sb(2, "div", 5),
                d.Sb(3, "div", 48),
                d.Sb(4, "span", 49),
                d.Ob(5, "i", 50),
                d.Rb(),
                d.Sb(6, "button", 58),
                d.ec("click", (function() {
                    d.sc(i);
                    var e = t.$implicit;
                    return d.gc(2).onConnectNetwork(e.nomeDeRede)
                }
                )),
                d.Bc(7),
                d.Rb(),
                d.Rb(),
                d.zc(8, me, 2, 0, "div", 52),
                d.Rb(),
                d.Rb(),
                d.Rb()
            }
            if (2 & e) {
                var o = t.$implicit
                  , r = d.gc(2);
                d.Ab(4),
                d.kc("title", r.getSignalLvlSubtitles(o.nivelSinal)),
                d.Ab(2),
                d.jc("disabled", !1 === r.editEnabled || !1 === r.wifiEnable.value),
                d.Ab(1),
                d.Dc(" ", o.nomeDeRede, " "),
                d.Ab(1),
                d.jc("ngIf", 1 !== o.padraoSeguranca)
            }
        }
        function ge(e, t) {
            if (1 & e && (d.Sb(0, "ul", 56),
            d.zc(1, he, 9, 4, "div", 57),
            d.Rb()),
            2 & e) {
                var i = d.gc();
                d.Ab(1),
                d.jc("ngForOf", i.getAvaliableNetworks())
            }
        }
        function ve(e, t) {
            1 & e && (d.Ob(0, "br"),
            d.Sb(1, "div", 59),
            d.Ob(2, "i", 60),
            d.Rb(),
            d.Sb(3, "div", 61),
            d.Bc(4, " Carregando "),
            d.Rb())
        }
        var Se = function(e) {
            return {
                "text-danger": e
            }
        }
          , ye = function(e) {
            function t(t, i, o, a, n, c, s, l) {
                var b = e.call(this) || this;
                return b.formBuilder = t,
                b.configService = i,
                b.connectionErrorService = o,
                b.configWifiService = a,
                b.modalService = n,
                b.activeModal = c,
                b.toastr = s,
                b.config = l,
                b.editEnabled = !0,
                b.wifiEnableBckup = !1,
                b.customPatterns = {
                    C: {
                        pattern: new RegExp("^[a-zA-Z0-9]+$")
                    }
                },
                b.networkList = [],
                b.networkListTemp = [],
                b.listLoaded = !1,
                b.dhcpEnableBckup = !1,
                b.configWifiForm = b.formBuilder.group({
                    ipModuloWifi: [, [r.u.required, e.prototype.ipValidator.call(b)]],
                    macModuloWifi: [],
                    netMask: [, [r.u.required, e.prototype.netMaskValidator.call(b)]],
                    gateway: [, [r.u.required, e.prototype.ipValidator.call(b)]],
                    dhcpEnable: [, r.u.required],
                    nomeRede: [, r.u.maxLength(31)],
                    wifiEnable: [, r.u.required]
                }),
                b.canceledLoadingUnsubscribe = new C.a,
                b.config.backdrop = "static",
                b
            }
            return de(t, e),
            Object.defineProperty(t.prototype, "ipModuloWifi", {
                get: function() {
                    return this.configWifiForm.get("ipModuloWifi")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "macModuloWifi", {
                get: function() {
                    return this.configWifiForm.get("macModuloWifi")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "netMask", {
                get: function() {
                    return this.configWifiForm.get("netMask")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "gateway", {
                get: function() {
                    return this.configWifiForm.get("gateway")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dhcpEnable", {
                get: function() {
                    return this.configWifiForm.get("dhcpEnable")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "nomeRede", {
                get: function() {
                    return this.configWifiForm.get("nomeRede")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "wifiEnable", {
                get: function() {
                    return this.configWifiForm.get("wifiEnable")
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.ngOnInit = function() {
                var t = this;
                this.disableFormFields(),
                !0 === this.wifiEnable.value ? this.networkLoadList(!0) : this.listLoaded = !0,
                this.dhcpEnable.valueChanges.subscribe((function(e) {
                    !0 === e ? (t.nomeRede.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    t.ipModuloWifi.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    t.gateway.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    t.netMask.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    })) : (t.nomeRede.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    t.ipModuloWifi.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    t.gateway.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    t.netMask.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    }))
                }
                )),
                this.wifiEnable.valueChanges.subscribe((function(i) {
                    e.prototype.setFormValue.call(t, t.wifiEnable, i),
                    t.wifiEnable.value ? t.enableFormFields() : t.disableFormFields(),
                    !1 === t.wifiEnable.value && t.wifiEnable.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    })
                }
                ))
            }
            ,
            t.prototype.getConnectedNetwork = function() {
                if (void 0 !== this.networkList && this.networkList.length > 0) {
                    var e = this.networkList.find((function(e) {
                        return !0 === e.redeConectada
                    }
                    ));
                    if (void 0 !== e) {
                        var t = this.networkList.find((function(t) {
                            return t.nomeDeRede === e.nomeDeRede && !1 === t.redeConectada
                        }
                        ));
                        return void 0 === t && (t = this.networkList.find((function(t) {
                            return t.nomeDeRede === e.nomeDeRede && !0 === t.redeConectada
                        }
                        ))),
                        t
                    }
                }
            }
            ,
            t.prototype.getAvaliableNetworks = function() {
                var e = [];
                if (void 0 !== this.networkList && this.networkList.length > 0) {
                    var t = this.networkList.find((function(e) {
                        return !0 === e.redeConectada
                    }
                    ))
                      , i = void 0 !== t ? t.nomeDeRede : "";
                    this.networkList.forEach((function(t) {
                        !1 === t.redeConectada && t.nomeDeRede !== i && e.push(t)
                    }
                    ))
                }
                return e
            }
            ,
            t.prototype.setWifiConfigFormInfo = function(t) {
                e.prototype.setFormValue.call(this, this.ipModuloWifi, t.ip),
                e.prototype.setFormValue.call(this, this.macModuloWifi, t.mac),
                e.prototype.setFormValue.call(this, this.netMask, t.netMask),
                e.prototype.setFormValue.call(this, this.gateway, t.gateway),
                e.prototype.setFormValue.call(this, this.dhcpEnable, t.usaDhcp),
                e.prototype.setFormValue.call(this, this.nomeRede, t.nomeRede),
                e.prototype.setFormValue.call(this, this.wifiEnable, t.wifiHabilitado),
                this.wifiEnableBckup = this.wifiEnable.value,
                this.dhcpEnableBckup = this.dhcpEnable.value,
                this.wifiCommConfig = t
            }
            ,
            t.prototype.onConnectNetwork = function(e) {
                var t = this;
                this.networkConnect = this.modalService.open(ae, {
                    size: "lg",
                    centered: !0
                });
                var i = this.networkList.find((function(t) {
                    return t.nomeDeRede === e
                }
                ));
                this.networkConnect.componentInstance.setWifiConnectForm({
                    nomeDeRede: i.nomeDeRede,
                    senha: "",
                    seguranca: i.padraoSeguranca
                }),
                this.networkConnect.result.then((function() {
                    t.getNewConnectedNetwork()
                }
                ), (function() {}
                ))
            }
            ,
            t.prototype.onReloadNetworks = function() {
                this.networkLoadList(!1)
            }
            ,
            t.prototype.onAddNetwork = function() {
                var e = this;
                this.networkConnect = this.modalService.open(be, {
                    size: "lg",
                    centered: !0
                }),
                this.networkConnect.result.then((function() {
                    e.getNewConnectedNetwork()
                }
                ), (function() {}
                ))
            }
            ,
            t.prototype.onEditClick = function() {
                this.editEnabled = !1,
                this.enableFormFields(),
                this.canceledLoading()
            }
            ,
            t.prototype.onSaveClick = function() {
                var e = this
                  , t = this.modalService.open(A.a);
                t.componentInstance.setMessage("A altera\xe7\xe3o das configura\xe7\xf5es de comunica\xe7\xe3o podem ocasionar a perda de conex\xe3o com o Inner.", " Aviso", !1, !0),
                t.result.then((function(t) {
                    "OK" === t && (e.editEnabled = !0,
                    e.disableFormFields(),
                    e.saveData())
                }
                ), (function() {}
                ))
            }
            ,
            t.prototype.getSignalLvlSubtitles = function(e) {
                return e >= -40 ? "\xd3timo" : e >= -70 ? "Bom" : "Ruim"
            }
            ,
            t.prototype.onCancelClick = function() {
                this.disableFormFields(),
                this.editEnabled = !0,
                this.disableFormFields(),
                this.refreshFormData()
            }
            ,
            t.prototype.onCloseModalClick = function() {
                this.canceledLoading(),
                this.activeModal.dismiss()
            }
            ,
            t.prototype.enableFormFields = function() {
                !0 === this.wifiEnable.value ? (this.wifiEnable.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.macModuloWifi.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.dhcpEnable.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                !0 === this.dhcpEnable.value ? (this.nomeRede.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.ipModuloWifi.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.gateway.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.netMask.disable({
                    onlySelf: !0,
                    emitEvent: !1
                })) : (this.nomeRede.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.ipModuloWifi.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.gateway.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.netMask.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }))) : (this.disableFormFields(),
                this.wifiEnable.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }))
            }
            ,
            t.prototype.disableFormFields = function() {
                this.wifiEnable.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.macModuloWifi.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.ipModuloWifi.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.netMask.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.gateway.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.dhcpEnable.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.nomeRede.disable({
                    onlySelf: !0,
                    emitEvent: !1
                })
            }
            ,
            t.prototype.networkLoadList = function(e) {
                var t = this;
                this.listLoaded = !1,
                this.configWifiService.getConnectedNetwork().subscribe((function(i) {
                    t.networkList.length = 0,
                    "" !== i.nomeDeRede && (t.networkList.push({
                        nomeDeRede: i.nomeDeRede,
                        nivelSinal: i.nivelSinal,
                        padraoSeguranca: i.padraoSeguranca,
                        redeConectada: !0
                    }),
                    t.listLoaded = !0 === e),
                    !1 !== e && "" !== i.nomeDeRede || t.scanNetworkProcess()
                }
                ), (function(e) {
                    e.status || t.connectionErrorService.ShowErrorMessage()
                }
                ))
            }
            ,
            t.prototype.scanNetworkProcess = function() {
                var e = this;
                this.configWifiService.getCmdScanSend().pipe(Object(w.a)(this.canceledLoadingUnsubscribe)).subscribe((function(t) {
                    null === t ? (e.toastr.errorToastr("N\xe3o foi poss\xedvel realizar o scan de redes.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.listLoaded = !0) : (e.totalNetWorks = t.numRedes,
                    e.totalNetWorks > 0 ? e.scannerAvaliableNetworks(0) : e.listLoaded = !0)
                }
                ), (function(t) {
                    void 0 !== t.status && e.connectionErrorService.ShowErrorMessage(),
                    e.toastr.errorToastr("N\xe3o foi poss\xedvel realizar o scan de redes.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.listLoaded = !0
                }
                ))
            }
            ,
            t.prototype.removeConnectedNetwork = function() {
                var e = this
                  , t = this.networkList.find((function(e) {
                    return !0 === e.redeConectada
                }
                ));
                if (void 0 !== t) {
                    var i = t.nomeDeRede;
                    this.networkList.forEach((function(t) {
                        if (t.nomeDeRede === i && !0 === t.redeConectada) {
                            var o = e.networkList.indexOf(t);
                            e.networkList.splice(o, 1)
                        }
                    }
                    ))
                }
            }
            ,
            t.prototype.openWaitModal = function() {
                this.waitModalRef = this.modalService.open(O.a, {
                    backdrop: "static",
                    keyboard: !1,
                    centered: !0
                })
            }
            ,
            t.prototype.closeWaitModal = function() {
                this.waitModalRef && this.waitModalRef.close()
            }
            ,
            t.prototype.scannerAvaliableNetworks = function(e) {
                var t = this;
                Object(E.a)(this.configWifiService.getNetwork(e), this.configWifiService.getScanNetwork()).pipe(Object(w.a)(this.canceledLoadingUnsubscribe), Object(k.a)()).subscribe((function(i) {
                    null !== i && t.networkList.push({
                        nomeDeRede: i.nomeDeRede,
                        nivelSinal: i.nivelSinal,
                        padraoSeguranca: i.padraoSeguranca,
                        redeConectada: !1
                    }),
                    e < t.totalNetWorks - 1 ? t.scannerAvaliableNetworks(++e) : t.listLoaded = !0
                }
                ), (function(e) {
                    t.listLoaded = !0,
                    void 0 !== e.status && t.connectionErrorService.ShowErrorMessage(),
                    t.toastr.errorToastr("N\xe3o foi poss\xedvel realizar o scan de redes.", "", {
                        position: "top-center",
                        animate: "fade"
                    })
                }
                ))
            }
            ,
            t.prototype.scanConnectedNetwork = function() {
                var e = this;
                this.configWifiService.getConnectedNetwork().subscribe((function(t) {
                    "" !== t.nomeDeRede && e.networkList.push({
                        nomeDeRede: t.nomeDeRede,
                        nivelSinal: t.nivelSinal,
                        padraoSeguranca: t.padraoSeguranca,
                        redeConectada: !0
                    })
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage()
                }
                ))
            }
            ,
            t.prototype.getNewConnectedNetwork = function() {
                this.removeConnectedNetwork(),
                this.scanConnectedNetwork(),
                this.refreshFormData()
            }
            ,
            t.prototype.saveData = function() {
                var e = this
                  , t = {
                    tipoRede: 2,
                    ip: this.ipModuloWifi.value,
                    portaInnerServer: this.wifiCommConfig.portaInnerServer,
                    mac: this.macModuloWifi.value,
                    netMask: this.netMask.value,
                    gateway: this.gateway.value,
                    ipServer: this.wifiCommConfig.ipServer,
                    usaDhcp: this.dhcpEnable.value,
                    numeroInner: this.wifiCommConfig.numeroInner,
                    nomeRede: this.nomeRede.value,
                    possuiWifi: this.wifiCommConfig.possuiWifi,
                    wifiHabilitado: this.wifiEnable.value
                }
                  , i = Object(E.a)(this.configService.postCommunicationInfo(t), this.configWifiService.getConnectedStatus(), this.configService.getCommunicationInfo(2)).pipe(Object(k.a)());
                !1 === this.wifiEnable.value && (i = Object(E.a)(this.configService.postCommunicationInfo(t), this.configService.getCommunicationInfo(2)).pipe(Object(k.a)())),
                this.openWaitModal(),
                i.subscribe((function(t) {
                    e.toastr.successToastr("Informa\xe7\xf5es salvas com sucesso.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    !1 === e.wifiEnableBckup && !0 === e.wifiEnable.value && e.networkLoadList(!0),
                    e.setWifiConfigFormInfo(t),
                    !1 === e.wifiEnable.value && (e.networkList.length = 0),
                    e.closeWaitModal()
                }
                ), (function(t) {
                    void 0 === t.status || t.status || e.connectionErrorService.ShowErrorMessage(),
                    "Timeout" === t.message ? (e.refreshFormData(),
                    e.toastr.successToastr("Informa\xe7\xf5es salvas com sucesso.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    !1 === e.wifiEnable.value ? e.networkList.length = 0 : !1 === e.wifiEnableBckup && !0 === e.wifiEnable.value && e.networkLoadList(!0),
                    e.closeWaitModal()) : (e.toastr.errorToastr("Erro ao tentar salvar informa\xe7\xf5es.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.enableFormFields(),
                    e.editEnabled = !1,
                    e.closeWaitModal())
                }
                ))
            }
            ,
            t.prototype.canceledLoading = function() {
                this.canceledLoadingUnsubscribe.next(),
                this.canceledLoadingUnsubscribe.complete(),
                this.canceledLoadingUnsubscribe = new C.a
            }
            ,
            t.prototype.refreshFormData = function() {
                var e = this;
                this.configService.getCommunicationInfo(2).subscribe((function(t) {
                    e.setWifiConfigFormInfo(t)
                }
                ), (function() {}
                ))
            }
            ,
            t.\u0275fac = function(e) {
                return new (e || t)(d.Nb(r.d),d.Nb(_.a),d.Nb(c.a),d.Nb(ee),d.Nb(a.h),d.Nb(a.a),d.Nb(F.a),d.Nb(a.i))
            }
            ,
            t.\u0275cmp = d.Hb({
                type: t,
                selectors: [["app-config-wifi"]],
                features: [d.xb],
                decls: 106,
                vars: 31,
                consts: [[1, "modal-header"], [1, "modal-title"], ["id", "modal", 1, "modal-body"], [3, "formGroup"], [1, "container", "col-md-12"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5"], [1, "control-label"], [1, "col-md-7"], [1, "form-check", "form-check-inline", "col-md-4"], ["formControlName", "wifiEnable", "type", "radio", 1, "form-check-input", 3, "value"], ["for", "wifi-Enable", 1, "form-check-label"], [1, "form-check", "form-check-inline", "col-md-2"], ["formControlName", "dhcpEnable", "type", "radio", 1, "form-check-input", 3, "value"], ["for", "dhcp-Enable", 1, "form-check-label"], [1, "control-label", 3, "ngClass"], ["formControlName", "ipModuloWifi", "type", "text", "mask", "099.099.099.099", "maxlength", "15", 1, "form-control", 3, "dropSpecialCharacters"], ["formControlName", "netMask", "type", "text", "mask", "099.099.099.099", "maxlength", "15", 1, "form-control", 3, "dropSpecialCharacters"], ["formControlName", "gateway", "type", "text", "mask", "099.099.099.099", "maxlength", "15", 1, "form-control", 3, "dropSpecialCharacters"], ["formControlName", "nomeRede", "type", "text", "mask", "C*", 1, "form-control", "text-left", 3, "dropSpecialCharacters", "patterns"], ["formControlName", "macModuloWifi", "type", "text", 1, "form-control", "text-left"], [1, "row", "text-center"], [1, "col"], [1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "fa", "fa-edit"], [1, "fa", "fa-check"], [1, "fa", "fa-undo"], [1, "row-md-12"], [1, "card", "border-light", "mb-2", 2, "max-width", "22rem", "height", "5rem"], [1, "card-header", "pl-2", "pb-0", "text-dark", "bg-light", "border-0"], [1, "card-body", "bg-light", "pb-0", "pt-0"], [1, "text-dark", 2, "list-style-type", "none", "margin", "0", "padding", "0"], [4, "ngIf"], [1, "card", "border-light", "mb-2", 2, "max-width", "22rem", "height", "21rem"], ["class", "card-header pl-2 text-dark bg-light border-0", 4, "ngIf"], [1, "card-body", "bg-light", "pb-0", "pt-0", "overflow-auto"], ["class", "text-secondary", "style", "list-style-type:none; margin:0; padding:0;", 4, "ngIf", "ngIfElse"], ["waitLoadingList", ""], [1, "card-footer", "border-light", "bg-light"], ["type", "button", 1, "btn", "btn-outline-secondary", "text-center", "text-dark", 2, "box-sizing", "border-box", "width", "100%", "font-size", "small", 3, "disabled", "click"], [1, "fas", "fa-search", "fa-fw", "text-left"], [1, "fa", "fa-plus", "fa-fw", "text-left"], [1, "modal-footer"], [1, "text-right"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "col-10"], ["data-toggle", "tooltip", "data-placement", "right", 3, "title"], [1, "fa", "fa-wifi"], [1, "text-dark"], ["class", "col-2", 4, "ngIf"], [1, "col-2"], [1, "fa", "fa-lock"], [1, "card-header", "pl-2", "text-dark", "bg-light", "border-0"], [1, "text-secondary", 2, "list-style-type", "none", "margin", "0", "padding", "0"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-link", "text-secondary", 2, "text-decoration", "none", 3, "disabled", "click"], [1, "text-center", "mt-3", "pt-5", "text-secondary", "h3"], [1, "fa", "fa-spinner", "spin"], [1, "text-center", "text-secondary"]],
                template: function(e, t) {
                    if (1 & e && (d.Sb(0, "div", 0),
                    d.Sb(1, "h4", 1),
                    d.Bc(2, " Configura\xe7\xe3o Rede Wi-Fi "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(3, "div", 2),
                    d.Sb(4, "form", 3),
                    d.Ob(5, "br"),
                    d.Sb(6, "div", 4),
                    d.Sb(7, "div", 5),
                    d.Sb(8, "div", 6),
                    d.Sb(9, "div", 7),
                    d.Sb(10, "div", 8),
                    d.Sb(11, "label", 9),
                    d.Bc(12, "Wi-Fi habilitado:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(13, "div", 10),
                    d.Sb(14, "div", 11),
                    d.Ob(15, "input", 12),
                    d.Sb(16, "label", 13),
                    d.Bc(17, "Sim"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(18, "div", 14),
                    d.Ob(19, "input", 12),
                    d.Sb(20, "label", 13),
                    d.Bc(21, "N\xe3o"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(22, "div", 7),
                    d.Sb(23, "div", 8),
                    d.Sb(24, "label", 9),
                    d.Bc(25, "DHCP habilitado:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(26, "div", 10),
                    d.Sb(27, "div", 11),
                    d.Ob(28, "input", 15),
                    d.Sb(29, "label", 16),
                    d.Bc(30, "Sim"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(31, "div", 14),
                    d.Ob(32, "input", 15),
                    d.Sb(33, "label", 16),
                    d.Bc(34, "N\xe3o"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(35, "div", 7),
                    d.Sb(36, "div", 8),
                    d.Sb(37, "label", 17),
                    d.Bc(38, " IP do M\xf3dulo: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(39, "div", 10),
                    d.Ob(40, "input", 18),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(41, "div", 7),
                    d.Sb(42, "div", 8),
                    d.Sb(43, "label", 17),
                    d.Bc(44, "M\xe1scara de rede:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(45, "div", 10),
                    d.Ob(46, "input", 19),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(47, "div", 7),
                    d.Sb(48, "div", 8),
                    d.Sb(49, "label", 17),
                    d.Bc(50, "Gateway:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(51, "div", 10),
                    d.Ob(52, "input", 20),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(53, "div", 7),
                    d.Sb(54, "div", 8),
                    d.Sb(55, "label", 17),
                    d.Bc(56, "Nome de Rede:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(57, "div", 10),
                    d.Ob(58, "input", 21),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(59, "div", 7),
                    d.Sb(60, "div", 8),
                    d.Sb(61, "label", 9),
                    d.Bc(62, "N\xb0 MAC do M\xf3dulo:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(63, "div", 10),
                    d.Ob(64, "input", 22),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(65, "div", 23),
                    d.Sb(66, "div", 24),
                    d.Sb(67, "div", 25),
                    d.Sb(68, "button", 26),
                    d.ec("click", (function() {
                        return t.onEditClick()
                    }
                    )),
                    d.Ob(69, "em", 27),
                    d.Bc(70, "Editar"),
                    d.Rb(),
                    d.Sb(71, "button", 26),
                    d.ec("click", (function() {
                        return t.onSaveClick()
                    }
                    )),
                    d.Ob(72, "em", 28),
                    d.Bc(73, "Salvar"),
                    d.Rb(),
                    d.Sb(74, "button", 26),
                    d.ec("click", (function() {
                        return t.onCancelClick()
                    }
                    )),
                    d.Ob(75, "em", 29),
                    d.Bc(76, "Cancelar"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(77, "div", 6),
                    d.Sb(78, "div", 30),
                    d.Sb(79, "div", 31),
                    d.Sb(80, "div", 32),
                    d.Bc(81, " Rede Conectada: "),
                    d.Rb(),
                    d.Sb(82, "div", 33),
                    d.Sb(83, "ul", 34),
                    d.zc(84, fe, 9, 3, "div", 35),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(85, "div", 30),
                    d.Sb(86, "div", 36),
                    d.zc(87, pe, 2, 0, "div", 37),
                    d.Sb(88, "div", 38),
                    d.zc(89, ge, 2, 1, "ul", 39),
                    d.zc(90, ve, 5, 0, "ng-template", null, 40, d.Ac),
                    d.Rb(),
                    d.Sb(92, "div", 41),
                    d.Sb(93, "div", 5),
                    d.Sb(94, "div", 6),
                    d.Sb(95, "button", 42),
                    d.ec("click", (function() {
                        return t.onReloadNetworks()
                    }
                    )),
                    d.Ob(96, "i", 43),
                    d.Bc(97, " Buscar Redes "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(98, "div", 6),
                    d.Sb(99, "button", 42),
                    d.ec("click", (function() {
                        return t.onAddNetwork()
                    }
                    )),
                    d.Ob(100, "i", 44),
                    d.Bc(101, " Adicionar "),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(102, "div", 45),
                    d.Sb(103, "div", 46),
                    d.Sb(104, "button", 47),
                    d.ec("click", (function() {
                        return t.onCloseModalClick()
                    }
                    )),
                    d.Bc(105, " Fechar "),
                    d.Rb(),
                    d.Rb(),
                    d.Rb()),
                    2 & e) {
                        var i = d.rc(91);
                        d.Ab(4),
                        d.jc("formGroup", t.configWifiForm),
                        d.Ab(11),
                        d.jc("value", !0),
                        d.Ab(4),
                        d.jc("value", !1),
                        d.Ab(9),
                        d.jc("value", !0),
                        d.Ab(4),
                        d.jc("value", !1),
                        d.Ab(5),
                        d.jc("ngClass", d.nc(23, Se, t.ipModuloWifi.invalid && (t.ipModuloWifi.dirty || t.ipModuloWifi.touched))),
                        d.Ab(3),
                        d.jc("dropSpecialCharacters", !1),
                        d.Ab(3),
                        d.jc("ngClass", d.nc(25, Se, t.netMask.invalid && (t.netMask.dirty || t.netMask.touched))),
                        d.Ab(3),
                        d.jc("dropSpecialCharacters", !1),
                        d.Ab(3),
                        d.jc("ngClass", d.nc(27, Se, t.gateway.invalid && (t.gateway.dirty || t.gateway.touched))),
                        d.Ab(3),
                        d.jc("dropSpecialCharacters", !1),
                        d.Ab(3),
                        d.jc("ngClass", d.nc(29, Se, t.nomeRede.invalid && (t.nomeRede.dirty || t.nomeRede.touched))),
                        d.Ab(3),
                        d.jc("dropSpecialCharacters", !1)("patterns", t.customPatterns),
                        d.Ab(10),
                        d.jc("disabled", !1 === t.editEnabled || !1 === t.listLoaded),
                        d.Ab(3),
                        d.jc("disabled", t.editEnabled || t.configWifiForm.invalid),
                        d.Ab(3),
                        d.jc("disabled", t.editEnabled),
                        d.Ab(10),
                        d.jc("ngIf", void 0 !== t.getConnectedNetwork()),
                        d.Ab(3),
                        d.jc("ngIf", t.listLoaded),
                        d.Ab(2),
                        d.jc("ngIf", t.listLoaded)("ngIfElse", i),
                        d.Ab(6),
                        d.jc("disabled", !1 === t.listLoaded || !1 === t.editEnabled || !1 === t.wifiEnable.value),
                        d.Ab(4),
                        d.jc("disabled", !1 === t.listLoaded || !1 === t.editEnabled || !1 === t.wifiEnable.value)
                    }
                },
                directives: [r.w, r.m, r.f, r.b, r.p, r.l, r.e, o.i, n.a, r.i, o.k, o.j],
                styles: [""]
            }),
            t
        }(Z)
          , Re = function() {
            var e = function(t, i) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                )(t, i)
            };
            return function(t, i) {
                function o() {
                    this.constructor = t
                }
                e(t, i),
                t.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype,
                new o)
            }
        }();
        function Ce(e, t) {
            if (1 & e) {
                var i = d.Tb();
                d.Sb(0, "div", 2),
                d.Sb(1, "div", 5),
                d.Sb(2, "label"),
                d.Bc(3, "Rede Wi-Fi:"),
                d.Rb(),
                d.Rb(),
                d.Sb(4, "div", 7),
                d.Sb(5, "button", 28),
                d.ec("click", (function() {
                    return d.sc(i),
                    d.gc().onWifiConfigClick()
                }
                )),
                d.Ob(6, "i", 29),
                d.Bc(7, " Configurar Wi-Fi "),
                d.Rb(),
                d.Rb(),
                d.Rb()
            }
            if (2 & e) {
                var o = d.gc();
                d.Ab(5),
                d.jc("disabled", o.editEnabled)
            }
        }
        var Ee = function(e) {
            return {
                "text-danger": e
            }
        }
          , ke = function(e) {
            return e[e.REDE_ETHERNET = 1] = "REDE_ETHERNET",
            e[e.REDE_WIFI = 2] = "REDE_WIFI",
            e
        }({})
          , we = function(e) {
            function t(t, i, o, a, n) {
                var c = e.call(this) || this;
                return c.formBuilder = t,
                c.toastr = i,
                c.modalService = o,
                c.configService = a,
                c.connectionErrorService = n,
                c.editEnabled = !0,
                c.wifiConfigButtonPressed = !1,
                c.configCommunicationForm = c.formBuilder.group({
                    ipInner: [, [r.u.required, e.prototype.ipValidator.call(c)]],
                    portInner: [, [r.u.required, r.u.min(1), r.u.max(65535)]],
                    macInner: [],
                    netMask: [, [r.u.required, e.prototype.netMaskValidator.call(c)]],
                    gateway: [, [r.u.required, e.prototype.ipValidator.call(c)]],
                    ipServer: [, [r.u.required, e.prototype.ipValidator.call(c)]],
                    dhcpEnable: [, r.u.required],
                    numeroInner: [, [r.u.required, r.u.min(1), r.u.max(255)]],
                    nomeRede: [, r.u.maxLength(31)],
                    hasWifi: [],
                    wifiEnable: []
                }),
                c
            }
            return Re(t, e),
            Object.defineProperty(t.prototype, "ipInner", {
                get: function() {
                    return this.configCommunicationForm.get("ipInner")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "portInner", {
                get: function() {
                    return this.configCommunicationForm.get("portInner")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "macInner", {
                get: function() {
                    return this.configCommunicationForm.get("macInner")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "netMask", {
                get: function() {
                    return this.configCommunicationForm.get("netMask")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "gateway", {
                get: function() {
                    return this.configCommunicationForm.get("gateway")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "ipServer", {
                get: function() {
                    return this.configCommunicationForm.get("ipServer")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dhcpEnable", {
                get: function() {
                    return this.configCommunicationForm.get("dhcpEnable")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "numeroInner", {
                get: function() {
                    return this.configCommunicationForm.get("numeroInner")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "nomeRede", {
                get: function() {
                    return this.configCommunicationForm.get("nomeRede")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "hasWifi", {
                get: function() {
                    return this.configCommunicationForm.get("hasWifi")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "wifiEnable", {
                get: function() {
                    return this.configCommunicationForm.get("wifiEnable")
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.ngOnInit = function() {
                var e = this;
                this.disableFormFields(),
                this.refreshFormData(),
                this.dhcpEnable.valueChanges.subscribe((function(t) {
                    !0 === t ? (e.nomeRede.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    e.ipInner.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    e.gateway.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    e.netMask.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    })) : (e.nomeRede.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    e.ipInner.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    e.gateway.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    }),
                    e.netMask.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    }))
                }
                ))
            }
            ,
            t.prototype.refreshFormData = function() {
                var e = this;
                this.configService.getCommunicationInfo(ke.REDE_ETHERNET).subscribe((function(t) {
                    e.setFormDataValues(t)
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage()
                }
                ))
            }
            ,
            t.prototype.onWifiConfigClick = function() {
                var t = this;
                this.openWaitModal(),
                !1 === this.wifiConfigButtonPressed && (this.wifiConfigButtonPressed = !0,
                this.configService.getCommunicationInfo(ke.REDE_WIFI).subscribe((function(i) {
                    i.tipoRede === ke.REDE_WIFI && (t.configWifi = t.modalService.open(ye, {
                        size: "lg"
                    }),
                    t.configWifi.componentInstance.setWifiConfigFormInfo(i),
                    t.configWifi.result.then((function(i) {
                        e.prototype.setFormValue.call(t, t.hasWifi, i.possuiWifi),
                        e.prototype.setFormValue.call(t, t.wifiEnable, i.wifiHabilitado),
                        t.wifiConfigButtonPressed = !1
                    }
                    ), (function() {
                        t.wifiConfigButtonPressed = !1
                    }
                    )),
                    t.closeWaitModal())
                }
                ), (function() {
                    t.wifiConfigButtonPressed = !1,
                    t.closeWaitModal()
                }
                )))
            }
            ,
            t.prototype.onEditClick = function() {
                this.editEnabled = !1,
                this.enableFormFields()
            }
            ,
            t.prototype.onSaveClick = function() {
                var e = this
                  , t = this.modalService.open(A.a);
                t.componentInstance.setMessage("A altera\xe7\xe3o das configura\xe7\xf5es de comunica\xe7\xe3o podem ocasionar a perda de conex\xe3o com o Inner.", " Aviso", !1, !0),
                t.result.then((function(t) {
                    "OK" === t && (e.editEnabled = !0,
                    e.configCommunicationForm.disable(),
                    e.saveData())
                }
                ), (function() {}
                ))
            }
            ,
            t.prototype.onCancelClick = function() {
                this.editEnabled = !0,
                this.disableFormFields(),
                this.refreshFormData()
            }
            ,
            t.prototype.enableFormFields = function() {
                this.macInner.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.portInner.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.ipServer.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.dhcpEnable.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.numeroInner.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                !0 === this.dhcpEnable.value ? (this.nomeRede.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.ipInner.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.gateway.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.netMask.disable({
                    onlySelf: !0,
                    emitEvent: !1
                })) : (this.nomeRede.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.ipInner.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.gateway.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.netMask.enable({
                    onlySelf: !0,
                    emitEvent: !1
                }))
            }
            ,
            t.prototype.disableFormFields = function() {
                this.macInner.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.ipInner.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.portInner.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.netMask.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.gateway.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.ipServer.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.dhcpEnable.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.numeroInner.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                this.nomeRede.disable({
                    onlySelf: !0,
                    emitEvent: !1
                })
            }
            ,
            t.prototype.saveData = function() {
                var e = this;
                !0 === this.dhcpEnable.value ? (this.ipInner.setValue(this.accessInfoBkp.ip),
                this.netMask.setValue(this.accessInfoBkp.netMask),
                this.gateway.setValue(this.accessInfoBkp.gateway)) : this.nomeRede.setValue(this.accessInfoBkp.nomeRede);
                var t = {
                    tipoRede: ke.REDE_ETHERNET,
                    mac: this.macInner.value,
                    ip: this.ipInner.value,
                    portaInnerServer: parseInt(this.portInner.value, 10),
                    netMask: this.netMask.value,
                    gateway: this.gateway.value,
                    ipServer: this.ipServer.value,
                    usaDhcp: this.dhcpEnable.value,
                    numeroInner: parseInt(this.numeroInner.value, 10),
                    nomeRede: this.nomeRede.value,
                    possuiWifi: this.hasWifi.value,
                    wifiHabilitado: this.wifiEnable.value
                }
                  , i = Object(E.a)(this.configService.postCommunicationInfo(t), this.configService.getCommunicationInfo(ke.REDE_ETHERNET)).pipe(Object(k.a)());
                t.ip !== this.accessInfoBkp.ip && (i = this.configService.postCommunicationInfo(t)),
                i.subscribe((function(i) {
                    e.toastr.successToastr("Informa\xe7\xf5es salvas com sucesso.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.configCommunicationForm.enable(),
                    e.disableFormFields(),
                    e.editEnabled = !0,
                    t.ip === e.accessInfoBkp.ip && e.setFormDataValues(i)
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.toastr.errorToastr("Erro ao tentar salvar informa\xe7\xf5es.", "", {
                        position: "top-center",
                        animate: "fade"
                    }),
                    e.configCommunicationForm.enable(),
                    e.enableFormFields(),
                    e.editEnabled = !1
                }
                ))
            }
            ,
            t.prototype.setFormDataValues = function(t) {
                this.accessInfoBkp = t,
                e.prototype.setFormValue.call(this, this.ipInner, t.ip),
                e.prototype.setFormValue.call(this, this.portInner, t.portaInnerServer),
                e.prototype.setFormValue.call(this, this.macInner, t.mac),
                e.prototype.setFormValue.call(this, this.netMask, t.netMask),
                e.prototype.setFormValue.call(this, this.gateway, t.gateway),
                e.prototype.setFormValue.call(this, this.ipServer, t.ipServer),
                e.prototype.setFormValue.call(this, this.dhcpEnable, t.usaDhcp),
                e.prototype.setFormValue.call(this, this.numeroInner, t.numeroInner),
                e.prototype.setFormValue.call(this, this.nomeRede, t.nomeRede),
                e.prototype.setFormValue.call(this, this.wifiEnable, t.wifiHabilitado),
                e.prototype.setFormValue.call(this, this.hasWifi, t.possuiWifi)
            }
            ,
            t.prototype.openWaitModal = function() {
                this.waitModalRef = this.modalService.open(O.a, {
                    backdrop: "static",
                    keyboard: !1,
                    centered: !0
                })
            }
            ,
            t.prototype.closeWaitModal = function() {
                this.waitModalRef && this.waitModalRef.close()
            }
            ,
            t.\u0275fac = function(e) {
                return new (e || t)(d.Nb(r.d),d.Nb(F.a),d.Nb(a.h),d.Nb(_.a),d.Nb(c.a))
            }
            ,
            t.\u0275cmp = d.Hb({
                type: t,
                selectors: [["app-config-communication"]],
                features: [d.xb],
                decls: 80,
                vars: 32,
                consts: [[3, "formGroup"], [1, "container", "col-md-12", "col-sm-12"], [1, "row"], [1, "col-md-6", "text-left"], [1, "form-group", "row"], [1, "col-md-5"], [1, "control-label", 3, "ngClass"], [1, "col-md-7"], ["formControlName", "numeroInner", "type", "text", "mask", "999", 1, "form-control", "text-left"], ["formControlName", "ipServer", "type", "text", "mask", "099.099.099.099", "maxlength", "15", 1, "form-control", 3, "dropSpecialCharacters"], ["formControlName", "portInner", "type", "text", "mask", "99999", 1, "form-control", "text-left"], [1, "control-label"], ["formControlName", "macInner", "type", "text", 1, "form-control", "text-left"], ["class", "row", 4, "ngIf"], [1, "form-check", "form-check-inline", "col-md-2"], ["formControlName", "dhcpEnable", "type", "radio", "id", "inlineRadio1", 1, "form-check-input", 3, "value"], ["for", "inlineRadio1", 1, "form-check-label"], ["formControlName", "dhcpEnable", "type", "radio", "id", "inlineRadio2", 1, "form-check-input", 3, "value"], ["for", "inlineRadio2", 1, "form-check-label"], ["formControlName", "ipInner", "type", "text", "mask", "099.099.099.099", "maxlength", "15", 1, "form-control", 3, "dropSpecialCharacters"], ["formControlName", "netMask", "type", "text", "mask", "099.099.099.099", "maxlength", "15", 1, "form-control", 3, "dropSpecialCharacters"], ["formControlName", "gateway", "type", "text", "mask", "099.099.099.099", "maxlength", "15", 1, "form-control", 3, "dropSpecialCharacters"], ["formControlName", "nomeRede", "type", "text", 1, "form-control", "text-left"], [1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "fa", "fa-edit"], [1, "fa", "fa-check"], [1, "fa", "fa-undo"], ["type", "button", 1, "btn", "btn-default", "text-center", "text-primary", 2, "box-sizing", "border-box", "width", "100%", 3, "disabled", "click"], [1, "fas", "fa-wifi", "fa-fw"]],
                template: function(e, t) {
                    1 & e && (d.Sb(0, "form", 0),
                    d.Ob(1, "br"),
                    d.Sb(2, "div", 1),
                    d.Sb(3, "div", 2),
                    d.Sb(4, "div", 3),
                    d.Sb(5, "div", 4),
                    d.Sb(6, "div", 5),
                    d.Sb(7, "label", 6),
                    d.Bc(8, " N\xfamero do Inner: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(9, "div", 7),
                    d.Ob(10, "input", 8),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(11, "div", 4),
                    d.Sb(12, "div", 5),
                    d.Sb(13, "label", 6),
                    d.Bc(14, "IP do servidor:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(15, "div", 7),
                    d.Ob(16, "input", 9),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(17, "div", 4),
                    d.Sb(18, "div", 5),
                    d.Sb(19, "label", 6),
                    d.Bc(20, "Porta:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(21, "div", 7),
                    d.Ob(22, "input", 10),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(23, "div", 4),
                    d.Sb(24, "div", 5),
                    d.Sb(25, "label", 11),
                    d.Bc(26, "N\xb0 MAC do Inner:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(27, "div", 7),
                    d.Ob(28, "input", 12),
                    d.Rb(),
                    d.Rb(),
                    d.zc(29, Ce, 8, 1, "div", 13),
                    d.Rb(),
                    d.Sb(30, "div", 3),
                    d.Sb(31, "div", 4),
                    d.Sb(32, "div", 5),
                    d.Sb(33, "label", 11),
                    d.Bc(34, "DHCP habilitado:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(35, "div", 7),
                    d.Sb(36, "div", 14),
                    d.Ob(37, "input", 15),
                    d.Sb(38, "label", 16),
                    d.Bc(39, "Sim"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(40, "div", 14),
                    d.Ob(41, "input", 17),
                    d.Sb(42, "label", 18),
                    d.Bc(43, "N\xe3o"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(44, "div", 4),
                    d.Sb(45, "div", 5),
                    d.Sb(46, "label", 6),
                    d.Bc(47, " IP do Inner: "),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(48, "div", 7),
                    d.Ob(49, "input", 19),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(50, "div", 4),
                    d.Sb(51, "div", 5),
                    d.Sb(52, "label", 6),
                    d.Bc(53, "M\xe1scara de rede:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(54, "div", 7),
                    d.Ob(55, "input", 20),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(56, "div", 4),
                    d.Sb(57, "div", 5),
                    d.Sb(58, "label", 6),
                    d.Bc(59, "Gateway:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(60, "div", 7),
                    d.Ob(61, "input", 21),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(62, "div", 4),
                    d.Sb(63, "div", 5),
                    d.Sb(64, "label", 6),
                    d.Bc(65, "Nome de Rede:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(66, "div", 7),
                    d.Ob(67, "input", 22),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(68, "br"),
                    d.Sb(69, "div", 23),
                    d.Sb(70, "button", 24),
                    d.ec("click", (function() {
                        return t.onEditClick()
                    }
                    )),
                    d.Ob(71, "em", 25),
                    d.Bc(72, "Editar"),
                    d.Rb(),
                    d.Sb(73, "button", 24),
                    d.ec("click", (function() {
                        return t.onSaveClick()
                    }
                    )),
                    d.Ob(74, "em", 26),
                    d.Bc(75, "Salvar"),
                    d.Rb(),
                    d.Sb(76, "button", 24),
                    d.ec("click", (function() {
                        return t.onCancelClick()
                    }
                    )),
                    d.Ob(77, "em", 27),
                    d.Bc(78, "Cancelar"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(79, "br"),
                    d.Rb()),
                    2 & e && (d.jc("formGroup", t.configCommunicationForm),
                    d.Ab(7),
                    d.jc("ngClass", d.nc(18, Ee, t.numeroInner.invalid && (t.numeroInner.dirty || t.numeroInner.touched))),
                    d.Ab(6),
                    d.jc("ngClass", d.nc(20, Ee, t.ipServer.invalid && (t.ipServer.dirty || t.ipServer.touched))),
                    d.Ab(3),
                    d.jc("dropSpecialCharacters", !1),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(22, Ee, t.portInner.invalid && (t.portInner.dirty || t.portInner.touched))),
                    d.Ab(10),
                    d.jc("ngIf", !0 === t.hasWifi.value),
                    d.Ab(8),
                    d.jc("value", !0),
                    d.Ab(4),
                    d.jc("value", !1),
                    d.Ab(5),
                    d.jc("ngClass", d.nc(24, Ee, t.ipInner.invalid && (t.ipInner.dirty || t.ipInner.touched))),
                    d.Ab(3),
                    d.jc("dropSpecialCharacters", !1),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(26, Ee, t.netMask.invalid && (t.netMask.dirty || t.netMask.touched))),
                    d.Ab(3),
                    d.jc("dropSpecialCharacters", !1),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(28, Ee, t.gateway.invalid && (t.gateway.dirty || t.gateway.touched))),
                    d.Ab(3),
                    d.jc("dropSpecialCharacters", !1),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(30, Ee, t.nomeRede.invalid && (t.nomeRede.dirty || t.nomeRede.touched))),
                    d.Ab(6),
                    d.jc("disabled", !t.editEnabled),
                    d.Ab(3),
                    d.jc("disabled", t.editEnabled || t.configCommunicationForm.invalid),
                    d.Ab(3),
                    d.jc("disabled", t.editEnabled))
                },
                directives: [r.w, r.m, r.f, o.i, r.b, n.a, r.l, r.e, r.i, o.k, r.p],
                encapsulation: 2
            }),
            t
        }(Z);
        function Ae(e, t) {
            if (1 & e) {
                var i = d.Tb();
                d.Sb(0, "div", 4),
                d.Sb(1, "label", 13),
                d.Bc(2, "Biometrias do Master:"),
                d.Rb(),
                d.Sb(3, "div", 20),
                d.Ob(4, "input", 21),
                d.Sb(5, "button", 22),
                d.ec("click", (function() {
                    return d.sc(i),
                    d.gc().onDeleteBiometry()
                }
                )),
                d.Ob(6, "i", 23),
                d.Rb(),
                d.Rb(),
                d.Sb(7, "div", 16),
                d.Sb(8, "button", 17),
                d.ec("click", (function() {
                    return d.sc(i),
                    d.gc().onRegisterBiometry()
                }
                )),
                d.Bc(9, " Cadastrar Biometria via Leitor "),
                d.Rb(),
                d.Rb(),
                d.Rb()
            }
            if (2 & e) {
                var o = d.gc();
                d.Ab(5),
                d.jc("disabled", !o.biometrias.value),
                d.Ab(3),
                d.jc("disabled", o.biometrias.value >= 2)
            }
        }
        var Oe = function() {
            function e(e, t, i, o, r, a) {
                this.formBuilder = e,
                this.toastr = t,
                this.modalService = i,
                this.configMasterService = o,
                this.configService = r,
                this.connectionErrorService = a,
                this.configMasterForm = this.formBuilder.group({
                    masterReleasesAccess: [],
                    masterCardNumber: [],
                    biometrias: []
                }),
                this.inProcess = !1,
                this.hasBiometry = !1
            }
            return Object.defineProperty(e.prototype, "masterReleasesAccess", {
                get: function() {
                    return this.configMasterForm.get("masterReleasesAccess")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "masterCardNumber", {
                get: function() {
                    return this.configMasterForm.get("masterCardNumber")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "biometrias", {
                get: function() {
                    return this.configMasterForm.get("biometrias")
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.ngOnInit = function() {
                var e = this;
                this.hasBiometry = JSON.parse(sessionStorage.getItem("hasBiometry")),
                this.refreshFormData(),
                this.masterReleasesAccess.valueChanges.subscribe((function(t) {
                    e.saveMasterConfiguration(t)
                }
                ))
            }
            ,
            e.prototype.refreshFormData = function() {
                var e = this;
                this.inProcess = !0,
                this.configMasterService.getMasterInfo().subscribe((function(t) {
                    e.masterReleasesAccess.setValue(t.masterPermiteCadastro),
                    e.masterCardNumber.setValue(t.numCartaoMaster),
                    e.biometrias.setValue(t.quantidadeBiometrias),
                    e.masterReleasesAccessBkp = t.masterPermiteCadastro,
                    e.cartaoBkp = t.numCartaoMaster,
                    e.biometriasBkp = t.quantidadeBiometrias,
                    e.inProcess = !1
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.inProcess = !1
                }
                ))
            }
            ,
            e.prototype.saveMasterConfiguration = function(e) {
                var t = this;
                null != this.masterReleasesAccessBkp && e !== this.masterReleasesAccessBkp && (this.inProcess = !0,
                this.configMasterService.postMasterReleasesAccess(e).subscribe((function() {
                    t.masterReleasesAccessBkp = e,
                    t.showToastSuccess("Informa\xe7\xf5es salvas com sucesso.")
                }
                ), (function(e) {
                    e.status || t.connectionErrorService.ShowErrorMessage(),
                    t.masterReleasesAccess.setValue(t.masterReleasesAccessBkp),
                    t.showToastError("Erro ao tentar salvar informa\xe7\xf5es.")
                }
                )).add((function() {
                    return t.inProcess = !1
                }
                )))
            }
            ,
            e.prototype.onRegisterCardClick = function(e) {
                var t = this;
                void 0 === e && (e = !1);
                var i = this.modalService.open(A.a);
                i.componentInstance.setMessage(!0 === this.hasBiometry ? "Ao alterar o n\xfamero do cart\xe3o Master, dados de biometria associados ao cart\xe3o anterior ser\xe3o perdidos. Deseja continuar?" : "Ao alterar o n\xfamero do cart\xe3o Master, dados associados ao cart\xe3o anterior ser\xe3o perdidos. Deseja continuar?", "Aviso", !0, !0),
                i.result.then((function(i) {
                    "OK" === i && (e ? t.registerCardByInner() : t.registerCard())
                }
                ), (function() {}
                ))
            }
            ,
            e.prototype.registerCardByInner = function() {
                var e = this;
                this.inProcess = !0,
                Object(E.a)(this.configMasterService.deleteBio(this.cartaoBkp), this.configMasterService.getReadCard(), this.configMasterService.getCardRegisterStatus()).pipe(Object(k.a)()).subscribe((function(t) {
                    2 === t.statusCadastro ? e.postMasterCardNumber(t) : e.showToastError(6 === t.statusCadastro ? "Erro no processo de cadastro de cart\xe3o. Master j\xe1 cadastrado." : 14 === t.statusCadastro ? "Erro no processo de cadastro. Terminal indispon\xedvel." : "Erro no processo de cadastro de cart\xe3o.")
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.showToastError("Erro ao cadastrar cart\xe3o.")
                }
                )).add((function() {
                    e.inProcess = !1,
                    e.refreshFormData()
                }
                ))
            }
            ,
            e.prototype.registerCard = function() {
                var e = this
                  , t = this.masterCardNumber.value;
                this.inProcess = !0,
                Object(E.a)(this.configMasterService.deleteBio(this.cartaoBkp), this.configMasterService.postMasterCardNumber(t)).pipe(Object(k.a)()).subscribe((function() {
                    e.showToastSuccess("Cart\xe3o cadastrado com sucesso.")
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.showToastError("Erro no processo de cadastro de cart\xe3o.")
                }
                )).add((function() {
                    e.inProcess = !1,
                    e.refreshFormData()
                }
                ))
            }
            ,
            e.prototype.postMasterCardNumber = function(e) {
                var t = this;
                this.configMasterService.postMasterCardNumber(e.cartao).subscribe((function() {
                    t.showToastSuccess("Cadastro realizado com sucesso."),
                    t.refreshFormData()
                }
                ), (function(e) {
                    e.status || t.connectionErrorService.ShowErrorMessage(),
                    t.showToastError("Erro no processo de cadastro de cart\xe3o.")
                }
                ))
            }
            ,
            e.prototype.onDeleteBiometry = function() {
                var e = this
                  , t = this.modalService.open(A.a);
                t.componentInstance.setMessage("As biometrias associadas ao master ser\xe3o exclu\xeddas. Deseja continuar?", "Excluir", !0),
                t.result.then((function(t) {
                    "OK" === t && e.deleteBio()
                }
                ), (function() {}
                ))
            }
            ,
            e.prototype.deleteBio = function() {
                var e = this
                  , t = this.masterCardNumber.value
                  , i = Object(E.a)(this.configMasterService.deleteBio(t), this.configMasterService.getMasterInfo()).pipe(Object(k.a)());
                this.inProcess = !0,
                i.pipe(Object(h.a)(3e3)).subscribe((function(t) {
                    e.showToastSuccess("Biometria(s) exclu\xedda(s) com sucesso."),
                    e.biometrias.setValue(t.quantidadeBiometrias),
                    e.inProcess = !1
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.showToastError("Erro ao excluir biometria(s)."),
                    e.inProcess = !1
                }
                ))
            }
            ,
            e.prototype.onRegisterBiometry = function() {
                var e = this;
                this.inProcess = !0;
                var t = this.biometrias.value;
                Object(E.a)(this.configMasterService.registerBio(this.cartaoBkp, t), this.configMasterService.getBioRegisterStatus(this.cartaoBkp)).pipe(Object(k.a)()).subscribe((function(t) {
                    e.showBioRegisterResultMessage(t)
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.showToastError("Erro ao tentar cadastrar biometria.")
                }
                )).add((function() {
                    e.inProcess = !1
                }
                ))
            }
            ,
            e.prototype.showBioRegisterResultMessage = function(e) {
                1 === e.status ? (this.refreshFormData(),
                this.showToastSuccess("Cadastro realizado com sucesso.")) : this.showToastError(4 === e.status ? "Erro no processo de cadastro de biometria. Dedo j\xe1 cadastrado" : 6 === e.status ? "Erro no processo de cadastro de biometria. Mem\xf3ria do m\xf3dulo biom\xe9trico cheia." : 10 === e.status ? "Erro no processo de cadastro. Terminal indispon\xedvel." : "Erro no processo de cadastro de biometria.")
            }
            ,
            e.prototype.showToastSuccess = function(e) {
                this.toastr.successToastr(e, "", {
                    position: "top-center",
                    animate: "fade"
                })
            }
            ,
            e.prototype.showToastError = function(e) {
                this.toastr.errorToastr(e, "", {
                    position: "top-center",
                    animate: "fade"
                })
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.Nb(r.d),d.Nb(F.a),d.Nb(a.h),d.Nb(y),d.Nb(_.a),d.Nb(c.a))
            }
            ,
            e.\u0275cmp = d.Hb({
                type: e,
                selectors: [["app-config-master"]],
                decls: 29,
                vars: 6,
                consts: [[3, "formGroup"], [1, "container", 3, "disabled"], [1, "row", "text-left"], [1, "col-md-12"], [1, "form-group", "row"], [1, "col-md-3"], [1, "form-label"], [1, "col-md-9"], [1, "form-check", "form-check-inline", "col-md-2"], ["formControlName", "masterReleasesAccess", "type", "radio", "id", "inlineRadio1", 1, "form-check-input", 3, "value"], ["for", "inlineRadio1", 1, "form-check-label"], ["formControlName", "masterReleasesAccess", "type", "radio", "id", "inlineRadio2", 1, "form-check-input", 3, "value"], ["for", "inlineRadio2", 1, "form-check-label"], [1, "col-lg-3"], ["for", "master-number", 1, "control-label"], ["formControlName", "masterCardNumber", "type", "text", "mask", "9*", "id", "master-number", "maxlength", "14", "required", "", 1, "form-control", "text-left"], [1, "col-lg-6"], ["type", "button", 1, "btn", "btn-default", "text-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-default", "text-primary", "ml-sm-4", 3, "click"], ["class", "form-group row", 4, "ngIf"], [1, "input-group", "col-lg-3"], ["type", "text", "mask", "9", "formControlName", "biometrias", "readonly", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "fa", "fa-trash-alt"]],
                template: function(e, t) {
                    1 & e && (d.Sb(0, "form", 0),
                    d.Sb(1, "fieldset", 1),
                    d.Sb(2, "div", 2),
                    d.Sb(3, "div", 3),
                    d.Sb(4, "div", 4),
                    d.Sb(5, "div", 5),
                    d.Sb(6, "label", 6),
                    d.Bc(7, "Master para cadastro:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(8, "div", 7),
                    d.Sb(9, "div", 8),
                    d.Ob(10, "input", 9),
                    d.Sb(11, "label", 10),
                    d.Bc(12, "Sim"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(13, "div", 8),
                    d.Ob(14, "input", 11),
                    d.Sb(15, "label", 12),
                    d.Bc(16, "N\xe3o"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(17, "div", 4),
                    d.Sb(18, "div", 13),
                    d.Sb(19, "label", 14),
                    d.Bc(20, "N\xfamero do Master:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(21, "div", 13),
                    d.Ob(22, "input", 15),
                    d.Rb(),
                    d.Sb(23, "div", 16),
                    d.Sb(24, "button", 17),
                    d.ec("click", (function() {
                        return t.onRegisterCardClick()
                    }
                    )),
                    d.Bc(25, " Cadastrar "),
                    d.Rb(),
                    d.Sb(26, "button", 18),
                    d.ec("click", (function() {
                        return t.onRegisterCardClick(!0)
                    }
                    )),
                    d.Bc(27, " Cadastrar Cart\xe3o via Leitor "),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.zc(28, Ae, 10, 2, "div", 19),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb()),
                    2 & e && (d.jc("formGroup", t.configMasterForm),
                    d.Ab(1),
                    d.jc("disabled", t.inProcess),
                    d.Ab(9),
                    d.jc("value", !0),
                    d.Ab(4),
                    d.jc("value", !1),
                    d.Ab(10),
                    d.jc("disabled", t.masterCardNumber.invalid),
                    d.Ab(4),
                    d.jc("ngIf", t.hasBiometry))
                },
                directives: [r.w, r.m, r.f, r.b, r.p, r.l, r.e, n.a, r.i, r.r, o.k],
                encapsulation: 2
            }),
            e
        }();
        function Fe(e, t) {
            if (1 & e && (d.Sb(0, "option", 21),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        function De(e, t) {
            if (1 & e && (d.Sb(0, "option", 21),
            d.Bc(1),
            d.Rb()),
            2 & e) {
                var i = t.$implicit;
                d.jc("ngValue", i.value),
                d.Ab(1),
                d.Dc(" ", i.description, " ")
            }
        }
        var Ne = function(e) {
            return {
                "text-danger": e
            }
        };
        function Ie(e, t) {
            if (1 & e && (d.Sb(0, "div", 4),
            d.Sb(1, "div", 5),
            d.Sb(2, "label", 11),
            d.Bc(3, "Sensor de Porta Aberta:"),
            d.Rb(),
            d.Rb(),
            d.Sb(4, "div", 7),
            d.Sb(5, "select", 22),
            d.zc(6, De, 2, 2, "option", 9),
            d.Rb(),
            d.Rb(),
            d.Rb()),
            2 & e) {
                var i = d.gc();
                d.Ab(2),
                d.jc("ngClass", d.nc(2, Ne, i.avisoPortaAberta.invalid && (i.avisoPortaAberta.dirty || i.avisoPortaAberta.touched))),
                d.Ab(4),
                d.jc("ngForOf", i.sensorOptions)
            }
        }
        function je(e, t) {
            if (1 & e && (d.Sb(0, "div", 4),
            d.Sb(1, "div", 5),
            d.Sb(2, "label", 23),
            d.Bc(3, "Tempo Para Aviso de Porta Aberta:"),
            d.Rb(),
            d.Rb(),
            d.Sb(4, "div", 7),
            d.Ob(5, "input", 24),
            d.Rb(),
            d.Rb()),
            2 & e) {
                var i = d.gc();
                d.Ab(2),
                d.jc("ngClass", d.nc(1, Ne, i.tempoPortaAberta.invalid && (i.tempoPortaAberta.dirty || i.tempoPortaAberta.touched)))
            }
        }
        function Be(e, t) {
            if (1 & e && (d.Sb(0, "div", 4),
            d.Sb(1, "div", 5),
            d.Sb(2, "label", 11),
            d.Bc(3, "Registra Falha na Verifica\xe7\xe3o Biom\xe9trica:"),
            d.Rb(),
            d.Rb(),
            d.Sb(4, "div", 7),
            d.Sb(5, "div", 12),
            d.Ob(6, "input", 25),
            d.Sb(7, "label", 14),
            d.Bc(8, "Sim"),
            d.Rb(),
            d.Rb(),
            d.Sb(9, "div", 12),
            d.Ob(10, "input", 25),
            d.Sb(11, "label", 14),
            d.Bc(12, "N\xe3o"),
            d.Rb(),
            d.Rb(),
            d.Rb(),
            d.Rb()),
            2 & e) {
                var i = d.gc();
                d.Ab(2),
                d.jc("ngClass", d.nc(3, Ne, i.regFalhaVerificacaoBio.invalid && (i.regFalhaVerificacaoBio.dirty || i.regFalhaVerificacaoBio.touched))),
                d.Ab(4),
                d.jc("value", !0),
                d.Ab(4),
                d.jc("value", !1)
            }
        }
        var Te = function(e) {
            return e[e.DEFAULT = 2] = "DEFAULT",
            e[e.HIGH_TURNSTILE = 8] = "HIGH_TURNSTILE",
            e
        }({})
          , Me = function() {
            function e(e, t, i, o) {
                this.formBuilder = e,
                this.toastr = t,
                this.configService = i,
                this.connectionErrorService = o,
                this.editEnabled = !0,
                this.defaultEquipamentValue = Te.DEFAULT,
                this.hasBiometry = !1,
                this.equipament = Te.DEFAULT,
                this.listTypes = [{
                    description: "DESABILITADO",
                    value: 0
                }, {
                    description: "CART\xc3O N\xc3O CADASTRADO N\xc3O PODE PASSAR",
                    value: 1
                }, {
                    description: "CART\xc3O N\xc3O CADASTRADO PODE PASSAR",
                    value: 2
                }],
                this.sensorOptions = [{
                    description: "DESABILITADO",
                    value: 0
                }, {
                    description: "NORMALMENTE ABERTO",
                    value: 1
                }, {
                    description: "NORMALMENTE FECHADO",
                    value: 2
                }],
                this.configSecurityForm = this.formBuilder.group({
                    listType: [, r.u.required],
                    tamper: [, r.u.required],
                    avisoPortaAberta: [, r.u.required],
                    tempoPortaAberta: [, [r.u.required, r.u.min(1), r.u.max(255)]],
                    regAcessoNegado: [, r.u.required],
                    regFalhaVerificacaoBio: [, r.u.required]
                })
            }
            return Object.defineProperty(e.prototype, "listType", {
                get: function() {
                    return this.configSecurityForm.get("listType")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "tamper", {
                get: function() {
                    return this.configSecurityForm.get("tamper")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "avisoPortaAberta", {
                get: function() {
                    return this.configSecurityForm.get("avisoPortaAberta")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "tempoPortaAberta", {
                get: function() {
                    return this.configSecurityForm.get("tempoPortaAberta")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "regAcessoNegado", {
                get: function() {
                    return this.configSecurityForm.get("regAcessoNegado")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "regFalhaVerificacaoBio", {
                get: function() {
                    return this.configSecurityForm.get("regFalhaVerificacaoBio")
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.ngOnInit = function() {
                this.disableFormFields(),
                this.equipament = JSON.parse(sessionStorage.getItem("equipamento")),
                this.hasBiometry = JSON.parse(sessionStorage.getItem("hasBiometry")),
                this.refreshFormData()
            }
            ,
            e.prototype.refreshFormData = function() {
                var e = this;
                this.configService.getSecurityInfo().subscribe((function(t) {
                    e.listType.setValue(t.tipoLista),
                    e.tamper.setValue(t.tamper),
                    e.avisoPortaAberta.setValue(t.avisoPortaAberta),
                    e.tempoPortaAberta.setValue(0 === t.tempoPortaAberta ? 1 : t.tempoPortaAberta),
                    e.regAcessoNegado.setValue(t.registraAcessoNegado),
                    e.regFalhaVerificacaoBio.setValue(t.registraFalhaVerfiBio)
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage()
                }
                ))
            }
            ,
            e.prototype.onEditClick = function() {
                this.editEnabled = !1,
                this.enableFormFields()
            }
            ,
            e.prototype.onSaveClick = function() {
                this.editEnabled = !0,
                this.configSecurityForm.disable(),
                this.saveData()
            }
            ,
            e.prototype.onCancelClick = function() {
                this.editEnabled = !0,
                this.disableFormFields(),
                this.refreshFormData()
            }
            ,
            e.prototype.enableFormFields = function() {
                this.listType.enable(),
                this.tamper.enable(),
                this.avisoPortaAberta.enable(),
                this.tempoPortaAberta.enable(),
                this.regAcessoNegado.enable(),
                this.regFalhaVerificacaoBio.enable()
            }
            ,
            e.prototype.disableFormFields = function() {
                this.listType.disable(),
                this.tamper.disable(),
                this.avisoPortaAberta.disable(),
                this.tempoPortaAberta.disable(),
                this.regAcessoNegado.disable(),
                this.regFalhaVerificacaoBio.disable()
            }
            ,
            e.prototype.saveData = function() {
                var e = this
                  , t = {
                    tipoLista: this.listType.value,
                    tamper: this.tamper.value,
                    avisoPortaAberta: this.avisoPortaAberta.value,
                    tempoPortaAberta: parseInt(this.tempoPortaAberta.value, 10),
                    registraAcessoNegado: this.regAcessoNegado.value,
                    registraFalhaVerfiBio: this.regFalhaVerificacaoBio.value
                };
                Object(E.a)(this.configService.postSecurityInfo(t), this.configService.getSecurityInfo()).pipe(Object(k.a)()).subscribe((function(t) {
                    e.showToastSuccess("Informa\xe7\xf5es salvas com sucesso."),
                    e.configSecurityForm.enable(),
                    e.disableFormFields(),
                    e.editEnabled = !0,
                    e.listType.setValue(t.tipoLista),
                    e.tamper.setValue(t.tamper),
                    e.avisoPortaAberta.setValue(t.avisoPortaAberta),
                    e.tempoPortaAberta.setValue(0 === t.tempoPortaAberta ? 1 : t.tempoPortaAberta),
                    e.regAcessoNegado.setValue(t.registraAcessoNegado),
                    e.regFalhaVerificacaoBio.setValue(t.registraFalhaVerfiBio)
                }
                ), (function(t) {
                    t.status || e.connectionErrorService.ShowErrorMessage(),
                    e.showToastError("Erro ao tentar salvar informa\xe7\xf5es."),
                    e.configSecurityForm.enable(),
                    e.enableFormFields(),
                    e.editEnabled = !1
                }
                ))
            }
            ,
            e.prototype.showToastSuccess = function(e) {
                this.toastr.successToastr(e, "", {
                    position: "top-center",
                    animate: "fade"
                })
            }
            ,
            e.prototype.showToastError = function(e) {
                this.toastr.errorToastr(e, "", {
                    position: "top-center",
                    animate: "fade"
                })
            }
            ,
            e.\u0275fac = function(t) {
                return new (t || e)(d.Nb(r.d),d.Nb(F.a),d.Nb(_.a),d.Nb(c.a))
            }
            ,
            e.\u0275cmp = d.Hb({
                type: e,
                selectors: [["app-config-security"]],
                decls: 52,
                vars: 21,
                consts: [[3, "formGroup"], [1, "container", "col-md-12"], [1, "row"], [1, "col-md-12", "text-left"], [1, "form-group", "row"], [1, "col-md-3"], ["for", "access-control", 1, "control-label", 3, "ngClass"], [1, "col-md-8"], ["formControlName", "listType", "id", "access-control", 1, "input-large", "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "form-group row", 4, "ngIf"], [1, "form-label", 3, "ngClass"], [1, "form-check", "form-check-inline", "col-md-2"], ["formControlName", "regAcessoNegado", "type", "radio", 1, "form-check-input", 3, "value"], [1, "form-check-label"], ["formControlName", "tamper", "type", "radio", 1, "form-check-input", 3, "value"], [1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "fa", "fa-edit"], [1, "fa", "fa-check"], [1, "fa", "fa-undo"], [3, "ngValue"], ["formControlName", "avisoPortaAberta", "id", "access-control", 1, "input-large", "form-control"], ["for", "master-number", 1, "control-label", 3, "ngClass"], ["formControlName", "tempoPortaAberta", "type", "text", "mask", "099", 1, "form-control", "text-left"], ["formControlName", "regFalhaVerificacaoBio", "type", "radio", 1, "form-check-input", 3, "value"]],
                template: function(e, t) {
                    1 & e && (d.Sb(0, "form", 0),
                    d.Sb(1, "div", 1),
                    d.Sb(2, "div", 2),
                    d.Sb(3, "div", 3),
                    d.Sb(4, "div", 4),
                    d.Sb(5, "div", 5),
                    d.Sb(6, "label", 6),
                    d.Bc(7, "Controle de acesso:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(8, "div", 7),
                    d.Sb(9, "select", 8),
                    d.zc(10, Fe, 2, 2, "option", 9),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.zc(11, Ie, 7, 4, "div", 10),
                    d.zc(12, je, 6, 3, "div", 10),
                    d.Sb(13, "div", 4),
                    d.Sb(14, "div", 5),
                    d.Sb(15, "label", 11),
                    d.Bc(16, "Registra Acesso Negado:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(17, "div", 7),
                    d.Sb(18, "div", 12),
                    d.Ob(19, "input", 13),
                    d.Sb(20, "label", 14),
                    d.Bc(21, "Sim"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(22, "div", 12),
                    d.Ob(23, "input", 13),
                    d.Sb(24, "label", 14),
                    d.Bc(25, "N\xe3o"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.zc(26, Be, 13, 5, "div", 10),
                    d.Sb(27, "div", 4),
                    d.Sb(28, "div", 5),
                    d.Sb(29, "label", 11),
                    d.Bc(30, "Habilita Sensor de Viola\xe7\xe3o:"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(31, "div", 7),
                    d.Sb(32, "div", 12),
                    d.Ob(33, "input", 15),
                    d.Sb(34, "label", 14),
                    d.Bc(35, "Sim"),
                    d.Rb(),
                    d.Rb(),
                    d.Sb(36, "div", 12),
                    d.Ob(37, "input", 15),
                    d.Sb(38, "label", 14),
                    d.Bc(39, "N\xe3o"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(40, "br"),
                    d.Sb(41, "div", 16),
                    d.Sb(42, "button", 17),
                    d.ec("click", (function() {
                        return t.onEditClick()
                    }
                    )),
                    d.Ob(43, "em", 18),
                    d.Bc(44, "Editar"),
                    d.Rb(),
                    d.Sb(45, "button", 17),
                    d.ec("click", (function() {
                        return t.onSaveClick()
                    }
                    )),
                    d.Ob(46, "em", 19),
                    d.Bc(47, "Salvar"),
                    d.Rb(),
                    d.Sb(48, "button", 17),
                    d.ec("click", (function() {
                        return t.onCancelClick()
                    }
                    )),
                    d.Ob(49, "em", 20),
                    d.Bc(50, "Cancelar"),
                    d.Rb(),
                    d.Rb(),
                    d.Rb(),
                    d.Ob(51, "br"),
                    d.Rb()),
                    2 & e && (d.jc("formGroup", t.configSecurityForm),
                    d.Ab(6),
                    d.jc("ngClass", d.nc(15, Ne, t.listType.invalid && (t.listType.dirty || t.listType.touched))),
                    d.Ab(4),
                    d.jc("ngForOf", t.listTypes),
                    d.Ab(1),
                    d.jc("ngIf", t.equipament === t.defaultEquipamentValue),
                    d.Ab(1),
                    d.jc("ngIf", 0 !== t.avisoPortaAberta.value && t.equipament === t.defaultEquipamentValue),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(17, Ne, t.regAcessoNegado.invalid && (t.regAcessoNegado.dirty || t.regAcessoNegado.touched))),
                    d.Ab(4),
                    d.jc("value", !0),
                    d.Ab(4),
                    d.jc("value", !1),
                    d.Ab(3),
                    d.jc("ngIf", t.hasBiometry),
                    d.Ab(3),
                    d.jc("ngClass", d.nc(19, Ne, t.tamper.invalid && (t.tamper.dirty || t.tamper.touched))),
                    d.Ab(4),
                    d.jc("value", !0),
                    d.Ab(4),
                    d.jc("value", !1),
                    d.Ab(5),
                    d.jc("disabled", !t.editEnabled),
                    d.Ab(3),
                    d.jc("disabled", t.editEnabled || t.configSecurityForm.invalid),
                    d.Ab(3),
                    d.jc("disabled", t.editEnabled))
                },
                directives: [r.w, r.m, r.f, o.i, r.s, r.l, r.e, o.j, o.k, r.b, r.p, r.o, r.v, n.a],
                encapsulation: 2
            }),
            e
        }()
          , Pe = i("rbuq")
          , Ve = function() {
            return {
                exact: !0
            }
        };
        function xe(e, t) {
            1 & e && (d.Sb(0, "li", 3),
            d.Sb(1, "a", 17),
            d.Ob(2, "i", 18),
            d.Bc(3, " Biometria"),
            d.Rb(),
            d.Rb()),
            2 & e && (d.Ab(1),
            d.jc("routerLinkActiveOptions", d.mc(1, Ve)))
        }
        var Le = [{
            path: "",
            component: function() {
                function e(e, t) {
                    this.contentNotifier = e,
                    this.configService = t,
                    this.activeTab = "acesso",
                    this.hasBiometry = !1,
                    this.hasQrCode = !1
                }
                return e.prototype.ngOnInit = function() {
                    var e = this;
                    setTimeout((function() {
                        e.contentNotifier.contentLoadedNotify({
                            icon: "fa fa-cogs",
                            title: "Configura\xe7\xf5es"
                        })
                    }
                    ), 250),
                    this.contentNotifier.childConfigMessage.subscribe((function(t) {
                        e.activeTab = t,
                        e.configService.getInnerInfo().subscribe((function(t) {
                            void 0 !== t.moduloBio && (sessionStorage.setItem("hasBiometry", JSON.stringify(t.moduloBio)),
                            e.hasBiometry = t.moduloBio),
                            void 0 !== t.equipamento && sessionStorage.setItem("equipamento", JSON.stringify(t.equipamento)),
                            void 0 !== t.possuiQrcode && (sessionStorage.setItem("hasQrcode", JSON.stringify(t.possuiQrcode)),
                            e.hasQrCode = t.possuiQrcode)
                        }
                        ))
                    }
                    ))
                }
                ,
                e.\u0275fac = function(t) {
                    return new (t || e)(d.Nb(Pe.a),d.Nb(_.a))
                }
                ,
                e.\u0275cmp = d.Hb({
                    type: e,
                    selectors: [["app-config"]],
                    decls: 27,
                    vars: 11,
                    consts: [[1, "card", "border-0", "text-center", "bg-faded"], [1, "card-header"], [1, "nav", "nav-tabs", "card-header-tabs"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "acesso", "data-toggle", "tab", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa", "fa-credit-card"], ["routerLinkActive", "active", "routerLink", "seguranca", "data-toggle", "tab", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa", "fa-shield-alt"], ["routerLinkActive", "active", "routerLink", "comunicacao", "data-toggle", "tab", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa", "fa-sitemap"], ["class", "nav-item", 4, "ngIf"], ["routerLinkActive", "active", "routerLink", "relogio", "data-toggle", "tab", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa", "fa-clock"], ["routerLinkActive", "active", "routerLink", "master", "data-toggle", "tab", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa", "fa-crown"], [1, "card-body"], [1, "tab-content"], ["routerLinkActive", "active", "routerLink", "biometria", "data-toggle", "tab", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa", "fa-fingerprint"]],
                    template: function(e, t) {
                        1 & e && (d.Sb(0, "div", 0),
                        d.Sb(1, "div", 1),
                        d.Sb(2, "ul", 2),
                        d.Sb(3, "li", 3),
                        d.Sb(4, "a", 4),
                        d.Ob(5, "i", 5),
                        d.Bc(6, " Acesso"),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(7, "li", 3),
                        d.Sb(8, "a", 6),
                        d.Ob(9, "i", 7),
                        d.Bc(10, " Seguran\xe7a"),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(11, "li", 3),
                        d.Sb(12, "a", 8),
                        d.Ob(13, "i", 9),
                        d.Bc(14, " Comunica\xe7\xe3o"),
                        d.Rb(),
                        d.Rb(),
                        d.zc(15, xe, 4, 2, "li", 10),
                        d.Sb(16, "li", 3),
                        d.Sb(17, "a", 11),
                        d.Ob(18, "i", 12),
                        d.Bc(19, " Rel\xf3gio"),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(20, "li", 3),
                        d.Sb(21, "a", 13),
                        d.Ob(22, "i", 14),
                        d.Bc(23, " Master"),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Rb(),
                        d.Sb(24, "div", 15),
                        d.Sb(25, "div", 16),
                        d.Ob(26, "router-outlet"),
                        d.Rb(),
                        d.Rb(),
                        d.Rb()),
                        2 & e && (d.Ab(4),
                        d.jc("routerLinkActiveOptions", d.mc(6, Ve)),
                        d.Ab(4),
                        d.jc("routerLinkActiveOptions", d.mc(7, Ve)),
                        d.Ab(4),
                        d.jc("routerLinkActiveOptions", d.mc(8, Ve)),
                        d.Ab(3),
                        d.jc("ngIf", t.hasBiometry),
                        d.Ab(2),
                        d.jc("routerLinkActiveOptions", d.mc(9, Ve)),
                        d.Ab(4),
                        d.jc("routerLinkActiveOptions", d.mc(10, Ve)))
                    },
                    directives: [R.e, R.d, o.k, R.g],
                    encapsulation: 2
                }),
                e
            }(),
            children: [{
                path: "",
                pathMatch: "full",
                redirectTo: "acesso"
            }, {
                path: "acesso",
                component: H
            }, {
                path: "seguranca",
                component: Me
            }, {
                path: "comunicacao",
                component: we
            }, {
                path: "relogio",
                component: Y
            }, {
                path: "biometria",
                component: $
            }, {
                path: "master",
                component: Oe
            }]
        }]
          , We = function() {
            function e() {}
            return e.\u0275mod = d.Lb({
                type: e
            }),
            e.\u0275inj = d.Kb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[R.f.forChild(Le)], R.f]
            }),
            e
        }()
          , ze = function() {
            function e() {}
            return e.\u0275mod = d.Lb({
                type: e
            }),
            e.\u0275inj = d.Kb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [_.a, p, y, ee, c.a],
                imports: [[o.b, We, r.q, a.f, a.j, n.b.forRoot({}), s.a]]
            }),
            e
        }()
    }
}]);
