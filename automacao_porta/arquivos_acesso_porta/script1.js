(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    PDX0: function(t, i) {
        (function(i) {
            t.exports = i
        }
        ).call(this, {})
    },
    YEAO: function(t, i, e) {
        "use strict";
        e.r(i),
        e.d(i, "InnerModule", (function() {
            return vt
        }
        ));
        var o = e("Valr")
          , r = e("cUzu")
          , n = e("MnXN")
          , a = e("BkoA")
          , s = e("7Bak")
          , c = e("q8y7")
          , u = e("KwyK")
          , h = e("PCNd")
          , p = e("DUip")
          , f = e("TYT/")
          , l = e("K9Ia")
          , d = e("dEwP")
          , b = e("ny24")
          , m = e("R+r5")
          , g = e("w1EH")
          , y = e("nzZL")
          , v = e("W2xC")
          , S = e("z1S0")
          , C = function() {
            function t(t) {
                t && (this.id = t.id,
                this.cartao = t.cartao,
                this.horario = t.horario)
            }
            return t.prototype.serialize = function() {
                var t = [];
                return t = (t = t.concat(this.convertStringToNumberArray(this.cartao, 16))).concat(this.horario),
                new Uint8Array(t)
            }
            ,
            t.prototype.deserialize = function(t) {
                this.cartao = this.convertNumberArrayToString(t.subarray(0, 16)),
                this.horario = t[16]
            }
            ,
            t.prototype.convertStringToNumberArray = function(t, i) {
                var e = new Uint8Array(i);
                t = t.padStart(i, "0");
                for (var o = 0; o < t.length; ++o)
                    e[o] = parseInt(t[o], 10);
                return Array.from(e)
            }
            ,
            t.prototype.convertNumberArrayToString = function(t) {
                var i = "";
                return t.forEach((function(t) {
                    i += t.toString()
                }
                )),
                i
            }
            ,
            t
        }()
          , A = function() {
            function t(t) {
                this.hi1 = 255,
                this.mi1 = 255,
                this.hf1 = 255,
                this.mf1 = 255,
                this.hi2 = 255,
                this.mi2 = 255,
                this.hf2 = 255,
                this.mf2 = 255,
                t && (void 0 !== t.hi1 && (this.hi1 = t.hi1),
                void 0 !== t.mi1 && (this.mi1 = t.mi1),
                void 0 !== t.hf1 && (this.hf1 = t.hf1),
                void 0 !== t.mf1 && (this.mf1 = t.mf1),
                void 0 !== t.hi2 && (this.hi2 = t.hi2),
                void 0 !== t.mi2 && (this.mi2 = t.mi2),
                void 0 !== t.hf2 && (this.hf2 = t.hf2),
                void 0 !== t.mf2 && (this.mf2 = t.mf2))
            }
            return t.prototype.serialize = function() {
                var t = new Uint8Array(8);
                return t[0] = this.hi1,
                t[1] = this.mi1,
                t[2] = this.hf1,
                t[3] = this.mf1,
                t[4] = this.hi2,
                t[5] = this.mi2,
                t[6] = this.hf2,
                t[7] = this.mf2,
                t
            }
            ,
            t.prototype.deserialize = function(t) {
                this.hi1 = t[0],
                this.mi1 = t[1],
                this.hf1 = t[2],
                this.mf1 = t[3],
                this.hi2 = t[4],
                this.mi2 = t[5],
                this.hf2 = t[6],
                this.mf2 = t[7]
            }
            ,
            t
        }()
          , w = function() {
            function t(t) {
                t ? (this.id = t.id,
                this.seg = new A(t.seg),
                this.ter = new A(t.ter),
                this.qua = new A(t.qua),
                this.qui = new A(t.qui),
                this.sex = new A(t.sex),
                this.sab = new A(t.sab),
                this.dom = new A(t.dom)) : (this.ter = new A,
                this.seg = new A,
                this.qua = new A,
                this.qui = new A,
                this.sex = new A,
                this.sab = new A,
                this.dom = new A)
            }
            return t.prototype.serialize = function() {
                var t = new Uint8Array(57);
                return t[0] = this.id,
                t.set(this.seg.serialize(), 1),
                t.set(this.ter.serialize(), 9),
                t.set(this.qua.serialize(), 17),
                t.set(this.qui.serialize(), 25),
                t.set(this.sex.serialize(), 33),
                t.set(this.sab.serialize(), 41),
                t.set(this.dom.serialize(), 49),
                t
            }
            ,
            t.prototype.deserialize = function(t) {
                this.id = t[0],
                this.seg.deserialize(t.subarray(1, 9)),
                this.ter.deserialize(t.subarray(9, 17)),
                this.qua.deserialize(t.subarray(17, 25)),
                this.qui.deserialize(t.subarray(25, 33)),
                this.sex.deserialize(t.subarray(33, 41)),
                this.sab.deserialize(t.subarray(41, 49)),
                this.dom.deserialize(t.subarray(49, 57))
            }
            ,
            t
        }()
          , O = function() {
            function t(t, i, e, o) {
                var r = this;
                this.list = [],
                this.onlyCardList = [],
                this.timetableList = [],
                this.numeroDigitosCartao = t,
                i.forEach((function(t) {
                    r.list.push(new C(t))
                }
                )),
                e.forEach((function(t) {
                    r.onlyCardList.push(t.cartao)
                }
                )),
                o.forEach((function(t) {
                    r.timetableList.push(new w(t))
                }
                ))
            }
            return t.prototype.serialize = function() {
                var t = this
                  , i = [];
                return i = (i = i.concat(this.convertUint16toBytes(this.list.length))).concat(this.numeroDigitosCartao),
                this.onlyCardList = this.onlyCardList.filter((function(t, i, e) {
                    return e.indexOf(t) === i
                }
                )),
                i = (i = i.concat(this.convertUint16toBytes(this.onlyCardList.length))).concat(this.convertUint16toBytes(this.timetableList.length)),
                this.list.forEach((function(t) {
                    i = i.concat(Array.from(t.serialize()))
                }
                )),
                this.onlyCardList.forEach((function(e) {
                    var o = t.convertStringToNumberArray(e, 16);
                    i = i.concat(o)
                }
                )),
                this.timetableList.forEach((function(t) {
                    i = i.concat(Array.from(t.serialize()))
                }
                )),
                new Uint8Array(i)
            }
            ,
            t.prototype.deserialize = function(t) {
                this.list = [];
                var i = this.convertBytesToUint16(0, t);
                this.numeroDigitosCartao = t[2];
                for (var e = this.convertBytesToUint16(3, t), o = this.convertBytesToUint16(5, t), r = 7, n = 0; n < i; n++)
                    (a = new C).deserialize(t.subarray(r, r + 17)),
                    r += 17,
                    this.list.push(a);
                for (n = 0; n < e; n++)
                    this.onlyCardList.push(this.convertNumberArrayToString(t.subarray(r, r + 16))),
                    r += 16;
                for (n = 0; n < o; n++) {
                    var a;
                    (a = new w).deserialize(t.subarray(r, r + 57)),
                    r += 57,
                    this.timetableList.push(a)
                }
            }
            ,
            t.prototype.convertStringToNumberArray = function(t, i) {
                var e = new Uint8Array(i);
                t = t.padStart(i, "0");
                for (var o = 0; o < t.length; ++o)
                    e[o] = parseInt(t[o], 10);
                return Array.from(e)
            }
            ,
            t.prototype.convertNumberArrayToString = function(t) {
                var i = "";
                return t.forEach((function(t) {
                    i += t.toString()
                }
                )),
                i
            }
            ,
            t.prototype.convertUint16toBytes = function(t) {
                var i = new ArrayBuffer(2);
                return new DataView(i).setUint16(0, t, !1),
                Array.from(new Uint8Array(i))
            }
            ,
            t.prototype.convertBytesToUint16 = function(t, i) {
                return new DataView(i.buffer).getUint16(t, !1)
            }
            ,
            t
        }()
          , E = function() {
            function t(t) {
                t && (this.tipoLeitor = t.tipoLeitor,
                this.numeroDigitosCartao = t.numeroDigitosCartao,
                this.funcaoInnerPrincipal = t.funcaoInnerPrincipal,
                this.botaoLibera = t.botaoLibera,
                this.tempoAcionamento = t.tempoAcionamento,
                this.leitorExterno = t.leitorExterno,
                this.buzzer = t.buzzer,
                this.digitosVariaveis = t.digitosVariaveis,
                this.equipamento = t.equipamento)
            }
            return t.prototype.serialize = function() {
                var t = [];
                t.push(this.buzzer ? 1 : 0),
                t.push(this.botaoLibera),
                t.push(this.funcaoInnerPrincipal),
                t.push(this.leitorExterno),
                t.push(this.numeroDigitosCartao),
                t.push(this.tempoAcionamento),
                t.push(this.tipoLeitor);
                var i = this.digitosVariaveis % 256;
                return t.push(this.digitosVariaveis / 256),
                t.push(i),
                t.push(this.equipamento),
                new Uint8Array(t)
            }
            ,
            t.prototype.deserialize = function(t) {
                return this.buzzer = 0 !== t[0],
                this.botaoLibera = t[1],
                this.funcaoInnerPrincipal = t[2],
                this.leitorExterno = t[3],
                this.numeroDigitosCartao = t[4],
                this.tempoAcionamento = t[5],
                this.tipoLeitor = t[6],
                this.digitosVariaveis = 256 * t[7] + t[8],
                this.equipamento = t[9],
                this
            }
            ,
            t.prototype.isValid = function() {
                return !(this.botaoLibera > 2 || 1 !== this.funcaoInnerPrincipal && 2 !== this.funcaoInnerPrincipal || this.leitorExterno > 2 || this.numeroDigitosCartao < 4 || this.numeroDigitosCartao > 16 || this.digitosVariaveis < 0 || this.numeroDigitosCartao > 65535 || 0 === this.tempoAcionamento || 2 !== this.tipoLeitor && 5 !== this.tipoLeitor && 3 !== this.tipoLeitor && 6 !== this.tipoLeitor)
            }
            ,
            t
        }()
          , I = function() {
            function t(t) {
                t && (this.habilitaIdentificacao = t.habilitaIdentificacao,
                this.habilitaVerificacao = t.habilitaVerificacao,
                this.nivelSegurancaIdentificacao = t.nivelSegurancaIdentificacao)
            }
            return t.prototype.serialize = function() {
                var t = []
                  , i = this.habilitaIdentificacao ? 1 : 0;
                return t.push(i),
                t.push(i = this.habilitaVerificacao ? 1 : 0),
                t.push(this.nivelSegurancaIdentificacao),
                new Uint8Array(t)
            }
            ,
            t.prototype.deserialize = function(t) {
                return this.habilitaIdentificacao = 0 !== t[0],
                this.habilitaVerificacao = 0 !== t[1],
                this.nivelSegurancaIdentificacao = t[2],
                this
            }
            ,
            t.prototype.isValid = function() {
                return !(this.nivelSegurancaIdentificacao < 3 || this.nivelSegurancaIdentificacao > 5)
            }
            ,
            t
        }()
          , R = function() {
            function t(t) {
                t && (this.masterPermiteCadastro = t.masterPermiteCadastro,
                this.numCartaoMaster = t.numCartaoMaster,
                this.quantidadeBiometrias = t.quantidadeBiometrias)
            }
            return t.prototype.serialize = function() {
                var t = [];
                return t = (t = (t = t.concat(this.masterPermiteCadastro ? 1 : 0)).concat(this.convertStringToByteArray(this.numCartaoMaster, 17))).concat(this.quantidadeBiometrias),
                new Uint8Array(t)
            }
            ,
            t.prototype.deserialize = function(t) {
                this.masterPermiteCadastro = 0 !== t[0],
                this.numCartaoMaster = this.convertByteArrayToString(Array.from(t.slice(1, 17))),
                this.quantidadeBiometrias = t[18]
            }
            ,
            t.prototype.isValid = function() {
                return !0
            }
            ,
            t.prototype.convertStringToByteArray = function(t, i) {
                for (var e = new Uint8Array(i), o = 0; o < t.length; ++o)
                    e[o] = t.charCodeAt(o);
                return Array.from(e)
            }
            ,
            t.prototype.convertByteArrayToString = function(t) {
                for (var i = "", e = 0; e < t.length - 1 && 0 !== t[e]; ++e)
                    i += String.fromCharCode(t[e]);
                return i
            }
            ,
            t
        }()
          , B = function() {
            function t(t) {
                t && (this.diaInicio = t.diaInicio,
                this.mesInicio = t.mesInicio,
                this.anoInicio = t.anoInicio,
                this.horaInicio = t.horaInicio,
                this.minutosInicio = t.minutosInicio,
                this.diaFim = t.diaFim,
                this.mesFim = t.mesFim,
                this.anoFim = t.anoFim,
                this.horaFim = t.horaFim,
                this.minutosFim = t.minutosFim)
            }
            return t.prototype.serialize = function() {
                var t = [];
                return t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.concat(this.diaInicio)).concat(this.mesInicio)).concat(this.anoInicio)).concat(this.horaInicio)).concat(this.minutosInicio)).concat(this.diaFim)).concat(this.mesFim)).concat(this.anoFim)).concat(this.horaFim)).concat(this.minutosFim),
                new Uint8Array(t)
            }
            ,
            t.prototype.deserialize = function(t) {
                this.diaInicio = t[0],
                this.mesInicio = t[1],
                this.anoInicio = t[2],
                this.horaInicio = t[3],
                this.minutosInicio = t[4],
                this.diaFim = t[5],
                this.mesFim = t[6],
                this.anoFim = t[7],
                this.horaFim = t[8],
                this.minutosFim = t[9]
            }
            ,
            t.prototype.isValid = function() {
                return !((255 !== this.diaInicio || 255 !== this.mesInicio || 255 !== this.anoInicio || 255 !== this.horaInicio || 255 !== this.minutosInicio || 255 !== this.diaFim || 255 !== this.mesFim || 255 !== this.anoFim || 255 !== this.horaFim || 255 !== this.minutosFim) && (this.diaInicio < 1 || this.diaInicio > 31 || this.diaFim < 1 || this.diaFim > 31 || this.mesInicio < 1 || this.mesInicio > 12 || this.mesFim < 1 || this.mesFim > 12 || this.anoInicio < 1 || this.anoInicio > 99 || this.anoFim < 1 || this.anoFim > 99 || this.horaInicio > 23 || this.horaFim > 23 || this.minutosInicio > 59 || this.minutosFim > 59 || new Date(this.anoInicio + 2e3,this.mesInicio - 1,this.diaInicio,this.horaInicio,this.minutosInicio,0,0) > new Date(this.anoFim + 2e3,this.mesFim - 1,this.diaFim,this.horaFim,this.minutosFim,0,0)))
            }
            ,
            t
        }()
          , L = function() {
            function t(t) {
                t && (this.tipoLista = t.tipoLista,
                this.tamper = t.tamper,
                this.avisoPortaAberta = t.avisoPortaAberta,
                this.tempoPortaAberta = t.tempoPortaAberta,
                this.registraAcessoNegado = t.registraAcessoNegado,
                this.registraFalhaVerfiBio = t.registraFalhaVerfiBio)
            }
            return t.prototype.serialize = function() {
                var t = [];
                return t = (t = (t = (t = (t = (t = t.concat(this.tipoLista)).concat(this.tamper ? 1 : 0)).concat(this.avisoPortaAberta)).concat(this.tempoPortaAberta)).concat(this.registraAcessoNegado ? 1 : 0)).concat(this.registraFalhaVerfiBio ? 1 : 0),
                new Uint8Array(t)
            }
            ,
            t.prototype.deserialize = function(t) {
                this.tipoLista = t[0],
                this.tamper = 0 !== t[1],
                this.avisoPortaAberta = t[2],
                this.tempoPortaAberta = t[3],
                this.registraAcessoNegado = 0 !== t[4],
                this.registraFalhaVerfiBio = 0 !== t[5]
            }
            ,
            t.prototype.isValid = function() {
                return !(this.tipoLista > 2 || this.avisoPortaAberta > 2)
            }
            ,
            t
        }()
          , _ = function() {
            function t() {}
            return t.prototype.serialize = function() {
                var t = [];
                return t = (t = (t = (t = (t = (t = t.concat(Array.from(this.accessConfig.serialize()))).concat(Array.from(this.biometryConfig.serialize()))).concat(Array.from(this.masterConfig.serialize()))).concat(Array.from(this.savingTimeConfig.serialize()))).concat(Array.from(this.securityConfig.serialize()))).concat(this.possuiBiometria ? 1 : 0),
                new Uint8Array(t)
            }
            ,
            t.prototype.deserialize = function(t) {
                return this.accessConfig = new E,
                this.accessConfig.deserialize(t.slice(0, 10)),
                this.biometryConfig = new I,
                this.biometryConfig.deserialize(t.slice(10, 13)),
                this.masterConfig = new R,
                this.masterConfig.deserialize(t.slice(13, 32)),
                this.savingTimeConfig = new B,
                this.savingTimeConfig.deserialize(t.slice(32, 42)),
                this.securityConfig = new L,
                this.securityConfig.deserialize(t.slice(42, 48)),
                this.possuiBiometria = 0 !== t[48],
                this
            }
            ,
            t.prototype.isValid = function(t) {
                return !1 === this.accessConfig.isValid() ? (t.push("ACCESS_CONFIG"),
                !1) : 1 == this.possuiBiometria && !1 === this.biometryConfig.isValid() ? (t.push("BIOMETRY_CONFIG"),
                !1) : !1 === this.masterConfig.isValid() ? (t.push("MASTER_CONFIG"),
                !1) : !1 === this.savingTimeConfig.isValid() ? (t.push("SAVING_TIME_CONFIG"),
                !1) : !1 !== this.securityConfig.isValid() || (t.push("SECURITY_CONFIG"),
                !1)
            }
            ,
            t
        }()
          , j = function() {
            function t(t) {
                var i = this;
                this.list = [],
                t.forEach((function(t) {
                    i.list.push(t.templates)
                }
                ))
            }
            return t.prototype.serialize = function() {
                var t = this
                  , i = [];
                return i = i.concat(this.convertUint16toBytes(this.list.length)),
                this.list.forEach((function(e) {
                    var o = t.base64ToNumberArray(e);
                    i = i.concat(o)
                }
                )),
                new Uint8Array(i)
            }
            ,
            t.prototype.deserialize = function(t) {
                this.list = [];
                for (var i = this.convertBytesToUint16(0, t), e = 2, o = 0; o < i; o++)
                    this.list.push(t.subarray(e, e + 1080)),
                    e += 1080
            }
            ,
            t.prototype.convertUint16toBytes = function(t) {
                var i = new ArrayBuffer(2);
                return new DataView(i).setUint16(0, t, !1),
                Array.from(new Uint8Array(i))
            }
            ,
            t.prototype.convertBytesToUint16 = function(t, i) {
                return new DataView(i.buffer).getUint16(t, !1)
            }
            ,
            t.prototype.base64ToNumberArray = function(t) {
                for (var i = atob(t), e = i.length, o = new Uint8Array(1080), r = 0; r < e; r++)
                    o[r] = i.charCodeAt(r);
                return Array.from(o)
            }
            ,
            t.prototype.arrayBufferToBase64 = function(t) {
                for (var i = "", e = t.byteLength, o = 0; o < e; o++)
                    i += String.fromCharCode(t[o]);
                return btoa(i)
            }
            ,
            t
        }()
          , T = e("YZm+")
          , k = function() {
            function t() {}
            return t.prototype.encrypt = function(t) {
                return this.encriptDecript(Array.from(t))
            }
            ,
            t.prototype.decript = function(t, i) {
                return this.encriptDecript(Array.from(t))
            }
            ,
            t.prototype.encriptDecript = function(t, i) {
                if (t) {
                    var e = []
                      , o = 3535;
                    return void 0 !== i && (o = i),
                    t.forEach((function(t) {
                        var i = t;
                        i ^= o / 256,
                        e.push(i ^= o % 256),
                        o = 19436 * o % 43117
                    }
                    )),
                    new Uint8Array(e)
                }
            }
            ,
            t.\u0275prov = f.Jb({
                token: t,
                factory: t.\u0275fac = function(i) {
                    return new (i || t)
                }
                ,
                providedIn: "root"
            }),
            t
        }()
          , M = [0, 0, 0, 1]
          , H = [255, 255, 255, 254]
          , F = function(t) {
            return t[t.Configuracoes = 1] = "Configuracoes",
            t[t.Biometrias = 2] = "Biometrias",
            t[t.ListaDeAcesso = 3] = "ListaDeAcesso",
            t
        }({})
          , U = function() {
            function t(t) {
                this.cryptoService = t
            }
            return t.prototype.encodeRb1 = function(t, i) {
                var e = this.cryptoService.encrypt(t)
                  , o = this.uint32ToUint8Array(e.byteLength)
                  , r = new Uint8Array(T.arrayBuffer(t))
                  , n = new Uint8Array(T.arrayBuffer(e))
                  , a = this.encodeCryptoSeed(3535, e)
                  , s = this.assemblyRb1Object(o, n, r, e, a, i);
                return this.serializeRb1(s)
            }
            ,
            t.prototype.decodeRb1 = function(t) {
                if (!1 === this.ValidateMinFileSize(t))
                    throw new Error("O arquivo n\xe3o possui o tamanho m\xednimo para um arquivo RB1.");
                var i = t.slice(0, 4);
                if (!1 === this.ValidateHeader(i))
                    throw new Error("A marca de cabe\xe7alho do arquivo est\xe1 incorreta.");
                var e = {
                    linhaProduto: t[4],
                    complementoIdentificacao: t[5],
                    versaoArquivo: t[6],
                    reservado1: t.slice(7, 16),
                    reservado2: t.slice(16, 23),
                    operacao: t[23],
                    tamanhoConteudo: t.slice(24, 28),
                    hashCripto: t.slice(28, 48),
                    hashOriginal: t.slice(48, 68),
                    reservado3: t.slice(68, 512)
                };
                if (this.information = e,
                !1 === this.ValidateInfo(e))
                    throw new Error("O campo informa\xe7\xf5es do arquivo est\xe1 incorreto.");
                var o = new Uint8Array(e.tamanhoConteudo).buffer
                  , r = new DataView(o).getUint32(0);
                if (!1 === this.ValidateFullFileSize(t))
                    throw new Error("ERRO: O tamanho do arquivo \xe9 incompat\xedvel com o tamanho informado.");
                var n = 512
                  , a = t.slice(n, n + 512)
                  , s = t.slice(n += 512, n + r);
                if (!1 === this.ValidateHash(s, e.hashCripto))
                    throw new Error("O hash referente ao campo dados difere do informado no campo info.");
                var c = t.slice(n += r, n + 512)
                  , u = t.slice(n += 512, n + 4);
                if (!1 === this.ValidateTrailler(u))
                    throw new Error("A marca\xe7\xe3o de fim de arquivo est\xe1 incorreta.");
                var h = {
                    headerMark: i,
                    info: e,
                    encryptedData: s,
                    seedEncoded: a,
                    encryptedInfo: c,
                    trailler: u
                }
                  , p = this.DecryptRb1(h);
                if (!1 === this.ValidateHash(p, h.info.hashOriginal))
                    throw new Error("O hash dos dados descriptografados est\xe1 incorreto");
                return p
            }
            ,
            t.prototype.ValidateMinFileSize = function(t) {
                return !(t.length < 1540)
            }
            ,
            t.prototype.ValidateFullFileSize = function(t) {
                return !(t.length < 1544)
            }
            ,
            t.prototype.ValidateHeader = function(t) {
                for (var i = 0; i < t.length; ++i)
                    if (t[i] !== M[i])
                        return !1;
                return !0
            }
            ,
            t.prototype.ValidateInfo = function(t) {
                return 32 === t.linhaProduto && 0 === t.complementoIdentificacao && 1 === t.versaoArquivo
            }
            ,
            t.prototype.ValidateHash = function(t, i) {
                for (var e = new Uint8Array(T.arrayBuffer(t)), o = 0; o < i.length; ++o)
                    if (e[o] !== i[o])
                        return !1;
                return !0
            }
            ,
            t.prototype.ValidateTrailler = function(t) {
                for (var i = 0; i < t.length; ++i)
                    if (t[i] !== H[i])
                        return !1;
                return !0
            }
            ,
            t.prototype.DecryptRb1 = function(t) {
                var i = this.calculateCheckSum(t.encryptedData)
                  , e = new DataView(t.seedEncoded.buffer).getUint16(2 * i, !0);
                return this.cryptoService.decript(t.encryptedData, e)
            }
            ,
            t.prototype.assemblyRb1Object = function(t, i, e, o, r, n) {
                return {
                    headerMark: new Uint8Array(M),
                    info: {
                        linhaProduto: 32,
                        complementoIdentificacao: 0,
                        versaoArquivo: 1,
                        operacao: n,
                        reservado1: new Uint8Array(9),
                        reservado2: new Uint8Array(7),
                        tamanhoConteudo: t,
                        hashCripto: i,
                        hashOriginal: e,
                        reservado3: new Uint8Array(444)
                    },
                    encryptedData: o,
                    encryptedInfo: new Uint8Array(512),
                    seedEncoded: r,
                    trailler: new Uint8Array(H)
                }
            }
            ,
            t.prototype.serializeRb1 = function(t) {
                var i = [];
                return i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = i.concat(Array.from(t.headerMark))).concat(t.info.linhaProduto)).concat(t.info.complementoIdentificacao)).concat(t.info.versaoArquivo)).concat(Array.from(t.info.reservado1))).concat(Array.from(t.info.reservado2))).concat(t.info.operacao)).concat(Array.from(t.info.tamanhoConteudo))).concat(Array.from(t.info.hashCripto))).concat(Array.from(t.info.hashOriginal))).concat(Array.from(t.info.reservado3))).concat(Array.from(t.seedEncoded))).concat(Array.from(t.encryptedData))).concat(Array.from(t.encryptedInfo))).concat(Array.from(t.trailler)),
                new Uint8Array(i)
            }
            ,
            t.prototype.encodeCryptoSeed = function(t, i) {
                var e = this.generateRandomBytes(512)
                  , o = this.calculateCheckSum(i);
                return e[2 * o] = 255 & t,
                e[2 * o + 1] = t >> 8 & 255,
                new Uint8Array(e)
            }
            ,
            t.prototype.calculateCheckSum = function(t) {
                var i = 0;
                return Array.from(t).forEach((function(t) {
                    i ^= t
                }
                )),
                i
            }
            ,
            t.prototype.uint32ToUint8Array = function(t) {
                var i = new ArrayBuffer(4);
                return new DataView(i).setUint32(0, t, !1),
                new Uint8Array(i)
            }
            ,
            t.prototype.generateRandomBytes = function(t) {
                var i = new Uint8Array(t)
                  , e = Array.from(i).map((function(t) {
                    return Math.floor(256 * Math.random())
                }
                ));
                return new Uint8Array(e)
            }
            ,
            t.\u0275fac = function(i) {
                return new (i || t)(f.ac(k))
            }
            ,
            t.\u0275prov = f.Jb({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }()
          , x = e("0/uQ")
          , D = e("G5J1")
          , z = e("5tAl")
          , P = e("67Y/")
          , N = e("9Z1F")
          , V = e("Txjg")
          , q = e("sLa7")
          , X = e("Qgas")
          , G = e("mrSG")
          , J = e("FFOo")
          , K = function() {
            function t(t, i) {
                this.count = t,
                this.source = i
            }
            return t.prototype.call = function(t, i) {
                return i.subscribe(new Y(t,this.count,this.source))
            }
            ,
            t
        }()
          , Y = function(t) {
            function i(i, e, o) {
                var r = t.call(this, i) || this;
                return r.count = e,
                r.source = o,
                r
            }
            return G.c(i, t),
            i.prototype.complete = function() {
                if (!this.isStopped) {
                    var i = this.source
                      , e = this.count;
                    if (0 === e)
                        return t.prototype.complete.call(this);
                    e > -1 && (this.count = e - 1),
                    i.subscribe(this._unsubscribeAndRecycle())
                }
            }
            ,
            i
        }(J.a)
          , W = e("VnD/")
          , Z = e("t9fZ")
          , Q = e("tMwf")
          , $ = e("vubp")
          , tt = e("MGBS")
          , it = e("zotm")
          , et = function() {
            function t(t, i) {
                this.notifier = t,
                this.source = i
            }
            return t.prototype.call = function(t, i) {
                return i.subscribe(new ot(t,this.notifier,this.source))
            }
            ,
            t
        }()
          , ot = function(t) {
            function i(i, e, o) {
                var r = t.call(this, i) || this;
                return r.notifier = e,
                r.source = o,
                r
            }
            return G.c(i, t),
            i.prototype.error = function(i) {
                if (!this.isStopped) {
                    var e = this.errors
                      , o = this.retries
                      , r = this.retriesSubscription;
                    if (o)
                        this.errors = null,
                        this.retriesSubscription = null;
                    else {
                        e = new l.a;
                        try {
                            o = (0,
                            this.notifier)(e)
                        } catch (n) {
                            return t.prototype.error.call(this, n)
                        }
                        r = Object(it.a)(this, o)
                    }
                    this._unsubscribeAndRecycle(),
                    this.errors = e,
                    this.retries = o,
                    this.retriesSubscription = r,
                    e.next(i)
                }
            }
            ,
            i.prototype._unsubscribe = function() {
                var t = this.errors
                  , i = this.retriesSubscription;
                t && (t.unsubscribe(),
                this.errors = null),
                i && (i.unsubscribe(),
                this.retriesSubscription = null),
                this.retries = null
            }
            ,
            i.prototype.notifyNext = function(t, i, e, o, r) {
                var n = this._unsubscribe;
                this._unsubscribe = null,
                this._unsubscribeAndRecycle(),
                this._unsubscribe = n,
                this.source.subscribe(this)
            }
            ,
            i
        }(tt.a)
          , rt = e("xMyE")
          , nt = e("AytR").a.apiUrl
          , at = function() {
            function t(t) {
                var i = this;
                this.http = t,
                this.catchedErrorProcessing = function(t, i) {
                    throw Object.assign(t, {
                        step: i
                    })
                }
                ,
                this.getUserListPaged = function(t, e) {
                    var o = (new r.e).set("id", t.toString()).set("tam", e.toString());
                    return i.http.get(nt + "/listaacesso", {
                        params: o
                    }).pipe(Object(z.a)(1))
                }
                ,
                this.getOnlyCardListPaged = function(t, e) {
                    var o = (new r.e).set("id", t.toString()).set("tam", e.toString());
                    return i.http.get(nt + "/listasomentecartao", {
                        params: o
                    }).pipe(Object(z.a)(1))
                }
                ,
                this.getBioListPaged = function(t, e) {
                    var o = (new r.e).set("page", t.toString()).set("tam", e.toString());
                    return i.http.get(nt + "/listabiometria", {
                        params: o
                    }).pipe(Object(z.a)(1))
                }
                ,
                this.getTimetableListPaged = function(t, e) {
                    var o = (new r.e).set("page", t.toString()).set("tam", e.toString());
                    return i.http.get(nt + "/tabelashorario", {
                        params: o
                    }).pipe(Object(z.a)(1))
                }
            }
            return t.prototype.openDoor = function() {
                return this.http.get(nt + "/abreporta", {})
            }
            ,
            t.prototype.getAccessConfig = function() {
                return this.http.get(nt + "/configuracaoacesso").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getSecurityConfig = function() {
                return this.http.get(nt + "/configuracaoseguranca").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getCommunicationConfig = function() {
                return this.http.get(nt + "/configuracaocomunicacao").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getBiometryConfig = function() {
                return this.http.get(nt + "/configuracaobiometria").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getSavingTimeConfig = function() {
                return this.http.get(nt + "/configuracaohorarioverao").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getMasterConfig = function() {
                return this.http.get(nt + "/configuracaomaster").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getPossuiBio = function() {
                this.getInnerInfo().subscribe((function(t) {
                    return t.moduloBio
                }
                ))
            }
            ,
            t.prototype.getFalhaVerifBio = function() {
                this.getSecurityConfig().subscribe((function(t) {
                    return t.registraFalhaVerfiBio
                }
                ))
            }
            ,
            t.prototype.postAccessConfig = function(t) {
                return this.http.post(nt + "/configuracaoacesso", t).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.postSecurityConfig = function(t) {
                return this.http.post(nt + "/configuracaoseguranca", t).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.postCommunicationConfig = function(t) {
                return this.http.post(nt + "/configuracaocomunicacao", t).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.postBiometryConfig = function(t) {
                return this.http.post(nt + "/configuracaobiometria", t).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.postSavingTimeConfig = function(t) {
                return this.http.post(nt + "/configuracaohorarioverao", t).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.postMasterReleasesAccess = function(t) {
                return this.http.post(nt + "/masterpermitecadastro", {
                    masterPermiteCadastro: t
                }).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.postMasterCardNumber = function(t) {
                return this.http.post(nt + "/masternumerocartao", {
                    numCartaoMaster: t
                }).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getInnerConfiguration = function() {
                return Object(d.a)(this.getAccessConfig(), this.getBiometryConfig(), this.getMasterConfig(), this.getSavingTimeConfig(), this.getSecurityConfig(), this.getInnerInfo()).pipe(Object(m.a)()).pipe(Object(P.a)((function(t) {
                    var i = new _;
                    return i.accessConfig = new E(t[0]),
                    i.biometryConfig = new I(t[1]),
                    i.masterConfig = new R(t[2]),
                    i.savingTimeConfig = new B(t[3]),
                    i.securityConfig = new L(t[4]),
                    i.possuiBiometria = t[5].moduloBio,
                    i
                }
                )))
            }
            ,
            t.prototype.postInnerConfiguration = function(t) {
                var i = this;
                return Object(d.a)(this.postAccessConfig(t.accessConfig).pipe(Object(N.a)((function(t) {
                    return i.catchedErrorProcessing(t, "ACCESS_CONFIG")
                }
                ))), this.postBiometryConfig(t.biometryConfig).pipe(Object(N.a)((function(t) {
                    return i.catchedErrorProcessing(t, "BIOMETRY_CONFIG")
                }
                ))), this.postMasterReleasesAccess(t.masterConfig.masterPermiteCadastro).pipe(Object(N.a)((function(t) {
                    return i.catchedErrorProcessing(t, "MASTER_CONFIG")
                }
                ))), this.postMasterCardNumber(t.masterConfig.numCartaoMaster).pipe(Object(N.a)((function(t) {
                    return i.catchedErrorProcessing(t, "MASTER_CONFIG")
                }
                ))), this.postSavingTimeConfig(t.savingTimeConfig).pipe(Object(N.a)((function(t) {
                    return i.catchedErrorProcessing(t, "SAVING_TIME_CONFIG")
                }
                ))), this.postSecurityConfig(t.securityConfig).pipe(Object(N.a)((function(t) {
                    return i.catchedErrorProcessing(t, "SECURITY_CONFIG")
                }
                )))).pipe(Object(g.a)())
            }
            ,
            t.prototype.postAccessList = function(t) {
                return Object(d.a)(this.postAccessRecords(t.list), this.postOnlyCardRecords(t.onlyCardList), this.postTimeTableList(t.timetableList)).pipe(Object(g.a)())
            }
            ,
            t.prototype.deleteOnlyCardList = function() {
                return this.http.delete(nt + "/listasomentecartaoexcluilista").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.deleteAccessList = function() {
                return this.http.delete(nt + "/listaacessoexcluilista").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.postAccessRecords = function(t) {
                var i = this;
                if (t.length) {
                    t = t.map((function(t, i) {
                        return Object.assign({
                            id: i
                        }, t)
                    }
                    ));
                    for (var e = [], o = 0; o < t.length; o += 24)
                        e.push(t.slice(o, o + 24 > t.length ? t.length : o + 24));
                    return Object(x.a)(e).pipe(Object(P.a)((function(t, o) {
                        return i.postRegisterCardBlock(t, 0 === o, o === e.length - 1)
                    }
                    )), Object(V.a)()).pipe(Object(g.a)())
                }
                return D.a
            }
            ,
            t.prototype.postOnlyCardRecords = function(t) {
                var i = this;
                if (t.length) {
                    t = t.map((function(t, i) {
                        return Object.assign({
                            id: i
                        }, {
                            cartao: t
                        })
                    }
                    ));
                    for (var e = [], o = 0; o < t.length; o += 25)
                        e.push(t.slice(o, o + 25 > t.length ? t.length : o + 25));
                    return Object(x.a)(e).pipe(Object(P.a)((function(t, o) {
                        return i.postOnlyCardRegisterBlock(t, 0 === o, o === e.length - 1)
                    }
                    )), Object(V.a)()).pipe(Object(g.a)())
                }
                return D.a
            }
            ,
            t.prototype.postRegisterCardBlock = function(t, i, e) {
                var o = (new r.e).set("primeiro", i ? 1. .toString() : (0).toString()).set("ultimo", e ? 1. .toString() : (0).toString())
                  , n = t.map((function(t) {
                    return {
                        id: t.id,
                        cartao: t.cartao,
                        horario: t.horario
                    }
                }
                ));
                return this.http.post(nt + "/listaacessoincluibloco", n, {
                    params: o
                }).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.postOnlyCardRegisterBlock = function(t, i, e) {
                var o = (new r.e).set("primeiro", i ? 1. .toString() : (0).toString()).set("ultimo", e ? 1. .toString() : (0).toString())
                  , n = t.map((function(t) {
                    return {
                        id: t.id,
                        cartao: t.cartao
                    }
                }
                ));
                return this.http.post(nt + "/listasomentecartaoincluibloco", n, {
                    params: o
                }).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getUserList = function() {
                var t = this
                  , i = 1;
                return this.getUserListPaged(i, 30).pipe(Object(q.a)((function(e) {
                    return 30 === e.length ? (i = e[e.length - 1].id,
                    t.getUserListPaged(++i, 30)) : D.a
                }
                )), Object(V.a)(), Object(X.a)((function(t, i) {
                    return t.concat(i)
                }
                ), []))
            }
            ,
            t.prototype.getOnlyCardList = function() {
                var t = this
                  , i = 1;
                return this.getOnlyCardListPaged(i, 30).pipe(Object(q.a)((function(e) {
                    return 30 === e.length ? (i = e[e.length - 1].id,
                    t.getOnlyCardListPaged(++i, 30)) : D.a
                }
                )), Object(V.a)(), Object(X.a)((function(t, i) {
                    return t.concat(i)
                }
                ), []))
            }
            ,
            t.prototype.getBioList = function() {
                var t = this
                  , i = 1;
                return this.getBioListPaged(i, 30).pipe(Object(q.a)((function(e) {
                    return 30 === e.length ? t.getBioListPaged(++i, 30) : D.a
                }
                )), Object(V.a)(), Object(X.a)((function(t, i) {
                    return t.concat(i)
                }
                ), []))
            }
            ,
            t.prototype.getRequestReadBiometry = function(t) {
                var i = (new r.e).set("identificador", t);
                return this.http.get(nt + "/biometriale", {
                    params: i
                }).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getTemplateList = function(t) {
                var i = this;
                return Object(x.a)(t).pipe(Object(P.a)((function(t) {
                    return i.getReadBiometry(t.identificador)
                }
                )), Object(V.a)()).pipe(Object(m.a)())
            }
            ,
            t.prototype.getReadBiometry = function(t) {
                return Object(d.a)(this.getRequestReadBiometry(t), this.getReadBiometryStatus()).pipe(Object(g.a)())
            }
            ,
            t.prototype.getReadBiometryStatus = function() {
                return this.http.get(nt + "/biometriastatusleitura").pipe(Object(z.a)(2), (void 0 === t && (t = -1),
                function(i) {
                    return 0 === t ? Object(D.b)() : i.lift(new K(t < 0 ? -1 : t - 1,i))
                }
                ), Object(W.a)((function(t) {
                    return 0 !== t.status
                }
                )), Object(Z.a)(1));
                var t
            }
            ,
            t.prototype.getDeletAllTemplates = function() {
                return this.http.get(nt + "/biometriaexcluitodas").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getDeletAllTemplatesStatus = function() {
                return this.http.get(nt + "/biometriastatusexclusaotodas").pipe(Object(z.a)(2), Object(Q.a)((function(t) {
                    return t.pipe(Object($.a)(200))
                }
                )), Object(W.a)((function(t) {
                    return 0 !== t.status
                }
                )), Object(Z.a)(1))
            }
            ,
            t.prototype.postIncludeBiometryList = function(t) {
                var i = this;
                return Object(x.a)(t).pipe(Object(P.a)((function(t) {
                    return i.postAddBiometry(t).pipe(Object(z.a)(1))
                }
                )), Object(V.a)()).pipe(Object(g.a)())
            }
            ,
            t.prototype.postAddBiometry = function(t) {
                return Object(d.a)(this.postRequestAddBiometry(t).pipe((i = function(t) {
                    return t.pipe(Object($.a)(200), Object(rt.a)((function(t) {
                        if (503 !== t.status)
                            throw t;
                        return D.a
                    }
                    )))
                }
                ,
                function(t) {
                    return t.lift(new et(i,t))
                }
                )).pipe(Object($.a)(200)), this.getRequestAddBiometryStatus());
                var i
            }
            ,
            t.prototype.postRequestAddBiometry = function(t) {
                return this.http.post(nt + "/biometriainclui", new Blob([t],{
                    type: "application/octet-stream"
                })).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getRequestAddBiometryStatus = function() {
                return this.http.get(nt + "/biometriastatusinclusao").pipe(Object(z.a)(2), Object(Q.a)((function(t) {
                    return t.pipe(Object($.a)(200))
                }
                )), Object(W.a)((function(t) {
                    return 0 !== t.status
                }
                )), Object(Z.a)(1), Object(rt.a)((function(t) {
                    if (1 !== t.status)
                        throw new Error("Falha no Comando Biometrico")
                }
                )))
            }
            ,
            t.prototype.getTimetableList = function() {
                var t = this
                  , i = 1;
                return this.getTimetableListPaged(i, 3).pipe(Object(q.a)((function(e) {
                    return i <= 100 && 0 !== e.length ? (i = e[e.length - 1].id + 1,
                    t.getTimetableListPaged(++i, 3)) : D.a
                }
                )), Object(V.a)(), Object(X.a)((function(t, i) {
                    return t.concat(i)
                }
                ), []))
            }
            ,
            t.prototype.postTimeTableList = function(t) {
                var i = this
                  , e = t
                  , o = 0
                  , r = o + 2 < e.length ? o + 2 : e.length - o
                  , n = 0 === o
                  , a = r === e.length;
                return this.postTimetable(e.slice(o, r), n, a).pipe(Object(q.a)((function() {
                    return e.length > r ? (n = 0 === (o = r),
                    a = (r += o + 2 < e.length ? 2 : e.length - o) === e.length,
                    i.postTimetable(e.slice(o, r), n, a)) : D.a
                }
                )), Object(X.a)((function(t, i) {
                    return t.concat(i)
                }
                ), []))
            }
            ,
            t.prototype.postTimetable = function(t, i, e) {
                var o = (new r.e).set("primeiro", i ? 1. .toString() : (0).toString()).set("ultimo", e ? 1. .toString() : (0).toString());
                return this.http.post(nt + "/tabelashorario", t, {
                    params: o
                }).pipe(Object(z.a)(1))
            }
            ,
            t.prototype.getInnerInfo = function() {
                return this.http.get(nt + "/info").pipe(Object(z.a)(1))
            }
            ,
            t.prototype.preservaConfiguracoesBiometria = function(t) {
                this.getBiometryConfig().subscribe((function(i) {
                    t.biometryConfig.habilitaIdentificacao = i.habilitaIdentificacao,
                    t.biometryConfig.habilitaVerificacao = i.habilitaVerificacao,
                    t.biometryConfig.nivelSegurancaIdentificacao = i.nivelSegurancaIdentificacao
                }
                )),
                this.getSecurityConfig().subscribe((function(i) {
                    t.securityConfig.registraFalhaVerfiBio = i.registraFalhaVerfiBio
                }
                ))
            }
            ,
            t.\u0275fac = function(i) {
                return new (i || t)(f.ac(r.b))
            }
            ,
            t.\u0275prov = f.Jb({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }()
          , st = e("s4wE");
        function ct(t, i) {
            1 & t && (f.Sb(0, "li", 8),
            f.Sb(1, "a", 38),
            f.Ob(2, "i", 39),
            f.Bc(3, " Registros "),
            f.Rb(),
            f.Rb())
        }
        function ut(t, i) {
            if (1 & t) {
                var e = f.Tb();
                f.Sb(0, "a", 27),
                f.ec("click", (function() {
                    return f.sc(e),
                    f.gc().onExportBiometryListClick()
                }
                )),
                f.Ob(1, "i", 40),
                f.Bc(2, " Biometrias "),
                f.Rb()
            }
        }
        function ht(t, i) {
            if (1 & t) {
                var e = f.Tb();
                f.Sb(0, "a", 30),
                f.Sb(1, "label", 41),
                f.Ob(2, "i", 40),
                f.Bc(3, " Biometrias "),
                f.Rb(),
                f.Sb(4, "input", 42),
                f.ec("change", (function(t) {
                    return f.sc(e),
                    f.gc().onImportBiometryListClick(t.target.files)
                }
                )),
                f.Rb(),
                f.Rb()
            }
        }
        var pt = function(t) {
            return {
                show: t
            }
        }
          , ft = "Erro ao tentar executar comando."
          , lt = function() {
            function t(t, i, e, o, r, n, a) {
                var s = this;
                this.navbarService = t,
                this.modalService = i,
                this.toastr = e,
                this.connectionErrorService = o,
                this.router = r,
                this.ab1Service = n,
                this.fileSaverService = a,
                this.ngUnsubscribe = new l.a,
                this.waitDone = !1,
                this.dropExport = !1,
                this.dropImport = !1,
                r.events.subscribe((function(t) {
                    t instanceof p.b && (s.ngUnsubscribe.next(),
                    s.closeLoadingModal())
                }
                ))
            }
            return t.prototype.ngOnInit = function() {}
            ,
            t.prototype.ngOnDestroy = function() {
                this.ngUnsubscribe.next(),
                this.ngUnsubscribe.complete(),
                this.closeLoadingModal()
            }
            ,
            t.prototype.innerHasBiometry = function() {
                return JSON.parse(sessionStorage.getItem("hasBiometry"))
            }
            ,
            Object.defineProperty(t.prototype, "hover", {
                get: function() {
                    return window.screen.width > 992
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.openDoor = function() {
                var t = this;
                this.waitDone = !0,
                this.navbarService.openDoor().subscribe((function() {
                    t.showSuccessToast("Comando executado com sucesso."),
                    t.waitDone = !1
                }
                ), (function(i) {
                    t.checkConnectionError(i),
                    t.showErrorToast(ft),
                    t.waitDone = !1
                }
                ))
            }
            ,
            t.prototype.logout = function() {
                var t = this
                  , i = this.modalService.open(S.a);
                i.componentInstance.setMessage("Deseja fechar o sistema?", "Logout", !0),
                i.result.then((function(i) {
                    "OK" === i && t.router.navigate(["login"])
                }
                ), (function() {}
                ))
            }
            ,
            t.prototype.onExportConfigurationsClick = function() {
                var t = this;
                this.openLoadingModal(),
                this.navbarService.getInnerConfiguration().pipe(Object(b.a)(this.ngUnsubscribe)).subscribe((function(i) {
                    t.exportConfigFile(i)
                }
                ), (function(i) {
                    t.checkConnectionError(i),
                    t.showErrorToast(ft)
                }
                )).add((function() {
                    t.closeLoadingModal()
                }
                ))
            }
            ,
            t.prototype.onImportConfigurationsClick = function(t) {
                var i = this
                  , e = t[0]
                  , o = new FileReader;
                o.onloadend = function() {
                    i.importConfigFile(new Uint8Array(o.result))
                }
                ,
                o.readAsArrayBuffer(e)
            }
            ,
            t.prototype.exportConfigFile = function(t) {
                var i = new Array;
                if (!1 !== t.isValid(i)) {
                    var e = this.ab1Service.encodeRb1(t.serialize(), F.Configuracoes)
                      , o = this.fileSaverService.genType("configura\xe7\xf5es.ab1")
                      , r = new Blob([e],{
                        type: o
                    });
                    this.fileSaverService.save(r, "configura\xe7\xf5es.ab1")
                } else
                    this.showErrorToast("Existem valores inv\xe1lidos referentes \xe0 configura\xe7\xe3o de " + this.getConfigurationString(i[0]) + ".")
            }
            ,
            t.prototype.importConfigFile = function(t) {
                var i, e = this, o = new _;
                try {
                    if (i = this.ab1Service.decodeRb1(t),
                    this.ab1Service.information.operacao !== F.Configuracoes)
                        return this.showErrorToast("Arquivo incorreto"),
                        void this.closeLoadingModal()
                } catch (r) {
                    return this.showErrorToast("Erro ao tentar decodificar arquivo de importa\xe7\xe3o."),
                    void this.closeLoadingModal()
                }
                o.deserialize(i),
                !1 === o.possuiBiometria && this.navbarService.preservaConfiguracoesBiometria(o),
                this.navbarService.getAccessConfig().subscribe((function(t) {
                    if (t.numeroDigitosCartao !== o.accessConfig.numeroDigitosCartao) {
                        var i = e.modalService.open(S.a);
                        i.componentInstance.setMessage("A configura\xe7\xe3o atual referente a quantidade de d\xedgitos do Inner est\xe1 diferente do arquivo selecionado. Ao prosseguir, a lista de acesso atual ser\xe1 exclu\xedda. Deseja continuar?", " Aviso", !0, !0),
                        i.result.then((function(t) {
                            "OK" === t ? (e.openLoadingModal(),
                            e.deleteAcessList(),
                            e.postArquivo(o)) : e.closeLoadingModal()
                        }
                        ))
                    } else
                        e.postArquivo(o)
                }
                ), (function(t) {
                    e.closeLoadingModal(),
                    e.checkConnectionError(t)
                }
                ))
            }
            ,
            t.prototype.getConfigurationString = function(t) {
                return {
                    ACCESS_CONFIG: "acesso",
                    BIOMETRY_CONFIG: "biometria",
                    SECURITY_CONFIG: "seguran\xe7a",
                    COMMUNICATION_CONFIG: "comunica\xe7\xe3o",
                    SAVING_TIME_CONFIG: "hor\xe1rio de ver\xe3o",
                    MASTER_CONFIG: "master"
                }[t]
            }
            ,
            t.prototype.onExportAccessListClick = function() {
                var t = this;
                this.openLoadingModal(),
                Object(d.a)(this.navbarService.getAccessConfig(), this.navbarService.getUserList(), this.navbarService.getOnlyCardList(), this.navbarService.getTimetableList()).pipe(Object(b.a)(this.ngUnsubscribe), Object(m.a)()).subscribe((function(i) {
                    var e = new O(i[0].numeroDigitosCartao,i[1],i[2],i[3])
                      , o = t.ab1Service.encodeRb1(e.serialize(), F.ListaDeAcesso)
                      , r = t.fileSaverService.genType("lista de acesso.ab1")
                      , n = new Blob([o],{
                        type: r
                    });
                    t.fileSaverService.save(n, "lista de acesso.ab1")
                }
                ), (function(i) {
                    t.checkConnectionError(i),
                    t.showErrorToast(ft)
                }
                )).add((function() {
                    return t.closeLoadingModal()
                }
                ))
            }
            ,
            t.prototype.onExportBiometryListClick = function() {
                var t = this;
                this.openLoadingModal(),
                this.navbarService.getBioList().pipe(Object(b.a)(this.ngUnsubscribe)).subscribe((function(i) {
                    var e = [];
                    i.forEach((function(t) {
                        e.find((function(i) {
                            return i.identificador === t.identificador
                        }
                        )) || e.push(t)
                    }
                    )),
                    t.closeLoadingModal(),
                    0 !== e.length ? t.exportBiometryList(e) : t.showErrorToast("N\xe3o foi poss\xedvel realizar opera\xe7\xe3o, lista de biometrias vazia")
                }
                ), (function(i) {
                    t.closeLoadingModal(),
                    t.checkConnectionError(i),
                    t.showErrorToast(ft)
                }
                ))
            }
            ,
            t.prototype.exportBiometryList = function(t) {
                var i = this;
                this.openLoadingModal(),
                this.navbarService.getTemplateList(t).pipe(Object(b.a)(this.ngUnsubscribe)).subscribe((function(t) {
                    var e = new j(t)
                      , o = i.ab1Service.encodeRb1(e.serialize(), F.Biometrias)
                      , r = i.fileSaverService.genType("biometrias.ab1")
                      , n = new Blob([o],{
                        type: r
                    });
                    i.fileSaverService.save(n, "biometrias.ab1")
                }
                ), (function(t) {
                    i.checkConnectionError(t),
                    i.showErrorToast(ft)
                }
                )).add((function() {
                    return i.closeLoadingModal()
                }
                ))
            }
            ,
            t.prototype.onImportAccessListClick = function(t) {
                var i = this
                  , e = t[0]
                  , o = new FileReader;
                this.navbarService.getAccessConfig().subscribe((function(t) {
                    o.onloadend = function() {
                        i.importAccessListFile(t.numeroDigitosCartao, new Uint8Array(o.result))
                    }
                    ,
                    o.readAsArrayBuffer(e)
                }
                ), (function(t) {}
                ))
            }
            ,
            t.prototype.importAccessListFile = function(t, i) {
                var e = this
                  , o = this.modalService.open(S.a);
                o.componentInstance.setMessage("Os registros da lista de acesso atual ser\xe3o exclu\xeddos e substitu\xeddos pelos contidos no arquivo de importa\xe7\xe3o. Deseja continuar?", " Aviso", !0, !0),
                o.result.then((function(o) {
                    if ("OK" === o) {
                        e.openLoadingModal();
                        var r = new O(0,[],[],[])
                          , n = void 0;
                        try {
                            if (n = e.ab1Service.decodeRb1(i),
                            e.ab1Service.information.operacao !== F.ListaDeAcesso)
                                return e.showErrorToast("Arquivo incorreto"),
                                void e.closeLoadingModal()
                        } catch (s) {
                            return e.showErrorToast("Erro ao tentar decodificar arquivo de importa\xe7\xe3o."),
                            void e.closeLoadingModal()
                        }
                        if (r.deserialize(n),
                        r.numeroDigitosCartao > t)
                            return e.showErrorToast("Os cart\xf5es contidos na lista a ser importada possuem o n\xfamero de d\xedgitos maior que o configurado."),
                            void e.closeLoadingModal();
                        if (r.numeroDigitosCartao < t) {
                            var a = e.modalService.open(S.a);
                            a.componentInstance.setMessage("Os cart\xf5es contidos na lista a ser importada possuem o n\xfamero de d\xedgitos menor que o configurado. Deseja continuar?", " Aviso", !0, !0),
                            a.result.then((function(t) {
                                "OK" === t ? e.sendAccessList(r) : e.closeLoadingModal()
                            }
                            ))
                        } else
                            e.sendAccessList(r)
                    }
                }
                ))
            }
            ,
            t.prototype.sendAccessList = function(t) {
                var i = this;
                Object(d.a)(this.navbarService.deleteAccessList(), this.navbarService.deleteOnlyCardList(), this.navbarService.postAccessList(t)).pipe(Object(g.a)()).pipe(Object(b.a)(this.ngUnsubscribe)).subscribe((function() {
                    "/inner/lista" === i.router.url.slice(0, "/inner/lista".length) && location.reload(!0),
                    i.showSuccessToast("Listas importadas com sucesso.")
                }
                ), (function(t) {
                    i.checkConnectionError(t),
                    t && i.showErrorToast(ft)
                }
                )).add((function() {
                    return i.closeLoadingModal()
                }
                ))
            }
            ,
            t.prototype.onImportBiometryListClick = function(t) {
                var i = this
                  , e = t[0]
                  , o = new FileReader;
                o.onloadend = function() {
                    i.importBiometryList(new Uint8Array(o.result))
                }
                ,
                o.readAsArrayBuffer(e)
            }
            ,
            t.prototype.importBiometryList = function(t) {
                var i = this
                  , e = this.modalService.open(S.a);
                e.componentInstance.setMessage("Todas as biometrias contidas atualmente na mem\xf3ria do Inner Acesso ser\xe3o exclu\xeddas e substitu\xeddas pelas contidas no arquivo de importa\xe7\xe3o. Deseja continuar?", " Aviso", !0, !0),
                e.result.then((function(e) {
                    if ("OK" === e) {
                        i.openLoadingModal();
                        var o = new j([])
                          , r = void 0;
                        try {
                            if (r = i.ab1Service.decodeRb1(t),
                            i.ab1Service.information.operacao !== F.Biometrias)
                                return i.showErrorToast("Arquivo incorreto"),
                                void i.closeLoadingModal()
                        } catch (n) {
                            return i.showErrorToast("Erro ao tentar decodificar arquivo de importa\xe7\xe3o."),
                            void i.closeLoadingModal()
                        }
                        o.deserialize(r),
                        Object(d.a)(i.navbarService.getDeletAllTemplates(), i.navbarService.getDeletAllTemplatesStatus(), i.navbarService.postIncludeBiometryList(o.list)).pipe(Object(g.a)()).pipe(Object(b.a)(i.ngUnsubscribe)).subscribe((function() {
                            "/inner/lista" === i.router.url.slice(0, "/inner/lista".length) && location.reload(!0),
                            i.showSuccessToast("Biometrias importadas com sucesso.")
                        }
                        ), (function(t) {
                            void 0 === t.status || t.status || i.checkConnectionError(t),
                            i.showErrorToast(ft)
                        }
                        )).add((function() {
                            i.closeLoadingModal()
                        }
                        ))
                    }
                }
                ))
            }
            ,
            t.prototype.checkConnectionError = function(t) {
                t.status || this.connectionErrorService.ShowErrorMessage()
            }
            ,
            t.prototype.showErrorToast = function(t) {
                this.toastr.errorToastr(t, "", {
                    position: "top-center",
                    animate: "fade"
                })
            }
            ,
            t.prototype.showSuccessToast = function(t) {
                this.toastr.successToastr(t, "", {
                    position: "top-center",
                    animate: "fade"
                })
            }
            ,
            t.prototype.openLoadingModal = function() {
                this.loadingModalForm = this.modalService.open(y.a, {
                    backdrop: "static",
                    keyboard: !1,
                    centered: !0
                })
            }
            ,
            t.prototype.closeLoadingModal = function() {
                null != this.loadingModalForm && this.loadingModalForm.close()
            }
            ,
            t.prototype.onDropDownExportClick = function(t) {
                this.dropExport = !this.dropExport,
                this.dropImport = !1,
                t.stopPropagation()
            }
            ,
            t.prototype.onDropDownImportClick = function(t) {
                this.dropImport = !this.dropImport,
                this.dropExport = !1,
                t.stopPropagation()
            }
            ,
            t.prototype.deleteAcessList = function() {
                var t = this;
                Object(d.a)(this.navbarService.deleteAccessList(), this.navbarService.deleteOnlyCardList()).pipe(Object(g.a)()).pipe(Object(b.a)(this.ngUnsubscribe)).subscribe((function() {}
                ), (function(i) {
                    t.checkConnectionError(i)
                }
                ))
            }
            ,
            t.prototype.postArquivo = function(t) {
                var i = this;
                this.navbarService.postInnerConfiguration(t).pipe(Object(b.a)(this.ngUnsubscribe)).subscribe((function() {
                    i.showSuccessToast("Configura\xe7\xf5es importadas com sucesso.")
                }
                ), (function(t) {
                    i.checkConnectionError(t),
                    i.showErrorToast(t.step ? "Erro ao tentar importar as configura\xe7\xf5es de " + i.getConfigurationString(t.step) + "." : ft)
                }
                )).add((function() {
                    return i.closeLoadingModal()
                }
                ))
            }
            ,
            t.\u0275fac = function(i) {
                return new (i || t)(f.Nb(at),f.Nb(n.h),f.Nb(st.a),f.Nb(v.a),f.Nb(p.c),f.Nb(U),f.Nb(a.b))
            }
            ,
            t.\u0275cmp = f.Hb({
                type: t,
                selectors: [["app-navbar"]],
                decls: 65,
                vars: 10,
                consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-light", "bg-white", "shadow-sm"], ["routerLink", "/inner", 1, "navbar-brand", "mb-1", "text-primary"], [1, "font-logo-inner"], [1, "font-logo-acesso"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "lista", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-list-alt"], ["class", "nav-item", 4, "ngIf"], [1, "btn", "btn-link", "pt-2", "pb-2", "px-0", "text-primary", "border-0", 2, "outline", "none", "box-shadow", "none", "text-decoration", "none", 3, "disabled", "click"], [1, "fas", "fa-walking", "fa-1x"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "mr-3"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 3, "click"], [1, "fa", "fa-tasks"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "config", 1, "dropdown-item", "btn"], [1, "fa", "fa-cogs"], ["routerLink", "administrador", 1, "dropdown-item", "btn"], [1, "fa", "fa-user"], [1, "dropdown-submenu"], ["data-toggle", "dropdown", 1, "dropdown-item", "btn", "dropdown-toggle", 3, "click"], [1, "fa", "fa-file-export"], [1, "dropdown-menu", "dropdown-menu-right", 3, "ngClass"], [1, "dropdown-item", "btn", 3, "click"], ["class", "dropdown-item btn", 3, "click", 4, "ngIf"], [1, "fa", "fa-file-import"], [1, "dropdown-item"], ["for", "importConfiguration", 1, "p-0", "m-0", "btn", "text-primary"], ["id", "importConfiguration", "type", "file", "accept", ".ab1", "onclick", "this.value = null", 2, "display", "none", 3, "change"], ["for", "importAccessList", 1, "p-0", "m-0", "btn", "text-primary"], ["id", "importAccessList", "type", "file", "accept", ".ab1", "onclick", "this.value = null", 2, "display", "none", 3, "change"], ["class", "dropdown-item", 4, "ngIf"], [1, "btn", "ml-0", "pl-0", 3, "click"], [1, "fa", "fa-sign-out-alt"], ["routerLink", "registros", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-receipt"], [1, "fa", "fa-fingerprint"], ["for", "importBiometry", 1, "p-0", "m-0", "btn", "text-primary"], ["id", "importBiometry", "type", "file", "accept", ".ab1", "onclick", "this.value = null", 2, "display", "none", 3, "change"]],
                template: function(t, i) {
                    1 & t && (f.Sb(0, "nav", 0),
                    f.Sb(1, "a", 1),
                    f.Sb(2, "span", 2),
                    f.Bc(3, "Inner"),
                    f.Rb(),
                    f.Sb(4, "span", 3),
                    f.Bc(5, "Acesso"),
                    f.Rb(),
                    f.Rb(),
                    f.Sb(6, "button", 4),
                    f.Ob(7, "span", 5),
                    f.Rb(),
                    f.Sb(8, "div", 6),
                    f.Sb(9, "ul", 7),
                    f.Sb(10, "li", 8),
                    f.Sb(11, "a", 9),
                    f.Ob(12, "i", 10),
                    f.Bc(13, " Lista de Acesso "),
                    f.Rb(),
                    f.Rb(),
                    f.zc(14, ct, 4, 0, "li", 11),
                    f.Sb(15, "li", 8),
                    f.Sb(16, "button", 12),
                    f.ec("click", (function() {
                        return i.openDoor()
                    }
                    )),
                    f.Ob(17, "i", 13),
                    f.Bc(18, " Liberar Acesso "),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Sb(19, "ul", 14),
                    f.Sb(20, "li", 15),
                    f.Sb(21, "a", 16),
                    f.ec("click", (function() {
                        return i.dropImport = !1,
                        i.dropExport = !1
                    }
                    )),
                    f.Ob(22, "i", 17),
                    f.Bc(23, " Gerenciamento "),
                    f.Rb(),
                    f.Sb(24, "ul", 18),
                    f.Sb(25, "li"),
                    f.Sb(26, "a", 19),
                    f.Ob(27, "i", 20),
                    f.Bc(28, " Configura\xe7\xf5es "),
                    f.Rb(),
                    f.Rb(),
                    f.Sb(29, "li"),
                    f.Sb(30, "a", 21),
                    f.Ob(31, "i", 22),
                    f.Bc(32, " Administrador "),
                    f.Rb(),
                    f.Rb(),
                    f.Sb(33, "li", 23),
                    f.Sb(34, "a", 24),
                    f.ec("click", (function(t) {
                        return i.onDropDownExportClick(t)
                    }
                    )),
                    f.Ob(35, "i", 25),
                    f.Bc(36, " Exportar"),
                    f.Rb(),
                    f.Sb(37, "ul", 26),
                    f.Sb(38, "a", 27),
                    f.ec("click", (function() {
                        return i.onExportConfigurationsClick()
                    }
                    )),
                    f.Ob(39, "i", 20),
                    f.Bc(40, " Configura\xe7\xf5es "),
                    f.Rb(),
                    f.Sb(41, "a", 27),
                    f.ec("click", (function() {
                        return i.onExportAccessListClick()
                    }
                    )),
                    f.Ob(42, "i", 10),
                    f.Bc(43, " Lista de Acesso "),
                    f.Rb(),
                    f.zc(44, ut, 3, 0, "a", 28),
                    f.Rb(),
                    f.Rb(),
                    f.Sb(45, "li", 23),
                    f.Sb(46, "a", 24),
                    f.ec("click", (function(t) {
                        return i.onDropDownImportClick(t)
                    }
                    )),
                    f.Ob(47, "i", 29),
                    f.Bc(48, " Importar"),
                    f.Rb(),
                    f.Sb(49, "ul", 26),
                    f.Sb(50, "a", 30),
                    f.Sb(51, "label", 31),
                    f.Ob(52, "i", 20),
                    f.Bc(53, " Configura\xe7\xf5es "),
                    f.Rb(),
                    f.Sb(54, "input", 32),
                    f.ec("change", (function(t) {
                        return i.onImportConfigurationsClick(t.target.files)
                    }
                    )),
                    f.Rb(),
                    f.Rb(),
                    f.Sb(55, "a", 30),
                    f.Sb(56, "label", 33),
                    f.Ob(57, "i", 10),
                    f.Bc(58, " Lista de Acesso "),
                    f.Rb(),
                    f.Sb(59, "input", 34),
                    f.ec("change", (function(t) {
                        return i.onImportAccessListClick(t.target.files)
                    }
                    )),
                    f.Rb(),
                    f.Rb(),
                    f.zc(60, ht, 5, 0, "a", 35),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Sb(61, "li", 8),
                    f.Sb(62, "a", 36),
                    f.ec("click", (function() {
                        return i.logout()
                    }
                    )),
                    f.Ob(63, "i", 37),
                    f.Bc(64, " Sair "),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Rb()),
                    2 & t && (f.Ab(14),
                    f.jc("ngIf", !0),
                    f.Ab(2),
                    f.jc("disabled", i.waitDone),
                    f.Ab(21),
                    f.jc("ngClass", f.nc(6, pt, i.dropExport)),
                    f.Ab(7),
                    f.jc("ngIf", i.innerHasBiometry()),
                    f.Ab(5),
                    f.jc("ngClass", f.nc(8, pt, i.dropImport)),
                    f.Ab(11),
                    f.jc("ngIf", i.innerHasBiometry()))
                },
                directives: [p.e, p.d, o.k, o.i],
                styles: [".dropdown-submenu[_ngcontent-%COMP%]{position:relative}.dropdown-submenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{transform:rotate(-90deg);position:absolute;right:3px;top:40%}.dropdown-menu[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute!important;margin-top:-30px;right:100%}@media (max-width:992px){.dropdown-menu[_ngcontent-%COMP%]{width:50%}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-submenu[_ngcontent-%COMP%]{width:auto}.dropdown-menu[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute!important;margin-top:-30px;left:100%!important}}"]
            }),
            t
        }()
          , dt = e("rbuq")
          , bt = function() {
            function t(t) {
                this.contentNotifier = t,
                this.content = {
                    icon: "",
                    title: ""
                }
            }
            return t.prototype.ngOnInit = function() {
                var t = this;
                this.contentNotifier.contentMessage.subscribe((function(i) {
                    return t.content = i
                }
                ));
                var i = JSON.parse(sessionStorage.getItem("currentUser"));
                this.username = i.usuario
            }
            ,
            t.\u0275fac = function(i) {
                return new (i || t)(f.Nb(dt.a))
            }
            ,
            t.\u0275cmp = f.Hb({
                type: t,
                selectors: [["app-content"]],
                decls: 16,
                vars: 5,
                consts: [[1, "container-fluid", 2, "min-height", "92vh", "padding-top", "52px", "padding-bottom", "50px"], [1, "row"], [1, "col", "m-3", "m-sm-5", "px-3", "px-sm-5"], [1, "col", "text-left"], [1, "text-primary"], [1, "col", "d-none", "d-sm-block", "text-right", "pt-2"], [1, "row", "no-gutters"], [1, "col", "no-gutters"], [1, "card", 2, "min-height", "50vh"], [1, "card-body", "p-0", "m-0"]],
                template: function(t, i) {
                    1 & t && (f.Sb(0, "div", 0),
                    f.Sb(1, "div", 1),
                    f.Sb(2, "div", 2),
                    f.Sb(3, "div", 1),
                    f.Sb(4, "div", 3),
                    f.Sb(5, "h3", 4),
                    f.Ob(6, "i"),
                    f.Bc(7),
                    f.Rb(),
                    f.Rb(),
                    f.Sb(8, "div", 5),
                    f.Sb(9, "h5"),
                    f.Bc(10),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Sb(11, "div", 6),
                    f.Sb(12, "div", 7),
                    f.Sb(13, "div", 8),
                    f.Sb(14, "div", 9),
                    f.Ob(15, "router-outlet"),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Rb(),
                    f.Rb()),
                    2 & t && (f.Ab(6),
                    f.Cb(i.content.icon),
                    f.Ab(1),
                    f.Dc(" ", i.content.title, ""),
                    f.Ab(3),
                    f.Dc("Seja bem vindo, ", i.username, ""))
                },
                directives: [p.g],
                encapsulation: 2
            }),
            t
        }()
          , mt = function() {
            function t() {
                this.WBVersion = {
                    production: "v1.3.0.00".slice(0, -3),
                    debug: "v1.3.0.00"
                }
            }
            return t.prototype.ngOnInit = function() {}
            ,
            t.\u0275fac = function(i) {
                return new (i || t)
            }
            ,
            t.\u0275cmp = f.Hb({
                type: t,
                selectors: [["app-footer"]],
                decls: 5,
                vars: 2,
                consts: [[1, "navbar", "navbar-light", "shadow-lg", "bg-white", "rounded", 2, "height", "50px"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.topdata.com.br/"], ["src", "assets/logoTopdataFooter.png", "alt", ""], ["href", "#", "data-toggle", "tooltip", "data-placement", "auto", 1, "ml-auto", "text-primary", 3, "title"]],
                template: function(t, i) {
                    1 & t && (f.Sb(0, "nav", 0),
                    f.Sb(1, "a", 1),
                    f.Ob(2, "img", 2),
                    f.Rb(),
                    f.Sb(3, "span", 3),
                    f.Bc(4),
                    f.Rb(),
                    f.Rb()),
                    2 & t && (f.Ab(3),
                    f.kc("title", i.WBVersion.debug),
                    f.Ab(1),
                    f.Dc(" Web Server ", i.WBVersion.production, " "))
                },
                encapsulation: 2
            }),
            t
        }()
          , gt = [{
            path: "",
            component: function() {
                function t() {}
                return t.prototype.ngOnInit = function() {}
                ,
                t.\u0275fac = function(i) {
                    return new (i || t)
                }
                ,
                t.\u0275cmp = f.Hb({
                    type: t,
                    selectors: [["app-inner"]],
                    decls: 3,
                    vars: 0,
                    template: function(t, i) {
                        1 & t && (f.Ob(0, "app-navbar"),
                        f.Ob(1, "app-content"),
                        f.Ob(2, "app-footer"))
                    },
                    directives: [lt, bt, mt],
                    encapsulation: 2
                }),
                t
            }(),
            children: [{
                path: "",
                loadChildren: "../main/main.module#MainModule"
            }, {
                path: "administrador",
                loadChildren: "../admin/admin.module#AdminModule"
            }, {
                path: "config",
                loadChildren: "../config/config.module#ConfigModule"
            }, {
                path: "lista",
                loadChildren: "../list/list.module#ListModule"
            }, {
                path: "registros",
                loadChildren: "../tickets/tickets.module#TicketsModule"
            }]
        }]
          , yt = function() {
            function t() {}
            return t.\u0275mod = f.Lb({
                type: t
            }),
            t.\u0275inj = f.Kb({
                factory: function(i) {
                    return new (i || t)
                },
                imports: [[p.f.forChild(gt)], p.f]
            }),
            t
        }()
          , vt = function() {
            function t() {}
            return t.\u0275mod = f.Lb({
                type: t
            }),
            t.\u0275inj = f.Kb({
                factory: function(i) {
                    return new (i || t)
                },
                providers: [at, s.a, {
                    provide: r.a,
                    useClass: c.a,
                    multi: !0
                }, {
                    provide: r.a,
                    useClass: u.a,
                    multi: !0
                }],
                imports: [[o.b, r.c, n.j, h.a, a.a, yt]]
            }),
            t
        }()
    },
    "YZm+": function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        !function() {
            "use strict";
            var root = "object" == typeof window ? window : {}
              , NODE_JS = !root.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
            NODE_JS && (root = global);
            var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && "object" == typeof module && module.exports
              , AMD = __webpack_require__("PDX0")
              , HEX_CHARS = "0123456789abcdef".split("")
              , EXTRA = [-2147483648, 8388608, 32768, 128]
              , SHIFT = [24, 16, 8, 0]
              , OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"]
              , blocks = []
              , createOutputMethod = function(t) {
                return function(i) {
                    return new Sha1(!0).update(i)[t]()
                }
            }
              , createMethod = function() {
                var t = createOutputMethod("hex");
                NODE_JS && (t = nodeWrap(t)),
                t.create = function() {
                    return new Sha1
                }
                ,
                t.update = function(i) {
                    return t.create().update(i)
                }
                ;
                for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
                    var e = OUTPUT_TYPES[i];
                    t[e] = createOutputMethod(e)
                }
                return t
            }
              , nodeWrap = function(method) {
                var crypto = eval("require('crypto')")
                  , Buffer = eval("require('buffer').Buffer")
                  , nodeMethod = function(t) {
                    if ("string" == typeof t)
                        return crypto.createHash("sha1").update(t, "utf8").digest("hex");
                    if (t.constructor === ArrayBuffer)
                        t = new Uint8Array(t);
                    else if (void 0 === t.length)
                        return method(t);
                    return crypto.createHash("sha1").update(new Buffer(t)).digest("hex")
                };
                return nodeMethod
            };
            function Sha1(t) {
                t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                this.h0 = 1732584193,
                this.h1 = 4023233417,
                this.h2 = 2562383102,
                this.h3 = 271733878,
                this.h4 = 3285377520,
                this.block = this.start = this.bytes = this.hBytes = 0,
                this.finalized = this.hashed = !1,
                this.first = !0
            }
            Sha1.prototype.update = function(t) {
                if (!this.finalized) {
                    var i = "string" != typeof t;
                    i && t.constructor === root.ArrayBuffer && (t = new Uint8Array(t));
                    for (var e, o, r = 0, n = t.length || 0, a = this.blocks; r < n; ) {
                        if (this.hashed && (this.hashed = !1,
                        a[0] = this.block,
                        a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0),
                        i)
                            for (o = this.start; r < n && o < 64; ++r)
                                a[o >> 2] |= t[r] << SHIFT[3 & o++];
                        else
                            for (o = this.start; r < n && o < 64; ++r)
                                (e = t.charCodeAt(r)) < 128 ? a[o >> 2] |= e << SHIFT[3 & o++] : e < 2048 ? (a[o >> 2] |= (192 | e >> 6) << SHIFT[3 & o++],
                                a[o >> 2] |= (128 | 63 & e) << SHIFT[3 & o++]) : e < 55296 || e >= 57344 ? (a[o >> 2] |= (224 | e >> 12) << SHIFT[3 & o++],
                                a[o >> 2] |= (128 | e >> 6 & 63) << SHIFT[3 & o++],
                                a[o >> 2] |= (128 | 63 & e) << SHIFT[3 & o++]) : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++r)),
                                a[o >> 2] |= (240 | e >> 18) << SHIFT[3 & o++],
                                a[o >> 2] |= (128 | e >> 12 & 63) << SHIFT[3 & o++],
                                a[o >> 2] |= (128 | e >> 6 & 63) << SHIFT[3 & o++],
                                a[o >> 2] |= (128 | 63 & e) << SHIFT[3 & o++]);
                        this.lastByteIndex = o,
                        this.bytes += o - this.start,
                        o >= 64 ? (this.block = a[16],
                        this.start = o - 64,
                        this.hash(),
                        this.hashed = !0) : this.start = o
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                    this.bytes = this.bytes % 4294967296),
                    this
                }
            }
            ,
            Sha1.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var t = this.blocks
                      , i = this.lastByteIndex;
                    t[16] = this.block,
                    t[i >> 2] |= EXTRA[3 & i],
                    this.block = t[16],
                    i >= 56 && (this.hashed || this.hash(),
                    t[0] = this.block,
                    t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0),
                    t[14] = this.hBytes << 3 | this.bytes >>> 29,
                    t[15] = this.bytes << 3,
                    this.hash()
                }
            }
            ,
            Sha1.prototype.hash = function() {
                var t, i, e = this.h0, o = this.h1, r = this.h2, n = this.h3, a = this.h4, s = this.blocks;
                for (t = 16; t < 80; ++t)
                    s[t] = (i = s[t - 3] ^ s[t - 8] ^ s[t - 14] ^ s[t - 16]) << 1 | i >>> 31;
                for (t = 0; t < 20; t += 5)
                    e = (i = (o = (i = (r = (i = (n = (i = (a = (i = e << 5 | e >>> 27) + (o & r | ~o & n) + a + 1518500249 + s[t] << 0) << 5 | a >>> 27) + (e & (o = o << 30 | o >>> 2) | ~e & r) + n + 1518500249 + s[t + 1] << 0) << 5 | n >>> 27) + (a & (e = e << 30 | e >>> 2) | ~a & o) + r + 1518500249 + s[t + 2] << 0) << 5 | r >>> 27) + (n & (a = a << 30 | a >>> 2) | ~n & e) + o + 1518500249 + s[t + 3] << 0) << 5 | o >>> 27) + (r & (n = n << 30 | n >>> 2) | ~r & a) + e + 1518500249 + s[t + 4] << 0,
                    r = r << 30 | r >>> 2;
                for (; t < 40; t += 5)
                    e = (i = (o = (i = (r = (i = (n = (i = (a = (i = e << 5 | e >>> 27) + (o ^ r ^ n) + a + 1859775393 + s[t] << 0) << 5 | a >>> 27) + (e ^ (o = o << 30 | o >>> 2) ^ r) + n + 1859775393 + s[t + 1] << 0) << 5 | n >>> 27) + (a ^ (e = e << 30 | e >>> 2) ^ o) + r + 1859775393 + s[t + 2] << 0) << 5 | r >>> 27) + (n ^ (a = a << 30 | a >>> 2) ^ e) + o + 1859775393 + s[t + 3] << 0) << 5 | o >>> 27) + (r ^ (n = n << 30 | n >>> 2) ^ a) + e + 1859775393 + s[t + 4] << 0,
                    r = r << 30 | r >>> 2;
                for (; t < 60; t += 5)
                    e = (i = (o = (i = (r = (i = (n = (i = (a = (i = e << 5 | e >>> 27) + (o & r | o & n | r & n) + a - 1894007588 + s[t] << 0) << 5 | a >>> 27) + (e & (o = o << 30 | o >>> 2) | e & r | o & r) + n - 1894007588 + s[t + 1] << 0) << 5 | n >>> 27) + (a & (e = e << 30 | e >>> 2) | a & o | e & o) + r - 1894007588 + s[t + 2] << 0) << 5 | r >>> 27) + (n & (a = a << 30 | a >>> 2) | n & e | a & e) + o - 1894007588 + s[t + 3] << 0) << 5 | o >>> 27) + (r & (n = n << 30 | n >>> 2) | r & a | n & a) + e - 1894007588 + s[t + 4] << 0,
                    r = r << 30 | r >>> 2;
                for (; t < 80; t += 5)
                    e = (i = (o = (i = (r = (i = (n = (i = (a = (i = e << 5 | e >>> 27) + (o ^ r ^ n) + a - 899497514 + s[t] << 0) << 5 | a >>> 27) + (e ^ (o = o << 30 | o >>> 2) ^ r) + n - 899497514 + s[t + 1] << 0) << 5 | n >>> 27) + (a ^ (e = e << 30 | e >>> 2) ^ o) + r - 899497514 + s[t + 2] << 0) << 5 | r >>> 27) + (n ^ (a = a << 30 | a >>> 2) ^ e) + o - 899497514 + s[t + 3] << 0) << 5 | o >>> 27) + (r ^ (n = n << 30 | n >>> 2) ^ a) + e - 899497514 + s[t + 4] << 0,
                    r = r << 30 | r >>> 2;
                this.h0 = this.h0 + e << 0,
                this.h1 = this.h1 + o << 0,
                this.h2 = this.h2 + r << 0,
                this.h3 = this.h3 + n << 0,
                this.h4 = this.h4 + a << 0
            }
            ,
            Sha1.prototype.hex = function() {
                this.finalize();
                var t = this.h0
                  , i = this.h1
                  , e = this.h2
                  , o = this.h3
                  , r = this.h4;
                return HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r]
            }
            ,
            Sha1.prototype.toString = Sha1.prototype.hex,
            Sha1.prototype.digest = function() {
                this.finalize();
                var t = this.h0
                  , i = this.h1
                  , e = this.h2
                  , o = this.h3
                  , r = this.h4;
                return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
            }
            ,
            Sha1.prototype.array = Sha1.prototype.digest,
            Sha1.prototype.arrayBuffer = function() {
                this.finalize();
                var t = new ArrayBuffer(20)
                  , i = new DataView(t);
                return i.setUint32(0, this.h0),
                i.setUint32(4, this.h1),
                i.setUint32(8, this.h2),
                i.setUint32(12, this.h3),
                i.setUint32(16, this.h4),
                t
            }
            ;
            var exports = createMethod();
            COMMON_JS ? module.exports = exports : (root.sha1 = exports,
            AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return exports
            }
            ).call(exports, __webpack_require__, exports, module),
            void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
        }()
    }
}]);
