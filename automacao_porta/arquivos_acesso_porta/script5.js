(window.webpackJsonp = window.webpackJsonp || []).push([[11], {
    XpXM: function(e, r, o) {
        "use strict";
        o.r(r),
        o.d(r, "MainModule", (function() {
            return I
        }
        ));
        var n = o("Valr")
          , i = o("QJY3")
          , t = o("MnXN")
          , a = o("DUip")
          , c = o("W2xC")
          , f = o("rbuq")
          , b = o("AytR")
          , u = o("5tAl")
          , l = o("TYT/")
          , s = o("cUzu")
          , p = b.a.apiUrl
          , m = function() {
            function e(e) {
                this.http = e
            }
            return e.prototype.getInnerInfo = function() {
                return this.http.get(p + "/info").pipe(Object(u.a)(1))
            }
            ,
            e.\u0275fac = function(r) {
                return new (r || e)(l.ac(s.b))
            }
            ,
            e.\u0275prov = l.Jb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }();
        function d(e, r) {
            if (1 & e && (l.Sb(0, "div", 3),
            l.Sb(1, "label", 14),
            l.Bc(2, "Qtd. Biometrias:"),
            l.Rb(),
            l.Sb(3, "div", 5),
            l.Sb(4, "span", 6),
            l.Bc(5),
            l.Rb(),
            l.Rb(),
            l.Rb()),
            2 & e) {
                var o = l.gc();
                l.Ab(5),
                l.Cc(o.bioCount.value)
            }
        }
        var g = function(e) {
            return e.terminalPrincipal = "Terminal principal",
            e.terminalAdicional = "Terminal complementar",
            e
        }({})
          , h = [{
            path: "",
            component: function() {
                function e(e, r, o, n) {
                    this.contentNotifier = e,
                    this.formBuilder = r,
                    this.mainService = o,
                    this.connectionErrorService = n,
                    this.configInfoForm = this.formBuilder.group({
                        productName: [],
                        serialNumber: [],
                        ipInner: [],
                        ipServer: [],
                        portInner: [],
                        macInner: [],
                        innerNumber: [],
                        bioCount: [],
                        firmwareVersion: [],
                        firmwareVariationVersion: [],
                        additionalReader: [],
                        additionalReaderFirmwareVariation: []
                    })
                }
                return e.prototype.ngOnInit = function() {
                    var e = this;
                    setTimeout((function() {
                        e.contentNotifier.contentLoadedNotify({
                            icon: "fa fa-home",
                            title: "Principal"
                        })
                    }
                    ), 250),
                    this.mainService.getInnerInfo().subscribe((function(r) {
                        e.configInfo = r,
                        sessionStorage.setItem("hasBiometry", JSON.stringify(r.moduloBio)),
                        sessionStorage.setItem("hasQrcode", JSON.stringify(r.possuiQrcode)),
                        sessionStorage.setItem("equipamento", JSON.stringify(r.equipamento)),
                        e.updateFormData()
                    }
                    ), (function(r) {
                        r.status || e.connectionErrorService.ShowErrorMessage()
                    }
                    ))
                }
                ,
                Object.defineProperty(e.prototype, "hasBiometry", {
                    get: function() {
                        return !!this.configInfo && this.configInfo.moduloBio
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "productName", {
                    get: function() {
                        return this.configInfoForm.get("productName")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "serialNumber", {
                    get: function() {
                        return this.configInfoForm.get("serialNumber")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "ipInner", {
                    get: function() {
                        return this.configInfoForm.get("ipInner")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "ipServer", {
                    get: function() {
                        return this.configInfoForm.get("ipServer")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "portInner", {
                    get: function() {
                        return this.configInfoForm.get("portInner")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "macInner", {
                    get: function() {
                        return this.configInfoForm.get("macInner")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "innerNumber", {
                    get: function() {
                        return this.configInfoForm.get("innerNumber")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "bioCount", {
                    get: function() {
                        return this.configInfoForm.get("bioCount")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "firmwareVersion", {
                    get: function() {
                        return this.configInfoForm.get("firmwareVersion")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "firmwareVariationVersion", {
                    get: function() {
                        return this.configInfoForm.get("firmwareVariationVersion")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "additionalReader", {
                    get: function() {
                        return this.configInfoForm.get("additionalReader")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "additionalReaderFirmwareVariation", {
                    get: function() {
                        return this.configInfoForm.get("additionalReaderFirmwareVersion")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype.updateFormData = function() {
                    this.productName.setValue(this.configInfo.nomeProduto),
                    this.serialNumber.setValue(this.configInfo.numeroSerial),
                    this.ipInner.setValue(this.configInfo.ipInner),
                    this.ipServer.setValue(this.configInfo.ipServer),
                    this.portInner.setValue(this.configInfo.portaInnerServer),
                    this.macInner.setValue(this.configInfo.macInner),
                    this.innerNumber.setValue(this.configInfo.numeroInner),
                    this.bioCount.setValue(this.configInfo.bioQuantidade),
                    this.firmwareVersion.setValue(this.preenche_versao_fw(g.terminalPrincipal)),
                    this.additionalReader.setValue(this.preenche_versao_fw(g.terminalAdicional))
                }
                ,
                e.prototype.preenche_versao_fw = function(e) {
                    return e == g.terminalPrincipal ? 0 != this.configInfo.versaoVariacaoFw ? this.configInfo.versaoFw + " [" + this.configInfo.versaoVariacaoFw + "]" : "" + this.configInfo.versaoFw : 1 == this.configInfo.leitorComplementar ? 0 != this.configInfo.versaoVariacaoFwComplementar ? "Sim (" + this.configInfo.versaoFwComplementar + " [" + this.configInfo.versaoVariacaoFwComplementar + "])" : "Sim (" + this.configInfo.versaoFwComplementar + ")" : "N\xe3o"
                }
                ,
                e.\u0275fac = function(r) {
                    return new (r || e)(l.Nb(f.a),l.Nb(i.d),l.Nb(m),l.Nb(c.a))
                }
                ,
                e.\u0275cmp = l.Hb({
                    type: e,
                    selectors: [["app-main"]],
                    decls: 47,
                    vars: 8,
                    consts: [[1, "container", "py-3"], [1, "row"], [1, "col-12", "col-sm-6", "text-left"], [1, "form-group", "row"], ["for", "product-name", 1, "col-5", "col-form-label"], [1, "col-7", "py-1"], [1, "font-weight-bold"], ["for", "serial-number", 1, "col-5", "col-form-label"], ["for", "port-inner", 1, "col-5", "col-form-label"], ["for", "ip-server", 1, "col-5", "col-form-label"], [1, "col-5", "col-form-label"], ["class", "form-group row", 4, "ngIf"], ["for", "apl-version", 1, "col-5", "col-form-label"], ["for", "additional_reader", 1, "col-5", "col-form-label"], ["for", "bio-count", 1, "col-5", "col-form-label"]],
                    template: function(e, r) {
                        1 & e && (l.Sb(0, "div", 0),
                        l.Sb(1, "div", 1),
                        l.Sb(2, "div", 2),
                        l.Sb(3, "div", 3),
                        l.Sb(4, "label", 4),
                        l.Bc(5, "Modelo:"),
                        l.Rb(),
                        l.Sb(6, "div", 5),
                        l.Sb(7, "span", 6),
                        l.Bc(8),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.Sb(9, "div", 3),
                        l.Sb(10, "label", 7),
                        l.Bc(11, "N\xfamero de S\xe9rie:"),
                        l.Rb(),
                        l.Sb(12, "div", 5),
                        l.Sb(13, "span", 6),
                        l.Bc(14),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.Sb(15, "div", 3),
                        l.Sb(16, "label", 8),
                        l.Bc(17, "Porta do Servidor:"),
                        l.Rb(),
                        l.Sb(18, "div", 5),
                        l.Sb(19, "span", 6),
                        l.Bc(20),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.Sb(21, "div", 3),
                        l.Sb(22, "label", 9),
                        l.Bc(23, "Endere\xe7o IP do Servidor:"),
                        l.Rb(),
                        l.Sb(24, "div", 5),
                        l.Sb(25, "span", 6),
                        l.Bc(26),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.Sb(27, "div", 2),
                        l.Sb(28, "div", 3),
                        l.Sb(29, "label", 10),
                        l.Bc(30, "N\xba do Inner:"),
                        l.Rb(),
                        l.Sb(31, "div", 5),
                        l.Sb(32, "span", 6),
                        l.Bc(33),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.zc(34, d, 6, 1, "div", 11),
                        l.Sb(35, "div", 3),
                        l.Sb(36, "label", 12),
                        l.Bc(37, "Vers\xe3o Firmware:"),
                        l.Rb(),
                        l.Sb(38, "div", 5),
                        l.Sb(39, "span", 6),
                        l.Bc(40),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.Sb(41, "div", 3),
                        l.Sb(42, "label", 13),
                        l.Bc(43, "Inner Complementar:"),
                        l.Rb(),
                        l.Sb(44, "div", 5),
                        l.Sb(45, "span", 6),
                        l.Bc(46),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.Rb(),
                        l.Rb()),
                        2 & e && (l.Ab(8),
                        l.Cc(r.productName.value),
                        l.Ab(6),
                        l.Cc(r.serialNumber.value),
                        l.Ab(6),
                        l.Cc(r.portInner.value),
                        l.Ab(6),
                        l.Cc(r.ipServer.value),
                        l.Ab(7),
                        l.Cc(r.innerNumber.value),
                        l.Ab(1),
                        l.jc("ngIf", r.hasBiometry),
                        l.Ab(6),
                        l.Cc(r.firmwareVersion.value),
                        l.Ab(6),
                        l.Cc(r.additionalReader.value))
                    },
                    directives: [n.k],
                    encapsulation: 2
                }),
                e
            }()
        }]
          , v = function() {
            function e() {}
            return e.\u0275mod = l.Lb({
                type: e
            }),
            e.\u0275inj = l.Kb({
                factory: function(r) {
                    return new (r || e)
                },
                imports: [[a.f.forChild(h)], a.f]
            }),
            e
        }()
          , I = function() {
            function e() {}
            return e.\u0275mod = l.Lb({
                type: e
            }),
            e.\u0275inj = l.Kb({
                factory: function(r) {
                    return new (r || e)
                },
                providers: [m],
                imports: [[n.b, i.q, t.f, v]]
            }),
            e
        }()
    }
}]);
