!function(b, a) {
    "object" == typeof exports && "object" == typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? exports.AOS = a() : b.AOS = a()
}(this, function() {
    return function(b) {
        function a(e) {
            if (c[e]) {
                return c[e].exports
            }
            var d = c[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return b[e].call(d.exports, d, d.exports, a),
            d.loaded = !0,
            d.exports
        }
        var c = {};
        return a.m = b,
        a.c = c,
        a.p = "dist/",
        a(0)
    }([function(Z, J, P) {
        function Q(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var V = Object.assign || function(b) {
            for (var a = 1; a < arguments.length; a++) {
                var c = arguments[a];
                for (var d in c) {
                    Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d])
                }
            }
            return b
        }
          , ad = P(1)
          , L = (Q(ad),
        P(5))
          , ab = Q(L)
          , H = P(6)
          , K = Q(H)
          , aa = P(7)
          , Y = Q(aa)
          , S = P(8)
          , R = Q(S)
          , N = P(9)
          , ac = Q(N)
          , G = P(10)
          , X = Q(G)
          , C = P(13)
          , F = Q(C)
          , W = []
          , T = !1
          , D = document.all && !window.atob
          , U = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded"
        }
          , q = function() {
            var a = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
            return a && (T = !0),
            T ? (W = (0,
            X["default"])(W, U),
            (0,
            ac["default"])(W, U.once),
            W) : void 0
        }
          , ae = function() {
            W = (0,
            F["default"])(),
            q()
        }
          , B = function() {
            W.forEach(function(b, a) {
                b.node.removeAttribute("data-aos"),
                b.node.removeAttribute("data-aos-easing"),
                b.node.removeAttribute("data-aos-duration"),
                b.node.removeAttribute("data-aos-delay")
            })
        }
          , M = function(a) {
            return a === !0 || "mobile" === a && R["default"].mobile() || "phone" === a && R["default"].phone() || "tablet" === a && R["default"].tablet() || "function" == typeof a && a() === !0
        }
          , I = function(a) {
            return U = V(U, a),
            W = (0,
            F["default"])(),
            M(U.disable) || D ? B() : (document.querySelector("body").setAttribute("data-aos-easing", U.easing),
            document.querySelector("body").setAttribute("data-aos-duration", U.duration),
            document.querySelector("body").setAttribute("data-aos-delay", U.delay),
            "DOMContentLoaded" === U.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? q(!0) : "load" === U.startEvent ? window.addEventListener(U.startEvent, function() {
                q(!0)
            }) : document.addEventListener(U.startEvent, function() {
                q(!0)
            }),
            window.addEventListener("resize", (0,
            K["default"])(q, 50, !0)),
            window.addEventListener("orientationchange", (0,
            K["default"])(q, 50, !0)),
            window.addEventListener("scroll", (0,
            ab["default"])(function() {
                (0,
                ac["default"])(W, U.once)
            }, 99)),
            document.addEventListener("DOMNodeRemoved", function(c) {
                var b = c.target;
                b && 1 === b.nodeType && b.hasAttribute && b.hasAttribute("data-aos") && (0,
                K["default"])(ae, 50, !0)
            }),
            (0,
            Y["default"])("[data-aos]", ae),
            W)
        };
        Z.exports = {
            init: I,
            refresh: q,
            refreshHard: ae
        }
    }
    , function(b, a) {}
    , , , , function(h, f, j) {
        function l(m, i, p) {
            var q = !0
              , c = !0;
            if ("function" != typeof m) {
                throw new TypeError(k)
            }
            return d(p) && (q = "leading"in p ? !!p.leading : q,
            c = "trailing"in p ? !!p.trailing : c),
            g(m, i, {
                leading: q,
                maxWait: i,
                trailing: c
            })
        }
        function d(c) {
            var a = "undefined" == typeof c ? "undefined" : b(c);
            return !!c && ("object" == a || "function" == a)
        }
        var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
        }
          , g = j(6)
          , k = "Expected a function";
        h.exports = l
    }
    , function(R, D) {
        function H(ah, W, aa) {
            function ab(a) {
                var b = aj
                  , d = s;
                return aj = s = void 0,
                c = a,
                j = ah.apply(d, b)
            }
            function ak(a) {
                return c = a,
                k = setTimeout(ai, W),
                al ? ab(a) : j
            }
            function X(b) {
                var d = b - ae
                  , f = b - c
                  , a = W - d;
                return i ? z(a, af - f) : a
            }
            function x(a) {
                var b = a - ae
                  , d = a - c;
                return !ae || b >= W || 0 > b || i && d >= af
            }
            function ai() {
                var a = M();
                return x(a) ? ag(a) : void (k = setTimeout(ai, X(a)))
            }
            function ag(a) {
                return clearTimeout(k),
                k = void 0,
                Y && aj ? ab(a) : (aj = s = void 0,
                j)
            }
            function ad() {
                void 0 !== k && clearTimeout(k),
                ae = c = 0,
                aj = s = k = void 0
            }
            function ac() {
                return void 0 === k ? j : ag(M())
            }
            function Z() {
                var a = M()
                  , b = x(a);
                if (aj = arguments,
                s = this,
                ae = a,
                b) {
                    if (void 0 === k) {
                        return ak(ae)
                    }
                    if (i) {
                        return clearTimeout(k),
                        k = setTimeout(ai, W),
                        ab(ae)
                    }
                }
                return void 0 === k && (k = setTimeout(ai, W)),
                j
            }
            var aj, s, af, j, k, ae = 0, c = 0, al = !1, i = !1, Y = !0;
            if ("function" != typeof ah) {
                throw new TypeError(E)
            }
            return W = T(W) || 0,
            N(aa) && (al = !!aa.leading,
            i = "maxWait"in aa,
            af = i ? L(T(aa.maxWait) || 0, W) : af,
            Y = "trailing"in aa ? !!aa.trailing : Y),
            Z.cancel = ad,
            Z.flush = ac,
            Z
        }
        function I(b) {
            var a = N(b) ? O.call(b) : "";
            return a == Q || a == K
        }
        function N(b) {
            var a = "undefined" == typeof b ? "undefined" : C(b);
            return !!b && ("object" == a || "function" == a)
        }
        function V(a) {
            return !!a && "object" == ("undefined" == typeof a ? "undefined" : C(a))
        }
        function F(a) {
            return "symbol" == ("undefined" == typeof a ? "undefined" : C(a)) || V(a) && O.call(a) == J
        }
        function T(b) {
            if ("number" == typeof b) {
                return b
            }
            if (F(b)) {
                return S
            }
            if (N(b)) {
                var a = I(b.valueOf) ? b.valueOf() : b;
                b = N(a) ? a + "" : a
            }
            if ("string" != typeof b) {
                return 0 === b ? b : +b
            }
            b = b.replace(G, "");
            var c = B.test(b);
            return c || P.test(b) ? q(b.slice(2), c ? 2 : 8) : U.test(b) ? S : +b
        }
        var C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
        }
          , E = "Expected a function"
          , S = NaN
          , Q = "[object Function]"
          , K = "[object GeneratorFunction]"
          , J = "[object Symbol]"
          , G = /^\s+|\s+$/g
          , U = /^[-+]0x[0-9a-f]+$/i
          , B = /^0b[01]+$/i
          , P = /^0o[0-7]+$/i
          , q = parseInt
          , A = Object.prototype
          , O = A.toString
          , L = Math.max
          , z = Math.min
          , M = Date.now;
        R.exports = H
    }
    , function(h, f) {
        function j(c, a) {
            g.push({
                selector: c,
                fn: a
            }),
            !k && b && (k = new b(l),
            k.observe(d.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })),
            l()
        }
        function l() {
            for (var q, p, r = 0, v = g.length; v > r; r++) {
                q = g[r],
                p = d.querySelectorAll(q.selector);
                for (var i, s = 0, m = p.length; m > s; s++) {
                    i = p[s],
                    i.ready || (i.ready = !0,
                    q.fn.call(i, i))
                }
            }
        }
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var d = window.document
          , b = window.MutationObserver || window.WebKitMutationObserver
          , g = []
          , k = void 0;
        f["default"] = j
    }
    , function(c, b) {
        function d(h, g) {
            if (!(h instanceof g)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var f = function() {
            function g(i, h) {
                for (var j = 0; j < h.length; j++) {
                    var k = h[j];
                    k.enumerable = k.enumerable || !1,
                    k.configurable = !0,
                    "value"in k && (k.writable = !0),
                    Object.defineProperty(i, k.key, k)
                }
            }
            return function(e, h, i) {
                return h && g(e.prototype, h),
                i && g(e, i),
                e
            }
        }()
          , a = function() {
            function g() {
                d(this, g)
            }
            return f(g, [{
                key: "phone",
                value: function() {
                    var h = !1;
                    return function(e) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (h = !0)
                    }(navigator.userAgent || navigator.vendor || window.opera),
                    h
                }
            }, {
                key: "mobile",
                value: function() {
                    var h = !1;
                    return function(e) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (h = !0)
                    }(navigator.userAgent || navigator.vendor || window.opera),
                    h
                }
            }, {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone()
                }
            }]),
            g
        }();
        b["default"] = new a
    }
    , function(b, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function(g, f, h) {
            var i = g.node.getAttribute("data-aos-once");
            f > g.position ? g.node.classList.add("aos-animate") : "undefined" != typeof i && ("false" === i || !h && "true" !== i) && g.node.classList.remove("aos-animate")
        }
          , d = function(h, g) {
            var j = window.pageYOffset
              , f = window.innerHeight;
            h.forEach(function(k, i) {
                c(k, f + j, g)
            })
        };
        a["default"] = d
    }
    , function(g, d, h) {
        function j(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var c = h(11)
          , b = j(c)
          , f = function(i, a) {
            return i.forEach(function(k, l) {
                k.node.classList.add("aos-init"),
                k.position = (0,
                b["default"])(k.node, a.offset)
            }),
            i
        };
        d["default"] = f
    }
    , function(g, d, h) {
        function j(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var c = h(12)
          , b = j(c)
          , f = function(m, k) {
            var p = 0
              , q = 0
              , a = window.innerHeight
              , l = {
                offset: m.getAttribute("data-aos-offset"),
                anchor: m.getAttribute("data-aos-anchor"),
                anchorPlacement: m.getAttribute("data-aos-anchor-placement")
            };
            switch (l.offset && !isNaN(l.offset) && (q = parseInt(l.offset)),
            l.anchor && document.querySelectorAll(l.anchor) && (m = document.querySelectorAll(l.anchor)[0]),
            p = (0,
            b["default"])(m).top,
            l.anchorPlacement) {
            case "top-bottom":
                break;
            case "center-bottom":
                p += m.offsetHeight / 2;
                break;
            case "bottom-bottom":
                p += m.offsetHeight;
                break;
            case "top-center":
                p += a / 2;
                break;
            case "bottom-center":
                p += a / 2 + m.offsetHeight;
                break;
            case "center-center":
                p += a / 2 + m.offsetHeight / 2;
                break;
            case "top-top":
                p += a;
                break;
            case "bottom-top":
                p += m.offsetHeight + a;
                break;
            case "center-top":
                p += m.offsetHeight / 2 + a
            }
            return l.anchorPlacement || l.offset || isNaN(k) || (q = k),
            p + q
        };
        d["default"] = f
    }
    , function(b, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function(f) {
            for (var d = 0, g = 0; f && !isNaN(f.offsetLeft) && !isNaN(f.offsetTop); ) {
                d += f.offsetLeft - ("BODY" != f.tagName ? f.scrollLeft : 0),
                g += f.offsetTop - ("BODY" != f.tagName ? f.scrollTop : 0),
                f = f.offsetParent
            }
            return {
                top: g,
                left: d
            }
        };
        a["default"] = c
    }
    , function(b, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function(f) {
            f = f || document.querySelectorAll("[data-aos]");
            var d = [];
            return [].forEach.call(f, function(g, h) {
                d.push({
                    node: g
                })
            }),
            d
        };
        a["default"] = c
    }
    ])
});
