function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(e) {
    mejs.YouTubeApi.flashReady(e)
}
if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = oe.type(e);
            return "function" === n || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return oe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (pe.test(t)) return oe.filter(t, e, n);
                t = oe.filter(t, e)
            }
            return oe.grep(e, function(e) {
                return oe.inArray(e, t) >= 0 !== n
            })
        }

        function o(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function a(e) {
            var t = we[e] = {};
            return oe.each(e.match(be) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s() {
            he.addEventListener ? (he.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1)) : (he.detachEvent("onreadystatechange", r), e.detachEvent("onload", r))
        }

        function r() {
            (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (s(), oe.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ce, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? oe.parseJSON(n) : n
                    } catch (o) {}
                    oe.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function u(e) {
            var t;
            for (t in e)
                if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function d(e, t, n, i) {
            if (oe.acceptData(e)) {
                var o, a, s = oe.expando,
                    r = e.nodeType,
                    l = r ? oe.cache : e,
                    u = r ? e[s] : e[s] && s;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = r ? e[s] = X.pop() || oe.guid++ : s), l[u] || (l[u] = r ? {} : {
                    toJSON: oe.noop
                }), "object" != typeof t && "function" != typeof t || (i ? l[u] = oe.extend(l[u], t) : l[u].data = oe.extend(l[u].data, t)), a = l[u], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[oe.camelCase(t)] = n), "string" == typeof t ? (o = a[t], null == o && (o = a[oe.camelCase(t)])) : o = a, o
            }
        }

        function c(e, t, n) {
            if (oe.acceptData(e)) {
                var i, o, a = e.nodeType,
                    s = a ? oe.cache : e,
                    r = a ? e[oe.expando] : oe.expando;
                if (s[r]) {
                    if (t && (i = n ? s[r] : s[r].data)) {
                        oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;) delete i[t[o]];
                        if (n ? !u(i) : !oe.isEmptyObject(i)) return
                    }(n || (delete s[r].data, u(s[r]))) && (a ? oe.cleanData([e], !0) : ne.deleteExpando || s != s.window ? delete s[r] : s[r] = null)
                }
            }
        }

        function p() {
            return !0
        }

        function f() {
            return !1
        }

        function h() {
            try {
                return he.activeElement
            } catch (e) {}
        }

        function m(e) {
            var t = Le.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function v(e, t) {
            var n, i, o = 0,
                a = typeof e.getElementsByTagName !== Se ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Se ? e.querySelectorAll(t || "*") : void 0;
            if (!a)
                for (a = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || oe.nodeName(i, t) ? a.push(i) : oe.merge(a, v(i, t));
            return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], a) : a
        }

        function g(e) {
            _e.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t) {
            return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
        }

        function w(e) {
            var t = Ye.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function x(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
        }

        function T(e, t) {
            if (1 === t.nodeType && oe.hasData(e)) {
                var n, i, o, a = oe._data(e),
                    s = oe._data(t, a),
                    r = a.events;
                if (r) {
                    delete s.handle, s.events = {};
                    for (n in r)
                        for (i = 0, o = r[n].length; o > i; i++) oe.event.add(t, n, r[n][i])
                }
                s.data && (s.data = oe.extend({}, s.data))
            }
        }

        function S(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[oe.expando]) {
                    o = oe._data(t);
                    for (i in o.events) oe.removeEvent(t, i, o.handle);
                    t.removeAttribute(oe.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && _e.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function k(t, n) {
            var i, o = oe(n.createElement(t)).appendTo(n.body),
                a = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
            return o.detach(), a
        }

        function C(e) {
            var t = he,
                n = Je[e];
            return n || (n = k(e, t), "none" !== n && n || (Qe = (Qe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Qe[0].contentWindow || Qe[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Qe.detach()), Je[e] = n), n
        }

        function j(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function E(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = pt.length; o--;)
                if (t = pt[o] + n, t in e) return t;
            return i
        }

        function $(e, t) {
            for (var n, i, o, a = [], s = 0, r = e.length; r > s; s++) i = e[s], i.style && (a[s] = oe._data(i, "olddisplay"), n = i.style.display, t ? (a[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (a[s] = oe._data(i, "olddisplay", C(i.nodeName)))) : (o = $e(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
            for (s = 0; r > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[s] || "" : "none"));
            return e
        }

        function M(e, t, n) {
            var i = lt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function _(e, t, n, i, o) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > a; a += 2) "margin" === n && (s += oe.css(e, n + Ee[a], !0, o)), i ? ("content" === n && (s -= oe.css(e, "padding" + Ee[a], !0, o)), "margin" !== n && (s -= oe.css(e, "border" + Ee[a] + "Width", !0, o))) : (s += oe.css(e, "padding" + Ee[a], !0, o), "padding" !== n && (s += oe.css(e, "border" + Ee[a] + "Width", !0, o)));
            return s
        }

        function A(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                a = et(e),
                s = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, a);
            if (0 >= o || null == o) {
                if (o = tt(e, t, a), (0 > o || null == o) && (o = e.style[t]), it.test(o)) return o;
                i = s && (ne.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + _(e, t, n || (s ? "border" : "content"), i, a) + "px"
        }

        function N(e, t, n, i, o) {
            return new N.prototype.init(e, t, n, i, o)
        }

        function F() {
            return setTimeout(function() {
                ft = void 0
            }), ft = oe.now()
        }

        function P(e, t) {
            var n, i = {
                    height: e
                },
                o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Ee[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function D(e, t, n) {
            for (var i, o = (bt[t] || []).concat(bt["*"]), a = 0, s = o.length; s > a; a++)
                if (i = o[a].call(n, t, e)) return i
        }

        function L(e, t, n) {
            var i, o, a, s, r, l, u, d, c = this,
                p = {},
                f = e.style,
                h = e.nodeType && $e(e),
                m = oe._data(e, "fxshow");
            n.queue || (r = oe._queueHooks(e, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
                r.unqueued || l()
            }), r.unqueued++, c.always(function() {
                c.always(function() {
                    r.unqueued--, oe.queue(e, "fx").length || r.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = oe.css(e, "display"), d = "none" === u ? oe._data(e, "olddisplay") || C(e.nodeName) : u, "inline" === d && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], mt.exec(o)) {
                    if (delete t[i], a = a || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        h = !0
                    }
                    p[i] = m && m[i] || oe.style(e, i)
                } else u = void 0;
            if (oe.isEmptyObject(p)) "inline" === ("none" === u ? C(e.nodeName) : u) && (f.display = u);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = oe._data(e, "fxshow", {}), a && (m.hidden = !h), h ? oe(e).show() : c.done(function() {
                    oe(e).hide()
                }), c.done(function() {
                    var t;
                    oe._removeData(e, "fxshow");
                    for (t in p) oe.style(e, t, p[t])
                });
                for (i in p) s = D(h ? m[i] : 0, i, c), i in m || (m[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function I(e, t) {
            var n, i, o, a, s;
            for (n in e)
                if (i = oe.camelCase(n), o = t[i], a = e[n], oe.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), s = oe.cssHooks[i], s && "expand" in s) {
                    a = s.expand(a), delete e[i];
                    for (n in a) n in e || (e[n] = a[n], t[n] = o)
                } else t[i] = o
        }

        function O(e, t, n) {
            var i, o, a = 0,
                s = yt.length,
                r = oe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var t = ft || F(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(a);
                    return r.notifyWith(e, [u, a, n]), 1 > a && l ? n : (r.resolveWith(e, [u]), !1)
                },
                u = r.promise({
                    elem: e,
                    props: oe.extend({}, t),
                    opts: oe.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ft || F(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? r.resolveWith(e, [u, t]) : r.rejectWith(e, [u, t]), this
                    }
                }),
                d = u.props;
            for (I(d, u.opts.specialEasing); s > a; a++)
                if (i = yt[a].call(u, e, d, u.opts)) return i;
            return oe.map(d, D, u), oe.isFunction(u.opts.start) && u.opts.start.call(e, u), oe.fx.timer(oe.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function H(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    a = t.toLowerCase().match(be) || [];
                if (oe.isFunction(n))
                    for (; i = a[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function z(e, t, n, i) {
            function o(r) {
                var l;
                return a[r] = !0, oe.each(e[r] || [], function(e, r) {
                    var u = r(t, n, i);
                    return "string" != typeof u || s || a[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var a = {},
                s = e === Wt;
            return o(t.dataTypes[0]) || !a["*"] && o("*")
        }

        function B(e, t) {
            var n, i, o = oe.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && oe.extend(!0, e, n), e
        }

        function q(e, t, n) {
            for (var i, o, a, s, r = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)
                for (s in r)
                    if (r[s] && r[s].test(o)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in n) a = l[0];
            else {
                for (s in n) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                        a = s;
                        break
                    }
                    i || (i = s)
                }
                a = a || i
            }
            return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
        }

        function W(e, t, n, i) {
            var o, a, s, r, l, u = {},
                d = e.dataTypes.slice();
            if (d[1])
                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
            for (a = d.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                if (s = u[l + " " + a] || u["* " + a], !s)
                    for (o in u)
                        if (r = o.split(" "), r[1] === a && (s = u[l + " " + r[0]] || u["* " + r[0]])) {
                            s === !0 ? s = u[o] : u[o] !== !0 && (a = r[0], d.unshift(r[1]));
                            break
                        }
                if (s !== !0)
                    if (s && e["throws"]) t = s(t);
                    else try {
                        t = s(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: s ? c : "No conversion from " + l + " to " + a
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function R(e, t, n, i) {
            var o;
            if (oe.isArray(t)) oe.each(t, function(t, o) {
                n || Yt.test(e) ? i(e, o) : R(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== oe.type(t)) i(e, t);
            else
                for (o in t) R(e + "[" + o + "]", t[o], n, i)
        }

        function V() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function U() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function Y(e) {
            return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var X = [],
            Z = X.slice,
            G = X.concat,
            K = X.push,
            Q = X.indexOf,
            J = {},
            ee = J.toString,
            te = J.hasOwnProperty,
            ne = {},
            ie = "1.11.1",
            oe = function(e, t) {
                return new oe.fn.init(e, t)
            },
            ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            se = /^-ms-/,
            re = /-([\da-z])/gi,
            le = function(e, t) {
                return t.toUpperCase()
            };
        oe.fn = oe.prototype = {
            jquery: ie,
            constructor: oe,
            selector: "",
            length: 0,
            toArray: function() {
                return Z.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Z.call(this)
            },
            pushStack: function(e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return oe.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(oe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(Z.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: K,
            sort: X.sort,
            splice: X.splice
        }, oe.extend = oe.fn.extend = function() {
            var e, t, n, i, o, a, s = arguments[0] || {},
                r = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[r] || {}, r++), "object" == typeof s || oe.isFunction(s) || (s = {}), r === l && (s = this, r--); l > r; r++)
                if (null != (o = arguments[r]))
                    for (i in o) e = s[i], n = o[i], s !== n && (u && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, a = e && oe.isArray(e) ? e : []) : a = e && oe.isPlainObject(e) ? e : {}, s[i] = oe.extend(u, a, n)) : void 0 !== n && (s[i] = n));
            return s
        }, oe.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === oe.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === oe.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !oe.isArray(e) && e - parseFloat(e) >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ne.ownLast)
                    for (t in e) return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[ee.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && oe.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(se, "ms-").replace(re, le)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var o, a = 0,
                    s = e.length,
                    r = n(e);
                if (i) {
                    if (r)
                        for (; s > a && (o = t.apply(e[a], i), o !== !1); a++);
                    else
                        for (a in e)
                            if (o = t.apply(e[a], i), o === !1) break
                } else if (r)
                    for (; s > a && (o = t.call(e[a], a, e[a]), o !== !1); a++);
                else
                    for (a in e)
                        if (o = t.call(e[a], a, e[a]), o === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ae, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (Q) return Q.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[o++] = t[i++];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i, o = [], a = 0, s = e.length, r = !n; s > a; a++) i = !t(e[a], a), i !== r && o.push(e[a]);
                return o
            },
            map: function(e, t, i) {
                var o, a = 0,
                    s = e.length,
                    r = n(e),
                    l = [];
                if (r)
                    for (; s > a; a++) o = t(e[a], a, i), null != o && l.push(o);
                else
                    for (a in e) o = t(e[a], a, i), null != o && l.push(o);
                return G.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (n = Z.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(Z.call(arguments)))
                }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ne
        }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            J["[object " + t + "]"] = t.toLowerCase()
        });
        var ue = function(e) {
            function t(e, t, n, i) {
                var o, a, s, r, l, u, c, f, h, m;
                if ((t ? t.ownerDocument || t : z) !== N && A(t), t = t || N, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (r = t.nodeType) && 9 !== r) return [];
                if (P && !i) {
                    if (o = ye.exec(e))
                        if (s = o[1]) {
                            if (9 === r) {
                                if (a = t.getElementById(s), !a || !a.parentNode) return n;
                                if (a.id === s) return n.push(a), n
                            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && O(t, a) && a.id === s) return n.push(a), n
                        } else {
                            if (o[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = o[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (x.qsa && (!D || !D.test(e))) {
                        if (f = c = H, h = t, m = 9 === r && e, 1 === r && "object" !== t.nodeName.toLowerCase()) {
                            for (u = C(e), (c = t.getAttribute("id")) ? f = c.replace(we, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + p(u[l]);
                            h = be.test(e) && d(t.parentNode) || t, m = u.join(",")
                        }
                        if (m) try {
                            return J.apply(n, h.querySelectorAll(m)), n
                        } catch (v) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return E(e.replace(le, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[H] = !0, e
            }

            function o(e) {
                var t = N.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function a(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function r(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, a = e([], n.length, t), s = a.length; s--;) n[o = a[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function d(e) {
                return e && typeof e.getElementsByTagName !== Y && e
            }

            function c() {}

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    a = q++;
                return t.first ? function(t, n, a) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, a)
                } : function(t, n, s) {
                    var r, l, u = [B, a];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if (l = t[H] || (t[H] = {}), (r = l[i]) && r[0] === B && r[1] === a) return u[2] = r[2];
                                if (l[i] = u, u[2] = e(t, n, s)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var o = 0, a = n.length; a > o; o++) t(e, n[o], i);
                return i
            }

            function v(e, t, n, i, o) {
                for (var a, s = [], r = 0, l = e.length, u = null != t; l > r; r++)(a = e[r]) && (n && !n(a, i, o) || (s.push(a), u && t.push(r)));
                return s
            }

            function g(e, t, n, o, a, s) {
                return o && !o[H] && (o = g(o)), a && !a[H] && (a = g(a, s)), i(function(i, s, r, l) {
                    var u, d, c, p = [],
                        f = [],
                        h = s.length,
                        g = i || m(t || "*", r.nodeType ? [r] : r, []),
                        y = !e || !i && t ? g : v(g, p, e, r, l),
                        b = n ? a || (i ? e : h || o) ? [] : s : y;
                    if (n && n(y, b, r, l), o)
                        for (u = v(b, f), o(u, [], r, l), d = u.length; d--;)(c = u[d]) && (b[f[d]] = !(y[f[d]] = c));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (u = [], d = b.length; d--;)(c = b[d]) && u.push(y[d] = c);
                                a(null, b = [], u, l)
                            }
                            for (d = b.length; d--;)(c = b[d]) && (u = a ? te.call(i, c) : p[d]) > -1 && (i[u] = !(s[u] = c))
                        }
                    } else b = v(b === s ? b.splice(h, b.length) : b), a ? a(null, s, b, l) : J.apply(s, b)
                })
            }

            function y(e) {
                for (var t, n, i, o = e.length, a = T.relative[e[0].type], s = a || T.relative[" "], r = a ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, s, !0), u = f(function(e) {
                        return te.call(t, e) > -1
                    }, s, !0), d = [function(e, n, i) {
                        return !a && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
                    }]; o > r; r++)
                    if (n = T.relative[e[r].type]) d = [f(h(d), n)];
                    else {
                        if (n = T.filter[e[r].type].apply(null, e[r].matches), n[H]) {
                            for (i = ++r; o > i && !T.relative[e[i].type]; i++);
                            return g(r > 1 && h(d), r > 1 && p(e.slice(0, r - 1).concat({
                                value: " " === e[r - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > r && y(e.slice(r, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                        }
                        d.push(n)
                    }
                return h(d)
            }

            function b(e, n) {
                var o = n.length > 0,
                    a = e.length > 0,
                    s = function(i, s, r, l, u) {
                        var d, c, p, f = 0,
                            h = "0",
                            m = i && [],
                            g = [],
                            y = $,
                            b = i || a && T.find.TAG("*", u),
                            w = B += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (u && ($ = s !== N && s); h !== x && null != (d = b[h]); h++) {
                            if (a && d) {
                                for (c = 0; p = e[c++];)
                                    if (p(d, s, r)) {
                                        l.push(d);
                                        break
                                    }
                                u && (B = w)
                            }
                            o && ((d = !p && d) && f--, i && m.push(d))
                        }
                        if (f += h, o && h !== f) {
                            for (c = 0; p = n[c++];) p(m, g, s, r);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) m[h] || g[h] || (g[h] = K.call(l));
                                g = v(g)
                            }
                            J.apply(l, g), u && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (B = w, $ = y), m
                    };
                return o ? i(s) : s
            }
            var w, x, T, S, k, C, j, E, $, M, _, A, N, F, P, D, L, I, O, H = "sizzle" + -new Date,
                z = e.document,
                B = 0,
                q = 0,
                W = n(),
                R = n(),
                V = n(),
                U = function(e, t) {
                    return e === t && (_ = !0), 0
                },
                Y = "undefined",
                X = 1 << 31,
                Z = {}.hasOwnProperty,
                G = [],
                K = G.pop,
                Q = G.push,
                J = G.push,
                ee = G.slice,
                te = G.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ie = "[\\x20\\t\\r\\n\\f]",
                oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ae = oe.replace("w", "w#"),
                se = "\\[" + ie + "*(" + oe + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ie + "*\\]",
                re = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
                le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                ue = new RegExp("^" + ie + "*," + ie + "*"),
                de = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                ce = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                pe = new RegExp(re),
                fe = new RegExp("^" + ae + "$"),
                he = {
                    ID: new RegExp("^#(" + oe + ")"),
                    CLASS: new RegExp("^\\.(" + oe + ")"),
                    TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + se),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ve = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                we = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                Te = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                J.apply(G = ee.call(z.childNodes), z.childNodes), G[z.childNodes.length].nodeType
            } catch (Se) {
                J = {
                    apply: G.length ? function(e, t) {
                        Q.apply(e, ee.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, A = t.setDocument = function(e) {
                var t, n = e ? e.ownerDocument || e : z,
                    i = n.defaultView;
                return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, F = n.documentElement, P = !k(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    A()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    A()
                })), x.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = o(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = ge.test(n.getElementsByClassName) && o(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), x.getById = o(function(e) {
                    return F.appendChild(e).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                }), x.getById ? (T.find.ID = function(e, t) {
                    if (typeof t.getElementById !== Y && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(xe, Te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(xe, Te);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }, T.find.CLASS = x.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== Y && P ? t.getElementsByClassName(e) : void 0
                }, L = [], D = [], (x.qsa = ge.test(n.querySelectorAll)) && (o(function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && D.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || D.push(":checked")
                }), o(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
                })), (x.matchesSelector = ge.test(I = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && o(function(e) {
                    x.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), L.push("!=", re)
                }), D = D.length && new RegExp(D.join("|")), L = L.length && new RegExp(L.join("|")), t = ge.test(F.compareDocumentPosition), O = t || ge.test(F.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return _ = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === z && O(z, e) ? -1 : t === n || t.ownerDocument === z && O(z, t) ? 1 : M ? te.call(M, e) - te.call(M, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return _ = !0, 0;
                    var i, o = 0,
                        a = e.parentNode,
                        r = t.parentNode,
                        l = [e],
                        u = [t];
                    if (!a || !r) return e === n ? -1 : t === n ? 1 : a ? -1 : r ? 1 : M ? te.call(M, e) - te.call(M, t) : 0;
                    if (a === r) return s(e, t);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (i = t; i = i.parentNode;) u.unshift(i);
                    for (; l[o] === u[o];) o++;
                    return o ? s(l[o], u[o]) : l[o] === z ? -1 : u[o] === z ? 1 : 0
                }, n) : N
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== N && A(e), n = n.replace(ce, "='$1']"), x.matchesSelector && P && (!L || !L.test(n)) && (!D || !D.test(n))) try {
                    var i = I.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (o) {}
                return t(n, N, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== N && A(e), O(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== N && A(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && Z.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : x.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (_ = !x.detectDuplicates, M = !x.sortStable && e.slice(0), e.sort(U), _) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return M = null, e
            }, S = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += S(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, Te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var a = t.attr(o, e);
                            return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var a = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            r = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, d, c, p, f, h, m = a !== s ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                g = r && t.nodeName.toLowerCase(),
                                y = !l && !r;
                            if (v) {
                                if (a) {
                                    for (; m;) {
                                        for (c = t; c = c[m];)
                                            if (r ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (d = v[H] || (v[H] = {}), u = d[e] || [], f = u[0] === B && u[1], p = u[0] === B && u[2], c = f && v.childNodes[f]; c = ++f && c && c[m] || (p = f = 0) || h.pop();)
                                        if (1 === c.nodeType && ++p && c === t) {
                                            d[e] = [B, f, p];
                                            break
                                        }
                                } else if (y && (u = (t[H] || (t[H] = {}))[e]) && u[0] === B) p = u[1];
                                else
                                    for (;
                                        (c = ++f && c && c[m] || (p = f = 0) || h.pop()) && ((r ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++p || (y && ((c[H] || (c[H] = {}))[e] = [B, p]), c !== t)););
                                return p -= o, p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[H] ? a(n) : a.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = a(e, n), s = o.length; s--;) i = te.call(e, o[s]), e[i] = !(t[i] = o[s])
                        }) : function(e) {
                            return a(e, 0, o)
                        }) : a
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = j(e.replace(le, "$1"));
                        return o[H] ? i(function(e, t, n, i) {
                            for (var a, s = o(e, null, i, []), r = e.length; r--;)(a = s[r]) && (e[r] = !(t[r] = a))
                        }) : function(e, i, a) {
                            return t[0] = e, o(t, null, a, n), !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Te).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === F
                    },
                    focus: function(e) {
                        return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ve.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[w] = r(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[w] = l(w);
            return c.prototype = T.filters = T.pseudos, T.setFilters = new c, C = t.tokenize = function(e, n) {
                var i, o, a, s, r, l, u, d = R[e + " "];
                if (d) return n ? 0 : d.slice(0);
                for (r = e, l = [], u = T.preFilter; r;) {
                    i && !(o = ue.exec(r)) || (o && (r = r.slice(o[0].length) || r), l.push(a = [])), i = !1, (o = de.exec(r)) && (i = o.shift(), a.push({
                        value: i,
                        type: o[0].replace(le, " ")
                    }), r = r.slice(i.length));
                    for (s in T.filter) !(o = he[s].exec(r)) || u[s] && !(o = u[s](o)) || (i = o.shift(), a.push({
                        value: i,
                        type: s,
                        matches: o
                    }), r = r.slice(i.length));
                    if (!i) break
                }
                return n ? r.length : r ? t.error(e) : R(e, l).slice(0)
            }, j = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    a = V[e + " "];
                if (!a) {
                    for (t || (t = C(e)), n = t.length; n--;) a = y(t[n]), a[H] ? i.push(a) : o.push(a);
                    a = V(e, b(o, i)), a.selector = e
                }
                return a
            }, E = t.select = function(e, t, n, i) {
                var o, a, s, r, l, u = "function" == typeof e && e,
                    c = !i && C(e = u.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && x.getById && 9 === t.nodeType && P && T.relative[a[1].type]) {
                        if (t = (T.find.ID(s.matches[0].replace(xe, Te), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : a.length; o-- && (s = a[o], !T.relative[r = s.type]);)
                        if ((l = T.find[r]) && (i = l(s.matches[0].replace(xe, Te), be.test(a[0].type) && d(t.parentNode) || t))) {
                            if (a.splice(o, 1), e = i.length && p(a), !e) return J.apply(n, i), n;
                            break
                        }
                }
                return (u || j(e, c))(i, t, !P, n, be.test(e) && d(t.parentNode) || t), n
            }, x.sortStable = H.split("").sort(U).join("") === H, x.detectDuplicates = !!_, A(), x.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || a("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || a(ne, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
        var de = oe.expr.match.needsContext,
            ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pe = /^.[^:#\[\.,]*$/;
        oe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, oe.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                    for (t = 0; o > t; t++)
                        if (oe.contains(i[t], this)) return !0
                }));
                for (t = 0; o > t; t++) oe.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
            }
        });
        var fe, he = e.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ve = oe.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), ce.test(n[1]) && oe.isPlainObject(t))
                            for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (i = he.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return fe.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = he, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
            };
        ve.prototype = oe.fn, fe = oe(he);
        var ge = /^(?:parents|prev(?:Until|All))/,
            ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oe.extend({
            dir: function(e, t, n) {
                for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), oe.fn.extend({
            has: function(e) {
                var t, n = oe(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (oe.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, a = [], s = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
                return this.pushStack(a.length > 1 ? oe.unique(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), oe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return oe.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return oe.dir(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return oe.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return oe.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return oe.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return oe.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return oe.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return oe.sibling(e.firstChild)
            },
            contents: function(e) {
                return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
            }
        }, function(e, t) {
            oe.fn[e] = function(n, i) {
                var o = oe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[e] || (o = oe.unique(o)), ge.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var be = /\S+/g,
            we = {};
        oe.Callbacks = function(e) {
            e = "string" == typeof e ? we[e] || a(e) : oe.extend({}, e);
            var t, n, i, o, s, r, l = [],
                u = !e.once && [],
                d = function(a) {
                    for (n = e.memory && a, i = !0, s = r || 0, r = 0, o = l.length, t = !0; l && o > s; s++)
                        if (l[s].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, l && (u ? u.length && d(u.shift()) : n ? l = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function a(t) {
                                oe.each(t, function(t, n) {
                                    var i = oe.type(n);
                                    "function" === i ? e.unique && c.has(n) || l.push(n) : n && n.length && "string" !== i && a(n)
                                })
                            }(arguments), t ? o = l.length : n && (r = i, d(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && oe.each(arguments, function(e, n) {
                            for (var i;
                                (i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, s >= i && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], o = 0, this
                    },
                    disable: function() {
                        return l = u = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, n || c.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, n) {
                        return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : d(n)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, oe.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", oe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return oe.Deferred(function(n) {
                                oe.each(t, function(t, a) {
                                    var s = oe.isFunction(e[t]) && e[t];
                                    o[a[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? oe.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, oe.each(t, function(e, a) {
                    var s = a[2],
                        r = a[3];
                    i[a[1]] = s.add, r && s.add(function() {
                        n = r
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[a[0]] = function() {
                        return o[a[0] + "With"](this === o ? i : this, arguments), this
                    }, o[a[0] + "With"] = s.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, o = 0,
                    a = Z.call(arguments),
                    s = a.length,
                    r = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                    l = 1 === r ? e : oe.Deferred(),
                    u = function(e, n, i) {
                        return function(o) {
                            n[e] = this, i[e] = arguments.length > 1 ? Z.call(arguments) : o, i === t ? l.notifyWith(n, i) : --r || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) a[o] && oe.isFunction(a[o].promise) ? a[o].promise().done(u(o, i, a)).fail(l.reject).progress(u(o, n, t)) : --r;
                return r || l.resolveWith(i, a), l.promise()
            }
        });
        var xe;
        oe.fn.ready = function(e) {
            return oe.ready.promise().done(e), this
        }, oe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? oe.readyWait++ : oe.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                    if (!he.body) return setTimeout(oe.ready);
                    oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (xe.resolveWith(he, [oe]), oe.fn.triggerHandler && (oe(he).triggerHandler("ready"), oe(he).off("ready")))
                }
            }
        }), oe.ready.promise = function(t) {
            if (!xe)
                if (xe = oe.Deferred(), "complete" === he.readyState) setTimeout(oe.ready);
                else if (he.addEventListener) he.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1);
            else {
                he.attachEvent("onreadystatechange", r), e.attachEvent("onload", r);
                var n = !1;
                try {
                    n = null == e.frameElement && he.documentElement
                } catch (i) {}
                n && n.doScroll && ! function o() {
                    if (!oe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        s(), oe.ready()
                    }
                }()
            }
            return xe.promise(t)
        };
        var Te, Se = "undefined";
        for (Te in oe(ne)) break;
        ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, oe(function() {
                var e, t, n, i;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = he.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        ne.deleteExpando = !1
                    }
                }
                e = null
            }(), oe.acceptData = function(e) {
                var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            };
        var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ce = /([A-Z])/g;
        oe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !u(e)
            },
            data: function(e, t, n) {
                return d(e, t, n)
            },
            removeData: function(e, t) {
                return c(e, t)
            },
            _data: function(e, t, n) {
                return d(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return c(e, t, !0)
            }
        }), oe.fn.extend({
            data: function(e, t) {
                var n, i, o, a = this[0],
                    s = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (o = oe.data(a), 1 === a.nodeType && !oe._data(a, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(a, i, o[i])));
                        oe._data(a, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    oe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    oe.data(this, e, t)
                }) : a ? l(a, e, oe.data(a, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    oe.removeData(this, e)
                })
            }
        }), oe.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = oe.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    a = oe._queueHooks(e, t),
                    s = function() {
                        oe.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete a.stop, o.call(e, s, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return oe._data(e, n) || oe._data(e, n, {
                    empty: oe.Callbacks("once memory").add(function() {
                        oe._removeData(e, t + "queue"), oe._removeData(e, n)
                    })
                })
            }
        }), oe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = oe.queue(this, e, t);
                    oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    oe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = oe.Deferred(),
                    a = this,
                    s = this.length,
                    r = function() {
                        --i || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = oe._data(a[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(r));
                return r(), o.promise(t)
            }
        });
        var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ee = ["Top", "Right", "Bottom", "Left"],
            $e = function(e, t) {
                return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
            },
            Me = oe.access = function(e, t, n, i, o, a, s) {
                var r = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === oe.type(n)) {
                    o = !0;
                    for (r in n) oe.access(e, t, r, n[r], !0, a, s)
                } else if (void 0 !== i && (o = !0, oe.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(oe(e), n)
                    })), t))
                    for (; l > r; r++) t(e[r], n, s ? i : i.call(e[r], r, t(e[r], n)));
                return o ? e : u ? t.call(e) : l ? t(e[0], n) : a
            },
            _e = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = he.createElement("input"),
                t = he.createElement("div"),
                n = he.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    ne.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (i) {
                    ne.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, n, i = he.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Ae = /^(?:input|select|textarea)$/i,
            Ne = /^key/,
            Fe = /^(?:mouse|pointer|contextmenu)|click/,
            Pe = /^(?:focusinfocus|focusoutblur)$/,
            De = /^([^.]*)(?:\.(.+)|)$/;
        oe.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var a, s, r, l, u, d, c, p, f, h, m, v = oe._data(e);
                if (v) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                            return typeof oe === Se || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = e), t = (t || "").match(be) || [""], r = t.length; r--;) a = De.exec(t[r]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f && (u = oe.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = oe.event.special[f] || {}, c = oe.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && oe.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l), (p = s[f]) || (p = s[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, h, d) !== !1 || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), oe.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, o) {
                var a, s, r, l, u, d, c, p, f, h, m, v = oe.hasData(e) && oe._data(e);
                if (v && (d = v.events)) {
                    for (t = (t || "").match(be) || [""], u = t.length; u--;)
                        if (r = De.exec(t[u]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f) {
                            for (c = oe.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, p = d[f] || [], r = r[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = p.length; a--;) s = p[a], !o && m !== s.origType || n && n.guid !== s.guid || r && !r.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(a, 1), s.selector && p.delegateCount--, c.remove && c.remove.call(e, s));
                            l && !p.length && (c.teardown && c.teardown.call(e, h, v.handle) !== !1 || oe.removeEvent(e, f, v.handle), delete d[f])
                        } else
                            for (f in d) oe.event.remove(e, f + t[u], n, i, !0);
                    oe.isEmptyObject(d) && (delete v.handle, oe._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, o) {
                var a, s, r, l, u, d, c, p = [i || he],
                    f = te.call(t, "type") ? t.type : t,
                    h = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (r = d = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), u = oe.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!o && !u.noBubble && !oe.isWindow(i)) {
                        for (l = u.delegateType || f, Pe.test(l + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), d = r;
                        d === (i.ownerDocument || he) && p.push(d.defaultView || d.parentWindow || e)
                    }
                    for (c = 0;
                        (r = p[c++]) && !t.isPropagationStopped();) t.type = c > 1 ? l : u.bindType || f, a = (oe._data(r, "events") || {})[t.type] && oe._data(r, "handle"), a && a.apply(r, n), a = s && r[s], a && a.apply && oe.acceptData(r) && (t.result = a.apply(r, n), t.result === !1 && t.preventDefault());
                    if (t.type = f, !o && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && oe.acceptData(i) && s && i[f] && !oe.isWindow(i)) {
                        d = i[s], d && (i[s] = null), oe.event.triggered = f;
                        try {
                            i[f]()
                        } catch (m) {}
                        oe.event.triggered = void 0, d && (i[s] = d)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = oe.event.fix(e);
                var t, n, i, o, a, s = [],
                    r = Z.call(arguments),
                    l = (oe._data(this, "events") || {})[e.type] || [],
                    u = oe.event.special[e.type] || {};
                if (r[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = oe.event.handlers.call(this, e, l), t = 0;
                        (o = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, a = 0;
                            (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, r), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, a, s = [],
                    r = t.delegateCount,
                    l = e.target;
                if (r && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], a = 0; r > a; a++) i = t[a], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return r < t.length && s.push({
                    elem: this,
                    handlers: t.slice(r)
                }), s
            },
            fix: function(e) {
                if (e[oe.expando]) return e;
                var t, n, i, o = e.type,
                    a = e,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Fe.test(o) ? this.mouseHooks : Ne.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
                return e.target || (e.target = a.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, o, a = t.button,
                        s = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== h() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return oe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var o = oe.extend(new oe.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, oe.removeEvent = he.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Se && (e[i] = null), e.detachEvent(i, n))
        }, oe.Event = function(e, t) {
            return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
        }, oe.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            oe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        a = e.handleObj;
                    return o && (o === i || oe.contains(i, o)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ne.submitBubbles || (oe.event.special.submit = {
            setup: function() {
                return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                    n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), oe._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (oe.event.special.change = {
            setup: function() {
                return Ae.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (oe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), oe.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
                })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ae.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                    }), oe._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return oe.event.remove(this, "._change"), !Ae.test(this.nodeName)
            }
        }), ne.focusinBubbles || oe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                oe.event.simulate(t, e.target, oe.event.fix(e), !0)
            };
            oe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = oe._data(i, t);
                    o || i.addEventListener(e, n, !0), oe._data(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = oe._data(i, t) - 1;
                    o ? oe._data(i, t, o) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
                }
            }
        }), oe.fn.extend({
            on: function(e, t, n, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], o);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(e) {
                    return oe().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = oe.guid++)), this.each(function() {
                    oe.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                    oe.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    oe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? oe.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ie = / jQuery\d+="(?:null|\d+)"/g,
            Oe = new RegExp("<(?:" + Le + ")[\\s/>]", "i"),
            He = /^\s+/,
            ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Be = /<([\w:]+)/,
            qe = /<tbody/i,
            We = /<|&#?\w+;/,
            Re = /<(?:script|style|link)/i,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ue = /^$|\/(?:java|ecma)script/i,
            Ye = /^true\/(.*)/,
            Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Ge = m(he),
            Ke = Ge.appendChild(he.createElement("div"));
        Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, oe.extend({
            clone: function(e, t, n) {
                var i, o, a, s, r, l = oe.contains(e.ownerDocument, e);
                if (ne.html5Clone || oe.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(a = Ke.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                    for (i = v(a), r = v(e), s = 0; null != (o = r[s]); ++s) i[s] && S(o, i[s]);
                if (t)
                    if (n)
                        for (r = r || v(e), i = i || v(a), s = 0; null != (o = r[s]); s++) T(o, i[s]);
                    else T(e, a);
                return i = v(a, "script"), i.length > 0 && x(i, !l && v(e, "script")), i = r = o = null, a
            },
            buildFragment: function(e, t, n, i) {
                for (var o, a, s, r, l, u, d, c = e.length, p = m(t), f = [], h = 0; c > h; h++)
                    if (a = e[h], a || 0 === a)
                        if ("object" === oe.type(a)) oe.merge(f, a.nodeType ? [a] : a);
                        else if (We.test(a)) {
                    for (r = r || p.appendChild(t.createElement("div")), l = (Be.exec(a) || ["", ""])[1].toLowerCase(), d = Ze[l] || Ze._default, r.innerHTML = d[1] + a.replace(ze, "<$1></$2>") + d[2], o = d[0]; o--;) r = r.lastChild;
                    if (!ne.leadingWhitespace && He.test(a) && f.push(t.createTextNode(He.exec(a)[0])), !ne.tbody)
                        for (a = "table" !== l || qe.test(a) ? "<table>" !== d[1] || qe.test(a) ? 0 : r : r.firstChild, o = a && a.childNodes.length; o--;) oe.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
                    for (oe.merge(f, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
                    r = p.lastChild
                } else f.push(t.createTextNode(a));
                for (r && p.removeChild(r), ne.appendChecked || oe.grep(v(f, "input"), g), h = 0; a = f[h++];)
                    if ((!i || -1 === oe.inArray(a, i)) && (s = oe.contains(a.ownerDocument, a), r = v(p.appendChild(a), "script"), s && x(r), n))
                        for (o = 0; a = r[o++];) Ue.test(a.type || "") && n.push(a);
                return r = null, p
            },
            cleanData: function(e, t) {
                for (var n, i, o, a, s = 0, r = oe.expando, l = oe.cache, u = ne.deleteExpando, d = oe.event.special; null != (n = e[s]); s++)
                    if ((t || oe.acceptData(n)) && (o = n[r], a = o && l[o])) {
                        if (a.events)
                            for (i in a.events) d[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, a.handle);
                        l[o] && (delete l[o], u ? delete n[r] : typeof n.removeAttribute !== Se ? n.removeAttribute(r) : n[r] = null, X.push(o))
                    }
            }
        }), oe.fn.extend({
            text: function(e) {
                return Me(this, function(e) {
                    return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? oe.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || oe.cleanData(v(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && x(v(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && oe.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && oe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return oe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Me(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ie, "") : void 0;
                    if ("string" == typeof e && !Re.test(e) && (ne.htmlSerialize || !Oe.test(e)) && (ne.leadingWhitespace || !He.test(e)) && !Ze[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(ze, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, oe.cleanData(v(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = G.apply([], e);
                var n, i, o, a, s, r, l = 0,
                    u = this.length,
                    d = this,
                    c = u - 1,
                    p = e[0],
                    f = oe.isFunction(p);
                if (f || u > 1 && "string" == typeof p && !ne.checkClone && Ve.test(p)) return this.each(function(n) {
                    var i = d.eq(n);
                    f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
                });
                if (u && (r = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = r.firstChild, 1 === r.childNodes.length && (r = n), n)) {
                    for (a = oe.map(v(r, "script"), b), o = a.length; u > l; l++) i = r, l !== c && (i = oe.clone(i, !0, !0), o && oe.merge(a, v(i, "script"))), t.call(this[l], i, l);
                    if (o)
                        for (s = a[a.length - 1].ownerDocument, oe.map(a, w), l = 0; o > l; l++) i = a[l], Ue.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(s, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Xe, "")));
                    r = n = null
                }
                return this
            }
        }), oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            oe.fn[e] = function(e) {
                for (var n, i = 0, o = [], a = oe(e), s = a.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), oe(a[i])[t](n), K.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Qe, Je = {};
        ! function() {
            var e;
            ne.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var et, tt, nt = /^margin/,
            it = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
            ot = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function(e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            }, tt = function(e, t, n) {
                var i, o, a, s, r = e.style;
                return n = n || et(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), it.test(s) && nt.test(t) && (i = r.width, o = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = s, s = n.width, r.width = i, r.minWidth = o, r.maxWidth = a)), void 0 === s ? s : s + ""
            }) : he.documentElement.currentStyle && (et = function(e) {
                return e.currentStyle
            }, tt = function(e, t, n) {
                var i, o, a, s, r = e.style;
                return n = n || et(e), s = n ? n[t] : void 0, null == s && r && r[t] && (s = r[t]), it.test(s) && !ot.test(t) && (i = r.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : s, s = r.pixelLeft + "px", r.left = i, a && (o.left = a)), void 0 === s ? s : s + "" || "auto"
            }),
            function() {
                function t() {
                    var t, n, i, o;
                    n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = s = !1, l = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || {
                            width: "4px"
                        }).width, o = t.appendChild(he.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                        r = 0 === o[0].offsetHeight, r && (o[0].style.display = "", o[1].style.display = "none", r = 0 === o[0].offsetHeight), n.removeChild(i))
                }
                var n, i, o, a, s, r, l;
                n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {
                    reliableHiddenOffsets: function() {
                        return null == r && t(), r
                    },
                    boxSizingReliable: function() {
                        return null == s && t(), s
                    },
                    pixelPosition: function() {
                        return null == a && t(), a
                    },
                    reliableMarginRight: function() {
                        return null == l && t(), l
                    }
                }))
            }(), oe.swap = function(e, t, n, i) {
                var o, a, s = {};
                for (a in t) s[a] = e.style[a], e.style[a] = t[a];
                o = n.apply(e, i || []);
                for (a in t) e.style[a] = s[a];
                return o
            };
        var at = /alpha\([^)]*\)/i,
            st = /opacity\s*=\s*([^)]*)/,
            rt = /^(none|table(?!-c[ea]).+)/,
            lt = new RegExp("^(" + je + ")(.*)$", "i"),
            ut = new RegExp("^([+-])=(" + je + ")", "i"),
            dt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ct = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            pt = ["Webkit", "O", "Moz", "ms"];
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = tt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ne.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, r = oe.camelCase(t),
                        l = e.style;
                    if (t = oe.cssProps[r] || (oe.cssProps[r] = E(l, r)), s = oe.cssHooks[t] || oe.cssHooks[r], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                    if (a = typeof n, "string" === a && (o = ut.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), a = "number"), null != n && n === n && ("number" !== a || oe.cssNumber[r] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                        l[t] = n
                    } catch (u) {}
                }
            },
            css: function(e, t, n, i) {
                var o, a, s, r = oe.camelCase(t);
                return t = oe.cssProps[r] || (oe.cssProps[r] = E(e.style, r)), s = oe.cssHooks[t] || oe.cssHooks[r], s && "get" in s && (a = s.get(e, !0, n)), void 0 === a && (a = tt(e, t, i)), "normal" === a && t in ct && (a = ct[t]), "" === n || n ? (o = parseFloat(a), n === !0 || oe.isNumeric(o) ? o || 0 : a) : a
            }
        }), oe.each(["height", "width"], function(e, t) {
            oe.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? rt.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, dt, function() {
                        return A(e, t, i)
                    }) : A(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var o = i && et(e);
                    return M(e, n, i ? _(e, t, i, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ne.opacity || (oe.cssHooks.opacity = {
            get: function(e, t) {
                return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    a = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(a.replace(at, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = at.test(a) ? a.replace(at, o) : a + " " + o)
            }
        }), oe.cssHooks.marginRight = j(ne.reliableMarginRight, function(e, t) {
            return t ? oe.swap(e, {
                display: "inline-block"
            }, tt, [e, "marginRight"]) : void 0
        }), oe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            oe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Ee[i] + t] = a[i] || a[i - 2] || a[0];
                    return o
                }
            }, nt.test(e) || (oe.cssHooks[e + t].set = M)
        }), oe.fn.extend({
            css: function(e, t) {
                return Me(this, function(e, t, n) {
                    var i, o, a = {},
                        s = 0;
                    if (oe.isArray(t)) {
                        for (i = et(e), o = t.length; o > s; s++) a[t[s]] = oe.css(e, t[s], !1, i);
                        return a
                    }
                    return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return $(this, !0)
            },
            hide: function() {
                return $(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    $e(this) ? oe(this).show() : oe(this).hide()
                })
            }
        }), oe.Tween = N, N.prototype = {
            constructor: N,
            init: function(e, t, n, i, o, a) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (oe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = N.propHooks[this.prop];
                return e && e.get ? e.get(this) : N.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = N.propHooks[this.prop];
                return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
            }
        }, N.prototype.init.prototype = N.prototype, N.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, oe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, oe.fx = N.prototype.init, oe.fx.step = {};
        var ft, ht, mt = /^(?:toggle|show|hide)$/,
            vt = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
            gt = /queueHooks$/,
            yt = [L],
            bt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        o = vt.exec(t),
                        a = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                        s = (oe.cssNumber[e] || "px" !== a && +i) && vt.exec(oe.css(n.elem, e)),
                        r = 1,
                        l = 20;
                    if (s && s[3] !== a) {
                        a = a || s[3], o = o || [], s = +i || 1;
                        do r = r || ".5", s /= r, oe.style(n.elem, e, s + a); while (r !== (r = n.cur() / i) && 1 !== r && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = a, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        oe.Animation = oe.extend(O, {
                tweener: function(e, t) {
                    oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, o = e.length; o > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? yt.unshift(e) : yt.push(e)
                }
            }), oe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? oe.extend({}, e) : {
                    complete: n || !n && t || oe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !oe.isFunction(t) && t
                };
                return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
                }, i
            }, oe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter($e).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = oe.isEmptyObject(e),
                        a = oe.speed(t, n, i),
                        s = function() {
                            var t = O(this, oe.extend({}, e), a);
                            (o || oe._data(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, o || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            a = oe.timers,
                            s = oe._data(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && gt.test(o) && i(s[o]);
                        for (o = a.length; o--;) a[o].elem !== this || null != e && a[o].queue !== e || (a[o].anim.stop(n), t = !1, a.splice(o, 1));
                        !t && n || oe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = oe._data(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            a = oe.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), oe.each(["toggle", "show", "hide"], function(e, t) {
                var n = oe.fn[t];
                oe.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, o)
                }
            }), oe.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                oe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), oe.timers = [], oe.fx.tick = function() {
                var e, t = oe.timers,
                    n = 0;
                for (ft = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || oe.fx.stop(), ft = void 0
            }, oe.fx.timer = function(e) {
                oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
            }, oe.fx.interval = 13, oe.fx.start = function() {
                ht || (ht = setInterval(oe.fx.tick, oe.fx.interval))
            }, oe.fx.stop = function() {
                clearInterval(ht), ht = null
            }, oe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, oe.fn.delay = function(e, t) {
                return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t, n, i, o;
                t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), o = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = o.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
            }();
        var wt = /\r/g;
        oe.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0]; {
                    if (arguments.length) return i = oe.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
                }
            }
        }), oe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = oe.find.attr(e, "value");
                        return null != t ? t : oe.trim(oe.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, a = "select-one" === e.type || 0 > o, s = a ? null : [], r = a ? o + 1 : i.length, l = 0 > o ? r : a ? o : 0; r > l; l++)
                            if (n = i[l], (n.selected || l === o) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = oe(n).val(), a) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, a = oe.makeArray(t), s = o.length; s--;)
                            if (i = o[s], oe.inArray(oe.valHooks.option.get(i), a) >= 0) try {
                                i.selected = n = !0
                            } catch (r) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), oe.each(["radio", "checkbox"], function() {
            oe.valHooks[this] = {
                set: function(e, t) {
                    return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
                }
            }, ne.checkOn || (oe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var xt, Tt, St = oe.expr.attrHandle,
            kt = /^(?:checked|selected)$/i,
            Ct = ne.getSetAttribute,
            jt = ne.input;
        oe.fn.extend({
            attr: function(e, t) {
                return Me(this, oe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    oe.removeAttr(this, e)
                })
            }
        }), oe.extend({
            attr: function(e, t, n) {
                var i, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Se ? oe.prop(e, t, n) : (1 === a && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Tt : xt)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    a = t && t.match(be);
                if (a && 1 === e.nodeType)
                    for (; n = a[o++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? jt && Ct || !kt.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(Ct ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), Tt = {
            set: function(e, t, n) {
                return t === !1 ? oe.removeAttr(e, n) : jt && Ct || !kt.test(n) ? e.setAttribute(!Ct && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = St[t] || oe.find.attr;
            St[t] = jt && Ct || !kt.test(t) ? function(e, t, i) {
                var o, a;
                return i || (a = St[t], St[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, St[t] = a), o
            } : function(e, t, n) {
                return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), jt && Ct || (oe.attrHooks.value = {
            set: function(e, t, n) {
                return oe.nodeName(e, "input") ? void(e.defaultValue = t) : xt && xt.set(e, t, n)
            }
        }), Ct || (xt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, St.id = St.name = St.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, oe.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: xt.set
        }, oe.attrHooks.contenteditable = {
            set: function(e, t, n) {
                xt.set(e, "" === t ? !1 : t, n)
            }
        }, oe.each(["width", "height"], function(e, t) {
            oe.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ne.style || (oe.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Et = /^(?:input|select|textarea|button|object)$/i,
            $t = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function(e, t) {
                return Me(this, oe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = oe.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), oe.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !oe.isXMLDoc(e), a && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = oe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Et.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || oe.each(["href", "src"], function(e, t) {
            oe.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ne.optSelected || (oe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            oe.propFix[this.toLowerCase()] = this
        }), ne.enctype || (oe.propFix.enctype = "encoding");
        var Mt = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function(e) {
                var t, n, i, o, a, s, r = 0,
                    l = this.length,
                    u = "string" == typeof e && e;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(be) || []; l > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : " ")) {
                            for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = oe.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, a, s, r = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof e && e;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(be) || []; l > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : "")) {
                            for (a = 0; o = t[a++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            s = e ? oe.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                    oe(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, o = oe(this), a = e.match(be) || []; t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else n !== Se && "boolean" !== n || (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Mt, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            oe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), oe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var _t = oe.now(),
            At = /\?/,
            Nt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        oe.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                o = oe.trim(t + "");
            return o && !oe.trim(o.replace(Nt, function(e, t, o, a) {
                return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !a - !o, "")
            })) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
        }, oe.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (o) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
        };
        var Ft, Pt, Dt = /#.*$/,
            Lt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ht = /^(?:GET|HEAD)$/,
            zt = /^\/\//,
            Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            qt = {},
            Wt = {},
            Rt = "*/".concat("*");
        try {
            Pt = location.href
        } catch (Vt) {
            Pt = he.createElement("a"), Pt.href = "", Pt = Pt.href
        }
        Ft = Bt.exec(Pt.toLowerCase()) || [], oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Pt,
                type: "GET",
                isLocal: Ot.test(Ft[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
            },
            ajaxPrefilter: H(qt),
            ajaxTransport: H(Wt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var o, d, g, y, w, T = t;
                    2 !== b && (b = 2, r && clearTimeout(r), u = void 0, s = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = q(c, x, n)), y = W(c, y, x, o), o ? (c.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[a] = w), w = x.getResponseHeader("etag"), w && (oe.etag[a] = w)), 204 === e || "HEAD" === c.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, d = y.data, g = y.error, o = !g)) : (g = T, !e && T || (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || T) + "", o ? h.resolveWith(p, [d, T, x]) : h.rejectWith(p, [x, T, g]), x.statusCode(v), v = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, c, o ? d : g]), m.fireWith(p, [x, T]), l && (f.trigger("ajaxComplete", [x, c]), --oe.active || oe.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, a, s, r, l, u, d, c = oe.ajaxSetup({}, t),
                    p = c.context || c,
                    f = c.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
                    h = oe.Deferred(),
                    m = oe.Callbacks("once memory"),
                    v = c.statusCode || {},
                    g = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!d)
                                    for (d = {}; t = It.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, g[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (c.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else x.always(e[x.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return u && u.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || Pt) + "").replace(Dt, "").replace(zt, Ft[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = oe.trim(c.dataType || "*").toLowerCase().match(be) || [""], null == c.crossDomain && (i = Bt.exec(c.url.toLowerCase()), c.crossDomain = !(!i || i[1] === Ft[1] && i[2] === Ft[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ft[3] || ("http:" === Ft[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = oe.param(c.data, c.traditional)), z(qt, c, t, x), 2 === b) return x;
                l = c.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Ht.test(c.type), a = c.url, c.hasContent || (c.data && (a = c.url += (At.test(a) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Lt.test(a) ? a.replace(Lt, "$1_=" + _t++) : a + (At.test(a) ? "&" : "?") + "_=" + _t++)), c.ifModified && (oe.lastModified[a] && x.setRequestHeader("If-Modified-Since", oe.lastModified[a]), oe.etag[a] && x.setRequestHeader("If-None-Match", oe.etag[a])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : c.accepts["*"]);
                for (o in c.headers) x.setRequestHeader(o, c.headers[o]);
                if (c.beforeSend && (c.beforeSend.call(p, x, c) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[o](c[o]);
                if (u = z(Wt, c, t, x)) {
                    x.readyState = 1, l && f.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (r = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, u.send(g, n)
                    } catch (T) {
                        if (!(2 > b)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(e, t, n) {
                return oe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return oe.get(e, void 0, t, "script")
            }
        }), oe.each(["get", "post"], function(e, t) {
            oe[t] = function(e, n, i, o) {
                return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            oe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), oe._evalUrl = function(e) {
            return oe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, oe.fn.extend({
            wrapAll: function(e) {
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return oe.isFunction(e) ? this.each(function(t) {
                    oe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = oe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = oe.isFunction(e);
                return this.each(function(n) {
                    oe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), oe.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
        }, oe.expr.filters.visible = function(e) {
            return !oe.expr.filters.hidden(e)
        };
        var Ut = /%20/g,
            Yt = /\[\]$/,
            Xt = /\r?\n/g,
            Zt = /^(?:submit|button|image|reset|file)$/i,
            Gt = /^(?:input|select|textarea|keygen)/i;
        oe.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) R(n, e[n], t, o);
            return i.join("&").replace(Ut, "+")
        }, oe.fn.extend({
            serialize: function() {
                return oe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = oe.prop(this, "elements");
                    return e ? oe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !oe(this).is(":disabled") && Gt.test(this.nodeName) && !Zt.test(e) && (this.checked || !_e.test(e))
                }).map(function(e, t) {
                    var n = oe(this).val();
                    return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Xt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Xt, "\r\n")
                    }
                }).get()
            }
        }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || U()
        } : V;
        var Kt = 0,
            Qt = {},
            Jt = oe.ajaxSettings.xhr();
        e.ActiveXObject && oe(e).on("unload", function() {
            for (var e in Qt) Qt[e](void 0, !0)
        }), ne.cors = !!Jt && "withCredentials" in Jt, Jt = ne.ajax = !!Jt, Jt && oe.ajaxTransport(function(e) {
            if (!e.crossDomain || ne.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var o, a = e.xhr(),
                            s = ++Kt;
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) a[o] = e.xhrFields[o];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && a.setRequestHeader(o, n[o] + "");
                        a.send(e.hasContent && e.data || null), t = function(n, o) {
                            var r, l, u;
                            if (t && (o || 4 === a.readyState))
                                if (delete Qt[s], t = void 0, a.onreadystatechange = oe.noop, o) 4 !== a.readyState && a.abort();
                                else {
                                    u = {}, r = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (d) {
                                        l = ""
                                    }
                                    r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                                }
                            u && i(r, l, u, a.getAllResponseHeaders())
                        }, e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = Qt[s] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), oe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return oe.globalEval(e), e
                }
            }
        }), oe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), oe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = he.head || oe("head")[0] || he.documentElement;
                return {
                    send: function(i, o) {
                        t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var en = [],
            tn = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = en.pop() || oe.expando + "_" + _t++;
                return this[e] = !0, e
            }
        }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var o, a, s, r = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
            return r || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(tn, "$1" + o) : t.jsonp !== !1 && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return s || oe.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", a = e[o], e[o] = function() {
                s = arguments
            }, i.always(function() {
                e[o] = a, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), s && oe.isFunction(a) && a(s[0]), s = a = void 0
            }), "script") : void 0
        }), oe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || he;
            var i = ce.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
        };
        var nn = oe.fn.load;
        oe.fn.load = function(e, t, n) {
            if ("string" != typeof e && nn) return nn.apply(this, arguments);
            var i, o, a, s = this,
                r = e.indexOf(" ");
            return r >= 0 && (i = oe.trim(e.slice(r, e.length)), e = e.slice(0, r)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), s.length > 0 && oe.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                s.each(n, o || [e.responseText, t, e])
            }), this
        }, oe.expr.filters.animated = function(e) {
            return oe.grep(oe.timers, function(t) {
                return e === t.elem
            }).length
        };
        var on = e.document.documentElement;
        oe.offset = {
            setOffset: function(e, t, n) {
                var i, o, a, s, r, l, u, d = oe.css(e, "position"),
                    c = oe(e),
                    p = {};
                "static" === d && (e.style.position = "relative"), r = c.offset(), a = oe.css(e, "top"), l = oe.css(e, "left"), u = ("absolute" === d || "fixed" === d) && oe.inArray("auto", [a, l]) > -1, u ? (i = c.position(), s = i.top, o = i.left) : (s = parseFloat(a) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, r)), null != t.top && (p.top = t.top - r.top + s), null != t.left && (p.left = t.left - r.left + o), "using" in t ? t.using.call(e, p) : c.css(p)
            }
        }, oe.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    a = o && o.ownerDocument;
                if (a) return t = a.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== Se && (i = o.getBoundingClientRect()), n = Y(a), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - oe.css(i, "marginTop", !0),
                        left: t.left - n.left - oe.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || on; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                    return e || on
                })
            }
        }), oe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            oe.fn[e] = function(i) {
                return Me(this, function(e, i, o) {
                    var a = Y(e);
                    return void 0 === o ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(n ? oe(a).scrollLeft() : o, n ? o : oe(a).scrollTop()) : e[i] = o)
                }, e, i, arguments.length, null)
            }
        }), oe.each(["top", "left"], function(e, t) {
            oe.cssHooks[t] = j(ne.pixelPosition, function(e, n) {
                return n ? (n = tt(e, t), it.test(n) ? oe(e).position()[t] + "px" : n) : void 0
            })
        }), oe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            oe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                oe.fn[i] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Me(this, function(t, n, i) {
                        var o;
                        return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                    }, t, a ? i : void 0, a, null)
                }
            })
        }), oe.fn.size = function() {
            return this.length
        }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return oe
        });
        var an = e.jQuery,
            sn = e.$;
        return oe.noConflict = function(t) {
            return e.$ === oe && (e.$ = sn), t && e.jQuery === oe && (e.jQuery = an), oe
        }, typeof t === Se && (e.jQuery = e.$ = oe), oe
    }), function(e, t) {
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(t) {
                var n = e('meta[name="csrf-token"]').attr("content");
                n && t.setRequestHeader("X-CSRF-Token", n)
            },
            refreshCSRFTokens: function() {
                var t = e("meta[name=csrf-token]").attr("content"),
                    n = e("meta[name=csrf-param]").attr("content");
                e('form input[name="' + n + '"]').val(t)
            },
            fire: function(t, n, i) {
                var o = e.Event(n);
                return t.trigger(o, i), o.result !== !1;
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            handleRemote: function(i) {
                var o, a, s, r, l, u;
                if (n.fire(i, "ajax:before")) {
                    if (r = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        o = i.attr("method"), a = i.attr("action"), s = i.serializeArray();
                        var d = i.data("ujs:submit-button");
                        d && (s.push(d), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (o = i.data("method"), a = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", a = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (o = i.data("method"), a = n.href(i), s = i.data("params") || null);
                    return u = {
                        type: o || "GET",
                        data: s,
                        dataType: l,
                        beforeSend: function(e, o) {
                            return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [e, o]) ? void i.trigger("ajax:send", e) : !1
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(a)
                    }, r && (u.xhrFields = {
                        withCredentials: r
                    }), a && (u.url = a), n.ajax(u)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var o = n.href(i),
                    a = i.data("method"),
                    s = i.attr("target"),
                    r = e("meta[name=csrf-token]").attr("content"),
                    l = e("meta[name=csrf-param]").attr("content"),
                    u = e('<form method="post" action="' + o + '"></form>'),
                    d = '<input name="_method" value="' + a + '" type="hidden" />';
                l === t || r === t || n.isCrossDomain(o) || (d += '<input name="' + l + '" value="' + r + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(d).appendTo("body"), u.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var t = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    o = !1;
                return i ? (n.fire(e, "confirm") && (o = n.confirm(i), t = n.fire(e, "confirm:complete", [o])), o && t) : !0
            },
            blankInputs: function(t, n, i) {
                var o, a, s = e(),
                    r = n || "input,textarea",
                    l = t.find(r);
                return l.each(function() {
                    if (o = e(this), a = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !a == !i) {
                        if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                        s = s.add(o)
                    }
                }), s.length ? s : !1
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                })
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(e(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
            n.enableFormElement(e(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
            var o = e(this),
                a = o.data("method"),
                s = o.data("params"),
                r = i.metaKey || i.ctrlKey;
            if (!n.allowAction(o)) return n.stopEverything(i);
            if (!r && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== t) {
                if (r && (!a || "GET" === a) && !s) return !0;
                var l = n.handleRemote(o);
                return l === !1 ? n.enableElement(o) : l.error(function() {
                    n.enableElement(o)
                }), !1
            }
            return o.data("method") ? (n.handleMethod(o), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var o = n.handleRemote(i);
            return o === !1 ? n.enableFormElement(i) : o.error(function() {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
            var i = e(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var o, a, s = e(this),
                r = s.data("remote") !== t;
            if (!n.allowAction(s)) return n.stopEverything(i);
            if (s.attr("novalidate") == t && (o = n.blankInputs(s, n.requiredInputSelector), o && n.fire(s, "ajax:aborted:required", [o]))) return n.stopEverything(i);
            if (r) {
                if (a = n.nonBlankInputs(s, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(s)
                    }, 13);
                    var l = n.fire(s, "ajax:aborted:file", [a]);
                    return l || setTimeout(function() {
                        n.enableFormElements(s)
                    }, 13), l
                }
                return n.handleRemote(s), !1
            }
            setTimeout(function() {
                n.disableFormElements(s)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var o = i.attr("name"),
                a = o ? {
                    name: o,
                    value: i.val()
                } : null;
            i.closest("form").data("ujs:submit-button", a)
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
            this == t.target && n.disableFormElements(e(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
            this == t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        "use strict";
        if (null == this) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (0 === n) return -1;
        var i = 0;
        if (arguments.length > 1 && (i = Number(arguments[1]), i != i ? i = 0 : 0 != i && i != 1 / 0 && i != -(1 / 0) && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n) return -1;
        for (var o = i >= 0 ? i : Math.max(n - Math.abs(i), 0); n > o; o++)
            if (o in t && t[o] === e) return o;
        return -1
    }), Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
        var n, i;
        if (null == this) throw new TypeError("this is null or not defined");
        var o = Object(this),
            a = o.length >>> 0;
        if ("[object Function]" !== {}.toString.call(e)) throw new TypeError(e + " is not a function");
        for (t && (n = t), i = 0; a > i;) {
            var s;
            Object.prototype.hasOwnProperty.call(o, i) && (s = o[i], e.call(n, s, i, o)), i++
        }
    }), Array.prototype.some || (Array.prototype.some = function(e) {
        "use strict";
        if (void 0 === this || null === this) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if ("function" != typeof e) throw new TypeError;
        for (var i = arguments.length >= 2 ? arguments[1] : void 0, o = 0; n > o; o++)
            if (o in t && e.call(i, t[o], o, t)) return !0;
        return !1
    }), function(e) {
        if ("undefined" != typeof module && module.exports) module.exports = e(this);
        else if ("function" == typeof define && define.amd) {
            var t = this;
            define("i18n", function() {
                return e(t)
            })
        } else this.I18n = e(this)
    }(function(e) {
        "use strict";
        var t = e && e.I18n || {},
            n = Array.prototype.slice,
            i = function(e) {
                return ("0" + e.toString()).substr(-2)
            },
            o = function(e, t) {
                return d("round", e, -t).toFixed(t)
            },
            a = function(e) {
                var t = typeof e;
                return "function" === t || "object" === t && !!e
            },
            s = function(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
            },
            r = function(e) {
                return "string" == typeof value || "[object String]" === Object.prototype.toString.call(e)
            },
            l = function(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            },
            u = function(e) {
                return e === !0 || e === !1
            },
            d = function(e, t, n) {
                return "undefined" == typeof n || 0 === +n ? Math[e](t) : (t = +t, n = +n, isNaN(t) || "number" != typeof n || n % 1 !== 0 ? NaN : (t = t.toString().split("e"), t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - n : -n))), t = t.toString().split("e"), +(t[0] + "e" + (t[1] ? +t[1] + n : n))))
            },
            c = function(e, t) {
                var n, i;
                for (n in t) t.hasOwnProperty(n) && (i = t[n], r(i) || l(i) || u(i) ? e[n] = i : (null == e[n] && (e[n] = {}), c(e[n], i)));
                return e
            },
            p = {
                day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                abbr_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                month_names: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                abbr_month_names: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                meridian: ["AM", "PM"]
            },
            f = {
                precision: 3,
                separator: ".",
                delimiter: ",",
                strip_insignificant_zeros: !1
            },
            h = {
                unit: "$",
                precision: 2,
                format: "%u%n",
                sign_first: !0,
                delimiter: ",",
                separator: "."
            },
            m = {
                unit: "%",
                precision: 3,
                format: "%n%u",
                separator: ".",
                delimiter: ""
            },
            v = [null, "kb", "mb", "gb", "tb"],
            g = {
                defaultLocale: "en",
                locale: "en",
                defaultSeparator: ".",
                placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
                fallbacks: !1,
                translations: {},
                missingBehaviour: "message",
                missingTranslationPrefix: ""
            };
        return t.reset = function() {
            this.defaultLocale = g.defaultLocale, this.locale = g.locale, this.defaultSeparator = g.defaultSeparator, this.placeholder = g.placeholder, this.fallbacks = g.fallbacks, this.translations = g.translations, this.missingBehaviour = g.missingBehaviour, this.missingTranslationPrefix = g.missingTranslationPrefix
        }, t.initializeOptions = function() {
            "undefined" == typeof this.defaultLocale && null !== this.defaultLocale && (this.defaultLocale = g.defaultLocale), "undefined" == typeof this.locale && null !== this.locale && (this.locale = g.locale), "undefined" == typeof this.defaultSeparator && null !== this.defaultSeparator && (this.defaultSeparator = g.defaultSeparator), "undefined" == typeof this.placeholder && null !== this.placeholder && (this.placeholder = g.placeholder), "undefined" == typeof this.fallbacks && null !== this.fallbacks && (this.fallbacks = g.fallbacks), "undefined" == typeof this.translations && null !== this.translations && (this.translations = g.translations), "undefined" == typeof this.missingBehaviour && null !== this.missingBehaviour && (this.missingBehaviour = g.missingBehaviour), "undefined" == typeof this.missingTranslationPrefix && null !== this.missingTranslationPrefix && (this.missingTranslationPrefix = g.missingTranslationPrefix)
        }, t.initializeOptions(), t.locales = {}, t.locales.get = function(e) {
            var n = this[e] || this[t.locale] || this["default"];
            return "function" == typeof n && (n = n(e)), s(n) === !1 && (n = [n]), n
        }, t.locales["default"] = function(e) {
            var n, i = [],
                o = [];
            return e && i.push(e), !e && t.locale && i.push(t.locale), t.fallbacks && t.defaultLocale && i.push(t.defaultLocale), i.forEach(function(e) {
                n = e.split("-")[0], ~o.indexOf(e) || o.push(e), t.fallbacks && n && n !== e && !~o.indexOf(n) && o.push(n)
            }), i.length || i.push("en"), o
        }, t.pluralization = {}, t.pluralization.get = function(e) {
            return this[e] || this[t.locale] || this["default"]
        }, t.pluralization["default"] = function(e) {
            switch (e) {
                case 0:
                    return ["zero", "other"];
                case 1:
                    return ["one"];
                default:
                    return ["other"]
            }
        }, t.currentLocale = function() {
            return this.locale || this.defaultLocale
        }, t.isSet = function(e) {
            return void 0 !== e && null !== e
        }, t.lookup = function(e, t) {
            t = this.prepareOptions(t);
            var n, i, o, a = this.locales.get(t.locale).slice();
            a[0];
            for (e = this.getFullScope(e, t); a.length;)
                if (n = a.shift(), i = e.split(this.defaultSeparator), o = this.translations[n]) {
                    for (; i.length && (o = o[i.shift()], void 0 !== o && null !== o););
                    if (void 0 !== o && null !== o) return o
                }
            return this.isSet(t.defaultValue) ? t.defaultValue : void 0
        }, t.pluralizationLookupWithoutFallback = function(e, t, n) {
            var i, o, s = this.pluralization.get(t),
                r = s(e);
            if (a(n))
                for (; r.length;)
                    if (i = r.shift(), this.isSet(n[i])) {
                        o = n[i];
                        break
                    }
            return o
        }, t.pluralizationLookup = function(e, t, n) {
            n = this.prepareOptions(n);
            var i, o, s, r, l = this.locales.get(n.locale).slice();
            l[0];
            for (t = this.getFullScope(t, n); l.length;)
                if (i = l.shift(), o = t.split(this.defaultSeparator), s = this.translations[i]) {
                    for (; o.length && (s = s[o.shift()], a(s));) 0 == o.length && (r = this.pluralizationLookupWithoutFallback(e, i, s));
                    if (null != r && void 0 != r) break
                }
            return null != r && void 0 != r || this.isSet(n.defaultValue) && (r = a(n.defaultValue) ? this.pluralizationLookupWithoutFallback(e, n.locale, n.defaultValue) : n.defaultValue, s = n.defaultValue), {
                message: r,
                translations: s
            }
        }, t.meridian = function() {
            var e = this.lookup("time"),
                t = this.lookup("date");
            return e && e.am && e.pm ? [e.am, e.pm] : t && t.meridian ? t.meridian : p.meridian
        }, t.prepareOptions = function() {
            for (var e, t = n.call(arguments), i = {}; t.length;)
                if (e = t.shift(), "object" == typeof e)
                    for (var o in e) e.hasOwnProperty(o) && (this.isSet(i[o]) || (i[o] = e[o]));
            return i
        }, t.createTranslationOptions = function(e, t) {
            var n = [{
                scope: e
            }];
            return this.isSet(t.defaults) && (n = n.concat(t.defaults)), this.isSet(t.defaultValue) && (n.push({
                message: t.defaultValue
            }), delete t.defaultValue), n
        }, t.translate = function(e, t) {
            t = this.prepareOptions(t);
            var n, i = this.createTranslationOptions(e, t),
                o = i.some(function(e) {
                    return this.isSet(e.scope) ? n = this.lookup(e.scope, t) : this.isSet(e.message) && (n = e.message), void 0 !== n && null !== n ? !0 : void 0
                }, this);
            return o ? ("string" == typeof n ? n = this.interpolate(n, t) : a(n) && this.isSet(t.count) && (n = this.pluralize(t.count, e, t)), n) : this.missingTranslation(e, t)
        }, t.interpolate = function(e, t) {
            t = this.prepareOptions(t);
            var n, i, o, a, s = e.match(this.placeholder);
            if (!s) return e;
            for (var i; s.length;) n = s.shift(), o = n.replace(this.placeholder, "$1"), i = this.isSet(t[o]) ? t[o].toString().replace(/\$/gm, "_#$#_") : o in t ? this.nullPlaceholder(n, e, t) : this.missingPlaceholder(n, e, t), a = new RegExp(n.replace(/\{/gm, "\\{").replace(/\}/gm, "\\}")), e = e.replace(a, i);
            return e.replace(/_#\$#_/g, "$")
        }, t.pluralize = function(e, t, n) {
            n = this.prepareOptions(n);
            var i, o;
            return o = this.pluralizationLookup(e, t, n), void 0 == o.translations || null == o.translations ? this.missingTranslation(t, n) : (n.count = String(e), void 0 != o.message && null != o.message ? this.interpolate(o.message, n) : (i = this.pluralization.get(n.locale), this.missingTranslation(t + "." + i(e)[0], n)))
        }, t.missingTranslation = function(e, t) {
            if ("guess" == this.missingBehaviour) {
                var n = e.split(".").slice(-1)[0];
                return (this.missingTranslationPrefix.length > 0 ? this.missingTranslationPrefix : "") + n.replace("_", " ").replace(/([a-z])([A-Z])/g, function(e, t, n) {
                    return t + " " + n.toLowerCase()
                })
            }
            var i = null != t && null != t.locale ? t.locale : this.currentLocale(),
                o = this.getFullScope(e, t),
                a = [i, o].join(this.defaultSeparator);
            return '[missing "' + a + '" translation]'
        }, t.missingPlaceholder = function(e) {
            return "[missing " + e + " value]"
        }, t.nullPlaceholder = function() {
            return t.missingPlaceholder.apply(t, arguments)
        }, t.toNumber = function(e, t) {
            t = this.prepareOptions(t, this.lookup("number.format"), f);
            var n, i, a = 0 > e,
                s = o(Math.abs(e), t.precision).toString(),
                r = s.split("."),
                l = [],
                u = t.format || "%n",
                d = a ? "-" : "";
            for (e = r[0], n = r[1]; e.length > 0;) l.unshift(e.substr(Math.max(0, e.length - 3), 3)), e = e.substr(0, e.length - 3);
            return i = l.join(t.delimiter), t.strip_insignificant_zeros && n && (n = n.replace(/0+$/, "")), t.precision > 0 && n && (i += t.separator + n), u = t.sign_first ? "%s" + u : u.replace("%n", "%s%n"), i = u.replace("%u", t.unit).replace("%n", i).replace("%s", d)
        }, t.toCurrency = function(e, t) {
            return t = this.prepareOptions(t, this.lookup("number.currency.format"), this.lookup("number.format"), h), this.toNumber(e, t)
        }, t.localize = function(e, t, n) {
            switch (n || (n = {}), e) {
                case "currency":
                    return this.toCurrency(t);
                case "number":
                    return e = this.lookup("number.format"), this.toNumber(t, e);
                case "percentage":
                    return this.toPercentage(t);
                default:
                    var i;
                    return i = e.match(/^(date|time)/) ? this.toTime(e, t) : t.toString(), this.interpolate(i, n)
            }
        }, t.parseDate = function(e) {
            var t, n, i;
            if ("object" == typeof e) return e;
            if (t = e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)) {
                for (var o = 1; 6 >= o; o++) t[o] = parseInt(t[o], 10) || 0;
                t[2] -= 1, i = t[7] ? 1e3 * ("0" + t[7]) : null, n = t[8] ? new Date(Date.UTC(t[1], t[2], t[3], t[4], t[5], t[6], i)) : new Date(t[1], t[2], t[3], t[4], t[5], t[6], i)
            } else "number" == typeof e ? (n = new Date, n.setTime(e)) : e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/) ? (n = new Date, n.setTime(Date.parse([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(" ")))) : e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/) ? (n = new Date, n.setTime(Date.parse(e))) : (n = new Date, n.setTime(Date.parse(e)));
            return n
        }, t.strftime = function(e, n) {
            var o = this.lookup("date"),
                a = t.meridian();
            if (o || (o = {}), o = this.prepareOptions(o, p), isNaN(e.getTime())) throw new Error("I18n.strftime() requires a valid date object, but received an invalid date.");
            var s = e.getDay(),
                r = e.getDate(),
                l = e.getFullYear(),
                u = e.getMonth() + 1,
                d = e.getHours(),
                c = d,
                f = d > 11 ? 1 : 0,
                h = e.getSeconds(),
                m = e.getMinutes(),
                v = e.getTimezoneOffset(),
                g = Math.floor(Math.abs(v / 60)),
                y = Math.abs(v) - 60 * g,
                b = (v > 0 ? "-" : "+") + (g.toString().length < 2 ? "0" + g : g) + (y.toString().length < 2 ? "0" + y : y);
            return c > 12 ? c -= 12 : 0 === c && (c = 12), n = n.replace("%a", o.abbr_day_names[s]), n = n.replace("%A", o.day_names[s]), n = n.replace("%b", o.abbr_month_names[u]), n = n.replace("%B", o.month_names[u]), n = n.replace("%d", i(r)), n = n.replace("%e", r), n = n.replace("%-d", r), n = n.replace("%H", i(d)), n = n.replace("%-H", d), n = n.replace("%I", i(c)), n = n.replace("%-I", c), n = n.replace("%m", i(u)), n = n.replace("%-m", u), n = n.replace("%M", i(m)), n = n.replace("%-M", m), n = n.replace("%p", a[f]), n = n.replace("%S", i(h)), n = n.replace("%-S", h), n = n.replace("%w", s), n = n.replace("%y", i(l)), n = n.replace("%-y", i(l).replace(/^0+/, "")), n = n.replace("%Y", l), n = n.replace("%z", b)
        }, t.toTime = function(e, t) {
            var n = this.parseDate(t),
                i = this.lookup(e);
            return n.toString().match(/invalid/i) ? n.toString() : i ? this.strftime(n, i) : n.toString()
        }, t.toPercentage = function(e, t) {
            return t = this.prepareOptions(t, this.lookup("number.percentage.format"), this.lookup("number.format"), m), this.toNumber(e, t)
        }, t.toHumanSize = function(e, t) {
            for (var n, i, o = 1024, a = e, s = 0; a >= o && 4 > s;) a /= o, s += 1;
            return 0 === s ? (n = this.t("number.human.storage_units.units.byte", {
                count: a
            }), i = 0) : (n = this.t("number.human.storage_units.units." + v[s]), i = a - Math.floor(a) === 0 ? 0 : 1), t = this.prepareOptions(t, {
                unit: n,
                precision: i,
                format: "%n%u",
                delimiter: ""
            }), this.toNumber(a, t)
        }, t.getFullScope = function(e, t) {
            return t = this.prepareOptions(t), e.constructor === Array && (e = e.join(this.defaultSeparator)), t.scope && (e = [t.scope, e].join(this.defaultSeparator)), e
        }, t.extend = function(e, t) {
            return "undefined" == typeof e && "undefined" == typeof t ? {} : c(e, t)
        }, t.t = t.translate, t.l = t.localize, t.p = t.pluralize, t
    }), function(e) {
        "undefined" != typeof module && module.exports ? e(require("i18n")) : "function" == typeof define && define.amd ? define(["i18n"], e) : e(this.I18n)
    }(function(e) {
        "use strict";
        e.translations = {
            bg: {
                close: "\u0437\u0430\u0442\u0432\u043e\u0440\u0435\u043d\u0430",
                invoice: {
                    modal: {
                        phone: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0441 \u043a\u043e\u0434 \u043d\u0430 \u0434\u044a\u0440\u0436\u0430\u0432\u0430\u0442\u0430"
                    }
                },
                read_more: "\u041f\u0440\u043e\u0447\u0435\u0442\u0435\u0442\u0435 \u043e\u0449\u0435",
                send_msg_error_required: "\u0412\u0430\u0448\u0435\u0442\u043e \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0430 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0437\u0430\u043f\u0430\u0437\u0435\u043d\u043e. \u0412\u0441\u0438\u0447\u043a\u0438 \u043f\u043e\u043b\u0435\u0442\u0430 \u0441\u0430 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u0438."
            },
            de: {
                close: "Schlie\xdfen",
                invoice: {
                    modal: {
                        phone: "Telefonnummer"
                    }
                },
                read_more: "Lese mehr",
                send_msg_error_required: "Deine Nachricht konnte nicht verschickt werden. Zur Erinnerung: Alle Felder m\xfcssen ausgef\xfcllt werden."
            },
            en: {
                close: "Close",
                invoice: {
                    modal: {
                        phone: "Telephone with country code"
                    }
                },
                read_more: "View more",
                send_msg_error_required: "Your message could not be saved. All fields ar required."
            },
            es: {
                close: "Cerrar",
                invoice: {
                    modal: {
                        phone: "Tel\xe9fono con c\xf3digo"
                    }
                },
                read_more: "Leer M\xe1s",
                send_msg_error_required: "Su mensaje no puede ser guardada. Acordese: todos los campos son obligatorios."
            },
            fr: {
                close: "Fermer",
                invoice: {
                    modal: {
                        phone: "num\xe9ro de t\xe9l\xe9phone"
                    }
                },
                read_more: "Voir plus",
                send_msg_error_required: "Votre message n'a pas pu \xeatre enregistr\xe9. Rappelez-vous: tous les champs sont obligatoires."
            },
            it: {
                close: "chiudere",
                invoice: {
                    modal: {
                        phone: "Telefono con DDD"
                    }
                },
                read_more: "Leggere di pi\xf9",
                send_msg_error_required: "Sua mensagem n\xe3o p\xf4de ser salva. Lembre-se: todos os campos s\xe3o obrigat\xf3rios."
            },
            "pt-BR": {
                close: "Fechar",
                invoice: {
                    modal: {
                        phone: "Telefone com DDD"
                    }
                },
                read_more: "Ler mais",
                send_msg_error_required: "Sua mensagem n\xe3o p\xf4de ser salva. Lembre-se: todos os campos s\xe3o obrigat\xf3rios."
            }
        }
    }), function() {
        $.fn.preload = function() {
            return this.each(function() {
                return $("<img/>")[0].src = this
            })
        }, $(["https://assets3.casare.me/assets/ajax-loader-f24813cfb7544430a2718ee2566bbcc2.gif", "https://assets3.casare.me/assets/plans/true_false-0a29a7a85ab928294cf1c66f2006019a.png"]).preload()
    }.call(this), function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e, t) {
        function n(e, t, n, i) {
            return !(e.selector != t.selector || e.context != t.context || n && n.$lqguid != t.fn.$lqguid || i && i.$lqguid != t.fn2.$lqguid)
        }
        e.extend(e.fn, {
            livequery: function(t, o) {
                var a, s = this;
                return e.each(i.queries, function(e, i) {
                    return n(s, i, t, o) ? (a = i) && !1 : void 0
                }), a = a || new i(s.selector, s.context, t, o), a.stopped = !1, a.run(), s
            },
            expire: function(t, o) {
                var a = this;
                return e.each(i.queries, function(e, s) {
                    n(a, s, t, o) && !a.stopped && i.stop(s.id)
                }), a
            }
        });
        var i = e.livequery = function(t, n, o, a) {
            var s = this;
            return s.selector = t, s.context = n, s.fn = o, s.fn2 = a, s.elements = e([]), s.stopped = !1, s.id = i.queries.push(s) - 1, o.$lqguid = o.$lqguid || i.guid++, a && (a.$lqguid = a.$lqguid || i.guid++), s
        };
        i.prototype = {
            stop: function() {
                var t = this;
                t.stopped || (t.fn2 && t.elements.each(t.fn2), t.elements = e([]), t.stopped = !0)
            },
            run: function() {
                var t = this;
                if (!t.stopped) {
                    var n = t.elements,
                        i = e(t.selector, t.context),
                        o = i.not(n),
                        a = n.not(i);
                    t.elements = i, o.each(t.fn), t.fn2 && a.each(t.fn2)
                }
            }
        }, e.extend(i, {
            guid: 0,
            queries: [],
            queue: [],
            running: !1,
            timeout: null,
            registered: [],
            checkQueue: function() {
                if (i.running && i.queue.length)
                    for (var e = i.queue.length; e--;) i.queries[i.queue.shift()].run()
            },
            pause: function() {
                i.running = !1
            },
            play: function() {
                i.running = !0, i.run()
            },
            registerPlugin: function() {
                e.each(arguments, function(t, n) {
                    if (e.fn[n] && !(e.inArray(n, i.registered) > 0)) {
                        var o = e.fn[n];
                        e.fn[n] = function() {
                            var e = o.apply(this, arguments);
                            return i.run(), e
                        }, i.registered.push(n)
                    }
                })
            },
            run: function(n) {
                n !== t ? e.inArray(n, i.queue) < 0 && i.queue.push(n) : e.each(i.queries, function(t) {
                    e.inArray(t, i.queue) < 0 && i.queue.push(t)
                }), i.timeout && clearTimeout(i.timeout), i.timeout = setTimeout(i.checkQueue, 20)
            },
            stop: function(n) {
                n !== t ? i.queries[n].stop() : e.each(i.queries, i.prototype.stop)
            }
        }), i.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html", "prop", "removeProp"), e(function() {
            i.play()
        })
    }), function() {
        window.is_downloader || ! function(e, t, n) {
            var i, o;
            o = void 0, i = e.getElementsByTagName(t)[0], e.getElementById(n) || (o = e.createElement(t), o.id = n, o.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.0", i.parentNode.insertBefore(o, i))
        }(document, "script", "facebook-jssdk")
    }.call(this), function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, i) {
                var o, a, s = this;
                if (s.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(t),
                        appendDots: e(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return '<button type="button" data-role="none">' + (t + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        lazyLoad: "ondemand",
                        onBeforeChange: null,
                        onAfterChange: null,
                        onInit: null,
                        onReInit: null,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        responsive: null,
                        rtl: !1,
                        slide: "div",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 300,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0
                    }, s.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentSlide: 0,
                        currentLeft: null,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.paused = !1, s.positionProp = null, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.windowWidth = 0, s.windowTimer = null, s.options = e.extend({}, s.defaults, i), s.originalSettings = s.options, o = s.options.responsive || null, o && o.length > -1) {
                    for (a in o) o.hasOwnProperty(a) && (s.breakpoints.push(o[a].breakpoint), s.breakpointSettings[o[a].breakpoint] = o[a].settings);
                    s.breakpoints.sort(function(e, t) {
                        return t - e
                    })
                }
                s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = n++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.init()
            }
            var n = 0;
            return t
        }(), t.prototype.addSlide = function(t, n, i) {
            var o = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (0 > n || n >= o.slideCount) return !1;
            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : i === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
                e(n).attr("index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateSlide = function(t, n) {
            var i = {},
                o = this;
            if (1 === o.options.slidesToShow && o.options.adaptiveHeight === !0 && o.options.vertical === !1) {
                var a = o.$slides.eq(o.currentSlide).outerHeight(!0);
                o.$list.animate({
                    height: a
                }, o.options.speed)
            }
            o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    o.options.vertical === !1 ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            }) : (o.applyTransition(), o.options.vertical === !1 ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
                o.disableTransition(), n.call()
            }, o.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var n = this,
                i = null != n.options.asNavFor ? e(n.options.asNavFor).getSlick() : null;
            null != i && i.slideHandler(t, !0)
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                n = {};
            t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this;
            e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
        }, t.prototype.buildDots = function() {
            var t, n, i = this;
            if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
                for (n = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1) n += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
                n += "</ul>", i.$dots = e(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                e(n).attr("index", t)
            }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.centerMode === !0 && (t.options.slidesToScroll = 1, t.options.slidesToShow % 2 === 0 && (t.options.slidesToShow = 3)), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.checkResponsive = function() {
            var t, n, i = this;
            if (i.originalSettings.responsive && i.originalSettings.responsive.length > -1 && null !== i.originalSettings.responsive) {
                n = null;
                for (t in i.breakpoints) i.breakpoints.hasOwnProperty(t) && e(window).width() < i.breakpoints[t] && (n = i.breakpoints[t]);
                null !== n ? null !== i.activeBreakpoint ? n !== i.activeBreakpoint && (i.activeBreakpoint = n, i.options = e.extend({}, i.options, i.breakpointSettings[n]), i.refresh()) : (i.activeBreakpoint = n, i.options = e.extend({}, i.options, i.breakpointSettings[n]), i.refresh()) : null !== i.activeBreakpoint && (i.activeBreakpoint = null, i.options = e.extend({}, i.options, i.originalSettings), i.refresh())
            }
        }, t.prototype.changeSlide = function(t) {
            var n, i, o, a = this,
                s = e(t.target);
            switch (s.is("a") && t.preventDefault(), o = a.slideCount % a.options.slidesToScroll !== 0, n = o ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
                case "previous":
                    i = 0 === n ? a.options.slidesToScroll : a.options.slidesToShow - n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - i);
                    break;
                case "next":
                    i = 0 === n ? a.options.slidesToScroll : n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + i);
                    break;
                case "index":
                    var r = 0 === t.data.index ? 0 : t.data.index || e(t.target).parent().index() * a.options.slidesToScroll;
                    a.slideHandler(r);
                default:
                    return !1
            }
        }, t.prototype.destroy = function() {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && (t.$prevArrow.remove(), t.$nextArrow.remove()), t.$slides.parent().hasClass("slick-track") && t.$slides.unwrap().unwrap(), t.$slides.removeClass("slick-slide slick-active slick-visible").css("width", ""), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$list.off(".slick"), e(window).off(".slick-" + t.instanceUid), e(document).off(".slick-" + t.instanceUid)
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function(e, t, n) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: 1e3
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, n), i.$slides.eq(e).animate({
                opacity: 0
            }, i.options.speed, i.options.easing)) : (i.applyTransition(t), i.applyTransition(e), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: 1e3
            }), i.$slides.eq(e).css({
                opacity: 0
            }), n && setTimeout(function() {
                i.disableTransition(t), i.disableTransition(e), n.call()
            }, i.options.speed))
        }, t.prototype.filterSlides = function(e) {
            var t = this;
            null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = function() {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function() {
            var e, t = this,
                n = 0,
                i = 0,
                o = 0;
            for (e = t.options.infinite === !0 ? t.slideCount + t.options.slidesToShow - t.options.slidesToScroll : t.slideCount; e > n;) o++, i += t.options.slidesToScroll, n = i + t.options.slidesToShow;
            return o
        }, t.prototype.getLeft = function(e) {
            var t, n, i, o = this,
                a = 0;
            return o.slideOffset = 0, n = o.$slides.first().outerHeight(), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, a = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideCount % o.options.slidesToShow * o.slideWidth * -1,
                a = o.slideCount % o.options.slidesToShow * n * -1)) : o.slideCount % o.options.slidesToShow !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (o.slideOffset = o.options.slidesToShow * o.slideWidth - o.slideCount % o.options.slidesToShow * o.slideWidth, a = o.slideCount % o.options.slidesToShow * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, a = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + a, o.options.variableWidth === !0 && (i = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = i[0] ? -1 * i[0].offsetLeft : 0, o.options.centerMode === !0 && (i = o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.init = function() {
            var t = this;
            e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.checkResponsive()), null !== t.options.onInit && t.options.onInit.call(this, t)
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", t.autoPlayClear).on("mouseleave.slick", t.autoPlay)
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.options.pauseOnHover === !0 && t.options.autoplay === !0 && (t.$list.on("mouseenter.slick", t.autoPlayClear), t.$list.on("mouseleave.slick", t.autoPlay)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && (e(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler), t.slideCount <= t.options.slidesToShow && t.$slider.find(".slick-slide").removeClass("slick-center")), e(window).on("orientationchange.slick.slick-" + t.instanceUid, function() {
                t.checkResponsive(), t.setPosition()
            }), e(window).on("resize.slick.slick-" + t.instanceUid, function() {
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition()
                }, 50))
            }), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            37 === e.keyCode ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === e.keyCode && t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        n = e(this).attr("data-lazy");
                    t.load(function() {
                        t.animate({
                            opacity: 1
                        }, 200)
                    }).css({
                        opacity: 0
                    }).attr("src", n).removeAttr("data-lazy").removeClass("slick-loading")
                })
            }
            var n, i, o, a, s = this;
            s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), a = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), a = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, a = o + s.options.slidesToShow, s.options.fade === !0 && (o > 0 && o--, a <= s.slideCount && a++)), n = s.$slider.find(".slick-slide").slice(o, a), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.postSlide = function(e) {
            var t = this;
            null !== t.options.onAfterChange && t.options.onAfterChange.call(this, t, e), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
        }, t.prototype.progressiveLazyLoad = function() {
            var t, n, i = this;
            t = e("img[data-lazy]").length, t > 0 && (n = e("img[data-lazy]", i.$slider).first(), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function() {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad()
            }).error(function() {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function() {
            var t = this,
                n = t.currentSlide;
            t.destroy(), e.extend(t, t.initials), t.currentSlide = n, t.init()
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), null !== t.options.onReInit && t.options.onReInit.call(this, t)
        }, t.prototype.removeSlide = function(e, t) {
            var n = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, n.slideCount < 1 || 0 > e || e > n.slideCount - 1 ? !1 : (n.unload(), n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, t.prototype.setCSS = function(e) {
            var t, n, i = this,
                o = {};
            i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? e + "px" : "0px", n = "top" == i.positionProp ? e + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? (t.slideWidth = 0, t.$slideTrack.children(".slick-slide").each(function() {
                t.slideWidth += Math.ceil(e(this).outerWidth(!0))
            }), t.$slideTrack.width(Math.ceil(t.slideWidth) + 1)) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var n = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - n)
        }, t.prototype.setFade = function() {
            var t, n = this;
            n.$slides.each(function(i, o) {
                t = n.slideWidth * i * -1, e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade()
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function(e) {
            var t, n, i, o, a = this;
            a.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), n = a.$slider.find(".slick-slide"), a.options.centerMode === !0 ? (t = Math.floor(a.options.slidesToShow / 2), a.options.infinite === !0 && (e >= t && e <= a.slideCount - 1 - t ? a.$slides.slice(e - t, e + t + 1).addClass("slick-active") : (i = a.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active")), 0 === e ? n.eq(n.length - 1 - a.options.slidesToShow).addClass("slick-center") : e === a.slideCount - 1 && n.eq(a.options.slidesToShow).addClass("slick-center")), a.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= a.slideCount - a.options.slidesToShow ? a.$slides.slice(e, e + a.options.slidesToShow).addClass("slick-active") : n.length <= a.options.slidesToShow ? n.addClass("slick-active") : (o = a.slideCount % a.options.slidesToShow, i = a.options.infinite === !0 ? a.options.slidesToShow + e : e, a.options.slidesToShow == a.options.slidesToScroll && a.slideCount - e < a.options.slidesToShow ? n.slice(i - (a.options.slidesToShow - o), i + o).addClass("slick-active") : n.slice(i, i + a.options.slidesToShow).addClass("slick-active")), "ondemand" === a.options.lazyLoad && a.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, n, i, o = this;
            if (o.options.fade !== !0 && o.options.vertical !== !0 || (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
                for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; i > t; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.selectHandler = function(t) {
            var n = this,
                i = parseInt(e(t.target).parents(".slick-slide").attr("index"));
            return i || (i = 0), n.slideCount <= n.options.slidesToShow ? (n.$slider.find(".slick-slide").removeClass("slick-center"), n.$slides.eq(i).addClass("slick-active").addClass("slick-center"), void n.asNavFor(i)) : void n.slideHandler(i)
        }, t.prototype.slideHandler = function(e, t) {
            var n, i, o, a, s, r = null,
                l = this;
            return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 ? !1 : (t === !1 && l.asNavFor(e), n = e, r = l.getLeft(n), a = l.getLeft(l.currentSlide), s = l.slideCount % l.options.slidesToScroll !== 0 ? l.options.slidesToScroll : 0, l.currentLeft = null === l.swipeLeft ? a : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.slideCount - l.options.slidesToShow + s) ? (l.options.fade === !1 && (n = l.currentSlide, l.animateSlide(a, function() {
                l.postSlide(n)
            })), !1) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? (l.options.fade === !1 && (n = l.currentSlide, l.animateSlide(a, function() {
                l.postSlide(n)
            })), !1) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), i = 0 > n ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : n - l.slideCount : n, l.animating = !0, null !== l.options.onBeforeChange && e !== l.currentSlide && l.options.onBeforeChange.call(this, l, l.currentSlide, i), o = l.currentSlide, l.currentSlide = i, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (l.fadeSlide(o, i, function() {
                l.postSlide(i)
            }), !1) : void l.animateSlide(r, function() {
                l.postSlide(i)
            })))
        }, t.prototype.startLoad = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, n, i, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? "left" : 360 >= i && i >= 315 ? "left" : i >= 135 && 225 >= i ? "right" : "vertical"
        }, t.prototype.swipeEnd = function(t) {
            var n, i, o = this;
            if (o.dragging = !1, void 0 === o.touchObject.curX) return !1;
            if (o.touchObject.swipeLength >= o.touchObject.minSwipe) switch (e(t.target).on("click.slick", function(t) {
                t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(t.target).off("click.slick")
            }), o.options.swipeToSlide === !0 ? (i = Math.round(o.touchObject.swipeLength / o.slideWidth), n = i) : n = o.options.slidesToScroll, o.swipeDirection()) {
                case "left":
                    o.slideHandler(o.currentSlide + n), o.touchObject = {};
                    break;
                case "right":
                    o.slideHandler(o.currentSlide - n), o.touchObject = {}
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, n, i, o, a = this;
            return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, t = a.getLeft(a.currentSlide), !a.dragging || o && 1 !== o.length ? !1 : (a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), n = a.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(), i = a.touchObject.curX > a.touchObject.startX ? 1 : -1, a.options.vertical === !1 ? a.swipeLeft = t + a.touchObject.swipeLength * i : a.swipeLeft = t + a.touchObject.swipeLength * (a.$list.height() / a.listWidth) * i, a.options.fade === !0 || a.options.touchMove === !1 ? !1 : a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft)) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, n = this;
            return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
        }, t.prototype.unfilterSlides = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && (t.$prevArrow.remove(), t.$nextArrow.remove()), t.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
        }, t.prototype.updateArrows = function() {
            var e = this;
            e.options.arrows === !0 && e.options.infinite !== !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.removeClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, e.fn.slick = function(e) {
            var n = this;
            return n.each(function(n, i) {
                i.slick = new t(i, e)
            })
        }, e.fn.slickAdd = function(e, t, n) {
            var i = this;
            return i.each(function(i, o) {
                o.slick.addSlide(e, t, n)
            })
        }, e.fn.slickCurrentSlide = function() {
            var e = this;
            return e.get(0).slick.getCurrent()
        }, e.fn.slickFilter = function(e) {
            var t = this;
            return t.each(function(t, n) {
                n.slick.filterSlides(e)
            })
        }, e.fn.slickGoTo = function(e) {
            var t = this;
            return t.each(function(t, n) {
                n.slick.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                })
            })
        }, e.fn.slickNext = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            })
        }, e.fn.slickPause = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.autoPlayClear(), t.slick.paused = !0
            })
        }, e.fn.slickPlay = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.paused = !1, t.slick.autoPlay()
            })
        }, e.fn.slickPrev = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            })
        }, e.fn.slickRemove = function(e, t) {
            var n = this;
            return n.each(function(n, i) {
                i.slick.removeSlide(e, t)
            })
        }, e.fn.slickGetOption = function(e) {
            var t = this;
            return t.get(0).slick.options[e]
        }, e.fn.slickSetOption = function(e, t, n) {
            var i = this;
            return i.each(function(i, o) {
                o.slick.options[e] = t, n === !0 && (o.slick.unload(), o.slick.reinit())
            })
        }, e.fn.slickUnfilter = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.unfilterSlides()
            })
        }, e.fn.unslick = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick && t.slick.destroy()
            })
        }, e.fn.getSlick = function() {
            var e = null,
                t = this;
            return t.each(function(t, n) {
                e = n.slick
            }), e
        }
    }), !window.YT) var YT = {
    loading: 0,
    loaded: 0
};
if (!window.YTConfig) var YTConfig = {
    host: "http://www.youtube.com"
};
YT.loading || (YT.loading = 1, function() {
    var e = [];
    YT.ready = function(t) {
        YT.loaded ? t() : e.push(t)
    }, window.onYTReady = function() {
        YT.loaded = 1;
        for (var t = 0; t < e.length; t++) try {
            e[t]()
        } catch (n) {}
    }, YT.setConfig = function(e) {
        for (var t in e) e.hasOwnProperty(t) && (YTConfig[t] = e[t])
    };
    /*var t = document.createElement("script");
    t.type = "text/javascript", t.id = "www-widgetapi-script", t.src = "https://s.ytimg.com/yts/jsbin/www-widgetapi-vfl3G6wqk/www-widgetapi.js", t.async = !0;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t, n)*/
}());
var Froogaloop = function() {
    function e(t) {
        return new e.fn.init(t)
    }

    function t(e, t, n) {
        return n.contentWindow.postMessage ? (e = JSON.stringify({
            method: e,
            value: t
        }), void n.contentWindow.postMessage(e, s)) : !1
    }

    function n(e) {
        var t, n;
        try {
            t = JSON.parse(e.data), n = t.event || t.method
        } catch (i) {}
        if ("ready" != n || a || (a = !0), !/^https?:\/\/player.vimeo.com/.test(e.origin)) return !1;
        "*" === s && (s = e.origin), e = t.value;
        var r = t.data,
            l = "" === l ? null : t.player_id;
        return t = l ? o[l][n] : o[n], n = [], t ? (void 0 !== e && n.push(e), r && n.push(r), l && n.push(l), 0 < n.length ? t.apply(null, n) : t.call()) : !1
    }

    function i(e, t, n) {
        n ? (o[n] || (o[n] = {}), o[n][e] = t) : o[e] = t
    }
    var o = {},
        a = !1,
        s = "*";
    return e.fn = e.prototype = {
        element: null,
        init: function(e) {
            return "string" == typeof e && (e = document.getElementById(e)), this.element = e, this
        },
        api: function(e, n) {
            if (!this.element || !e) return !1;
            var o = this.element,
                a = "" !== o.id ? o.id : null,
                s = n && n.constructor && n.call && n.apply ? null : n,
                r = n && n.constructor && n.call && n.apply ? n : null;
            return r && i(e, r, a), t(e, s, o), this
        },
        addEvent: function(e, n) {
            if (!this.element) return !1;
            var o = this.element,
                s = "" !== o.id ? o.id : null;
            return i(e, n, s), "ready" != e ? t("addEventListener", e, o) : "ready" == e && a && n.call(null, s), this
        },
        removeEvent: function(e) {
            if (!this.element) return !1;
            var n = this.element,
                i = "" !== n.id ? n.id : null;
            e: {
                if (i && o[i]) {
                    if (!o[i][e]) {
                        i = !1;
                        break e
                    }
                    o[i][e] = null
                } else {
                    if (!o[e]) {
                        i = !1;
                        break e
                    }
                    o[e] = null
                }
                i = !0
            }
            "ready" != e && i && t("removeEventListener", e, n)
        }
    }, e.fn.init.prototype = e.fn, window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n), window.Froogaloop = window.$f = e
}();
(function() {
    $(".app-alert .close-btn").on("click", function() {
        return $(".app-alert").remove(), $("body").removeClass("showing-app-alert")
    })
}).call(this),
    function(e) {
        window.NestedFormEvents = function() {
            this.addFields = e.proxy(this.addFields, this), this.removeFields = e.proxy(this.removeFields, this)
        }, NestedFormEvents.prototype = {
            addFields: function(t) {
                var n = t.currentTarget,
                    i = e(n).data("association"),
                    o = e("#" + e(n).data("blueprint-id")),
                    a = o.data("blueprint"),
                    s = (e(n).closest(".fields").closestChild("input, textarea, select").eq(0).attr("name") || "").replace(new RegExp("[[a-z_]+]$"), "");
                if (s)
                    for (var r = s.match(/[a-z_]+_attributes(?=\]\[(new_)?\d+\])/g) || [], l = s.match(/[0-9]+/g) || [], u = 0; u < r.length; u++) l[u] && (a = a.replace(new RegExp("(_" + r[u] + ")_.+?_", "g"), "$1_" + l[u] + "_"), a = a.replace(new RegExp("(\\[" + r[u] + "\\])\\[.+?\\]", "g"), "$1[" + l[u] + "]"));
                var d = new RegExp("new_" + i, "g"),
                    c = this.newId();
                a = e.trim(a.replace(d, c));
                var p = this.insertFields(a, i, n);
                return p.trigger({
                    type: "nested:fieldAdded",
                    field: p
                }).trigger({
                    type: "nested:fieldAdded:" + i,
                    field: p
                }), !1
            },
            newId: function() {
                return (new Date).getTime()
            },
            insertFields: function(t, n, i) {
                var o = e(i).data("target");
                return o ? e(t).appendTo(e(o)) : e(t).insertBefore(i)
            },
            removeFields: function(t) {
                var n = e(t.currentTarget),
                    i = n.data("association"),
                    o = n.prev("input[type=hidden]");
                o.val("1");
                var a = n.closest(".fields");
                return a.hide(), a.trigger({
                    type: "nested:fieldRemoved",
                    field: a
                }).trigger({
                    type: "nested:fieldRemoved:" + i,
                    field: a
                }), !1
            }
        }, window.nestedFormEvents = new NestedFormEvents, e(document).delegate("form a.add_nested_fields", "click", nestedFormEvents.addFields).delegate("form a.remove_nested_fields", "click", nestedFormEvents.removeFields)
    }(jQuery),
    function(e) {
        e.fn.closestChild = function(t) {
            if (t && "" != t) {
                var n = [];
                for (n.push(this); n.length > 0;)
                    for (var i = n.shift(), o = i.children(), a = 0; a < o.length; ++a) {
                        var s = e(o[a]);
                        if (s.is(t)) return s;
                        n.push(s)
                    }
            }
            return e()
        }
    }(jQuery),
    function() {
        var e;
        this.CoverSlider = function() {
            function e() {
                this.slide_config = $('[data-slide~="options"]'), this.smooth = this.slide_config.data("smooth"), this.pagination = this.slide_config.data("pagination"), this.interval = this.slide_config.data("interval"), this.image_list = $('[data-behavior~="image-placeholder"]'), this.active = this.slide_config.data("slideshow") && this.image_list.length > 1, this.target = $('[data-behavior~="slideshow-target"]'), this.current_index = 0, this.active && (this.set_image(), this.smooth && this.target.css("transition", "background-image 1s ease-in-out"), this.pagination && this.create_pagination(), this.do_transitions())
            }
            return e.prototype.set_image = function() {
                var e;
                return e = this, e.current_index >= e.image_list.length && (e.current_index = 0), e.current_index < 0 && (e.current_index = e.image_list.length - 1), e.target.css("background-image", "url(" + $(e.image_list.get(e.current_index)).data("image") + ")")
            }, e.prototype.create_pagination = function() {
                var e, t, n, i, o, a, s, r;
                return n = this, o = n.target.parent(), o.css("position", "relative"), a = "0.2", s = 30, r = Math.floor((o.height() - s) / 2), i = "#ffffff", e = n.create_button("-1", r + "px", "5px", "auto", "<i class='fa fa-chevron-left'></i>", a, s + "px", i), t = n.create_button("1", r + "px", "auto", "5px", "<i class='fa fa-chevron-right'></i>", a, s + "px", i), e.appendTo(o), t.appendTo(o), n.set_button_handlers()
            }, e.prototype.create_button = function(e, t, n, i, o, a, s, r) {
                var l;
                return null == a && (a = "0.4"), null == s && (s = "25px"), null == r && (r = "#ffffff"), l = $("<a/>"), l.attr({
                    "data-behavior": "navigate-cover-slideshow",
                    "data-arg": e,
                    href: "javascript: void(0)"
                }), l.css({
                    border: "none",
                    "background-color": "transparent",
                    position: "absolute",
                    top: t,
                    left: n,
                    right: i,
                    opacity: a,
                    "z-index": "999",
                    "font-size": s,
                    color: r
                }), l.html(o), l
            }, e.prototype.set_button_handlers = function() {
                var e;
                return e = this, $('[data-behavior~="navigate-cover-slideshow"]').on("click", function() {
                    var t;
                    return clearTimeout(e.timeout_handler), t = parseInt($(this).data("arg")), e.current_index = e.current_index + t, e.set_image(), e.do_transitions()
                })
            }, e.prototype.get_interval = function() {
                return 1e3 * parseInt(this.interval)
            }, e.prototype.do_transitions = function() {
                var e;
                return e = this, e.timeout_handler = setTimeout(function() {
                    return e.current_index = e.current_index + 1, e.set_image(), e.do_transitions()
                }, e.get_interval())
            }, e
        }(), e = new this.CoverSlider
    }.call(this),
    function() {
        $(document).ready(function() {
            var e;
            return $("#lang-toggle").click(function() {
                return window.clearTimeout(e)
            }), e = null, "open" === $("#lang-toggle").data("startup") ? ($("#lang-list").addClass("in"), e = window.setTimeout(function() {
                return $("#lang-toggle").click()
            }, 5e3)) : void 0
        })
    }.call(this),
    function() {
        this.CaptchaRequired = function() {
            function e() {
                this.wrap_controls(), this.register_handlers()
            }
            return e.prototype.register_handlers = function() {
                return $("[data-behavior='disabled-button-alert']").on("click", function() {
                    return $(this).children().first().attr("disabled") ? $($(this).data("target")).removeClass("hidden") : $($(this).data("target")).addClass("hidden")
                })
            }, e.prototype.wrap_controls = function() {
                return $("[data-behavior='alert-captcha']").each(function() {
                    return $(this).wrap('<span data-behavior="disabled-button-alert" data-target="' + $(this).data("target") + '"></span>')
                })
            }, e
        }(), $(document).ready(function(e) {
            return function() {
                var t;
                return t = new e.CaptchaRequired
            }
        }(this))
    }.call(this),
    function() {
        var e, t;
        t = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i)
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i)
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i)
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i)
                },
                any: function() {
                    return t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
                }
            }, e = function(e) {
                var t, n;
                return t = window.location.search.toString().replace("?", "").split("&"), n = "", $(t).each(function(t, i) {
                    var o;
                    return o = i.split("="), o[0] === e ? n = o[1] : void 0
                }), n
            },
            function(e) {
                return e.fn.me_leads = function(t) {
                    var n, i, o, a;
                    return a = {
                        body: e("html, body"),
                        time: "500",
                        target: "",
                        offset: 0,
                        onset: 0
                    }, o = e.extend(a, t), n = e(this), i = e(o.target || n.attr("href")).offset().top - o.offset + o.onset, o.body.animate({
                        scrollTop: i
                    }, n.data("time") | o.time)
                }
            }(jQuery), $(function() {
                var t, n, i, o;
                return t = function(e) {
                    var t;
                    return t = document.getElementById("fb-box"), null !== t ? (t.innerHTML = "", t.innerHTML = '<div  class="fb-comments" data-href=' + e + '  data-colorscheme="light"  data-numposts="5" data-width="100%" data-version="v2.3"></div>', "undefined" != typeof FB && null !== FB ? FB.XFBML.parse(t) : console.warn("FB sdk missing")) : void 0
                }, i = function(e) {
                    return $(".photo-carousel").unslick({}), $(".thumbs-carousel").unslick({}), $("#" + e + " .photo-carousel").slick({
                        lazyLoad: "ondemand",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: !0,
                        asNavFor: "#" + e + " .thumbs-carousel",
                        arrows: !0,
                        fade: !0,
                        draggable: !1,
                        swipe: !1,
                        onInit: function(t) {
                            var n, i, o;
                            n = $(t.$slides.get(0)), i = n.find("a.album-trigger"), o = i.data("description") || "", $("#" + e + " .photo-description").text(o), $(document).ready(function() {
                                "undefined" != typeof FB && null !== FB && FB.XFBML.parse()
                            })
                        },
                        onAfterChange: function(n, i) {
                            var o, a, s, r;
                            o = $(n.$slides.get(i)), s = o.find("a.album-trigger"), r = s.data("description") || "", a = s.data("href"), $("#" + e + " .photo-description").text(r), $("#" + e + " .fb-comments").attr("data-href", a), $("#" + e + " input[name=target] input[name=url]").val(a), $(document).ready(function() {
                                t(a)
                            })
                        }
                    }), $("#" + e + " .thumbs-carousel").slick({
                        lazyLoad: "ondemand",
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: !0,
                        asNavFor: "#" + e + " .photo-carousel",
                        focusOnSelect: !0
                    })
                }, $(".navbar-collapse").on("hidden.bs.collapse", function() {
                    return $(this).css({
                        maxHeight: $(window).height() - $(".navbar-header").height() + "px"
                    })
                }), n = function() {
                    return $(".mejs-pause").click()
                }, window.ytplayers = [], window.onYouTubePlayerAPIReady = function() {
                    return $(".youtube-video").each(function(e, t) {
                        var i, o;
                        return i = function(e) {
                            return e.data === YT.PlayerState.PLAYING ? n() : void 0
                        }, o = new YT.Player("" + $(t).attr("id"), {
                            events: {
                                onStateChange: i
                            }
                        }), window.ytplayers.push(o)
                    }), $(".video-pause").on("click", function() {
                        var e, t, n, i, o;
                        for (i = window.ytplayers, o = [], e = 0, t = i.length; t > e; e++) n = i[e], 1 === n.getPlayerState() ? ("file:" === document.location.protocol && n.playVideo(), o.push(n.pauseVideo())) : o.push(void 0);
                        return o
                    })
                }, $(".vimeo-video").each(function(e, t) {
                    var i;
                    return i = $f(t), i.addEvent("ready", function() {
                        return i.addEvent("play", n)
                    }), $(".video-play").on("click", function(e) {
                        return e.preventDefault(), i.api("play")
                    }), $(".video-pause").on("click", function(e) {
                        var n;
                        return e.preventDefault(), "file:" !== document.location.protocol ? i.api("pause") : (n = $(t), n.parents("li.flex-active-slide").length > 0 ? setTimeout(function() {
                            n.replaceWith(n.clone(!0, !0))
                        }, 600) : void 0)
                    })
                }), $("#videosSlider").flexslider({
                    animation: "slide",
                    slideshow: !1,
                    animationLoop: !1,
                    directionNav: !1,
                    controlNav: !1,
                    touch: !1,
                    pauseOnHover: !0
                }), $(".video-thumbs .thumb").on("mouseenter", function() {
                    var e, t;
                    return e = $(this), t = e.data("cover"), $(".videos-content").css("background-image", "url(" + t + ")"), e.data("shadow") ? $(".videos-content").addClass("mask") : $(".videos-content").removeClass("mask")
                }), $(".video-thumbs .thumb").on("mouseleave", function() {
                    var e, t;
                    return e = $(".video-thumbs li.active"), t = e.data("cover"), $(".videos-content").css("background-image", "url(" + t + ")"), e.data("shadow") ? $(".videos-content").addClass("mask") : $(".videos-content").removeClass("mask")
                }), $(".video-thumbs .thumb").on("click", function(e) {
                    var t, n;
                    return e.preventDefault(), t = $(this), $(".video-thumbs li").removeClass("active"), t.addClass("active"), n = t.data("cover"), $("#videosSlider").flexslider(t.data("rate")), $(".videos-content").css("background-image", "url(" + n + ")")
                }), (o = e("video")) && setTimeout(function() {
                    var e;
                    return $.fn.me_leads({
                        target: "#videos",
                        onset: $("#videos").data("meleadonset")
                    }), e = $(".thumbs-list").find("> li"), $(e[o]).trigger("click")
                }, 1500), $(".view-more-link").on("click", function(e) {
                    var t;
                    return e.preventDefault(), t = $(this).text(), "Ver mais" === t ? $(this).text("Fechar") : $(this).text("Ver mais")
                }), $(".album-arrow").livequery(function() {
                    return $(this).on("click", function(e) {
                        var t;
                        return e.preventDefault(), t = $(this), t.hasClass("album-active") ? $(".album-arrow").removeClass("album-active") : ($(".album-arrow").removeClass("album-active"), t.addClass("album-active"))
                    })
                }), $(".album-title-arrow").livequery(function() {
                    return $(this).on("click", function(e) {
                        var t;
                        return e.preventDefault(), t = $(this), t.hasClass("album-active") ? $(".album-title-arrow").removeClass("album-active") : ($(".album-title-arrow").removeClass("album-active"), t.addClass("album-active"))
                    })
                }), $(".album-slide").livequery(function() {
                    return $(this).on("click", function(e) {
                        var t, n, o, a;
                        return n = $(this), o = $(n.attr("href").replace(/^.+#/, "#")), n.data("hide") && (t = $(".gallery-inner").find(".in"), t.addClass("hide").collapse("hide").removeClass("hide")), n.hasClass("album-focus") && (a = $(n).offset().top, $("html,body").animate({
                            scrollTop: a + 200
                        }, 500)), n.hasClass("relative-focus") && (a = $(n).offset().top - ($(n).data("offset") || 0), $("html,body").animate({
                            scrollTop: a
                        }, 500)), n.parents("#albums").length > 0 && setTimeout(function() {
                            return i(o.attr("id"))
                        }, 10), e.preventDefault()
                    })
                }), $(".album-carousel").slick({
                    infinite: !0,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: !0
                }), $(".bos-carousel").slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    centerPadding: "10px",
                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                }), $("#bos-carousel-nav").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: "#bos-carousel-list",
                    focusOnSelect: !0,
                    centerPadding: "10px"
                }), $("#bos-carousel-list").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1,
                    fade: !0,
                    draggable: !1,
                    swipe: !1
                })
            })
    }.call(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t();
    }(this, function() {
        "use strict";
        var e = function(e, t, n, i) {
            var o = {
                features: null,
                bind: function(e, t, n, i) {
                    var o = (i ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], n, !1)
                },
                isArray: function(e) {
                    return e instanceof Array
                },
                createEl: function(e, t) {
                    var n = document.createElement(t || "div");
                    return e && (n.className = e), n
                },
                getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                },
                unbind: function(e, t, n) {
                    o.bind(e, t, n, !0)
                },
                removeClass: function(e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(e, t) {
                    o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                },
                hasClass: function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                },
                getChildByClass: function(e, t) {
                    for (var n = e.firstChild; n;) {
                        if (o.hasClass(n, t)) return n;
                        n = n.nextSibling
                    }
                },
                arraySearch: function(e, t, n) {
                    for (var i = e.length; i--;)
                        if (e[i][n] === t) return i;
                    return -1
                },
                extend: function(e, t, n) {
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            if (n && e.hasOwnProperty(i)) continue;
                            e[i] = t[i]
                        }
                },
                easing: {
                    sine: {
                        out: function(e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(e) {
                            return --e * e * e + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (o.features) return o.features;
                    var e = o.createEl(),
                        t = e.style,
                        n = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var a = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            s && s.length > 0 && (s = parseInt(s[1], 10), s >= 1 && 8 > s && (i.isOldIOSPhone = !0))
                        }
                        var r = a.match(/Android\s([0-9\.]*)/),
                            l = r ? r[1] : 0;
                        l = parseFloat(l), l >= 1 && (4.4 > l && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(a)
                    }
                    for (var u, d, c = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], f = 0; 4 > f; f++) {
                        n = p[f];
                        for (var h = 0; 3 > h; h++) u = c[h], d = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u), !i[u] && d in t && (i[u] = d);
                        n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var m = 0;
                        i.raf = function(e) {
                            var t = (new Date).getTime(),
                                n = Math.max(0, 16 - (t - m)),
                                i = window.setTimeout(function() {
                                    e(t + n)
                                }, n);
                            return m = t + n, i
                        }, i.caf = function(e) {
                            clearTimeout(e)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, n, i) {
                t = t.split(" ");
                for (var o, a = (i ? "detach" : "attach") + "Event", s = function() {
                        n.handleEvent.call(n)
                    }, r = 0; r < t.length; r++)
                    if (o = t[r])
                        if ("object" == typeof n && n.handleEvent) {
                            if (i) {
                                if (!n["oldIE" + o]) return !1
                            } else n["oldIE" + o] = s;
                            e[a]("on" + o, n["oldIE" + o])
                        } else e[a]("on" + o, n)
            });
            var a = this,
                s = 25,
                r = 3,
                l = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.5
                    },
                    maxSpreadZoom: 2,
                    scaleMode: "fit",
                    modal: !0,
                    alwaysFadeIn: !1
                };
            o.extend(l, i);
            var u, d, c, p, f, h, m, v, g, y, b, w, x, T, S, k, C, j, E, $, M, _, A, N, F, P, D, L, I, O, H, z, B, q, W, R, V, U, Y, X, Z, G, K, Q, J, ee, te, ne, ie, oe, ae, se, re, le, ue, de, ce, pe = function() {
                    return {
                        x: 0,
                        y: 0
                    }
                },
                fe = pe(),
                he = pe(),
                me = pe(),
                ve = {},
                ge = 0,
                ye = pe(),
                be = 0,
                we = !0,
                xe = [],
                Te = {},
                Se = function(e, t) {
                    o.extend(a, t.publicMethods), xe.push(e)
                },
                ke = function(e) {
                    var t = Qt();
                    return e > t - 1 ? e - t : 0 > e ? t + e : e
                },
                Ce = {},
                je = function(e, t) {
                    return Ce[e] || (Ce[e] = []), Ce[e].push(t)
                },
                Ee = function(e) {
                    var t = Ce[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var i = 0; i < t.length; i++) t[i].apply(a, n)
                    }
                },
                $e = function() {
                    return (new Date).getTime()
                },
                Me = function(e) {
                    ue = e, a.bg.style.opacity = e * l.bgOpacity
                },
                _e = function(e, t, n, i) {
                    e[A] = w + t + "px, " + n + "px" + x + " scale(" + i + ")"
                },
                Ae = function() {
                    oe && _e(oe, me.x, me.y, y)
                },
                Ne = function(e) {
                    e.container && _e(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel)
                },
                Fe = function(e, t) {
                    t[A] = w + e + "px, 0px" + x
                },
                Pe = function(e, t) {
                    if (!l.loop && t) {
                        var n = p + (ye.x * ge - e) / ye.x,
                            i = Math.round(e - gt.x);
                        (0 > n && i > 0 || n >= Qt() - 1 && 0 > i) && (e = gt.x + i * l.mainScrollEndFriction)
                    }
                    gt.x = e, Fe(e, f)
                },
                De = function(e, t) {
                    var n = yt[e] - k[e];
                    return he[e] + fe[e] + n - n * (t / b)
                },
                Le = function(e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                },
                Ie = function(e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                },
                Oe = null,
                He = function() {
                    Oe && (o.unbind(document, "mousemove", He), o.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, Ee("mouseUsed")), Oe = setTimeout(function() {
                        Oe = null
                    }, 100)
                },
                ze = function() {
                    o.bind(document, "keydown", a), z.transform && o.bind(a.scrollWrap, "click", a), l.mouseUsed || o.bind(document, "mousemove", He), o.bind(window, "resize scroll", a), Ee("bindEvents")
                },
                Be = function() {
                    o.unbind(window, "resize", a), o.unbind(window, "scroll", g.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", He), z.transform && o.unbind(a.scrollWrap, "click", a), Y && o.unbind(window, m, a), Ee("unbindEvents")
                },
                qe = function(e, t) {
                    var n = rn(a.currItem, ve, e);
                    return t && (ie = n), n
                },
                We = function(e) {
                    return e || (e = a.currItem), e.initialZoomLevel
                },
                Re = function(e) {
                    return e || (e = a.currItem), e.w > 0 ? l.maxSpreadZoom : 1
                },
                Ve = function(e, t, n, i) {
                    return i === a.currItem.initialZoomLevel ? (n[e] = a.currItem.initialPosition[e], !0) : (n[e] = De(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] ? (n[e] = t.max[e], !0) : !1)
                },
                Ue = function() {
                    if (A) {
                        var t = z.perspective && !F;
                        return w = "translate" + (t ? "3d(" : "("), void(x = z.perspective ? ", 0px)" : ")")
                    }
                    A = "left", o.addClass(e, "pswp--ie"), Fe = function(e, t) {
                        t.left = e + "px"
                    }, Ne = function(e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                            n = e.container.style,
                            i = t * e.w,
                            o = t * e.h;
                        n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                    }, Ae = function() {
                        if (oe) {
                            var e = oe,
                                t = a.currItem,
                                n = t.fitRatio > 1 ? 1 : t.fitRatio,
                                i = n * t.w,
                                o = n * t.h;
                            e.width = i + "px", e.height = o + "px", e.left = me.x + "px", e.top = me.y + "px"
                        }
                    }
                },
                Ye = function(e) {
                    var t = "";
                    l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a[t]()))
                },
                Xe = function(e) {
                    e && (G || Z || ae || V) && (e.preventDefault(), e.stopPropagation())
                },
                Ze = function() {
                    a.setScrollOffset(0, o.getScrollY())
                },
                Ge = {},
                Ke = 0,
                Qe = function(e) {
                    Ge[e] && (Ge[e].raf && D(Ge[e].raf), Ke--, delete Ge[e])
                },
                Je = function(e) {
                    Ge[e] && Qe(e), Ge[e] || (Ke++, Ge[e] = {})
                },
                et = function() {
                    for (var e in Ge) Ge.hasOwnProperty(e) && Qe(e)
                },
                tt = function(e, t, n, i, o, a, s) {
                    var r, l = $e();
                    Je(e);
                    var u = function() {
                        if (Ge[e]) {
                            if (r = $e() - l, r >= i) return Qe(e), a(n), void(s && s());
                            a((n - t) * o(r / i) + t), Ge[e].raf = P(u)
                        }
                    };
                    u()
                },
                nt = {
                    shout: Ee,
                    listen: je,
                    viewportSize: ve,
                    options: l,
                    isMainScrollAnimating: function() {
                        return ae
                    },
                    getZoomLevel: function() {
                        return y
                    },
                    getCurrentIndex: function() {
                        return p
                    },
                    isDragging: function() {
                        return Y
                    },
                    isZooming: function() {
                        return ee
                    },
                    setScrollOffset: function(e, t) {
                        k.x = e, H = k.y = t
                    },
                    applyZoomPan: function(e, t, n) {
                        me.x = t, me.y = n, y = e, Ae()
                    },
                    init: function() {
                        if (!u && !d) {
                            var n;
                            a.framework = o, a.template = e, a.bg = o.getChildByClass(e, "pswp__bg"), L = e.className, u = !0, z = o.detectFeatures(), P = z.raf, D = z.caf, A = z.transform, O = z.oldIE, a.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), f = a.container.style, a.itemHolders = C = [{
                                el: a.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[2],
                                wrap: 0,
                                index: -1
                            }], C[0].el.style.display = C[2].el.style.display = "none", Ue(), g = {
                                resize: a.updateSize,
                                scroll: Ze,
                                keydown: Ye,
                                click: Xe
                            };
                            var i = z.isOldIOSPhone || z.isOldAndroid || z.isMobileOpera;
                            for (z.animationName && z.transform && !i || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < xe.length; n++) a["init" + xe[n]]();
                            if (t) {
                                var s = a.ui = new t(a, o);
                                s.init()
                            }
                            Ee("firstUpdate"), p = p || l.index || 0, (isNaN(p) || 0 > p || p >= Qt()) && (p = 0), a.currItem = Kt(p), (z.isOldIOSPhone || z.isOldAndroid) && (we = !1), l.modal && (e.setAttribute("aria-hidden", "false"), we ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === H && (Ee("initialLayout"), H = I = o.getScrollY());
                            var c = "pswp--open ";
                            for (l.mainClass && (c += l.mainClass + " "), l.showHideOpacity && (c += "pswp--animate_opacity "), c += F ? "pswp--touch" : "pswp--notouch", c += z.animationName ? " pswp--css_animation" : "", c += z.svg ? " pswp--svg" : "", o.addClass(e, c), a.updateSize(), h = -1, be = null, n = 0; r > n; n++) Fe((n + h) * ye.x, C[n].el.style);
                            O || o.bind(a.scrollWrap, v, a), je("initialZoomInEnd", function() {
                                a.setContent(C[0], p - 1), a.setContent(C[2], p + 1), C[0].el.style.display = C[2].el.style.display = "block", l.focus && e.focus(), ze()
                            }), a.setContent(C[1], p), a.updateCurrItem(), Ee("afterInit"), we || (T = setInterval(function() {
                                Ke || Y || ee || y !== a.currItem.initialZoomLevel || a.updateSize()
                            }, 1e3)), o.addClass(e, "pswp--visible")
                        }
                    },
                    close: function() {
                        u && (u = !1, d = !0, Ee("close"), Be(), en(a.currItem, null, !0, a.destroy))
                    },
                    destroy: function() {
                        Ee("destroy"), Yt && clearTimeout(Yt), l.modal && (e.setAttribute("aria-hidden", "true"), e.className = L), T && clearInterval(T), o.unbind(a.scrollWrap, v, a), o.unbind(window, "scroll", a), St(), et(), Ce = null
                    },
                    panTo: function(e, t, n) {
                        n || (e > ie.min.x ? e = ie.min.x : e < ie.max.x && (e = ie.max.x), t > ie.min.y ? t = ie.min.y : t < ie.max.y && (t = ie.max.y)), me.x = e, me.y = t, Ae()
                    },
                    handleEvent: function(e) {
                        e = e || window.event, g[e.type] && g[e.type](e)
                    },
                    goTo: function(e) {
                        e = ke(e);
                        var t = e - p;
                        be = t, p = e, a.currItem = Kt(p), ge -= t, Pe(ye.x * ge), et(), ae = !1, a.updateCurrItem()
                    },
                    next: function() {
                        a.goTo(p + 1)
                    },
                    prev: function() {
                        a.goTo(p - 1)
                    },
                    updateCurrZoomItem: function(e) {
                        if (e && Ee("beforeChange", 0), C[1].el.children.length) {
                            var t = C[1].el.children[0];
                            oe = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else oe = null;
                        ie = a.currItem.bounds, b = y = a.currItem.initialZoomLevel, me.x = ie.center.x, me.y = ie.center.y, e && Ee("afterChange")
                    },
                    invalidateCurrItems: function() {
                        S = !0;
                        for (var e = 0; r > e; e++) C[e].item && (C[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(e) {
                        if (0 !== be) {
                            var t, n = Math.abs(be);
                            if (!(e && 2 > n)) {
                                a.currItem = Kt(p), Ee("beforeChange", be), n >= r && (h += be + (be > 0 ? -r : r), n = r);
                                for (var i = 0; n > i; i++) be > 0 ? (t = C.shift(), C[r - 1] = t, h++, Fe((h + 2) * ye.x, t.el.style), a.setContent(t, p - n + i + 1 + 1)) : (t = C.pop(), C.unshift(t), h--, Fe(h * ye.x, t.el.style), a.setContent(t, p + n - i - 1 - 1));
                                if (oe && 1 === Math.abs(be)) {
                                    var o = Kt(j);
                                    o.initialZoomLevel !== y && (rn(o, ve), Ne(o))
                                }
                                be = 0, a.updateCurrZoomItem(), j = p, Ee("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!we) {
                            var n = o.getScrollY();
                            if (H !== n && (e.style.top = n + "px", H = n), !t && Te.x === window.innerWidth && Te.y === window.innerHeight) return;
                            Te.x = window.innerWidth, Te.y = window.innerHeight, e.style.height = Te.y + "px"
                        }
                        if (ve.x = a.scrollWrap.clientWidth, ve.y = a.scrollWrap.clientHeight, k = {
                                x: 0,
                                y: H
                            }, ye.x = ve.x + Math.round(ve.x * l.spacing), ye.y = ve.y, Pe(ye.x * ge), Ee("beforeResize"), void 0 !== h) {
                            for (var i, s, u, d = 0; r > d; d++) i = C[d], Fe((d + h) * ye.x, i.el.style), u = p + d - 1, l.loop && Qt() > 2 && (u = ke(u)), s = Kt(u), s && (S || s.needsUpdate || !s.bounds) ? (a.cleanSlide(s), a.setContent(i, u), 1 === d && (a.currItem = s, a.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && u >= 0 && a.setContent(i, u), s && s.container && (rn(s, ve), Ne(s));
                            S = !1
                        }
                        b = y = a.currItem.initialZoomLevel, ie = a.currItem.bounds, ie && (me.x = ie.center.x, me.y = ie.center.y, Ae()), Ee("resize")
                    },
                    zoomTo: function(e, t, n, i, a) {
                        t && (b = y, yt.x = Math.abs(t.x) - me.x, yt.y = Math.abs(t.y) - me.y, Le(he, me));
                        var s = qe(e, !1),
                            r = {};
                        Ve("x", s, r, e), Ve("y", s, r, e);
                        var l = y,
                            u = {
                                x: me.x,
                                y: me.y
                            };
                        Ie(r);
                        var d = function(t) {
                            1 === t ? (y = e, me.x = r.x, me.y = r.y) : (y = (e - l) * t + l, me.x = (r.x - u.x) * t + u.x, me.y = (r.y - u.y) * t + u.y), a && a(t), Ae()
                        };
                        n ? tt("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, d) : d(1)
                    }
                },
                it = 30,
                ot = 10,
                at = {},
                st = {},
                rt = {},
                lt = {},
                ut = {},
                dt = [],
                ct = {},
                pt = [],
                ft = {},
                ht = 0,
                mt = pe(),
                vt = 0,
                gt = pe(),
                yt = pe(),
                bt = pe(),
                wt = function(e, t) {
                    return e.x === t.x && e.y === t.y
                },
                xt = function(e, t) {
                    return Math.abs(e.x - t.x) < s && Math.abs(e.y - t.y) < s
                },
                Tt = function(e, t) {
                    return ft.x = Math.abs(e.x - t.x), ft.y = Math.abs(e.y - t.y), Math.sqrt(ft.x * ft.x + ft.y * ft.y)
                },
                St = function() {
                    K && (D(K), K = null)
                },
                kt = function() {
                    Y && (K = P(kt), zt())
                },
                Ct = function() {
                    return !("fit" === l.scaleMode && y === a.currItem.initialZoomLevel)
                },
                jt = function(e, t) {
                    return e ? e.className && e.className.indexOf("pswp__scroll-wrap") > -1 ? !1 : t(e) ? e : jt(e.parentNode, t) : !1
                },
                Et = {},
                $t = function(e, t) {
                    return Et.prevent = !jt(e.target, l.isClickableElement), Ee("preventDragEvent", e, t, Et), Et.prevent
                },
                Mt = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                },
                _t = function(e, t, n) {
                    n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
                },
                At = function(e, t, n) {
                    if (e - q > 50) {
                        var i = pt.length > 2 ? pt.shift() : {};
                        i.x = t, i.y = n, pt.push(i), q = e
                    }
                },
                Nt = function() {
                    var e = me.y - a.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (ve.y / 2))
                },
                Ft = {},
                Pt = {},
                Dt = [],
                Lt = function(e) {
                    for (; Dt.length > 0;) Dt.pop();
                    return N ? (ce = 0, dt.forEach(function(e) {
                        0 === ce ? Dt[0] = e : 1 === ce && (Dt[1] = e), ce++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Dt[0] = Mt(e.touches[0], Ft), e.touches.length > 1 && (Dt[1] = Mt(e.touches[1], Pt))) : (Ft.x = e.pageX, Ft.y = e.pageY, Ft.id = "", Dt[0] = Ft), Dt
                },
                It = function(e, t) {
                    var n, i, o, s, r = 0,
                        u = me[e] + t[e],
                        d = t[e] > 0,
                        c = gt.x + t.x,
                        p = gt.x - ct.x;
                    return n = u > ie.min[e] || u < ie.max[e] ? l.panEndFriction : 1, u = me[e] + t[e] * n, !l.allowPanToNext && y !== a.currItem.initialZoomLevel || (oe ? "h" !== se || "x" !== e || Z || (d ? (u > ie.min[e] && (n = l.panEndFriction, r = ie.min[e] - u, i = ie.min[e] - he[e]), (0 >= i || 0 > p) && Qt() > 1 ? (s = c, 0 > p && c > ct.x && (s = ct.x)) : ie.min.x !== ie.max.x && (o = u)) : (u < ie.max[e] && (n = l.panEndFriction, r = u - ie.max[e], i = he[e] - ie.max[e]), (0 >= i || p > 0) && Qt() > 1 ? (s = c, p > 0 && c < ct.x && (s = ct.x)) : ie.min.x !== ie.max.x && (o = u))) : s = c, "x" !== e) ? void(ae || Q || y > a.currItem.fitRatio && (me[e] += t[e] * n)) : (void 0 !== s && (Pe(s, !0), Q = s !== ct.x), ie.min.x !== ie.max.x && (void 0 !== o ? me.x = o : Q || (me.x += t.x * n)), void 0 !== s)
                },
                Ot = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Gt) return void e.preventDefault();
                        if (!U || "mousedown" !== e.type) {
                            if ($t(e, !0) && e.preventDefault(), Ee("pointerDown"), N) {
                                var t = o.arraySearch(dt, e.pointerId, "id");
                                0 > t && (t = dt.length), dt[t] = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    id: e.pointerId
                                }
                            }
                            var n = Lt(e),
                                i = n.length;
                            J = null, et(), Y && 1 !== i || (Y = re = !0, o.bind(window, m, a), R = de = le = V = Q = G = X = Z = !1, se = null, Ee("firstTouchStart", n), Le(he, me), fe.x = fe.y = 0, Le(lt, n[0]), Le(ut, lt), ct.x = ye.x * ge, pt = [{
                                x: lt.x,
                                y: lt.y
                            }], q = B = $e(), qe(y, !0), St(), kt()), !ee && i > 1 && !ae && !Q && (b = y, Z = !1, ee = X = !0, fe.y = fe.x = 0, Le(he, me), Le(at, n[0]), Le(st, n[1]), _t(at, st, bt), yt.x = Math.abs(bt.x) - me.x, yt.y = Math.abs(bt.y) - me.y, te = ne = Tt(at, st))
                        }
                    }
                },
                Ht = function(e) {
                    if (e.preventDefault(), N) {
                        var t = o.arraySearch(dt, e.pointerId, "id");
                        if (t > -1) {
                            var n = dt[t];
                            n.x = e.pageX, n.y = e.pageY
                        }
                    }
                    if (Y) {
                        var i = Lt(e);
                        if (se || G || ee) J = i;
                        else {
                            var a = Math.abs(i[0].x - lt.x) - Math.abs(i[0].y - lt.y);
                            Math.abs(a) >= ot && (se = a > 0 ? "h" : "v", J = i)
                        }
                    }
                },
                zt = function() {
                    if (J) {
                        var e = J.length;
                        if (0 !== e)
                            if (Le(at, J[0]), rt.x = at.x - lt.x, rt.y = at.y - lt.y, ee && e > 1) {
                                if (lt.x = at.x, lt.y = at.y, !rt.x && !rt.y && wt(J[1], st)) return;
                                Le(st, J[1]), Z || (Z = !0, Ee("zoomGestureStarted"));
                                var t = Tt(at, st),
                                    n = Vt(t);
                                n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (de = !0);
                                var i = 1,
                                    o = We(),
                                    s = Re();
                                if (o > n)
                                    if (l.pinchToClose && !de && b <= a.currItem.initialZoomLevel) {
                                        var r = o - n,
                                            u = 1 - r / (o / 1.2);
                                        Me(u), Ee("onPinchClose", u), le = !0
                                    } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                                else n > s && (i = (n - s) / (6 * o), i > 1 && (i = 1), n = s + i * o);
                                0 > i && (i = 0), te = t, _t(at, st, mt), fe.x += mt.x - bt.x, fe.y += mt.y - bt.y, Le(bt, mt), me.x = De("x", n), me.y = De("y", n), R = n > y, y = n, Ae()
                            } else {
                                if (!se) return;
                                if (re && (re = !1, Math.abs(rt.x) >= ot && (rt.x -= J[0].x - ut.x), Math.abs(rt.y) >= ot && (rt.y -= J[0].y - ut.y)), lt.x = at.x, lt.y = at.y, 0 === rt.x && 0 === rt.y) return;
                                if ("v" === se && l.closeOnVerticalDrag && !Ct()) {
                                    fe.y += rt.y, me.y += rt.y;
                                    var d = Nt();
                                    return V = !0, Ee("onVerticalDrag", d), Me(d), void Ae()
                                }
                                At($e(), at.x, at.y), G = !0, ie = a.currItem.bounds;
                                var c = It("x", rt);
                                c || (It("y", rt), Ie(me), Ae())
                            }
                    }
                },
                Bt = function(e) {
                    if (z.isOldAndroid) {
                        if (U && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function() {
                            U = 0
                        }, 600))
                    }
                    Ee("pointerUp"), $t(e, !1) && e.preventDefault();
                    var t;
                    if (N) {
                        var n = o.arraySearch(dt, e.pointerId, "id");
                        if (n > -1)
                            if (t = dt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                            else {
                                var i = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                };
                                t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                            }
                    }
                    var s, r = Lt(e),
                        l = r.length;
                    if ("mouseup" === e.type && (l = 0), 2 === l) return J = null, !0;
                    1 === l && Le(ut, r[0]), 0 !== l || se || ae || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Ee("touchRelease", e, t));
                    var u = -1;
                    if (0 === l && (Y = !1, o.unbind(window, m, a), St(), ee ? u = 0 : -1 !== vt && (u = $e() - vt)), vt = 1 === l ? $e() : -1, s = -1 !== u && 150 > u ? "zoom" : "swipe", ee && 2 > l && (ee = !1, 1 === l && (s = "zoomPointerUp"), Ee("zoomGestureEnded")), J = null, G || Z || ae || V)
                        if (et(), W || (W = qt()), W.calculateSwipeSpeed("x"), V) {
                            var d = Nt();
                            if (.6 > d) a.close();
                            else {
                                var c = me.y,
                                    p = ue;
                                tt("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                                    me.y = (a.currItem.initialPosition.y - c) * e + c, Me((1 - p) * e + p), Ae()
                                }), Ee("onVerticalDrag", 1)
                            }
                        } else {
                            if ((Q || ae) && 0 === l) {
                                var f = Rt(s, W);
                                if (f) return;
                                s = "zoomPointerUp"
                            }
                            if (!ae) return "swipe" !== s ? void Ut() : void(!Q && y > a.currItem.fitRatio && Wt(W))
                        }
                },
                qt = function() {
                    var e, t, n = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(i) {
                            pt.length > 1 ? (e = $e() - q + 50, t = pt[pt.length - 2][i]) : (e = $e() - B, t = ut[i]), n.lastFlickOffset[i] = lt[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e, t) {
                            n.backAnimStarted[e] || (me[e] > ie.min[e] ? n.backAnimDestination[e] = ie.min[e] : me[e] < ie.max[e] && (n.backAnimDestination[e] = ie.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, tt("bounceZoomPan" + e, me[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function(t) {
                                me[e] = t, Ae()
                            }))))
                        },
                        calculateAnimOffset: function(e) {
                            n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, me[e] += n.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            return Ge.zoomPan && (Ge.zoomPan.raf = P(n.panAnimLoop), n.now = $e(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ae(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (me.x = Math.round(me.x), me.y = Math.round(me.y), Ae(), void Qe("zoomPan")) : void 0
                        }
                    };
                    return n
                },
                Wt = function(e) {
                    return e.calculateSwipeSpeed("y"), ie = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (Je("zoomPan"), e.lastNow = $e(), void e.panAnimLoop())
                },
                Rt = function(e, t) {
                    var n;
                    ae || (ht = p);
                    var i;
                    if ("swipe" === e) {
                        var s = lt.x - ut.x,
                            r = t.lastFlickDist.x < 10;
                        s > it && (r || t.lastFlickOffset.x > 20) ? i = -1 : -it > s && (r || t.lastFlickOffset.x < -20) && (i = 1)
                    }
                    var u;
                    i && (p += i, 0 > p ? (p = l.loop ? Qt() - 1 : 0, u = !0) : p >= Qt() && (p = l.loop ? 0 : Qt() - 1, u = !0), u && !l.loop || (be += i, ge -= i, n = !0));
                    var d, c = ye.x * ge,
                        f = Math.abs(c - gt.x);
                    return n || c > gt.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, ht === p && (n = !1), ae = !0, Ee("mainScrollAnimStart"), tt("mainScroll", gt.x, c, d, o.easing.cubic.out, Pe, function() {
                        et(), ae = !1, ht = -1, (n || ht !== p) && a.updateCurrItem(), Ee("mainScrollAnimComplete")
                    }), n && a.updateCurrItem(!0), n
                },
                Vt = function(e) {
                    return 1 / ne * e * b
                },
                Ut = function() {
                    var e = y,
                        t = We(),
                        n = Re();
                    t > y ? e = t : y > n && (e = n);
                    var i, s = 1,
                        r = ue;
                    return le && !R && !de && t > y ? (a.close(), !0) : (le && (i = function(e) {
                        Me((s - r) * e + r)
                    }), a.zoomTo(e, 0, 300, o.easing.cubic.out, i), !0)
                };
            Se("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var e = function(e, t, n, i, o) {
                            E = e + t, $ = e + n, M = e + i, _ = o ? e + o : ""
                        };
                        N = z.pointerEvent, N && z.touch && (z.touch = !1), N ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : z.touch ? (e("touch", "start", "move", "end", "cancel"), F = !0) : e("mouse", "down", "move", "up"), m = $ + " " + M + " " + _, v = E, N && !F && (F = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = F, g[E] = Ot, g[$] = Ht, g[M] = Bt, _ && (g[_] = g[M]), z.touch && (v += " mousedown", m += " mousemove mouseup", g.mousedown = g[E], g.mousemove = g[$], g.mouseup = g[M]), F || (l.allowPanToNext = !1)
                    }
                }
            });
            var Yt, Xt, Zt, Gt, Kt, Qt, Jt, en = function(t, n, i, s) {
                    Yt && clearTimeout(Yt), Gt = !0, Zt = !0;
                    var r;
                    t.initialLayout ? (r = t.initialLayout, t.initialLayout = null) : r = l.getThumbBoundsFn && l.getThumbBoundsFn(p);
                    var u = i ? l.hideAnimationDuration : l.showAnimationDuration,
                        d = function() {
                            Qe("initialZoom"), i ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (Me(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), Ee("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Gt = !1
                        };
                    if (!u || !r || void 0 === r.x) {
                        var f = function() {
                            Ee("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, Le(me, t.initialPosition), Ae(), e.style.opacity = i ? 0 : 1, Me(1), d()
                        };
                        return void f()
                    }
                    var h = function() {
                        var n = c,
                            s = !a.currItem.src || a.currItem.loadError || l.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = r.w / t.w, me.x = r.x, me.y = r.y - I, a[s ? "template" : "bg"].style.opacity = .001, Ae()), Je("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                            o.addClass(e, "pswp--animate_opacity")
                        }, 30)), Yt = setTimeout(function() {
                            if (Ee("initialZoom" + (i ? "Out" : "In")), i) {
                                var a = r.w / t.w,
                                    l = {
                                        x: me.x,
                                        y: me.y
                                    },
                                    c = y,
                                    p = ue,
                                    f = function(t) {
                                        1 === t ? (y = a, me.x = r.x, me.y = r.y - H) : (y = (a - c) * t + c, me.x = (r.x - l.x) * t + l.x, me.y = (r.y - H - l.y) * t + l.y), Ae(), s ? e.style.opacity = 1 - t : Me(p - t * p)
                                    };
                                n ? tt("initialZoom", 0, 1, u, o.easing.cubic.out, f, d) : (f(1), Yt = setTimeout(d, u + 20))
                            } else y = t.initialZoomLevel, Le(me, t.initialPosition), Ae(), Me(1), s ? e.style.opacity = 1 : Me(1), Yt = setTimeout(d, u + 20)
                        }, i ? 25 : 90)
                    };
                    h()
                },
                tn = {},
                nn = [],
                on = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return Xt.length
                    }
                },
                an = function() {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }
                },
                sn = function(e, t, n) {
                    var i = e.bounds;
                    i.center.x = Math.round((tn.x - t) / 2), i.center.y = Math.round((tn.y - n) / 2) + e.vGap.top, i.max.x = t > tn.x ? Math.round(tn.x - t) : i.center.x, i.max.y = n > tn.y ? Math.round(tn.y - n) + e.vGap.top : i.center.y, i.min.x = t > tn.x ? 0 : i.center.x, i.min.y = n > tn.y ? e.vGap.top : i.center.y
                },
                rn = function(e, t, n) {
                    if (e.src && !e.loadError) {
                        var i = !n;
                        if (i && (e.vGap || (e.vGap = {
                                top: 0,
                                bottom: 0
                            }), Ee("parseVerticalMargin", e)), tn.x = t.x, tn.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                            var o = tn.x / e.w,
                                a = tn.y / e.h;
                            e.fitRatio = a > o ? o : a;
                            var s = l.scaleMode;
                            "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = an())
                        }
                        if (!n) return;
                        return sn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                    }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = an(), e.initialPosition = e.bounds.center, e.bounds
                },
                ln = function(e, t, n, i, o, s) {
                    if (!t.loadError) {
                        var r, u = a.isDragging() && !a.isZooming(),
                            d = e === p || a.isMainScrollAnimating() || u;
                        !o && (F || l.alwaysFadeIn) && d && (r = !0), i && (r && (i.style.opacity = 0), t.imageAppended = !0, cn(i, t.w, t.h), n.appendChild(i), r && setTimeout(function() {
                            i.style.opacity = 1, s && setTimeout(function() {
                                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                            }, 500)
                        }, 50))
                    }
                },
                un = function(e) {
                    e.loading = !0, e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img"),
                        n = function() {
                            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                        };
                    return t.onload = n, t.onerror = function() {
                        e.loadError = !0, n()
                    }, t.src = e.src, t
                },
                dn = function(e, t) {
                    return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0) : void 0
                },
                cn = function(e, t, n) {
                    e.style.width = t + "px", e.style.height = n + "px"
                },
                pn = function() {
                    if (nn.length) {
                        for (var e, t = 0; t < nn.length; t++) e = nn[t], e.holder.index === e.index && ln(e.index, e.item, e.baseDiv, e.img);
                        nn = []
                    }
                };
            Se("Controller", {
                publicMethods: {
                    lazyLoadItem: function(e) {
                        e = ke(e);
                        var t = Kt(e);
                        !t || t.loaded || t.loading || (Ee("gettingData", e, t), t.src && un(t))
                    },
                    initController: function() {
                        o.extend(l, on, !0), a.items = Xt = n, Kt = a.getItemAt, Qt = l.getNumItemsFn, Jt = l.loop, Qt() < 3 && (l.loop = !1), je("beforeChange", function(e) {
                            var t, n = l.preload,
                                i = null === e ? !0 : e > 0,
                                o = Math.min(n[0], Qt()),
                                s = Math.min(n[1], Qt());
                            for (t = 1;
                                (i ? s : o) >= t; t++) a.lazyLoadItem(p + t);
                            for (t = 1;
                                (i ? o : s) >= t; t++) a.lazyLoadItem(p - t)
                        }), je("initialLayout", function() {
                            a.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(p)
                        }), je("mainScrollAnimComplete", pn), je("initialZoomInEnd", pn), je("destroy", function() {
                            for (var e, t = 0; t < Xt.length; t++) e = Xt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            nn = null
                        })
                    },
                    getItemAt: function(e) {
                        return e >= 0 && void 0 !== Xt[e] ? Xt[e] : !1
                    },
                    allowProgressiveImg: function() {
                        return l.forceProgressiveLoading || !F || l.mouseUsed || screen.width > 1200
                    },
                    setContent: function(e, t) {
                        l.loop && (t = ke(t));
                        var n = a.getItemAt(e.index);
                        n && (n.container = null);
                        var i, s = a.getItemAt(t);
                        if (!s) return void(e.el.innerHTML = "");
                        Ee("gettingData", t, s), e.index = t, e.item = s;
                        var r = s.container = o.createEl("pswp__zoom-wrap");
                        if (!s.src && s.html && (s.html.tagName ? r.appendChild(s.html) : r.innerHTML = s.html), dn(s), !s.src || s.loadError || s.loaded) s.src && !s.loadError && (i = o.createEl("pswp__img", "img"), i.style.webkitBackfaceVisibility = "hidden", i.style.opacity = 1, i.src = s.src, cn(i, s.w, s.h), ln(t, s, r, i, !0));
                        else {
                            if (s.loadComplete = function(n) {
                                    if (u) {
                                        if (n.img && (n.img.style.webkitBackfaceVisibility = "hidden"), e && e.index === t) {
                                            if (dn(n, !0)) return n.loadComplete = n.img = null, rn(n, ve), Ne(n), void(e.index === p && a.updateCurrZoomItem());
                                            n.imageAppended ? !Gt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : z.transform && (ae || Gt) ? nn.push({
                                                item: n,
                                                baseDiv: r,
                                                img: n.img,
                                                index: t,
                                                holder: e
                                            }) : ln(t, n, r, n.img, ae || Gt)
                                        }
                                        n.loadComplete = null, n.img = null, Ee("imageLoadComplete", t, n)
                                    }
                                }, o.features.transform) {
                                var d = "pswp__img pswp__img--placeholder";
                                d += s.msrc ? "" : " pswp__img--placeholder--blank";
                                var c = o.createEl(d, s.msrc ? "img" : "");
                                s.msrc && (c.src = s.msrc), cn(c, s.w, s.h), r.appendChild(c), s.placeholder = c
                            }
                            s.loading || un(s), a.allowProgressiveImg() && (!Zt && z.transform ? nn.push({
                                item: s,
                                baseDiv: r,
                                img: s.img,
                                index: t,
                                holder: e
                            }) : ln(t, s, r, s.img, !0, !0))
                        }
                        rn(s, ve), Zt || t !== p ? Ne(s) : (oe = r.style, en(s, i || s.img)), e.el.innerHTML = "", e.el.appendChild(r)
                    },
                    cleanSlide: function(e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var fn, hn = {},
                mn = function(e, t, n) {
                    var i = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: e,
                            target: e.target,
                            releasePoint: t,
                            pointerType: n || "touch"
                        };
                    i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
                };
            Se("Tap", {
                publicMethods: {
                    initTap: function() {
                        je("firstTouchStart", a.onTapStart), je("touchRelease", a.onTapRelease), je("destroy", function() {
                            hn = {}, fn = null
                        })
                    },
                    onTapStart: function(e) {
                        e.length > 1 && (clearTimeout(fn), fn = null)
                    },
                    onTapRelease: function(e, t) {
                        if (t && !G && !X && !Ke) {
                            var n = t;
                            if (fn && (clearTimeout(fn), fn = null, xt(n, hn))) return void Ee("doubleTap", n);
                            if ("mouse" === t.type) return void mn(e, t, "mouse");
                            var i = e.target.tagName.toUpperCase();
                            if ("BUTTON" === i || o.hasClass(e.target, "pswp__single-tap")) return void mn(e, t);
                            Le(hn, n), fn = setTimeout(function() {
                                mn(e, t), fn = null
                            }, 300)
                        }
                    }
                }
            });
            var vn;
            Se("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        O || (F ? je("mouseUsed", function() {
                            a.setupDesktopZoom()
                        }) : a.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(t) {
                        vn = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        je("bindEvents", function() {
                            o.bind(e, n, a.handleMouseWheel)
                        }), je("unbindEvents", function() {
                            vn && o.unbind(e, n, a.handleMouseWheel)
                        }), a.mouseZoomedIn = !1;
                        var i, s = function() {
                                a.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > y ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), r()
                            },
                            r = function() {
                                i && (o.removeClass(e, "pswp--dragging"), i = !1)
                            };
                        je("resize", s), je("afterChange", s), je("pointerDown", function() {
                            a.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
                        }), je("pointerUp", r), t || s()
                    },
                    handleMouseWheel: function(e) {
                        if (y <= a.currItem.fitRatio) return l.closeOnScroll ? A && Math.abs(e.deltaY) > 2 && (c = !0, a.close()) : e.preventDefault(), !0;
                        if (e.preventDefault(), e.stopPropagation(), vn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (vn.x = 18 * e.deltaX, vn.y = 18 * e.deltaY) : (vn.x = e.deltaX, vn.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (vn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? vn.y = -.16 * e.wheelDeltaY : vn.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            vn.y = e.detail
                        }
                        qe(y, !0), a.panTo(me.x - vn.x, me.y - vn.y)
                    },
                    toggleDesktopZoom: function(t) {
                        t = t || {
                            x: ve.x / 2,
                            y: ve.y / 2 + H
                        };
                        var n = l.getDoubleTapZoom(!0, a.currItem),
                            i = y === n;
                        a.mouseZoomedIn = !i, a.zoomTo(i ? a.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var gn, yn, bn, wn, xn, Tn, Sn, kn, Cn, jn, En, $n, Mn = {
                    history: !0,
                    galleryUID: 1
                },
                _n = function() {
                    return En.hash.substring(1)
                },
                An = function() {
                    gn && clearTimeout(gn), bn && clearTimeout(bn)
                },
                Nn = function() {
                    var e = _n(),
                        t = {};
                    if (e.length < 5) return t;
                    for (var n = e.split("&"), i = 0; i < n.length; i++)
                        if (n[i]) {
                            var o = n[i].split("=");
                            o.length < 2 || (t[o[0]] = o[1])
                        }
                    return t.pid = parseInt(t.pid, 10) - 1, t.pid < 0 && (t.pid = 0), t
                },
                Fn = function() {
                    if (bn && clearTimeout(bn), Ke || Y) return void(bn = setTimeout(Fn, 500));
                    wn ? clearTimeout(yn) : wn = !0;
                    var e = Sn + "&gid=" + l.galleryUID + "&pid=" + (p + 1);
                    kn || -1 === En.hash.indexOf(e) && (jn = !0);
                    var t = En.href.split("#")[0] + "#" + e;
                    $n ? "#" + e !== window.location.hash && history[kn ? "replaceState" : "pushState"]("", document.title, t) : kn ? En.replace(t) : En.hash = e, kn = !0, yn = setTimeout(function() {
                        wn = !1
                    }, 60)
                };
            Se("History", {
                publicMethods: {
                    initHistory: function() {
                        if (o.extend(l, Mn, !0), l.history) {
                            En = window.location, jn = !1, Cn = !1, kn = !1, Sn = _n(), $n = "pushState" in history, Sn.indexOf("gid=") > -1 && (Sn = Sn.split("&gid=")[0], Sn = Sn.split("?gid=")[0]), je("afterChange", a.updateURL), je("unbindEvents", function() {
                                o.unbind(window, "hashchange", a.onHashChange)
                            });
                            var e = function() {
                                Tn = !0, Cn || (jn ? history.back() : Sn ? En.hash = Sn : $n ? history.pushState("", document.title, En.pathname + En.search) : En.hash = ""), An()
                            };
                            je("unbindEvents", function() {
                                c && e()
                            }), je("destroy", function() {
                                Tn || e()
                            }), je("firstUpdate", function() {
                                p = Nn().pid
                            });
                            var t = Sn.indexOf("pid=");
                            t > -1 && (Sn = Sn.substring(0, t), "&" === Sn.slice(-1) && (Sn = Sn.slice(0, -1))), setTimeout(function() {
                                u && o.bind(window, "hashchange", a.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function() {
                        return _n() === Sn ? (Cn = !0, void a.close()) : void(wn || (xn = !0, a.goTo(Nn().pid), xn = !1))
                    },
                    updateURL: function() {
                        An(), xn || (kn ? gn = setTimeout(Fn, 800) : Fn())
                    }
                }
            }), o.extend(a, nt)
        };
        return e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
    }(this, function() {
        "use strict";
        var e = function(e, t) {
            var n, i, o, a, s, r, l, u, d, c, p, f, h, m, v, g, y, b, w, x = this,
                T = !1,
                S = !0,
                k = !0,
                C = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / "
                },
                j = function(e) {
                    if (g) return !0;
                    e = e || window.event, v.timeToIdle && v.mouseUsed && !d && L();
                    for (var n, i, o = e.target || e.srcElement, a = o.className, s = 0; s < R.length; s++) n = R[s], n.onTap && a.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                    if (i) {
                        e.stopPropagation && e.stopPropagation(), g = !0;
                        var r = t.features.isOldAndroid ? 600 : 30;
                        y = setTimeout(function() {
                            g = !1
                        }, r)
                    }
                },
                E = function() {
                    return !e.likelyTouchDevice || v.mouseUsed || screen.width > 1200
                },
                $ = function(e, n, i) {
                    t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
                },
                M = function() {
                    var e = 1 === v.getNumItemsFn();
                    e !== m && ($(i, "ui--one-slide", e),
                        m = e)
                },
                _ = function() {
                    $(l, "share-modal--hidden", k)
                },
                A = function() {
                    return k = !k, k ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                        k && _()
                    }, 300)) : (_(), setTimeout(function() {
                        k || t.addClass(l, "pswp__share-modal--fade-in")
                    }, 30)), k || F(), !1
                },
                N = function(t) {
                    t = t || window.event;
                    var n = t.target || t.srcElement;
                    return e.shout("shareLinkClick", t, n), n.href ? n.hasAttribute("download") ? !0 : (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), k || A(), !1) : !1
                },
                F = function() {
                    for (var e, t, n, i, o, a = "", s = 0; s < v.shareButtons.length; s++) e = v.shareButtons[s], n = v.getImageURLForShare(e), i = v.getPageURLForShare(e), o = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), a += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (a = v.parseShareButtonOut(e, a));
                    l.children[0].innerHTML = a, l.children[0].onclick = N
                },
                P = function(e) {
                    for (var n = 0; n < v.closeElClasses.length; n++)
                        if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0
                },
                D = 0,
                L = function() {
                    clearTimeout(w), D = 0, d && x.setIdle(!1)
                },
                I = function(e) {
                    e = e ? e : window.event;
                    var t = e.relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function() {
                        x.setIdle(!0)
                    }, v.timeToIdleOutside))
                },
                O = function() {
                    v.fullscreenEl && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
                },
                H = function() {
                    v.preloaderEl && (z(!0), c("beforeChange", function() {
                        clearTimeout(h), h = setTimeout(function() {
                            e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && z(!1) : z(!0)
                        }, v.loadingIndicatorDelay)
                    }), c("imageLoadComplete", function(t, n) {
                        e.currItem === n && z(!0)
                    }))
                },
                z = function(e) {
                    f !== e && ($(p, "preloader--active", !e), f = e)
                },
                B = function(e) {
                    var n = e.vGap;
                    if (E()) {
                        var s = v.barsSize;
                        if (v.captionEl && "auto" === s.bottom)
                            if (a || (a = t.createEl("pswp__caption pswp__caption--fake"), a.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(a, o), t.addClass(i, "pswp__ui--fit")), v.addCaptionHTMLFn(e, a, !0)) {
                                var r = a.clientHeight;
                                n.bottom = parseInt(r, 10) || 44
                            } else n.bottom = s.top;
                        else n.bottom = "auto" === s.bottom ? 0 : s.bottom;
                        n.top = s.top
                    } else n.top = n.bottom = 0
                },
                q = function() {
                    v.timeToIdle && c("mouseUsed", function() {
                        t.bind(document, "mousemove", L), t.bind(document, "mouseout", I), b = setInterval(function() {
                            D++, 2 === D && x.setIdle(!0)
                        }, v.timeToIdle / 2)
                    })
                },
                W = function() {
                    c("onVerticalDrag", function(e) {
                        S && .95 > e ? x.hideControls() : !S && e >= .95 && x.showControls()
                    });
                    var e;
                    c("onPinchClose", function(t) {
                        S && .9 > t ? (x.hideControls(), e = !0) : e && !S && t > .9 && x.showControls()
                    }), c("zoomGestureEnded", function() {
                        e = !1, e && !S && x.showControls()
                    })
                },
                R = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(e) {
                        o = e
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(e) {
                        l = e
                    },
                    onTap: function() {
                        A()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(e) {
                        r = e
                    },
                    onTap: function() {
                        A()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: e.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(e) {
                        s = e
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: e.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: e.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: e.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        n.isFullscreen() ? n.exit() : n.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(e) {
                        p = e
                    }
                }],
                V = function() {
                    var e, n, o, a = function(i) {
                        if (i)
                            for (var a = i.length, s = 0; a > s; s++) {
                                e = i[s], n = e.className;
                                for (var r = 0; r < R.length; r++) o = R[r], n.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                            }
                    };
                    a(i.children);
                    var s = t.getChildByClass(i, "pswp__top-bar");
                    s && a(s.children)
                };
            x.init = function() {
                t.extend(e.options, C, !0), v = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), c = e.listen, W(), c("beforeChange", x.update), c("doubleTap", function(t) {
                    var n = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
                }), c("preventDragEvent", function(e, t, n) {
                    var i = e.target || e.srcElement;
                    i && i.className && e.type.indexOf("mouse") > -1 && (i.className.indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
                }), c("bindEvents", function() {
                    t.bind(i, "pswpTap click", j), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
                }), c("unbindEvents", function() {
                    k || A(), b && clearInterval(b), t.unbind(document, "mouseout", I), t.unbind(document, "mousemove", L), t.unbind(i, "pswpTap click", j), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null)
                }), c("destroy", function() {
                    v.captionEl && (a && i.removeChild(a), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
                }), v.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), c("initialZoomIn", function() {
                    v.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
                }), c("initialZoomOut", function() {
                    t.addClass(i, "pswp__ui--hidden")
                }), c("parseVerticalMargin", B), V(), v.shareEl && r && l && (k = !0), M(), q(), O(), H()
            }, x.setIdle = function(e) {
                d = e, $(i, "ui--idle", e)
            }, x.update = function() {
                S && e.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, o), $(o, "caption--empty", !e.currItem.title)), T = !0) : T = !1, k || A(), M()
            }, x.updateFullscreen = function(i) {
                i && setTimeout(function() {
                    e.setScrollOffset(0, t.getScrollY())
                }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, x.updateIndexIndicator = function() {
                v.counterEl && (s.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
            }, x.onGlobalTap = function(n) {
                n = n || window.event;
                var i = n.target || n.srcElement;
                if (!g)
                    if (n.detail && "mouse" === n.detail.pointerType) {
                        if (P(i)) return void e.close();
                        t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                    } else if (v.tapToToggleControls && (S ? x.hideControls() : x.showControls()), v.tapToClose && (t.hasClass(i, "pswp__img") || P(i))) return void e.close()
            }, x.onMouseOver = function(e) {
                e = e || window.event;
                var t = e.target || e.srcElement;
                $(i, "ui--over-close", P(t))
            }, x.hideControls = function() {
                t.addClass(i, "pswp__ui--hidden"), S = !1
            }, x.showControls = function() {
                S = !0, T || x.update(), t.removeClass(i, "pswp__ui--hidden")
            }, x.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, x.getFullscreenAPI = function() {
                var t, n = document.documentElement,
                    i = "fullscreenchange";
                return n.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: i
                } : n.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + i
                } : n.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + i
                } : n.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function() {
                    return u = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function() {
                    return v.closeOnScroll = u, document[this.exitK]()
                }, t.isFullscreen = function() {
                    return document[this.elementK]
                }), t
            }
        };
        return e
    });
var mejs = mejs || {};
mejs.version = "2.15.1", mejs.meIndex = 0, mejs.plugins = {
        silverlight: [{
            version: [3, 0],
            types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
        }],
        flash: [{
            version: [9, 0, 124],
            types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube", "application/x-mpegURL"]
        }],
        youtube: [{
            version: null,
            types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
        }],
        vimeo: [{
            version: null,
            types: ["video/vimeo", "video/x-vimeo"]
        }]
    }, mejs.Utility = {
        encodeUrl: function(e) {
            return encodeURIComponent(e)
        },
        escapeHTML: function(e) {
            return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
        },
        absolutizeUrl: function(e) {
            var t = document.createElement("div");
            return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href
        },
        getScriptPath: function(e) {
            for (var t, n, i, o, a, s, r = 0, l = "", u = "", d = document.getElementsByTagName("script"), c = d.length, p = e.length; c > r; r++) {
                for (o = d[r].src, n = o.lastIndexOf("/"), n > -1 ? (s = o.substring(n + 1), a = o.substring(0, n + 1)) : (s = o, a = ""), t = 0; p > t; t++)
                    if (u = e[t], i = s.indexOf(u), i > -1) {
                        l = a;
                        break
                    }
                if ("" !== l) break
            }
            return l
        },
        secondsToTimeCode: function(e, t, n, i) {
            "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
            var o = Math.floor(e / 3600) % 24,
                a = Math.floor(e / 60) % 60,
                s = Math.floor(e % 60),
                r = Math.floor((e % 1 * i).toFixed(3)),
                l = (t || o > 0 ? (10 > o ? "0" + o : o) + ":" : "") + (10 > a ? "0" + a : a) + ":" + (10 > s ? "0" + s : s) + (n ? ":" + (10 > r ? "0" + r : r) : "");
            return l
        },
        timeCodeToSeconds: function(e, t, n, i) {
            "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
            var o = e.split(":"),
                a = parseInt(o[0], 10),
                s = parseInt(o[1], 10),
                r = parseInt(o[2], 10),
                l = 0,
                u = 0;
            return n && (l = parseInt(o[3]) / i), u = 3600 * a + 60 * s + r + l
        },
        convertSMPTEtoSeconds: function(e) {
            if ("string" != typeof e) return !1;
            e = e.replace(",", ".");
            var t = 0,
                n = -1 != e.indexOf(".") ? e.split(".")[1].length : 0,
                i = 1;
            e = e.split(":").reverse();
            for (var o = 0; o < e.length; o++) i = 1, o > 0 && (i = Math.pow(60, o)), t += Number(e[o]) * i;
            return Number(t.toFixed(n))
        },
        removeSwf: function(e) {
            var t = document.getElementById(e);
            t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none", function() {
                4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
            }()) : t.parentNode.removeChild(t))
        },
        removeObjectInIE: function(e) {
            var t = document.getElementById(e);
            if (t) {
                for (var n in t) "function" == typeof t[n] && (t[n] = null);
                t.parentNode.removeChild(t)
            }
        }
    }, mejs.PluginDetector = {
        hasPluginVersion: function(e, t) {
            var n = this.plugins[e];
            return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] == t[0] && n[1] > t[1] || n[0] == t[0] && n[1] == t[1] && n[2] >= t[2]
        },
        nav: window.navigator,
        ua: window.navigator.userAgent.toLowerCase(),
        plugins: [],
        addPlugin: function(e, t, n, i, o) {
            this.plugins[e] = this.detectPlugin(t, n, i, o)
        },
        detectPlugin: function(e, t, n, i) {
            var o, a, s, r = [0, 0, 0];
            if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
                if (o = this.nav.plugins[e].description, o && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin))
                    for (r = o.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), a = 0; a < r.length; a++) r[a] = parseInt(r[a].match(/\d+/), 10)
            } else if ("undefined" != typeof window.ActiveXObject) try {
                s = new ActiveXObject(n), s && (r = i(s))
            } catch (l) {}
            return r
        }
    }, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
        var t = [],
            n = e.GetVariable("$version");
        return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
    }), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(e) {
        var t = [0, 0, 0, 0],
            n = function(e, t, n, i) {
                for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);) t[n] += i;
                t[n] -= i
            };
        return n(e, t, 0, 1), n(e, t, 1, 1), n(e, t, 2, 1e4), n(e, t, 2, 1e3), n(e, t, 2, 100), n(e, t, 2, 10), n(e, t, 2, 1), n(e, t, 3, 1), t
    }), mejs.MediaFeatures = {
        init: function() {
            var e, t, n = this,
                i = document,
                o = mejs.PluginDetector.nav,
                a = mejs.PluginDetector.ua.toLowerCase(),
                s = ["source", "track", "audio", "video"];
            n.isiPad = null !== a.match(/ipad/i), n.isiPhone = null !== a.match(/iphone/i), n.isiOS = n.isiPhone || n.isiPad, n.isAndroid = null !== a.match(/android/i), n.isBustedAndroid = null !== a.match(/android 2\.[12]/), n.isBustedNativeHTTPS = "https:" === location.protocol && (null !== a.match(/android [12]\./) || null !== a.match(/macintosh.* version.* safari/)), n.isIE = -1 != o.appName.toLowerCase().indexOf("microsoft") || null !== o.appName.toLowerCase().match(/trident/gi), n.isChrome = null !== a.match(/chrome/gi), n.isChromium = null !== a.match(/chromium/gi), n.isFirefox = null !== a.match(/firefox/gi), n.isWebkit = null !== a.match(/webkit/gi), n.isGecko = null !== a.match(/gecko/gi) && !n.isWebkit && !n.isIE, n.isOpera = null !== a.match(/opera/gi), n.hasTouch = "ontouchstart" in window, n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
            for (e = 0; e < s.length; e++) t = document.createElement(s[e]);
            n.supportsMediaTag = "undefined" != typeof t.canPlayType || n.isBustedAndroid;
            try {
                t.canPlayType("video/mp4")
            } catch (r) {
                n.supportsMediaTag = !1
            }
            n.hasSemiNativeFullScreen = "undefined" != typeof t.webkitEnterFullscreen, n.hasNativeFullscreen = "undefined" != typeof t.requestFullscreen, n.hasWebkitNativeFullScreen = "undefined" != typeof t.webkitRequestFullScreen, n.hasMozNativeFullScreen = "undefined" != typeof t.mozRequestFullScreen, n.hasMsNativeFullScreen = "undefined" != typeof t.msRequestFullscreen, n.hasTrueNativeFullScreen = n.hasWebkitNativeFullScreen || n.hasMozNativeFullScreen || n.hasMsNativeFullScreen, n.nativeFullScreenEnabled = n.hasTrueNativeFullScreen, n.hasMozNativeFullScreen ? n.nativeFullScreenEnabled = document.mozFullScreenEnabled : n.hasMsNativeFullScreen && (n.nativeFullScreenEnabled = document.msFullscreenEnabled), n.isChrome && (n.hasSemiNativeFullScreen = !1), n.hasTrueNativeFullScreen && (n.fullScreenEventName = "", n.hasWebkitNativeFullScreen ? n.fullScreenEventName = "webkitfullscreenchange" : n.hasMozNativeFullScreen ? n.fullScreenEventName = "mozfullscreenchange" : n.hasMsNativeFullScreen && (n.fullScreenEventName = "MSFullscreenChange"), n.isFullScreen = function() {
                return n.hasMozNativeFullScreen ? i.mozFullScreen : n.hasWebkitNativeFullScreen ? i.webkitIsFullScreen : n.hasMsNativeFullScreen ? null !== i.msFullscreenElement : void 0
            }, n.requestFullScreen = function(e) {
                n.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : n.hasMozNativeFullScreen ? e.mozRequestFullScreen() : n.hasMsNativeFullScreen && e.msRequestFullscreen()
            }, n.cancelFullScreen = function() {
                n.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : n.hasMozNativeFullScreen ? document.mozCancelFullScreen() : n.hasMsNativeFullScreen && document.msExitFullscreen()
            }), n.hasSemiNativeFullScreen && a.match(/mac os x 10_5/i) && (n.hasNativeFullScreen = !1, n.hasSemiNativeFullScreen = !1)
        }
    }, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
        pluginType: "native",
        isFullScreen: !1,
        setCurrentTime: function(e) {
            this.currentTime = e
        },
        setMuted: function(e) {
            this.muted = e
        },
        setVolume: function(e) {
            this.volume = e
        },
        stop: function() {
            this.pause()
        },
        setSrc: function(e) {
            for (var t = this.getElementsByTagName("source"); t.length > 0;) this.removeChild(t[0]);
            if ("string" == typeof e) this.src = e;
            else {
                var n, i;
                for (n = 0; n < e.length; n++)
                    if (i = e[n], this.canPlayType(i.type)) {
                        this.src = i.src;
                        break
                    }
            }
        },
        setVideoSize: function(e, t) {
            this.width = e, this.height = t
        }
    }, mejs.PluginMediaElement = function(e, t, n) {
        this.id = e, this.pluginType = t, this.src = n, this.events = {}, this.attributes = {}
    }, mejs.PluginMediaElement.prototype = {
        pluginElement: null,
        pluginType: "",
        isFullScreen: !1,
        playbackRate: -1,
        defaultPlaybackRate: -1,
        seekable: [],
        played: [],
        paused: !0,
        ended: !1,
        seeking: !1,
        duration: 0,
        error: null,
        tagName: "",
        muted: !1,
        volume: 1,
        currentTime: 0,
        play: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
        },
        load: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
        },
        pause: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
        },
        stop: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
        },
        canPlayType: function(e) {
            var t, n, i, o = mejs.plugins[this.pluginType];
            for (t = 0; t < o.length; t++)
                if (i = o[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, i.version))
                    for (n = 0; n < i.types.length; n++)
                        if (e == i.types[n]) return "probably";
            return ""
        },
        positionFullscreenButton: function(e, t, n) {
            null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), n)
        },
        hideFullscreenButton: function() {
            null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
        },
        setSrc: function(e) {
            if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)), this.src = mejs.Utility.absolutizeUrl(e);
            else {
                var t, n;
                for (t = 0; t < e.length; t++)
                    if (n = e[t], this.canPlayType(n.type)) {
                        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(n.src)), this.src = mejs.Utility.absolutizeUrl(e);
                        break
                    }
            }
        },
        setCurrentTime: function(e) {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), this.currentTime = e)
        },
        setVolume: function(e) {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * e) : this.pluginApi.setVolume(e), this.volume = e)
        },
        setMuted: function(e) {
            null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = e, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(e), this.muted = e)
        },
        setVideoSize: function(e, t) {
            this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = e + "px", this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
        },
        setFullscreen: function(e) {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
        },
        enterFullScreen: function() {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
        },
        exitFullScreen: function() {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
        },
        addEventListener: function(e, t) {
            this.events[e] = this.events[e] || [], this.events[e].push(t)
        },
        removeEventListener: function(e, t) {
            if (!e) return this.events = {}, !0;
            var n = this.events[e];
            if (!n) return !0;
            if (!t) return this.events[e] = [], !0;
            for (var i = 0; i < n.length; i++)
                if (n[i] === t) return this.events[e].splice(i, 1), !0;
            return !1
        },
        dispatchEvent: function(e) {
            var t, n, i = this.events[e];
            if (i)
                for (n = Array.prototype.slice.call(arguments, 1), t = 0; t < i.length; t++) i[t].apply(null, n)
        },
        hasAttribute: function(e) {
            return e in this.attributes
        },
        removeAttribute: function(e) {
            delete this.attributes[e]
        },
        getAttribute: function(e) {
            return this.hasAttribute(e) ? this.attributes[e] : ""
        },
        setAttribute: function(e, t) {
            this.attributes[e] = t
        },
        remove: function() {
            mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
        }
    }, mejs.MediaPluginBridge = {
        pluginMediaElements: {},
        htmlMediaElements: {},
        registerPluginElement: function(e, t, n) {
            this.pluginMediaElements[e] = t, this.htmlMediaElements[e] = n
        },
        unregisterPluginElement: function(e) {
            delete this.pluginMediaElements[e], delete this.htmlMediaElements[e]
        },
        initPlugin: function(e) {
            var t = this.pluginMediaElements[e],
                n = this.htmlMediaElements[e];
            if (t) {
                switch (t.pluginType) {
                    case "flash":
                        t.pluginElement = t.pluginApi = document.getElementById(e);
                        break;
                    case "silverlight":
                        t.pluginElement = document.getElementById(t.id), t.pluginApi = t.pluginElement.Content.MediaElementJS
                }
                null != t.pluginApi && t.success && t.success(t, n)
            }
        },
        fireEvent: function(e, t, n) {
            var i, o, a, s = this.pluginMediaElements[e];
            if (s) {
                i = {
                    type: t,
                    target: s
                };
                for (o in n) s[o] = n[o], i[o] = n[o];
                a = n.bufferedTime || 0, i.target.buffered = i.buffered = {
                    start: function() {
                        return 0
                    },
                    end: function() {
                        return a
                    },
                    length: 1
                }, s.dispatchEvent(i.type, i)
            }
        }
    }, mejs.MediaElementDefaults = {
        mode: "auto",
        plugins: ["flash", "silverlight", "youtube", "vimeo"],
        enablePluginDebug: !1,
        httpsBasicAuthSite: !1,
        type: "",
        pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
        flashName: "flashmediaelement.swf",
        flashStreamer: "",
        enablePluginSmoothing: !1,
        enablePseudoStreaming: !1,
        pseudoStreamingStartQueryParam: "start",
        silverlightName: "silverlightmediaelement.xap",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        pluginWidth: -1,
        pluginHeight: -1,
        pluginVars: [],
        timerRate: 250,
        startVolume: .8,
        success: function() {},
        error: function() {}
    }, mejs.MediaElement = function(e, t) {
        return mejs.HtmlMediaElementShim.create(e, t)
    }, mejs.HtmlMediaElementShim = {
        create: function(e, t) {
            var n, i, o = mejs.MediaElementDefaults,
                a = "string" == typeof e ? document.getElementById(e) : e,
                s = a.tagName.toLowerCase(),
                r = "audio" === s || "video" === s,
                l = r ? a.getAttribute("src") : a.getAttribute("href"),
                u = a.getAttribute("poster"),
                d = a.getAttribute("autoplay"),
                c = a.getAttribute("preload"),
                p = a.getAttribute("controls");
            for (i in t) o[i] = t[i];
            return l = "undefined" == typeof l || null === l || "" == l ? null : l, u = "undefined" == typeof u || null === u ? "" : u, c = "undefined" == typeof c || null === c || "false" === c ? "none" : c, d = !("undefined" == typeof d || null === d || "false" === d), p = !("undefined" == typeof p || null === p || "false" === p), n = this.determinePlayback(a, o, mejs.MediaFeatures.supportsMediaTag, r, l), n.url = null !== n.url ? mejs.Utility.absolutizeUrl(n.url) : "", "native" == n.method ? (mejs.MediaFeatures.isBustedAndroid && (a.src = n.url, a.addEventListener("click", function() {
                a.play()
            }, !1)), this.updateNative(n, o, d, c)) : "" !== n.method ? this.createPlugin(n, o, u, d, c, p) : (this.createErrorMessage(n, o, u), this)
        },
        determinePlayback: function(e, t, n, i, o) {
            var a, s, r, l, u, d, c, p, f, h, m, v = [],
                g = {
                    method: "",
                    url: "",
                    htmlMediaElement: e,
                    isVideo: "audio" != e.tagName.toLowerCase()
                };
            if ("undefined" != typeof t.type && "" !== t.type)
                if ("string" == typeof t.type) v.push({
                    type: t.type,
                    url: o
                });
                else
                    for (a = 0; a < t.type.length; a++) v.push({
                        type: t.type[a],
                        url: o
                    });
            else if (null !== o) d = this.formatType(o, e.getAttribute("type")), v.push({
                type: d,
                url: o
            });
            else
                for (a = 0; a < e.childNodes.length; a++) u = e.childNodes[a], 1 == u.nodeType && "source" == u.tagName.toLowerCase() && (o = u.getAttribute("src"), d = this.formatType(o, u.getAttribute("type")), m = u.getAttribute("media"), (!m || !window.matchMedia || window.matchMedia && window.matchMedia(m).matches) && v.push({
                    type: d,
                    url: o
                }));
            if (!i && v.length > 0 && null !== v[0].url && this.getTypeFromFile(v[0].url).indexOf("audio") > -1 && (g.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function(e) {
                    return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
                }), mejs.MediaFeatures.isChromium && (e.canPlayType = function(e) {
                    return null !== e.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
                }), n && ("auto" === t.mode || "auto_plugin" === t.mode || "native" === t.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || t.httpsBasicAuthSite !== !0)) {
                for (i || (h = document.createElement(g.isVideo ? "video" : "audio"), e.parentNode.insertBefore(h, e), e.style.display = "none", g.htmlMediaElement = e = h), a = 0; a < v.length; a++)
                    if ("video/m3u8" == v[a].type || "" !== e.canPlayType(v[a].type).replace(/no/, "") || "" !== e.canPlayType(v[a].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== e.canPlayType(v[a].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                        g.method = "native", g.url = v[a].url;
                        break
                    }
                if ("native" === g.method && (null !== g.url && (e.src = g.url), "auto_plugin" !== t.mode)) return g
            }
            if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode)
                for (a = 0; a < v.length; a++)
                    for (d = v[a].type, s = 0; s < t.plugins.length; s++)
                        for (c = t.plugins[s], p = mejs.plugins[c], r = 0; r < p.length; r++)
                            if (f = p[r], null == f.version || mejs.PluginDetector.hasPluginVersion(c, f.version))
                                for (l = 0; l < f.types.length; l++)
                                    if (d == f.types[l]) return g.method = c, g.url = v[a].url, g;
            return "auto_plugin" === t.mode && "native" === g.method ? g : ("" === g.method && v.length > 0 && (g.url = v[0].url), g)
        },
        formatType: function(e, t) {
            return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
        },
        getTypeFromFile: function(e) {
            e = e.split("?")[0];
            var t = e.substring(e.lastIndexOf(".") + 1).toLowerCase();
            return (/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video" : "audio") + "/" + this.getTypeFromExtension(t)
        },
        getTypeFromExtension: function(e) {
            switch (e) {
                case "mp4":
                case "m4v":
                case "m4a":
                    return "mp4";
                case "webm":
                case "webma":
                case "webmv":
                    return "webm";
                case "ogg":
                case "oga":
                case "ogv":
                    return "ogg";
                default:
                    return e
            }
        },
        createErrorMessage: function(e, t, n) {
            var i = e.htmlMediaElement,
                o = document.createElement("div");
            o.className = "me-cannotplay";
            try {
                o.style.width = i.width + "px", o.style.height = i.height + "px"
            } catch (a) {}
            t.customError ? o.innerHTML = t.customError : o.innerHTML = "" !== n ? '<a href="' + e.url + '"><img src="' + n + '" width="100%" height="100%" /></a>' : '<a href="' + e.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>", i.parentNode.insertBefore(o, i), i.style.display = "none", t.error(i)
        },
        createPlugin: function(e, t, n, i, o, a) {
            var s, r, l, u = e.htmlMediaElement,
                d = 1,
                c = 1,
                p = "me_" + e.method + "_" + mejs.meIndex++,
                f = new mejs.PluginMediaElement(p, e.method, e.url),
                h = document.createElement("div");
            f.tagName = u.tagName;
            for (var m = 0; m < u.attributes.length; m++) {
                var v = u.attributes[m];
                1 == v.specified && f.setAttribute(v.name, v.value)
            }
            for (r = u.parentNode; null !== r && "body" !== r.tagName.toLowerCase() && null != r.parentNode;) {
                if ("p" === r.parentNode.tagName.toLowerCase()) {
                    r.parentNode.parentNode.insertBefore(r, r.parentNode);
                    break
                }
                r = r.parentNode
            }
            switch (e.isVideo ? (d = t.pluginWidth > 0 ? t.pluginWidth : t.videoWidth > 0 ? t.videoWidth : null !== u.getAttribute("width") ? u.getAttribute("width") : t.defaultVideoWidth, c = t.pluginHeight > 0 ? t.pluginHeight : t.videoHeight > 0 ? t.videoHeight : null !== u.getAttribute("height") ? u.getAttribute("height") : t.defaultVideoHeight, d = mejs.Utility.encodeUrl(d), c = mejs.Utility.encodeUrl(c)) : t.enablePluginDebug && (d = 320, c = 240), f.success = t.success, mejs.MediaPluginBridge.registerPluginElement(p, f, u), h.className = "me-plugin", h.id = p + "_container", e.isVideo ? u.parentNode.insertBefore(h, u) : document.body.insertBefore(h, document.body.childNodes[0]), l = ["id=" + p, "isvideo=" + (e.isVideo ? "true" : "false"), "autoplay=" + (i ? "true" : "false"), "preload=" + o, "width=" + d, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + c, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam], null !== e.url && ("flash" == e.method ? l.push("file=" + mejs.Utility.encodeUrl(e.url)) : l.push("file=" + e.url)), t.enablePluginDebug && l.push("debug=true"), t.enablePluginSmoothing && l.push("smoothing=true"), t.enablePseudoStreaming && l.push("pseudostreaming=true"), a && l.push("controls=true"), t.pluginVars && (l = l.concat(t.pluginVars)), e.method) {
                case "silverlight":
                    h.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + p + '" name="' + p + '" width="' + d + '" height="' + c + '" class="mejs-shim"><param name="initParams" value="' + l.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
                    break;
                case "flash":
                    mejs.MediaFeatures.isIE ? (s = document.createElement("div"), h.appendChild(s), s.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + p + '" width="' + d + '" height="' + c + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + l.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : h.innerHTML = '<embed id="' + p + '" name="' + p + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + l.join("&") + '" width="' + d + '" height="' + c + '" scale="default"class="mejs-shim"></embed>';
                    break;
                case "youtube":
                    var g; - 1 != e.url.lastIndexOf("youtu.be") ? (g = e.url.substr(e.url.lastIndexOf("/") + 1), -1 != g.indexOf("?") && (g = g.substr(0, g.indexOf("?")))) : g = e.url.substr(e.url.lastIndexOf("=") + 1), youtubeSettings = {
                        container: h,
                        containerId: h.id,
                        pluginMediaElement: f,
                        pluginId: p,
                        videoId: g,
                        height: c,
                        width: d
                    }, mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                    break;
                case "vimeo":
                    var y = p + "_player";
                    if (f.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1), h.innerHTML = '<iframe src="//player.vimeo.com/video/' + f.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + y + '" width="' + d + '" height="' + c + '" frameborder="0" class="mejs-shim" id="' + y + '"></iframe>', "function" == typeof $f) {
                        var b = $f(h.childNodes[0]);
                        b.addEvent("ready", function() {
                            function e(e, t, n, i) {
                                var o = {
                                    type: n,
                                    target: t
                                };
                                "timeupdate" == n && (t.currentTime = o.currentTime = i.seconds, t.duration = o.duration = i.duration), t.dispatchEvent(o.type, o)
                            }
                            $.extend(b, {
                                playVideo: function() {
                                    b.api("play")
                                },
                                stopVideo: function() {
                                    b.api("unload")
                                },
                                pauseVideo: function() {
                                    b.api("pause")
                                },
                                seekTo: function(e) {
                                    b.api("seekTo", e)
                                },
                                setVolume: function(e) {
                                    b.api("setVolume", e)
                                },
                                setMuted: function(e) {
                                    e ? (b.lastVolume = b.api("getVolume"), b.api("setVolume", 0)) : (b.api("setVolume", b.lastVolume), delete b.lastVolume)
                                }
                            }), b.addEvent("play", function() {
                                e(b, f, "play"), e(b, f, "playing")
                            }), b.addEvent("pause", function() {
                                e(b, f, "pause")
                            }), b.addEvent("finish", function() {
                                e(b, f, "ended")
                            }), b.addEvent("playProgress", function(t) {
                                e(b, f, "timeupdate", t)
                            }), f.pluginElement = h, f.pluginApi = b, mejs.MediaPluginBridge.initPlugin(p)
                        })
                    } else console.warn("You need to include froogaloop for vimeo to work")
            }
            return u.style.display = "none", u.removeAttribute("autoplay"), f
        },
        updateNative: function(e, t) {
            var n, i = e.htmlMediaElement;
            for (n in mejs.HtmlMediaElement) i[n] = mejs.HtmlMediaElement[n];
            return t.success(i, i), i
        }
    }, mejs.YouTubeApi = {
        isIframeStarted: !1,
        isIframeLoaded: !1,
        loadIframeApi: function() {
            if (!this.isIframeStarted) {
                var e = document.createElement("script");
                e.src = "//www.youtube.com/player_api";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t), this.isIframeStarted = !0
            }
        },
        iframeQueue: [],
        enqueueIframe: function(e) {
            this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(), this.iframeQueue.push(e))
        },
        createIframe: function(e) {
            var t = e.pluginMediaElement,
                n = new YT.Player(e.containerId, {
                    height: e.height,
                    width: e.width,
                    videoId: e.videoId,
                    playerVars: {
                        controls: 0
                    },
                    events: {
                        onReady: function() {
                            e.pluginMediaElement.pluginApi = n, mejs.MediaPluginBridge.initPlugin(e.pluginId), setInterval(function() {
                                mejs.YouTubeApi.createEvent(n, t, "timeupdate")
                            }, 250)
                        },
                        onStateChange: function(e) {
                            mejs.YouTubeApi.handleStateChange(e.data, n, t)
                        }
                    }
                })
        },
        createEvent: function(e, t, n) {
            var i = {
                type: n,
                target: t
            };
            if (e && e.getDuration) {
                t.currentTime = i.currentTime = e.getCurrentTime(), t.duration = i.duration = e.getDuration(), i.paused = t.paused, i.ended = t.ended, i.muted = e.isMuted(), i.volume = e.getVolume() / 100, i.bytesTotal = e.getVideoBytesTotal(), i.bufferedBytes = e.getVideoBytesLoaded();
                var o = i.bufferedBytes / i.bytesTotal * i.duration;
                i.target.buffered = i.buffered = {
                    start: function() {
                        return 0
                    },
                    end: function() {
                        return o
                    },
                    length: 1
                }
            }
            t.dispatchEvent(i.type, i)
        },
        iFrameReady: function() {
            for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
                var e = this.iframeQueue.pop();
                this.createIframe(e)
            }
        },
        flashPlayers: {},
        createFlash: function(e) {
            this.flashPlayers[e.pluginId] = e;
            var t, n = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
            mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + n + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>') : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + n + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
        },
        flashReady: function(e) {
            var t = this.flashPlayers[e],
                n = document.getElementById(e),
                i = t.pluginMediaElement;
            i.pluginApi = i.pluginElement = n, mejs.MediaPluginBridge.initPlugin(e), n.cueVideoById(t.videoId);
            var o = t.containerId + "_callback";
            window[o] = function(e) {
                mejs.YouTubeApi.handleStateChange(e, n, i)
            }, n.addEventListener("onStateChange", o), setInterval(function() {
                mejs.YouTubeApi.createEvent(n, i, "timeupdate")
            }, 250), mejs.YouTubeApi.createEvent(n, i, "canplay")
        },
        handleStateChange: function(e, t, n) {
            switch (e) {
                case -1:
                    n.paused = !0, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "loadedmetadata");
                    break;
                case 0:
                    n.paused = !1, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "ended");
                    break;
                case 1:
                    n.paused = !1, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "play"), mejs.YouTubeApi.createEvent(t, n, "playing");
                    break;
                case 2:
                    n.paused = !0, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "pause");
                    break;
                case 3:
                    mejs.YouTubeApi.createEvent(t, n, "progress");
                    break;
                case 5:
            }
        }
    }, window.mejs = mejs, window.MediaElement = mejs.MediaElement,
    function(e, t) {
        "use strict";
        var n = {
            locale: {
                language: "",
                strings: {}
            },
            methods: {}
        };
        n.getLanguage = function() {
            var e = n.locale.language || window.navigator.userLanguage || window.navigator.language;
            return e.substr(0, 2).toLowerCase()
        }, "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language), n.methods.checkPlain = function(e) {
            var t, n, i = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
            e = String(e);
            for (t in i) i.hasOwnProperty(t) && (n = new RegExp(t, "g"), e = e.replace(n, i[t]));
            return e
        }, n.methods.t = function(e, t) {
            return n.locale.strings && n.locale.strings[t.context] && n.locale.strings[t.context][e] && (e = n.locale.strings[t.context][e]), n.methods.checkPlain(e)
        }, n.t = function(e, t) {
            if ("string" == typeof e && e.length > 0) {
                var i = n.getLanguage();
                return t = t || {
                    context: i
                }, n.methods.t(e, t)
            }
            throw {
                name: "InvalidArgumentException",
                message: "First argument is either not a string or empty."
            }
        }, t.i18n = n
    }(document, mejs),
    function(e) {
        "use strict";
        "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings)
    }(mejs.i18n.locale.strings),
    function(e) {
        "use strict";
        "undefined" == typeof e.de && (e.de = {
            Fullscreen: "Vollbild",
            "Go Fullscreen": "Vollbild an",
            "Turn off Fullscreen": "Vollbild aus",
            Close: "Schlie\xdfen"
        })
    }(mejs.i18n.locale.strings),
    function(e) {
        "use strict";
        "undefined" == typeof e.zh && (e.zh = {
            Fullscreen: "\u5168\u87a2\u5e55",
            "Go Fullscreen": "\u5168\u5c4f\u6a21\u5f0f",
            "Turn off Fullscreen": "\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",
            Close: "\u95dc\u9589"
        })
    }(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof ender && (mejs.$ = ender),
    function(e) {
        mejs.MepDefaults = {
                poster: "",
                showPosterWhenEnded: !1,
                defaultVideoWidth: 480,
                defaultVideoHeight: 270,
                videoWidth: -1,
                videoHeight: -1,
                defaultAudioWidth: 400,
                defaultAudioHeight: 30,
                defaultSeekBackwardInterval: function(e) {
                    return .05 * e.duration
                },
                defaultSeekForwardInterval: function(e) {
                    return .05 * e.duration
                },
                setDimensions: !0,
                audioWidth: -1,
                audioHeight: -1,
                startVolume: .8,
                loop: !1,
                autoRewind: !0,
                enableAutosize: !0,
                alwaysShowHours: !1,
                showTimecodeFrameCount: !1,
                framesPerSecond: 25,
                autosizeProgress: !0,
                alwaysShowControls: !1,
                hideVideoControlsOnLoad: !1,
                clickToPlayPause: !0,
                iPadUseNativeControls: !1,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1,
                features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
                isVideo: !0,
                enableKeyboard: !0,
                pauseOtherPlayers: !0,
                keyActions: [{
                    keys: [32, 179],
                    action: function(e, t) {
                        t.paused || t.ended ? e.play() : e.pause()
                    }
                }, {
                    keys: [38],
                    action: function(e, t) {
                        e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                        var n = Math.min(t.volume + .1, 1);
                        t.setVolume(n)
                    }
                }, {
                    keys: [40],
                    action: function(e, t) {
                        e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                        var n = Math.max(t.volume - .1, 0);
                        t.setVolume(n)
                    }
                }, {
                    keys: [37, 227],
                    action: function(e, t) {
                        if (!isNaN(t.duration) && t.duration > 0) {
                            e.isVideo && (e.showControls(), e.startControlsTimer());
                            var n = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                            t.setCurrentTime(n)
                        }
                    }
                }, {
                    keys: [39, 228],
                    action: function(e, t) {
                        if (!isNaN(t.duration) && t.duration > 0) {
                            e.isVideo && (e.showControls(), e.startControlsTimer());
                            var n = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                            t.setCurrentTime(n)
                        }
                    }
                }, {
                    keys: [70],
                    action: function(e) {
                        "undefined" != typeof e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
                    }
                }, {
                    keys: [77],
                    action: function(e) {
                        e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
                    }
                }]
            }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function(t, n) {
                if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(t, n);
                var i = this;
                return i.$media = i.$node = e(t), i.node = i.media = i.$media[0], "undefined" != typeof i.node.player ? i.node.player : (i.node.player = i, "undefined" == typeof n && (n = i.$node.data("mejsoptions")), i.options = e.extend({}, mejs.MepDefaults, n), i.id = "mep_" + mejs.mepIndex++, mejs.players[i.id] = i, i.init(), i)
            }, mejs.MediaElementPlayer.prototype = {
                hasFocus: !1,
                controlsAreVisible: !0,
                init: function() {
                    var t = this,
                        n = mejs.MediaFeatures,
                        i = e.extend(!0, {}, t.options, {
                            success: function(e, n) {
                                t.meReady(e, n)
                            },
                            error: function(e) {
                                t.handleError(e)
                            }
                        }),
                        o = t.media.tagName.toLowerCase();
                    if (t.isDynamic = "audio" !== o && "video" !== o, t.isDynamic ? t.isVideo = t.options.isVideo : t.isVideo = "audio" !== o && t.options.isVideo, n.isiPad && t.options.iPadUseNativeControls || n.isiPhone && t.options.iPhoneUseNativeControls) t.$media.attr("controls", "controls"), n.isiPad && null !== t.media.getAttribute("autoplay") && t.play();
                    else if (n.isAndroid && t.options.AndroidUseNativeControls);
                    else {
                        if (t.$media.removeAttr("controls"), t.container = e('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(t.$media[0].className).insertBefore(t.$media), t.container.addClass((n.isAndroid ? "mejs-android " : "") + (n.isiOS ? "mejs-ios " : "") + (n.isiPad ? "mejs-ipad " : "") + (n.isiPhone ? "mejs-iphone " : "") + (t.isVideo ? "mejs-video " : "mejs-audio ")), n.isiOS) {
                            var a = t.$media.clone();
                            t.container.find(".mejs-mediaelement").append(a), t.$media.remove(), t.$node = t.$media = a, t.node = t.media = a[0]
                        } else t.container.find(".mejs-mediaelement").append(t.$media);
                        t.controls = t.container.find(".mejs-controls"), t.layers = t.container.find(".mejs-layers");
                        var s = t.isVideo ? "video" : "audio",
                            r = s.substring(0, 1).toUpperCase() + s.substring(1);
                        t.options[s + "Width"] > 0 || t.options[s + "Width"].toString().indexOf("%") > -1 ? t.width = t.options[s + "Width"] : "" !== t.media.style.width && null !== t.media.style.width ? t.width = t.media.style.width : null !== t.media.getAttribute("width") ? t.width = t.$media.attr("width") : t.width = t.options["default" + r + "Width"], t.options[s + "Height"] > 0 || t.options[s + "Height"].toString().indexOf("%") > -1 ? t.height = t.options[s + "Height"] : "" !== t.media.style.height && null !== t.media.style.height ? t.height = t.media.style.height : null !== t.$media[0].getAttribute("height") ? t.height = t.$media.attr("height") : t.height = t.options["default" + r + "Height"], t.setPlayerSize(t.width, t.height), i.pluginWidth = t.width, i.pluginHeight = t.height
                    }
                    mejs.MediaElement(t.$media[0], i), "undefined" != typeof t.container && t.controlsAreVisible && t.container.trigger("controlsshown")
                },
                showControls: function(e) {
                    var t = this;
                    e = "undefined" == typeof e || e, t.controlsAreVisible || (e ? (t.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                        t.controlsAreVisible = !0, t.container.trigger("controlsshown")
                    }), t.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                        t.controlsAreVisible = !0
                    })) : (t.controls.css("visibility", "visible").css("display", "block"), t.container.find(".mejs-control").css("visibility", "visible").css("display", "block"), t.controlsAreVisible = !0, t.container.trigger("controlsshown")), t.setControlsSize())
                },
                hideControls: function(t) {
                    var n = this;
                    t = "undefined" == typeof t || t, n.controlsAreVisible && !n.options.alwaysShowControls && (t ? (n.controls.stop(!0, !0).fadeOut(200, function() {
                        e(this).css("visibility", "hidden").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")
                    }), n.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
                        e(this).css("visibility", "hidden").css("display", "block")
                    })) : (n.controls.css("visibility", "hidden").css("display", "block"), n.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")))
                },
                controlsTimer: null,
                startControlsTimer: function(e) {
                    var t = this;
                    e = "undefined" != typeof e ? e : 1500, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function() {
                        t.hideControls(), t.killControlsTimer("hide")
                    }, e)
                },
                killControlsTimer: function() {
                    var e = this;
                    null !== e.controlsTimer && (clearTimeout(e.controlsTimer), delete e.controlsTimer, e.controlsTimer = null)
                },
                controlsEnabled: !0,
                disableControls: function() {
                    var e = this;
                    e.killControlsTimer(), e.hideControls(!1), this.controlsEnabled = !1
                },
                enableControls: function() {
                    var e = this;
                    e.showControls(!1), e.controlsEnabled = !0
                },
                meReady: function(e, t) {
                    var n, i, o = this,
                        a = mejs.MediaFeatures,
                        s = t.getAttribute("autoplay"),
                        r = !("undefined" == typeof s || null === s || "false" === s);
                    if (!o.created) {
                        if (o.created = !0, o.media = e, o.domNode = t, !(a.isAndroid && o.options.AndroidUseNativeControls || a.isiPad && o.options.iPadUseNativeControls || a.isiPhone && o.options.iPhoneUseNativeControls)) {
                            o.buildposter(o, o.controls, o.layers, o.media), o.buildkeyboard(o, o.controls, o.layers, o.media), o.buildoverlays(o, o.controls, o.layers, o.media), o.findTracks();
                            for (n in o.options.features)
                                if (i = o.options.features[n], o["build" + i]) try {
                                    o["build" + i](o, o.controls, o.layers, o.media)
                                } catch (l) {}
                            o.container.trigger("controlsready"), o.setPlayerSize(o.width, o.height), o.setControlsSize(), o.isVideo && (mejs.MediaFeatures.hasTouch ? o.$media.bind("touchstart", function() {
                                o.controlsAreVisible ? o.hideControls(!1) : o.controlsEnabled && o.showControls(!1)
                            }) : (o.clickToPlayPauseCallback = function() {
                                o.options.clickToPlayPause && (o.media.paused ? o.play() : o.pause())
                            }, o.media.addEventListener("click", o.clickToPlayPauseCallback, !1), o.container.bind("mouseenter mouseover", function() {
                                o.controlsEnabled && (o.options.alwaysShowControls || (o.killControlsTimer("enter"), o.showControls(), o.startControlsTimer(2500)))
                            }).bind("mousemove", function() {
                                o.controlsEnabled && (o.controlsAreVisible || o.showControls(), o.options.alwaysShowControls || o.startControlsTimer(2500))
                            }).bind("mouseleave", function() {
                                o.controlsEnabled && (o.media.paused || o.options.alwaysShowControls || o.startControlsTimer(1e3))
                            })), o.options.hideVideoControlsOnLoad && o.hideControls(!1), r && !o.options.alwaysShowControls && o.hideControls(), o.options.enableAutosize && o.media.addEventListener("loadedmetadata", function(e) {
                                o.options.videoHeight <= 0 && null === o.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (o.setPlayerSize(e.target.videoWidth, e.target.videoHeight), o.setControlsSize(), o.media.setVideoSize(e.target.videoWidth, e.target.videoHeight))
                            }, !1)), e.addEventListener("play", function() {
                                var e;
                                for (e in mejs.players) {
                                    var t = mejs.players[e];
                                    t.id == o.id || !o.options.pauseOtherPlayers || t.paused || t.ended || t.pause(), t.hasFocus = !1
                                }
                                o.hasFocus = !0
                            }, !1), o.media.addEventListener("ended", function() {
                                if (o.options.autoRewind) try {
                                    o.media.setCurrentTime(0)
                                } catch (e) {}
                                o.media.pause(), o.setProgressRail && o.setProgressRail(), o.setCurrentRail && o.setCurrentRail(), o.options.loop ? o.play() : !o.options.alwaysShowControls && o.controlsEnabled && o.showControls()
                            }, !1), o.media.addEventListener("loadedmetadata", function() {
                                o.updateDuration && o.updateDuration(), o.updateCurrent && o.updateCurrent(), o.isFullScreen || (o.setPlayerSize(o.width, o.height), o.setControlsSize())
                            }, !1), setTimeout(function() {
                                o.setPlayerSize(o.width, o.height), o.setControlsSize()
                            }, 50), o.globalBind("resize", function() {
                                o.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || o.setPlayerSize(o.width, o.height), o.setControlsSize()
                            }), "youtube" == o.media.pluginType && o.options.autoplay && o.container.find(".mejs-overlay-play").hide()
                        }
                        r && "native" == e.pluginType && o.play(), o.options.success && ("string" == typeof o.options.success ? window[o.options.success](o.media, o.domNode, o) : o.options.success(o.media, o.domNode, o))
                    }
                },
                handleError: function(e) {
                    var t = this;
                    t.controls.hide(), t.options.error && t.options.error(e)
                },
                setPlayerSize: function(t, n) {
                    var i = this;
                    if (!i.options.setDimensions) return !1;
                    if ("undefined" != typeof t && (i.width = t), "undefined" != typeof n && (i.height = n), i.height.toString().indexOf("%") > 0 || "100%" === i.$node.css("max-width") || i.$node[0].currentStyle && "100%" === i.$node[0].currentStyle.maxWidth) {
                        var o = function() {
                                return i.isVideo ? i.media.videoWidth && i.media.videoWidth > 0 ? i.media.videoWidth : null !== i.media.getAttribute("width") ? i.media.getAttribute("width") : i.options.defaultVideoWidth : i.options.defaultAudioWidth
                            }(),
                            a = function() {
                                return i.isVideo ? i.media.videoHeight && i.media.videoHeight > 0 ? i.media.videoHeight : null !== i.media.getAttribute("height") ? i.media.getAttribute("height") : i.options.defaultVideoHeight : i.options.defaultAudioHeight
                            }(),
                            s = i.container.parent().closest(":visible").width(),
                            r = i.container.parent().closest(":visible").height(),
                            l = i.isVideo || !i.options.autosizeProgress ? parseInt(s * a / o, 10) : a;
                        (isNaN(l) || 0 != r && l > r) && (l = r), "body" === i.container.parent()[0].tagName.toLowerCase() && (s = e(window).width(), l = e(window).height()), 0 != l && 0 != s && (i.container.width(s).height(l), i.$media.add(i.container.find(".mejs-shim")).width("100%").height("100%"), i.isVideo && i.media.setVideoSize && i.media.setVideoSize(s, l), i.layers.children(".mejs-layer").width("100%").height("100%"))
                    } else i.container.width(i.width).height(i.height), i.layers.children(".mejs-layer").width(i.width).height(i.height);
                    var u = i.layers.find(".mejs-overlay-play"),
                        d = u.find(".mejs-overlay-button");
                    u.height(i.container.height() - i.controls.height()), d.css("margin-top", "-" + (d.height() / 2 - i.controls.height() / 2).toString() + "px")
                },
                setControlsSize: function() {
                    var t = this,
                        n = 0,
                        i = 0,
                        o = t.controls.find(".mejs-time-rail"),
                        a = t.controls.find(".mejs-time-total"),
                        s = (t.controls.find(".mejs-time-current"), t.controls.find(".mejs-time-loaded"), o.siblings()),
                        r = s.last(),
                        l = null;
                    if (t.container.is(":visible") && o.length && o.is(":visible")) {
                        t.options && !t.options.autosizeProgress && (i = parseInt(o.css("width"))), 0 !== i && i || (s.each(function() {
                            var t = e(this);
                            "absolute" != t.css("position") && t.is(":visible") && (n += e(this).outerWidth(!0))
                        }), i = t.controls.width() - n - (o.outerWidth(!0) - o.width()));
                        do o.width(i), a.width(i - (a.outerWidth(!0) - a.width())), "absolute" != r.css("position") && (l = r.position(), i--); while (null != l && l.top > 0 && i > 0);
                        t.setProgressRail && t.setProgressRail(), t.setCurrentRail && t.setCurrentRail()
                    }
                },
                buildposter: function(t, n, i, o) {
                    var a = this,
                        s = e('<div class="mejs-poster mejs-layer"></div>').appendTo(i),
                        r = t.$media.attr("poster");
                    "" !== t.options.poster && (r = t.options.poster), "" !== r && null != r ? a.setPoster(r) : s.hide(), o.addEventListener("play", function() {
                        s.hide()
                    }, !1), t.options.showPosterWhenEnded && t.options.autoRewind && o.addEventListener("ended", function() {
                        s.show()
                    }, !1)
                },
                setPoster: function(t) {
                    var n = this,
                        i = n.container.find(".mejs-poster"),
                        o = i.find("img");
                    0 == o.length && (o = e('<img width="100%" height="100%" />').appendTo(i)), o.attr("src", t), i.css({
                        "background-image": "url(" + t + ")"
                    })
                },
                buildoverlays: function(t, n, i, o) {
                    var a = this;
                    if (t.isVideo) {
                        var s = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(i),
                            r = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(i),
                            l = e('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(i).bind("click", function() {
                                a.options.clickToPlayPause && o.paused && o.play()
                            });
                        o.addEventListener("play", function() {
                            l.hide(), s.hide(), n.find(".mejs-time-buffering").hide(), r.hide()
                        }, !1), o.addEventListener("playing", function() {
                            l.hide(), s.hide(), n.find(".mejs-time-buffering").hide(), r.hide()
                        }, !1), o.addEventListener("seeking", function() {
                            s.show(), n.find(".mejs-time-buffering").show()
                        }, !1), o.addEventListener("seeked", function() {
                            s.hide(), n.find(".mejs-time-buffering").hide()
                        }, !1), o.addEventListener("pause", function() {
                            mejs.MediaFeatures.isiPhone || l.show()
                        }, !1), o.addEventListener("waiting", function() {
                            s.show(), n.find(".mejs-time-buffering").show()
                        }, !1), o.addEventListener("loadeddata", function() {
                            s.show(), n.find(".mejs-time-buffering").show()
                        }, !1), o.addEventListener("canplay", function() {
                            s.hide(), n.find(".mejs-time-buffering").hide()
                        }, !1), o.addEventListener("error", function() {
                            s.hide(), n.find(".mejs-time-buffering").hide(), r.show(), r.find("mejs-overlay-error").html("Error loading this resource")
                        }, !1), o.addEventListener("keydown", function(e) {
                            a.onkeydown(t, o, e)
                        }, !1)
                    }
                },
                buildkeyboard: function(t, n, i, o) {
                    var a = this;
                    a.globalBind("keydown", function(e) {
                        return a.onkeydown(t, o, e)
                    }), a.globalBind("click", function(n) {
                        t.hasFocus = 0 != e(n.target).closest(".mejs-container").length
                    })
                },
                onkeydown: function(e, t, n) {
                    if (e.hasFocus && e.options.enableKeyboard)
                        for (var i = 0, o = e.options.keyActions.length; o > i; i++)
                            for (var a = e.options.keyActions[i], s = 0, r = a.keys.length; r > s; s++)
                                if (n.keyCode == a.keys[s]) return "function" == typeof n.preventDefault && n.preventDefault(), a.action(e, t, n.keyCode), !1;
                    return !0
                },
                findTracks: function() {
                    var t = this,
                        n = t.$media.find("track");
                    t.tracks = [], n.each(function(n, i) {
                        i = e(i), t.tracks.push({
                            srclang: i.attr("srclang") ? i.attr("srclang").toLowerCase() : "",
                            src: i.attr("src"),
                            kind: i.attr("kind"),
                            label: i.attr("label") || "",
                            entries: [],
                            isLoaded: !1
                        })
                    })
                },
                changeSkin: function(e) {
                    this.container[0].className = "mejs-container " + e, this.setPlayerSize(this.width, this.height), this.setControlsSize()
                },
                play: function() {
                    this.load(), this.media.play()
                },
                pause: function() {
                    try {
                        this.media.pause()
                    } catch (e) {}
                },
                load: function() {
                    this.isLoaded || this.media.load(), this.isLoaded = !0
                },
                setMuted: function(e) {
                    this.media.setMuted(e)
                },
                setCurrentTime: function(e) {
                    this.media.setCurrentTime(e)
                },
                getCurrentTime: function() {
                    return this.media.currentTime
                },
                setVolume: function(e) {
                    this.media.setVolume(e)
                },
                getVolume: function() {
                    return this.media.volume
                },
                setSrc: function(e) {
                    this.media.setSrc(e)
                },
                remove: function() {
                    var e, t, n = this;
                    for (e in n.options.features)
                        if (t = n.options.features[e], n["clean" + t]) try {
                            n["clean" + t](n)
                        } catch (i) {}
                    n.isDynamic ? n.$node.insertBefore(n.container) : (n.$media.prop("controls", !0), n.$node.clone().insertBefore(n.container).show(), n.$node.remove()), "native" !== n.media.pluginType && n.media.remove(), delete mejs.players[n.id], "object" == typeof n.container && n.container.remove(), n.globalUnbind(), delete n.node.player
                }
            },
            function() {
                function t(t, i) {
                    var o = {
                        d: [],
                        w: []
                    };
                    return e.each((t || "").split(" "), function(e, t) {
                        var a = t + "." + i;
                        0 === a.indexOf(".") ? (o.d.push(a), o.w.push(a)) : o[n.test(t) ? "w" : "d"].push(a)
                    }), o.d = o.d.join(" "), o.w = o.w.join(" "), o
                }
                var n = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
                mejs.MediaElementPlayer.prototype.globalBind = function(n, i, o) {
                    var a = this;
                    n = t(n, a.id), n.d && e(document).bind(n.d, i, o), n.w && e(window).bind(n.w, i, o)
                }, mejs.MediaElementPlayer.prototype.globalUnbind = function(n, i) {
                    var o = this;
                    n = t(n, o.id), n.d && e(document).unbind(n.d, i), n.w && e(window).unbind(n.w, i)
                }
            }(), "undefined" != typeof e && (e.fn.mediaelementplayer = function(t) {
                return t === !1 ? this.each(function() {
                    var t = e(this).data("mediaelementplayer");
                    t && t.remove(), e(this).removeData("mediaelementplayer")
                }) : this.each(function() {
                    e(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, t))
                }), this
            }, e(document).ready(function() {
                e(".mejs-player").mediaelementplayer()
            })), window.MediaElementPlayer = mejs.MediaElementPlayer
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            playpauseText: mejs.i18n.t("Play/Pause")
        }), e.extend(MediaElementPlayer.prototype, {
            buildplaypause: function(t, n, i, o) {
                var a = this,
                    s = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + a.id + '" title="' + a.options.playpauseText + '" aria-label="' + a.options.playpauseText + '"></button></div>').appendTo(n).click(function(e) {
                        return e.preventDefault(), o.paused ? o.play() : o.pause(), !1
                    });
                o.addEventListener("play", function() {
                    s.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), o.addEventListener("playing", function() {
                    s.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), o.addEventListener("pause", function() {
                    s.removeClass("mejs-pause").addClass("mejs-play")
                }, !1), o.addEventListener("paused", function() {
                    s.removeClass("mejs-pause").addClass("mejs-play")
                }, !1)
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            stopText: "Stop"
        }), e.extend(MediaElementPlayer.prototype, {
            buildstop: function(t, n, i, o) {
                var a = this;
                e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + a.id + '" title="' + a.options.stopText + '" aria-label="' + a.options.stopText + '"></button></div>').appendTo(n).click(function() {
                    o.paused || o.pause(), o.currentTime > 0 && (o.setCurrentTime(0), o.pause(), n.find(".mejs-time-current").width("0px"), n.find(".mejs-time-handle").css("left", "0px"), n.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)), n.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)), i.find(".mejs-poster").show())
                })
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(MediaElementPlayer.prototype, {
            buildprogress: function(t, n, i, o) {
                e('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(n), n.find(".mejs-time-buffering").hide();
                var a = this,
                    s = n.find(".mejs-time-total"),
                    r = n.find(".mejs-time-loaded"),
                    l = n.find(".mejs-time-current"),
                    u = n.find(".mejs-time-handle"),
                    d = n.find(".mejs-time-float"),
                    c = n.find(".mejs-time-float-current"),
                    p = function(e) {
                        if (e.originalEvent.changedTouches) var t = e.originalEvent.changedTouches[0].pageX;
                        else var t = e.pageX;
                        var n = s.offset(),
                            i = s.outerWidth(!0),
                            a = 0,
                            r = 0,
                            l = 0;
                        o.duration && (t < n.left ? t = n.left : t > i + n.left && (t = i + n.left), l = t - n.left, a = l / i, r = .02 >= a ? 0 : a * o.duration, f && r !== o.currentTime && o.setCurrentTime(r), mejs.MediaFeatures.hasTouch || (d.css("left", l), c.html(mejs.Utility.secondsToTimeCode(r)), d.show()))
                    },
                    f = !1,
                    h = !1;
                s.bind("mousedown touchstart", function(e) {
                    return 1 === e.which || 0 === e.which ? (f = !0, p(e), a.globalBind("mousemove.dur touchmove.dur", function(e) {
                        p(e)
                    }), a.globalBind("mouseup.dur touchend.dur", function() {
                        f = !1, d.hide(), a.globalUnbind(".dur")
                    }), !1) : void 0
                }).bind("mouseenter", function() {
                    h = !0, a.globalBind("mousemove.dur", function(e) {
                        p(e)
                    }), mejs.MediaFeatures.hasTouch || d.show()
                }).bind("mouseleave", function() {
                    h = !1, f || (a.globalUnbind(".dur"), d.hide())
                }), o.addEventListener("progress", function(e) {
                    t.setProgressRail(e), t.setCurrentRail(e)
                }, !1), o.addEventListener("timeupdate", function(e) {
                    t.setProgressRail(e), t.setCurrentRail(e)
                }, !1), a.loaded = r, a.total = s, a.current = l, a.handle = u
            },
            setProgressRail: function(e) {
                var t = this,
                    n = void 0 != e ? e.target : t.media,
                    i = null;
                n && n.buffered && n.buffered.length > 0 && n.buffered.end && n.duration ? i = n.buffered.end(0) / n.duration : n && void 0 != n.bytesTotal && n.bytesTotal > 0 && void 0 != n.bufferedBytes ? i = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 != e.total && (i = e.loaded / e.total), null !== i && (i = Math.min(1, Math.max(0, i)), t.loaded && t.total && t.loaded.width(t.total.width() * i))
            },
            setCurrentRail: function() {
                var e = this;
                if (void 0 != e.media.currentTime && e.media.duration && e.total && e.handle) {
                    var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration),
                        n = t - Math.round(e.handle.outerWidth(!0) / 2);
                    e.current.width(t), e.handle.css("left", n)
                }
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            duration: -1,
            timeAndDurationSeparator: "<span> | </span>"
        }), e.extend(MediaElementPlayer.prototype, {
            buildcurrent: function(t, n, i, o) {
                var a = this;
                e('<div class="mejs-time"><span class="mejs-currenttime">' + (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(n), a.currenttime = a.controls.find(".mejs-currenttime"), o.addEventListener("timeupdate", function() {
                    t.updateCurrent()
                }, !1)
            },
            buildduration: function(t, n, i, o) {
                var a = this;
                n.children().last().find(".mejs-currenttime").length > 0 ? e(a.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (a.options.duration > 0 ? mejs.Utility.secondsToTimeCode(a.options.duration, a.options.alwaysShowHours || a.media.duration > 3600, a.options.showTimecodeFrameCount, a.options.framesPerSecond || 25) : (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(n.find(".mejs-time")) : (n.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (a.options.duration > 0 ? mejs.Utility.secondsToTimeCode(a.options.duration, a.options.alwaysShowHours || a.media.duration > 3600, a.options.showTimecodeFrameCount, a.options.framesPerSecond || 25) : (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(n)), a.durationD = a.controls.find(".mejs-duration"), o.addEventListener("timeupdate", function() {
                    t.updateDuration()
                }, !1)
            },
            updateCurrent: function() {
                var e = this;
                e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(e.media.currentTime, e.options.alwaysShowHours || e.media.duration > 3600, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
            },
            updateDuration: function() {
                var e = this;
                e.container.toggleClass("mejs-long-video", e.media.duration > 3600), e.durationD && (e.options.duration > 0 || e.media.duration) && e.durationD.html(mejs.Utility.secondsToTimeCode(e.options.duration > 0 ? e.options.duration : e.media.duration, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            muteText: mejs.i18n.t("Mute Toggle"),
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical"
        }), e.extend(MediaElementPlayer.prototype, {
            buildvolume: function(t, n, i, o) {
                if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
                    var a = this,
                        s = a.isVideo ? a.options.videoVolume : a.options.audioVolume,
                        r = "horizontal" == s ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + a.id + '" title="' + a.options.muteText + '" aria-label="' + a.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(n) : e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + a.id + '" title="' + a.options.muteText + '" aria-label="' + a.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(n),
                        l = a.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                        u = a.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                        d = a.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                        c = a.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                        p = function(e, t) {
                            if (!l.is(":visible") && "undefined" == typeof t) return l.show(), p(e, !0), void l.hide();
                            if (e = Math.max(0, e), e = Math.min(e, 1), 0 == e ? r.removeClass("mejs-mute").addClass("mejs-unmute") : r.removeClass("mejs-unmute").addClass("mejs-mute"), "vertical" == s) {
                                var n = u.height(),
                                    i = u.position(),
                                    o = n - n * e;
                                c.css("top", Math.round(i.top + o - c.height() / 2)), d.height(n - o), d.css("top", i.top + o)
                            } else {
                                var a = u.width(),
                                    i = u.position(),
                                    f = a * e;
                                c.css("left", Math.round(i.left + f - c.width() / 2)), d.width(Math.round(f))
                            }
                        },
                        f = function(e) {
                            var t = null,
                                n = u.offset();
                            if ("vertical" == s) {
                                var i = u.height(),
                                    a = (parseInt(u.css("top").replace(/px/, ""), 10), e.pageY - n.top);
                                if (t = (i - a) / i, 0 == n.top || 0 == n.left) return
                            } else {
                                var r = u.width(),
                                    l = e.pageX - n.left;
                                t = l / r
                            }
                            t = Math.max(0, t), t = Math.min(t, 1), p(t), 0 == t ? o.setMuted(!0) : o.setMuted(!1), o.setVolume(t)
                        },
                        h = !1,
                        m = !1;
                    r.hover(function() {
                        l.show(), m = !0
                    }, function() {
                        m = !1, h || "vertical" != s || l.hide()
                    }), l.bind("mouseover", function() {
                        m = !0
                    }).bind("mousedown", function(e) {
                        return f(e), a.globalBind("mousemove.vol", function(e) {
                            f(e)
                        }), a.globalBind("mouseup.vol", function() {
                            h = !1, a.globalUnbind(".vol"), m || "vertical" != s || l.hide()
                        }), h = !0, !1
                    }), r.find("button").click(function() {
                        o.setMuted(!o.muted)
                    }), o.addEventListener("volumechange", function() {
                        h || (o.muted ? (p(0), r.removeClass("mejs-mute").addClass("mejs-unmute")) : (p(o.volume), r.removeClass("mejs-unmute").addClass("mejs-mute")))
                    }, !1), a.container.is(":visible") && (p(t.options.startVolume), 0 === t.options.startVolume && o.setMuted(!0), "native" === o.pluginType && o.setVolume(t.options.startVolume))
                }
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            usePluginFullScreen: !0,
            newWindowCallback: function() {
                return ""
            },
            fullscreenText: mejs.i18n.t("Fullscreen")
        }), e.extend(MediaElementPlayer.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            buildfullscreen: function(t, n, i, o) {
                if (t.isVideo) {
                    if (t.isInIframe = window.location != window.parent.location, mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        var a = function() {
                            t.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (t.isNativeFullScreen = !0, t.setControlsSize()) : (t.isNativeFullScreen = !1, t.exitFullScreen()))
                        };
                        t.globalBind(mejs.MediaFeatures.fullScreenEventName, a)
                    }
                    var s = this,
                        r = (t.container, e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + s.id + '" title="' + s.options.fullscreenText + '" aria-label="' + s.options.fullscreenText + '"></button></div>').appendTo(n));
                    if ("native" === s.media.pluginType || !s.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) r.click(function() {
                        var e = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || t.isFullScreen;
                        e ? t.exitFullScreen() : t.enterFullScreen()
                    });
                    else {
                        var l = null,
                            u = function() {
                                var e, t = document.createElement("x"),
                                    n = document.documentElement,
                                    i = window.getComputedStyle;
                                return "pointerEvents" in t.style ? (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", n.appendChild(t), e = i && "auto" === i(t, "").pointerEvents, n.removeChild(t), !!e) : !1
                            }();
                        if (u && !mejs.MediaFeatures.isOpera) {
                            var d, c, p = !1,
                                f = function() {
                                    if (p) {
                                        for (var e in h) h[e].hide();
                                        r.css("pointer-events", ""), s.controls.css("pointer-events", ""), s.media.removeEventListener("click", s.clickToPlayPauseCallback), p = !1
                                    }
                                },
                                h = {},
                                m = ["top", "left", "right", "bottom"],
                                v = function() {
                                    var e = r.offset().left - s.container.offset().left,
                                        t = r.offset().top - s.container.offset().top,
                                        n = r.outerWidth(!0),
                                        i = r.outerHeight(!0),
                                        o = s.container.width(),
                                        a = s.container.height();
                                    for (d in h) h[d].css({
                                        position: "absolute",
                                        top: 0,
                                        left: 0
                                    });
                                    h.top.width(o).height(t), h.left.width(e).height(i).css({
                                        top: t
                                    }), h.right.width(o - e - n).height(i).css({
                                        top: t,
                                        left: e + n
                                    }), h.bottom.width(o).height(a - i - t).css({
                                        top: t + i
                                    })
                                };
                            for (s.globalBind("resize", function() {
                                    v()
                                }), d = 0, c = m.length; c > d; d++) h[m[d]] = e('<div class="mejs-fullscreen-hover" />').appendTo(s.container).mouseover(f).hide();
                            r.on("mouseover", function() {
                                if (!s.isFullScreen) {
                                    var e = r.offset(),
                                        n = t.container.offset();
                                    o.positionFullscreenButton(e.left - n.left, e.top - n.top, !1), r.css("pointer-events", "none"), s.controls.css("pointer-events", "none"), s.media.addEventListener("click", s.clickToPlayPauseCallback);
                                    for (d in h) h[d].show();
                                    v(), p = !0
                                }
                            }), o.addEventListener("fullscreenchange", function() {
                                s.isFullScreen = !s.isFullScreen, s.isFullScreen ? s.media.removeEventListener("click", s.clickToPlayPauseCallback) : s.media.addEventListener("click", s.clickToPlayPauseCallback), f()
                            }), s.globalBind("mousemove", function(e) {
                                if (p) {
                                    var t = r.offset();
                                    (e.pageY < t.top || e.pageY > t.top + r.outerHeight(!0) || e.pageX < t.left || e.pageX > t.left + r.outerWidth(!0)) && (r.css("pointer-events", ""), s.controls.css("pointer-events", ""), p = !1)
                                }
                            })
                        } else r.on("mouseover", function() {
                            null !== l && (clearTimeout(l), delete l);
                            var e = r.offset(),
                                n = t.container.offset();
                            o.positionFullscreenButton(e.left - n.left, e.top - n.top, !0)
                        }).on("mouseout", function() {
                            null !== l && (clearTimeout(l), delete l), l = setTimeout(function() {
                                o.hideFullscreenButton()
                            }, 1500)
                        })
                    }
                    t.fullscreenBtn = r, s.globalBind("keydown", function(e) {
                        (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || s.isFullScreen) && 27 == e.keyCode && t.exitFullScreen()
                    })
                }
            },
            cleanfullscreen: function(e) {
                e.exitFullScreen()
            },
            containerSizeTimeout: null,
            enterFullScreen: function() {
                var t = this;
                if ("native" === t.media.pluginType || !mejs.MediaFeatures.isFirefox && !t.options.usePluginFullScreen) {
                    if (e(document.documentElement).addClass("mejs-fullscreen"), normalHeight = t.container.height(), normalWidth = t.container.width(), "native" === t.media.pluginType)
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) mejs.MediaFeatures.requestFullScreen(t.container[0]), t.isInIframe && setTimeout(function i() {
                            if (t.isNativeFullScreen) {
                                var n = window.devicePixelRatio || 1,
                                    o = .002,
                                    a = n * e(window).width(),
                                    s = screen.width,
                                    r = Math.abs(s - a),
                                    l = s * o;
                                r > l ? t.exitFullScreen() : setTimeout(i, 500)
                            }
                        }, 500);
                        else if (mejs.MediaFeatures.hasSemiNativeFullScreen) return void t.media.webkitEnterFullscreen();
                    if (t.isInIframe) {
                        var n = t.options.newWindowCallback(this);
                        if ("" !== n) {
                            if (!mejs.MediaFeatures.hasTrueNativeFullScreen) return t.pause(), void window.open(n, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            setTimeout(function() {
                                t.isNativeFullScreen || (t.pause(), window.open(n, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"))
                            }, 250)
                        }
                    }
                    t.container.addClass("mejs-container-fullscreen").width("100%").height("100%"),
                        t.containerSizeTimeout = setTimeout(function() {
                            t.container.css({
                                width: "100%",
                                height: "100%"
                            }), t.setControlsSize()
                        }, 500), "native" === t.media.pluginType ? t.$media.width("100%").height("100%") : (t.container.find(".mejs-shim").width("100%").height("100%"), t.media.setVideoSize(e(window).width(), e(window).height())), t.layers.children("div").width("100%").height("100%"), t.fullscreenBtn && t.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), t.setControlsSize(), t.isFullScreen = !0, t.container.find(".mejs-captions-text").css("font-size", screen.width / t.width * 1 * 100 + "%"), t.container.find(".mejs-captions-position").css("bottom", "45px")
                }
            },
            exitFullScreen: function() {
                var t = this;
                return clearTimeout(t.containerSizeTimeout), "native" !== t.media.pluginType && mejs.MediaFeatures.isFirefox ? void t.media.setFullscreen(!1) : (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), e(document.documentElement).removeClass("mejs-fullscreen"), t.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight), "native" === t.media.pluginType ? t.$media.width(normalWidth).height(normalHeight) : (t.container.find(".mejs-shim").width(normalWidth).height(normalHeight), t.media.setVideoSize(normalWidth, normalHeight)), t.layers.children("div").width(normalWidth).height(normalHeight), t.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), t.setControlsSize(), t.isFullScreen = !1, t.container.find(".mejs-captions-text").css("font-size", ""), void t.container.find(".mejs-captions-position").css("bottom", ""))
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            speeds: ["1.50", "1.25", "1.00", "0.75"],
            defaultSpeed: "1.00"
        }), e.extend(MediaElementPlayer.prototype, {
            buildspeed: function(t, n, i, o) {
                var a = this;
                if ("native" == a.media.pluginType) {
                    var s, r, l = '<div class="mejs-button mejs-speed-button"><button type="button">' + a.options.defaultSpeed + 'x</button><div class="mejs-speed-selector"><ul>';
                    for (-1 === e.inArray(a.options.defaultSpeed, a.options.speeds) && a.options.speeds.push(a.options.defaultSpeed), a.options.speeds.sort(function(e, t) {
                            return parseFloat(t) - parseFloat(e)
                        }), s = 0; s < a.options.speeds.length; s++) l += '<li><input type="radio" name="speed" value="' + a.options.speeds[s] + '" id="' + a.options.speeds[s] + '" ', a.options.speeds[s] == a.options.defaultSpeed ? (l += "checked=true ", l += '/><label for="' + a.options.speeds[s] + '" class="mejs-speed-selected">' + a.options.speeds[s] + "x</label></li>") : l += '/><label for="' + a.options.speeds[s] + '">' + a.options.speeds[s] + "x</label></li>";
                    l += "</ul></div></div>", t.speedButton = e(l).appendTo(n), t.playbackspeed = a.options.defaultSpeed, t.speedButton.on("click", "input[type=radio]", function() {
                        t.playbackspeed = e(this).attr("value"), o.playbackRate = parseFloat(t.playbackspeed), t.speedButton.find("button").text(t.playbackspeed + "x"), t.speedButton.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), t.speedButton.find("input[type=radio]:checked").next().addClass("mejs-speed-selected")
                    }), r = t.speedButton.find(".mejs-speed-selector"), r.height(this.speedButton.find(".mejs-speed-selector ul").outerHeight(!0) + t.speedButton.find(".mejs-speed-translations").outerHeight(!0)), r.css("top", -1 * r.height() + "px")
                }
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            startLanguage: "",
            tracksText: mejs.i18n.t("Captions/Subtitles"),
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), e.extend(MediaElementPlayer.prototype, {
            hasChapters: !1,
            buildtracks: function(t, n, i, o) {
                if (0 !== t.tracks.length) {
                    var a, s = this;
                    if (s.domNode.textTracks)
                        for (a = s.domNode.textTracks.length - 1; a >= 0; a--) s.domNode.textTracks[a].mode = "hidden";
                    t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(i).hide(), t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(i).hide(), t.captionsText = t.captions.find(".mejs-captions-text"), t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + s.id + '" title="' + s.options.tracksText + '" aria-label="' + s.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" /><label for="' + t.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(n);
                    var r = 0;
                    for (a = 0; a < t.tracks.length; a++) "subtitles" == t.tracks[a].kind && r++;
                    for (s.options.toggleCaptionsButtonWhenOnlyOne && 1 == r ? t.captionsButton.on("click", function() {
                            null === t.selectedTrack ? lang = t.tracks[0].srclang : lang = "none", t.setTrack(lang)
                        }) : (t.captionsButton.on("mouseenter focusin", function() {
                            e(this).find(".mejs-captions-selector").css("visibility", "visible")
                        }).on("click", "input[type=radio]", function() {
                            lang = this.value, t.setTrack(lang)
                        }), t.captionsButton.on("mouseleave focusout", function() {
                            e(this).find(".mejs-captions-selector").css("visibility", "hidden")
                        })), t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : t.container.bind("controlsshown", function() {
                            t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                        }).bind("controlshidden", function() {
                            o.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                        }), t.trackToLoad = -1, t.selectedTrack = null, t.isLoadingTrack = !1, a = 0; a < t.tracks.length; a++) "subtitles" == t.tracks[a].kind && t.addTrackButton(t.tracks[a].srclang, t.tracks[a].label);
                    t.loadNextTrack(), o.addEventListener("timeupdate", function() {
                        t.displayCaptions()
                    }, !1), "" !== t.options.slidesSelector && (t.slidesContainer = e(t.options.slidesSelector), o.addEventListener("timeupdate", function() {
                        t.displaySlides()
                    }, !1)), o.addEventListener("loadedmetadata", function() {
                        t.displayChapters()
                    }, !1), t.container.hover(function() {
                        t.hasChapters && (t.chapters.css("visibility", "visible"), t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight()))
                    }, function() {
                        t.hasChapters && !o.paused && t.chapters.fadeOut(200, function() {
                            e(this).css("visibility", "hidden"), e(this).css("display", "block")
                        })
                    }), null !== t.node.getAttribute("autoplay") && t.chapters.css("visibility", "hidden")
                }
            },
            setTrack: function(e) {
                var t, n = this;
                if ("none" == e) n.selectedTrack = null, n.captionsButton.removeClass("mejs-captions-enabled");
                else
                    for (t = 0; t < n.tracks.length; t++)
                        if (n.tracks[t].srclang == e) {
                            null === n.selectedTrack && n.captionsButton.addClass("mejs-captions-enabled"), n.selectedTrack = n.tracks[t], n.captions.attr("lang", n.selectedTrack.srclang), n.displayCaptions();
                            break
                        }
            },
            loadNextTrack: function() {
                var e = this;
                e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
            },
            loadTrack: function(t) {
                var n = this,
                    i = n.tracks[t],
                    o = function() {
                        i.isLoaded = !0, n.enableTrackButton(i.srclang, i.label), n.loadNextTrack()
                    };
                e.ajax({
                    url: i.src,
                    dataType: "text",
                    success: function(e) {
                        "string" == typeof e && /<tt\s+xml/gi.exec(e) ? i.entries = mejs.TrackFormatParser.dfxp.parse(e) : i.entries = mejs.TrackFormatParser.webvtt.parse(e), o(), "chapters" == i.kind && n.media.addEventListener("play", function() {
                            n.media.duration > 0 && n.displayChapters(i)
                        }, !1), "slides" == i.kind && n.setupSlides(i)
                    },
                    error: function() {
                        n.loadNextTrack()
                    }
                })
            },
            enableTrackButton: function(t, n) {
                var i = this;
                "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("input[value=" + t + "]").prop("disabled", !1).siblings("label").html(n), i.options.startLanguage == t && e("#" + i.id + "_captions_" + t).prop("checked", !0).trigger("click"), i.adjustLanguageBox()
            },
            addTrackButton: function(t, n) {
                var i = this;
                "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("ul").append(e('<li><input type="radio" name="' + i.id + '_captions" id="' + i.id + "_captions_" + t + '" value="' + t + '" disabled="disabled" /><label for="' + i.id + "_captions_" + t + '">' + n + " (loading)</label></li>")), i.adjustLanguageBox(), i.container.find(".mejs-captions-translations option[value=" + t + "]").remove()
            },
            adjustLanguageBox: function() {
                var e = this;
                e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
            },
            checkForTracks: function() {
                var e = this,
                    t = !1;
                if (e.options.hideCaptionsButtonWhenEmpty) {
                    for (i = 0; i < e.tracks.length; i++)
                        if ("subtitles" == e.tracks[i].kind) {
                            t = !0;
                            break
                        }
                    t || (e.captionsButton.hide(), e.setControlsSize())
                }
            },
            displayCaptions: function() {
                if ("undefined" != typeof this.tracks) {
                    var e, t = this,
                        n = t.selectedTrack;
                    if (null !== n && n.isLoaded) {
                        for (e = 0; e < n.entries.times.length; e++)
                            if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return t.captionsText.html(n.entries.text[e]).attr("class", "mejs-captions-text " + (n.entries.times[e].identifier || "")), void t.captions.show().height(0);
                        t.captions.hide()
                    } else t.captions.hide()
                }
            },
            setupSlides: function(e) {
                var t = this;
                t.slides = e, t.slides.entries.imgs = [t.slides.entries.text.length], t.showSlide(0)
            },
            showSlide: function(t) {
                if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                    var n = this,
                        i = n.slides.entries.text[t],
                        o = n.slides.entries.imgs[t];
                    "undefined" == typeof o || "undefined" == typeof o.fadeIn ? n.slides.entries.imgs[t] = o = e('<img src="' + i + '">').on("load", function() {
                        o.appendTo(n.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                    }) : o.is(":visible") || o.is(":animated") || o.fadeIn().siblings(":visible").fadeOut()
                }
            },
            displaySlides: function() {
                if ("undefined" != typeof this.slides) {
                    var e, t = this,
                        n = t.slides;
                    for (e = 0; e < n.entries.times.length; e++)
                        if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return void t.showSlide(e)
                }
            },
            displayChapters: function() {
                var e, t = this;
                for (e = 0; e < t.tracks.length; e++)
                    if ("chapters" == t.tracks[e].kind && t.tracks[e].isLoaded) {
                        t.drawChapters(t.tracks[e]), t.hasChapters = !0;
                        break
                    }
            },
            drawChapters: function(t) {
                var n, i, o = this,
                    a = 0,
                    s = 0;
                for (o.chapters.empty(), n = 0; n < t.entries.times.length; n++) i = t.entries.times[n].stop - t.entries.times[n].start, a = Math.floor(i / o.media.duration * 100), (a + s > 100 || n == t.entries.times.length - 1 && 100 > a + s) && (a = 100 - s), o.chapters.append(e('<div class="mejs-chapter" rel="' + t.entries.times[n].start + '" style="left: ' + s.toString() + "%;width: " + a.toString() + '%;"><div class="mejs-chapter-block' + (n == t.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + t.entries.text[n] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(t.entries.times[n].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(t.entries.times[n].stop) + "</span></div></div>")), s += a;
                o.chapters.find("div.mejs-chapter").click(function() {
                    o.media.setCurrentTime(parseFloat(e(this).attr("rel"))), o.media.paused && o.media.play()
                }), o.chapters.show()
            }
        }), mejs.language = {
            codes: {
                af: "Afrikaans",
                sq: "Albanian",
                ar: "Arabic",
                be: "Belarusian",
                bg: "Bulgarian",
                ca: "Catalan",
                zh: "Chinese",
                "zh-cn": "Chinese Simplified",
                "zh-tw": "Chinese Traditional",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch",
                en: "English",
                et: "Estonian",
                fl: "Filipino",
                fi: "Finnish",
                fr: "French",
                gl: "Galician",
                de: "German",
                el: "Greek",
                ht: "Haitian Creole",
                iw: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                is: "Icelandic",
                id: "Indonesian",
                ga: "Irish",
                it: "Italian",
                ja: "Japanese",
                ko: "Korean",
                lv: "Latvian",
                lt: "Lithuanian",
                mk: "Macedonian",
                ms: "Malay",
                mt: "Maltese",
                no: "Norwegian",
                fa: "Persian",
                pl: "Polish",
                pt: "Portuguese",
                ro: "Romanian",
                ru: "Russian",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                es: "Spanish",
                sw: "Swahili",
                sv: "Swedish",
                tl: "Tagalog",
                th: "Thai",
                tr: "Turkish",
                uk: "Ukrainian",
                vi: "Vietnamese",
                cy: "Welsh",
                yi: "Yiddish"
            }
        }, mejs.TrackFormatParser = {
            webvtt: {
                pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(t) {
                    for (var n, i, o, a = 0, s = mejs.TrackFormatParser.split2(t, /\r?\n/), r = {
                            text: [],
                            times: []
                        }; a < s.length; a++) {
                        if (n = this.pattern_timecode.exec(s[a]), n && a < s.length) {
                            for (a - 1 >= 0 && "" !== s[a - 1] && (o = s[a - 1]), a++, i = s[a], a++;
                                "" !== s[a] && a < s.length;) i = i + "\n" + s[a], a++;
                            i = e.trim(i).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), r.text.push(i), r.times.push({
                                identifier: o,
                                start: 0 === mejs.Utility.convertSMPTEtoSeconds(n[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(n[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(n[3]),
                                settings: n[5]
                            })
                        }
                        o = ""
                    }
                    return r
                }
            },
            dfxp: {
                parse: function(t) {
                    t = e(t).filter("tt");
                    var n, i, o = 0,
                        a = t.children("div").eq(0),
                        s = a.find("p"),
                        r = t.find("#" + a.attr("style")),
                        l = {
                            text: [],
                            times: []
                        };
                    if (r.length) {
                        var u = r.removeAttr("id").get(0).attributes;
                        if (u.length)
                            for (n = {}, o = 0; o < u.length; o++) n[u[o].name.split(":")[1]] = u[o].value
                    }
                    for (o = 0; o < s.length; o++) {
                        var d, c = {
                            start: null,
                            stop: null,
                            style: null
                        };
                        if (s.eq(o).attr("begin") && (c.start = mejs.Utility.convertSMPTEtoSeconds(s.eq(o).attr("begin"))), !c.start && s.eq(o - 1).attr("end") && (c.start = mejs.Utility.convertSMPTEtoSeconds(s.eq(o - 1).attr("end"))), s.eq(o).attr("end") && (c.stop = mejs.Utility.convertSMPTEtoSeconds(s.eq(o).attr("end"))), !c.stop && s.eq(o + 1).attr("begin") && (c.stop = mejs.Utility.convertSMPTEtoSeconds(s.eq(o + 1).attr("begin"))), n) {
                            d = "";
                            for (var p in n) d += p + ":" + n[p] + ";"
                        }
                        d && (c.style = d), 0 === c.start && (c.start = .2), l.times.push(c), i = e.trim(s.eq(o).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), l.text.push(i), 0 === l.times.start && (l.times.start = 2)
                    }
                    return l
                }
            },
            split2: function(e, t) {
                return e.split(t)
            }
        }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function(e, t) {
            var n, i = [],
                o = "";
            for (n = 0; n < e.length; n++) o += e.substring(n, n + 1), t.test(o) && (i.push(o.replace(t, "")), o = "");
            return i.push(o), i
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            contextMenuItems: [{
                render: function(e) {
                    return "undefined" == typeof e.enterFullScreen ? null : e.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
                },
                click: function(e) {
                    e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
                }
            }, {
                render: function(e) {
                    return e.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
                },
                click: function(e) {
                    e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
                }
            }, {
                isSeparator: !0
            }, {
                render: function() {
                    return mejs.i18n.t("Download Video")
                },
                click: function(e) {
                    window.location.href = e.media.currentSrc
                }
            }]
        }), e.extend(MediaElementPlayer.prototype, {
            buildcontextmenu: function(t) {
                t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide(), t.container.bind("contextmenu", function(e) {
                    return t.isContextMenuEnabled ? (e.preventDefault(), t.renderContextMenu(e.clientX - 1, e.clientY - 1), !1) : void 0
                }), t.container.bind("click", function() {
                    t.contextMenu.hide()
                }), t.contextMenu.bind("mouseleave", function() {
                    t.startContextMenuTimer()
                })
            },
            cleancontextmenu: function(e) {
                e.contextMenu.remove()
            },
            isContextMenuEnabled: !0,
            enableContextMenu: function() {
                this.isContextMenuEnabled = !0
            },
            disableContextMenu: function() {
                this.isContextMenuEnabled = !1
            },
            contextMenuTimeout: null,
            startContextMenuTimer: function() {
                var e = this;
                e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function() {
                    e.hideContextMenu(), e.killContextMenuTimer()
                }, 750)
            },
            killContextMenuTimer: function() {
                var e = this.contextMenuTimer;
                null != e && (clearTimeout(e), delete e, e = null)
            },
            hideContextMenu: function() {
                this.contextMenu.hide()
            },
            renderContextMenu: function(t, n) {
                for (var i = this, o = "", a = i.options.contextMenuItems, s = 0, r = a.length; r > s; s++)
                    if (a[s].isSeparator) o += '<div class="mejs-contextmenu-separator"></div>';
                    else {
                        var l = a[s].render(i);
                        null != l && (o += '<div class="mejs-contextmenu-item" data-itemindex="' + s + '" id="element-' + 1e6 * Math.random() + '">' + l + "</div>")
                    }
                i.contextMenu.empty().append(e(o)).css({
                    top: n,
                    left: t
                }).show(), i.contextMenu.find(".mejs-contextmenu-item").each(function() {
                    var t = e(this),
                        n = parseInt(t.data("itemindex"), 10),
                        o = i.options.contextMenuItems[n];
                    "undefined" != typeof o.show && o.show(t, i), t.click(function() {
                        "undefined" != typeof o.click && o.click(i), i.contextMenu.hide()
                    })
                }), setTimeout(function() {
                    i.killControlsTimer("rev3")
                }, 100)
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            postrollCloseText: mejs.i18n.t("Close")
        }), e.extend(MediaElementPlayer.prototype, {
            buildpostroll: function(t, n, i) {
                var o = this,
                    a = o.container.find('link[rel="postroll"]').attr("href");
                "undefined" != typeof a && (t.postroll = e('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + o.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(i).hide(), o.media.addEventListener("ended", function() {
                    e.ajax({
                        dataType: "html",
                        url: a,
                        success: function(e) {
                            i.find(".mejs-postroll-layer-content").html(e)
                        }
                    }), t.postroll.show()
                }, !1))
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            loopText: "Repeat On/Off",
            shuffleText: "Shuffle On/Off",
            nextText: "Next Track",
            prevText: "Previous Track",
            playlistText: "Show/Hide Playlist"
        }), e.extend(MediaElementPlayer.prototype, {
            buildloop: function(t, n, i, o) {
                var a = this,
                    s = e('<div class="mejs-button mejs-loop-button ' + (t.options.loop ? "mejs-loop-on" : "mejs-loop-off") + '"><button type="button" aria-controls="' + t.id + '" title="' + t.options.loopText + '"></button></div>').appendTo(n).click(function() {
                        t.options.loop = !t.options.loop, e(o).trigger("mep-looptoggle", [t.options.loop]), t.options.loop ? s.removeClass("mejs-loop-off").addClass("mejs-loop-on") : s.removeClass("mejs-loop-on").addClass("mejs-loop-off")
                    });
                a.loopToggle = a.controls.find(".mejs-loop-button")
            },
            loopToggleClick: function() {
                var e = this;
                e.loopToggle.trigger("click")
            },
            buildshuffle: function(t, n, i, o) {
                var a = this,
                    s = e('<div class="mejs-button mejs-shuffle-button ' + (t.options.shuffle ? "mejs-shuffle-on" : "mejs-shuffle-off") + '"><button type="button" aria-controls="' + t.id + '" title="' + t.options.shuffleText + '"></button></div>').appendTo(n).click(function() {
                        t.options.shuffle = !t.options.shuffle, e(o).trigger("mep-shuffletoggle", [t.options.shuffle]), t.options.shuffle ? s.removeClass("mejs-shuffle-off").addClass("mejs-shuffle-on") : s.removeClass("mejs-shuffle-on").addClass("mejs-shuffle-off")
                    });
                a.shuffleToggle = a.controls.find(".mejs-shuffle-button")
            },
            shuffleToggleClick: function() {
                var e = this;
                e.shuffleToggle.trigger("click")
            },
            buildprevtrack: function(t, n, i, o) {
                var a = this;
                e('<div class="mejs-button mejs-prevtrack-button mejs-prevtrack"><button type="button" aria-controls="' + t.id + '" title="' + t.options.prevText + '"></button></div>').appendTo(n).click(function() {
                    e(o).trigger("mep-playprevtrack"), t.playPrevTrack()
                });
                a.prevTrack = a.controls.find(".mejs-prevtrack-button")
            },
            prevTrackClick: function() {
                var e = this;
                e.prevTrack.trigger("click")
            },
            buildnexttrack: function(t, n, i, o) {
                var a = this;
                e('<div class="mejs-button mejs-nexttrack-button mejs-nexttrack"><button type="button" aria-controls="' + t.id + '" title="' + t.options.nextText + '"></button></div>').appendTo(n).click(function() {
                    e(o).trigger("mep-playnexttrack"), t.playNextTrack()
                });
                a.nextTrack = a.controls.find(".mejs-nexttrack-button")
            },
            nextTrackClick: function() {
                var e = this;
                e.nextTrack.trigger("click")
            },
            buildplaylist: function(t, n, i, o) {
                var a = this,
                    s = e('<div class="mejs-button mejs-playlist-button ' + (t.options.playlist ? "mejs-hide-playlist" : "mejs-show-playlist") + '"><button type="button" aria-controls="' + t.id + '" title="' + t.options.playlistText + '"></button></div>').appendTo(n).click(function() {
                        t.options.playlist = !t.options.playlist, e(o).trigger("mep-playlisttoggle", [t.options.playlist]), t.options.playlist ? (i.children(".mejs-playlist").show(), s.removeClass("mejs-show-playlist").addClass("mejs-hide-playlist")) : (i.children(".mejs-playlist").hide(), s.removeClass("mejs-hide-playlist").addClass("mejs-show-playlist"))
                    });
                a.playlistToggle = a.controls.find(".mejs-playlist-button")
            },
            playlistToggleClick: function() {
                var e = this;
                e.playlistToggle.trigger("click")
            },
            buildplaylistfeature: function(t, n, i, o) {
                var a = e('<div class="mejs-playlist mejs-layer"><ul class="mejs"></ul></div>').appendTo(i);
                t.options.playlist || a.hide(), "bottom" == t.options.playlistposition ? a.css("top", t.options.audioHeight + "px") : a.css("bottom", t.options.audioHeight + "px");
                var s = [];
                e("#" + t.id).find(".mejs-mediaelement source").each(function(t, n) {
                    if ("" != e.trim(this.src)) {
                        var i = {};
                        i.source = e.trim(this.src), i.name = e(n).data("title"), s.push(i)
                    }
                });
                for (var r in s) i.find(".mejs-playlist > ul").append('<li data-url="' + s[r].source + '" title="' + s[r].name + '">' + s[r].name + "</li>");
                i.find("li:first").addClass("current played"), e(".track-title").text(i.find("li:first").attr("title")), i.find(".mejs-playlist > ul li").click(function() {
                    e(this).hasClass("current") ? t.play() : (e(this).addClass("played"), t.playTrack(e(this)))
                }), o.addEventListener("ended", function() {
                    t.playNextTrack()
                }, !1)
            },
            playNextTrack: function() {
                var t = this,
                    n = t.layers.find(".mejs-playlist > ul > li"),
                    i = n.filter(".current"),
                    o = n.not(".played");
                if (o.length < 1 && (i.removeClass("played").siblings().removeClass("played"), o = n.not(".current")), t.options.shuffle) var a = Math.floor(Math.random() * o.length),
                    s = o.eq(a);
                else {
                    var s = i.next();
                    s.length < 1 && t.options.loop && (s = i.siblings().first())
                }
                1 == s.length && (s.addClass("played"), t.playTrack(s)), e(".track-title").text(t.layers.find(".mejs-playlist > ul > li.current").attr("title"))
            },
            playPrevTrack: function() {
                var t = this,
                    n = t.layers.find(".mejs-playlist > ul > li"),
                    i = n.filter(".current"),
                    o = n.filter(".played").not(".current");
                if (o.length < 1 && (i.removeClass("played"), o = n.not(".current")), t.options.shuffle) var a = Math.floor(Math.random() * o.length),
                    s = o.eq(a);
                else {
                    var s = i.prev();
                    s.length < 1 && t.options.loop && (s = i.siblings().last())
                }
                1 == s.length && (i.removeClass("played"), t.playTrack(s)), e(".track-title").text(t.layers.find(".mejs-playlist > ul > li.current").attr("title"))
            },
            playTrack: function(e) {
                var t = this;
                t.pause(), t.setSrc(e.attr("data-url")), t.load(), t.play(), e.addClass("current").siblings().removeClass("current")
            },
            playTrackURL: function(e) {
                var t = this,
                    n = t.layers.find(".mejs-playlist > ul > li"),
                    i = n.filter('[data-url="' + e + '"]');
                t.playTrack(i)
            }
        })
    }(mejs.$),
    function(e) {
        e.flexslider = function(t, n) {
            var i = e(t);
            i.vars = e.extend({}, e.flexslider.defaults, n);
            var o, a = i.vars.namespace,
                s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
                l = "click touchend MSPointerUp keyup",
                u = "",
                d = "vertical" === i.vars.direction,
                c = i.vars.reverse,
                p = i.vars.itemWidth > 0,
                f = "fade" === i.vars.animation,
                h = "" !== i.vars.asNavFor,
                m = {},
                v = !0;
            e.data(t, "flexslider", i), m = {
                init: function() {
                    i.animating = !1, i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0, 10), isNaN(i.currentSlide) && (i.currentSlide = 0), i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")), i.slides = e(i.vars.selector, i), i.container = e(i.containerSelector, i), i.count = i.slides.length, i.syncExists = e(i.vars.sync).length > 0, "slide" === i.vars.animation && (i.vars.animation = "swing"), i.prop = d ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.stopped = !1, i.started = !1, i.startTimeout = null, i.transitions = !i.vars.video && !f && i.vars.useCSS && function() {
                        var e = document.createElement("div"),
                            t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in t)
                            if (void 0 !== e.style[t[n]]) return i.pfx = t[n].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
                        return !1
                    }(), i.ensureAnimationEnd = "", "" !== i.vars.controlsContainer && (i.controlsContainer = e(i.vars.controlsContainer).length > 0 && e(i.vars.controlsContainer)), "" !== i.vars.manualControls && (i.manualControls = e(i.vars.manualControls).length > 0 && e(i.vars.manualControls)), i.vars.randomize && (i.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), i.container.empty().append(i.slides)), i.doMath(), i.setup("init"), i.vars.controlNav && m.controlNav.setup(), i.vars.directionNav && m.directionNav.setup(), i.vars.keyboard && (1 === e(i.containerSelector).length || i.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
                        var t = e.keyCode;
                        if (!i.animating && (39 === t || 37 === t)) {
                            var n = 39 === t ? i.getTarget("next") : 37 === t ? i.getTarget("prev") : !1;
                            i.flexAnimate(n, i.vars.pauseOnAction)
                        }
                    }), i.vars.mousewheel && i.bind("mousewheel", function(e, t) {
                        e.preventDefault();
                        var n = 0 > t ? i.getTarget("next") : i.getTarget("prev");
                        i.flexAnimate(n, i.vars.pauseOnAction)
                    }), i.vars.pausePlay && m.pausePlay.setup(), i.vars.slideshow && i.vars.pauseInvisible && m.pauseInvisible.init(), i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function() {
                        i.manualPlay || i.manualPause || i.pause()
                    }, function() {
                        i.manualPause || i.manualPlay || i.stopped || i.play()
                    }), i.vars.pauseInvisible && m.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())), h && m.asNav.setup(), r && i.vars.touch && m.touch(), (!f || f && i.vars.smoothHeight) && e(window).bind("resize orientationchange focus", m.resize), i.find("img").attr("draggable", "false"), setTimeout(function() {
                        i.vars.start(i)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.removeClass(a + "active-slide").eq(i.currentItem).addClass(a + "active-slide"), s ? (t._slider = i, i.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                                e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                            }, !1), t.addEventListener("MSGestureTap", function(t) {
                                t.preventDefault();
                                var n = e(this),
                                    o = n.index();
                                e(i.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (i.direction = i.currentItem < o ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : i.slides.on(l, function(t) {
                            t.preventDefault();
                            var n = e(this),
                                o = n.index(),
                                s = n.offset().left - e(i).scrollLeft();
                            0 >= s && n.hasClass(a + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : e(i.vars.asNavFor).data("flexslider").animating || n.hasClass(a + "active-slide") || (i.direction = i.currentItem < o ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        i.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var t, n, o = "thumbnails" === i.vars.controlNav ? "control-thumbs" : "control-paging",
                            s = 1;
                        if (i.controlNavScaffold = e('<ol class="' + a + "control-nav " + a + o + '"></ol>'), i.pagingCount > 1)
                            for (var r = 0; r < i.pagingCount; r++) {
                                if (n = i.slides.eq(r), t = "thumbnails" === i.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"/>' : "<a>" + s + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
                                    var d = n.attr("data-thumbcaption");
                                    "" != d && void 0 != d && (t += '<span class="' + a + 'caption">' + d + "</span>")
                                }
                                i.controlNavScaffold.append("<li>" + t + "</li>"), s++
                            }
                        i.controlsContainer ? e(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), i.controlNavScaffold.delegate("a, img", l, function(t) {
                            if (t.preventDefault(), "" === u || u === t.type) {
                                var n = e(this),
                                    o = i.controlNav.index(n);
                                n.hasClass(a + "active") || (i.direction = o > i.currentSlide ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                            }
                            "" === u && (u = t.type), m.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        i.controlNav = i.manualControls, m.controlNav.active(), i.controlNav.bind(l, function(t) {
                            if (t.preventDefault(), "" === u || u === t.type) {
                                var n = e(this),
                                    o = i.controlNav.index(n);
                                n.hasClass(a + "active") || (o > i.currentSlide ? i.direction = "next" : i.direction = "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                            }
                            "" === u && (u = t.type), m.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var t = "thumbnails" === i.vars.controlNav ? "img" : "a";
                        i.controlNav = e("." + a + "control-nav li " + t, i.controlsContainer ? i.controlsContainer : i)
                    },
                    active: function() {
                        i.controlNav.removeClass(a + "active").eq(i.animatingTo).addClass(a + "active")
                    },
                    update: function(t, n) {
                        i.pagingCount > 1 && "add" === t ? i.controlNavScaffold.append(e("<li><a>" + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(n).closest("li").remove(), m.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(n, t) : m.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var t = e('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + i.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
                        i.controlsContainer ? (e(i.controlsContainer).append(t), i.directionNav = e("." + a + "direction-nav li a", i.controlsContainer)) : (i.append(t), i.directionNav = e("." + a + "direction-nav li a", i)), m.directionNav.update(), i.directionNav.bind(l, function(t) {
                            t.preventDefault();
                            var n;
                            "" !== u && u !== t.type || (n = e(this).hasClass(a + "next") ? i.getTarget("next") : i.getTarget("prev"), i.flexAnimate(n, i.vars.pauseOnAction)), "" === u && (u = t.type), m.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var e = a + "disabled";
                        1 === i.pagingCount ? i.directionNav.addClass(e).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(e).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(e).filter("." + a + "prev").addClass(e).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(e).filter("." + a + "next").addClass(e).attr("tabindex", "-1") : i.directionNav.removeClass(e).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var t = e('<div class="' + a + 'pauseplay"><a></a></div>');
                        i.controlsContainer ? (i.controlsContainer.append(t), i.pausePlay = e("." + a + "pauseplay a", i.controlsContainer)) : (i.append(t), i.pausePlay = e("." + a + "pauseplay a", i)), m.pausePlay.update(i.vars.slideshow ? a + "pause" : a + "play"), i.pausePlay.bind(l, function(t) {
                            t.preventDefault(), "" !== u && u !== t.type || (e(this).hasClass(a + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())), "" === u && (u = t.type), m.setToClearWatchedEvent()
                        })
                    },
                    update: function(e) {
                        "play" === e ? i.pausePlay.removeClass(a + "pause").addClass(a + "play").html(i.vars.playText) : i.pausePlay.removeClass(a + "play").addClass(a + "pause").html(i.vars.pauseText)
                    }
                },
                touch: function() {
                    function e(e) {
                        i.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (i.pause(), v = d ? i.h : i.w, y = Number(new Date), w = e.touches[0].pageX, x = e.touches[0].pageY, m = p && c && i.animatingTo === i.last ? 0 : p && c ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : c ? (i.last - i.currentSlide + i.cloneOffset) * v : (i.currentSlide + i.cloneOffset) * v, u = d ? x : w, h = d ? w : x, t.addEventListener("touchmove", n, !1), t.addEventListener("touchend", o, !1))
                    }

                    function n(e) {
                        w = e.touches[0].pageX, x = e.touches[0].pageY, g = d ? u - x : u - w, b = d ? Math.abs(g) < Math.abs(w - h) : Math.abs(g) < Math.abs(x - h);
                        var t = 500;
                        (!b || Number(new Date) - y > t) && (e.preventDefault(), !f && i.transitions && (i.vars.animationLoop || (g /= 0 === i.currentSlide && 0 > g || i.currentSlide === i.last && g > 0 ? Math.abs(g) / v + 2 : 1), i.setProps(m + g, "setTouch")))
                    }

                    function o() {
                        if (t.removeEventListener("touchmove", n, !1), i.animatingTo === i.currentSlide && !b && null !== g) {
                            var e = c ? -g : g,
                                a = e > 0 ? i.getTarget("next") : i.getTarget("prev");
                            i.canAdvance(a) && (Number(new Date) - y < 550 && Math.abs(e) > 50 || Math.abs(e) > v / 2) ? i.flexAnimate(a, i.vars.pauseOnAction) : f || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", o, !1), u = null, h = null, g = null, m = null
                    }

                    function a(e) {
                        e.stopPropagation(), i.animating ? e.preventDefault() : (i.pause(), t._gesture.addPointer(e.pointerId), T = 0, v = d ? i.h : i.w, y = Number(new Date), m = p && c && i.animatingTo === i.last ? 0 : p && c ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : c ? (i.last - i.currentSlide + i.cloneOffset) * v : (i.currentSlide + i.cloneOffset) * v)
                    }

                    function r(e) {
                        e.stopPropagation();
                        var n = e.target._slider;
                        if (n) {
                            var i = -e.translationX,
                                o = -e.translationY;
                            return T += d ? o : i, g = T, b = d ? Math.abs(T) < Math.abs(-i) : Math.abs(T) < Math.abs(-o), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                t._gesture.stop()
                            }) : void((!b || Number(new Date) - y > 500) && (e.preventDefault(), !f && n.transitions && (n.vars.animationLoop || (g = T / (0 === n.currentSlide && 0 > T || n.currentSlide === n.last && T > 0 ? Math.abs(T) / v + 2 : 1)), n.setProps(m + g, "setTouch"))))
                        }
                    }

                    function l(e) {
                        e.stopPropagation();
                        var t = e.target._slider;
                        if (t) {
                            if (t.animatingTo === t.currentSlide && !b && null !== g) {
                                var n = c ? -g : g,
                                    i = n > 0 ? t.getTarget("next") : t.getTarget("prev");
                                t.canAdvance(i) && (Number(new Date) - y < 550 && Math.abs(n) > 50 || Math.abs(n) > v / 2) ? t.flexAnimate(i, t.vars.pauseOnAction) : f || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                            }
                            u = null, h = null, g = null, m = null, T = 0
                        }
                    }
                    var u, h, m, v, g, y, b = !1,
                        w = 0,
                        x = 0,
                        T = 0;
                    s ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", a, !1), t._slider = i, t.addEventListener("MSGestureChange", r, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
                },
                resize: function() {
                    !i.animating && i.is(":visible") && (p || i.doMath(), f ? m.smoothHeight() : p ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : d ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && m.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
                },
                smoothHeight: function(e) {
                    if (!d || f) {
                        var t = f ? i : i.viewport;
                        e ? t.animate({
                            height: i.slides.eq(i.animatingTo).height()
                        }, e) : t.height(i.slides.eq(i.animatingTo).height());
                    }
                },
                sync: function(t) {
                    var n = e(i.vars.sync).data("flexslider"),
                        o = i.animatingTo;
                    switch (t) {
                        case "animate":
                            n.flexAnimate(o, i.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            n.playing || n.asNav || n.play();
                            break;
                        case "pause":
                            n.pause()
                    }
                },
                uniqueID: function(t) {
                    return t.filter("[id]").add(t.find("[id]")).each(function() {
                        var t = e(this);
                        t.attr("id", t.attr("id") + "_clone")
                    }), t
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var e = m.pauseInvisible.getHiddenProp();
                        if (e) {
                            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(t, function() {
                                m.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var e = m.pauseInvisible.getHiddenProp();
                        return e ? document[e] : !1
                    },
                    getHiddenProp: function() {
                        var e = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var t = 0; t < e.length; t++)
                            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(o), o = setTimeout(function() {
                        u = ""
                    }, 3e3)
                }
            }, i.flexAnimate = function(t, n, o, s, l) {
                if (i.vars.animationLoop || t === i.currentSlide || (i.direction = t > i.currentSlide ? "next" : "prev"), h && 1 === i.pagingCount && (i.direction = i.currentItem < t ? "next" : "prev"), !i.animating && (i.canAdvance(t, l) || o) && i.is(":visible")) {
                    if (h && s) {
                        var u = e(i.vars.asNavFor).data("flexslider");
                        if (i.atEnd = 0 === t || t === i.count - 1, u.flexAnimate(t, !0, !1, !0, l), i.direction = i.currentItem < t ? "next" : "prev", u.direction = i.direction, Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide || 0 === t) return i.currentItem = t, i.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), !1;
                        i.currentItem = t, i.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), t = Math.floor(t / i.visible)
                    }
                    if (i.animating = !0, i.animatingTo = t, n && i.pause(), i.vars.before(i), i.syncExists && !l && m.sync("animate"), i.vars.controlNav && m.controlNav.active(), p || i.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), i.atEnd = 0 === t || t === i.last, i.vars.directionNav && m.directionNav.update(), t === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), f) r ? (i.slides.eq(i.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), i.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    }), i.wrapup(b)) : (i.slides.eq(i.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, i.vars.animationSpeed, i.vars.easing), i.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, i.vars.animationSpeed, i.vars.easing, i.wrapup));
                    else {
                        var v, g, y, b = d ? i.slides.filter(":first").height() : i.computedW;
                        p ? (v = i.vars.itemMargin, y = (i.itemW + v) * i.move * i.animatingTo, g = y > i.limit && 1 !== i.visible ? i.limit : y) : g = 0 === i.currentSlide && t === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? c ? (i.count + i.cloneOffset) * b : 0 : i.currentSlide === i.last && 0 === t && i.vars.animationLoop && "prev" !== i.direction ? c ? 0 : (i.count + 1) * b : c ? (i.count - 1 - t + i.cloneOffset) * b : (t + i.cloneOffset) * b, i.setProps(g, "", i.vars.animationSpeed), i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(i.ensureAnimationEnd), i.wrapup(b)
                        }), clearTimeout(i.ensureAnimationEnd), i.ensureAnimationEnd = setTimeout(function() {
                            i.wrapup(b)
                        }, i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing, function() {
                            i.wrapup(b)
                        })
                    }
                    i.vars.smoothHeight && m.smoothHeight(i.vars.animationSpeed)
                }
            }, i.wrapup = function(e) {
                f || p || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(e, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(e, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, i.vars.after(i)
            }, i.animateSlides = function() {
                !i.animating && v && i.flexAnimate(i.getTarget("next"))
            }, i.pause = function() {
                clearInterval(i.animatedSlides), i.animatedSlides = null, i.playing = !1, i.vars.pausePlay && m.pausePlay.update("play"), i.syncExists && m.sync("pause")
            }, i.play = function() {
                i.playing && clearInterval(i.animatedSlides), i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed), i.started = i.playing = !0, i.vars.pausePlay && m.pausePlay.update("pause"), i.syncExists && m.sync("play")
            }, i.stop = function() {
                i.pause(), i.stopped = !0
            }, i.canAdvance = function(e, t) {
                var n = h ? i.pagingCount - 1 : i.last;
                return t ? !0 : h && i.currentItem === i.count - 1 && 0 === e && "prev" === i.direction ? !0 : h && 0 === i.currentItem && e === i.pagingCount - 1 && "next" !== i.direction ? !1 : e !== i.currentSlide || h ? i.vars.animationLoop ? !0 : i.atEnd && 0 === i.currentSlide && e === n && "next" !== i.direction ? !1 : !i.atEnd || i.currentSlide !== n || 0 !== e || "next" !== i.direction : !1
            }, i.getTarget = function(e) {
                return i.direction = e, "next" === e ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
            }, i.setProps = function(e, t, n) {
                var o = function() {
                    var n = e ? e : (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo,
                        o = function() {
                            if (p) return "setTouch" === t ? e : c && i.animatingTo === i.last ? 0 : c ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : n;
                            switch (t) {
                                case "setTotal":
                                    return c ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e : (i.currentSlide + i.cloneOffset) * e;
                                case "setTouch":
                                    return c ? e : e;
                                case "jumpEnd":
                                    return c ? e : i.count * e;
                                case "jumpStart":
                                    return c ? i.count * e : e;
                                default:
                                    return e
                            }
                        }();
                    return -1 * o + "px"
                }();
                i.transitions && (o = d ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", n), i.container.css("transition-duration", n)), i.args[i.prop] = o, (i.transitions || void 0 === n) && i.container.css(i.args), i.container.css("transform", o)
            }, i.setup = function(t) {
                if (f) i.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === t && (r ? i.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == i.vars.fadeFirstSlide ? i.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : i.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, i.vars.animationSpeed, i.vars.easing)), i.vars.smoothHeight && m.smoothHeight();
                else {
                    var n, o;
                    "init" === t && (i.viewport = e('<div class="' + a + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, c && (o = e.makeArray(i.slides).reverse(), i.slides = e(o), i.container.empty().append(i.slides))), i.vars.animationLoop && !p && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== t && i.container.find(".clone").remove(), i.container.append(m.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), i.newSlides = e(i.vars.selector, i), n = c ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, d && !p ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        i.newSlides.css({
                            display: "block"
                        }), i.doMath(), i.viewport.height(i.h), i.setProps(n * i.h, "init")
                    }, "init" === t ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(n * i.computedW, "init"), setTimeout(function() {
                        i.doMath(), i.newSlides.css({
                            width: i.computedW,
                            "float": "left",
                            display: "block"
                        }), i.vars.smoothHeight && m.smoothHeight()
                    }, "init" === t ? 100 : 0))
                }
                p || i.slides.removeClass(a + "active-slide").eq(i.currentSlide).addClass(a + "active-slide"), i.vars.init(i)
            }, i.doMath = function() {
                var e = i.slides.first(),
                    t = i.vars.itemMargin,
                    n = i.vars.minItems,
                    o = i.vars.maxItems;
                i.w = void 0 === i.viewport ? i.width() : i.viewport.width(), i.h = e.height(), i.boxPadding = e.outerWidth() - e.width(), p ? (i.itemT = i.vars.itemWidth + t, i.minW = n ? n * i.itemT : i.w, i.maxW = o ? o * i.itemT - t : i.w, i.itemW = i.minW > i.w ? (i.w - t * (n - 1)) / n : i.maxW < i.w ? (i.w - t * (o - 1)) / o : i.vars.itemWidth > i.w ? i.w : i.vars.itemWidth, i.visible = Math.floor(i.w / i.itemW), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + t * (i.count - 1) : (i.itemW + t) * i.count - i.w - t) : (i.itemW = i.w, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding
            }, i.update = function(e, t) {
                i.doMath(), p || (e < i.currentSlide ? i.currentSlide += 1 : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), i.vars.controlNav && !i.manualControls && ("add" === t && !p || i.pagingCount > i.controlNav.length ? m.controlNav.update("add") : ("remove" === t && !p || i.pagingCount < i.controlNav.length) && (p && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), m.controlNav.update("remove", i.last))), i.vars.directionNav && m.directionNav.update()
            }, i.addSlide = function(t, n) {
                var o = e(t);
                i.count += 1, i.last = i.count - 1, d && c ? void 0 !== n ? i.slides.eq(i.count - n).after(o) : i.container.prepend(o) : void 0 !== n ? i.slides.eq(n).before(o) : i.container.append(o), i.update(n, "add"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.added(i)
            }, i.removeSlide = function(t) {
                var n = isNaN(t) ? i.slides.index(e(t)) : t;
                i.count -= 1, i.last = i.count - 1, isNaN(t) ? e(t, i.slides).remove() : d && c ? i.slides.eq(i.last).remove() : i.slides.eq(t).remove(), i.doMath(), i.update(n, "remove"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.removed(i)
            }, m.init()
        }, e(window).blur(function() {
            focused = !1
        }).focus(function() {
            focused = !0
        }), e.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, e.fn.flexslider = function(t) {
            if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
                var n = e(this),
                    i = t.selector ? t.selector : ".slides > li",
                    o = n.find(i);
                1 === o.length && t.allowOneSlide === !0 || 0 === o.length ? (o.fadeIn(400), t.start && t.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, t)
            });
            var n = e(this).data("flexslider");
            switch (t) {
                case "play":
                    n.play();
                    break;
                case "pause":
                    n.pause();
                    break;
                case "stop":
                    n.stop();
                    break;
                case "next":
                    n.flexAnimate(n.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    n.flexAnimate(n.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof t && n.flexAnimate(t, !0)
            }
        }
    }(jQuery),
    function() {
        this.ImageHandler = function() {
            function e() {
                this.images = $("[data-retina]"), this.do_the_magic()
            }
            return e.prototype.do_the_magic = function() {
                var e;
                return e = window.devicePixelRatio, 2 > e || $(window).width() < 980 ? void 0 : this.images.each(function() {
                    var e, t;
                    switch (t = $(this).data("retina"), $(this).prop("tagName")) {
                        case "IMG":
                            return $(this).attr("src", t);
                        default:
                            return t.indexOf(",") > 0 && (t = t.split(",").join('"),url("')), e = 'url("' + t + '")', $(this).css("background-image", e)
                    }
                })
            }, e
        }(), $(document).ready(function(e) {
            return function() {
                var t;
                return t = new e.ImageHandler
            }
        }(this))
    }.call(this),
    function() {
        this.MenuStyler = function() {
            function e() {
                this.restyle_menu(), this.register_handlers()
            }
            return e.prototype.restyle_menu = function() {
                var e, t;
                if (!($(window).width() <= 768)) return e = $(window).height() - 65, t = $(window).scrollTop(), t > e ? $("#menu").addClass("scrolled") : $("#menu").removeClass("scrolled")
            }, e.prototype.register_handlers = function() {
                return $(window).on("scroll", function(e) {
                    return function() {
                        return e.restyle_menu()
                    }
                }(this)), $("#navigation").on("click", "a", null, function() {
                    return $("#navigation").collapse("hide")
                })
            }, e
        }(), $(document).ready(function(e) {
            return function() {
                var t;
                return t = new e.MenuStyler
            }
        }(this))
    }.call(this),
    function() {
        $(function() {
            var e;
            return $("audio").mediaelementplayer({
                success: function() {},
                loop: !0,
                shuffle: !1,
                audioHeight: 30,
                enablePluginDebug: !0,
                pauseOtherPlayers: !0,
                pluginPath: "/",
                plugins: ["flash", "silverlight"],
                playlistposition: "bottom",
                features: ["playlistfeature", "prevtrack", "playpause", "nexttrack", "loop", "playlist,", "current", "progress", "duration", "volume"]
            }), (e = $("#radio-modal")) && (e.modal("show"), e.on("click", "button", function() {
                return e.modal("hide")
            }), $("#listen-music").on("click", function() {
                return $(".mejs-play").click()
            })), $(".player-toggle").click(function() {
                return $(".player-inner").animate({
                    width: "toggle"
                }, 300)
            }), $(".player-toggle").click()
        })
    }.call(this),
    function() {
        this.CoverParallax = function() {
            function e() {
                this.factor = parseFloat($('[data-parallax="parallax-display"]').data("factor")), this.position_background(), this.register_handlers()
            }
            return e.prototype.position_background = function() {
                var e;
                return e = $(window).scrollTop() / this.factor, $("#couple-img").css("background-position-y", e + "px")
            }, e.prototype.register_handlers = function() {
                return $(window).on("scroll", function(e) {
                    return function() {
                        return $(window).scrollTop() > $(window).height() ? void 0 : e.position_background()
                    }
                }(this))
            }, e
        }(), $(document).ready(function(e) {
            return function() {
                var t;
                return t = new e.CoverParallax
            }
        }(this))
    }.call(this),
    function() {
        this.RSVP = function() {
            function e() {
                window.min_value = parseInt($('[data-behavior="reveal-on-scroll"]').data("min")), window.max_value = parseInt($('[data-behavior="reveal-on-scroll"]').data("max")), window.animation = {}, window.is_on_animation = !1, window.rsvp_state = "closed", this.register_handlers()
            }
            return window.open_rsvp = function(e) {
                var t, n;
                return window.is_on_animation = !0, e >= window.max_value ? (window.is_on_animation = !1, window.clearTimeout(window.animation), window.rsvp_state = "open", window.set_objects_z_order("opened"), !1) : ($("[data-behavior='reveal-on-scroll']").css("min-height", e + "px"), t = Math.ceil((window.max_value - e) / 18), n = e + t, window.animation = window.setTimeout("window.open_rsvp(" + n + ")", 44))
            }, window.shut_rsvp = function(e) {
                var t, n;
                return window.is_on_animation = !0, e <= window.min_value ? (window.is_on_animation = !1, window.clearTimeout(window.animation), window.rsvp_state = "closed", !1) : ($("[data-behavior='reveal-on-scroll']").css("min-height", e + "px"), t = Math.ceil((e - min_value) / 18), n = e - t, window.animation = window.setTimeout("window.shut_rsvp(" + n + ")", 44))
            }, window.set_objects_z_order = function(e) {
                return "opened" === e ? $("[data-behavior='reveal-on-scroll']").addClass("rsvp-opened") : $("[data-behavior='reveal-on-scroll']").removeClass("rsvp-opened")
            }, e.prototype.register_handlers = function() {
                return $(window).on("scroll", function() {
                    return function() {
                        var e, t;
                        if (!window.is_on_animation)
                            if (e = [$("#rsvp").offset().top - $(window).height() / 2, $("#rsvp").offset().top + $(window).height()], t = $(window).scrollTop(), e[0] <= t && t <= e[1]) {
                                if ("closed" === window.rsvp_state) return window.open_rsvp(window.min_value)
                            } else if (e[0] > t && "open" === window.rsvp_state) return window.set_objects_z_order("closing"), window.shut_rsvp(window.max_value)
                    }
                }(this))
            }, e
        }(), $(document).ready(function(e) {
            return function() {
                var t;
                if (document.getElementById("rsvp")) return $(window).width() <= 768 ? void $("[data-behavior='reveal-on-scroll']").addClass("rsvp-opened") : t = new e.RSVP
            }
        }(this))
    }.call(this),
    function() {
        this.GiftSlick = function() {
            function e() {
                this.register_handlers()
            }
            return e.prototype.register_handlers = function() {
                return $(".gift-list-slick").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    focusOnSelect: !0,
                    centerPadding: "10px",
                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !1
                        }
                    }]
                })
            }, e
        }(), $(document).ready(function() {
            return function() {
                var e;
                return e = new GiftSlick
            }
        }(this))
    }.call(this),
    function() {
        this.AlbumsNav = function() {
            function e() {
                this.register_handlers()
            }
            return e.prototype.register_handlers = function() {
                return $(".slick-album-container").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: !0,
                    focusOnSelect: !0,
                    centerPadding: "10px",
                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !1
                        }
                    }]
                })
            }, e
        }(), this.AlbumVisibleToggler = function() {
            function e() {
                this.elements = $("[data-behavior='show-album']"), this.targets = $("[data-behavior='album-target']"), this.collapser = $("[data-behavior='album-collapse']"), this.register_handlers(), this.collapse_all()
            }
            return e.prototype.collapse_all = function() {
                return this.targets.removeClass("closed"), this.targets.addClass("closed")
            }, e.prototype.open_element = function(e, t) {
                var n;
                return n = this, $(e).removeClass("closed"), $(".slick-thumb-container-" + t).unslick({}), $(".slick-thumb-container-" + t).slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: !0,
                    focusOnSelect: !0,
                    centerPadding: "10px",
                    asNavFor: ".slick-photo-container-" + t
                }), $(".slick-photo-container-" + t).unslick({}), $(".slick-photo-container-" + t).slick({
                    lazyLoad: "ondemand",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: !1,
                    focusOnSelect: !0,
                    centerPadding: "10px",
                    prevArrow: "<i>&nbsp</i>",
                    nextArrow: "<i>&nbsp</i>",
                    asNavFor: ".slick-thumb-container-" + t,
                    onInit: function(e) {
                        return $("#facebook-coments-container-" + t).length ? (n.create_fb_container(t), n.define_shared_attributes(t, e)) : void 0
                    },
                    onAfterChange: function(e, i) {
                        return $("#facebook-coments-container-" + t).length ? n.define_shared_attributes(t, e, i) : void 0
                    }
                })
            }, e.prototype.destroy_fb_container = function() {
                return $("#fb-box").remove()
            }, e.prototype.create_fb_container = function(e) {
                var t, n;
                return this.destroy_fb_container(), t = $("<div/>").attr("class", "comments").attr("id", "fb-box"), $("#facebook-coments-container-" + e).append(t), n = $("<div/>").attr("class", "fb-comments").attr("data-colorscheme", "light").attr("data-href", "/").attr("data-numposts", "5").attr("data-width", "100%").attr("data-version", "v2.3"), t.append(n)
            }, e.prototype.define_shared_attributes = function(e, t, n) {
                var i, o, a;
                null == n && (n = 0), i = this, o = $(t.$slides.get(n)).find("a.album-trigger"), $("#photo-description-" + e).html(o.data("description")), a = i.get_url(o.data("href")), $(".fb-comments").attr("data-href", a), $(document).ready(function() {
                    var e;
                    e = document.getElementById("fb-box"), e.innerHTLM = "", e.innerHTLM = '<div class="fb-comments" data-colorscheme="light" data-href="' + a + '" data-numposts="5" data-width="100%" data-version="v2.3"></div>', "undefined" != typeof FB && null !== FB ? FB.XFBML.parse(e) : console.warn("FB sdk missing")
                })
            }, e.prototype.get_url = function(e) {
                var t;
                return t = window.location.protocol + "//" + window.location.host + e
            }, e.prototype.register_handlers = function() {
                var e;
                return e = this, this.collapser.on("click", function() {
                    return e.collapse_all()
                }), this.elements.on("click", function() {
                    return e.collapse_all(), e.open_element($($(this).data("target")), $(this).data("argument")), window.location = $(this).attr("href")
                })
            }, e
        }(), $(document).ready(function(e) {
            return function() {
                var t, n;
                return t = new e.AlbumsNav, n = new e.AlbumVisibleToggler
            }
        }(this))
    }.call(this),
    function() {
        this.TipsToggler = function() {
            function e() {
                this.elements = $("[data-behavior='toggle-tip']"), this.targets = $("[data-behavior='toggle-tip-target']"), this.register_handlers()
            }
            return e.prototype.collapse_all = function() {
                return this.targets.removeClass("closed"), this.targets.addClass("closed")
            }, e.prototype.toggle_element = function(e, t, n) {
                return t && $(e).removeClass("closed"), window.location = n
            }, e.prototype.register_handlers = function() {
                var e;
                return e = this, this.elements.on("click", function() {
                    var t;
                    return t = $($(this).data("target")).hasClass("closed"), e.collapse_all(), e.toggle_element($($(this).data("target")), t, $(this).attr("href"))
                })
            }, e
        }(), $(document).ready(function(e) {
            return function() {
                var t;
                return t = new e.TipsToggler
            }
        }(this))
    }.call(this),
    function() {
        this.RelationshipDOM = function() {
            function e() {
                this.nav_elements = $("[data-behavior='toggle-relationship']"), this.nav_targets = $("[data-behavior='relationship-target']"), this.character_elements = $("[data-behavior='show-character']"), this.character_targets = $("[data-behavior='character-target']"), this.register_handlers(), this.activate_element($("#relationship_item_0")), this.open_element($("#relationship_0")), this.create_relationship_slick()
            }
            return e.prototype.collapse_all_relationships = function() {
                return this.nav_targets.removeClass("closed"), this.nav_targets.addClass("closed")
            }, e.prototype.collapse_all_characters = function() {
                return this.character_targets.removeClass("closed"), this.character_targets.addClass("closed"), this.character_elements.removeClass("character-active"), this.character_elements.removeAttr("data-state")
            }, e.prototype.deactivate_all_elements = function() {
                return $(".relationship-title").removeClass("album-active")
            }, e.prototype.create_relationship_slick = function() {
                return $(".slick-relationship-container").unslick({}), $(".slick-relationship-container").slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    centerPadding: "10px",
                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }]
                })
            }, e.prototype.open_element = function(e) {
                return $(e).removeClass("closed")
            }, e.prototype.activate_element = function(e) {
                return $(e).first().addClass("album-active")
            }, e.prototype.register_handlers = function() {
                var e;
                return e = this, this.nav_elements.on("click", function() {
                    return e.collapse_all_relationships(), e.collapse_all_characters(), e.deactivate_all_elements(), e.activate_element($($(this).data("self"))), e.open_element($($(this).data("target"))), e.create_relationship_slick(), window.location = $(this).attr("href")
                }), this.character_elements.on("click", function(t) {
                    var n;
                    return n = $(this).attr("data-state"), e.collapse_all_characters(), "open" === n ? (t.preventDefault(), console.log(n, $(this).attr("data-state"), window.location), window.location = "#by_our_side", !1) : (e.open_element($($(this).data("target"))), $(this).attr("data-state", "open"), window.location = $(this).attr("href"))
                })
            }, e
        }(), $(document).ready(function(e) {
            return function() {
                var t;
                return t = new e.RelationshipDOM
            }
        }(this))
    }.call(this),
    function() {
        this.GuestMessages = function() {
            function e() {
                this.message_success = $("#message-success"), this.message_error = $("#message-error"), this.loading_image = $("#load-img"), this.target_form = $("form#new_guest_message"), this.register_handlers()
            }
            return e.prototype.register_handlers = function() {
                var e;
                return e = this, this.target_form.on("ajax:beforeSend", function() {
                    return e.show_loading()
                }), this.target_form.on("ajax:success", function(t, n) {
                    return e.send_success(n)
                }), this.target_form.on("ajax:error", function(t, n) {
                    return e.send_error(n)
                })
            }, e.prototype.show_loading = function() {
                return this.loading_image.css("display", "block")
            }, e.prototype.hide_loading = function() {
                return this.loading_image.css("display", "none")
            }, e.prototype.reset_form = function() {
                return this.target_form[0].reset()
            }, e.prototype.send_success = function(e) {
                return this.hide_loading(), this.message_success.html(e.message.message_success).addClass("success").fadeIn("400"), window.setTimeout(function() {
                    return $("#message-success").fadeOut("400"), $("#collapseMessageForm").collapse("hide")
                }, 5e3), this.reset_form()
            }, e.prototype.send_error = function() {
                return this.hide_loading(), this.message_error.html(I18n.t("send_msg_error_required")).fadeIn("400"), window.setTimeout(function() {
                    return $("#message-error").fadeOut("400")
                }, 5e3), this.message_error.removeClass("error")
            }, e
        }(), $(document).ready(function() {
            return function() {
                var e;
                return e = new GuestMessages
            }
        }(this))
    }.call(this),
    function() {
        $(function() {
            var e;
            return e = function(e) {
                var t, n, i, o, a, s, r, l, u, d;
                for (u = document.querySelectorAll(".pswp")[0], n = e.find(".itemSwipe"), s = [], a = o = 0, r = n.length; r > o; a = ++o) t = n[a], d = $(t).attr("data-size").split("x"), s[a] = {
                    src: $(t).attr("href"),
                    w: parseInt(d[0], 10),
                    h: parseInt(d[1], 10),
                    title: $(t).attr("title")
                };
                l = {
                    history: !1,
                    focus: !1,
                    showAnimationDuration: 600,
                    hideAnimationDuration: 400,
                    showHideOpacity: !0,
                    getThumbBoundsFn: !1
                }, i = new PhotoSwipe(u, PhotoSwipeUI_Default, s, l), i.init()
            }, $(".triggerSwipe").on("click", function(t) {
                return t.preventDefault(), e($($(this).data("target")))
            })
        })
    }.call(this),
    function() {
        var e;
        this.ViewMore = function() {
            function e() {
                this.show_text = I18n.t("read_more"), this.collapse_text = I18n.t("close"), this.button_class = "show-more-toggle-button ", this.elements = $("[data-behavior~=view_more]"), this.register_css_rules(), this.handle_elements()
            }
            return e.prototype.handle_elements = function() {
                var e, t, n, i, o;
                for (i = this.elements, o = [], t = 0, n = i.length; n > t; t++) e = i[t], this.check_need(e) ? o.push(this.create_component(e)) : o.push(void 0);
                return o
            }, e.prototype.check_need = function(e) {
                var t, n, i;
                return n = $(e), t = n.data("max-height"), n.css({
                    height: t + "px",
                    overflow: "hidden"
                }), i = e.offsetHeight < e.scrollHeight, n.css({
                    overflow: "visible",
                    height: "auto"
                }), i
            }, e.prototype.create_component = function(e) {
                var t, n, i, o, a, s, r, l;
                return a = ("" + Math.random()).replace(/\./g, ""), l = $(e), r = 65 + l.data("max-height"), n = l.attr("data-anchor") ? l.attr("data-anchor") : a, s = l.attr("data-button-class") ? l.attr("data-button-class") : "", i = "" + this.button_class + s, l.wrap('<div data-height="fill" class="show-more show-more-collapsed" id="' + a + '"></div>'), o = $("#" + a), o.css({
                    height: r + "px",
                    overflow: "hidden"
                }), t = $("<a/>"), t.attr({
                    href: "#" + a,
                    "data-target": a,
                    "data-anchor": n,
                    "class": i,
                    "data-show-text": this.show_text,
                    "data-collapse-text": this.collapse_text,
                    "data-max-height": r
                }), t.text(this.show_text), t.click(function(e) {
                    return function() {
                        return e.do_magic(t)
                    }
                }(this)), o.wrap('<div class="show-more-wrapper"></div>'), t.insertAfter(o)
            }, e.prototype.register_css_rules = function() {
                var e;
                return e = $("<style/>"), e.attr({
                    type: "text/css",
                    media: "screen",
                    id: "show-more-stile-rules"
                }), $("body").append(e), e.html(".show-more{margin-top:-65px;padding-top:65px}")
            }, e.prototype.do_magic = function(e) {
                var t;
                return e = $(e), t = $("#" + e.data("target")), t.toggleClass("show-more-collapsed"), t.hasClass("show-more-collapsed") ? (t.css({
                    height: e.data("max-height") + "px",
                    overflow: "hidden"
                }), e.attr("href", "#" + e.data("anchor")), e.text(e.data("show-text"))) : (t.css({
                    height: "auto",
                    overflow: "visible"
                }), e.attr("href", "#" + e.data("target")), e.text(e.data("collapse-text")))
            }, e
        }(), e = new this.ViewMore
    }.call(this), + function(e) {
        "use strict";
        var t = function(n, i) {
            this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
        };
        t.DEFAULTS = {
            toggle: !0
        }, t.prototype.dimension = function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, t.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t = e.Event("show.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.$parent && this.$parent.find("> .panel > .in");
                    if (n && n.length) {
                        var i = n.data("bs.collapse");
                        if (i && i.transitioning) return;
                        n.collapse("hide"), i || n.data("bs.collapse", null)
                    }
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("in")[o]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return a.call(this);
                    var s = e.camelCase(["scroll", o].join("-"));
                    this.$element.one(e.support.transition.end, e.proxy(a, this)).emulateTransitionEnd(350)[o](this.$element[0][s])
                }
            }
        }, t.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var i = function() {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return e.support.transition ? void this.$element[n](0).one(e.support.transition.end, e.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
                }
            }
        }, t.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var n = e.fn.collapse;
        e.fn.collapse = function(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.collapse"),
                    a = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
                o || i.data("bs.collapse", o = new t(this, a)), "string" == typeof n && o[n]()
            })
        }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = n, this
        }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
            var n, i = e(this),
                o = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
                a = e(o),
                s = a.data("bs.collapse"),
                r = s ? "toggle" : i.data(),
                l = i.attr("data-parent"),
                u = l && e(l);
            s && s.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[a.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), a.collapse(r)
        })
    }(jQuery), + function(e) {
        "use strict";
        var t = function(t) {
            this.element = e(t)
        };
        t.prototype.show = function() {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                i = t.data("target");
            if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var o = n.find(".active:last a")[0],
                    a = e.Event("show.bs.tab", {
                        relatedTarget: o
                    });
                if (t.trigger(a), !a.isDefaultPrevented()) {
                    var s = e(i);
                    this.activate(t.parent("li"), n), this.activate(s, s.parent(), function() {
                        t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o
                        })
                    })
                }
            }
        }, t.prototype.activate = function(t, n, i) {
            function o() {
                a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
            }
            var a = n.find("> .active"),
                s = i && e.support.transition && a.hasClass("fade");
            s ? a.one(e.support.transition.end, o).emulateTransitionEnd(150) : o(), a.removeClass("in")
        };
        var n = e.fn.tab;
        e.fn.tab = function(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.tab");
                o || i.data("bs.tab", o = new t(this)), "string" == typeof n && o[n]()
            })
        }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
            return e.fn.tab = n, this
        }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
            t.preventDefault(), e(this).tab("show")
        })
    }(jQuery), + function(e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                }
        }
        e.fn.emulateTransitionEnd = function(t) {
            var n = !1,
                i = this;
            e(this).one(e.support.transition.end, function() {
                n = !0
            });
            var o = function() {
                n || e(i).trigger(e.support.transition.end)
            };
            return setTimeout(o, t), this
        }, e(function() {
            e.support.transition = t()
        })
    }(jQuery), + function(e) {
        "use strict";
        var t = function(t, n) {
            this.options = n, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
        };
        t.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, t.prototype.toggle = function(e) {
            return this[this.isShown ? "hide" : "show"](e)
        }, t.prototype.show = function(t) {
            var n = this,
                i = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
                var i = e.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show(), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                var o = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                i ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
                    n.$element.focus().trigger(o)
                }).emulateTransitionEnd(300) : n.$element.focus().trigger(o)
            }))
        }, t.prototype.hide = function(t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
        }, t.prototype.enforceFocus = function() {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
            }, this))
        }, t.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
        }, t.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
            })
        }, t.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, t.prototype.backdrop = function(t) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && n;
                if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", e.proxy(function(e) {
                        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                i ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
        };
        var n = e.fn.modal;
        e.fn.modal = function(n, i) {
            return this.each(function() {
                var o = e(this),
                    a = o.data("bs.modal"),
                    s = e.extend({}, t.DEFAULTS, o.data(), "object" == typeof n && n);
                a || o.data("bs.modal", a = new t(this, s)), "string" == typeof n ? a[n](i) : s.show && a.show(i)
            })
        }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
            return e.fn.modal = n, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
            var n = e(this),
                i = n.attr("href"),
                o = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                a = o.data("modal") ? "toggle" : e.extend({
                    remote: !/#/.test(i) && i
                }, o.data(), n.data());
            t.preventDefault(), o.modal(a, this).one("hide", function() {
                n.is(":visible") && n.focus()
            })
        }), e(document).on("show.bs.modal", ".modal", function() {
            e(document.body).addClass("modal-open")
        }).on("hidden.bs.modal", ".modal", function() {
            e(document.body).removeClass("modal-open")
        })
    }(jQuery),
    function() {}.call(this);