(window.webpackJsonp = window.webpackJsonp || []).push([[12], {
    AkKA: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "TicketsModule", (function() {
            return C
        }
        ));
        var i = r("Valr")
          , n = r("cUzu")
          , o = r("QJY3")
          , a = r("MnXN")
          , c = r("BkoA")
          , s = r("q8y7")
          , b = r("KwyK")
          , u = r("PCNd")
          , d = r("DUip")
          , l = r("K9Ia")
          , p = r("dEwP")
          , f = r("ny24")
          , m = r("R+r5")
          , v = r("W2xC")
          , h = r("ueP2")
          , S = r("O4hn")
          , g = r("nzZL")
          , y = r("rbuq")
          , k = r("5tAl")
          , D = r("AytR")
          , R = r("TYT/")
          , w = D.a.apiUrl
          , E = function() {
            function t(t) {
                this.http = t
            }
            return t.prototype.decodeBuffer = function(t) {
                for (var e = 0, r = []; e < t.length; ) {
                    var i = t.subarray(e, e + 16);
                    if (255 !== i[0]) {
                        var n = this.decodeTicket(i);
                        r.push(n)
                    }
                    e += 16
                }
                return r
            }
            ,
            t.prototype.decodeTicket = function(t) {
                for (var e, r = 0; r < t.length - 3; r += 2)
                    e = t[r],
                    t[r] = t[r + 1],
                    t[r + 1] = e;
                var i = t.subarray(6, 14);
                return {
                    tipo: t[0],
                    dia: t[1],
                    mes: t[2],
                    ano: t[3],
                    hora: t[4],
                    min: t[5],
                    cartao: this.bcdToNumberString(i)
                }
            }
            ,
            t.prototype.bcdToNumberString = function(t) {
                for (var e = "", r = 0; r < t.length; r++)
                    e += t[r] >> 4,
                    e += 15 & t[r];
                return e
            }
            ,
            t.prototype.collectBlobTickets = function() {
                return this.http.get(w + "/bilhetesdump", {
                    responseType: "blob"
                })
            }
            ,
            t.prototype.getInnerInfo = function() {
                return this.http.get(w + "/info").pipe(Object(k.a)(1))
            }
            ,
            t.prototype.filterTicketsByDate = function(t, e, r) {
                return t.filter((function(t) {
                    var i = new Date(t.ano + 2e3,t.mes - 1,t.dia,t.hora,t.min,0,0);
                    return i >= e && i <= r
                }
                ))
            }
            ,
            t.\u0275fac = function(e) {
                return new (e || t)(R.ac(n.b))
            }
            ,
            t.\u0275prov = R.Jb({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }()
          , T = r("s4wE")
          , B = function(t) {
            return {
                "text-danger": t
            }
        }
          , O = [{
            path: "",
            component: function() {
                function t(t, e, r, i, n, o, a, c) {
                    this.contentNotifier = t,
                    this.formBuilder = r,
                    this.modalService = i,
                    this.toastr = n,
                    this.fileSaverService = o,
                    this.ticketsService = a,
                    this.connectionErrorService = c,
                    this.ngUnsubscribe = new l.a,
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
                    this.ticketsForm = this.formBuilder.group({
                        dateStart: [],
                        dateEnd: [],
                        timeStart: [],
                        timeEnd: []
                    }),
                    e.size = "medium",
                    e.seconds = !1,
                    e.spinners = !1
                }
                return Object.defineProperty(t.prototype, "dateStart", {
                    get: function() {
                        return this.ticketsForm.get("dateStart")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "dateEnd", {
                    get: function() {
                        return this.ticketsForm.get("dateEnd")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "timeStart", {
                    get: function() {
                        return this.ticketsForm.get("timeStart")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "timeEnd", {
                    get: function() {
                        return this.ticketsForm.get("timeEnd")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.ngOnInit = function() {
                    var t = this;
                    setTimeout((function() {
                        t.contentNotifier.contentLoadedNotify({
                            icon: "fa fa-receipt",
                            title: "Registros"
                        })
                    }
                    ), 250);
                    var e = new Date(Date.now())
                      , r = new Date;
                    r.setDate(r.getDate() - 30),
                    this.dateStart.setValue(r),
                    this.dateEnd.setValue(e),
                    this.timeStart.setValue({
                        hour: 0,
                        minute: 0
                    }),
                    this.timeEnd.setValue({
                        hour: 23,
                        minute: 59
                    })
                }
                ,
                t.prototype.ngOnDestroy = function() {
                    this.ngUnsubscribe.next(),
                    this.ngUnsubscribe.complete()
                }
                ,
                t.prototype.onByDateClick = function() {
                    var t = this;
                    this.modalRef = this.modalService.open(g.a, {
                        backdrop: "static",
                        keyboard: !1,
                        centered: !0
                    });
                    var e = new Date(this.dateStart.value)
                      , r = this.timeStart.value
                      , i = new Date(this.dateEnd.value)
                      , n = this.timeEnd.value
                      , o = e;
                    o.setHours(r.hour, r.minute, 0, 0);
                    var a = i;
                    a.setHours(n.hour, n.minute, 0, 0);
                    var c = Object(p.a)(this.ticketsService.getInnerInfo(), this.ticketsService.collectBlobTickets()).pipe(Object(f.a)(this.ngUnsubscribe), Object(m.a)())
                      , s = 0;
                    c.subscribe((function(e) {
                        s = e[0].numeroInner;
                        var r = new FileReader;
                        r.addEventListener("loadend", (function(e) {
                            var r = t.ticketsService.decodeBuffer(new Uint8Array(e.srcElement.result))
                              , i = t.ticketsService.filterTicketsByDate(r, o, a);
                            0 === i.length ? t.toastr.infoToastr("N\xe3o existem bilhetes para o per\xedodo consultado.", "", {
                                position: "top-center",
                                animate: "fade"
                            }) : t.saveTickets(i, s)
                        }
                        )),
                        r.readAsArrayBuffer(e[1])
                    }
                    ), (function(e) {
                        e.status || t.connectionErrorService.ShowErrorMessage()
                    }
                    )).add((function() {
                        t.modalRef.close()
                    }
                    ))
                }
                ,
                t.prototype.onCompleteClick = function() {
                    var t = this;
                    this.modalRef = this.modalService.open(g.a, {
                        backdrop: "static",
                        keyboard: !1,
                        centered: !0
                    });
                    var e = Object(p.a)(this.ticketsService.getInnerInfo(), this.ticketsService.collectBlobTickets()).pipe(Object(f.a)(this.ngUnsubscribe), Object(m.a)())
                      , r = 0;
                    e.subscribe((function(e) {
                        r = e[0].numeroInner;
                        var i = new FileReader;
                        i.addEventListener("loadend", (function(e) {
                            var i = t.ticketsService.decodeBuffer(new Uint8Array(e.srcElement.result));
                            0 === i.length ? t.toastr.infoToastr("N\xe3o existem registros de bilhetes.", "", {
                                position: "top-center",
                                animate: "fade"
                            }) : t.saveTickets(i, r)
                        }
                        )),
                        i.readAsArrayBuffer(e[1])
                    }
                    ), (function(e) {
                        e.status || t.connectionErrorService.ShowErrorMessage()
                    }
                    )).add((function() {
                        t.modalRef.close()
                    }
                    ))
                }
                ,
                t.prototype.saveTickets = function(t, e) {
                    var r = this.sortTicketsByDate(t)
                      , i = this.formatFile(r, e)
                      , n = this.fileSaverService.genType("bilhetes.txt")
                      , o = new Blob([i],{
                        type: n
                    });
                    this.fileSaverService.save(o, "bilhetes.txt")
                }
                ,
                t.prototype.formatFile = function(t, e) {
                    var r = this
                      , i = "";
                    return t.forEach((function(t) {
                        i += r.formatTicketLine(t, e)
                    }
                    )),
                    i
                }
                ,
                t.prototype.formatTicketLine = function(t, e) {
                    return t.tipo.toString().padStart(3, "0") + " " + t.dia.toString().padStart(2, "0") + "/" + t.mes.toString().padStart(2, "0") + "/" + t.ano.toString().padStart(2, "0") + " " + t.hora.toString().padStart(2, "0") + ":" + t.min.toString().padStart(2, "0") + " " + t.cartao + " " + e.toString().padStart(2, "0") + "\r\n"
                }
                ,
                t.prototype.sortTicketsByDate = function(t) {
                    return t.sort((function(t, e) {
                        return new Date(t.ano + 2e3,t.mes - 1,t.dia,t.hora,t.min,0,0) - new Date(e.ano + 2e3,e.mes - 1,e.dia,e.hora,e.min,0,0)
                    }
                    ))
                }
                ,
                t.prototype.isFilterDatesValid = function() {
                    if (!(this.dateStart.value && this.dateEnd.value && this.timeStart.value && this.timeEnd.value))
                        return !1;
                    var t = new Date(this.dateStart.value)
                      , e = this.timeStart.value
                      , r = new Date(this.dateEnd.value)
                      , i = this.timeEnd.value
                      , n = t;
                    n.setHours(e.hour, e.minute, 0, 0);
                    var o = r;
                    return o.setHours(i.hour, i.minute, 0, 0),
                    n < o
                }
                ,
                t.\u0275fac = function(e) {
                    return new (e || t)(R.Nb(y.a),R.Nb(a.n),R.Nb(o.d),R.Nb(a.h),R.Nb(T.a),R.Nb(c.b),R.Nb(E),R.Nb(v.a))
                }
                ,
                t.\u0275cmp = R.Hb({
                    type: t,
                    selectors: [["app-tickets"]],
                    features: [R.zb([S.b, {
                        provide: a.e,
                        useClass: S.a
                    }, {
                        provide: a.b,
                        useClass: a.c
                    }, {
                        provide: a.d,
                        useClass: h.a
                    }])],
                    decls: 49,
                    vars: 12,
                    consts: [[3, "formGroup"], [1, "container", "bg-white", "p-0", "m-0"], [1, "container", "col-12", "col-12"], [1, "row"], [1, "col-md-12", "text-left"], [1, "card-body"], [1, "col-md-6"], [1, "text-primary"], [1, "form-group", "row", "mt-4"], [1, "col-12", "col-md-2", "col-form-label", 3, "ngClass"], [1, "col-12", "col-md-4"], [1, "input-group"], ["formControlName", "dateStart", "ngbDatepicker", "", "placement", "bottom", "readonly", "", 1, "form-control", 3, "minDate", "maxDate"], ["e", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-calendar-alt"], ["formControlName", "timeStart"], [1, "form-group", "row"], ["formControlName", "dateEnd", "ngbDatepicker", "", "placement", "bottom", "readonly", "", 1, "form-control", 3, "minDate", "maxDate"], ["f", "ngbDatepicker"], ["formControlName", "timeEnd"], [1, "row", "mt-2"], [1, "col-12", "col-md-3", "mt-3", "mb-5"], ["type", "button", 1, "btn", "btn-default", "text-primary", "btn-block", 3, "disabled", "click"], [1, "fa", "fa-file-download"], ["type", "button", 1, "btn", "btn-default", "text-primary", "btn-block", 3, "click"]],
                    template: function(t, e) {
                        if (1 & t) {
                            var r = R.Tb();
                            R.Sb(0, "form", 0),
                            R.Sb(1, "div", 1),
                            R.Sb(2, "div", 2),
                            R.Sb(3, "div", 3),
                            R.Sb(4, "div", 4),
                            R.Sb(5, "div", 5),
                            R.Sb(6, "div", 3),
                            R.Sb(7, "div", 6),
                            R.Sb(8, "h5", 7),
                            R.Bc(9, "Exporta\xe7\xe3o Por Data"),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Sb(10, "div", 8),
                            R.Sb(11, "label", 9),
                            R.Bc(12, " In\xedcio:"),
                            R.Rb(),
                            R.Sb(13, "div", 10),
                            R.Sb(14, "div", 11),
                            R.Ob(15, "input", 12, 13),
                            R.Sb(17, "div", 14),
                            R.Sb(18, "button", 15),
                            R.ec("click", (function() {
                                return R.sc(r),
                                R.rc(16).toggle()
                            }
                            )),
                            R.Ob(19, "i", 16),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Sb(20, "div", 10),
                            R.Ob(21, "ngb-timepicker", 17),
                            R.Rb(),
                            R.Rb(),
                            R.Sb(22, "div", 18),
                            R.Sb(23, "label", 9),
                            R.Bc(24, " Fim:"),
                            R.Rb(),
                            R.Sb(25, "div", 10),
                            R.Sb(26, "div", 11),
                            R.Ob(27, "input", 19, 20),
                            R.Sb(29, "div", 14),
                            R.Sb(30, "button", 15),
                            R.ec("click", (function() {
                                return R.sc(r),
                                R.rc(28).toggle()
                            }
                            )),
                            R.Ob(31, "i", 16),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Sb(32, "div", 10),
                            R.Ob(33, "ngb-timepicker", 21),
                            R.Rb(),
                            R.Rb(),
                            R.Sb(34, "div", 22),
                            R.Sb(35, "div", 23),
                            R.Sb(36, "button", 24),
                            R.ec("click", (function() {
                                return e.onByDateClick()
                            }
                            )),
                            R.Ob(37, "i", 25),
                            R.Bc(38, " Exportar "),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Sb(39, "div", 3),
                            R.Sb(40, "div", 6),
                            R.Sb(41, "h5", 7),
                            R.Bc(42, "Exporta\xe7\xe3o Completa"),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Sb(43, "div", 22),
                            R.Sb(44, "div", 23),
                            R.Sb(45, "button", 26),
                            R.ec("click", (function() {
                                return e.onCompleteClick()
                            }
                            )),
                            R.Ob(46, "i", 25),
                            R.Bc(47, " Exportar "),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Rb(),
                            R.Ob(48, "br"),
                            R.Rb(),
                            R.Rb()
                        }
                        2 & t && (R.jc("formGroup", e.ticketsForm),
                        R.Ab(11),
                        R.jc("ngClass", R.nc(8, B, !e.isFilterDatesValid())),
                        R.Ab(4),
                        R.jc("minDate", e.minDate)("maxDate", e.maxDate),
                        R.Ab(8),
                        R.jc("ngClass", R.nc(10, B, !e.isFilterDatesValid())),
                        R.Ab(4),
                        R.jc("minDate", e.minDate)("maxDate", e.maxDate),
                        R.Ab(9),
                        R.jc("disabled", !e.isFilterDatesValid()))
                    },
                    directives: [o.w, o.m, o.f, i.i, o.b, a.g, o.l, o.e, a.m],
                    encapsulation: 2
                }),
                t
            }()
        }]
          , x = function() {
            function t() {}
            return t.\u0275mod = R.Lb({
                type: t
            }),
            t.\u0275inj = R.Kb({
                factory: function(e) {
                    return new (e || t)
                },
                imports: [[d.f.forChild(O)], d.f]
            }),
            t
        }()
          , C = function() {
            function t() {}
            return t.\u0275mod = R.Lb({
                type: t
            }),
            t.\u0275inj = R.Kb({
                factory: function(e) {
                    return new (e || t)
                },
                providers: [E, {
                    provide: n.a,
                    useClass: s.a,
                    multi: !0
                }, {
                    provide: n.a,
                    useClass: b.a,
                    multi: !0
                }],
                imports: [[i.b, u.a, n.c, o.q, c.a, a.j, a.f, a.o, x]]
            }),
            t
        }()
    }
}]);
