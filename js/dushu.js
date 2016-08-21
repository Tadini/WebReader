!function(t, n) {
    function e(t, n) {
        var e, i = Mv.prototype.hasOwnProperty;
        for (e in t)
            i.call(t, e) && n(e, t[e])
    }
    function i(t) {
        return t instanceof Mv && t != t.window && Mv.getPrototypeOf(t) == Mv.prototype
    }
    function r(t, o, a) {
        return e(o, function(e, c) {
            a && i(c) ? (i(t[e]) || (t[e] = {}),
            r(t[e], o[e], a)) : a && c instanceof Ev ? (t[e] instanceof Ev || (t[e] = []),
            r(t[e], o[e], a)) : o[e] !== n && (t[e] = o[e])
        }
        ),
        t
    }
    function o(t, i) {
        return e(i, function(e, i) {
            t[e] === n && (t[e] = i)
        }
        ),
        t
    }
    function a(t) {
        var n = m(arguments, 1);
        return t.replace(/\{(\d+)\}/g, function(t, e) {
            return n[e]
        }
        )
    }
    function c(t, n) {
        return t.indexOf(n) > -1
    }
    function s(t) {
        return Bv[t]
    }
    function u(t) {
        return "string" == typeof t ? t.replace(/[&<>"]/g, s) : t == n ? "" : t
    }
    function l(t) {
        return $v(t.replace(/\+/g, " "))
    }
    function d(t) {
        var n, e, i = {}, r = t.split("&");
        for (n = 0; r.length > n; n++)
            r[n] && (e = r[n].split("="),
            i[l(e[0])] = l(e[1] || ""));
        return i
    }
    function f(t, i) {
        var r, o = "";
        return e(t, function(t, e) {
            if (e != n)
                if (e instanceof Ev)
                    for (r = 0; e.length > r; r++)
                        o += "&" + Cv(t) + "=" + Cv(e[r]);
                else
                    o += "&" + Cv(t) + "=" + Cv(e)
        }
        ),
        i ? (i + o).replace(/[&?]{1,2}/, "?") : o.substr(1)
    }
    function p(t, n) {
        var e, i = "";
        for (e = 0; n > e; e++)
            i += t[Math.floor(Math.random() * t.length)];
        return i
    }
    function v(t) {
        return $v(escape(atob(t)))
    }
    function h(t, n) {
        var e = Ev.prototype;
        return e[t].apply(n[0], e.slice.call(n, 1))
    }
    function _() {
        return h("forEach", arguments)
    }
    function m() {
        return h("slice", arguments)
    }
    function g() {
        return h("splice", arguments)
    }
    function b() {
        return h("sort", arguments)
    }
    function k() {
        return h("every", arguments)
    }
    function y() {
        return h("filter", arguments)
    }
    function w() {
        return (h("filter", arguments) || [])[0]
    }
    function x() {
        return h("map", arguments)
    }
    function T() {
        return h("reduce", arguments)
    }
    function C() {
        return h("indexOf", arguments)
    }
    function $() {
        return h("push", arguments)
    }
    function I() {
        return h("concat", arguments)
    }
    function S(t, n) {
        var e = C(t, n);
        return -1 === e ? t : I(m(t, 0, e), m(t, e + 1))
    }
    function O(t, n) {
        return C(t, n) >= 0
    }
    function E() {}
    function M(t, n) {
        var e;
        return function() {
            var i = this
              , r = arguments;
            yv(e),
            e = kv(function() {
                t.apply(i, r)
            }
            , n)
        }
    }
    function P(t, n) {
        var e, i, r, o = 0;
        return function() {
            var a = new Pv
              , c = n - (a - o);
            return e = this,
            i = arguments,
            0 >= c && (o = a,
            r = t.apply(e, i)),
            r
        }
    }
    function A(t) {
        return "[object Function]" === Mv.prototype.toString.call(t)
    }
    function L(t, n, e) {
        return t = t || E,
        e = e || E,
        n = n || E,
        function() {
            var i = {
                args: Ev.prototype.slice.call(arguments, 0)
            };
            return n.call(this, i),
            i.stopped || (i.value = t.apply(this, i.args),
            e.call(this, i)),
            i.value
        }
    }
    function N(t, e) {
        return (e === n ? vv : e).querySelector(t)
    }
    function B(t, e) {
        return (e === n ? vv : e).querySelectorAll(t)
    }
    function j(t, n) {
        return t.webkitMatchesSelector(n)
    }
    function R(t, n, e) {
        for (; t && t !== e; t = t.parentElement)
            if (j(t, n))
                return t;
        return null 
    }
    function H(t, n, e, i) {
        t.addEventListener(n, e, !!i)
    }
    function D(t, n, e, i) {
        t.removeEventListener(n, e, !!i)
    }
    function z(t, n, e) {
        var i = vv.createEvent("HTMLEvents");
        return i.initEvent(n, !0, !0),
        i.data = e,
        t.dispatchEvent(i),
        i
    }
    function F(t, n) {
        return t.classList.contains(n)
    }
    function Y(t, n) {
        t.classList.add(n)
    }
    function V(t, n) {
        t.classList.remove(n)
    }
    function W(t, n) {
        t.classList.toggle(n)
    }
    function K(t) {
        var n = t[Hv] || (t[Hv] = Rv++);
        return jv[n] || (jv[n] = {})
    }
    function X(t) {
        var n = t[Hv];
        n && delete jv[n]
    }
    function G(t) {
        var n, e = B("*", t);
        for (n = 0; e.length > n; n++)
            X(e[n])
    }
    function J(t, n) {
        t[zv] = t[zv] || [],
        t[zv].push(n),
        Y(t, Dv)
    }
    function U(t) {
        var n, e = t[zv];
        if (e)
            for (n = e.length; n--; )
                e[n].call(t)
    }
    function q(t) {
        for (var n = t.getElementsByClassName(Dv), e = n.length; e--; )
            U(n[e])
    }
    function Z(t) {
        q(t),
        U(t),
        G(t),
        X(t),
        Q(t)
    }
    function Q(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }
    function tt(t) {
        t.style.display = "none"
    }
    function nt(t) {
        t.style.display = ""
    }
    function et(t) {
        t.getBoundingClientRect()
    }
    function it(n, e) {
        var i = n.getBoundingClientRect();
        return e = e || 0,
        i.width && i.height && i.bottom > -e && i.right > -e && t.innerHeight + e > i.top && t.innerWidth + e > i.left
    }
    function rt(t) {
        return t.innerHTML
    }
    function ot(t, n) {
        q(t),
        G(t),
        t.innerHTML = n
    }
    function at(t, n) {
        q(t),
        G(t),
        t.textContent = n
    }
    function ct(t, n) {
        t.insertAdjacentHTML("afterbegin", n)
    }
    function st(t, n) {
        t.insertAdjacentHTML("beforeend", n)
    }
    function ut(t, n) {
        if (t) {
            if (n(t) === !1)
                return;
            for (t = t.firstChild; t; )
                ut(t, n),
                t = t.nextSibling
        }
    }
    function lt(t, n, e, i) {
        H(t, n, function(t) {
            var n = R(t.target, e);
            n && i(t, n)
        }
        )
    }
    function dt(t) {
        r(Fv, t)
    }
    function ft(t, e) {
        var i, a, c, s = new Av, u = !1;
        return e = r({}, e, !0),
        o(e, Fv),
        e.type = e.type.toUpperCase(),
        c = "GET" == e.type,
        i = f(e.data, c ? t : n),
        c && (t = i,
        i = null ),
        s.open(e.type, t, !0),
        e.timeout > 0 && (a = kv(function() {
            u = !0,
            s.abort()
        }
        , e.timeout)),
        H(s, "readystatechange", function() {
            var t, n;
            if (4 == s.readyState) {
                if (yv(a),
                u)
                    n = "timeout";
                else if (s.status >= 200 && 300 > s.status || 304 == s.status) {
                    if (t = s.responseText,
                    "json" == e.dataType)
                        try {
                            t = JSON.parse(t)
                        } catch (t) {
                            n = "parsererror"
                        }
                } else
                    n = "error";
                n ? e.error(n, s) : (n = "success",
                e.success(t, s)),
                e.complete(n, s)
            }
        }
        ),
        "POST" == e.type && s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        s.send(i),
        s
    }
    function pt(n, e) {
        function i() {
            u.removeChild(s),
            delete ov[l]
        }
        function a(t) {
            d || (yv(c),
            e.success(t),
            e.complete("success")),
            i()
        }
        var c, s = vv.createElement("script"), u = vv.head, l = "cb" + ++Vv, d = !1;
        ov || (ov = t[Yv] = {}),
        e = r({}, e, !0),
        o(e, Fv),
        e.timeout > 0 && (c = kv(function() {
            d = !0,
            e.error(),
            e.complete("timeout")
        }
        , e.timeout)),
        ov[l] = a,
        e.callback && (t[e.callback] = a),
        n = n.replace(/=\?/, "=" + Yv + "." + l),
        n = f(e.data, n),
        H(s, "error", function() {
            d || (yv(c),
            e.error(),
            e.complete("error")),
            i()
        }
        ),
        s.src = n,
        u.appendChild(s)
    }
    function vt(t, n) {
        n = r({}, n, !0),
        n.dataType = "json",
        o(n, {
            key: t,
            cacheTimeout: 1e3,
            success: E,
            error: E,
            complete: E,
            update: E,
            data: {}
        });
        var e, i = n.success, a = n.error, c = n.complete, s = $t(n.key), u = !1;
        return s && (s = JSON.parse(s),
        n.data.hash = s.hash),
        n.success = function(t, e) {
            s && t && t.hash && t.hash == s.hash ? t = s : (n.filter && (t = n.filter(t)),
            It(n.key, JSON.stringify(t))),
            (u ? n.update : i)(t, e)
        }
        ,
        n.error = function(t, n, e) {
            u || (s ? (u = !0,
            i(s),
            c("cache")) : a(t, n, e))
        }
        ,
        n.complete = function(t, n) {
            yv(e),
            u || c(t, n)
        }
        ,
        s && (e = kv(function() {
            u = !0,
            i(s),
            c("cache")
        }
        , n.cacheTimeout)),
        ft(t, n)
    }
    function ht(t, n) {
        var e = new Av;
        e.open("GET", t, !0),
        e.onreadystatechange = function() {
            var t = e.status;
            4 == e.readyState && (t >= 200 && 300 > t || 304 == t) && n(e.responseText)
        }
        ,
        e.send()
    }
    function _t(e) {
        function i(t) {
            var i = !1;
            if (!t)
                try {
                    t = d(_v.hash.substr(1))
                } catch (n) {
                    t = {}
                }
            t._index == n || t._session == n ? (t._index = ++r,
            t._session = o,
            t._title = vv.title,
            i = !0) : r = t._index,
            t._session != o && (a[r] && (o = Pv.now(),
            a = {}),
            t._session = o,
            i = !0),
            a[r] = 1,
            i && hv.replaceState(t, vv.title),
            hv.state = t,
            e(gt(), t._title, r, i)
        }
        var r = -1
          , o = Pv.now()
          , a = {}
          , c = !1;
        H(t, "popstate", function(t) {
            c || i(t.state)
        }
        ),
        "complete" == vv.readyState ? i(hv.state) : H(t, "load", function() {
            kv(function() {
                c = !1
            }
            , 0),
            i(hv.state),
            c = !0
        }
        )
    }
    function mt(t) {
        return t = r({}, t, !0),
        delete t._index,
        delete t._session,
        delete t._title,
        t
    }
    function gt() {
        return mt(hv.state)
    }
    function bt(t, e, i) {
        var o, a = hv.state;
        t ? a && r(t, {
            _index: a._index,
            _session: a._session,
            _title: a._title
        }) : t = a,
        e != n && (vv.title = t._title = e),
        o = "#" + f(mt(t)),
        (i ? hv.replaceState : hv.pushState).call(hv, t, vv.title, o),
        hv.state = t
    }
    function kt(t, n) {
        bt(t, n, !1)
    }
    function yt(t, n) {
        bt(t, n, !0)
    }
    function wt(t, e, i) {
        var r;
        i = i || E,
        _t(function(o, a, c, s) {
            var u = t.page(c);
            r == u ? z(u, "page:popstate", o) : (r && z(r, "page:hide"),
            t.go(c, !r),
            a != n && (vv.title = a),
            s && e(u, o),
            z(u, "page:show", s),
            r = u,
            i(u, o))
        }
        )
    }
    function xt(t, n) {
        var e, i, r = 200, o = 10, a = 0, c = 0;
        Ot() || (t = t || vv,
        (n || !Ot()) && (H(t, "touchstart", function(t) {
            var n = t.touches
              , o = n[0];
            n.length > 1 || (a = t.timeStamp,
            e = o.pageX,
            i = o.pageY,
            r > a - c && (a = 0))
        }
        ),
        H(t, "touchend", function(t) {
            var n = t.changedTouches[0]
              , s = Math.abs;
            t.timeStamp - a > r || s(n.pageX - e) > o || s(n.pageY - i) > o || (z(t.target, "click"),
            c = t.timeStamp)
        }
        ),
        H(t, "click", function(t) {
            t.which && (t.preventDefault(),
            t.stopImmediatePropagation())
        }
        , !0)))
    }
    function Tt(t) {
        function n(t) {
            i && (yv(i),
            i = 0),
            e && (e = 0,
            t && t.preventDefault())
        }
        var e, i, r = 500;
        t = t || vv,
        H(t, "touchstart", function(t) {
            var o = t.target;
            return t.touches.length > 1 ? n() : void (i = kv(function() {
                e = 1,
                z(o, "hold")
            }
            , r))
        }
        ),
        H(t, "touchmove", n),
        H(t, "touchcancel", n),
        H(t, "touchend", n)
    }
    function Ct(t) {
        Wv = t
    }
    function $t(t) {
        return Iv[Wv + t]
    }
    function It(t, n) {
        Iv[Wv + t] = n
    }
    function St(t) {
        delete Iv[Wv + t]
    }
    function Ot() {
        return /[@-A]/i.test("a")
    }
    function Et() {
        t.matchMedia("(width:" + t.innerWidth + "px)").addListener(Mt)
    }
    function Mt() {
        z(t, "resize"),
        z(t, "rotate")
    }
    function Pt() {
        var t = _v.href.split("#")
          , n = t[0]
          , e = t[1];
        e && (Sv.hash = e),
        _v.replace(n)
    }
    /**
     * 判断url中是否存在hash值
     * sessionStorage中是否存在hash值
     * 
     */
    function At() {
        !_v.hash && Sv.hash && (hv.replaceState(null , vv.title, "#" + Sv.hash),
        delete Sv.hash)
    }
    function Lt(t, n) {
        n = n || function() {
            _v.reload()
        }
        ,
        Nv.status == Nv.UPDATEREADY && n(),
        H(Nv, "updateready", n),
        t && kv(function() {
            D(Nv, "updateready", n)
        }
        , t)
    }
    function Nt(t) {
        return '<div class="Loading ' + (t || "") + '"><i></i></div>'
    }
    function Bt(t) {
        return Nt("Loading_bottom " + (t || ""))
    }
    function jt(t) {
        return '<div class="Loading-page ' + (t || "") + '"><div class="Loading-page__bd">' + Nt("Loading_loading") + "</div></div>"
    }
    function Rt() {
        return '<p>\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u4e00\u4e0b\u8bd5\u8bd5:)</p><a href="javascript:" class="Loading-page__reload">\u5237 \u65b0</a>'
    }
    function Ht(t) {
        Y(t, Kv)
    }
    function Dt(t) {
        V(t, Kv)
    }
    function zt(t) {
        return F(t, Kv)
    }
    function Ft(t) {
        Y(t, Xv)
    }
    function Yt(t) {
        return F(t, Xv)
    }
    function Vt(t) {
        Y(t, Gv)
    }
    function Wt(t) {
        V(t, Gv)
    }
    function Kt(t, n) {
        var e = N(".Loading-page__bd", t);
        ot(e, Rt()),
        n && H(N(".Loading-page__reload", e), "click", n)
    }
    function Xt(t, e) {
        var i;
        return t = t || vv,
        e === n && (e = 300),
        H(t, "scroll", M(function() {
            i && !zt(i) && !Yt(i) && it(i, e) && (Wt(i),
            Ht(i),
            z(i, "loading:load"))
        }
        , 250)),
        K(t).loading = {
            get $loading() {
                return i
            },
            set $loading(t) {
                i = t
            }
        }
    }
    function Gt(n, e) {
        function i() {
            function e() {
                kv(function() {
                    var t, e = n.offsetWidth;
                    e && (F = e),
                    G && (t = G.offsetWidth,
                    t && (U = t)),
                    a()
                }
                , 0)
            }
            X && (r(0),
            r(1)),
            G && o(),
            a(),
            W || (H(N, "touchstart", u),
            H(N, "touchmove", l),
            H(N, "touchcancel", d),
            H(N, "touchend", d)),
            H(N, "webkitTransitionEnd", f),
            H(t, "rotate", e),
            J(n, function() {
                D(t, "rotate", e)
            }
            ),
            b(),
            nt(tt, j[tt])
        }
        function r(t) {
            var n;
            n = j[t].cloneNode(!0),
            n.removeAttribute("id"),
            N.appendChild(n)
        }
        function o() {
            U = G.offsetWidth,
            x = m(G.children),
            C = x[tt],
            Y(C, Z),
            Q && (T = vv.createElement("i"),
            q = T.style,
            G.appendChild(T)),
            H(G, "click", function(t) {
                var n = x.indexOf(t.target);
                ~n && (t.preventDefault(),
                n != tt && h(n))
            }
            )
        }
        function a() {
            var t, n;
            for (t = 0,
            n = j.length; n > t; t++)
                j[t].style.width = F + "px";
            B.width = F * (X ? R + 2 : R) + "px",
            q.width = U / R + "px",
            c("0s"),
            s(tt)
        }
        function c(t) {
            B.webkitTransitionDuration = q.webkitTransitionDuration = t
        }
        function s(t, n) {
            n = n || 0,
            B.webkitTransform = "translate3d(" + (n - t * F) + "px,0,0)",
            q.webkitTransform = "translate3d(" + (t % R * F - n) * U / (F * R) + "px,0,0)"
        }
        function u(t) {
            var n = t.touches[0];
            st && !t.swipeStopPropagation && (at && (t.swipeStopPropagation = !0),
            I || (I = !0,
            S = Pv.now(),
            O = M = n.pageX,
            P = n.pageY,
            A = !1))
        }
        function l(t) {
            var n = t.touches[0]
              , e = n.pageX - M
              , i = n.pageY - P
              , r = Math.abs(e)
              , o = Math.abs(i);
            I && (A ? (t.preventDefault(),
            !X && (0 === tt && e > 0 || tt === R - 1 && 0 > e) ? O = M = n.pageX : s(L, e)) : .6 * r > o && r > 5 ? (t.preventDefault(),
            A = !0,
            M = n.pageX,
            c("0s"),
            k(),
            X && 0 === tt ? (L = R,
            s(L)) : L = tt) : r > 5 && o > 5 && (I = !1))
        }
        function d(t) {
            var n = t.changedTouches[0].pageX - O
              , e = 800 > Pv.now() - S ? 20 : F / 2;
            I && (I = !1,
            A && (kv(b, 0),
            n > e && (X || L > 0) ? L > 0 && L-- : -e > n && (R - 1 > L || X) && L++,
            p(L)))
        }
        function f(t) {
            t.target == N && (rt(tt, j[tt]),
            c("0s"),
            s(tt),
            v(tt))
        }
        function p(t, n) {
            (!X || t > R + 1) && (t %= R),
            c(n ? "0s" : ""),
            s(t),
            t %= R,
            t != tt && (tt = t,
            nt(tt, j[tt])),
            et(j[tt]),
            n && z(N, "webkitTransitionEnd")
        }
        function v(t) {
            G && C != x[t] && (C && V(C, Z),
            C = x[tt],
            C && Y(C, Z))
        }
        function h(t, n) {
            k(),
            p(t, n),
            b()
        }
        function _() {
            tt > 0 ? p(tt - 1) : X && (c("0s"),
            s(R),
            et(N),
            p(R - 1))
        }
        function g() {
            (R - 1 > tt || X) && p(tt + 1)
        }
        function b() {
            ot && ($ = wv(function() {
                var t = ct;
                ct = it(n),
                t && ct && g()
            }
            , ot))
        }
        function k() {
            $ && xv($)
        }
        function y() {
            var t = vv.createElement("div");
            return N.insertBefore(t, j[R++]),
            a(),
            t
        }
        function w(t) {
            for (; t >= R; )
                y();
            return j[t]
        }
        e = e || {};
        var x, T, C, $, I, S, O, M, P, A, L, N = n.firstElementChild, B = N.style, j = N.children, R = j.length, F = n.offsetWidth, W = e.disableTouch, X = 2 > R ? !1 : e.loop, G = e.$tab, U = F, q = {}, Z = e.tabOnClass || Jv, Q = e.tabArrow, tt = e.pos || 0, nt = e.callback || E, rt = e.transitionEndCallback || E, ot = e.playInterval, at = e.stopPropagation, ct = !0, st = !0;
        return i(),
        K(n).swipe = {
            get curr() {
                return tt
            },
            get $curr() {
                return j[tt]
            },
            get length() {
                return R
            },
            go: h,
            add: y,
            page: w,
            prev: function() {
                k(),
                _(),
                b()
            },
            next: function() {
                k(),
                g(),
                b()
            },
            disableTouch: function(t) {
                st = !t
            }
        }
    }
    function Jt(t, n) {
        function e() {
            o = vv.createElement("iframe"),
            tt(o),
            vv.body.appendChild(o),
            H(o, "load", function() {
                var t;
                for (a = !0,
                t = 0; s.length > t; t++)
                    i(s[t][0], s[t][1])
            }
            ),
            o.src = t + n,
            c = !0
        }
        function i(n, e) {
            o.contentWindow.postMessage({
                type: Uv,
                key: n,
                value: e
            }, t)
        }
        function r(t, n) {
            c || e(),
            a ? i(t, n) : s.push([t, n])
        }
        var o, a = !1, c = !1, s = [];
        return {
            init: e,
            set: r
        }
    }
    function Ut() {
        var n = "0123456789abcdef";
        if (av)
            return av;
        try {
            av = t.miui.getImeiMD5()
        } catch (t) {}
        return av || (av = Iv[qv]) || (Iv[qv] = av = p(n, 32)),
        av
    }
    function qt() {
        return '<div class="Pull"><div class="Pull__arrow"><i></i></div><div class="Pull__loading" style="display:none"><i></i></div></div><p class="Pull-tip" style="display:none"></p>'
    }
    function Zt(t, n, e) {
        function i() {
            H(n, "touchstart", r),
            H(n, "touchmove", o),
            H(n, "touchend", a),
            H(n, "touchcancel", a),
            H(n, "webkitTransitionEnd", c),
            y && H(y, "webkitTransitionEnd", function() {
                0 == y.style.opacity && tt(y)
            }
            )
        }
        function r(t) {
            var e = t.touches[0];
            v || n.scrollTop || T.webkitTransform || (v = !0,
            h = e.pageX,
            _ = e.pageY,
            m = !1)
        }
        function o(t) {
            var n = t.touches[0]
              , e = n.pageX - h
              , i = n.pageY - _
              , r = Math.abs(e)
              , o = Math.abs(i);
            v && (m ? (t.preventDefault(),
            i = Math.max(i, 0) / 3,
            u(i),
            x > i ? V(b, g) : Y(b, g)) : i > 5 && o > r ? (t.preventDefault(),
            m = !0,
            h = n.pageX,
            s(!1),
            tt(k),
            nt(b)) : (0 > i || r > 5) && (v = !1))
        }
        function a() {
            v && (v = !1,
            m && (F(b, g) ? (l(),
            z(t, "pull:load")) : d()))
        }
        function c() {
            T.webkitTransform || tt(k)
        }
        function s(t) {
            T.webkitTransition = t ? "" : "none"
        }
        function u(t) {
            T.webkitTransform = t ? "translate3d(0," + t + "px,0)" : ""
        }
        function l() {
            n.scrollTop = 0,
            tt(b),
            nt(k),
            s(!0),
            u(x)
        }
        function d() {
            s(!0),
            u(0)
        }
        function f(t) {
            y && (yv(p),
            at(y, t || ""),
            y.style.opacity = 0,
            nt(y),
            et(y),
            y.style.opacity = 1,
            p = kv(function() {
                y.style.opacity = 0
            }
            , w))
        }
        e = e || {};
        var p, v, h, _, m, g = "Pull__arrow_over", b = N(".Pull__arrow", t), k = N(".Pull__loading", t), y = e.$tip, w = e.tipTimeout || 800, x = t.offsetHeight, T = n.style;
        return i(),
        K(t).pull = {
            showLoading: l,
            hide: d,
            tip: f
        }
    }
    function Qt(t, n) {
        function e(t) {
            t.style.visibility = "visible"
        }
        function i(t) {
            t.style.visibility = ""
        }
        function r() {
            2 > u || d || (d = !0,
            o = (l + 1) % u,
            s[l].style.webkitTransform = s[o].style.webkitTransform = "translate3d(0,0,0)",
            s[l].style.zIndex = 2,
            e(s[o]),
            s[l].style.opacity = 0)
        }
        n = n || {};
        var o, a = n.pos || 0, c = n.callback || E, s = t.children, u = s.length, l = a % u, d = !1;
        return e(s[l]),
        c(l, s[l]),
        H(t, "webkitTransitionEnd", function(t) {
            var n = t.target;
            n == s[l] && 0 == n.style.opacity && (i(n),
            n.style.webkitTransition = "none",
            n.style.zIndex = "",
            n.style.opacity = "",
            et(n),
            n.style.webkitTransition = "",
            s[l].style.webkitTransform = s[o].style.webkitTransform = "",
            l = o,
            c(l, s[l]),
            d = !1)
        }
        ),
        K(t).fade = {
            next: r,
            get curr() {
                return l
            }
        }
    }
    function tn(t, n, e) {
        function i(t) {
            t != c && t >= 0 && u > t && (~c && (V(s[c], r),
            tt(l[c])),
            Y(s[t], r),
            nt(l[t]),
            a(t, l[t]),
            c = t)
        }
        e = e || {};
        var r = e.tabOnClass || Zv
          , o = e.pos || 0
          , a = e.callback || E
          , c = -1
          , s = m(t.children)
          , u = s.length
          , l = m(n.children);
        return H(t, "click", function(t) {
            var n = s.indexOf(t.target);
            ~n && i(n)
        }
        ),
        i(o),
        {
            pos: function() {
                return c
            },
            count: function() {
                return u
            },
            go: i
        }
    }
    function nn() {
        en(),
        rn(),
        an()
    }
    function en() {
        function t() {
            for (var t = "0123456789QWERTYUIOPASDFGHJKLZXCVBNM", n = "", e = 0; 12 > e; e++)
                n += t.charAt(Math.ceil(1e8 * Math.random()) % t.length);
            return "D950" + n
        }
        var n = bn();
        lv = {
            app_id: "mi_wap",
            build: n.build,
            channel: n.ch,
            device_id: n.device_id || t(),
            user_type: n.user_type
        },
        lv.device_hash = Ut(),
        n.user_id && r(lv, {
            user_id: n.user_id,
            token: n.token
        })
    }
    function rn() {
        function t() {
            var t, n;
            _(["user_id", "token"], function(t) {
                Ve(t, on())
            }
            );
            for (t in lv)
                n = lv[t],
                Ye(t, n, on())
        }
        t()
    }
    function on() {
        var t = ".dushu.xiaomi.com";
        -1 == _v.host.indexOf("com") && (t = _v.hostname);
        var n = {
            domain: t,
            path: "/",
            expires: 365
        };
        return n
    }
    function an() {
        cv = _n(),
        sv = gn(),
        uv = _v.protocol + "//" + _v.host,
        fv = lv.user_id,
        dv = "wap",
        pv = !!Ye("en_ts")
    }
    function cn() {
        return !!$t("debug")
    }
    function sn() {
        return !!Ye("en_ts")
    }
    function un() {
        Ve("en_ts", on()),
        pv = sn()
    }
    function ln() {
        function n() {
            he(function(t, n) {
                return t ? pr(t) : n.result ? pr(n) : void ur()
            }
            , "/dk_id/api/anonymous/login", pe())
        }
        fv || sn() || (cn() || t.miui && t.miui.getImeiMD5) && n()
    }
    function dn() {
        return Mn()
    }
    function fn() {
        "use strict";
        function t(t) {
            var n;
            return this.timeout_id = null ,
            this.duration = 3e3,
            this.content = "",
            this.position = "bottom",
            t && "object" == typeof t ? (t.duration && (this.duration = parseFloat(t.duration)),
            t.content && (this.content = t.content),
            t.position && (n = t.position.toLowerCase(),
            this.position = "top" === n || "bottom" === n ? n : "bottom"),
            void this.show()) : !1
        }
        return t.prototype.show = function() {
            if (!this.content)
                return !1;
            yv(this.timeout_id);
            var t = vv.getElementsByTagName("body")[0]
              , n = vv.getElementById("android_toast_container");
            n && t.removeChild(n);
            var e = "android_toast_fadein";
            "top" === this.position && (e = "android_toast_fadein android_toast_top");
            var i = vv.createElement("div");
            i.setAttribute("id", "android_toast_container"),
            i.setAttribute("class", e),
            t.appendChild(i);
            var r = vv.createElement("div");
            return r.setAttribute("id", "android_toast"),
            r.innerHTML = this.content,
            i.appendChild(r),
            this.timeout_id = kv(this.hide, this.duration),
            !0
        }
        ,
        t.prototype.hide = function() {
            function t() {
                var t = vv.getElementById("android_toast_container");
                return t ? void t.parentNode.removeChild(t) : !1
            }
            var n = vv.getElementById("android_toast_container");
            return n ? (yv(this.timeout_id),
            n.className += " android_toast_fadeout",
            n.addEventListener("webkitAnimationEnd", t),
            !0) : !1
        }
        ,
        t
    }
    function pn(t, n, e) {
        return pn.constuctor || (pn.constuctor = fn()),
        new pn.constuctor({
            content: t || "",
            duration: n || 3e3,
            position: e || "bottom"
        })
    }
    function vn(t) {
        return "string" != typeof t ? t : (("{" == t.charAt(0) || "[" == t.charAt(0)) && (t = JSON.parse(t)),
        t)
    }
    function hn(t) {
        return t && "object" == typeof t ? JSON.stringify(t) : t
    }
    function _n() {
        return !0
    }
    function mn() {
        return vv.title = arguments[0]
    }
    function gn() {
        return /miui/.test(mv.userAgent)
    }
    function bn() {
        var t = "2";
        try {
            t = Iv.native__user_type || "2"
        } catch (t) {
            gv.warn(t)
        }
        return {
            build: 8888,
            user_id: Ye("user_id"),
            token: Ye("token"),
            app_id: Ye("app_id"),
            user_type: t,
            device_id: Ye("device_id")
        }
    }
    function kn(t) {
        return pn(t)
    }
    function yn() {
        var t = gt().back;
        return t ? "home" == t ? _v.href = _v.pathname : (hv.pushState(null , vv.title, t),
        _v.reload()) : hv.back()
    }
    function wn(n) {
        return t.history.back()
    }
    function xn() {
        return !0
    }
    function Tn() {
        return !0
    }
    function Cn(t) {
        var n = Qv[t];
        return n || (n = {
            paid: []
        },
        Qv[t] = n),
        n
    }
    function $n(t, n) {
        return Iv[t] = n
    }
    function In() {
        return {}
    }
    function Sn() {
        return {}
    }
    function On() {
        return {}
    }
    function En() {
        var t = arguments[0];
        t > 2 && It("latest_serial_user_type", t);
        try {
            Iv.native__user_type = t
        } catch (t) {
            gv.warn(t)
        }
    }
    function Mn() {
        return "dushu.xiaomi.com" != _v.hostname && "www.duokan.com" != _v.hostname
    }
    function Pn() {
        return {}
    }
    function An() {
        return {}
    }
    function Ln() {
        return {}
    }
    function Nn() {
        return {}
    }
    function Bn() {
        var t = {
            login: 1,
            followup: _v.href + "&back=home",
            source: "wap",
            display: "mobile"
        };
        return _v.href = "/dk_id/api/xiaomi_web_reg?" + f(t)
    }
    function jn() {
        return _v.href = f({
            followup: _v.protocol + "//" + _v.hostname
        }, "/dk_id/api/xiaomi_web_logout")
    }
    function Rn(t, n) {
        n && n()
    }
    function Hn(t, n) {
        n && n()
    }
    function Dn() {
        return {}
    }
    function zn() {
        return {}
    }
    function Fn(t) {
        return {}
    }
    function Yn() {
        return sn() ? ["ALIPAY_WAP"] : ["MIPAY_WEB", "ALIPAY_WAP"]
    }
    function Vn() {
        return {}
    }
    function Wn() {
        return {}
    }
    function Kn() {
        return {}
    }
    function Xn() {
        return "listPaymentMethods" == arguments[0] ? !0 : !1
    }
    function Gn() {
        return !1
    }
    function Jn() {
        return !1
    }
    function Un(n) {
        H(t, "popstate", function e(i) {
            D(t, "popstate", e),
            n && n()
        }
        )
    }
    function qn() {}
    function Zn(t) {
        te(t, !0)
    }
    function Qn(t) {
        te(t, !1)
    }
    function te(n, e) {
        gv.log("toggle subscribe", n, e);
        try {
            var i = "com.xiaomi.browser.web.novels." + n;
            e ? t.miui.subscribe(i) : t.miui.unSubscribe(i)
        } catch (t) {
            gv.error("subscribe fiction error", n, e, t)
        }
    }
    function ne(t, n, e) {
        var i = [];
        if (t >= n)
            return i;
        e = e || 1;
        for (var r = t; n > r; r += e)
            i.push(r);
        return i
    }
    function ee(t) {
        var n = t.parentElement.children;
        return C(n, t)
    }
    function ie(t) {
        for (var n = 0; t; )
            n += t.offsetTop,
            t = t.offsetParent;
        return n
    }
    function re(t, n) {
        for (var e in n)
            n[e] ? Y(t, e) : V(t, e)
    }
    function oe(n) {
        H(t, "load", function() {
            kv(function() {
                H(t, "popstate", function(t) {
                    n(t)
                }
                )
            }
            , 0)
        }
        )
    }
    function ae(n) {
        var e = N("#root", vv);
        return n ? (ae.__top__ = vv.body.scrollTop,
        Y(e, "-unscrollable"),
        void (e.style.top = -1 * ae.__top__ + "px")) : (V(e, "-unscrollable"),
        void t.scrollTo(0, ae.__top__))
    }
    function ce(t) {
        var n = m(arguments, 1);
        t.forEach(function(t) {
            try {
                t.apply(this, n)
            } catch (t) {
                gv.error(t)
            }
        }
        )
    }
    function se(t) {
        var n = {};
        return function(e) {
            var i, r = m(arguments, 1);
            try {
                i = JSON.stringify(r)
            } catch (n) {
                return gv.error("function__memorizeWrapper key error", n),
                t.apply(this, arguments)
            }
            if (n[i] && n[i].result)
                return void e.apply(this, n[i].result);
            n[i] = n[i] || {},
            n[i].callbacks = n[i].callbacks || [],
            n[i].callbacks.push(e);
            var o = function(t) {
                var e = m(arguments, 0);
                t || (n[i].result = e),
                ce.apply(this, [n[i].callbacks].concat(e)),
                n[i].callbacks = []
            }
            ;
            n[i].callbacks.length > 1 || t.apply(this, [o].concat(r))
        }
    }
    function ue(t, n, e, i) {
        return i = i || {},
        r(i, pe()),
        ln(),
        fe(t, n, e, i, "POST", !0)
    }
    function le(t, n, e, i) {
        return fe(t, n, e, i || {}, "GET", !0)
    }
    function de(t, n) {
        if (xn({
            show: !0
        }),
        n.complete)
            throw "method complete occupied";
        n.complete = function() {
            xn({
                show: !1
            })
        }
        ,
        ft(t, n)
    }
    function fe(t, n, e, i, r, o) {
        var a = o ? ft : de;
        return a(e, {
            data: i,
            type: r,
            success: ve.bind(this, t, n),
            error: n
        })
    }
    function pe(t) {
        var n = parseInt((new Pv).getTime() / 1e3)
          , e = lv.device_id + "&" + n;
        return e = e.split(""),
        {
            _t: n,
            _c: e.reduce(function(t, n) {
                return (131 * t + n.charCodeAt(0)) % 65536
            }
            , 0)
        }
    }
    function ve(t, n, e) {
        if (!e || 0 != e.result && 0 != e.code) {
            if (n && n(e))
                return;
            if (14 === e.result)
                return kn("\u672c\u5730\u65f6\u95f4\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8bbe\u7f6e"),
                1;
            if (1003 === e.result && !cn())
                return void Li({
                    title: "\u767b\u5f55\u8fc7\u671f",
                    prompt: "\u60a8\u7684\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u662f\u5426\u91cd\u65b0\u767b\u5f55\uff1f",
                    confirm: dr.bind("", !0)
                });
            pr(e)
        } else
            t(e)
    }
    function he(t, n, e) {
        _e(t, n, e, "POST")
    }
    function _e(t, n, e, i) {
        function r(n) {
            t(null , n)
        }
        function o(n, e) {
            t({
                result: -1,
                msg: "http code" + e.status
            })
        }
        ft(n, {
            type: i || "GET",
            data: e,
            success: r,
            error: o
        })
    }
    function me(t, n) {
        return ge(t) ? n : t
    }
    function ge(t) {
        return t === n
    }
    function be(t) {
        return t ? "function" == typeof t.isArray ? Ev.isArray(t) : "[object Array]" === Mv.prototype.toString.call(t) : !1
    }
    function ke(t) {
        function n(t) {
            r(d, t)
        }
        function e(t) {
            n(t),
            c()
        }
        function i(t) {
            return d[t]
        }
        function o(t, n) {
            var e = {
                expr: t,
                listener: n
            };
            return l.push(e),
            e
        }
        function a(t) {
            l = S(l, t)
        }
        function c() {
            _(l, s)
        }
        function s(t) {
            var n = t.expr
              , e = t.listener
              , i = t.value
              , r = u(n);
            r !== i && e(r, i, f)
        }
        function u(t) {
            try {
                return A(t) ? t(d) : new Function("$scope","return " + t).apply(this, [d])
            } catch (n) {
                return gv.error("Scope parse error: ", t, n.stack),
                {}
            }
        }
        var l = []
          , d = r({}, t)
          , f = {
            onlySet: n,
            set: e,
            get: i,
            watch: o,
            stopWatch: a,
            digest: c
        };
        return f
    }
    function ye(t) {
        function n(t, n) {
            o.watch(n, function(n) {
                ot(t, n)
            }
            )
        }
        function e(t, n) {
            o.watch(n, function(n) {
                re(t, n)
            }
            )
        }
        function i(t, n) {
            o.watch(n, function(n) {
                t.style.display = n ? "" : "none"
            }
            )
        }
        var o = ke(t);
        return r(o, {
            html: n,
            className: e,
            show: i
        }),
        o
    }
    function we(t, n, e, i) {
        return !n && (n = []),
        function() {
            var r = m(arguments, 0)
              , o = e ? r.concat(n) : n.concat(r);
            return t.apply(i, o)
        }
    }
    function xe(t, n, e) {
        return !n && (n = []),
        function(i) {
            var r = m(arguments, 1);
            return t.apply(e, [i].concat(n).concat(r))
        }
    }
    function Te(t) {
        return function(n) {
            var e;
            e = t(),
            n(e === !1, e)
        }
    }
    function Ce() {
        var t = m(arguments, 0);
        return function(e) {
            function i(n, r) {
                var o = m(arguments, 2)
                  , a = null ;
                return r && (a = a || [],
                a[n - 1] = {
                    fn: t[n - 1],
                    error: r,
                    args: o
                }),
                r || n >= t.length ? void e.apply(this, [a].concat(o)) : void t[n].apply(this, [i.bind(this, n + 1)].concat(o))
            }
            var r = m(arguments, 1);
            i.apply(this, [0, n].concat(r))
        }
    }
    function $e(t, n, e) {
        function i() {
            a.forEach(function(t) {
                var n, e = t.dom, i = t.attr.substr(3);
                if ("custom" == i)
                    return Ie(t.expr, c, e);
                if (n = "click" == i ? t.expr : Ie(t.expr, c),
                !t.hasOwnProperty("value") || t.value !== n) {
                    if (t.value = n,
                    "bind" == i && (e.innerHTML = n),
                    "show" == i && (e.style.display = n ? "" : "none"),
                    "class" == i)
                        for (var r in n)
                            n[r] ? Y(e, r) : V(e, r);
                    if ("click" == i) {
                        var o, a = P(function(n) {
                            n.currentTarget = e,
                            th = n,
                            o = Ie(t.expr, c, e, n),
                            th = null 
                        }
                        , 600);
                        H(e, i, function(t) {
                            o !== nh && t.stopPropagation(),
                            a(t)
                        }
                        )
                    }
                }
            }
            )
        }
        function o(t, n, e) {
            function i(t, n, i) {
                if (-1 != i.attr.indexOf("vp-")) {
                    var o = {
                        dom: t,
                        expr: n
                    };
                    e.push(r(o, i))
                }
            }
            ut(t, function(n) {
                var e = n.nodeType;
                if (1 == e) {
                    var r = n.getAttribute("vp-ignore");
                    return null  !== r && n !== t ? !1 : void _(n.attributes, function(t) {
                        var e = t.name;
                        i(n, t.value, {
                            attr: e
                        })
                    }
                    )
                }
            }
            )
        }
        var a = []
          , c = n || {};
        c.$change = i,
        o(t, c, a);
        var s = {
            setOnly: function(t) {
                return t && r(c, t),
                s
            },
            set: function(t) {
                return t && r(c, t),
                i(),
                s
            },
            get: function(t) {
                return c[t]
            }
        };
        return s
    }
    function Ie(t, n, e, i) {
        try {
            return new Function("$root","$el","$event","return " + t).apply(this, [n || {}, e, i])
        } catch (n) {
            return gv.error("parse error: ", t, n.stack),
            {}
        }
    }
    function Se(t, n, e) {
        Se._cache || (Se._cache = {});
        var i = Se._cache[t];
        if (i || (i = Se._cache[t] = [],
        Se._cache[t].update = function(t) {
            this.forEach(function(n) {
                n.set(t)
            }
            )
        }
        ),
        n) {
            i.root = e || {};
            var r = $e(n, i.root);
            i.push(r)
        }
        return i
    }
    function Oe() {
        ot.apply(this, arguments),
        Ne()
    }
    function Ee() {
        ct.apply(this, arguments),
        Ne()
    }
    function Me() {
        st.apply(this, arguments),
        Ne()
    }
    function Pe(t, n, e) {
        var i;
        return t.insertAdjacentHTML("beforeBegin", n),
        i = t.previousSibling,
        e && t.remove(),
        Ne(),
        i
    }
    function Ae(t, n, e) {
        var i;
        return t.insertAdjacentHTML("afterEnd", n),
        i = t.nextSibling,
        e && t.parentNode.removeChild(t),
        Ne(),
        i
    }
    function Le(t, n) {
        var e = "Tag__" + ++ih
          , i = [].slice.call(arguments, 1);
        return eh.push({
            el: e,
            args: i,
            func: t || E
        }),
        e
    }
    function Ne() {
        eh.forEach(function(t, n) {
            if (t) {
                eh[n] = null ,
                t.el = vv.getElementById(t.el);
                try {
                    t.func.apply(null , [t.el].concat(t.args))
                } catch (n) {
                    gv.error("Tag__update fail", t, n)
                }
            }
        }
        ),
        eh = [],
        Tn(!1)
    }
    function Be(t) {
        function n(n) {
            H(n, "click", t)
        }
        return Le(n)
    }
    function je(t) {
        function n(t) {
            if (t) {
                var e = function() {}
                  , i = n(t.__parent__);
                return i && (e.prototype = i),
                r(e.prototype, t),
                new e
            }
        }
        var e = t.__contructor__;
        if (!e) {
            var i = function() {}
            ;
            i.prototype = n(t),
            e = t.__contructor__ = i
        }
        var o = new e;
        return o.__init__ && o.__init__.apply(o, [].slice.call(arguments, 1)),
        o
    }
    function Re(t) {
        return t.__single__ || (t.__single__ = je.apply(this, arguments)),
        t.__single__
    }
    function He(t, n, e) {
        function i() {
            "loading" != a.type && (r("success" == a.type ? "success" : "error"),
            r("complete"))
        }
        function r(t) {
            a[t].forEach(function(n, e) {
                a[t][e] = function() {}
                ,
                n(a.data, a.type, a.xhr)
            }
            ),
            a[t] = []
        }
        function o(t, n) {
            "[object Function]" == Mv.prototype.toString.call(n) && a[t].push(n)
        }
        var a = {
            success: [],
            error: [],
            complete: []
        };
        n = n || {},
        ["success", "error", "complete"].forEach(function(t) {
            o(t, n[t])
        }
        ),
        n.success = function(t) {
            a.data = t
        }
        ,
        n.complete = function(t, n) {
            a.type = t,
            a.xhr = n,
            i()
        }
        ,
        a.type = "loading",
        (e || ft)(t, n);
        var c = {
            __inter__: a,
            then: function(t, n) {
                return t && o("success", t),
                n && o("error", n),
                i(),
                c
            },
            always: function(t) {
                return t && o("complete", t),
                i(),
                c
            }
        };
        return c
    }
    function De() {
        function t() {
            if ("loading" != i.type) {
                if ("progress" == i.type)
                    return n("progress");
                n("success" == i.type ? "success" : "error"),
                n("complete")
            }
        }
        function n(t) {
            i[t].forEach(function(n, e) {
                i[t][e] = function() {}
                ,
                n(i.data, i.type)
            }
            ),
            i[t] = []
        }
        function e(t, n) {
            "[object Function]" == Mv.prototype.toString.call(n) && i[t].push(n)
        }
        var i = {
            success: [],
            error: [],
            complete: [],
            progress: [],
            type: "loading"
        }
          , r = {
            __inter__: i,
            then: function(n, i) {
                return n && e("success", n),
                i && e("error", i),
                t(),
                r
            },
            always: function(n) {
                return n && e("complete", n),
                t(),
                r
            },
            progress: function(n) {
                n && e("progress", n),
                t()
            }
        };
        return {
            resolve: function(n) {
                i.type = "success",
                i.data = n,
                t()
            },
            reject: function(n) {
                i.type = "error",
                i.data = n,
                t()
            },
            notify: function(n) {
                i.type = "progress",
                i.data = n,
                t()
            },
            promise: r
        }
    }
    function ze(t) {
        function n(n, i, r) {
            var o = "success" == r ? e.resolve : e.reject;
            return "error" == r && (r = "success|error"),
            t.every(function(t) {
                return -1 !== r.indexOf(t.__inter__.type)
            }
            ) ? o.call(e, t.map(function(t) {
                return t.__inter__.data
            }
            )) : void 0
        }
        var e = De();
        return t.forEach(function(t) {
            t.then(n.bind(this, t), n.bind(this, t))
        }
        ),
        e.promise
    }
    function Fe(t, n) {
        var e = t
          , i = vv.head || vv.getElementsByTagName("head")[0]
          , r = vv.createElement("style");
        if (n) {
            var o = N("#" + n, i);
            o && Z(o),
            r.id = n
        }
        return r.type = "text/css",
        r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(vv.createTextNode(e)),
        i.appendChild(r),
        r
    }
    function Ye(t, e, i) {
        function r(t) {
            return t
        }
        function o(t) {
            var n = /\+/g;
            return $v(t.replace(n, " "))
        }
        if (e !== n) {
            if (i = i || {},
            null  === e && (i.expires = -1),
            "number" == typeof i.expires) {
                var a = i.expires
                  , c = i.expires = new Pv;
                c.setDate(c.getDate() + a)
            }
            return e = Ye.json ? JSON.stringify(e) : Ov(e),
            vv.cookie = [Cv(t), "=", Ye.raw ? e : Cv(e), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var s, u = Ye.raw ? r : o, l = vv.cookie.split("; "), d = 0; s = l[d] && l[d].split("="); d++)
            if (u(s.shift()) === t) {
                var f = u(s.join("="));
                return Ye.json ? JSON.parse(f) : f
            }
        return null 
    }
    function Ve(t, n) {
        return null  !== Ye(t) ? (Ye(t, null , n),
        !0) : !1
    }
    function We(t, n, e, i, r) {
        e = e || 0;
        var o = function(t) {
            return it(t, e)
        }
        ;
        return Ke(t, n, o, i, r)
    }
    function Ke(t, n, e, i, r) {
        function o() {
            e(t) && n(t)
        }
        if (!t)
            return gv.error("LazyDom__on => $el is undefined");
        i = i || oh;
        var a = Ir(t)
          , c = K(a);
        c.callbacks || (c.callbacks = [],
        H(a, "scroll", function() {
            ce(c.callbacks)
        }
        ));
        var s = M(o, i);
        return c.callbacks.push(s),
        r ? s() : kv(o, 0),
        {
            clear: function() {
                var t = C(c.callbacks, s);
                -1 !== t && c.callbacks.splice(t, 1)
            }
        }
    }
    function Xe(n, e) {
        function i() {
            return N("img", n)
        }
        function r() {
            Y(n, "Lazy_loaded"),
            a()
        }
        function o() {
            tt(i()),
            a()
        }
        function a() {
            D(n, "load", !0),
            D(n, "error", !0)
        }
        Y(n, "Lazy_loading"),
        H(n, "load", r, !0),
        H(n, "error", o, !0);
        var c = We(n, function() {
            i().src = e,
            c.clear()
        }
        , t.innerWidth)
    }
    function Ge(t, n, e, i) {
        var o = {};
        i = i || {};
        var a = i.onLoaded;
        return o.onBefore = function() {
            Tn(!0),
            i.keepScrollTop || (vv.body.scrollTop = 0)
        }
        ,
        o.onLoaded = function() {
            Tn(!1),
            a && a()
        }
        ,
        r(o, i),
        Je(t, n, e, ei.bind(null , o.emptyTpl, o.completeTpl), o)
    }
    function Je(t, e, i, o, a) {
        function c(t) {
            t.length || (t = [t]),
            v(t, !0),
            _.total += t.length,
            p()
        }
        function s(t, n) {
            Z(n),
            _.total--,
            p()
        }
        function u() {
            H(_.container, "scroll", M(function() {
                _.__listener()
            }
            , 250)),
            ot(_.el, ""),
            Me(_.el, _.otherTpl(_)),
            h = N(".ListView", _.el),
            $retry = N(".ListView__retry", h),
            $retry && H($retry, "click", l),
            _.__listener = function() {
                h && !F(h, "ListView_loading") && !F(h, "ListView_complete") && it(h, _.threshold) && (V(h, "ListView_error"),
                Y(h, "ListView_loading"),
                l())
            }
        }
        function l() {
            _.api(_.offset, _.limit, d, function() {
                Y(h, "ListView_error")
            }
            )
        }
        function d(t) {
            f(t),
            _.onload(t),
            p()
        }
        function f(t) {
            t.items = t.items || t.data,
            _.datafilter && _.datafilter(t, _.offset, _.limit),
            t.items.length && (v(t.items),
            _.offset = _.offset + _.limit,
            _.loaded && _.loaded(t)),
            _.total = t.total || t.items.length || 0,
            _.more = t.more !== n ? t.more : t.total > _.offset
        }
        function p() {
            V(h, "ListView_loading"),
            V(h, "ListView_empty"),
            _.more || Y(h, "ListView_complete"),
            0 !== _.total || _.more || Y(h, "ListView_empty"),
            _.onChange && _.onChange(_),
            _.__listener()
        }
        function v(t, n) {
            var e = _.tpl(t, _.offset);
            if (!_.$listContainer)
                return Ee(_.el, e),
                void (_.$listContainer = _.el.children[0]);
            var i = n ? Ee : Me;
            e = e.replace(/^<.*?>|<\/[a-z]+>$/g, ""),
            i(_.$listContainer, e)
        }
        var h, _ = r({
            el: t,
            container: Ir(t),
            api: e,
            tpl: i,
            otherTpl: o,
            offset: 0,
            limit: 10,
            threshold: 100,
            onload: E
        }, a);
        return Je.__style_added__ || (Je.__style_added__ = 1,
        Fe(ah)),
        _.onBefore && _.onBefore(_),
        _.api(_.offset, _.limit, function(t) {
            _.initData = t,
            _.onLoaded && _.onLoaded(_),
            u(),
            d(t)
        }
        , _.error),
        r(_, {
            add: c,
            remove: s
        })
    }
    function Ue(n, e) {
        if (e) {
            var i = th || t.event && "click" == t.event.type && t.event;
            i && uh(i);
            var r = {};
            r[n] = e,
            r.t = sh,
            qe(r)
        }
    }
    function qe(t) {
        function i(t, i) {
            var r, o = "";
            return e(t, function(t, e) {
                if (e != n)
                    if (e instanceof Ev)
                        for (r = 0; e.length > r; r++)
                            o += "&" + t + "=" + e[r];
                    else
                        o += "&" + t + "=" + e
            }
            ),
            i ? (i + o).replace(/[&?]{1,2}/, "?") : o.substr(1)
        }
        ht(i(t, rf()), E)
    }
    function Ze(t) {
        return t.uuid && (t.cover = t.image,
        t.title = t.name,
        t.authors = t.last_nick ? "\u6700\u65b0: " + t.last_nick : "  "),
        t
    }
    function Qe(t, n) {
        var e = "";
        if (t.role && t.role.length)
            for (var i, r = t.role.slice(0, 1), o = -1, a = r.length - 1; a > o; )
                i = r[++o],
                e += "<span>" + i[1] + "</span>";
        else if (t.author_detail)
            for (var c, s = t.author_detail, u = -1, l = s.length - 1; l > u; )
                c = s[++u],
                "\u7b49" !== c.name && (e += "<span ",
                n && (e += 'data-href="' + Vd("book", c.uuid) + '"'),
                e += ">" + c.name + "</span>");
        else
            t.authors ? (e += '<span class="author" ',
            n && (e += 'data-href="' + Vd("fiction", t.authors) + '"'),
            e += ">" + t.authors + "</span>") : t.editors && !n ? e += '<span class="author">' + t.editors + "</span>" : t.translators && (e += '<span class="author">' + t.translators + "</span>");
        return e
    }
    function ti(t) {
        var e = ""
          , i = t.new_price !== n ? t.new_price : t.price;
        return e += '<div class="u-price">',
        0 !== i ? (t.new_price && (e += "<del><span>" + t.price.toFixed(2) + "</span>" + ai() + "</del>"),
        e += "<br/><b><span>" + i.toFixed(2) + "</span>" + ai() + "</b>") : e += "<b>\u514d\u8d39</b>",
        e += "</div>"
    }
    function ni(t) {
        return t = t || 0,
        Math.floor(t >= 2 ? Math.floor(t + .5) : 0)
    }
    function ei(t, n) {
        return '<div class="ListView"><div class="ListView__loading u-loading">\u6b63\u5728\u52a0\u8f7d\u4e2d... </div><div class="ListView__error ListView__retry u-loading">\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u70b9\u51fb\u91cd\u8bd5:)</div><div class="ListView__empty">' + (t ? t() : "") + ' </div><div class="ListView__complete">' + (n ? n() : "") + " </div></div>"
    }
    function ii(t, n) {
        var e = "";
        return t = ri(t),
        e += '<div class="u-topic" data-href="' + Cr(t) + '" ' + Ou("n") + ' expose="">',
        t.title && !n && (e += '<h3 class="title single-line">' + t.title + "</h3>"),
        t.intro && !n && (e += '<p class="intro single-line">' + t.intro + "</p>"),
        t.ad_pic_url && (e += oi(t.ad_pic_url, qa(t.ad_copy).tag)),
        e += "</div>"
    }
    function ri(t) {
        var n = /\$.*?\$/;
        return t.title = t.ad_name.replace(n, ""),
        t.ad_copy = t.ad_copy || "",
        t.intro = t.ad_copy.replace(n, ""),
        t
    }
    function oi(t, n) {
        var e = '<div class="banner"><img class="cover" src="' + t + '">';
        return n && (e += '<img class="tag -' + (n.loc || "lt") + '" src="' + n.icon + '">'),
        e += "</div>"
    }
    function ai(t) {
        var n = "";
        return ge(t) || (n += t),
        n += cr() ? "\u9605\u7c73" : "\u5143"
    }
    function ci(t) {
        var n = "";
        return n += cr() ? ge(t) ? "" : gi(t) + "\u9605\u7c73" : ge(t) ? "" : t + "\u4e66\u5e01"
    }
    function si(t, e, i, r) {
        var o = {
            emptyTpl: r
        };
        return i && (o.error = Kt.bind(n, t, i)),
        Ge(t, e, li, o)
    }
    function ui(t, n) {
        for (var e, i = '<ul class="book-table">', r = t, o = -1, a = r.length - 1; a > o; ) {
            e = r[++o];
            var c = Ze(e);
            i += '<li  data-track="' + o + '">' + eu(c, "-vertical", n && ti(c)) + "</li>"
        }
        return i += "</ul>"
    }
    function li(t, n, e, i, r, o) {
        for (var a, c = '<ul class="book-list">', s = t, u = -1, l = s.length - 1; l > u; )
            a = s[++u],
            c += '<li data-track="' + ((n || 0) + u) + '">' + di(a, e, i, r, o) + "</li>";
        return c += "</ul>"
    }
    function di(t, n, e, i, r) {
        var o = "";
        return t = Ze(t),
        o += '<div class="u-book',
        i && (o += " -itembtn"),
        o += '" data-href="' + hi(t) + '"',
        ge(r) || (o += ' data-track="' + r + '"'),
        o += " " + Ou("b*" + Eu(t)) + ' expose=""><div class="cnt">' + _i(t, !0) + '<div class="info"><h3 class="title single-line">' + t.title + '</h3><p class="summary">' + vi(t) + '</p><div class="wrap">',
        n && (o += ti(t) || fi(t)),
        e && (o += e(t)),
        o += '<p class="author single-line">' + Qe(t) + "</p></div></div></div></div>"
    }
    function ti(t) {
        var e = ""
          , i = uu(t);
        return i !== n && (e += '<div class="u-price">',
        0 !== i ? (e += "<b><span>" + yi(bi(i), !0) + "</span></b>",
        t.new_price && (e += "<del><span>" + yi(bi(t.price), !0) + "</span></del>"),
        e += wi(!0)) : e += "<b>\u514d\u8d39</b>",
        e += "</div>"),
        e
    }
    function fi(t) {
        var e = ""
          , i = du(t);
        return i !== n && (e += '<div class="u-price">',
        e += 0 !== i ? "<b><span>" + yi(i) + "</span></b>" + a("{0}/\u5343\u5b57", wi()) : "<b>\u9650\u514d</b>",
        e += "</div>"),
        e
    }
    function pi(t) {
        return t % 1 === 0 ? t : t.toFixed(2)
    }
    function vi(t) {
        return u(t.summary || t.intro || "\u6682\u65e0\u7b80\u4ecb")
    }
    function Ze(t) {
        return t = t.book || t,
        t.uuid && (t.cover = t.image,
        t.title = t.name,
        t.authors = t.last_nick ? "\u6700\u65b0: " + t.last_nick : "  "),
        t
    }
    function hi(t) {
        return ge(t.url) ? t.book_id ? qd(t.id, t.book_id, 1) : t.fiction_id ? qd(t.id, t.fiction_id, 2) : t.id ? qd(t.id, t.source_id, t.source) : t.uuid ? url__series(t.type, t.uuid) : void 0 : t.url
    }
    function _i(t, n) {
        var e = ""
          , i = t.book_id || t.fiction_id || t.id;
        return mr(i, t),
        e += '<div class="book-cover" data-id="' + i + '" id="' + Le(kr, t) + '"><img alt=' + t.title + ' /><div class="u-tagRT"></div></div>'
    }
    function mi(t, n, e) {
        return -1 !== t.indexOf("thumbnail") ? t : t.replace(/(![a-z]{1,2})?$/, "!" + (cv ? n : n))
    }
    function gi(t) {
        if (ge(t))
            return 0;
        var n = t / 100;
        return parseInt(n) == n ? +n : +n.toFixed(2)
    }
    function bi(t) {
        return ge(t) ? 0 : Math.round(100 * t)
    }
    function ki(t) {
        return ge(t) ? "" : t === Number(t) && t % 1 !== 0 ? gv.error("not support float") : (t + "").replace(/(\d)(?=(\d{3})+$)/g, "$1,")
    }
    function yi(t, n) {
        if (ge(t))
            return "";
        var e;
        return e = cr() || n ? gi(t) : ki(t),
        "" + e
    }
    function wi(t) {
        var n = cr() || t ? ai : ci;
        return n("")
    }
    function xi(t, n, e, i) {
        function r(t) {
            var n = ""
              , r = new Pv(t)
              , o = r.getTime() - Pv.now();
            return 0 > o ? "\u5df2\u8fc7\u671f" : (36e5 > o ? n = Math.floor(o / 6e4) + "\u5206\u949f" : 864e5 > o ? n = Math.floor(o / 36e5) + "\u5c0f\u65f6" : 2592e5 > o && (n = Math.floor(o / 864e5) + "\u5929"),
            i = i || "yyyy-M-d",
            n = e ? c(r, i) : n ? "\u6709\u6548\u671f\u8fd8\u5269" + n : "\u6709\u6548\u671f\u81f3" + c(r, i))
        }
        function o(t) {
            var n = ""
              , r = new Pv
              , o = new Pv(t)
              , a = o;
            return r.getTime() - o.getTime() < 6e4 ? n = "1\u5206\u949f\u524d" : r.getTime() - o.getTime() < 36e5 ? n = Math.floor((r.getTime() - o.getTime()) / 6e4) + "\u5206\u949f\u524d" : r.getTime() - o.getTime() < 864e5 ? n = Math.floor((r.getTime() - o.getTime()) / 36e5) + "\u5c0f\u65f6\u524d" : (r.getTime() - o.getTime() < 2592e5 || e) && (n = Math.floor((r.getTime() - o.getTime()) / 864e5) + "\u5929\u524d"),
            i = i || "yyyy-M-d HH:mm",
            n || (n = c(a, i)),
            n
        }
        var a = {};
        a.encode = function(t, n) {
            return t && n && n.replace ? n.replace(t.r, function(n) {
                var e = t[t.i ? n : n.toLowerCase()];
                return null  != e ? e : n
            }
            ) : n || ""
        }
        ,
        a.var2date = function(t) {
            var n = t;
            return n = new Pv(t)
        }
        ;
        var c = function() {
            var t = {
                i: !0,
                r: /\byyyy|yy|MM|M|dd|d|HH|H|mm|ms|ss|m|s\b/g
            }
              , n = function(t) {
                return t = parseInt(t) || 0,
                (10 > t ? "0" : "") + t
            }
            ;
            return function(e, i) {
                return e && i ? (e = a.var2date(e),
                t.yyyy = e.getFullYear(),
                t.yy = ("" + t.yyyy).substr(2),
                t.M = e.getMonth() + 1,
                t.MM = n(t.M),
                t.d = e.getDate(),
                t.dd = n(t.d),
                t.H = e.getHours(),
                t.HH = n(t.H),
                t.m = e.getMinutes(),
                t.mm = n(t.m),
                t.s = e.getSeconds(),
                t.ss = n(t.s),
                t.ms = e.getMilliseconds(),
                a.encode(t, i)) : ""
            }
        }
        ();
        return 10 >= ("" + t).length && (t = 1e3 * t),
        n ? r(t) : o(t)
    }
    function Ti(t) {
        return ("" + t).length > 10 ? t : 1e3 * t
    }
    function Ci(t, n, e) {
        function i(t) {
            return Math.floor(t / 864e5)
        }
        if (!t || !n)
            return 0;
        var r = new Pv(Ti(t))
          , o = new Pv(Ti(n))
          , a = 0;
        if ("month" == e) {
            var c = o.getYear() - r.getYear()
              , s = o.getMonth() - r.getMonth();
            a = s + 12 * c
        } else if ("day" == e) {
            var u = Math.round(60 * (new Pv).getTimezoneOffset() * 1e3)
              , l = Pv.parse(r) - u
              , d = Pv.parse(o) - u;
            a = i(d) - i(l)
        }
        return Math.abs(Math.round(a))
    }
    function $i(t) {
        return a("{0}%", Math.round(100 * t))
    }
    function Ii(t, n, e, i, r, o, a) {
        function c() {
            Tn(!0),
            i && mn(i),
            ot(t, jt());
            var s = Kt.bind(this, t, c);
            return r ? (n = Si(n),
            void n(0, 10, function(i) {
                return i.items && !i.items.length && a ? Oe(t, a()) : (Oe(t, e(i)),
                void Ge(N(r, t), n, o || li))
            }
            , s)) : n(function(n) {
                Oe(t, e(n))
            }
            , s)
        }
        return c()
    }
    function Si(t) {
        var n = {};
        return function(e, i, r, o) {
            var a = e + "-" + i
              , c = n[a];
            return c ? r(c) : void t(e, i, function(t) {
                n[a] = t,
                r(t)
            }
            , o)
        }
    }
    function Oi(t) {
        function n(t, n) {
            ue(function(n) {
                t(n.rewarded)
            }
            , function() {
                return n(),
                !0
            }
            , "/discover/user/get_rewarded")
        }
        function e() {
            return -1 != _v.hostname.indexOf("dushu") ? "h5__newbie__check" : "newbie__check"
        }
        var i = e()
          , r = $t(i);
        if (!fv && !pv)
            return t(r);
        var o = lv.user_id || lv.device_hash;
        return o == r ? t(!0) : n(function(n) {
            return It(i, n ? o : ""),
            t(n)
        }
        , t.bind("", !0))
    }
    function Ei(t) {
        function n() {
            return r.scrollHeight > r.clientHeight ? e() : void i()
        }
        function e() {
            V(r, "-fold")
        }
        function i() {
            Y(r, "-fold")
        }
        var r = N(".folder-cnt", t);
        if (r) {
            if (r.clientHeight >= r.scrollHeight)
                return e();
            if (!R(t, "[data-href]")) {
                var o = N(".folder-more", t);
                o && H(o, "click", n);
                var a = N(".folder-cnt", t);
                return a && a.setAttribute("data-href", ""),
                H(r, "click", n)
            }
        }
    }
    function Mi(t, n, e, i, r, o) {
        var a = '<div class="u-folder ';
        return o && (a += o),
        a += '" id="' + Le(Ei) + '" >',
        e && (a += '<div class="folder-top">' + e + "</div>"),
        t && (a += '<div class="folder-cnt',
        r || (a += " -fold"),
        a += '">' + t + "</div>",
        n && (a += '<em class="folder-more"></em>')),
        i && (a += '<div class="folder-tail">' + i + "</div>"),
        a += "</div>"
    }
    function Pi(t, n) {
        function e(t) {
            function e(t) {
                o(!0, function() {
                    n.onClose && n.onClose(t)
                }
                )
            }
            function o(n, e) {
                function i() {
                    n && (Z(t),
                    qn(c)),
                    e && e()
                }
                return s.get("state") == s.get("HIDING") && n ? i() : (s.set({
                    state: s.get(n ? "CLOSED" : "HIDING")
                }),
                void (o.animate || (o.animate = !0,
                ae(!1),
                H(t, "webkitAnimationEnd", function n() {
                    Ln(!0),
                    o.animate = !1,
                    tt(t),
                    D(t, "webkitAnimationEnd", n),
                    i()
                }
                ))))
            }
            function a() {
                s.get("state") != s.get("SHOWING") && (s.set({
                    state: s.get("SHOWING")
                }),
                ae(!0),
                nt(t),
                Ln(!1))
            }
            function c() {
                return e(),
                !1
            }
            var s = $e(t, i);
            r(i, n),
            r(i, {
                HIDING: -1,
                CLOSED: 0,
                SHOWING: 1,
                state: 0,
                close: e,
                hide: o,
                show: a,
                update: s.set.bind(s)
            }),
            H(N(".container>:first-child", t), "click", function(t) {
                t.stopPropagation()
            }
            ),
            a(),
            i.customAnimation && Y(t.lastChild.firstChild, "-custom"),
            !cr() && Un(c)
        }
        var i = {}
          , n = n || {};
        return Me(vv.body, Ai(e, t)),
        i
    }
    function Ai(t, n) {
        return '<div id="' + Le(t) + '" class="u-fixed popup-layer" vp-class="{\'-show\' : $root.state == $root.SHOWING, \'-hide\' : $root.state != $root.SHOWING }"><div class="u-mask" vp-click="!$root.unclosable && $root.close()"></div><div class="container" vp-class="{ \'-center\': $root.isCenter }" vp-click="!$root.unclosable && $root.isCenter && $root.close()">' + n + "</div></div>"
    }
    function Li(t) {
        if (!Li.__showing__) {
            Li.__showing__ = !0,
            t = r({
                title: "",
                prompt: "",
                confirmText: "\u786e\u5b9a",
                cancelText: "\u53d6\u6d88",
                confirm: E,
                cancel: E,
                confirmDisable: !1,
                singleButton: !1,
                notOnCloseConfirm: !1,
                notOnCloseCancel: !1,
                unclosable: !1,
                onClose: E
            }, t || {});
            var n = Pi(Bi(t), {
                confirmDisable: t.confirmDisable,
                unclosable: t.unclosable,
                onClose: function(n) {
                    Li.__showing__ = !1,
                    n = n || {
                        cancel: !0
                    },
                    n.confirm && t.notOnCloseConfirm || n.cancel && t.notOnCloseCancel || t.onClose()
                },
                cancel: function() {
                    n.close({
                        cancel: !0
                    }),
                    t.cancel()
                },
                confirm: function() {
                    n.close({
                        confirm: !0
                    }),
                    t.confirm()
                }
            })
        }
    }
    function Ni(t, n, e, i) {
        function o(t) {
            $e(t, {
                select: i.select
            }).set()
        }
        i = r({
            title: "",
            prompt: "",
            cancelText: "\u53d6\u6d88",
            cancel: E,
            select: E,
            unclosable: !1,
            onClose: E
        }, i || {});
        var a = Pi(ji(t, n, e || o, i), {
            unclosable: i.unclosable,
            onClose: function(t) {
                !(t && t.selected) && i.cancel()
            }
        });
        return a
    }
    function Bi(t) {
        var n = '<section class="confirm-menu';
        return t.clazz && (n += " " + t.clazz),
        n += '"><h3 class="title">' + t.title + '</h3><div class="prompt"',
        t.promptCenter && (n += 'style="text-align: center;"'),
        n += ">" + t.prompt + "</div>",
        t.singleButton || (n += '<a class="button -cancel" vp-click="$root.cancel()">' + t.cancelText + "</a>"),
        n += '<a class="button -confirm" vp-class="{ \'-disable\': $root.confirmDisable }" vp-click="!$root.confirmDisable && $root.confirm()">' + t.confirmText + "</a></section>"
    }
    function ji(t, n, e, i) {
        var r = '<section class="select-menu ';
        i.clazz && (r += i.clazz),
        r += '"><h3 class="title">' + i.title + "</h3>",
        i.prompt && (r += '<p class="prompt">' + i.prompt + "</p>"),
        r += '<ul class="select-items" id="' + Le(e) + '" vp-ignore>';
        for (var o, a = t, c = -1, s = a.length - 1; s > c; )
            o = a[++c],
            r += '<li vp-click="$root.select(' + c + ')">' + n(o) + "</li>";
        return r += '</ul><a class="button" vp-click="$root.close()">' + i.cancelText + "</a></section>"
    }
    function Ri(t) {
        return t.reduce(function(t, n) {
            return 1e3 * n.expire_time > Pv.now() || !n.expire_time ? t + n.total - (n.used || 0) : t
        }
        , 0)
    }
    function Hi(t, e) {
        t = t || E,
        e = e || E,
        vt("/store/v0/ad/ranks", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function Di(t, e, i, r, o, a) {
        var c = {
            start: i,
            count: r
        };
        c["store" == t ? "rt" : "r"] = e,
        t = "store" == t ? "android" : "fiction",
        ft("/store/v0/" + t + "/rank", {
            data: c,
            success: ve.bind(n, o, a),
            error: a
        })
    }
    function zi(t, e) {
        t = t || E,
        e = e || E,
        vt("/hs/v0/android/store/category", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function Fi(t, e, i, r) {
        ft("/hs/v0/android/" + t + "/category/" + e, {
            success: ve.bind(n, i, r),
            error: r
        })
    }
    function Yi(t, e, i, r, o, a, c) {
        var s = {
            start: r,
            count: o
        };
        i && (s[i] = 1);
        var u;
        "magazine" == t ? u = "/store/v0/android/category/magazine?id=" + e : (t = "store" == t ? "android" : "fiction",
        u = "/store/v0/" + t + "/category/" + e),
        ft(u, {
            data: s,
            success: ve.bind(n, a, c),
            error: c
        })
    }
    function Vi(t, e, i, r, o, a) {
        t = "store" == t ? "android" : "fiction";
        var c = "discount" == e ? "/store/v0/web/discount" : "/store/v0/" + t + "/list/" + e;
        ft(c, {
            data: {
                start: i,
                count: r
            },
            success: ve.bind(n, o, a),
            error: a
        })
    }
    function Wi(t, e, i, r, o) {
        r = r || E,
        o = o || E;
        var a = {
            start: e,
            count: i
        };
        "fiction" == t && (a.type = 4),
        ft("/store/v0/ad/persistent", {
            data: a,
            success: ve.bind(n, r, o),
            error: o
        })
    }
    function Ki(t, e) {
        t = t || E,
        e = e || E,
        ft("/hs/v0/android/fiction/finished", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function Xi(t, e, i, r, o) {
        var a;
        a = "click" == t ? "/store/v0/android/hot_free" : "/store/v0/android/free",
        ft(a, {
            data: {
                start: e,
                count: i
            },
            success: ve.bind(n, r, o),
            error: o
        })
    }
    function Gi(t, e, i) {
        e = e || E,
        i = i || E,
        ft("/hs/v0/android/store/book/" + t, {
            success: ve.bind(n, e, i),
            error: i
        })
    }
    function Ji(t, e, i) {
        e = e || E,
        i = i || E,
        ft("/hs/v0/android/fiction/book/" + t, {
            success: ve.bind(n, e, i),
            error: i
        })
    }
    function Ui(t, n) {
        t = t || E,
        n = n || E;
        var e = "/store/v0/time_limited/get";
        return He(e, {
            success: function(i) {
                hr(e, i),
                ve(t, n, i)
            },
            error: n
        })
    }
    function qi(t, e) {
        t = t || E,
        e = e || E,
        vt("/hs/v0/android/fiction/special", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function Zi(t, e) {
        t = t || E,
        e = e || E,
        vt("/hs/v0/android/store/channel/free", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function Qi(t, e) {
        t = t || E,
        e = e || E,
        vt("/hs/v0/android/store/magazine", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function tr(t, e) {
        ft("/hs/v0/android/fiction/male", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function nr(t, e) {
        ft("/hs/v0/android/fiction/female", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function er(t, e, i, r) {
        ft("/store/v0/android/rank/fresh", {
            data: {
                start: t,
                count: e
            },
            success: ve.bind(n, i, r),
            error: r
        })
    }
    function ir(t, e) {
        ft("/events/active_user", {
            method: "GET",
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function rr(t, e, i, o) {
        ft("/task/v2/user/claim", {
            type: "POST",
            data: r({
                task_id: i,
                task_type: o
            }, pe()),
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function or(t) {
        var n = "/store/v0/coupon/list"
          , e = {
            type: "POST",
            data: {
                coupon_type: 0,
                status: t
            },
            error: E
        };
        return r(e.data, bn()),
        He(n, e).then(function(e) {
            0 == t && hr(n, e)
        }
        )
    }
    function ar(t) {
        var n = {
            used: [],
            expired: [],
            premature: [],
            avail: []
        };
        return t.forEach(function(t) {
            1 == t.status ? n.used.push(t) : +new Pv(1e3 * t.expire_time) < +new Pv ? n.expired.push(t) : +new Pv(1e3 * t.start_time) > +new Pv ? n.premature.push(t) : n.avail.push(t)
        }
        ),
        n
    }
    function cr() {
        return "ios" === dv
    }
    function sr() {
        var t = bn();
        return 0 == t.user_type || ge(t.user_type)
    }
    function ur() {
        _v.reload()
    }
    function lr() {
        return !pv && !fv
    }
    function dr(t) {
        return lr() || t ? (Bn(function(t) {
            t.user_id && ur()
        }
        ),
        !0) : !1
    }
    function fr() {
        return fv ? !1 : dr(!0)
    }
    function pr(t, n) {
        var e;
        "string" == typeof t ? e = t : (e = t.msg || t.message || "\u9519\u8bef\u7801",
        t.result && (e += "(" + t.result + ")")),
        n ? bv(e) : kv(function() {
            kn(e)
        }
        , 0)
    }
    function vr(t, n, e) {
        return e = e || E,
        0 === t.result && n(),
        0 === t.result || e(t, n) ? void 0 : pr(t)
    }
    function hr(t, n) {
        n.key = lv.user_id,
        $n(t, {
            __data__: n
        })
    }
    function _r(t, n, e) {
        _r.__callback__ || Gn("button", function() {
            _r.__callback__()
        }
        ),
        _r.__callback__ = n,
        On({
            add: !1,
            text: t,
            html: e
        }),
        t && On({
            add: !0,
            text: t,
            html: e
        })
    }
    function mr(t, n) {
        var e = mr.cache;
        return e || (e = mr.cache = {}),
        n ? void (e[t] = n) : e[t]
    }
    function gr(t, n) {
        if (!t.uuid) {
            var e = t.book_id || t.source_id;
            if (su(e))
                return Y(n, "-purchased");
            if (!ge(t.price)) {
                if (t.book_id && 0 === uu(t))
                    return Y(n, "-freebook");
                if (t.fiction_id && 0 === t.price)
                    return Y(n, "-freefiction")
            }
            return 1e3 * t.limited_time > Pv.now() && t.allow_free_read ? Y(n, "-read") : void 0
        }
    }
    function br(t, n) {
        var e = N(".book-cover .u-tagRT", R(n, ".u-book"));
        gr(t, e)
    }
    function kr(t, n) {
        gr(n, N(".u-tagRT", t)),
        Xe(t, mi(n.cover, "s", "t"))
    }
    function yr(t, n, e, i, o, a) {
        function c(t) {
            si(n, o(t), i)
        }
        r({
            $page: n,
            error: i
        }, a);
        if (t && e && e.length > 1) {
            var s = wr(t, function(t) {
                c(e[t])
            }
            );
            s.go(0)
        } else
            c(e.length ? e[0] : e)
    }
    function wr(t, n, e) {
        function i(t) {
            t != o.crt && (a.set({
                crt: t
            }),
            n && n(t))
        }
        var o = {
            crt: -1,
            go: i
        };
        r(o, e);
        var a = $e(t, o);
        return {
            $el: t,
            go: i
        }
    }
    function xr(t) {
        vv.body.setAttribute("data-track", t || "rr")
    }
    function Tr(t) {
        function n(t) {
            var n = R(t.target, "[data-href]");
            n && (n.dataset.login && dr() || n.dataset.href && Jf(n.dataset.href, n.dataset.title || "", t))
        }
        H(t, "click", P(n, 600))
    }
    function Cr(t) {
        var n = {
            BOOK: "1",
            FICTION: "100",
            BOOK_TOPIC: "2",
            FICTION_TOPIC: "101",
            RIGHT: "4",
            NESTED_TOPIC: "5",
            OTHER: "3",
            TAG: "0",
            BOOK_RANK: "1000",
            FICTION_RANK: "1001",
            BOOK_NEW: "1002",
            FREE_NEW: "1010"
        }
          , e = t.reference_id || t.id
          , i = t.ad_type || t.type;
        return i == n.BOOK ? qd(0, e, 1) : i == n.FICTION ? qd(0, e, 2) : i == n.BOOK_TOPIC ? Wd("book", e) : i == n.NESTED_TOPIC ? Wd("nested", e) : i == n.FICTION_TOPIC ? Wd("fiction", e) : i == n.RIGHT ? url__copyright(e) : i == n.BOOK_RANK ? Gd("store", e) : i == n.FICTION_RANK ? Gd("fiction", e) : i == n.BOOK_NEW ? url__bookNew() : i == n.FREE_NEW ? Ud() : i == n.OTHER ? e : Ca(i) ? Xh(e) : ""
    }
    function $r() {
        return "mi_wap" == lv.app_id ? gt() : d(_v.search.substr(1))
    }
    function Ir(n) {
        var e = function(t, n) {
            return null  === t.parentNode ? n : e(t.parentNode, n.concat([t]))
        }
          , i = function(t, n) {
            return Tv(t, null ).getPropertyValue(n)
        }
          , r = function(t) {
            return i(t, "overflow") + i(t, "overflow-y") + i(t, "overflow-x")
        }
          , o = function(t) {
            return /(auto|scroll)/.test(r(t))
        }
          , a = function(n) {
            if (n instanceof Lv) {
                for (var i = e(n.parentNode, [n]), r = 0; i.length > r; r += 1)
                    if (o(i[r]))
                        return i[r];
                return t
            }
        }
        ;
        return a(n)
    }
    function Sr(t, e, i, r, o, a) {
        var c = {
            start: i,
            count: r,
            order: e
        };
        ft("/store/v0/android/author/" + t, {
            data: c,
            success: ve.bind(n, o, a),
            error: a
        })
    }
    function Or(t, e, i, r, o) {
        var a = {
            start: e,
            count: i,
            author: t,
            b: 0,
            f: 1
        };
        ft("/store/v0/android/query", {
            data: a,
            success: ve.bind(n, r, o),
            error: o
        })
    }
    function Er(t, e, i) {
        ft("/store/v0/android/author_info/" + t, {
            success: ve.bind(n, e, i),
            error: i
        })
    }
    function Mr(t, n, e, i) {
        function r() {
            return Ii(t, Or.bind(this, e), s.bind(this, null , null ), e, ".author-body")
        }
        function o() {
            Er(e, function(n) {
                return Ii(t, Sr.bind(this, e, c[i].key), s.bind(this, n.name, n.intro), n.name, ".author-body")
            }
            )
        }
        function a(t, n, e) {
            Ge(N(".author-body", vv), Sr.bind(this, n, e.key), li)
        }
        i = i || 0;
        var c = [{
            name: "\u70ed\u95e8",
            key: "-2"
        }, {
            name: "\u6700\u65b0",
            key: "-1"
        }]
          , s = Pr.bind(this, n, c, a.bind(this, t, e));
        return "book" == n ? o() : r()
    }
    function Pr(t, n, e, i, r, o) {
        var a = '<div class="new-page author-page -' + t + '">';
        return "book" == t && (a += Mi(r, 1, Ar(i, o)) + Sc(n, e)),
        a += '<div class="author-body"></div></div>'
    }
    function Ar(t, n) {
        return '<div class="author-top"><h3>' + t + "</h3><p>" + n.total + "\u672c\u4f5c\u54c1</p></div>"
    }
    function Lr(n, e, i) {
        function r() {
            return "magazine" == e ? (data = {},
            data.filterTags = [],
            data.filterTags.push(a()),
            H(t, "multiFilter.change", function(t) {
                var n = t.data
                  , e = n[0][n[0].crt].key;
                o(i, e)
            }
            ),
            void Oe(n, zr(data))) : void Fi(e, i, function(t) {
                mn(t.cate.label),
                t.types = a(),
                t.cate.children.unshift({
                    label: "\u5168\u90e8",
                    category_id: i
                }),
                t.filterTags = [];
                var e = x(t.cate.children, function(t) {
                    return {
                        name: t.label,
                        key: t.category_id
                    }
                }
                );
                t.filterTags.push(e),
                t.filterTags.push(a()),
                Oe(n, zr(t, s));
                var r = N("#filterList__topBar");
                H(r, "multiFilter.change", function(t) {
                    var n = t.data;
                    o(n[0][n[0].crt].key, n[1][n[1].crt].key)
                }
                )
            }
            )
        }
        function o(t, i) {
            Ir(N("#cate-books", n)).scrollTop = 0,
            (t != o.id || i != o.rank) && (o.id = t,
            o.rank = i,
            si(N("#cate-books", n), Yi.bind(this, e, t, i)))
        }
        function a() {
            return "fiction" != e ? [{
                name: "\u70ed\u95e8",
                key: ""
            }, {
                name: "\u6700\u65b0",
                key: "latest"
            }] : [{
                name: "\u70ed\u95e8",
                key: "click"
            }, {
                name: "\u6700\u65b0",
                key: "latest"
            }, {
                name: "\u5b8c\u7ed3",
                key: "finish"
            }]
        }
        "book" == e && (e = "store");
        var c = d(_v.search.substr(1)).tagIndexStr
          , s = c ? c.split(",") : [0, 0];
        return r()
    }
    function Nr(t, e, i) {
        function r() {
            return ot(t, jt()),
            "magazine" == e ? (ot(t, zr({
                types: c()
            })),
            void o(i)) : void Fi(e, i, function(n) {
                mn(n.cate.label),
                n.types = c(),
                n.cate.children.unshift({
                    label: "\u5168\u90e8",
                    category_id: i
                }),
                ot(t, zr(n)),
                n.cate.children.length > 1 ? wr(N("#cate__selector", t), function(t) {
                    mn(t ? n.cate.label + " - " + n.cate.children[t].label : n.cate.label),
                    o(n.cate.children[t].category_id)
                }
                , {
                    toggle: a
                }).go(0) : o(n.cate.children[0].category_id)
            }
            , Kt.bind(n, t, r))
        }
        function o(i) {
            yr(N("#cate__filter", t), N("#cate__container", t), c(), Kt.bind(n, t, r), function(t) {
                return Yi.bind(this, e, i, t.key)
            }
            )
        }
        function a(t) {
            t.isOpen = !t.isOpen,
            t.$change()
        }
        function c() {
            return "fiction" != e ? [{
                name: "\u70ed\u95e8",
                key: ""
            }, {
                name: "\u6700\u65b0",
                key: "latest"
            }] : [{
                name: "\u70ed\u95e8",
                key: "click"
            }, {
                name: "\u6700\u65b0",
                key: "latest"
            }, {
                name: "\u5b8c\u7ed3",
                key: "finish"
            }]
        }
        return mn(""),
        r()
    }
    function Br(t) {
        function e() {
            ot(t, jt()),
            zi(function(n) {
                (2 == lv.user_type || 3 == lv.user_type) && (n.section = [n.section[2], n.section[3], n.section[0], n.section[1]]),
                4 == lv.user_type && (n.section = [n.section[3], n.section[2], n.section[0], n.section[1]]),
                Oe(t, Hr(n))
            }
            , Kt.bind(n, t, e))
        }
        return mn("\u5206\u7c7b"),
        qs(),
        _r("SEARCH"),
        e()
    }
    function jr(t) {
        return mn("\u4e0d\u80fd\u9519\u8fc7\u597d\u4e66"),
        Rr(function(n) {
            Oe(t, Yr(n.ads))
        }
        )
    }
    function Rr(t, n) {
        ft("/store/v0/ad?key=v4-best-topic&build=2014110702&a=1", {
            success: function(n) {
                0 == n.code && t(n)
            },
            error: n
        })
    }
    function Hr(t) {
        for (var n, e = '<div class="new-page cate-page" data-track="ca"><main class="u-area">' + Fr(), i = t.section, r = -1, o = i.length - 1; o > r; ) {
            n = i[++r],
            e += '<section class="m-cat-' + n.key + '"><div class="u-ttl u-ttl-icn"><em class="icn-catagory' + (r + 1) + '"></em><h1>' + n.name + '</h1></div><ul class="u-list-2col">';
            for (var a, c = t[n.key], s = -1, u = c.length - 1; u > s; )
                a = c[++s],
                e += '<li data-href="' + Dr(a) + '" data-title="' + a.label + '"><div class="u-cat-item" style="background-image:url(' + (a.new_image || a.image) + '!m);"><h3>' + a.label + '</h3><p class="num">' + (a.book_count || a.fiction_count || a.count) + "</p></div></li>";
            e += "</ul></section>"
        }
        return e += "</main></div>"
    }
    function Dr(t) {
        return Fd(t.fiction_count ? "fiction" : t.book_count ? "store" : "magazine", t.sid || t.category_id)
    }
    function zr(t, n) {
        return '<div class="new-page"><section class="main-card" id="' + Le(Vr, t.filterTags, n) + '"></section><section class="main-card" id="cate-books"></section></div>'
    }
    function Fr() {
        return '<section class="m-cat-best" data-track="bt"><div class="u-ttl u-ttl-icn"><em class="icn-catagory-best"></em><h1>\u4e0d\u80fd\u9519\u8fc7\u7684\u597d\u4e66</h1></div><img src="http://image.read.duokan.com/mfsv2/download/s010/p011P2KJzY8P/esEz0wmvUFdv9q.png" data-href="' + Fd("best") + '"></section>'
    }
    function Yr(t) {
        for (var n, e = '<div class="new-page best-page"><main>', i = t, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += '<section class="main-card" data-track="' + r + '"><div class="bd">',
            r >= 10 && (n.ad_pic_url = null ),
            e += ii(n) + "</div></section>";
        return e += "</main></div>"
    }
    function Vr(t, n, e) {
        function i(t) {
            t && (l.state = t),
            d.set(),
            f.set(),
            u = 0
        }
        Me(t, Xr(n));
        var r = Ir(t);
        Me(r.parentNode, Gr(n, e));
        var o = N("#filterList__topBar", r.parentNode)
          , a = t.clientHeight
          , c = -t.getBoundingClientRect().top
          , s = c
          , u = 0
          , l = {
            tags: n,
            state: "default",
            setState: i
        }
          , d = $e(t, l)
          , f = $e(o, l);
        i(),
        H(r, "scroll", function() {
            var n = -t.getBoundingClientRect().top;
            u = Math.max(0, u + (n - c)),
            n > c ? ("default" == l.state && n >= a && i("top"),
            "expand" == l.state && u >= 30 && n > a && i("top")) : ("top" == l.state && a >= n && i("default"),
            "expand" == l.state && n == s && i("default")),
            c = n
        }
        )
    }
    function Wr(t, e, i, o) {
        function a() {
            _(c, function(t) {
                t.set()
            }
            );
            var t = k(e, function(t) {
                return t.crt !== n
            }
            );
            t && kv(function() {
                var t = N("#filterList__topBar");
                z(t, "multiFilter.change", e)
            }
            , 0)
        }
        var c = Wr.cache = Wr.cache || []
          , s = e[o];
        r(s, {
            go: function(t) {
                t != s.crt && (s.crt = t,
                a())
            }
        });
        var u = $e(t, s);
        c.push(u),
        s.crt = i ? i[o] : 0,
        a()
    }
    function Kr(t) {
        var n = N("#filterList__topBar");
        H(n, "multiFilter.change", function(n) {
            var e = n.data
              , i = x(e, function(t) {
                return t[t.crt].name
            }
            );
            ot(t, i.join("\uff0c"))
        }
        )
    }
    function Xr(t, n) {
        for (var e, i = '<ul class="filter-list">', r = t, o = -1, a = r.length - 1; a > o; )
            e = r[++o],
            i += "<li>" + Jr(t, n, o) + "</li>";
        return i += "</ul>"
    }
    function Gr(t, n) {
        return '<section id="filterList__topBar" class="main-card" vp-show="$root.state != \'default\'"><div vp-show="$root.state == \'expand\'">' + Xr(t, n) + '</div><ul class="tag-list -single" vp-show="$root.state == \'top\'" vp-click="$root.setState(\'expand\')"><li class="tag" id="' + Le(Kr) + '" vp-ignore></li></ul></section>'
    }
    function Jr(t, n, e) {
        var i = ""
          , r = t[e];
        i += '<ul class="tag-list" id="' + Le(Wr, t, n, e) + '" vp-ignore>';
        for (var o, a = r, e = -1, c = a.length - 1; c > e; )
            o = a[++e],
            i += '<li class="tag" vp-click="$root.go(' + e + ")\" vp-class=\"{'-crt' : $root.crt == " + e + '}"> ' + o.name + " </li>";
        return i += "</ul>"
    }
    function Ur(t, n, e, i) {
        function r() {
            var t = [e]
              , n = [];
            return $r().tabs && (t = ($r().tabs || "").split(","),
            n = ($r().titles || "").split(",")),
            x(t, function(t) {
                return {
                    key: t,
                    name: n.shift()
                }
            }
            )
        }
        !function() {
            function o() {
                return Ii(t, s.bind(this, c[0].key), Oc.bind(this, c, a.bind(this, t, e)), "", ".tag-body", ro.bind(this, c[0].key))
            }
            function a(t, n, e) {
                Ge(N(".tag-body", vv), s.bind(this, e.key), ro.bind(this, e.key))
            }
            var c = r(i)
              , s = io.bind(this, n);
            return o()
        }
        ()
    }
    function qr() {
        function t(t, n) {
            for (var e = 0, i = []; t[e] || n[e]; )
                t[e] && i.push(t[e]),
                n[e] && i.push(n[e]),
                e++;
            return i
        }
        var n = {
            3: [19, 21, 23, 25, 27, 29, 34, 35, 36, 37],
            4: [20, 22, 24, 26, 28, 30, 31, 32, 33, 38, 39]
        }
          , e = n[lv.user_type] || t(n[3], n[4]);
        return e
    }
    function Zr(t, e) {
        qs(),
        function i() {
            Hi(function(n) {
                var i = qr();
                Oe(t, oo(i, n.items, e))
            }
            , Kt.bind(n, t, i))
        }
        ()
    }
    function Qr(t) {
        function n(t, n, e, i) {
            return f({
                multi_url: n.join(","),
                multi_title: e.join(","),
                multi_pos: i
            }, t)
        }
        function e(t, n) {
            var e = "/hs/market/rank_list/" + o(t) + "/" + t.id
              , i = {
                tabs: n
            };
            return f(i, e)
        }
        function i(t) {
            var n = "/hs/market/rank/" + o(t) + "/" + t.id
              , e = {
                tabs: a(t).join(","),
                titles: c(t).join(",")
            };
            return f(e, n)
        }
        function r(t) {
            {
                var n = a(t);
                c(t)
            }
            return x(n, function(n, i) {
                return e(t, n)
            }
            )
        }
        function o(t) {
            return 10 > t.id ? "store" : "fiction"
        }
        function a(t) {
            var n = t.ranks.split(",");
            return n[0] % 10 != 0 || O(["0", "10", "100", "300"], n[0]) || n.push(n.shift()),
            n
        }
        function c(t) {
            var n = a(t)
              , e = ["\u603b\u699c", "\u65e5\u699c", "\u5468\u699c", "\u6708\u699c"];
            return x(n, function(t) {
                return e[no(t)]
            }
            )
        }
        if (3 == t.id)
            return "/hs/market/new";
        if (5 == t.id)
            return "/hs/market/cate/store/9";
        var s = a(t);
        return 1 == s.length ? e(t, s[0]) : n(i(t), r(t), c(t))
    }
    function to(t) {
        return t >= 100 ? !0 : !1
    }
    function no(t) {
        var n = {
            0: xh,
            10: Th,
            100: xh,
            300: Th
        };
        return O(["0", "10", "100", "300"], t) ? n[t] : [Ch, wh, xh, Th][t % 10]
    }
    function eo(t) {
        var n, e = N(".single-filter .-selected .tag") || N(".single-filter .tag");
        if (e) {
            var i = {
                "\u603b\u699c": Ch,
                "\u65e5\u699c": wh,
                "\u5468\u699c": xh,
                "\u6708\u699c": Th
            };
            n = i[e.innerHTML]
        } else
            n = $r().tabs ? no($r().tabs) : Th;
        var r = ["\u5171\u6709", "\u4eca\u65e5", "\u672c\u5468", "\u672c\u6708"]
          , o = "\u4eba\u5728\u8bfb";
        n == Ch && (o = "\u4eba\u8bfb\u8fc7");
        var a = r[n]
          , c = $r().tabs || "";
        "23" == c.substring(0, 2) && (a += "\u88ab\u641c",
        o = "\u6b21");
        var s = parseInt(t / 1e4);
        return s && (t = s + "W"),
        a + t + o
    }
    function io(t, n, e, i, r, o) {
        function a(t, n, e) {
            40 == n && (e.more = !1),
            t(e)
        }
        Di(t, n, e, i, a.bind(this, r, e), o)
    }
    function ro(t, n, e, i, r, o, a) {
        for (var c, s = '<div class="rank-page"><ul class="book-list ">', u = n, l = -1, d = u.length - 1; d > l; )
            c = u[++l],
            s += '<li data-track="' + ((e || 0) + l) + '">' + ao(c, i, r, o, a, l, e, t) + "</li>";
        return s += "</ul></div>"
    }
    function oo(t, n, e) {
        var i = "";
        _u("rkf"),
        e && (i += '<div class="u-title u-title_old-rankpage">\u7f51\u6587\u699c\u5355</div>'),
        i += '<ul class="original-rank-list">';
        for (var r, o = n, a = -1, c = o.length - 1; c > a; )
            if (r = o[++a],
            -1 != t.indexOf(r.id - 1)) {
                i += '<li class="original-rank-list__item" data-href="' + Qr(r) + '" data-title="' + r.name + '" ' + Ou("l") + '><img src="' + r.cover + '"  class="original-rank-list__img"><div class="original-rank-list__content" >';
                for (var s, u = r.description.split("\n"), l = -1, d = u.length - 1; d > l; )
                    s = u[++l],
                    i += '<p class="original-rank-list__page"><span class="original-rank-list__num" > ' + (l + 1) + "</span>" + s + "</p>";
                i += "</div></li>"
            }
        return i += "</ul>"
    }
    function ao(t, n, e, i, r, o, a, c) {
        var s = "";
        return t = Ze(t),
        s += '<div class="u-book',
        i && (s += " -itembtn"),
        s += '" data-href="' + hi(t) + '"',
        ge(r) || (s += ' data-track="' + r + '"'),
        s += " " + Ou("b*" + Eu(t)) + ' expose=""><!-- TODO -->',
        0 == a && 3 > o && (s += '<div  class="u-book__lt "><div class="u-book__lt-number">',
        2 >= o && (s += o + 1),
        s += '</div></div><div class="u-book__lt-triangle"></div>'),
        s += _i(t, !0) + '<div class="info"><h3 class="title  single-line">' + t.title + '</h3><div class="wrap"><p class="author single-line">' + Qe(t) + '</p></div><p class="summary">' + vi(t) + '</p><p class="u-book__onRead ',
        a >= 10 && (s += " u-book_gray"),
        s += '">',
        to(t.ex) && (s += '<!-- TODO --><img src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01DP6uVrgOY/jcc0zobbY1xfYP.png" class="u-book__eye " />' + eo(t.ex)),
        s += "</p></div></div>"
    }
    function co(t) {
        mn("\u65b0\u4e66\u4e13\u533a"),
        xr(),
        function n() {
            ot(t, jt()),
            si(t, er.bind(this), n)
        }
        ()
    }
    function so(t) {
        mn("\u6742\u5fd7\u4e13\u533a"),
        xr(),
        function e() {
            ot(t, jt()),
            Qi(function(n) {
                Oe(t, vo(n))
            }
            , Kt.bind(n, t, e))
        }
        ()
    }
    function uo(t) {
        var n = $r();
        return Ii(t, Xi.bind(this, n.hot ? "click" : "latest"), ho, (n.hot ? "\u70ed\u95e8" : "\u6700\u65b0") + "\u514d\u8d39\u56fe\u4e66", ".free-list")
    }
    function lo(t, e) {
        function i() {
            !function e() {
                ot(t, jt()),
                Zi(function(n) {
                    n.section[0].items[0].new_price = 0,
                    _(n.section, function(t) {
                        t.more && !c(t.more, "/hs/store/free") && (t.more = t.more.replace("/store", "/market"))
                    }
                    ),
                    Vi("store", 12505, 0, 6, function(e) {
                        Oe(t, mo(n, e))
                    }
                    )
                }
                , Kt.bind(n, t, e))
            }
            ()
        }
        function r() {
            !function e() {
                Oe(t, jt()),
                qi(function(n) {
                    Oe(t, bo(n))
                }
                , Kt.bind(n, t, e))
            }
            ()
        }
        return mn(1 == e ? "\u514d\u8d39\u4e13\u533a" : "\u514d\u8d39\u53ca\u7279\u4ef7\u4e13\u533a"),
        xr(1 == e ? "nt-bf" : "nt-ff"),
        1 == e ? i() : r()
    }
    function fo(t) {
        function e(t, e) {
            t = t || E,
            e = e || E,
            ft("/store/v0/ad?key=df_choice_announcement&build=2014110702&a=1", {
                success: ve.bind(n, t, e),
                error: e
            })
        }
        e(function(n) {
            t.dataset.href = Cr(n.ads[0])
        }
        )
    }
    function po(t, n) {
        mn(""),
        function() {
            ot(t, jt()),
            Ki(function(n) {
                var e = {};
                e.label = n.title,
                e.lists = I(n.top, n.area),
                mn(e.label),
                Oe(t, wo(e))
            }
            )
        }
        ()
    }
    function vo(t) {
        for (var n, e = '<div class="new-page">', i = t.cate.children, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += '<section class="main-card"><div class="channel-title"><h1>' + n.label + '</h1></div><div class="card-cnt">' + ui(t[n.sid]) + "</div>" + _o(n) + "</section>";
        return e += "</div>"
    }
    function ho(t) {
        return '<div class="new-page free-latest"><div class="free-list"></div></div>'
    }
    function _o(t) {
        return '<div class="card-tail"><a data-href="/hs/market/cate/store/' + t.sid + '">\u67e5\u770b\u5168\u90e8</a></div>'
    }
    function mo(t, n) {
        var e = '<div class="new-page">' + go(t.section.slice(0, 2));
        return n && (e += '<section class="main-card" data-track="1"><div class="channel-title"><h1>' + n.label + "</h1><p>" + n.description + '</p></div><div class="card-cnt">' + ui(n.items) + '</div><div class="card-tail"><a data-href="' + Wd("book", 12505) + '">\u67e5\u770b\u5168\u90e8</a></div></section>'),
        e += '<section class="main-card" data-track="2"><div class="channel-title"><h1>' + t.section[2].name + "</h1><p>\u4ee5\u4e0b\u7cbe\u54c1\u4e66\u73b0\u5728\u53ef\u4ee5\u514d\u8d39\u7545\u8bfb\u5168\u6587</p></div>" + li(t.section[2].items) + '<div class="card-tail"><a data-href="' + t.section[2].more + '">\u67e5\u770b\u5168\u90e8</a></div></section>' + yo(t.section[3].topic, t.section[3].items) + '<section class="main-card" data-track="4"><div class="channel-title">' + t.section[4].name + "</div>" + li(t.section[4].items) + '<div class="card-tail"><a data-href="' + t.section[4].more + '">\u67e5\u770b\u5168\u90e8</a></div></section></div>'
    }
    function go(t) {
        for (var n, e = "", i = t, r = -1, o = i.length - 1; o > r; )
            if (n = i[++r],
            n.items[0]) {
                var a = n.items[0]
                  , c = a.book;
                e += '<section class="main-card" data-track="0"><div class="channel-title">',
                0 == r ? (e += "<h1>\u4eca\u65e5\u514d\u8d39\u4e0b\u8f7d</h1>",
                14440608e5 > Pv.now() && (e += "<p>\u6570\u5b57\u9605\u8bfb\u8054\u5408\u9650\u514d(9\u67085\u65e5-10\u67085\u65e5)</p>")) : e += "<h1>\u660e\u65e5\u514d\u8d39\u9884\u544a</h1>",
                e += '</div><ul class="book-list"><li  data-track="0"><div class="u-book -act" data-href="' + hi(c) + '" ',
                0 == r && (e += "id=" + Le(pu, c)),
                e += ">" + _i(c, !0) + '<div class="info"><h3 class="title single-line">' + c.title + '</h3><p class="summary">' + vi(c) + '</p><p class="button ',
                1 == r && (e += "-disable"),
                e += "\" vp-class=\"{'-disable' : $root.isPaid()}\" vp-bind=\"$root.isPaid() ? '\u5df2\u9886\u53d6' : '\u514d\u8d39\u9886\u53d6'\">" + a.ad_copy + "</p></div></div></li></ul></section>"
            }
        return e
    }
    function bo(t) {
        for (var n, e = '<div class="new-page special-page"><section class="main-card"><div class="channel-title"><h1>\u4eca\u65e5\u7545\u8bfb\u7cbe\u54c1</h1><p>\u4ee5\u4e0b\u4e66\u7c4d\u514d\u8d39\u7545\u8bfb\u4e2d</p></div>' + li(t.top.items, 0, !1) + '<div class="card-tail"><a id="' + Le(fo) + '">\u67e5\u770b\u66f4\u591a\u7cbe\u54c1</a></div></section>', i = t.area, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += '<section class="main-card"><div class="channel-title"><h1>' + n.name + "</h1></div>" + li(n.items, 0, !1, ko) + "</section>";
        return e += "</div>"
    }
    function ko(t) {
        var n = ""
          , e = t.special || 0;
        return e && (n += '<div class="u-price"><b>' + pi(e) + "</b>" + ai() + "</div>"),
        n
    }
    function yo(t, n) {
        return '<section class="main-card" data-track="3"><div class="channel-title"><h1>' + t.ad_name + "</h1><p>" + t.ad_copy + '</p></div><div class="card-cnt">' + ui(n) + '</div><div class="card-tail"><a data-href="' + Cr(t) + '">\u67e5\u770b\u5168\u90e8</a></div></section>'
    }
    function wo(t) {
        for (var n, e = '<div class="new-page special-page">', i = t.lists, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += '<section class="main-card">',
            n.name && (e += '<div class="channel-title"><h1>' + n.name + "</h1></div>"),
            e += '<div data-track="ch.finished">' + li(n.items, 0, !1, ko) + "</div>",
            n.name.indexOf("\u7537\u751f") ? n.name.indexOf("\u5973\u751f") || (e += '<div class="card-tail"><a data-href="/hs/market/cate/fiction/18000000?tagIndexStr=0,2">\u67e5\u770b\u66f4\u591a</a></div>') : e += '<div class="card-tail"><a data-href="/hs/market/cate/fiction/1000000?tagIndexStr=0,2">\u67e5\u770b\u66f4\u591a</a></div>',
            e += "</section>";
        return e
    }
    function xo(t, n, e, i) {
        function r() {
            dr() || l.get("gifted") || l.get("unavailable") || Tc(function() {
                a(!0),
                kn("\u606d\u559c\u60a8\u9886\u53d6\u6210\u529f")
            }
            , function(t) {
                return a(!0),
                130013 == t.result ? (kn("\u60a8\u5df2\u7ecf\u9886\u53d6\u8fc7\u5956\u52b1\uff01"),
                1) : void 0
            }
            , n)
        }
        function o() {
            lr() || Cc(function(t) {
                var n = t.gifted;
                !n && u(),
                a(n)
            }
            , function(t) {
                return l.set({
                    unavailable: !0
                }),
                130002 == t.result ? 1 : void 0
            }
            , n)
        }
        function a(t) {
            l.set({
                gifted: t
            })
        }
        function c() {
            var n = t.parentNode.childNodes
              , e = C(n, t);
            return y(n, function(t, n) {
                return n > e
            }
            )
        }
        function s() {
            var n = t.offsetHeight;
            _(c(), function(t) {
                t.style.webkitTransform = "translateY(-" + n + "px)",
                t.style.transitionDuration = "0s",
                t.style.transitionTimingFunction = "ease-in-out"
            }
            )
        }
        function u() {
            _(c(), function(t) {
                t.style.webkitTransform = "translateY(0)",
                t.style.transitionDuration = ".36s"
            }
            )
        }
        if (i && s(),
        n) {
            var l = ye({
                gifted: !1,
                unavailable: !1
            })
              , d = N(".channel-gift__button", t);
            return l.className(d, function(t) {
                return {
                    "channel-gift__button_unavailable": t.gifted || t.unavailable
                }
            }
            ),
            l.html(d, function(t) {
                return t.gifted ? "\u5df2\u9886\u53d6" : t.unavailable ? "\u5df2\u8fc7\u671f" : e
            }
            ),
            l.digest(),
            H(t, "click", r),
            o()
        }
    }
    function To(t) {
        var n = ""
          , e = t.extend;
        return n += '<section class="channel-group main-card channel-gift" id="' + Le(xo, e.gift_code, e.gift_button, e.hide_at_first) + '">' + Ho(t.title, t.desc) + '<div class="channel-gift__content"><img class="channel-gift__icon" src="' + t.banner + '"><p class="channel-gift__text">' + e.gift_text + '</p><a class="channel-gift__button">' + e.gift_button + "</a></div></section>";
    
    }
    function Co(t, n) {
        var e = 2
          , i = 1
          , r = n.length - 1
          , o = N("li:first-child", t).clientHeight
          , a = e + i
          , c = r * a
          , s = "slide-animation"
          , u = s + Pv.now()
          , l = Io(e, r, o, a, c, u);
        l += $o(r, o, c, u),
        Fe(l, s)
    }
    function $o(t, n, e, i) {
        return a(".u-announce__list { top: -{0}px; -webkit-animation-duration: {1}s; -webkit-animation-iteration-count: infinite; -webkit-animation-name: {2}; }", t * n, e, i)
    }
    function Io(t, n, e, i, r, o) {
        for (var c = a("@-webkit-keyframes {0} { 0% { top: -{1}px; } ", o, n * e), s = n; s > 0; s--) {
            var u = (n - s) * i + t;
            c += a("{0}% { top: -{1}px; } ", (u / r * 100).toFixed(2), s * e);
            var l = (n - s + 1) * i;
            c += a("{0}% { top: -{1}px; } ", (l / r * 100).toFixed(2), (s - 1) * e)
        }
        return c += a(" }")
    }
    function So(t) {
        var n = ""
          , e = t.data.data;
        if (e && e.length) {
            n += '<div class="u-announce" data-track="an-' + lv.user_type + '"><img class="u-announce__header" src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01RL64OyMw4/B6hBrLdiy7U4Vg.png" alt="\u591a\u770b\u5934\u6761">',
            e.length > 1 && ($(e, e[0]),
            e = e.reverse()),
            n += '<ul class="u-announce__list" id="' + Le(Co, e) + '">';
            for (var i, r = e, o = -1, a = r.length - 1; a > o; )
                i = r[++o],
                n += '<li class="u-announce__item single-line" data-href="' + Cr(i) + '" data-track="' + o + '" ' + Ou("anc") + ">" + i.title + "</li>";
            n += "</ul></div>"
        } else
            n += '<div class="main-card"></div>';
        return n
    }
    function Oo(t, n, e, i, r) {
        Ge(t, n, we(e, [i, r, !!r, ""], !0))
    }
    function Eo(t) {
        var n = t.data;
        return Ca(t.type) ? x(n.data, function(t) {
            return t.data
        }
        ) : n ? n.data : void 0
    }
    function Mo(t) {
        var n = t.data
          , e = t.extend;
        return e && e.url ? e.url : n && n.count == n.total ? "" : Cr(t)
    }
    function Po(t, n) {
        var e = {
            title_align: {
                left: "channel-group__title_left",
                center: "channel-group__title_center",
                right: "channel-group__title_right"
            }
        };
        return e[t] && e[t][n] || ""
    }
    function Ao(t) {
        var n = {
            cart: La,
            read: Pa,
            shelf: Aa
        };
        return cr() && "shelf" == t.button && (t.button = "",
        t.show_vertical = 1),
        n[t.button]
    }
    function Lo(t, n) {
        function e() {
            Qc(function() {
                kn("\u8d2d\u4e70\u6210\u529f"),
                i()
            }
            , function() {
                i()
            }
            , {
                book: {
                    title: r.title,
                    cover: c && c[0].book_cover || ""
                },
                price: gi(a.price),
                listId: r.id
            })
        }
        function i() {
            var n = R(t, ".channel-group")
              , e = B(".u-tagRT", n)
              , i = r.items;
            _(e, function(t, n) {
                gr(i[n], t)
            }
            )
        }
        var r = n.data
          , o = n.extend
          , a = o.activity.value
          , c = Eo(n);
        return H(t, "click", e)
    }
    function No(t) {
        var n = {
            2: "/store/v0/android/list/{0}",
            101: "/store/v0/fiction/list/{0}",
            1000: "/store/v0/android/rank?rt={0}",
            1001: "/store/v0/fiction/rank?r={0}",
            1002: "/store/v0/android/rank/fresh",
            2001: "/store/v0/android/query?author={0}&b=0&f=1"
        }
          , e = n[t.type];
        if (!e)
            throw "error: channelBookList__getListViewApi";
        return a(e, t.id)
    }
    function Bo(t) {
        var n = ""
          , e = t.extend && t.extend.activity;
        return n += e && "package" == e.key ? jo(t, Vo(t), Ro(e.value.price)) : e && "timer" == e.key ? jo(t, Yo(e.value)) : jo(t)
    }
    function jo(t, n, e) {
        var i = ""
          , r = t.extend
          , o = Eo(t)
          , a = Mo(t)
          , c = Ao(r);
        if (i += '<section class="channel-group main-card">' + Ho(t.title, t.desc, r.title_align, r.subscript, n),
        r.show_unlimited) {
            var s = No(t);
            i += '<div id="' + Le(Oo, Xo.bind(null , s), zo, r.show_price, c) + '"></div>'
        } else
            i += Do(o, r.show_price, r.show_vertical, c),
            a && (i += Fo(a, e || r.more_text || "\u67e5\u770b\u66f4\u591a"));
        return i += "</section>"
    }
    function Ro(t) {
        return '<span class="channel-group__footer_activity">' + a("\u4e00\u952e\u6253\u5305\u8d2d\u4e70({0}{1})", gi(t), ai()) + "</span>"
    }
    function Ho(t, n, e, i, r) {
        var o = '<div class="channel-group__header"><h2 class="channel-group__title ' + Po("title_align", e) + '">' + t + "</h2>";
        return n && (o += '<p class="channel-group__desc">' + n + "</p>"),
        i && (o += '<img class="channel-group__subscript" src="' + i + '">'),
        r && (o += r),
        o += "</div>"
    }
    function Do(t, n, e, i) {
        var r = "";
        return r += 2 == e ? "<!-- \u7b2c\u4e00\u884c\u4e00\u672c\u7ad6\u6392\uff0c\u7b2c\u4e8c\u884c\u4e09\u672c\u6a2a\u6392  -->" + li(t.slice(0, 1), 0, n, i || !n && Wo, !!i) + ui(t.slice(1, 4), n) : 1 == e ? li(t, 0, n, i || !n && Wo, !!i) : ui(t, n)
    }
    function zo(t, n, e, i) {
        var r = "";
        return r += "",
        r += t[0] && t[0].ex ? "<!-- TODO \u4f7f\u7528\u65b0\u7248\u699c\u5355\u7684\u6a21\u677f -->" + li(t, n, e, i || !e && Wo, !!i) : li(t, n, e, i || !e && Wo, !!i)
    }
    function Fo(t, n) {
        return '<a class="channel-group__footer" data-href="' + t + '">' + (n || "\u67e5\u770b\u5168\u90e8") + "</a>"
    }
    function Yo(t) {
        return '<div class="u-timer"><em class="u-timer__clock"></em><span class="u-timer__time" id="' + Le(Go, t) + '"></span></div>'
    }
    function Vo(t, n) {
        return '<p class="u-btn2 channel-group__package-pay" id="' + Le(Lo, t, n) + '">\u6253\u5305\u8d2d\u4e70</p>'
    }
    function Wo(t) {
        var e = ""
          , i = t.main_tag || t.tags && t.tags[0]
          , r = t.category_name !== n ? t.category_name : t.categories && t.categories[0] && t.categories[0].label;
        return i = r == i ? "" : i,
        i && (e += '<div class="book-tag">' + i + "</div>"),
        r && (e += '<div class="book-tag">' + r + "</div>"),
        t.subscript && (e += '<div class="u-subscript ' + t.subscriptClazz + '">' + t.subscript + "</div>"),
        e
    }
    function Ko(t, n, e) {
        var i = dn() ? ft : vt;
        return i("/hs/v3/channel/" + t, {
            success: n,
            error: e
        })
    }
    function Xo(t, n, e, i, r) {
        le(i, r, t, {
            start: n,
            count: e
        })
    }
    function Go(n, e) {
        function i() {
            function t(t) {
                function n(t) {
                    return 10 > t ? "0" + t : t
                }
                function e(t) {
                    return {
                        hour: Math.floor(t / 36e5),
                        min: Math.floor(t % 36e5 / 6e4),
                        sec: Math.floor(t % 6e4 / 1e3)
                    }
                }
                var i = e(t)
                  , r = "";
                return r = "<span><span>" + n(i.hour) + "</span>:<span>" + n(i.min) + "</span>:<span>" + n(i.sec) + "</span></span>"
            }
            var n = ph
              , e = n.current;
            return 0 == e ? "\u8ddd\u79bb\u5f00\u59cb" + t(n.timestamps[0] - n.now) : 1 == e ? "\u8ddd\u79bb\u7ed3\u675f" + t(n.timestamps[1] - n.now) : 2 == e ? "\u6d3b\u52a8\u5df2\u7ed3\u675f" : ""
        }
        e.start = new Pv(Pv.parse(e.start)),
        e.end = new Pv(Pv.parse(e.end)),
        ph = $h,
        ph.onChange = function() {
            return ot(n, i()),
            ph.current == Oh ? ph.stop() : void 0
        }
        ,
        ph.onChangeScene = function(n) {
            z(t, "super.changescene", n)
        }
        ,
        kv(function() {
            ph.start(Pv.now(), [e.start, e.end])
        }
        , 0)
    }
    function Jo(t) {
        var n = t.parentElement
          , e = n.offsetHeight + 10
          , i = y(B(".channel-group", n.parentElement), function(t) {
            return ee(t) > ee(n) + 1 && N(".channel-group__title", t)
        }
        )
          , r = x(i, function(t) {
            return N(".channel-group__title", t).innerHTML
        }
        );
        ot(t, na(r)),
        Uo(t, i, e)
    }
    function Uo(t, n, e) {
        var i = qo(t);
        lt(t, "click", "li", function(t, r) {
            var o = ee(r);
            vv.body.scrollTop = ie(n[o]) - e,
            i(o)
        }
        ),
        _(n, function(t, n) {
            Ke(t, function() {
                i(n)
            }
            , function(t) {
                var i = t.getBoundingClientRect();
                return 0 == n && i.top > e ? !0 : i.bottom > e && e + 10 > i.top
            }
            )
        }
        )
    }
    function qo(t) {
        function n(t) {
            e.set({
                tab: t
            })
        }
        var e = ye();
        return _(B("li", t), function(t) {
            e.className(t, function(n) {
                return {
                    crt: n.tab == ee(t)
                }
            }
            )
        }
        ),
        n
    }
    function Zo(t, n, e) {
        var i = '<div class="new-page channel-page" ';
        e && (i += 'data-track="' + e + '"'),
        i += ">",
        _u("ch_" + n);
        for (var r, o = t, a = -1, c = o.length - 1; c > a; )
            r = o[++a],
            mu(a),
            i += ua(r),
            gu();
        return i += "</div>"
    }
    function Qo(t) {
        var n = '<section class="channel-group u-topic main-card channel-group_top">' + oi(t.banner, t.extend.bannerTag);
        return t.desc && (n += '<pre class="channel-group__summary">' + t.desc + "</pre>"),
        n += "</section>"
    }
    function ta(t) {
        var n = '<div class="channel-group channel-fixedbar" id="' + Le(Fixedbar__add) + '"><ul class="top-tabs" id="' + Le(Jo) + '"><li>&nbsp;</li></ul></div><div class="channel-divider"></div>';
        return n
    }
    function na(t) {
        for (var n, e = "", i = t, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += "<li>" + n + "</li>";
        return e
    }
    function ea(t) {
        return '<section class="main-card channel-group channel-author"><div class="channel-author__info"><img class="channel-author__icon" src="' + t.banner + '"><div class="channel-author__summary"><h3 class="channel-author__name">' + t.title + '</h3><p class="channel-author__book">' + t.extend.book_count + '\u672c\u4f5c\u54c1</p></div></div><p class="channel-author__desc">' + t.desc + "</p></section>"
    }
    function ia(t) {
        var n = '<section class="main-card channel-banner"><div class="bd"><div class="u-topic" data-href="' + Cr(t) + '" ' + Ou("n*" + Mu(t)) + ' expose="">';
        return t.extend.hide_header || (t.title && (n += '<h3 class="title">' + t.title + "</h3>"),
        t.desc && (n += '<p class="intro single-line">' + t.desc + "</p>")),
        t.banner && (n += oi(t.banner, t.extend.tag)),
        t.extend.more_url && t.extend.more_text && (n += '<p class="channel-banner__more" data-href="' + t.extend.more_url + '">' + t.extend.more_text + "</p>"),
        n += "</div></div></section>"
    }
    function ra(t) {
        var n = ""
          , e = t.extend
          , i = Ao(e);
        return n += '<section class="main-card channel-group channel-book">' + Ho(t.title) + di(t.data, e.show_price, i, !!i),
        t.desc && (n += '<p class="channel-book__desc">' + t.desc + "</p>"),
        n += "</section>"
    }
    function oa(t) {
        return '<section class="channel-group channel-bottom"><p class="channel-bottom__fixed-bar" data-href="' + Cr(t) + '">' + t.title + "</p></section>"
    }
    function aa(t, n, e) {
        Ii(t, Ko.bind("", n), function(t) {
            if (!t.items)
                return gv.error("channel__render: \u9891\u9053(" + n + ")", t),
                "";
            var i = Ta(t.hidden_info);
            mn(i.title || t.ad_setting_name),
            Vs(),
            $r().iframe && $a();
            var r = ka(t.items);
            return Us() && (r = ca(r)),
            Zo(r, n, e)
        }
        )
    }
    function ca(t) {
        function n(t) {
            return "book-list" == t.extend.type && O([2, 101], t.type)
        }
        var e = +Us() || lv.user_type
          , i = 1 == e
          , r = y(t, function(t) {
            return n(t)
        }
        )
          , o = b(r, function(t, n) {
            return i ? t.type - n.type : n.type - t.type
        }
        );
        return _(t, function(e, i) {
            n(e) && (t[i] = o.shift())
        }
        ),
        t
    }
    function sa(t, n) {
        if (Eh[t] && Eh[t] != n)
            throw "channel__registHandler: the handler has been regist";
        return Eh[t] = n
    }
    function ua(t) {
        if (_v.port)
            return la(t.extend.type)(t);
        try {
            return la(t.extend.type)(t)
        } catch (n) {
            return gv.error("channel__render", t, n),
            ""
        }
    }
    function sa(t, n) {
        if (Eh[t] && Eh[t] != n)
            throw "channel__registHandler: the handler has been regist";
        return Eh[t] = n
    }
    function la(t) {
        var n = Eh[t || "book-list"];
        return n || (gv.error("channel__findHandlerByType, type: " + t),
        n = function() {
            return ""
        }
        ),
        n
    }
    function da(t) {
        return So(t)
    }
    function fa(t) {
        return ea(t)
    }
    function pa(t) {
        return ia(t)
    }
    function va(t) {
        return ra(t)
    }
    function ha(t) {
        return Bo(t)
    }
    function _a(t) {
        return oa(t)
    }
    function ma(t) {
        return ta(t)
    }
    function ga(t) {
        return Qo(t)
    }
    function ba(t) {
        return To(t)
    }
    function ka(t) {
        return y(x(t || [], xa), ya)
    }
    function ya(t) {
        var n = t.extend
          , e = {};
        return e.miui = +!!sv,
        e.device = wa(),
        e.platform = dv,
        T(["miui", "device", "platform"], function(t, i) {
            return t && (!n[i] || e[i] == n[i])
        }
        , !0)
    }
    function wa() {
        var t = lv.app_id || ""
          , n = c(t, "iPad") || c(t, "HD");
        return n ? "pad" : "phone"
    }
    function xa(t) {
        if (t.extend)
            return t;
        var n = {
            id: t.reference_id,
            type: t.ad_type,
            title: t.ad_name,
            banner: t.ad_pic_url,
            desc: t.ad_copy,
            data: t.data,
            url: Cr(t),
            extend: Ta(t.hidden_info)
        };
        return Ca(n.type) && n.data && n.data.data && (n.data.data = ka(n.data.data)),
        n
    }
    function Ta(t) {
        if (!t)
            return {};
        var n = /\[\[(.*?)\]\]/
          , e = t.match(n)
          , i = {};
        if (!e) {
            if (!/\{.*?\}/.test(t))
                return i;
            try {
                i = JSON.parse(t)
            } catch (t) {
                gv.log("channel__resolveExtend", t)
            }
            return i
        }
        var r = e[1].split(";");
        return _(r, function(t) {
            var n = t.split("|");
            if (1 == n.length)
                i[n[0]] = 1;
            else
                try {
                    i[n[0]] = JSON.parse(n[1])
                } catch (t) {
                    i[n[0]] = n[1]
                }
        }
        ),
        i
    }
    function Ca(t) {
        return O([201, 202], +t)
    }
    function $a() {
        var n = $r().iframe;
        kv(function() {
            var n, e = vv.body.scrollHeight;
            n = {
                pageHeight: e
            },
            gv.log("pageHeight", e),
            t.parent.postMessage(n, "*")
        }
        ),
        Jf = function(t, e, i) {
            function r(t) {
                var n = N("#root", vv);
                st(n, '<a id="_temp__nativeJumpLink" href="' + t + '" target="_top"></a>');
                var e = N("#_temp__nativeJumpLink", n);
                z(e, "click"),
                Z(e)
            }
            t = Ia(t, t, n),
            r(t)
        }
        ,
        Xe = function(t, n) {
            function e() {
                return N("img", t)
            }
            function i() {
                Y(t, "Lazy_loaded"),
                o()
            }
            function r() {
                tt(e()),
                o()
            }
            function o() {
                D(t, "load", !0),
                D(t, "error", !0)
            }
            Y(t, "Lazy_loading"),
            H(t, "load", i, !0),
            H(t, "error", r, !0),
            e().src = n,
            lazy.clear()
        }
    }
    function Ia(t, e, i, r) {
        var o = "http://www.duokan.com/subtle/event/redirect.html";
        return e = e || "http://app.xiaomi.com/details?appId=1108&back=true&ref=" + i,
        i = i || "wrapper",
        f({
            url: f({
                from: i
            }, t),
            mifb: f({
                ref: i
            }, e),
            miback: r ? n : !0,
            miref: i
        }, o)
    }
    function Sa(t, e) {
        function i() {
            return dr() ? void 0 : l.get("canReceive") ? c(e) : l.get("added") ? kn("\u672c\u4e66\u5df2\u52a0\u5165\u8d2d\u7269\u8f66\uff01") : void cart__add(s, function(t) {
                return t.paid ? (l.set({
                    purchased: !0
                }),
                void kn("\u60a8\u5df2\u8d2d\u4e70\u672c\u4e66\uff01")) : void l.set({
                    added: !0
                })
            }
            )
        }
        function r() {
            if (l.get("purchased")) {
                br(e, t);
                var n = R(t, ".-itembtn");
                n && V(n, "-itembtn")
            }
        }
        function o() {
            return l.get("canReceive") ? "\u7acb\u5373\u9886\u53d6" : l.get("added") ? "&radic; \u8d2d\u7269\u8f66" : "+ \u8d2d\u7269\u8f66"
        }
        function a() {
            var t = !uu(e);
            return t && !lr()
        }
        function c(t) {
            Qc(function() {
                l.set({
                    purchased: !0
                })
            }
            , n, {
                id: s,
                book: t,
                price: 0
            })
        }
        var s = e.book_id;
        if (s) {
            Oa.__ex || (Oa.__ex = !0,
            Me(N("#root", vv), Na()));
            var u = su(s)
              , l = $e(t, {
                purchased: u,
                added: !!cart__in(s),
                canReceive: a()
            });
            l.set({
                addCart: i,
                bind: o,
                custom: r
            }),
            H(vv, "cart.loaded", function() {
                l.set({
                    added: !!cart__in(s)
                })
            }
            )
        }
    }
    function Oa(t) {
        var n = $e(t, {
            bookNumber: cart__getCache() && cart__getCache().items.length || 0,
            clear: function() {
                dr() || Jf(url__cart())
            }
        }).set();
        H(vv, "cart.loaded", function() {
            var t = cart__getCache();
            t && t.items && n.set({
                bookNumber: cart__getCache().items.length
            })
        }
        )
    }
    function Ea(t, n) {
        function e(t) {
            a.set({
                added: t,
                canReceive: r()
            })
        }
        function i() {
            return a.get("added") ? kn(a.get("canReceive") ? "\u672c\u4e66\u5df2\u9886\u53d6!" : "\u672c\u4e66\u5df2\u52a0\u5165\u4e66\u67b6\uff01") : void (c ? Gi : Ji)(c || s, function(t) {
                zn(t.item) && (e(!0),
                sr() && analysis__track(n),
                o(t.item))
            }
            )
        }
        function r() {
            var t = !uu(n)
              , e = su(c);
            return c && t && !e && !u && !lr()
        }
        function o(n) {
            a.get("canReceive") && Qc(function() {
                gr(n, N(".book-cover .u-tagRT", R(t, ".u-book")))
            }
            , function() {
                return 1
            }
            , {
                id: c,
                book: n,
                price: 0
            })
        }
        var a = $e(t, {
            addShelf: i
        }).set()
          , c = n.book_id
          , s = n.fiction_id
          , u = In(c || s).shelf;
        return e(u)
    }
    function Ma(t, e) {
        function i() {
            var t = e.book_id
              , n = e.fiction_id;
            if (1 === e.source || 3 === e.source)
                t = t || e.source_id;
            else if (2 === e.source || 4 === e.source)
                n = n || e.source_id;
            else if (!t && !n)
                return void o();
            (t ? Gi : Ji)(t || n, function(i) {
                var a = In(t || n)
                  , c = a ? a.shelf : {
                    bookState: "NORMAL"
                };
                e = i.item;
                var s = e.book_id ? fu(e) || c && "NORMAL" === c.bookState : !0;
                if (!s)
                    return void o();
                var u = {};
                u = e.book_id ? r({
                    bookUuid: e.book_id,
                    detail: e
                }, u) : r({
                    fictionId: "" + e.fiction_id + (1 === e.owner ? "-" + e.owner + "-" + e.owner_uri : "")
                }, u),
                Dn(u)
            }
            )
        }
        function o(t) {
            Jf(hi(e), "", t)
        }
        $e(t, {
            readBook: L(i, sr() && analysis__track.bind(n, e))
        }).set({
            readable: !0
        })
    }
    function Pa(t) {
        return '<a id="' + Le(Ma, t) + '" class="book-itembtn u-btn2 -read" vp-class="{ \'-unreadable\': !$root.readable }" vp-bind="$root.readable ? \'\u5f00\u59cb\u9605\u8bfb\' : \'\u67e5\u770b\u8be6\u60c5\'" vp-click="$root.readBook($event)" ' + Ou("btn") + ">\u5f00\u59cb\u9605\u8bfb</a>"
    }
    function Aa(t) {
        return '<a id="' + Le(Ea, t) + '" class="book-itembtn u-btn2 -shelf" vp-class="{ \'-inshelf\': $root.added, \'-canReceive\': $root.canReceive }" vp-click="$root.addShelf()" ' + Ou("btn") + "></a>"
    }
    function La(t) {
        return '<a id="' + Le(Sa, t) + '" class="book-itembtn u-btn2 -cart" vp-class="{ \'-incart\': $root.added, \'-canReceive\': $root.canReceive }" vp-bind="$root.bind()" vp-show="!$root.purchased" vp-custom="$root.custom()" vp-click="$root.addCart()" ' + Ou("btn") + ">+ \u8d2d\u7269\u8f66</a>"
    }
    function Na() {
        var t = '<a id="' + Le(Oa) + '" class="cart-clear';
        return "ios" === dv && (t += " -ios"),
        t += '" vp-click="$root.clear()" ' + Ou("btn") + '><em class="cart" vp-bind="$root.bookNumber"></em><em class="clear">\u7ed3\u7b97</em></a>'
    }
    function Ba(t, n) {
        mn("\u4e13\u9898\u4e66\u5355"),
        Ge(t, Wi.bind("", n), gc.bind("", n))
    }
    function ja(t, e, i) {
        mn(""),
        function r() {
            ot(t, jt());
            var o = Vi.bind(this, e, i)
              , a = Si(o);
            a(0, 10, function(n) {
                mr("topic_" + n.list_id, n),
                n.label && mn(n.label);
                var r = qa(n.hidden_info)
                  , c = Ya(n.discount);
                "discount" == i && (r = {
                    price: 1
                }),
                r.vertical = me(r.vertical, !0),
                r.buttonTpl = r.showButton ? uc : r.cart ? La : c ? mc : null ,
                Oe(t, ac(n, c));
                var s = N(".topic-body", t);
                c ? Da(o, s, r) : Ge(s, a, cc.bind("", r), {
                    completeTpl: sc.bind("", e)
                })
            }
            , Kt.bind(n, t, r))
        }
        ()
    }
    function Ra(t, n) {
        Qa(t, n)
    }
    function Ha() {
        return d(_v.search.substr(1)).limit || 6
    }
    function Da(t, n, e) {
        t(0, 1e3, function(t) {
            Xa(t.list_id, t.discount),
            Oe(n, hc(e, t))
        }
        )
    }
    function za(n, e, i, r) {
        function o() {
            v = y(r, function(t) {
                var n = su(t.book_id);
                return n && Ka(t.book_id),
                !n
            }
            ),
            d = Va().length,
            f = T(Va(), function(t, n) {
                return t + (uu(y(v, function(t) {
                    return t.book_id === n
                }
                )[0]) || 0)
            }
            , 0),
            p = discount__ret(i, f),
            h.set({
                addedBookCount: d,
                totalPrice: f,
                discount: p,
                purchasedAll: !v.length
            })
        }
        function c() {
            Va().length && Qc(function() {
                Ja(),
                ur()
            }
            , cart__payError.bind("", function(t) {
                _(t, function(t) {
                    Ka(t.book_id)
                }
                )
            }
            ), {
                id: Va(),
                book: y(v, function(t) {
                    return O(Va(), t.book_id)
                }
                ),
                price: f - p,
                listId: e
            })
        }
        function s() {
            var t = h.get("addedBookCount")
              , n = h.get("totalPrice")
              , e = discount__ret(i, n);
            return h.get("purchasedAll") ? "\u571f\u8c6a\u4f60\u5df2\u5305\u573a\uff0c\u6682\u65e0\u53ef\u4e70\u56fe\u4e66~" : t ? a("\u5df2\u9009\u62e9{0}\u672c\u4e66\uff0c\u5171{1}\u5143<br>\u5df2\u4f18\u60e0{2}\u5143", t, n.toFixed(2), e) : "\u6682\u672a\u52a0\u5165\u56fe\u4e66"
        }
        function u() {
            var n = N(".discount-info", vv.body);
            H(t, "scroll", function(t) {
                var e = n.offsetTop + n.clientHeight
                  , i = vv.body.scrollTop
                  , r = h.get("showFloat");
                i >= e && !r ? h.set({
                    showFloat: !0
                }) : e > i && r && h.set({
                    showFloat: !1
                })
            }
            )
        }
        function l() {
            H(t, "topic.toggle", function(t) {
                var n = t.data;
                d = h.get("addedBookCount") + (n.added ? 1 : -1),
                f = h.get("totalPrice") + (n.added ? n.price : -1 * n.price),
                p = discount__ret(i, f),
                h.set({
                    addedBookCount: d,
                    totalPrice: f,
                    discount: p
                })
            }
            )
        }
        var d, f, p, v, h = $e(n, {
            pay: c,
            detail: s
        });
        M(function() {
            o()
        }
        )(),
        l(),
        u()
    }
    function Fa(n, e) {
        function i() {
            var t = su(e.book_id);
            c.set({
                purchased: t
            })
        }
        function r() {
            c.get("purchased") && Z(R(n, "li"))
        }
        function o() {
            a = !c.get("added"),
            a ? Wa(e.book_id) : Ka(e.book_id),
            c.set({
                added: a
            }),
            z(t, "topic.toggle", {
                added: a,
                price: uu(e)
            })
        }
        var a = O(Va(), e.book_id)
          , c = $e(n, {
            added: a,
            custom: r,
            toggle: o
        });
        M(function() {
            i()
        }
        )()
    }
    function Ya(t) {
        if (t) {
            var n;
            return t.start && t.end && (n = Pv.now() >= 1e3 * t.start && 1e3 * t.end >= Pv.now()),
            t.strategy && n
        }
    }
    function Va() {
        return vh.bookIds
    }
    function Wa(t) {
        Ga("bookIds", I(Va(), t))
    }
    function Ka(t) {
        Ga("bookIds", S(Va(), t))
    }
    function Xa(t, n) {
        var i = Mh + t;
        ge($t(i)) ? (vh = {},
        vh.bookIds = [],
        vh.listId = t,
        vh.expire = n && 1e3 * n.end,
        vh.key = i,
        It(i, JSON.stringify(vh))) : vh = JSON.parse($t(i)),
        e(Iv, function(t, n) {
            if (c(t, Mh))
                try {
                    var e = JSON.parse(Iv.getItem(t)).expire;
                    e && Pv.now() > e && Iv.removeItem(t)
                } catch (t) {
                    gv.log("Json parse error => " + t.message)
                }
        }
        )
    }
    function Ga(t, n) {
        vh[t] = n,
        It(vh.key, JSON.stringify(vh))
    }
    function Ja() {
        St(vh.key),
        vh = null 
    }
    function Ua(t, e) {
        function i() {
            return "\u4e00\u952e\u8d2d\u4e70"
        }
        function r() {
            Qc(function() {
                kn("\u8d2d\u4e70\u6210\u529f"),
                wn()
            }
            , n, {
                book: {
                    title: e.label,
                    cover: e.cover
                },
                price: gi(e.price),
                listId: e.list_id
            })
        }
        return $e(t, {
            price: gi(e.price),
            discount: gi(e.discount),
            commitText: i,
            commit: r
        }).set()
    }
    function qa(t) {
        if (!t)
            return {};
        var n = /\[\[(.*?)\]\]/
          , e = t.match(n);
        e = e && e[1] ? e[1] : "";
        var i = e.split(";")
          , r = {};
        return _(i, function(t) {
            var n = t.split("|");
            if (1 == n.length)
                r[n[0]] = 1;
            else
                try {
                    r[n[0]] = JSON.parse(n[1])
                } catch (t) {
                    r[n[0]] = n[1]
                }
        }
        ),
        r
    }
    function Za(t, n, e, i) {
        Qi(function(t) {
            var n = {
                label: "\u6742\u5fd7\u4e13\u533a"
            };
            n.lists = x(t.cate.children, function(n) {
                return n.books = t[n.sid],
                n.hidden_info = "[[horizontal]]",
                n
            }
            ),
            e(n)
        }
        , i)
    }
    function Qa(t, n) {
        lt(t, "click", "#topic__goBack", function() {
            wn()
        }
        ),
        ic(t, "#topic__getLimitedTime", kc, yc),
        ic(t, "#topic__getLimitedTimeByPush", wc, xc),
        ic(t, "#topic__getCommonGift", Tc, Cc),
        ec(t),
        tc(t)
    }
    function tc(t) {
        function n(t) {
            var n = qa(t.dataset.run);
            n.show && (nc(n.show) ? nt(t) : tt(t))
        }
        var e = B("[data-run]", t);
        _(e, n)
    }
    function nc(t) {
        if (t) {
            var n = bn();
            n.build = Math.floor(n.build / 1e6),
            n.miui = +gn(),
            n.platform = dv;
            for (var e in t)
                if (t[e] !== n[e] && !ge(n[e]))
                    return !1;
            return !0
        }
    }
    function ec(t) {
        var n = N("#topic__giftAll", t);
        n && H(n, "click", function() {
            ir(function() {
                pay__updatePurchased(function() {
                    bv("\u56fe\u4e66\u9886\u53d6\u6210\u529f\uff0c\u8d76\u7d27\u9605\u8bfb\u5427\uff01"),
                    ot(n, "\u5df2\u9886\u53d6"),
                    Y(n, "u-btn-disable")
                }
                )
            }
            , function(t) {
                return 130010 == t.result ? (bv("\u60a8\u5df2\u62e5\u6709\u5168\u90e8\u56fe\u4e66\uff0c\u8d76\u7d27\u9605\u8bfb\u5427\uff01"),
                ot(n, "\u5df2\u9886\u53d6"),
                Y(n, "u-btn-disable")) : pr(t, !0),
                !0
            }
            )
        }
        )
    }
    function ic(t, n, e, i) {
        function r(t) {
            if (fv) {
                var n = t.dataset.code;
                i(function(n) {
                    0 !== n.gifted && (ot(t, "\u5df2\u9886\u53d6"),
                    Y(t, "u-btn-disable"),
                    t.id = "")
                }
                , function(t) {
                    return 130012 == t.result ? !0 : void 0
                }
                , n)
            }
        }
        function o(t) {
            if (!dr()) {
                var n = t.dataset.code;
                e(function() {
                    pr("\u5956\u52b1\u9886\u53d6\u6210\u529f"),
                    Ui(function() {
                        _v.reload()
                    }
                    )
                }
                , E, n)
            }
        }
        N(n) && (r(N(n)),
        lt(t, "click", n, o.bind(this, N(n))))
    }
    function rc(n, e) {
        function i() {
            function t(t) {
                function n(t) {
                    return 10 > t ? "0" + t : t
                }
                function e(t) {
                    return {
                        hour: Math.floor(t / 36e5),
                        min: Math.floor(t % 36e5 / 6e4),
                        sec: Math.floor(t % 6e4 / 1e3)
                    }
                }
                var i = e(t)
                  , r = "";
                return r = "<span><span>" + n(i.hour) + "</span>:<span>" + n(i.min) + "</span>:<span>" + n(i.sec) + "</span></span>"
            }
            seckill = ph;
            var n = seckill.current;
            return 0 == n ? "\u8ddd\u79bb\u5f00\u59cb" + t(seckill.timestamps[0] - seckill.now) : 1 == n ? "\u8ddd\u79bb\u7ed3\u675f" + t(seckill.timestamps[1] - seckill.now) : 2 == n ? "\u6d3b\u52a8\u5df2\u7ed3\u675f" : ""
        }
        e.start = new Pv(Pv.parse(e.start)),
        e.end = new Pv(Pv.parse(e.end)),
        ph = $h,
        ph.onChange = function() {
            return ot(n, i()),
            ph.current == Oh ? ph.stop() : void 0
        }
        ,
        ph.onChangeScene = function(n) {
            z(t, "super.changescene", n)
        }
        ,
        kv(function() {
            ph.start(Pv.now(), [e.start, e.end])
        }
        , 0)
    }
    function oc(e, i) {
        function r() {
            a == Ih ? Y(e, "-disable") : a == Sh ? V(e, "-disable") : a == Oh && tt(e),
            su(i.book_id) ? (ot(e, "\u5df2\u8d2d\u4e70"),
            Y(e, "-disable")) : ot(e, "\u7acb\u5373\u62a2\u8d2d")
        }
        function o(t) {
            if (t.stopPropagation(),
            a === Sh && !su(i.book_id)) {
                var o = N(".book-cover .u-tagRT", R(e, ".u-book"))
                  , c = i.new_price !== n ? i.new_price : i.price;
                Qc(function() {
                    gr(i, o),
                    r()
                }
                , n, {
                    id: i.book_id,
                    book: i,
                    price: c
                })
            }
        }
        var a = null ;
        $e(e, {
            pay: o
        }).set(),
        H(t, "super.changescene", function(t) {
            a = t.data,
            r()
        }
        )
    }
    function ac(t, n) {
        var e = '<div class="new-page topic-page';
        n && (e += " -discount"),
        e += '">' + vc(t);
        var i = qa(t.hidden_info);
        return i && i.package && (t.discount = t.discount || +i.discount || 0,
        e += tpl__cart_bar(Ua, t)),
        e += '<div class="main-card topic-body"></div></div>'
    }
    function cc(t, n, e) {
        var i = "";
        return i += t.vertical || t.buttonTpl ? li(n, e || 0, t.price, t.buttonTpl, !!t.buttonTpl) : '<div class="card-cnt">' + ui(n, t.price) + "</div>"
    }
    function sc(t) {
        return '<a class="more-button" data-href="' + Xd(t) + '">\u66f4\u591a\u4e13\u9898</a>'
    }
    function uc(t) {
        return Pa(t) + Aa(t)
    }
    function lc(t) {
        return t.replace(/\<.*?id.*?\<\/.*?\>/g, "")
    }
    function dc(t) {
        for (var n, e = '<div class="new-page nested-topic" data-track="nt-' + t.list_id + '">' + vc(t), i = t.lists, r = -1, o = i.length - 1; o > r; ) {
            n = i[++r];
            var a = qa(n.hidden_info);
            a.timer ? e += pc(n, a.timer) : (e += '<section class="main-card" data-track="' + r + '">',
            n.label && (e += '<div class="channel-title topic-title"><h1',
            a.title_align && (e += ' style="text-align:' + a.title_align + '"'),
            e += ">" + n.label + "</h1><p>" + lc(n.description) + "</p>",
            a.tag && (e += '<img class="tag" src="' + a.tag + '">'),
            e += "</div>"),
            a.vertical = me(a.vertical, 3 >= n.books.length),
            e += cc(a, n.books) + fc(n, a) + "</section>",
            a.back && (e += '<section class="main-card" id="topic__goBack"><a href="duokan-reader://store/"><div class="bottom-button">\u8fd4\u56de\u4e66\u57ce</div></a></section>'))
        }
        return e += "</div>"
    }
    function fc(t, n) {
        var e = "";
        return t.more_url && (e += '<div class="card-tail',
        t.price && (e += " package-pay"),
        e += '"><a data-href="' + t.more_url + '" data-title="' + t.label + '">' + (t.price ? "\u4e00\u952e\u6253\u5305\u8d2d\u4e70(" + Qs(t.price / 100) + ")" : n.more_text || "\u67e5\u770b\u5168\u90e8") + "</a></div>"),
        e
    }
    function pc(t, n) {
        var e = '<section class="main-card">';
        t.label && (e += '<div class="channel-title topic-title"><div class="u-timer2"><em class="icon-clock"></em><span id="' + Le(rc, n) + '"></span></div><h1>' + t.label + "</h1><p>" + t.description + "</p></div>"),
        e += '<ul class="book-list">';
        for (var i, r = t.books, o = -1, a = r.length - 1; a > o; ) {
            i = r[++o];
            var c = n.price || [];
            i.new_price = c[o] || c[0] || i.new_price,
            e += '<li><div class="u-book -pay" data-href="' + hi(i) + '">' + _i(i, !0) + '<div class="info"><h3 class="title single-line">' + i.title + '</h3><p class="author">' + Qe(i) + '</p><div class="wrap"><p class="button" id="' + Le(oc, i) + '" vp-click="$root.pay($event)"></p>' + ti(i) + "</div></div></div></li>"
        }
        return e += "</ul>" + fc(t) + "</section>"
    }
    function vc(t) {
        var n = "";
        if (t.banner || t.description) {
            n += '<section class="main-card" id="' + Le(Ra, t) + '"><div class="u-topic">',
            t.banner && (n += oi(t.banner));
            var e = t.description ? t.description.replace(/<(a|div).*?id="topic__pay".*?>.*<\/(a|div)>/, "") : "";
            e && (n += '<div class="desc"><pre>' + e + "</pre></div>"),
            n += "</div></section>"
        }
        return n
    }
    function hc(t, n) {
        return _c(n.list_id, n.discount, n.items) + cc(t, n.items, 0, mc)
    }
    function _c(t, n, e) {
        for (var i, r = '<div id="' + Le(za, t, n.strategy, e) + '" class="discount-info main-card"><section class="float" vp-class="{ \'-show\': $root.showFloat }"><a class="pay" vp-show="!$root.purchasedAll" vp-class="{ \'-unavailable\': !$root.addedBookCount }" vp-click="$root.pay()">\u652f\u4ed8</a><p class="detail" vp-bind="$root.detail()"></p></section><section><p class="summary">\u4e13\u9898\u6ee1\u51cf\uff1a\u4e13\u9898\u5305\u7ed3\u7b97', o = n.strategy, a = -1, c = o.length - 1; c > a; )
            i = o[++a],
            r += "\uff0c\u6ee1" + i[0] + "\u51cf" + i[1];
        return r += '\u3002</p><p class="detail" vp-bind="$root.detail()"></p><a class="pay u-btn2" vp-show="!$root.purchasedAll" vp-class="{ \'-unavailable\': !$root.addedBookCount }" vp-click="$root.pay()">\u7acb\u5373\u652f\u4ed8</a></section></div>'
    }
    function mc(t) {
        return '<a id="' + Le(Fa, t) + '" vp-class="{ \'-added\': $root.added }" class="book-itembtn -discount" vp-custom="$root.custom()" vp-click="$root.toggle()"><em></em>\u4e13\u9898\u5305</a>'
    }
    function gc(t, n) {
        for (var e, i = '<div class="new-page topiclist-page -' + t + '"><ul class="topic-list">', r = n, o = -1, a = r.length - 1; a > o; )
            e = r[++o],
            i += '<li><div class="topic-item" data-href="' + Wd(t, e.reference_id) + '" data-track="' + o + '">',
            e.ad_name && "fiction" == t && (i += '<h3 class="title single-line">' + e.ad_name + "</h3>"),
            e.ad_copy && "fiction" == t && (i += '<p class="summary single-line">' + e.ad_copy + "</p>"),
            i += '<div class="img-container"><img class="cover" src="' + mi(e.ad_pic_url, "l", "s") + '" alt="' + e.ad_name + '"></div></div></li>';
        return i += "</ul></div>"
    }
    function bc(t, e, i, r) {
        i = i || E,
        r = r || E,
        ft("/hs/v1/nested_list/" + t, {
            data: {
                book_count: e
            },
            success: ve.bind(n, i, r),
            error: r
        })
    }
    function kc(t, e) {
        t = t || E,
        e = e || E,
        ft("/events/828_release", {
            type: "POST",
            data: pe(),
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function yc(t, e) {
        t = t || E,
        e = e || E,
        ft("/events/828_check", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function wc(t, e) {
        t = t || E,
        e = e || E,
        ft("/events/silent_encourage", {
            type: "POST",
            data: pe(),
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function xc(t, e) {
        t = t || E,
        e = e || E,
        ft("/events/silent_encourage_check", {
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function Tc(t, e, i) {
        ft("/events/common_gift", {
            type: "POST",
            data: r({
                code: i
            }, pe()),
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function Cc(t, e, i) {
        ft("/events/common_gift_check", {
            data: {
                code: i
            },
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function $c(t, n) {
        !function() {
            function e() {
                mn("");
                var e = "magazine" == n ? Za : bc;
                e(n, Ha(), function(e) {
                    mn(e.label),
                    "magazine" == n && (e.list_id = "mg"),
                    Oe(t, dc(e))
                }
                )
            }
            e()
        }
        ()
    }
    function Ic(t, n, e) {
        function i() {
            o() || (z(vv, "tab__click"),
            r(1),
            n())
        }
        function r(n) {
            return n ? Y(t, "-selected") : V(t, "-selected")
        }
        function o() {
            return F(t, "-selected")
        }
        e = e || 0,
        H(vv, "tab__click", r.bind(this, 0)),
        H(t, "click", i)
    }
    function Sc(t, n, e) {
        var i = "<!-- Tabs is [ { key: xxx, name: xxx }, ... ] -->";
        e = e || 0,
        i += '<ul class="u-tab">';
        for (var r, o = t, a = -1, c = o.length - 1; c > a; )
            r = o[++a],
            i += '<li class="u-active tab-item',
            e == a && (i += " -selected"),
            i += '" id="' + Le(Ic, n.bind(this, r, a)) + '">' + r.name + "</li>";
        return i += "</ul>"
    }
    function Oc(t, n, e) {
        var i = '<div class="rank-page">';
        if (t.length > 1) {
            i += "<!-- Tabs is [ { key: xxx, name: xxx }, ... ] -->",
            e = e || 0,
            i += '<ul class="single-filter ',
            3 == t.length && (i += "-three"),
            i += '">';
            for (var r, o = t, a = -1, c = o.length - 1; c > a; )
                r = o[++a],
                i += '<li  id="' + Le(Ic, n.bind(this, r, a)) + '" ',
                0 == a && (i += 'class="-selected" '),
                i += '><div  class="tag">' + r.name + "</div></li>";
            i += '</ul><div class="split-line"></div>'
        }
        return i += '<div class="tag-body"></div></div>'
    }
    function Ec(t, n, e) {
        function i() {
            return Ii(t, a.bind(this, o[0].key), Pc.bind(this, o, r.bind(this, t, e), e), e, ".tag-body")
        }
        function r(t, n, e) {
            Ge(N(".tag-body", vv), a.bind(this, e.key), li)
        }
        var o;
        "store" == n ? (n = "book",
        o = [{
            name: "\u70ed\u95e8",
            key: "-2"
        }, {
            name: "\u6700\u65b0",
            key: "-1"
        }]) : o = [{
            name: "\u70ed\u95e8",
            key: "click"
        }, {
            name: "\u6700\u65b0",
            key: "latest"
        }, {
            name: "\u5b8c\u7ed3",
            key: "finish"
        }];
        var a = Mc.bind(this, n, e);
        return i()
    }
    function Mc(t, e, i, r, o, a, c) {
        var s, u = {
            start: r,
            count: o,
            tag_name: e
        };
        "book" == t ? (s = "/store/v0/android/book/tag_list",
        u.order = i) : (s = "/store/v0/fiction/tag",
        u[i] = 1),
        ft(s, {
            data: u,
            success: ve.bind(n, a, c),
            error: c
        })
    }
    function Pc(t, n, e, i) {
        return '<div class="new-page tag-page"><div class="tag-top"><h3>' + e + "</h3><p>" + i.total + "\u672c\u4f5c\u54c1</p></div>" + Sc(t, n) + '<div class="tag-body"></div></div>'
    }
    function Ac(t, n, e, i, r) {
        var o = {};
        return o.book_id = e,
        o.coupon_id = r,
        o.payment_name = vs(r),
        ge(i) && !r ? o.price_only = 1 : o.price = i,
        lv.channel && (o.ch = lv.channel),
        ue(t, n, "/store/v0/payment/book/create", o)
    }
    function Lc(t, n, e, i, r) {
        var o = {};
        o.book_id = e,
        o.price = i,
        o.list_id = r,
        o.payment_name = vs(),
        lv.channel && (o.ch = lv.channel);
        var a = e ? "/store/v0/payment/cart/create" : "/store/v0/payment/book_list/create";
        return ue(t, n, a, o)
    }
    function Nc(t, n, e, i, r, o, a, c) {
        var s = {};
        return s.fiction_id = e,
        s.coupon_id = o,
        s.price = i,
        s.payment_name = vs(o),
        r ? s.chapter_id = r.join(",") : s.entire = 1,
        lv.channel && (s.ch = lv.channel),
        a && (s.auto = 1),
        c && (s.force = 1),
        ue(t, n, "/store/v0/payment/fiction/create", s)
    }
    function Bc(t, n, e, i, r) {
        var o = {};
        return o.fiction_id = e,
        o.chapters = i.join(","),
        lv.channel && (o.ch = lv.channel),
        r && (o.auto = 1),
        ue(t, n, "/store/v0/redeem/chapters", o)
    }
    function jc(t, e) {
        t = t || E,
        e = e || E,
        Wn(ve.bind(n, t, e))
    }
    function Rc(t, n, e, i) {
        var r = {};
        return null  !== t && (r.type = t),
        n && (r.reduced = n),
        ue(e, i, "/store/v0/award/list", r)
    }
    function Hc(t, e, i, r, o) {
        function a(t, n) {
            var e = n.item.toc || [];
            n.item.toc = y(e, function(t) {
                return !t.dummy && !t.hidden
            }
            ),
            t(n)
        }
        return r = r || E,
        o = o || E,
        He("/store/v0/fiction/detail/" + t, {
            data: {
                chapter_id: e,
                count: i
            },
            success: ve.bind(n, a.bind("", r), o),
            error: o
        })
    }
    function Dc(t, n, e, i, r, o) {
        var a = {};
        return a.balance = t,
        a.payment_name = i || "MIPAY",
        lv.channel && (a.ch = lv.channel),
        e ? a.trans_id = e : n && (a.code = n),
        "MIPAY" == a.payment_name && Mn() && (a.payment_name = "MIPAYSANDBOX"),
        ue(r, o, "/store/v0/payment/bc/recharge", a)
    }
    function zc(t, n) {
        var e = {};
        return ue(t, n, "/store/v0/payment/bc/recharge_list", e)
    }
    function Fc(t) {
        var n = "";
        return "bookCoupon" == t.key && (n += "\u60a8\u6709" + t.count + "\u5f20\u4e66\u5238\uff0c\u53ef\u4ee5\u76f4\u63a5\u5151\u6362"),
        "chapterCoupon" == t.key && (n += "\u60a8\u6709" + t.count + "\u5f20\u7ae0\u8282\u5238\uff0c\u53ef\u4ee5\u76f4\u63a5\u5151\u6362"),
        "coin" == t.key && t.balance > 0 && (n += "\u60a8\u6709" + t.balance + "\u4e66\u5e01\uff0c",
        n += t.balance > t.price ? "\u53ef\u4ee5\u76f4\u63a5\u62b5\u6263" : "\u53ef\u4ee5\u62b5\u6263" + pi(t.balance / 100) + ai()),
        "coin" == t.key && "\u4e0d\u4f7f\u7528" == t.label && (n += "\u60a8\u9009\u62e9\u4e0d\u4f7f\u7528\u4efb\u4f55\u4f18\u60e0"),
        n
    }
    function Yc(t) {
        var n = "";
        return "bookCoupon" == t.key && (n += "\u514d\u8d39\u5151\u6362\uff08\u6d88\u80171\u5f20\u4e66\u5238\uff09"),
        "chapterCoupon" == t.key && (n += "\u514d\u8d39\u5151\u6362\uff08\u6d88\u80171\u7ae0\u8282\u5238\uff09"),
        "coin" == t.key && (n += t.balance >= t.price ? "\u514d\u8d39\u5151\u6362\uff08\u6d88\u8017" + t.price + "\u4e66\u5e01\uff09" : t.balance ? "\u652f\u4ed8\u4f59\u989d" + pi((t.price - t.balance) / 100) + ai() : "\u652f\u4ed8" + pi(t.price / 100) + ai()),
        n
    }
    function Vc(t, n, e, i) {
        var r = '<section class="pay-card -batch"><div class="ttl">' + n.title + '</div><div class="info"><div class="price">\u4ef7\u683c\uff1a ' + pi(n.price / 100) + ai();
        if (newbie__isOldVersion() || (r += '<p class="text-link -obtain" vp-click="$root.viewTasks()">\u4e66\u5e01\u514d\u8d39\u62ff</p>'),
        r += '</div><div class="discount"><span vp-bind="$root.tips()"></span>',
        i && (r += '<span class="text-link" vp-click="$root.select();">\u66f4\u6539</span>'),
        r += '</div></div><div class="bottom-button" vp-click="$root.pay(1)"><span vp-bind="$root.confirm()"></span></div>',
        t.special)
            r += '<div class="divider"><span></span><p>\u6279\u91cf\u8d2d\u4e70</p></div><ul class="book-table"><li><div class="chapter" vp-click="$root.paySpecial()"><p>\u5168\u672c\u7279\u4ef7</p><span>' + t.special + ai() + "</span></div></li></ul>";
        else if (e && e.length && e[0].chapterIds.length > 1) {
            r += '<div class="divider"><span></span><p>\u6279\u91cf\u8d2d\u4e70</p></div><ul class="book-table">';
            for (var o, a = e, c = -1, s = a.length - 1; s > c; )
                o = a[++c],
                o = Gc(t, o.chapterIds),
                r += '<li><div class="chapter" vp-click="$root.payBatch(' + c + ')"><p>\u540e' + o.ids.length + "\u7ae0</p><span>" + (o.price / 100).toFixed(2) + ai() + "</span>",
                o.discount && (r += '<em class="u-tagRT">' + (10 * o.discount + " ") + "\u6298</em>"),
                r += "</div></li>";
            r += "</ul>"
        }
        return r += "</section>"
    }
    function Wc(t, n, e) {
        function i() {
            var i = Hc(e.id, e.chapterId, 150);
            Zc(function(r) {
                i.then(function(i) {
                    var o = i.item;
                    Kc(t, n, e.id, e.chapterId, o, r)
                }
                )
            }
            )
        }
        return i()
    }
    function Kc(t, n, e, i, r, o) {
        var a = qc(e, i, r, o);
        Uc(i, a[0], a[1], r, function(i) {
            return -1 == i ? Qc(t, n, {
                id: e,
                price: r.special,
                book: r
            }) : void fs(t, n, hs(e), i)
        }
        , n)
    }
    function Xc(t, n, e) {
        function i(t) {
            return -1 !== n.indexOf(t + "")
        }
        n = n || [];
        var r = [];
        return y(t, function(t) {
            t.price && !i(t.chapter_id) && e > r.length && r.push(t)
        }
        ),
        r
    }
    function Gc(t, n) {
        function e() {
            var t = [];
            return _(n, function(n) {
                var e = y(i, function(t) {
                    return t.chapter_id == n
                }
                );
                e.length && t.push(e[0])
            }
            ),
            t
        }
        var i = t.toc;
        return Jc(e(n), t.discount)
    }
    function Jc(t, n) {
        function e(t, n) {
            return x(t, function(t) {
                return t[n]
            }
            )
        }
        var i, r = e.bind(this, t), o = r("chapter_id"), a = r("price"), c = r("title"), s = a.reduce(function(t, n) {
            return n + t
        }
        , 0), u = s;
        
        if (n && 1e3 * n.end > Pv.now()) {
            var l = (n.strategy || []).sort(function(t, n) {
                return n[0] > t[0]
            }
            );
            k(l, function(n) {
                return t.length >= n[0] ? (i = (100 - n[1]) / 100,
                s = Math.ceil(s * i),
                !1) : !0
            }
            )
        }
        var d = 1 == t.length ? c[0] : c[0] + " \u81f3<br/>" + c.pop();
        return {
            ids: o,
            price: s,
            discount: i,
            origin: u,
            title: d
        }
    }
    function Uc(t, n, e, i, r, o) {
        function a() {
            r(l),
            p.close(!0)
        }
        function c() {
            r(-1),
            p.close(!0)
        }
        function s(t) {
            var n = e[t];
            l = n,
            r(l),
            p.close(!0)
        }
        function u() {
            p.hide();
            var t = x(n, function(t) {
                return t.label
            }
            );
            t.push("\u53d6\u6d88"),
            Fn({
                title: "\u8bf7\u9009\u62e9\u4f60\u8981\u4f7f\u7528\u7684\u798f\u5229",
                items: t
            }, function(t) {
                n[t.index] && (l = n[t.index]),
                p.show()
            }
            )
        }
        var l = n[0]
          , d = Gc(i, [t])
          , f = Vc(i, d, e, n.length > 1 && n[n.length - 1].balance)
          , p = Pi(f, {
            pay: a,
            payBatch: s,
            paySpecial: c,
            select: u,
            viewTasks: function() {
                p.close({
                    viewTasks: function() {
                        Jf(Gh())
                    }
                })
            },
            tips: function() {
                return Fc(l)
            },
            confirm: function() {
                return Yc(l)
            },
            onClose: function(t) {
                return t && t.viewTasks ? (t.viewTasks(),
                void (o && o())) : void (t || o && o())
            }
        })
    }
    function qc(t, n, e, i) {
        var r, o = i.balance, a = i.chapter, c = [];
        r = ws(t, [n], a),
        r && c.push(r);
        var s = Gc(e, [n]);
        r = xs(t, [n], s.price, o),
        r && c.push(r);
        var u = function(t, n) {
            var e = []
              , i = t.fiction_id
              , r = Xc.bind(this, t.toc, Cn(i).paid);
            return k([20, 50, 100], function(o) {
                var a = r(o)
                  , c = Jc(a, t.discount)
                  , s = xs(i, c.ids, c.price, n);
                return e.push(s),
                a.length >= o
            }
            ),
            e
        }
        (e, o);
        return [c, u]
    }
    function Zc(t) {
        var n = {
            0: "chapter",
            1: "cdkey",
            2: "balance"
        }
          , e = {
            balance: 0,
            chapter: 0
        }
          , i = t.bind(this, e);
        Rc(null , 1, function(t) {
            t.data && t.data.length && _(t.data, function(t) {
                e[n[t.type]] = t.total
            }
            ),
            i()
        }
        , i)
    }
    function Qc(t, n, e) {
        function i() {
            return e.book ? ts(t, n, o, e) : void r(function(i) {
                ts(t, n, o, {
                    id: e.id,
                    price: bi(ge(i.new_price) ? i.price : i.new_price),
                    book: i
                })
            }
            , n, e.id)
        }
        function r(n, e, i) {
            function r() {
                s++,
                s == u && (c && (a.new_price = +c.price),
                n(a))
            }
            var a, c;
            Gi(i, function(t) {
                a = t.item,
                r()
            }
            , e),
            Ac(function(t) {
                c = t.discount ? t : null ,
                r()
            }
            , function(n) {
                return O([10008, 10019], +n.result) ? (ps(t, o, {
                    id: i
                }, n),
                0) : void r()
            }
            , i);
            var s = 0
              , u = 2
        }
        n = n || E,
        t = Es(t, "pay"),
        e.price && (e.price = Math.round(100 * e.price));
        var o = hs(e.id, e.listId);
        return i()
    }
    function ts(t, n, e, i) {
        function r() {
            return cr() ? !0 : pv && "multiple_package" !== e ? !0 : void 0
        }
        if (!fv && !r())
            return dr();
        var o = cr() ? ns : es;
        return o(t, n, e, i)
    }
    function ns(t, n, e, i) {
        function r(t) {
            jc(function(n) {
                var e = Ts(i.id, i.price, n.balance, i.listId);
                t(e)
            }
            , function() {
                kn("\u4f59\u989d\u67e5\u8be2\u5931\u8d25, \u8bf7\u7a0d\u540e\u91cd\u8bd5")
            }
            )
        }
        function o(t, n) {
            Vn({
                url: f(as(e, i), uv + "/hs/store/dialog/pay"),
                buttons: ["\u53d6\u6d88", "\u786e\u5b9a"],
                height: 130,
                highlight: 1
            }, function(e) {
                e.result ? t() : n()
            }
            )
        }
        r(function(r) {
            var a = fs.bind("", t, n, e, r);
            return r.price ? (i.balance = r.balance || 0,
            void o(a, n)) : a()
        }
        )
    }
    function es(t, n, e, i) {
        is(function(r) {
            var o = fs.bind("", t, n, e);
            return 1 != r.length || r[0].price ? void rs(function(t) {
                o(t)
            }
            , n, r, as(e, i)) : o(r[0])
        }
        , e, i)
    }
    function is(t, n, e) {
        function i() {
            return s.coupon ? ys(e.id, s.coupon) : void 0
        }
        function o() {
            return xs(e.id, null , e.price, s.balance, e.listId, s.balanceUnknown)
        }
        var a = []
          , s = {};
        os(function(u) {
            s.balance = u.balance,
            s.balanceUnknown = u.balanceUnknown,
            s.coupon = u.coupon;
            var l = o()
              , d = c(n, "single") && !!e.price && i();
            d && (a.push(d),
            !s.balance && r(l, {
                label: "\u4e0d\u4f7f\u7528",
                blance: 0
            })),
            a.push(l),
            t(a)
        }
        , e.price)
    }
    function rs(t, n, e, i) {
        function r() {
            f.hide(1, function() {
                return Cs() && !f.paymentName && o() ? void Os(function(t, e) {
                    t || n(e)
                }
                ) : void n(f.paymentName)
            }
            );
            var n = function(n) {
                $s(n),
                t(s || e[0])
            }
        }
        function o() {
            return "coin" == s.key && s.price > s.balance
        }
        function a() {
            return "bookCoupon" == s.key
        }
        function c() {
            f.hide();
            var t = x(e, function(t) {
                return t.label
            }
            );
            t.push("\u53d6\u6d88"),
            Fn({
                title: "\u8bf7\u9009\u62e9\u4f60\u8981\u4f7f\u7528\u7684\u798f\u5229",
                items: t
            }, function(t) {
                e[t.index] && (s = e[t.index]),
                f.show()
            }
            )
        }
        var s = e[0]
          , u = e[e.length - 1]
          , l = e.length > 1 && 0 !== u.balance || "\u4e0d\u4f7f\u7528" == u.label
          , d = Bs(i, s, l)
          , f = Pi(d, {
            paymentName: Is(),
            getPaymentInfo: Ss,
            pay: r,
            needPayCash: o,
            payCoupon: a,
            select: c,
            viewTasks: function() {
                f.close({
                    viewTasks: function() {
                        Jf(Gh())
                    }
                })
            },
            tips: function() {
                return js(s, i)
            },
            confirm: function() {
                return Yc(s)
            },
            selectPay: function() {
                f.hide(0, function() {
                    Os(function(t, n) {
                        if (f.show(),
                        !t) {
                            var e = N(".recharge-selector__payment-icon", vv.body);
                            e.src = Ss(n).icon,
                            f.paymentName = n,
                            f.update()
                        }
                    }
                    )
                }
                )
            },
            onClose: function(t) {
                return t && t.viewTasks ? (t.viewTasks(),
                void (n && n())) : void (t || n({
                    result: 2
                }))
            }
        })
    }
    function os(t, n) {
        function e() {
            -1 != c && (xn({
                show: !1
            }),
            t(o),
            c = -1)
        }
        function i() {
            a++,
            a == c && (xn({
                show: !1
            }),
            t(o))
        }
        function r(t, n) {
            function e(t) {
                return kn("\u4e66\u5e01\u4f59\u989d\u67e5\u8be2\u5931\u8d25"),
                n && n(t),
                1
            }
            Rc(2, 1, function(n) {
                if (n.data && n.data.length) {
                    var i = n.data[0].total;
                    return t(i)
                }
                e(n)
            }
            , e)
        }
        xn({
            show: !0
        });
        var o = {
            balance: 0,
            coupon: null 
        }
          , a = 0
          , c = 2;
        r(function(t) {
            o.balance = t,
            i()
        }
        , function() {
            o.balanceUnknown = 1,
            e()
        }
        ),
        dh.hasAvail(gi(n), function(t, n) {
            o.coupon = t && n,
            i()
        }
        , e)
    }
    function as(t, n) {
        var e, i;
        if ("multiple_cart" === t) {
            var r = n.book || [];
            e = "\u8d2d\u7269\u8f66\u7ed3\u7b97",
            i = r[0].cover
        } else if ("multiple_discount" === t) {
            var r = n.book || [];
            e = r.map(function(t) {
                return t.title
            }
            ).join("\u3001"),
            e.length > 30 && (e = e.substr(0, 30) + "\u7b49"),
            e = "\u5171" + r.length + "\u672c\u56fe\u4e66\uff0c" + e,
            i = r[0].cover
        } else {
            var o = n.book;
            e = o.title,
            i = o.cover
        }
        return {
            title: e,
            price: n.price,
            cover: i,
            balance: n.balance
        }
    }
    function cs(t, n) {
        t = Es(t, "recharge"),
        n = n || E,
        ds(ss.bind("", t, n))
    }
    function ss(t, n, e) {
        function i(t) {
            var n = function(n) {
                $s(n),
                r(e[t])
            }
            ;
            a.hide(0, function() {
                return Cs() && !a.paymentName ? void Os(function(t, e) {
                    return t ? a.show() : void n(e)
                }
                ) : void n(a.paymentName)
            }
            )
        }
        function r(e) {
            _s(function(n) {
                a.close({
                    selected: 1
                }),
                t(n)
            }
            , function(e) {
                return 2 == e.result ? a.show() : (12 == e.result && (e.message = "\u5145\u503c\u6210\u529f\uff0c\u4f46\u4f59\u989d\u4e0d\u8db3\u652f\u4ed8\u8ba2\u5355\uff0c\u8bf7\u91cd\u8bd5"),
                Xn("reloadReadingPages") ? (An(),
                n(e)) : t(e),
                1)
            }
            , e.fee, e.code)
        }
        function o() {
            a.hide(0, function() {
                Os(function(t, n) {
                    if (a.show(),
                    !t) {
                        var e = N(".recharge-selector__payment-icon", vv.body);
                        e.src = Ss(n).icon,
                        a.paymentName = n,
                        a.update()
                    }
                }
                )
            }
            )
        }
        var a = us(e, Ms, null , {
            paymentName: Is(),
            getPaymentInfo: Ss,
            getIcon: function() {
                return Ss(a.paymentName).icon
            },
            selectPay: o,
            title: "\u4e66\u5e01\u5145\u503c",
            unclosable: !0,
            select: i,
            cancel: n,
            clazz: "-recharge"
        })
    }
    function us(t, n, e, i) {
        function o(t) {
            $e(t, {
                select: i.select
            }).set()
        }
        i = r(i, {
            cancelText: "\u53d6\u6d88",
            unclosable: !0,
            onClose: function(t) {
                !(t && t.selected) && i.cancel({
                    result: 2
                })
            }
        });
        var a = Pi(Ls(t, n, e || o, i), i);
        return a
    }
    function ls(t) {
        return 1e3 > t ? "http://image.read.duokan.com/mfsv2/download/fdsc3/p01u9S6LajBv/3tsGZz0bE9L1Za.png" : 2e3 > t ? "http://image.read.duokan.com/mfsv2/download/fdsc3/p01sruQkqh4z/PM1u3fp60lWK0V.png" : 5e3 > t ? "http://image.read.duokan.com/mfsv2/download/fdsc3/p01IkgdjXtFu/LkygO64yMfMzKT.png" : "http://image.read.duokan.com/mfsv2/download/fdsc3/p01HtpFk6CC1/n3lYeDx3Kp4qRg.png"
    }
    function ds(t) {
        function e() {
            if (++s != c)
                return 1;
            b(r, function(t, n) {
                return t.fee - n.fee
            }
            );
            var n = w(r, function(t) {
                return "TASK" == t.code
            }
            );
            if (o && !n) {
                o = {
                    fee: o.value,
                    reward: o.coins,
                    code: "TASK"
                };
                var e = C(r, w(r, function(t) {
                    return t.fee == o.fee
                }
                ));
                g(r, -1 == e ? 0 : e, 1, o)
            }
            return t && t(r),
            1
        }
        function i(t, e) {
            ft("/task/v2/user/list", {
                type: "POST",
                data: pe(),
                success: ve.bind(n, t, e),
                error: e
            })
        }
        var r, o, a = [{
            fee: 500,
            reward: 0,
            code: "CHARGE"
        }, {
            fee: 1e3,
            reward: 0,
            code: "CHARGE"
        }, {
            fee: 2e3,
            reward: 0,
            code: "CHARGE"
        }, {
            fee: 5e3,
            reward: 0,
            code: "CHARGE"
        }, {
            fee: 1e4,
            reward: 0,
            code: "CHARGE"
        }], c = 2, s = 0;
        zc(function(t) {
            return r = t.data || [],
            1 > r.length && (r = a),
            e()
        }
        , function() {
            return r = a,
            e()
        }
        ),
        i(function(t) {
            return o = w(t.data, function(t) {
                return 3 == t.type
            }
            ),
            e()
        }
        , function() {
            return e()
        }
        )
    }
    function fs(t, n, e, i) {
        if (i) {
            i.balance = -1 == i.balance ? 0 : i.balance;
            var r = ge(i.balance) ? 0 : i.price - i.balance
              , o = ps.bind("", t, e, i)
              , a = gs.bind("", o, n, r, e, i);
            return ms(o, a, e, i)
        }
    }
    function ps(t, n, e, i) {
        var r, o = e.id;
        "single_fiction" === n ? (r = {
            fictionId: o
        },
        e.chapterIds && (r.chapters = e.chapterIds)) : r = "single_book" === n ? {
            book: {
                bookUuid: o,
                orderUuid: i && i.order_id || -1
            }
        } : {
            book: {
                bookUuid: -1,
                orderUuid: -1
            }
        },
        Rn(r, t)
    }
    function vs(t) {
        return t ? "COUPON" : "ios" == dv ? Mn() ? "DC_SANDBOX" : "DC" : Mn() ? "BC_SANDBOX" : "BC"
    }
    function hs(t, n) {
        return t && !be(t) ? 10 > ("" + t).length ? "single_fiction" : "single_book" : !t && n ? "multiple_package" : t && !n ? "multiple_cart" : "multiple_discount"
    }
    function _s(t, n, e, i, r, o, a) {
        function c(t, n, e, i, r) {
            Kn({
                value: e
            }, function(e) {
                return 2 == e.result ? (n(e),
                1) : e.result ? pr(e) : void ms(t, n, i, r)
            }
            )
        }
        function s(t, n, e, i, r) {
            function o(t) {
                return 2 == t.result ? (a(t),
                !0) : a(t)
            }
            function a(t) {
                xn({
                    show: !1
                }),
                n(t)
            }
            return "WXPAY" == Is() && Gn("wakeUp", function() {
                xn({
                    show: !1
                }),
                Jn("wakeUp")
            }
            ),
            fv || pv && (!pv || "MIPAY" != Is()) ? Dc(e, i, r, Is(), function(n) {
                var e = {
                    msg: "\u652f\u4ed8\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u5f02\u5e38\u3002\n\u5982\u679c\u60a8\u672a\u652f\u4ed8\uff0c\u8bf7\u91cd\u65b0\u652f\u4ed8\u3002\u5982\u679c\u60a8\u5df2\u652f\u4ed8\uff0c\u8bf7\u7a0d\u540e\u5c1d\u8bd5\u91cd\u542f\u5e94\u7528\u540e\uff0c\u53bb\u4e2a\u4eba\u4e2d\u5fc3\u67e5\u770b\u662f\u5426\u652f\u4ed8\u6210\u529f\u3002",
                    btn: "\u786e\u8ba4"
                };
                Nn({
                    orderInfo: n,
                    continue: e,
                    payment_method: Is() || "MIPAY"
                }, function(e) {
                    vr(e, function(e) {
                        xn({
                            show: !1
                        }),
                        t(n)
                    }
                    , o)
                }
                )
            }
            , a) : (xn({
                show: !1
            }),
            Bn(function(t) {
                return 2 === t.result ? n(t) : kv(ur, 100)
            }
            ))
        }
        n = n || E,
        xn({
            show: !0,
            cancelable: !1
        });
        var u = cr() ? c.bind("", t, n, e, o, a) : s.bind("", t, n, e, i, r);
        return u()
    }
    function ms(t, n, e, i) {
        function r(n) {
            return xn({
                show: !1
            }),
            t(n)
        }
        function o(t) {
            return xn({
                show: !1
            }),
            n(t)
        }
        return xn({
            show: !0,
            cancelable: !1
        }),
        "single_fiction" === e ? "chapterCoupon" === i.key ? Bc(r, o, i.id, i.chapterIds) : Nc(r, o, i.id, i.price, i.chapterIds, i.couponId, null , i.isFree) : "single_book" === e ? Ac(r, o, i.id, i.price, i.couponId) : Lc(r, o, i.id, i.price, i.listId)
    }
    function gs(t, n, e, i, r, o) {
        var a = ks.bind(this, t, n, r.id);
        return bs(t, a, e, i, r, o) ? 1 : a(o)
    }
    function bs(t, e, i, r, o, a) {
        var c = +a.result;
        return 20019 == c ? (_s(t, e, i, n, a.trans_id, r, o),
        1) : 20020 == c ? (i ? _s(t, e, i, n, a.trans_id, r, o) : cs(ms.bind("", t, e, r, o), e),
        1) : void 0
    }
    function ks(t, n, e, i) {
        return i ? 0 == i.result ? (t(i),
        1) : O([10011, 10012], +i.result) ? (Hn({
            fictionId: e
        }, n),
        0) : 11e4 == +i.result ? (t(i),
        1) : O([10008, 10013, 10019], +i.result) ? (t(i),
        0) : 150001 == +i.result ? (kn("\u7ae0\u8282\u5238\u4e0d\u8db3\uff0c\u8bf7\u91cd\u65b0\u652f\u4ed8"),
        n(i),
        1) : n(i) : void n(Ah())
    }
    function ys(t, n) {
        if (n && n.length) {
            var e = n.length;
            return {
                key: "bookCoupon",
                id: t,
                couponId: n[0].coupon_id,
                count: e,
                label: "\u8d2d\u4e66\u5238\uff08\u4f59" + e + "\u5f20\uff09"
            }
        }
    }
    function ws(t, n, e) {
        return n && 1 == n.length && e ? {
            key: "chapterCoupon",
            id: t,
            chapterIds: n,
            count: e,
            label: "\u7ae0\u8282\u5238\uff08\u4f59" + e + "\u5f20\uff09"
        } : void 0
    }
    function xs(t, e, i, r, o, a) {
        return {
            key: "coin",
            id: t,
            chapterIds: e ? be(e) ? e : [e] : n,
            balance: r,
            balanceUnknown: a,
            price: i,
            listId: o,
            label: "\u4e66\u5e01\uff08\u4f59" + r + "\uff09"
        }
    }
    function Ts(t, n, e, i) {
        return {
            key: "cash",
            id: t,
            price: n,
            balance: e,
            listId: i
        }
    }
    function Cs() {
        return Xn("listPaymentMethods")
    }
    function $s(t) {
        return Cs() && Ss(t) ? It("paymentName", t) : void 0
    }
    function Is() {
        if (!Cs())
            return "MIPAY";
        var t = Yn()
          , n = $t("paymentName")
          , e = O(t, n);
        return e && n || ""
    }
    function Ss(t) {
        return Lh[t] || null 
    }
    function Os(t) {
        function n() {
            t(-1)
        }
        function e(n) {
            o.hide(1, t.bind(this, null , r[n]))
        }
        function i() {
            return r.map(Ss)
        }
        if (!Cs())
            return t(null , "MIPAY");
        var r = Yn()
          , o = Ni(i(r), As, null , {
            title: "\u9009\u62e9\u652f\u4ed8\u65b9\u5f0f",
            cancel: n,
            select: e
        })
    }
    function Es(t, n) {
        function e(t) {
            return {
                pay: "\u8d2d\u4e70\u7684\u56fe\u4e66",
                recharge: "\u8d2d\u4e70\u7684\u4e66\u5e01",
                gift: "\u9886\u53d6\u7684\u798f\u5229"
            }[t]
        }
        function i() {
            var t = +$t(r);
            return t && !Ci(t, Pv.now(), "day") ? !1 : (It(r, Pv.now()),
            !0)
        }
        if (t = t || E,
        !pv)
            return t;
        var r = "pay__anonymous_login_prompt";
        return i() ? Li.bind("", {
            prompt: a("\u60a8\u4ee5\u6e38\u5ba2\u8eab\u4efd{0}\u4ec5\u80fd\u4fdd\u5b58\u5728\u672c\u673a\uff0c\u66f4\u6362\u8bbe\u5907\u540e\u5c06\u65e0\u6cd5\u627e\u56de<br><br>\u5efa\u8bae\u60a8\u5c3d\u5feb\u767b\u5f55\u5c0f\u7c73\u8d26\u53f7\uff0c\u53ef\u6c38\u4e45\u4fdd\u5b58\u6570\u636e\u8bb0\u5f55\u3002", e(n)),
            confirmText: "\u9a6c\u4e0a\u767b\u5f55",
            cancelText: "\u7a0d\u540e\u63d0\u9192",
            unclosable: !0,
            confirm: fr,
            onClose: t
        }) : t
    }
    function Ms(t) {
        var n = '<p class="recharge-item"><img src="' + ls(t.fee) + '" class="coin"><span class="value">' + ki(t.fee) + '<span class="text">' + ci("") + '</span></span><span class="cost">' + gi(t.fee) + ai() + "</span>";
        return t.reward && (n += '<span class="text">+\u8d60' + ci(t.reward) + '</span><span class="reward-percent',
        "TASK" == t.code && (n += " -super"),
        n += '"><em>+' + $i(1 * t.reward / t.fee) + "</em></span>"),
        n += "</p>"
    }
    function Ps(t, n) {
        var e = '<section class="payv2-card -batch"><div class="title">\u6279\u91cf\u8d2d\u4e70\u7ae0\u8282</div>';
        if (n && n.length && n[0].chapterIds.length > 0) {
            e += '<ul class="candidate">';
            for (var i, r = n, o = -1, a = r.length - 1; a > o; )
                i = r[++o],
                i = Gc(t, i.chapterIds),
                e += '<li vp-click="$root.pay(' + o + ')"><div><p class="count">\u540e' + i.ids.length + '\u7ae0</p><span class="price">' + ci(i.price) + "</span>",
                i.discount && (e += '<em class="u-tagRT">' + (10 * i.discount + " ") + "\u6298</em>"),
                e += "</div></li>";
            e += "</ul>"
        }
        return e += "</section>"
    }
    function As(t) {
        return '<div class="payment-method"><img src="' + t.icon + '"/><span>' + t.name + "</span></div>"
    }
    function Ls(t, n, e, i) {
        for (var r, o = '<section class="select-menu recharge-selector" ><h3 class="title">' + i.title + '</h3><ul class="select-items">', a = t, c = -1, s = a.length - 1; s > c; )
            r = a[++c],
            o += '<li vp-click="$root.select(' + c + ')">' + n(r) + "</li>";
        return o += Ns() + '</ul><a class="button" vp-click="$root.close()">' + i.cancelText + "</a></section>"
    }
    function Ns() {
        var t = "";
        return Cs() && Is() && (t += '<li class="recharge-selector__info" vp-click="$root.selectPay()" vp-show="$root.needPayCash ? $root.needPayCash() : true"><p class="recharge-item">\u652f\u4ed8\u65b9\u5f0f\uff1a<img class="recharge-selector__payment-icon" src="' + Ss(Is()).icon + '"><span vp-bind="$root.getPaymentInfo($root.paymentName).name"></span><em class="recharge-selector__arrow-right"></em></p></li>'),
        t
    }
    function Bs(t, n, e) {
        return '<section class="select-menu book-pay"><h3 class="title book-pay__title">' + t.title + '</h3><ul class="select-items"><li class="select-items__pay-item"><span class="select-items__pay-item_title">\u4ef7\u683c\uff1a</span><span class="select-items__pay-item_price">' + gi(t.price) + ai() + '</span></li><li class="select-items__pay-item" vp-show="!!$root.tips()" vp-bind="$root.tips()"></li>' + Ns() + '<li class="recharge-selector__info" vp-show="$root.payCoupon()" vp-click="$root.select()"><p class="recharge-item">\u652f\u4ed8\u65b9\u5f0f\uff1a<img class="recharge-selector__payment-icon" src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01O98l1Yh7p/zPo66WHJb2gBRS.png">\u4e66\u5238\u5151\u6362<em class="recharge-selector__arrow-right"></em></p></li></ul><a class="book-pay__confirm-button" vp-click="$root.pay()"><span vp-bind="$root.confirm()"></span></a></section>'
    }
    function js(t) {
        var n = "";
        return "bookCoupon" == t.key && (n += '<span class="select-items__pay-item_title">\u4e66\u5238\uff1a</span>\u60a8\u6709' + t.count + "\u5f20\u4e66\u5238\uff0c\u53ef\u4ee5\u76f4\u63a5\u5151\u6362"),
        "coin" == t.key && (t.balanceUnknown ? n += '<span class="select-items__pay-item_title">\u4e66\u5e01\uff1a</span>...' : t.balance > 0 && (n += '<span class="select-items__pay-item_title">\u4e66\u5e01\uff1a</span>' + ci(t.balance) + "\u4f59\u989d\uff0c",
        n += t.price > t.balance ? '\u53ef\u62b5\u6263<span class="select-items__pay-item_price">' + gi(t.balance) + ai() + "</span>" : "\u53ef\u5168\u989d\u62b5\u6263")),
        n
    }
    function Rs(t, n, e) {
        function i(t) {
            Xn("confirmAutoPay") && Pn(e.id),
            t()
        }
        t = e.autopay ? i.bind(this, t) : t,
        n = n || E;
        var r = hs(e.id);
        return "coin" == e.payMethod ? fs(t, n, r, xs(e.id, e.chapterId, e.price)) : "coupon" == e.payMethod ? fs(t, n, r, ws(e.id, [e.chapterId], 1)) : "batch" == e.payMethod ? Hs(t, n, e.id, e.chapterId) : "special" == e.payMethod ? fs(t, n, r, xs(e.id, null , bi(e.special))) : Wc(t, n, e)
    }
    function Hs(t, n, e, i) {
        function r(t, n, i, r) {
            function o(t) {
                c.hide(1, a.bind(null , t))
            }
            function a(i) {
                Zc(function(o) {
                    fs(t, n, hs(e), xs(e, r[i].chapterIds, r[i].price, o.balance))
                }
                )
            }
            var c = Pi(Ps(i, r), {
                pay: o,
                onClose: function(e) {
                    return e ? t() : void n()
                }
            })
        }
        Hc(e, i, 150, function(e) {
            var i = e.item
              , o = Ds(i);
            return r(t, n, i, o)
        }
        )
    }
    function Ds(t, n) {
        var e = []
          , i = t.fiction_id
          , r = Xc.bind(this, t.toc, Cn(i).paid);
        return k([20, 50, 100], function(o) {
            var a = r(o)
              , c = Jc(a, t.discount)
              , s = xs(i, c.ids, c.price, n);
            return e.push(s),
            a.length >= o
        }
        ),
        e
    }
    function _s(n, e, i, r, o) {
        function c(n, e, i, r, o) {
            function c(t) {
                return bv(a("\u652f\u4ed8\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5[{0}]", t.result)),
                !0
            }
            var u = t.top.location.href;
            ge(hh) || (u = u + "&autopay=" + +hh),
            u += "&pay=1",
            -1 === u.indexOf("back=") && (u += "&back=home"),
            s(i, r, o, Is(), function(n) {
                return n.payment_url ? t.top.location.href = $v(n.payment_url) : void c()
            }
            , c, u)
        }
        function s(t, n, e, i, r, o, a) {
            var c = {};
            return c.balance = t,
            c.payment_name = i || "MIPAY_WEB",
            lv.channel && (c.ch = lv.channel),
            e ? c.trans_id = e : n && (c.code = n),
            "MIPAY_WEB" == c.payment_name && Mn() && (c.payment_name = "MIPAYSANDBOX_WEB"),
            c.return_url = a,
            ue(r, o, "/store/v0/payment/bc/recharge", c)
        }
        return c(n, e, i, r, o)
    }
    function zs(t, n, e) {
        var i = {};
        return i.fiction_id = t,
        i.d = 3,
        r(i, pe()),
        He("/store/v0/payment/fiction/chapter/list", {
            data: i,
            type: "POST",
            success: n,
            error: e
        }).then(function(t) {
            t.items && (t.items = Fs(t.items))
        }
        )
    }
    function Fs(t) {
        if (!t || !t.length)
            return [];
        var n = t.split(",");
        return T(n, function(t, n) {
            if (-1 === n.indexOf("-"))
                return t.concat([+n]);
            var e = n.split("-");
            return t.concat(ne(+e[0], +e[1] + 1))
        }
        , [])
    }
    function Wc(t, n, e) {
        var i = Hc(e.id, e.chapterId, 150)
          , r = zs(e.id);
        Zc(function(o) {
            ze([i, r]).then(function(i) {
                var r = i[0]
                  , a = i[1]
                  , c = r.item;
                Ys(e.id, a),
                Kc(t, n, e.id, e.chapterId, c, o)
            }
            )
        }
        )
    }
    function Ys(t, n) {
        if (n && n.items) {
            var e = Cn(t);
            e.paid = x(n.items, function(t) {
                return t + ""
            }
            )
        }
    }
    function Hc(t, e, i, r, o) {
        function a(n, e) {
            var i = e.item.toc || [];
            e.item.toc = y(i, function(t) {
                return !t.dummy && !t.hidden
            }
            );
            var r = n.bind("", e);
            return c ? void c.then(function(n) {
                Ys(t, n),
                r()
            }
            , r) : r()
        }
        r = r || E,
        o = o || E;
        var c;
        return 150 != i || lr() || (c = zs(t)),
        He("/store/v0/fiction/detail/" + t, {
            data: {
                chapter_id: e,
                count: i
            },
            success: ve.bind(n, a.bind("", r), o),
            error: o
        })
    }
    function Vs() {
        if (_v.href.match("download") || vv.referrer.match("download")) {
            Me(vv.body, Ks());
            var t = N(".download-tip-black")
              , n = N(".close", t);
            H(n, "click", function() {
                tt(t)
            }
            ),
            H(N(".download-tip__download", t), "click", Ws),
            N(".float-reminder") && (N(".float-reminder").style.bottom = "80px")
        }
    }
    function Ws() {
        var n = "http://www.duokan.com/download";
        /MicroMessenger/.test(t.navigator.userAgent) && (n = "http://a.app.qq.com/o/simple.jsp?pkgname=com.duokan.reader"),
        (/MiuiBrowser/.test(t.navigator.userAgent) || t.market) && (n = "http://app.xiaomi.com/details?appId=1108&back=true&ref=" + Cv(_v.href)),
        _v.href = n
    }
    function Ks() {
        return '<div class="fixed-wrapper"><div class="download-tip-black"><div class="close image-icon"><img src="http://image.read.duokan.com/mfsv2/download/s010/p01ANN3XpKL0/Sc4PiZXNCumgwj.png"></div><div class="logo image-icon"><img src="http://image.read.duokan.com/mfsv2/download/s010/p01uEs3bj9CE/fcVr7Kv6gw3DlQ.png"></div><div class="info"><p class="ttl">\u591a\u770b\u9605\u8bfb\u5ba2\u6237\u7aef</p><p>\u6d77\u91cf\u597d\u4e66\uff0c\u6781\u81f4\u4f53\u9a8c\uff01</p></div><a class="button download-tip__download">\u7acb\u5373\u6253\u5f00</a></div></div>'
    }
    function Xs(t, n) {
        mn("\u504f\u597d"),
        Tn(!1),
        Oe(t, Zs(n))
    }
    function Gs(t, n) {
        var e = {
            type: parseInt(lv.user_type)
        }
          , i = $e(t, e);
        i.set({
            user_type: lv.user_type,
            select: function(t) {
                e.type = t,
                i.set()
            },
            confirm: function(t) {
                return 0 == e.type ? (pr("\u8bf7\u9009\u62e9\u60a8\u7684\u504f\u597d\uff01"),
                void t.stopPropagation()) : (En(e.type),
                Js(e.type),
                n ? n() : (pr("\u60a8\u7684\u504f\u597d\u5df2\u66f4\u6539"),
                void yn()))
            }
        })
    }
    function Js(t) {
        lv.user_type = "" + t,
        rn()
    }
    function Us() {
        return d(_v.search.substr(1)).user_type
    }
    function qs() {
        var t = Us();
        return t && Js(t),
        t
    }
    function Zs(t) {
        return '<div class="new-page prefer-page" id="' + Le(Gs) + '"><div class="prefer-title"><h3>\u8bf7\u9009\u62e9\u60a8\u7684\u9605\u8bfb\u504f\u597d</h3><p>\u591a\u770b\u6839\u636e\u504f\u597d\u5411\u60a8\u63a8\u8350\u4e66\u7c4d</p></div><ul class="prefer-radio"><li vp-click="$root.select(3)" vp-class="{\'-crt\' : $root.type == 3}"><div class="circle sprites prefer-fiction"></div><div class="box"></div><div class="label"><p class="title">\u7f51\u6587\u7537\u751f\u9891\u9053</p></div></li><li vp-click="$root.select(4)" vp-class="{\'-crt\' : $root.type == 4}"><div class="circle sprites prefer-female"></div><div class="box"></div><div class="label"><p class="title">\u7f51\u6587\u5973\u751f\u9891\u9053</p></div></li></ul><a><div class="bottom-button -fixed" vp-click="$root.confirm($event)" vp-class="{\'-disable\' : $root.type == 2}">\u786e\u5b9a</div></a></div>'
    }
    function Qs(t) {
        return (t % 1 === 0 ? t : t.toFixed(2)) + ai()
    }
    function tu(t) {
        return '<section class="main-card">' + Mi(nu(t), 1, "<h3>\u7c7b\u522b\u6807\u7b7e</h3>") + "</section>"
    }
    function nu(t) {
        var e, i = '<ul class="m-tag -color">', r = t.fiction_id ? "fiction" : "store";
        if (t.categories)
            for (var o, a = t.categories, c = -1, s = a.length - 1; s > c; ) {
                o = a[++c];
                var u = t.fiction_id ? o.category_id : o.sid;
                if (!t.fiction_id || u >= 1e6) {
                    e = o,
                    i += '<li class="u-tag" data-href="' + Fd(r, u) + '" title="' + e.label + '">' + e.label + "</li>";
                    break
                }
            }
        if (t.tags)
            for (var l, d = e == n ? 3 : 2, f = t.tags, c = -1, p = f.length - 1; p > c && (l = f[++c],
            !(0 >= d)); )
                (e == n || l != e.label) && (d--,
                i += '<li class="u-tag" data-href="' + Yd(r, l) + '" title="' + l + '">' + l + "</li>");
        return i += "</ul>"
    }
    function eu(t, n, e) {
        var i = "";
        t = t.book || t;
        var r = hi(t);
        return i += '<div class="u-book ' + n + '" ',
        r && (i += 'data-href="' + hi(t) + '" ' + Ou("b*" + Eu(t)) + ' expose=""'),
        i += ">" + _i(t, !0) + '<div class="info"><h3 class="title">' + t.title + "</h3>",
        e && (i += e),
        i += "</div></div>"
    }
    function iu(t, n, e, i) {
        var r = '<section class="main-card -folder">';
        return t && (r += '<div class="u-title"><h1>' + t + "</h1></div>"),
        n && (r += '<div class="cnt">' + n + "</div>"),
        i && (r += i),
        e && (r += '<div class="tail">' + e + "</div>"),
        r += "</section>"
    }
    function ru(t) {
        var n = "";
        return t.author_books_total > 4 && (n += '<div data-href="' + Vd("fiction", t.authors) + '">\u67e5\u770b\u5168\u90e8</div>'),
        n
    }
    function ou(t) {
        var n = ""
          , e = 1 === t.owner ? t.fiction_id + "-" + t.owner + "-" + t.owner_uri : t.fiction_id;
        return n += '<div data-href="' + Zd("fiction", e, {
            onlyCatalog: 1,
            chapter_id: t.latest_id
        }) + '">',
        n += t.updated ? "\u6700\u65b0\uff1a" + t.latest + " \u66f4\u65b0\u4e8e " + xi(t.updated) : "\u67e5\u770b\u76ee\u5f55",
        n += "</div>"
    }
    function au(t) {
        var n = '<ul class="text">';
        return t.rights && (n += "<li>\u7248\u6743\uff1a" + t.rights + "</li>"),
        n += "</ul>"
    }
    function cu(t) {
        return ge(t) ? !1 : ("" + t).length > 10
    }
    function su(t) {
        if (!cu(t))
            return !1;
        var n = In(t);
        return n ? !!n.purchased : !1
    }
    function uu(t) {
        return ge(t) ? 0 : t.fiction_id ? t.special : ge(t.new_price) ? t.price : t.new_price
    }
    function lu(t) {
        var n = t - Pv.now()
          , e = "";
        if (0 > n)
            return e = "\u9650\u65f6\u7545\u8bfb\u5df2\u7ecf\u7ed3\u675f\uff0c\u8d2d\u4e70\u540e\u53ef\u7ee7\u7eed\u9605\u8bfb";
        var i = Math.floor(n / 3600 / 1e3 / 24);
        if (e = "\u9650\u65f6\u7545\u8bfb\u8fd8\u5269",
        i)
            e += i + "\u5929";
        else {
            var r = Math.floor(n / 3600 / 1e3);
            if (r)
                e += r + "\u5c0f\u65f6";
            else {
                var o = Math.floor(n / 60 / 1e3);
                o >= 15 ? e += o + "\u5206\u949f" : e = "\u9650\u65f6\u7545\u8bfb\u5373\u5c06\u7ed3\u675f"
            }
        }
        return e
    }
    function du(t) {
        return cu(t.fiction_id) ? void 0 : t.price
    }
    function fu(t) {
        var n;
        return fu.__cache__ || (fu.__cache__ = {}),
        fu.__cache__[t.book_id] ? fu.__cache__[t.book_id] : (fu.__cache__[t.book_id] = 0,
        Xn("getPackageType") && t.opf ? (n = Sn(t.book_id, t.features),
        "NONE" === n ? kn("\u8bf7\u5347\u7ea7\u591a\u770b\u9605\u8bfb\u81f3\u6700\u65b0\u5ba2\u6237\u7aef\u4ee5\u9605\u8bfb\u672c\u4e66") : "EPUB_OPF" === n && (fu.__cache__[t.book_id] = 1),
        fu.__cache__[t.book_id]) : fu.__cache__[t.book_id])
    }
    function pu(t, n) {
        var e = $e(t)
          , i = In(n.book_id);
        e.set({
            isPaid: function() {
                return !!i.purchased
            }
        }),
        Gn("wakeUp", function() {
            i = In(n.book_id),
            e.set()
        }
        )
    }
    function vu(t) {
        return t = m(t || [], 0),
        t = Nh.concat(t),
        hu(t)
    }
    function hu(t) {
        var n = [];
        t = x(t, function(t) {
            var e = (t + "").split("*");
            return e[1] && n.push(e[1]),
            e[0]
        }
        );
        var e = t.join(".")
          , i = Bh[e];
        return ge(i) ? i = 0 : i += 1,
        Bh[e] = i,
        t.push(i),
        t.join(".") + (n.length ? "*" + n.join("*") : "")
    }
    function _u(t) {
        Nh = m(arguments, 0)
    }
    function mu(t) {
        Nh.push(t)
    }
    function gu() {
        return Nh.pop()
    }
    function bu() {
        Nh = [],
        Bh = {}
    }
    function ku() {
        return Rh
    }
    function yu(t) {
        return Rh = jh = t
    }
    function wu(t) {
        return Rh = jh ? jh + "!" + t : t
    }
    function xu(t, n, e) {
        var i = We(t, function() {
            Tu(e + (n ? "~" + n : "")),
            i.clear()
        }
        , -50, 2e3, !0)
    }
    function Tu(t) {
        Dh.push(t),
        Dh.timer && yv(Dh.timer),
        Dh.timer = kv(function() {
            Ue("ex", Dh.join("!")),
            Dh = []
        }
        , 10)
    }
    function Cu(t, n, e) {
        function i(t) {
            var n = function(t) {
                var n = t.match(/[?#]/) ? "&" : "?";
                return t += n + "_t=" + Cv(ku())
            }
            ;
            if (!t.match("multi_url"))
                return n(t);
            var e = t.split(/[?#]/)
              , i = e[0]
              , r = d(e[1] || "")
              , o = r.multi_url.split(",")
              , a = x(o, n);
            return r.multi_url = a.join(","),
            f(r, i)
        }
        Jf = L(Jf, function(t) {
            var n = t.args[0];
            t.args[0] = i(n)
        }
        ),
        delete Hh["data-href"]
    }
    function $u() {
        function t() {
            var t = _v.href.match(/_t=(.*?)(?:$|&)/);
            return yu(t ? $v(t[1]) : "")
        }
        function n() {
            H(vv, "click", function(t) {
                var n = R(t.target, "[" + zh + "]");
                n && wu(n.getAttribute(zh))
            }
            , !0)
        }
        function e() {
            oe(function() {
                t(),
                bu()
            }
            )
        }
        t(),
        n(),
        Iu(),
        H(vv, "DOMNodeInserted", M(Iu, 0)),
        Cu(),
        e()
    }
    function Iu() {
        var t = B("[" + Fh + "]");
        _(t, function(t) {
            Su(t),
            t.removeAttribute(Fh)
        }
        )
    }
    function Su(t) {
        var n, e;
        for (n in Hh)
            if (e = Hh[n],
            j(t, "[" + n + "]"))
                try {
                    e(t, t.getAttribute(n), t.getAttribute(zh))
                } catch (t) {
                    gv.error("_da__parse", t)
                }
    }
    function Ou(t, n) {
        return a("da={0} {1} {2}", vu(be(t) ? t : [t]), Fh, n ? "" : "expose")
    }
    function Eu(t) {
        return t.fiction_id ? "2_" + t.fiction_id : t.book_id ? "1_" + t.book_id : t.source && t.source_id ? a("{0}_{1}", t.source, t.source_id) : ""
    }
    function Mu(t) {
        return t.type && t.id ? a("{0}_{1}", t.type, t.id) : ""
    }
    function Pu(t) {
        function n() {
            Y(t, "-newbie"),
            H(t, "click", function(t) {
                return t.stopPropagation(),
                fv ? void Oi(function(t) {
                    return t ? Lu() : void i(function(t) {
                        ju(t.data, !1, Au)
                    }
                    , Au)
                }
                ) : Au()
            }
            )
        }
        function e() {
            H(t, "click", Lu)
        }
        function i(t, n) {
            rr(t, n, 100, 1)
        }
        function r() {
            var t = $r().start_time
              , n = Pv.parse(t || "2016/05/27 10:00")
              , e = Pv.parse("2016/05/31 00:00");
            return Pv.now() >= n && e >= Pv.now()
        }
        return r() ? (Y(t, "-anna4"),
        void H(t, "click", function(t) {
            t.stopPropagation(),
            Jf("/subtle/event/4th-day/dist/index.html?from=float_reminder")
        }
        )) : void Oi(function(t) {
            return t ? e() : void n()
        }
        )
    }
    function Au() {
        Ue("nbc", "show"),
        Fe("            @-webkit-keyframes customIn {                0% { -webkit-transform: translate(115px, 240px) scale(0, 0); }                100% { -webkit-transform: translate(0, 0) scale(1, 1); }            }            @-webkit-keyframes customOut {                0% { -webkit-transform: translate(0, 0) scale(1, 1); }                100% { -webkit-transform: translate(115px, 240px) scale(0, 0); }        }");
        var t = Pi(Bu(), {
            isCenter: !0,
            customAnimation: !0,
            viewTask: function() {
                t.close({
                    onClose: function() {
                        Lu()
                    }
                })
            },
            onClose: function(t) {
                Ue("nbc", t ? "go" : "close"),
                t && t.onClose()
            }
        })
    }
    function Lu() {
        Ue("nbc", 2),
        Jf(Gh())
    }
    function Nu() {
        var t = "";
        return cr() || (t += '<div class="float-reminder" id="' + Le(Pu) + '"></div>'),
        t
    }
    function Bu() {
        return '<div class="newbie-gift" data-track="m.ft"><p class="newbie-gift__reward"><em>+500</em>' + ci("") + '</p><p class="newbie-gift__summary"><span>\u606d\u559c\u60a8\u83b7\u5f97500\u4e66\u5e01\u65b0\u624b\u793c\u5305</span><span>\u53ef\u5728\u4e66\u57ce\u65e0\u95e8\u69db\u4efb\u610f\u6d88\u8d39~</span></p><a class="newbie-gift__button" vp-click="$root.viewTask()">\u7acb\u5373\u67e5\u770b</a><p class="newbie-gift__tip">\u66f4\u591a\u798f\u5229\uff0c\u660e\u5929\u518d\u6765\u9886\uff01</p></div>'
    }
    function ju(t, i, r) {
        function o(t) {
            var e = t.shift();
            e ? Pi(Ru(e, i, t.length), {
                coins: a,
                showTotalCoins: "\u4e66\u5e01" === e.name,
                gotoMarketCoins: s,
                view: Jf.bind(n, !i && a >= s ? "duokan-reader://store" : "/hs/user/task"),
                isCenter: !0,
                unclosable: !0,
                onClose: o.bind(n, t)
            }) : r && r()
        }
        var a = 0
          , c = []
          , s = 200
          , u = {
            coins: "\u4e66\u5e01",
            chapters: "\u7ae0\u8282\u5238",
            days: "\u7545\u8bfb",
            coupons: "\u4e66\u5238"
        };
        return Rc(2, null , function(n) {
            n = n.data,
            a = n.length && Ri(n),
            be(t) ? c = t.concat() : e(t, function(t, n) {
                c.push({
                    name: u[t],
                    value: n
                })
            }
            ),
            o(c)
        }
        )
    }
    function Ru(t, n, e) {
        var i = '<div class="claimed-gift"><h3 class="title">\u606d\u559c\u60a8\u83b7\u5f97</h3><p class="gift">';
        return t.physical ? i += t.name : t.value && (i += "" + t.name + " + " + t.value),
        i += '</p><p class="coins" vp-show="$root.showTotalCoins">\u60a8\u5f53\u524d\u5171\u6709<em vp-bind="$root.coins"></em>\u4e66\u5e01</p>',
        e ? i += '<a class="button" vp-click="$root.close()">\u4e0b\u4e00\u4e2a</a>' : (i += n ? '<a class="button" vp-click="$root.view()">\u83b7\u53d6\u66f4\u591a</a>' : '<a class="button" vp-custom="$root.coins < $root.gotoMarketCoins && $el.remove()" vp-click="$root.view()">\u53bb\u4e70\u4e66</a>',
        i += '<a class="button" vp-click="$root.close()">\u7acb\u523b\u6536\u4e0b</a>'),
        i += "</div>"
    }
    function Hu(t, n) {
        ue(t, n, "/store/v0/anonymous/status")
    }
    function Du(t, n) {
        ue(t, n, "/store/v0/anonymous/migrate")
    }
    function zu() {
        function t(t) {
            return 1 == t.status ? n() : void un()
        }
        function n() {
            var t = a("\u672c\u53f0\u8bbe\u5907\u4e0a\u4fdd\u7559\u4e86\u6e38\u5ba2\u6570\u636e\uff0c\u662f\u5426\u5408\u5e76\u81f3\u5f53\u524d\u767b\u5f55\u5c0f\u7c73\u8d26\u53f7{0}\uff1f", lv.user_id)
              , n = lv.device_hash.substr(0, 10)
              , i = a("\u6ce8\uff1a\u6e38\u5ba2{0}\u6570\u636e\u5305\u542b\u8d2d\u4e70\u8bb0\u5f55\u3001\u4e66\u5e01\u798f\u5229\u3001\u4efb\u52a1\u8fdb\u5ea6", n);
            Li({
                clazz: "confirm-menu_merge-user",
                title: t,
                prompt: i,
                confirmText: "\u7acb\u5373\u5408\u5e76",
                cancelText: "\u4e0d\u5408\u5e76\uff0c\u4ec5\u767b\u5f55",
                notOnCloseConfirm: !0,
                confirm: e,
                cancel: un
            })
        }
        function e() {
            Du(function() {
                kn("\u6570\u636e\u5408\u5e76\u6210\u529f"),
                ur()
            }
            , function() {
                kn("\u6570\u636e\u5408\u5e76\u5931\u8d25")
            }
            ),
            un()
        }
        return Hu(t)
    }
    function Fu() {
        return '<div class="Swipe Swipe_full"><div></div></div>'
    }
    function Yu(t) {
        return '<div class="top"><a id="' + Le(Hf) + '" class="top__back"></a><span class="top__title">' + u(t) + '</span><a id="' + Le(Df) + '" class="header-home"></a></div>'
    }
    function Vu(t, n) {
        return Yu(t) + '<div class="top__bd">' + (n || "") + "</div>"
    }
    function Wu(t) {
        return Vu(t, jt())
    }
    function Ku(t) {
        return '<div class="header-tab"><div class="Swipe-tab Swipe-tab_2 f-cb"><a href="javascript:"></a><a href="javascript:"></a></div><em class="header-user" data-href="' + tf() + '"></em><em class="header-checkin" data-href="' + ef() + '"></em></div><div class="Swipe Swipe_full container-scroll"><div><div></div><div></div></div></div>'
    }
    function Xu(t) {
        for (var n, e = '<div class="new-page special-page">', i = t.lists, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += '<section class="main-card">',
            n.name && (e += '<div class="channel-title"><h1>' + n.name + "</h1></div>"),
            e += "<div>" + li(n.items, 0, !1, ko) + "</div>",
            n.url && (e += '<div class="card-tail"><a data-href="' + n.url + '" data-title="' + n.name + '">\u67e5\u770b\u66f4\u591a</a></div>'),
            e += "</section>";
        return e
    }
    function Fr() {
        return ""
    }
    function ci(t) {
        var n = "";
        return n += cr() ? (gi(t) || "") + "\u9605\u7c73" : ge(t) ? "" : t + "\u4e66\u5e01"
    }
    function $i(t) {
        return a("{0}%", Math.round(100 * t))
    }
    function Gu() {
        return qt() + '<div class="Pull-scroll"><div class="wrap"></div></div>'
    }
    function Ju(t, e, i) {
        function r() {
            ot(t, jt()),
            Ji(e, function(n) {
                var e = n.item;
                mn(e.title),
                Oe(t, qu(e, n.related, n.author_books, o)),
                a()
            }
            , Kt.bind(n, t, r))
        }
        function o(t, n) {
            comment__bookComment(n, t)
        }
        function a() {
            if (_v.href.match("download") || vv.referrer.match("download")) {
                var n = t.parentNode;
                Me(n, book__downloadTip());
                var e = N(".book__download-tip", n)
                  , i = N(".close", e);
                H(i, "click", function() {
                    tt(e)
                }
                ),
                N(".float-reminder").style.bottom = "80px"
            }
        }
        return mn(""),
        r()
    }
    function Uu(t, e) {
        function i(t) {
            return t.limited_time && !!t.price && !t.owner && t.allow_free_read
        }
        function r(t, n) {
            return !s.get("hasPay") && n.special
        }
        function o() {
            e.special && Nc(E, function(t) {
                return s.set({
                    hasPay: 10019 == t.result
                }),
                1
            }
            , u, -1)
        }
        function a(t) {
            var n = "" + t.fiction_id;
            !Of(n) && t.toc.length && Ef(n, t.toc[0].chapter_id),
            Dn({
                fictionId: n
            })
        }
        function c(t) {
            return "ios" == dv && 1 == t.owner
        }
        var s = $e(t)
          , u = e.fiction_id
          , l = !1;
        Jl(null , u, s),
        s.set({
            readBook: a.bind(this, e),
            needPay: r.bind(this, u, e),
            getLimitText: function() {
                return lu(e.limited_time)
            },
            pay: M(function() {
                Qc(o, n, {
                    id: e.fiction_id,
                    price: e.special,
                    book: e
                })
            }
            , 200),
            payText: function() {
                return l ? "\u514d\u8d39\u5151\u6362" : e.special + ai()
            },
            isLimit: i.bind(this, e),
            is10086: function() {
                return 1 === e.owner
            }
        }),
        dh.hasAvail(e.special, function(t) {
            l = t,
            s.set()
        }
        .bind(this)),
        c(e) && ot(t, "\u6682\u672a\u4e0a\u67b6"),
        o()
    }
    function Dn() {
        var t = arguments[0].fictionId;
        Jf(Qd(t))
    }
    function qu(t, n, e, i) {
        var r = '<div class="new-page book-page" data-track="dt"><section class="main-card">' + tl(t) + "</section>" + Zu(t);
        return (t.categories || t.tags) && (r += tu(t)),
        e && e.length && (r += iu("\u4f5c\u8005\u5176\u5b83\u56fe\u4e66", ui(e), ru(t))),
        n && n.length && (r += iu("\u559c\u6b22\u672c\u4e66\u7684\u4eba\u4e5f\u559c\u6b22", ui(n))),
        r += iu("\u56fe\u4e66\u4fe1\u606f", au(t)) + "</div>"
    }
    function Zu(t) {
        var n = '<section class="main-card" style="margin-top:-10px"><div class="book-dash"><div id="' + Le(Uu, t) + '"><div class="wrap"><ul class="btn-group" vp-show="$root.needPay()"><li><a class="u-btn2" vp-click="$root.readBook()"><span class="book-dash-text"></span></a></li><li><a class="u-btn3" vp-click="$root.pay()" vp-bind="$root.payText()">' + t.special + ai() + '</a></li></ul><ul class="btn-group" vp-show="!$root.needPay() && !$root.is10086()"><li class="u-btn2" vp-click="$root.readBook()"><span class="book-dash-text"></span></li><li><a class="u-btn3" vp-click="$root.download()" vp-bind="$root.downloadText()">\u4e0b\u8f7d</a></li></ul><ul class="btn-group" vp-show="!$root.needPay() && $root.is10086()"><li class="u-btn2" vp-click="$root.readBook()">\u5f00\u59cb\u9605\u8bfb<span class="tip-10086">\uff08\u6765\u81ea\u548c\u9605\u8bfb\uff09</span></li></ul></div><div class="wrap2" vp-show="$root.isLimit()">';
        
        return n += '<div class="m-limitinfo"><em class="icn-clock"></em><span vp-bind="$root.getLimitText()"></span></div></div></div></div>' + Mi(t.content || t.intro, 0, null , ou(t)) + "</section>"
    }
    function Qu(t) {
        return '<span class="price__old">' + (t.price * t.word_count / 1e5).toFixed(0) + '\u5143</span> <span class="price__free">\u514d\u8d39</span>'
    }
    function tl(t) {
        var n = "";
        return t.url = "",
        n += eu(t, "-detail", nl(t))
    }
    function nl(t) {
        var n = "";
        return n += '<p class="author">' + Qe(t, !0) + '</p><div class="u-grade"><div class="grade grade' + ni(t.score) + '"></div><span class="read">',
        n += t.score_count ? t.score_count + "\u4e2a\u8bc4\u4ef7" : "\u6682\u65e0\u8bc4\u4ef7",
        n += "</span></div>",
        t.special ? n += '<p class="price -special">\u4ef7\u683c\uff1a' + t.special + ai() + "\u5168\u672c</p>" : 2 == t.owner && t.has_ad ? n += '<p class="price">\u5168\u672c\u4ef7\u683c\uff1a' + Qu(t) + "</p>" : t.price && (n += '<p class="price">\u4ef7\u683c\uff1a' + ci(t.price) + "/\u5343\u5b57</p>"),
        n += '<p class="count">\u5b57\u6570\uff1a' + (t.word_count / 1e4).toFixed(0) + "\u4e07\u5b57",
        t.owner || (n += t.finish ? '<span class="u-booktag">\u5df2\u5b8c\u7ed3</span>' : '<span class="u-booktag -serial">\u8fde\u8f7d\u4e2d</span>'),
        n += "</p>"
    }
    function el(t, n) {
        function e() {
            ot(t, jt()),
            r() ? o() : i()
        }
        function i() {
            Oe(t, al(kf(), n))
        }
        function r() {
            var t = "shelf__builtin";
            if (!sf(t))
                return kf().length ? void df(t, 1) : (df(t, 1),
                !0)
        }
        function o() {
            il(function(t) {
                if (!t.ads || !t.ads.length)
                    return i();
                var n = M(i);
                _(t.ads.reverse(), function(t) {
                    var e = t.reference_id;
                    mf(e, n),
                    Zn(e)
                }
                )
            }
            , i)
        }
        return e()
    }
    function il(t, e) {
        t = t || E,
        e = e || E,
        ft("/store/v0/ad", {
            data: {
                key: "f0-h5-built-in",
                a: 1
            },
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function rl(n, e, i) {
        i == e.fiction_id && (Ir(n).scrollTop = n.offsetTop),
        H(n, "hold", function() {
            var t = function() {
                var t = e.fiction_id;
                bf(t),
                Z(n),
                Qn(t)
            }
            ;
            Li({
                title: "\u786e\u8ba4\u5220\u9664",
                prompt: "\u786e\u8ba4\u5c06\u672c\u4e66\u4ece\u4e66\u67b6\u5220\u9664?",
                confirm: t
            })
        }
        ),
        We(n, function() {
            var t = e.fiction_id
              , i = e.latest_id;
            gf(t, function(t, e) {
                t || e.latest_id != i && st(N(".book-cover", n), '<span class="u-booktag shelf__tag">\u6709\u66f4\u65b0</span>')
            }
            )
        }
        , t.innerWidth)
    }
    function ol(t) {
        function n() {
            var n = N(".book-list", R(t, ".shelf"));
            W(n, "shelf-book"),
            W(n, "book-table"),
            W(t, "shelf__switch_list"),
            z(Ir(n), "scroll")
        }
        var e = "shelf__table";
        sf(e) && n(),
        H(t, "click", function() {
            n(),
            df(e, F(t, "shelf__switch_list"))
        }
        )
    }
    function al(t, n) {
        var e = '<div class="new-page shelf"><div class="shelf__top"><div class="shelf__switch" id="' + Le(ol) + '"></div><div class="shelf-search" data-href="' + nf() + '">\u8f93\u5165\u4e66\u540d/\u4f5c\u8005/\u5173\u952e\u5b57</div></div>';
        return e += t && t.length ? cl(t, n) : '<div class="u-feed -mine -none"><div class="cnt"><div class="info"><h3 class="title">\u4e66\u67b6\u8fd8\u662f\u7a7a\u7684~</h3><p class="summary">\u4e66\u67b6\u6536\u85cf\u6240\u6709\u60a8\u8bfb\u8fc7\u7684\u5c0f\u8bf4</p></div></div></div>'
    }
    function cl(t, n) {
        for (var e, i = '<ul class="book-list">', r = t, o = -1, a = r.length - 1; a > o; )
            e = r[++o],
            i += '<li id="' + Le(rl, e, n) + '">' + sl(e, fl(e.fiction_id)) + "</li>";
        return i += "</ul>"
    }
    function sl(t, n) {
        var e = "";
        return t = Ze(t),
        e += '<div class="u-book" data-href="' + Qd(t.fiction_id) + '" ' + Ou("b*" + Eu(t)) + ' expose=""><a>' + _i(t, !0) + '</a><div class="info"><h3 class="title single-line">' + t.title + '</h3><p class="author single-line">' + Qe(t) + "</p>",
        n && (e += '<p class="extra single-line">\u5df2\u8bfb: ' + n.title + "</p>"),
        e += '<div class="wrap"><p class="extra single-line">\u6700\u65b0: ' + t.latest + "</p></div></div></div>"
    }
    function ul(t, n) {
        function e() {
            ot(t, jt()),
            lr() || (a = zs(n)),
            i()
        }
        function i() {
            var i = Cf(n);
            return i ? (r(n, i),
            void o(n, E)) : void o(n, function(i, o) {
                return i ? Kt(t, e) : void r(n, o)
            }
            )
        }
        function r(n, e) {
            Oe(t, pl(e, n)),
            lt(t, "click", "[data-id]", function(t, e) {
                Ef(n, e.dataset.id),
                "book" == gt().from ? Jf(Qd(n)) : yn()
            }
            ),
            kv(function() {
                a && mv.onLine ? a.then(function(e) {
                    ll(t, n, e.items || [], e.entire)
                }
                ) : ll(t, n, [])
            }
            , 0)
        }
        function o(t, n) {
            Hc(t, 0, 1e7, function(e) {
                var i = e.item;
                $f(t, i.toc),
                n(null , i.toc)
            }
            , n.bind("", !0))
        }
        var a;
        return mn("\u76ee\u5f55"),
        e()
    }
    function ll(t, n, e, i) {
        gv.log("toc__setChapterState", e),
        _(B("[data-id]", t), function(t) {
            var r = t.dataset.id;
            We(t, function() {
                (i || -1 != e.indexOf(+r)) && Y(t, "fiction-toc__item_paid"),
                Id(n, r, function(n) {
                    n && Y(t, "fiction-toc__item_download")
                }
                , E)
            }
            )
        }
        )
    }
    function dl(t, n, e) {
        e == hv.state.chapter_id && (Ir(t).scrollTop = t.offsetTop,
        Y(t, "fiction-toc__item_cur"))
    }
    function fl(t) {
        var n = Cf(t)
          , e = Of(t);
        return n && e ? w(n, function(t) {
            return t.chapter_id == e
        }
        ) : void 0
    }
    function pl(t, n) {
        for (var e, i = '<ul class="fiction-toc">', r = t, o = -1, a = r.length - 1; a > o; )
            e = r[++o],
            i += '<li class="fiction-toc__item ',
            e.free && (i += "fiction-toc__item_free"),
            i += '" id="' + Le(dl, n, e.chapter_id) + '" data-id="' + e.chapter_id + '"><p>' + e.title + "</p></li>";
        return i += "</ul>"
    }
    function vl(t) {
        mn("\u53d1\u798f\u5229\xb7\u9886\u4e66\u5e01"),
        Oe(t, xl())
    }
    function hl(t) {
        Rc("0,2", 1, function(n) {
            var e = {
                coins: 0,
                chapters: 0
            }
              , i = n.data || [];
            _(i, function(t) {
                0 == t.type ? e.chapters += t.total : 2 == t.type && (e.coins += t.total)
            }
            ),
            $e(t).set(e)
        }
        )
    }
    function _l(t) {
        function n(t, n) {
            var e = lr() ? "/task/v2/anonymous/list" : "/task/v2/user/list";
            ue(t, n, e)
        }
        var e = [{
            task_id: "-1",
            type: 0,
            coins: 0,
            icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p017rdZTB65K/pDJrF2XCYRGKRP.png",
            name: "\u6bcf\u65e5\u7b7e\u5230",
            desc: "\u6bcf\u5929\u7b7e\u5230\u90fd\u6709\u5956\uff0c\u8fde\u7eed7\u5929\u62bd\u5927\u5956\uff01"
        }];
        Pe(t, $l(e)),
        n(function(n) {
            Ae(t, $l(n.data || []), !0)
        }
        )
    }
    function ml(t) {
        function n(n) {
            function e(t) {
                return x(t, function(t) {
                    var n = t.fee
                      , e = t.reward
                      , i = a("{0}\u5143\u5145\u503c{1}", n / 100, e ? "\u793c\u5305" : "")
                      , o = e ? a("\u5355\u6b21\u5145\u503c{0}\u5143\u989d\u5916\u83b7\u589e{1}\u4e66\u5e01", n / 100, e) : a("\u5145\u503c{0}\u5143\u83b7\u5f97{1}\u4e66\u5e01", n / 100, n);
                    return r({
                        type: 11,
                        coins: e,
                        desc: o,
                        icon: "http://image.read.duokan.com/mfsv2/download/s010/p01A6KoaXKfp/G6lr8GUkpcJIn1.png",
                        name: i,
                        tag: e ? "\u8d85\u503c" : "",
                        value: n
                    }, t)
                }
                )
            }
            Ae(t, $l(e(n)), !0)
        }
        function e(t) {
            var n = [5, 10, 20, 50, 100].map(function(t) {
                return {
                    fee: 100 * t,
                    reward: 0,
                    code: "CHARGE"
                }
            }
            );
            return lr() ? t(n) : void zc(function(e) {
                var i = e.data || n;
                b(i, function(t, n) {
                    return t.fee - n.fee
                }
                ),
                t(i)
            }
            , t.bind("", n))
        }
        e(n)
    }
    function gl(t) {
        return 0 == t ? bl : 1 == t ? kl : 11 == t ? yl : void 0
    }
    function bl(t, n) {
        var e = $e(t)
          , i = {};
        return i.buttonText = function() {
            return "\u7b7e\u5230"
        }
        ,
        i.exec = function() {
            Jf(ef())
        }
        ,
        e.set(i)
    }
    function kl(t, n) {
        var e = $e(t)
          , i = {};
        return i.buttonText = function() {
            return "\u9886\u53d6"
        }
        ,
        i.exec = function() {
            dr() || wl(n.task_id, ur)
        }
        ,
        e.set(i)
    }
    function yl(t, n) {
        function e() {
            return "\u5145\u503c"
        }
        function i() {
            if (!dr()) {
                var t = n;
                Os(function(n, e) {
                    n || ($s(e),
                    _s(E, E, t.fee, t.code))
                }
                )
            }
        }
        var r = $e(t);
        r.set({
            buttonText: e,
            exec: i
        })
    }
    function wl(t, e, i) {
        function o(t, e, i, o) {
            ft("/task/v2/user/claim", {
                type: "POST",
                data: r({
                    task_id: i,
                    task_type: o
                }, pe()),
                success: ve.bind(n, t, e),
                error: e
            })
        }
        o(function(t) {
            ju(t.data, !1, e)
        }
        , n, t, i)
    }
    function xl() {
        var t = '<div class="task-page">';
        return lr() || (t += '<div class="user-center__banner" style="background: #f3eae0;"><ul class="u-list task-list">' + Tl() + "</ul></div>"),
        t += '<ul class="u-list task-list"><div id="' + Le(_l) + '"></div><div id="' + Le(ml) + '"></div><p class="explain">1\u5143=100\u4e66\u5e01\uff0c\u5145\u503c\u4efb\u52a1\u8d60\u9001\u7684\u4e66\u5e01\u534a\u5e74\u540e\u5931\u6548\u3002</p>',
        -1 == _v.hash.indexOf("type=1") && fv && (t += '<a class="logout-button u-btn2" id="' + Be(jn) + '">\u9000\u51fa\u767b\u5f55</a>'),
        t += "</ul></div>"
    }
    function Tl() {
        var t = '<li id="' + Le(hl) + '" class="task-card -asset"><section class="icon"><img src="http://www.duokan.com/hs/static/images/avatar.png"></section>';
        return fv || (t += '<section class="other"><p class="button" id="' + Be(Bn) + '">\u767b\u5f55</p></section>'),
        t += '<section class="info"><h3 class="title">' + Cl() + '\u60a8\u73b0\u5728\u62e5\u6709</h3><p class="summary"><em class="user-center__asset user-center__asset_coin" vp-bind="$root.coins">...</em>\u4e66\u5e01<em class="user-center__asset user-center__asset_chapter" vp-bind="$root.chapters">...</em>\u7ae0\u8282\u5238</p></section></li>'
    }
    function Cl() {
        var t = "";
        return lv.user_id ? t = lv.user_id : lv.device_hash && (t = "\u6e38\u5ba2" + lv.device_hash.substr(0, 10)),
        t ? t + ", " : ""
    }
    function $l(t) {
        for (var n, e = "", i = t, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += '<li><div class="task-card" id="' + Le(gl(n.type), n) + '" vp-click="$root.exec()">',
            n.tag && (e += '<em class="u-tagLT">' + n.tag + "</em>"),
            e += '<div class="icon"><img src="' + n.icon + '"></div><section class="other"><p class="button" vp-bind="$root.buttonText()">\u8bf7\u767b\u5f55</p></section><section class="info"><h3 class="title">' + n.name,
            n.coins && (e += '<em class="coin">\u9001' + n.coins + "\u4e66\u5e01</em>"),
            e += '</h3><p class="summary">' + n.desc + "</p></section></div></li>";
        return e
    }
    function Il(t, e) {
        function i() {
            ot(t, jt()),
            Oe(t, El(e, o, r, a))
        }
        function r(e, r) {
            function o(t) {
                var r = {
                    onBefore: function() {
                        mu("search_" + t)
                    },
                    onload: function() {
                        gu()
                    },
                    emptyTpl: Pl,
                    error: Kt.bind(n, e, i)
                };
                return Ge(e, Sl.bind(this, t), li, r)
            }
            s = N("input", t),
            r && o(r),
            H(s, "keypress", function(t) {
                13 == t.keyCode && z(s, "search", s.value)
            }
            ),
            H(s, "search", function(t) {
                var n = t.data.replace("click__", "")
                  , e = 0 == t.data.indexOf("click__");
                o(n),
                qe({
                    search: n,
                    click: +e
                })
            }
            )
        }
        function o(t) {
            H(t, "click", function() {
                z(s, "search", s.value)
            }
            )
        }
        function a(t) {
            Ol(function(n) {
                var e = n.ads
                  , i = x(e, function(t) {
                    return t.ad_name
                }
                );
                Oe(t, Ml(i, c))
            }
            )
        }
        function c(t, n) {
            H(t, "click", function() {
                s.value = n,
                z(s, "search", "click__" + n)
            }
            )
        }
        var s;
        return i()
    }
    function Sl(t, e, i, r, o) {
        var a = {
            start: e,
            count: i,
            s: t,
            source: "2,5"
        };
        ft("/store/v0/lib/query/onebox", {
            data: a,
            success: ve.bind(n, r, o),
            error: o
        })
    }
    function Ol(t, e) {
        var i = {
            key: "df_search_tags",
            a: 1
        };
        ft("/store/v0/ad", {
            data: i,
            success: ve.bind(n, t, e),
            error: e
        })
    }
    function El(t, n, e, i) {
        var r = '<div class="search"><div class="top"><a href="javascript:history.back()" class="top__back"></a><div id="search-input" class="search-input"><b class="search-input__mi"></b><input type="text" value="' + u(t || "") + '" placeholder="\u8f93\u5165\u4e66\u540d/\u4f5c\u8005/\u5173\u952e\u5b57"><div class="search-input__btn" id="' + Le(n, t) + '">\u641c\u7d22</div></div></div><div id="' + Le(e, t) + '" class="top__bd">';
        return t || (r += '<div id="' + Le(i) + '"></div>'),
        r += "</div></div>"
    }
    function Ml(t, n) {
        for (var e, i = '<ul class="m-tag -color search-tag">', r = t, o = -1, a = r.length - 1; a > o; )
            e = r[++o],
            i += '<li class="u-tag" id="' + Le(n, e) + '">' + e + "</li>";
        return i += "</ul>"
    }
    function Pl() {
        return '<p class="u-tip">\u6ca1\u6709\u76f8\u5e94\u7684\u641c\u7d22\u7ed3\u679c</p>'
    }
    function Al() {
        function n() {
            var t = gt().page;
            "user_center" == t || "checkin" == t || "reader" == t ? tt(N(e)) : nt(N(e))
        }
        var e = ".float-reminder";
        Me(vv.body, Nu()),
        Tr(N(e)),
        H(t, "load", function() {
            kv(function() {
                H(t, "popstate", n)
            }
            , 0)
        }
        ),
        n()
    }
    function Ll(t, n) {
        for (var e, i = '<div class="checkin-area"><p class="ttl">\u6bcf\u5929\u7b7e\u5230\u9886\u798f\u5229\uff0c\u7b7e\u6ee1\u4e03\u5929\u62bd\u5927\u5956</p><ul class="checkin-list">', r = t.status, o = -1, a = r.length - 1; a > o; ) {
            e = r[++o];
            var c = Nl(o + 1, e, t.today);
            i += '<li><div class="u-checkin ' + c[0] + '"><div class="day">' + (o + 1) + '\u5929</div><div class="state"><img src="' + c[1] + '"/></div><div class="tag">\u4eca\u65e5</div></div></li>'
        }
        return i += '<li class="placeholder u-checkin"></li></ul><div class="btn u-btn" id="' + Le(n, t.status[t.today - 1], t.lottery) + '">\u7b7e\u5230\u62bd\u5956</div></div></div>'
    }
    function Nl(t, n, e) {
        var i = ["http://image.read.duokan.com/mfsv2/download/s010/p01YnhZQP8Is/3TzJm787FtwKXE.png", "http://image.read.duokan.com/mfsv2/download/s010/p01kqmaVrRIL/rXiIPODNbB9Lvs.png", "http://image.read.duokan.com/mfsv2/download/s010/p017BoKoHvQy/kMsJX0kUu4MhIx.png", "http://image.read.duokan.com/mfsv2/download/s010/p01QetVMMiNa/Sb46X6bx2udXjS.png"]
          , r = ["", "-used", "-omit", "-gift"];
        return e > t && 0 === n && (n = 2),
        7 == t && 0 === n && (n = 3),
        [r[n] + (t == e ? " -crt" : ""), i[n]]
    }
    function Bl(t, n) {
        for (var e, i = '<div class="checkin-awards"><div class="ttl">\u606d\u559c\u60a8\u83b7\u5f97\u4ee5\u4e0b\u5956\u54c1</div><div class="info"><div class="u-awards">', r = t, o = -1, a = r.length - 1; a > o; )
            e = r[++o],
            i += '<div class="award"><img src="' + e.image + '"><p>' + e.name + " * " + e.value + "</p></div>",
            t.length - 1 > o && (i += '<div class="plus">+</div>');
        return i += "</div></div>",
        i += n ? '<div class="btn u-btn -highlight" vp-click="$root.lottery();">\u62bd\u5927\u5956</div>' : '<div class="btn u-btn" vp-click="$root.close();">\u786e\u5b9a</div>',
        i += "</div>"
    }
    function jl(t) {
        function n() {
            dr() || (ot(t, jt()),
            Rl(e, E))
        }
        function e(n) {
            var e = n.data;
            Oe(t, Ll(e, i))
        }
        function i(t, n, i) {
            return 1 == i ? (ot(t, "\u62bd\u5927\u5956"),
            Y(t, "-highlight"),
            void H(t, "click", o)) : 1 == n ? (Y(t, "-disable"),
            void ot(t, "\u4eca\u65e5\u5df2\u7b7e\u5230")) : void H(t, "click", function() {
                Hl(function(t) {
                    e(t);
                    var n = t.data || {};
                    r(n.gift, n.lottery)
                }
                , E)
            }
            )
        }
        function r(t, n) {
            var e = Bl(t, n)
              , i = Pi(e, {
                lottery: function() {
                    o(),
                    i.close()
                }
            })
        }
        function o() {
            Dl(function(t) {
                var n = t.data;
                r(n),
                Rl(e, E)
            }
            , E)
        }
        return mn("\u7b7e\u5230"),
        n()
    }
    function Rl(t, n) {
        var e = {};
        return r(e, pe()),
        ft("/checkin/v0/status", {
            data: e,
            type: "POST",
            success: ve.bind(this, t, n),
            error: n
        })
    }
    function Hl(t, n) {
        var e = {};
        return r(e, pe()),
        ft("/checkin/v0/checkin", {
            data: e,
            type: "POST",
            success: ve.bind(this, t, n),
            error: n
        })
    }
    function Dl(t, n) {
        var e = {
            level: 1
        };
        return r(e, pe()),
        ft("/checkin/v0/lottery", {
            data: e,
            type: "POST",
            success: ve.bind(this, t, n),
            error: n
        })
    }
    function zl(t, n, e) {
        var i, r, o, a;
        e = e || 0,
        Oe(t, Md(n)),
        i = N(".reader", t),
        r = N(".reader__hd", i),
        o = N(".reader__ft", i),
        a = N(".reader__bd", i),
        Ul(i),
        Zl(i),
        td(a),
        H(i, "click", function(t) {
            var e = t.pageY / i.offsetHeight
              , r = t.pageX / i.offsetWidth
              , o = t.target;
            if (F(o, "reader__ft-font"))
                W(i, "reader_op-font");
            else if (F(o, "reader__ft-night"))
                Ql(i, "1" != i.dataset.night);
            else if (F(o, "reader__font-large"))
                nd(a, parseInt(a.style.fontSize) + 1);
            else if (F(o, "reader__font-small"))
                nd(a, parseInt(a.style.fontSize) - 1);
            else if (j(o, ".reader__font-bg > a"))
                ql(i, o.dataset.bg);
            else if (F(o, "reader__prev-chapter"))
                Xl(a, n, +hv.state.chapter_id - 1);
            else if (F(o, "reader__next-chapter"))
                Xl(a, n, +hv.state.chapter_id + 1);
            else if (F(o, "reader__toc"))
                Jf(Zd("fiction", n, {
                    chapter_id: hv.state.chapter_id
                }));
            else if (F(o, "reader__usercenter"))
                Jf(tf(1) + "&back=" + Cv(_v.hash + "&back=home"));
            else if (F(o, "reader__pay")) {
                if (dr())
                    return;
                var c = hv.state.chapter_id
                  , s = o.dataset.price
                  , u = o.dataset.method || "coin";
                s = s && +s,
                Wl(n, c, s, u, function(t) {
                    t || Xl(a, n, c)
                }
                )
            } else
                r > .2 & .8 > r && e > .3 & .7 > e && (V(i, "reader_op-font"),
                W(i, "reader_op"),
                V(N(".reader__more", i), "reader__more_on"))
        }
        ),
        H(i, "page.change", function(t) {
            var e = t.data;
            Xl(a, n, e)
        }
        ),
        mf(n, E),
        _h = gt().pay,
        Kl(n),
        H(a, "DOMNodeInserted", function t() {
            N("[data-chapter_id]", a) && (Fl(a, n),
            D(a, "DOMNodeInserted", t))
        }
        ),
        Yl(a, n),
        Xl(a, n, e)
    }
    function Fl(n, e) {
        +Mf(e) && (n.style.paddingBottom = t.innerHeight + "px",
        n.scrollTop = Mf(e),
        kv(function() {
            n.style.paddingBottom = ""
        }
        , 300))
    }
    function Yl(t, n) {
        function e() {
            var n = B("[data-chapter_id]", t);
            return w(n, it)
        }
        function i() {
            var t = e()
              , i = -t.getBoundingClientRect().top + 15;
            Pf(n, i),
            r()
        }
        function r() {
            var t = e();
            if (t) {
                var i = t.dataset.chapter_id;
                o(n, i)
            }
        }
        function o(t, n) {
            n !== gt().chapter_id && (yt({
                page: "reader",
                id: t,
                chapter_id: n,
                from: gt().from,
                _t: gt()._t
            }),
            Ef(t, n))
        }
        H(t, "scroll", i),
        H(t, "DOMNodeInserted", r)
    }
    function Vl() {
        var t = _h;
        return _h = n,
        t
    }
    function Wl(t, e, i, r, o) {
        function a() {
            Sf(t, hh),
            o(null )
        }
        function c() {
            s(),
            o(null )
        }
        function s() {
            gv.log("do recoverAutoPay", l),
            hh = l
        }
        var u = {
            id: t,
            chapterId: e,
            price: i,
            payMethod: r
        };
        if ("batch" != r)
            return Rs(a, E, u);
        var l = hh;
        hh = n,
        Rs(c, s, u)
    }
    function Kl(t) {
        var n = gt().autopay;
        return ge(n) ? hh = !0 : (hh = !!+n,
        void Sf(t, hh))
    }
    function Xl(t, n, e) {
        function i() {
            Ff("reading", "change", "chapter", 1)
        }
        function r(t, i, r, o) {
            Cd(n, e, function(t) {
                r(t.result ? {
                    items: [],
                    more: !1,
                    finish: !0
                } : {
                    items: [t],
                    more: !0
                })
            }
            , o)
        }
        function o(r) {
            r.finish || (i(),
            e += 1,
            a(n, e, E));
            var o = N(".reader__chapter", t)
              , c = o.children;
            c.length > 2 && (Ir(o).scrollTop -= c[0].scrollHeight,
            Z(c[0]))
        }
        function a(t, n, e) {
            function i() {
                Cd(t, n, function(t) {
                    e(t.result, t)
                }
                )
            }
            gv.debug("preload", t, n),
            Cd(t, n, function(r) {
                return r.result && 90001 == r.result && If(t) ? void c(t, r.detail.price, n, function(t) {
                    return t ? e(1) : void i()
                }
                ) : e(r.result, r)
            }
            )
        }
        function c(t, n, e, i) {
            var r = function() {
                return i(1),
                !0
            }
            ;
            Zc(function(o) {
                gv.debug("autopay query", o);
                var a = If(t);
                return o.chapter ? Bc(i.bind("", null ), r, t, [e], a) : o.balance >= n ? Nc(i.bind("", null ), r, t, n, [e], null , a) : void i(1)
            }
            )
        }
        function s(n, e, r, o) {
            return qe({
                chapter_state: +e.result,
                chapterId: o,
                id: r
            }),
            i(),
            -1 == e.result ? (ot(n, jt()),
            Kt(n, Xl.bind(null , t, r, o))) : 1002 == e.result || 90001 == e.result ? (Gl(n, e.id, e.chapter_id, e.detail),
            Vl() ? c(r, e.detail.price, o, function(n) {
                n || Xl(t, r, o)
            }
            ) : void (If(r) && a(r, o, function(n, e) {
                n || Xl(t, r, o)
            }
            ))) : 1 == e.result ? ed("\u6700\u540e\u4e00\u7ae0", "\u5230\u5e95\u5566\uff0c\u540e\u9762\u6ca1\u6709\u7ae0\u8282\u5566~") : void 0
        }
        return e = +e,
        0 > e ? ed("\u7b2c\u4e00\u7ae0", "\u5230\u9876\u5566\uff0c\u4e0a\u9762\u6ca1\u6709\u7ae0\u8282\u5566~") : void Cd(n, e, function(i) {
            return t.scrollTop = 0,
            i.result ? s(t, i, n, e) : void Ge(t, r, Hd, {
                limit: 1,
                onload: o,
                completeTpl: Nd
            })
        }
        )
    }
    function Gl(t, n, e, i) {
        function r(t) {
            Oi(function(n) {
                return lr() ? t(null , n, null ) : void Zc(function(e) {
                    t(null , n, e)
                }
                )
            }
            )
        }
        r(function(r, o, a) {
            gv.log(a),
            Oe(t, Bd(n, e, i, o, a))
        }
        )
    }
    function Jl(t, e, i) {
        function r(t) {
            return i.get("progress") ? void 0 : (i.set({
                progress: []
            }),
            wf(t) || mf(t, E),
            kd(t, n, function(t, n, e) {
                return -2 == t ? (i.set({
                    progress: null 
                }),
                cd("\u7a0d\u540e\u4e0b\u8f7d", "\u6709\u4efb\u52a1\u6b63\u5728\u4e0b\u8f7d\u4e86\uff0c\u7b49\u5b83\u4e0b\u5b8c\u518d\u4e0b\u5427~")) : (i.set({
                    progress: [n, e]
                }),
                void (n + 1 == e && (i.set({
                    progress: null 
                }),
                cd("\u4e0b\u8f7d\u5b8c\u6210", "\u5df2\u4e0b\u8f7d\u6240\u6709\u53ef\u8bfb\u7ae0\u8282\uff0c\u6ca1\u7f51\u4e5f\u80fd\u8bfb\u5566~"))))
            }
            ))
        }
        function o(t) {
            var n = i.get("progress");
            return n ? n[0] ? n[0] + 1 + "/" + n[1] : "\u4e0b\u8f7d\u4e2d" : "\u4e0b\u8f7d"
        }
        var a = !!i;
        i = i || $e(t),
        i.setOnly({
            download: M(r.bind(this, e), 200),
            downloadText: o.bind(this, e)
        }),
        !a && i.set()
    }
    function Ul(t) {
        ql(t, Iv.readerBg || 1)
    }
    function ql(t, n) {
        Iv.readerBg = n,
        t.dataset.bg = n
    }
    function Zl(t) {
        Ql(t, !!sf(Yh))
    }
    function Ql(n, e) {
        n.dataset.night = +e,
        df(Yh, e);
        try {
            t.miui.isNightModeEnabled() != !!e && t.miui.setNightModeEnabled(!!e)
        } catch (t) {}
    }
    function td(t) {
        t.style.fontSize = (Iv.readerFontSize || 17) + "px"
    }
    function nd(t, n) {
        n >= 11 && 21 >= n && (Iv.readerFontSize = n,
        t.style.fontSize = n + "px")
    }
    function ed(t, n) {
        cd(t, n)
    }
    function id(t, n) {
        var e = Se("reader__autopay", t);
        e.update({
            on: If(n),
            toggle: function() {
                Sf(n, !If(n)),
                e.update({
                    on: If(n)
                })
            }
        })
    }
    function rd(t) {
        var n = $e(t);
        n.set({
            on: hh,
            toggle: function() {
                hh = !hh,
                n.set({
                    on: hh
                })
            }
        })
    }
    function od(t, n) {
        var e = $e(t).set({
            toggle: function() {
                hf(n) && Oe(t, Ad(n)),
                e.set({
                    on: !e.get("on")
                })
            }
        })
    }
    function ad(t, n) {
        $e(t).set({
            go: function() {
                var t = gt().from;
                return "book" == t ? yn() : void Jf(qd(0, n, 2))
            }
        })
    }
    function cd(t, n, e) {
        Li({
            singleButton: !0,
            title: t,
            prompt: n,
            confirm: e || E
        })
    }
    function sd(t, n, e) {
        tt(t),
        _d(n, e);
        var i = xe(ud, [n])
          , r = xe(ld, [n, e]);
        Ce(i, Te(r))(function(n) {
            n || fd(t)
        }
        ),
        lt(t, "click", ".reader__close", function(n) {
            Z(t),
            n.stopPropagation()
        }
        )
    }
    function ud(t, n) {
        Nf(n, function(n) {
            gv.log("ad__isSupport", n.has_ad),
            t(!n.has_ad)
        }
        )
    }
    function ld(t, n, e) {
        return gv.log("chapterId ", e >= 10),
        e >= 10
    }
    function dd(t) {
        mh || (mh = se(vd)),
        mh(t, Vh)
    }
    function fd(t) {
        var n = we(pd, [t]);
        Ce(dd, Te(n))(function(t) {
            t && gv.error(t)
        }
        )
    }
    function pd(n) {
        var e, i;
        try {
            e = t.miui.getImeiMD5()
        } catch (t) {}
        try {
            i = t.miui.getDeviceInfo()
        } catch (t) {
            i = {}
        }
        if (e || cn()) {
            n.style.minHeight = "84px",
            nt(n);
            var r = {
                imei: lv.device_hash,
                packageName: "com.android.browser",
                version: "1.1.0",
                tagId: "1.13.c.4",
                adContext: {},
                context: {
                    fictionId: gt().id
                },
                connectionType: i.nt,
                serviceProvider: i.snt,
                styleUrl: "",
                appKey: "BROWSER_FEED"
            };
            t.addEventListener("message", function(t) {
                "http://api.ad.xiaomi.com" == t.origin && t.data && "showError" == t.data.event && tt(n)
            }
            ),
            miADOutside("100%", "84px", r, n.id)
        }
    }
    function vd(t, n, e) {
        function i() {
            s.removeChild(c)
        }
        var a, c = vv.createElement("script"), s = vv.head, u = !1;
        e = r({}, e, !0),
        o(e, Fv),
        e.timeout > 0 && (a = kv(function() {
            u = !0,
            t(!0)
        }
        , e.timeout)),
        n = f(e.data, n),
        H(c, "error", function() {
            u || (yv(a),
            t(!0)),
            i()
        }
        ),
        H(c, "load", function() {
            u || (yv(a),
            t()),
            i()
        }
        ),
        c.src = n,
        s.appendChild(c)
    }
    function hd() {
        return gh = gh || {}
    }
    function _d(t, n) {
        var e = hd()
          , i = e[t] = e[t] || [];
        i.push(n)
    }
    function md(t, n) {
        return +me(n, Of(t) || 0)
    }
    function gd(t, n) {
        return t
    }
    function bd() {
        return bh
    }
    function kd(t, n, e) {
        gv.log("download__download", t, n),
        n = md(t, n);
        var i, o = gd(t, n), a = bh;
        return a && a.uuid != o ? e(-2) : (a || (bh = a = r({
            uuid: o
        }, rh),
        i = !0),
        a.on("change", e),
        void (i && yd(t, n, function(t, n, e) {
            a.emit("change", t, n, e),
            n == e - 1 && (bh = null )
        }
        )))
    }
    function yd(t, n, e) {
        function i(t, n) {
            return y(t, function(t) {
                return t.c >= n
            }
            )
        }
        gv.log("reader__download", t, n),
        wd(t, function(r, o) {
            if (r || 0 != o.result)
                return e(!0);
            var a = i(o.data, n);
            xd(t, a, e)
        }
        )
    }
    function wd(t, n) {
        ft("/drm/v0/fiction/multi_link", {
            data: {
                fiction_id: t,
                format: "jsonp"
            },
            success: function(t) {
                n(null , t)
            },
            error: n.bind(null , -9)
        })
    }
    function xd(t, n, e) {
        function i() {
            var i = n[a].c;
            Id(t, i, function() {
                e(null , a, c),
                o()
            }
            , function() {
                r(t, i, n[a].url)
            }
            )
        }
        function r(t, i, r) {
            Td(t, i, n[a].url, function() {
                e(null , a, c),
                o()
            }
            , function() {
                e(!0, a, c),
                o()
            }
            )
        }
        function o() {
            a++,
            c > a && i()
        }
        var a = 0
          , c = n.length;
        return c ? void i() : e(null , -1, c)
    }
    function Td(t, n, e, i, r) {
        pt(e, {
            callback: "duokan_fiction_chapter",
            success: function(e) {
                e = JSON.parse(v(e)),
                Sd(t, n, e),
                e.id = t,
                e.chapter_id = n,
                i(e)
            },
            error: r
        })
    }
    function Cd(t, n, e, i) {
        function r(i) {
            i.id = t,
            i.chapter_id = n,
            e(i)
        }
        Id(t, n, r, function() {
            ft("/drm/v0/fiction/link", {
                data: {
                    fiction_id: t,
                    chapter_id: n,
                    format: "jsonp"
                },
                success: function(o) {
                    if (1002 == o.result || 90001 == o.result)
                        return Hc(t, n, 1, function(i) {
                            o.id = t,
                            o.chapter_id = n;
                            try {
                                o.detail = i.item.toc[0]
                            } catch (t) {
                                gv.error("reader error 1", t)
                            }
                            return e(o)
                        }
                        );
                    if (1 == o.result && !isNaN(+n))
                        return e(o);
                    if (bd())
                        return cd("\u6b63\u5728\u4e0b\u8f7d", "\u6709\u4efb\u52a1\u6b63\u5728\u4e0b\u8f7d\u4e86\uff0c\u5148\u770b\u672c\u5730\u7ae0\u8282\u5427~", yn);
                    if (0 == o.result)
                        return Td(t, n, o.url, r, i);
                    if (1003 === o.result)
                        return cd("\u767b\u5f55\u8fc7\u671f", "\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u65b0\u767b\u5f55");
                    var a = "\u8bf7\u6c42\u7ae0\u8282\u4fe1\u606f\u5931\u8d25(" + t + ":" + n + ":" + o.result + ")";
                    pr(a),
                    gv.error(a)
                },
                error: e.bind(null , {
                    result: -1
                })
            })
        }
        )
    }
    function $d(n, e) {
        var i;
        return e = e || E,
        kh ? void n(kh) : t.indexedDB ? (i = indexedDB.open(Wh, 1),
        i.onerror = e,
        i.onsuccess = function(t) {
            gv.log("onsuccess"),
            kh = i.result,
            n(kh)
        }
        ,
        void (i.onupgradeneeded = function(t) {
            gv.log("onupgradeneeded");
            var n = t.target.result;
            n.createObjectStore(Kh)
        }
        )) : e()
    }
    function Id(t, n, e, i) {
        gv.log("reader__dbRead", t, n),
        $d(function(r) {
            var o = r.transaction([Kh]).objectStore(Kh).get(t + "_" + n);
            o.onsuccess = function() {
                o.result ? e(o.result) : i()
            }
        }
        , i)
    }
    function Sd(t, n, e) {
        gv.log("reader__dbWrite", t, n, e),
        $d(function(i) {
            i.transaction([Kh], "readwrite").objectStore(Kh).put(e, t + "_" + n)
        }
        )
    }
    function Od(t, n) {
        gv.log("reader__dbRemove", t, n),
        $d(function(e) {
            e.transaction([Kh], "readwrite").objectStore(Kh).delete(t + "_" + n)
        }
        )
    }
    function Ed(t) {
        gv.log("reader__dbRemoveAll", t);
        var n = IDBKeyRange.bound(t + "_0", t + "_9");
        $d(function(t) {
            var e = t.transaction([Kh], "readwrite").objectStore(Kh).openCursor(n);
            e.onsuccess = function(t) {
                var n = t.target.result;
                if (n) {
                    var e = n.key.split("_");
                    Od(e[0], e[1]),
                    n.continue()
                }
            }
        }
        )
    }
    function Md(t) {
        return '<div class="reader"><div class="reader__mask"></div><div class="reader__hd"><a class="reader__back" id="' + Le(Hf) + '"></a>\u8fd4\u56de' + Pd(t) + '</div><div class="reader__ft"><a href="javascript:" class="reader__ft-toc reader__toc"></a><a href="javascript:" class="reader__ft-font"></a><a href="javascript:" class="reader__ft-night"></a><a href="javascript:" class="reader__ft-download" id="' + Le(Jl, t) + '" vp-click="$root.download()" vp-bind="$root.downloadText()"></a></div><div class="reader__font"><div class="reader__font-size"><span>\u5b57\u53f7</span><a href="javascript:" class="reader__font-large">\u5927</a><a href="javascript:" class="reader__font-small">\u5c0f</a></div><div class="reader__font-bg"><span>\u80cc\u666f</span><a href="javascript:" data-bg="1"></a><a href="javascript:" data-bg="2"></a><a href="javascript:" data-bg="3"></a><a href="javascript:" data-bg="4"></a><a href="javascript:" data-bg="5"></a><a href="javascript:" data-bg="0"></a></div></div><div class="reader__bd"><div class="reader__loading"></div></div></div>'
    }
    function Pd(t) {
        return '<a class="reader__more" vp-click="$root.toggle()" vp-class="{\'reader__more_on\' : $root.on}" id="' + Le(od, t) + '"></a>'
    }
    function Ad(t) {
        var n = ""
          , e = hf(t);
        return n += '<div class="reader-popup"><div class="reader-popup__bd"><div class="reader-book" vp-ignore id="' + Le(ad, t) + '" vp-click="$root.go();"><img class="reader-book__cover" src="' + e.cover + '!s"><h3 class="reader-book__ttl">' + e.title + '</h3><p class="reader-book__author">' + e.authors + '</p></div><div class="reader__autopay-check" vp-ignore  id="' + Le(id, t) + '" vp-click="$root.toggle();"><em class="reader-checkbox" vp-class="{\'reader-checkbox_on\' : $root.on}"></em></div></div></div>'
    }
    function Ld(t) {
        for (var n, e = '<div class="reader__content"><h1>' + u(t.t) + "</h1>", i = t.p, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += "<p>" + u(n) + "</p>";
        return e += '</div><div class="reader__ad" id="' + Le(sd, gt().id, t.chapter_id) + '"><div class="reader__close"></div></div>'
    }
    function Nd() {
        return '<div class="reader__chapter-btn"><a href="javascript:" class="reader__prev-chapter">\u4e0a\u4e00\u7ae0</a><a href="javascript:" class="reader__toc">\u76ee\u5f55</a><a href="javascript:" class="reader__next-chapter">\u4e0b\u4e00\u7ae0</a></div>'
    }
    function Bd(t, n, e, i, r) {
        var o = '<div class="reader-pay" data-chapter_id="' + n + '"><h2 class="reader-pay__ttl">' + e.title + '</h2><div class="reader-pay__next">\u8d2d\u4e70\u540e\u7ee7\u7eed\u9605\u8bfb\u672c\u7ae0\u5185\u5bb9</div><p>\u4ef7\u683c\uff1a' + ci(e.price) + "</p>";
        return r && (o += "<p>\u4f59\u989d\uff1a" + r.balance + "\u4e66\u5e01 ",
        r.chapter && (o += "( " + r.chapter + "\u7ae0\u8282\u5238 )"),
        o += "</p>"),
        o += jd(t) + Rd(t, e.price, r) + '<a class="reader__pay reader-pay__batch-pay" data-method="batch">\u6279\u91cf\u8d2d\u4e70\u7ae0\u8282</a>',
        o += i ? '<a class="reader__usercenter reader-pay__batch-pay">\u4e66\u5e01\u8d85\u503c\u5145\u8fd4</a>' : '<a class="reader__usercenter reader-pay__batch-pay">\u514d\u8d39\u9886\u4e66\u5e01</a>',
        o += Nd() + "</div>"
    }
    function jd(t) {
        var n = '<div class="auto-pay" id="' + Le(rd) + '" vp-click="$root.toggle();" vp-class="{\'auto-pay_on\' : $root.on}"><em class="auto-pay__checkbox"></em>\u81ea\u52a8\u8d2d\u4e70\u4e0b\u4e00\u7ae0</div>';
        return n
    }
    function Rd(t, n, e) {
        var i = ""
          , r = e && e.chapter >= 1;
        return i += '<button id="' + Le(id, t, r) + '" class="reader__pay reader-pay__btn" data-price="' + n + '" data-method="' + (r ? "coupon" : "coin") + '">',
        i += r ? "\u5151\u6362 (1\u7ae0\u8282\u5238)" : !e || e.balance > n ? "\u7acb\u5373\u8d2d\u4e70" : "\u5145\u503c\u5e76\u8d2d\u4e70",
        i += "</button><br>"
    }
    function Hd(t, n) {
        for (var e, i = '<ul class="reader__chapter">', r = t, o = -1, a = r.length - 1; a > o; )
            e = r[++o],
            i += '<li data-track="' + ((n || 0) + o) + '" data-chapter_id="' + e.chapter_id + '">' + Ld(e) + "</li>";
        return i += "</ul>"
    }
    function Dd() {
        return "#page=cate_list"
    }
    function zd() {
        return "#page=rank_list"
    }
    function Fd(t, n) {
        return "#page=cate&type=" + t + "&id=" + n
    }
    function Yd(t, n) {
        return "#page=tag&type=" + t + "&id=" + n
    }
    function Vd(t, n) {
        return "#page=author&type=" + t + "&id=" + n
    }
    function Wd(t, n) {
        return "#page=topic&type=" + t + "&id=" + n
    }
    function Kd(t) {
        return "#page=super_topic&id=" + t
    }
    function Xd(t) {
        return of({
            page: "topic_list",
            type: t
        })
    }
    function Gd(t, n, e) {
        return of({
            page: "rank",
            id: n,
            type: t,
            tabs: e
        })
    }
    function Jd(t, n) {
        return of({
            page: "channel",
            id: t,
            type: n
        })
    }
    function Ud(t) {
        return of({
            page: "channel",
            id: "lastest",
            type: t
        })
    }
    function qd(t, n, e) {
        return of({
            page: "book",
            id: t,
            source_id: n,
            source: e
        })
    }
    function Zd(t, n, e) {
        return of(r({
            page: "catalog",
            id: n,
            type: t
        }, e))
    }
    function Qd(t, n) {
        return of({
            page: "reader",
            id: t,
            chapter_id: n
        })
    }
    function tf(t) {
        return of({
            page: "user_center",
            type: t
        })
    }
    function nf() {
        return of({
            page: "search"
        })
    }
    function ef() {
        return of({
            page: "checkin"
        })
    }
    function rf() {
        return "/hs/static/_track_"
    }
    function of(t) {
        return "#" + f(t)
    }
    function af(t) {
        return /\/rank$/.test(t) ? zd() : /\/cate(?!\/)/.test(t) ? Dd() : /\/free_fiction/.test(t) ? Jd("free", 2) : /\/finished/.test(t) ? Jd("finished") : /\/fiction\/category\/(\d+)/.test(t) || /\/cate\/fiction\/(\d+)/.test(t) ? Fd("fiction", RegExp.$1) : /\/fiction\/rank\/(\d+)/.test(t) || /\/rank(_list)?\/fiction\/(\d+)/.test(t) ? Gd("fiction", n, RegExp.$1) : /\/hs\/book\/(.*?)\?source=(.*?)&source_id=(.*)/.test(t) ? qd(RegExp.$1, RegExp.$3, RegExp.$2) : /\/(?:super|nested)_topic\/(\d+)/.test(t) ? Kd(RegExp.$1) : /\/fiction_topic\/(\d+)/.test(t) ? Wd("fiction", RegExp.$1) : /\/topic\/(.*?)/.test(t) ? Wd("store", RegExp.$1) : /redirect\.html/.test(t) ? t + "?" : t
    }
    function cf(t) {
        var n, e;
        return n = t.replace(/\?.*$/, function(t) {
            return e = d(t ? t.substr(1) : ""),
            ""
        }
        ),
        n = af(n),
        n + "&" + f(e)
    }
    function sf(t, n) {
        var e, i;
        i = n ? ff : $t;
        try {
            e = vn(i(t))
        } catch (t) {
            gv.error("storage__get", t)
        }
        return e
    }
    function uf(t, n, e) {
        var i = e ? pf : It;
        return i(t, hn(n))
    }
    function lf(t, n) {
        var e = n ? vf : St;
        e(t)
    }
    function df(t, n, e) {
        n ? uf(t, 1, e) : lf(t, e)
    }
    function ff(t) {
        return Sv[t]
    }
    function pf(t, n) {
        Sv[t] = n
    }
    function vf(t) {
        delete Sv[t]
    }
    function hf(t) {
        return sf(Jh + t)
    }
    function _f(t, n) {
        return uf(Jh + t, n)
    }
    function mf(t, n) {
        t = +t,
        Nf(t, function(e) {
            if (!e)
                return gv.error("fiction " + t + " is not exist"),
                n(e, t);
            var i = xf()
              , r = i.indexOf(t);
            -1 !== r && i.splice(r, 1),
            i.unshift(t),
            _f(t, e),
            Tf(i),
            n(e, t)
        }
        )
    }
    function gf(t, n) {
        t = +t;
        var e = xf()
          , i = e.indexOf(t);
        return -1 === i ? n(1) : void Nf(t, function(e) {
            return e ? (_f(t, e),
            void n(0, e)) : n(1)
        }
        )
    }
    function bf(t) {
        t = +t;
        var n = xf()
          , e = n.indexOf(t);
        -1 !== e && n.splice(e, 1),
        Tf(n),
        lf(Jh + t),
        lf(Jh + t + qh),
        lf(Jh + t + Zh),
        lf(Jh + t + Qh),
        lf(Jh + t + t_),
        Ed(t)
    }
    function kf() {
        return x(xf(), hf)
    }
    function yf(n) {
        H(t, "local.books.change", n)
    }
    function wf(t) {
        return t = +t,
        -1 !== C(xf(), t)
    }
    function xf() {
        return sf(Uh) || []
    }
    function Tf(n) {
        function e(t, n) {
            return t.length != n.length ? !1 : k(t, function(t, e) {
                return t == n[e]
            }
            )
        }
        e(xf(), n) || (uf(Uh, n),
        z(t, "local.books.change", n))
    }
    function Cf(t) {
        return sf(Jh + t + qh)
    }
    function $f(t, n) {
        return wf(t) ? uf(Jh + t + qh, n) : void 0
    }
    function If(t) {
        return sf(Jh + t + t_)
    }
    function Sf(t, n) {
        return uf(Jh + t + t_, n ? "1" : "")
    }
    function Of(t) {
        return Af(Zh, t)
    }
    function Ef(t, n) {
        return Lf(Zh, t, n)
    }
    function Mf(t) {
        return Af(Qh, t)
    }
    function Pf(t, n) {
        return Lf(Qh, t, n)
    }
    function Af(t, n) {
        return wf(n) ? sf(Jh + n + t) : sf(Jh + n + t, !0)
    }
    function Lf(t, n, e) {
        return wf(n) ? uf(Jh + n + t, e) : uf(Jh + n + t, e, !0)
    }
    function Nf(t, n) {
        return Re(n_, {
            noCache: 1
        }).get(t, n)
    }
    function Bf(t, n) {
        for (var e, i = '<section class="pay-card"><div class="ttl">' + t + '</div><ul class="menu">', r = n, o = -1, a = r.length - 1; a > o; )
            e = r[++o],
            i += '<li vp-click="$root.select(' + o + ')">' + e + "</li>";
        return i += "</ul></section></div>"
    }
    function mn(t) {
        if (t) {
            var n = ".top__title";
            kv(function() {
                if (yh) {
                    var e = N(n, yh.$curr);
                    e && Oe(e, t)
                }
            }
            , 0)
        }
    }
    function Fn(t, n) {
        var e = Bf(t.title, t.items)
          , i = Pi(e, {
            select: function(t) {
                return i.close(),
                n({
                    index: t
                })
            }
        })
    }
    function Br(t) {
        function e() {
            ot(t, jt()),
            zi(function(n) {
                (2 == lv.user_type || 3 == lv.user_type) && (n.section = [n.section[2], n.section[3]]),
                4 == lv.user_type && (n.section = [n.section[3], n.section[2]]),
                Oe(t, Hr(n))
            }
            , Kt.bind(n, t, e))
        }
        return mn("\u5206\u7c7b"),
        e()
    }
    function jf(t) {
        var n = R(t, ".Swipe>div");
        return n ? !("0s" == Tv(n).webkitTransitionDuration) : !1
    }
    function Rf(t, n) {
        function e() {
            r || (yv(o),
            D(i, "webkitTransitionEnd", e),
            n())
        }
        if (!jf(t))
            return n();
        var i = R(t, ".Swipe>div");
        H(i, "webkitTransitionEnd", e);
        var r = !1
          , o = kv(function() {
            e(),
            D(i, "webkitTransitionEnd", e),
            r = !0,
            gv.error("dom__onSwipeEnd timeout!")
        }
        , 1e3)
    }
    function Hf(t) {
        H(t, "click", yn)
    }
    function Df(t) {
        H(t, "click", function() {
            _v.href = _v.pathname + _v.search + "#",
            _v.reload()
        }
        )
    }
    function su() {
        return !1
    }
    function zf() {
        function t() {
            return _v.pathname + "#" + f(gt())
        }
        _hmt && _hmt.push(["_trackPageview", t()])
    }
    function Ff(t, n, e, i) {
        _hmt && _hmt.push(["_trackEvent", t, n, e, i])
    }
    function Yf(n) {
        function e() {
            vv.head.appendChild(i)
        }
        var i = vv.createElement("script");
        t._hmt = [["_setAutoPageview", !1]],
        i.src = "//hm.baidu.com/hm.js?" + n,
        "complete" == vv.readyState ? e() : H(t, "load", e)
    }
    function Vf() {
        if (!Gf()) {
            if (fv)
                return void Wf();
            if (Xf())
                return Kf(function(t) {
                    t || (Wf(),
                    ur())
                }
                ),
                !0
        }
    }
    function Wf() {
        return It("autoLogin", 1)
    }
    function Kf(n) {
        function e() {
            var t = {
                login: 1,
                followup: uv + "/login-finished.html",
                source: "wap",
                display: "mobile"
            };
            return uv + "/dk_id/api/xiaomi_web_reg?" + f(t)
        }
        var i = "_autologin__callback";
        t[i] = function() {
            n(null ),
            delete t[i]
        }
        ,
        miui.loginAccount(e(), i)
    }
    function Xf() {
        return t.miui && miui.loginAccount && miui.isMiAccountLogin()
    }
    function Gf() {
        return !!$t("autoLogin")
    }
    function Jf(t, n, e) {
        function i(t) {
            var n = N("#root", vv);
            st(n, '<a id="_temp__nativeJumpLink" href="' + t + '"></a>');
            var e = N("#_temp__nativeJumpLink", n);
            z(e, "click"),
            Z(e)
        }
        mn(n || ""),
        t = cf(t),
        gv.log(t);
        var r = gt().page;
        r && (t += "&from=" + r),
        i(t)
    }
    function Uf() {
        var t = N("#root");
        ot(t, Fu());
        var n = N(".Swipe", t)
          , e = Gt(n, {
            disableTouch: !0
        })
          , i = d(_v.search.substr(1));
        return i.fiction_id ? _v.href = _v.pathname + "#" + f({
            page: "main",
            tab: 1,
            fiction_id: i.fiction_id,
            from: "push"
        }) : (yh = e,
        wt(e, function(t, n) {
            var e = n.page || "main";
            "main" !== e && "search" !== e && "reader" !== e ? (Oe(t, Wu()),
            t = N(".top__bd", t)) : Oe(t, jt()),
            Rf(t, function() {
                (e_[e] || op)(t, n)
            }
            )
        }
        ),
        Al(),
        void Zf())
    }
    function qf() {
        vv.oncontextmenu = function() {
            return !1
        }
        ,
        vv.onselectstart = function() {
            return !1
        }
    }
    function Zf() {
        function t() {
            var t, n, e, i;
            for (t in Iv)
                n = Iv[t],
                i = t.match(/ficiton_reader_(\d+)last_chapter/),
                i && (e = i[1],
                mf(e, function(t, n) {
                    Ef(t, n)
                }
                .bind("", e, n)))
        }
        var n = "migrate";
        kv(function() {
            if (!$t(n))
                try {
                    t(),
                    It(n, 1)
                } catch (t) {
                    gv.error("_app__migrate", t)
                }
        }
        , 0)
    }
    function Qf() {
        function n() {
            z(t, "state.change")
        }
        yt = L(yt, E, n),
        kt = L(kt, E, n),
        H(t, "load", function() {
            kv(function() {
                n(),
                H(t, "popstate", n)
            }
            , 0)
        }
        )
    }
    function tp() {
        function n() {
            e.set("dushu.xiaomi.com/shelf", JSON.stringify(kf()))
        }
        var e = Jt("https://hot.browser.miui.com", "/#page=message");
        H(t, "local.books.change", n)
    }
    function np() {
        function n() {
            zf(),
            qe(gt())
        }
        Yf("a1d10542fc664b658c3ce982b1cf4937"),
        H(t, "state.change", n)
    }
    function ep() {
        H(t, "state.change", function(t) {
            df(i_, "reader" == gt().page)
        }
        )
    }
    /**
     * app_init初始化事件
     * @return {[type]} [description]
     */
    function ip() {
        At(),
        Lt(3e3, Pt),
        qf();
        var t = N("#root");
        nn(),
        dt({
            dataType: "json",
            timeout: 1e4,
            error: function() {
                gv.log("\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")
            }
        }),
        Ct("v6__"),
        xt(),
        Tt(),
        Et(),
        $u();
        var n = Vf();
        !n && ln(),
        fv && sn() && zu(),
        rp(),
        ep(),
        Tr(t),
        Uf(),
        Qf(),
        tp(),
        np()
    }
    function rp() {
        function t() {
            Fe('.float-reminder, .book-dash .u-btn3, .u-book.-detail .price, .u-tagRT, .fiction-toc__item:before{display:none!important;}.book-dash li:first-child{width: 100%;}.book-dash li:nth-child(2){display:none;}.book-dash-text:after{content: "\u514d\u8d39\u9605\u8bfb" !important;}')
        }
        Ui(function(n) {
            n.time && t()
        }
        , function() {
            return 1
        }
        )
    }
    function op(t, n) {
        function e() {
            var t = !1;
            return yf(function() {
                gv.log("local__onBookChange"),
                t = !0
            }
            ),
            {
                clear: function() {
                    t = !1
                },
                isChange: function() {
                    return t
                }
            }
        }
        function i(t) {
            (!rt(t) || l.isChange()) && (_u("shelf"),
            Rf(t, el.bind(null , t)),
            l.clear())
        }
        function r(t) {
            var n, e, i, r;
            ot(t, Gu()),
            n = N(".Pull", t),
            e = N(".Pull-scroll", t),
            i = N(".wrap", t),
            r = Zt(n, e, {
                $tip: N(".Pull-tip", t),
                tipTimeout: 1100
            }),
            H(n, "pull:load", function(t) {
                kv(function() {
                    o(i),
                    r.hide()
                }
                , 300)
            }
            ),
            o(i)
        }
        function o(t) {
            zp(t)
        }
        var a, c = parseInt(n.tab) || 0, s = n.from, u = n.redirect, l = e(), d = sf(i_);
        if (u && u.match(/^#/)) {
            var f = Fe(".Swipe>div{transition-duration : 0s !important}");
            return n = gt(),
            delete n.redirect,
            yt(n),
            kv(function() {
                _v.href = u
            }
            , 10),
            void kv(function() {
                var e = yh;
                yh = null ,
                op(t, n),
                Z(f),
                kv(function() {
                    yh = e
                }
                , 1e3)
            }
            , 300)
        }
        ot(t, Ku(s)),
        a = Gt(N(".Swipe", t), {
            $tab: N(".Swipe-tab", t),
            tabArrow: !0,
            callback: function(t, n) {
                parseInt($t("gender") || 1);
                switch (t) {
                case 0:
                    rt(n) || r(n);
                    break;
                case 1:
                    i(n)
                }
                gt().redirect || gt().page && "main" != gt().page || yt({
                    page: "main",
                    tab: t,
                    from: s,
                    _t: gt()._t
                })
            }
        }),
        a.go(d ? 1 : c, !0),
        D(t, "page:show"),
        H(t, "page:show", function(t) {
            var n = t.data;
            if (!n) {
                var e = a.$curr;
                1 == a.curr ? i(e) : lv.user_type != bn().user_type && Pt()
            }
        }
        )
    }
    function Nr(t, n) {
        var e = n.type
          , i = n.id;
        Lr(t, e, i)
    }
    function ap(t, n) {
        Zr(t)
    }
    function cp(t, n) {
        var e = n.type
          , i = n.id;
        Ur(t, e, i, n.tabs)
    }
    function sp(t, n) {
        var e = n.type
          , i = n.id;
        ja(t, e, i)
    }
    function up(t, n) {
        Ba(t, n.type)
    }
    function lp(t, n) {
        $c(t, n.id)
    }
    function dp(t, n) {
        var e = n.id;
        ul(t, e)
    }
    function fp(t, n) {
        var e = n.type
          , i = n.id;
        switch (i) {
        case "new":
            co(t);
            break;
        case "magazine":
            so(t);
            break;
        case "free":
            lo(t, e);
            break;
        case "lastest":
            uo(t);
            break;
        case "finished":
            po(t, e);
            break;
        case "male":
            bp(t, e);
            break;
        case "female":
            kp(t, e);
            break;
        case "best":
            jr(t);
            break;
        default:
            aa(t, i)
        }
    }
    function pp(n, e) {
        var i = e.id
          , r = e.source_id
          , o = e.source
          , a = {
            id: i,
            source: o,
            source_id: r
        };
        return !a.source_id || 1 != a.source && 3 != a.source ? a.source_id && O([2, 4, 5], +a.source) ? Ju(n, a.source_id, a) : void 0 : (t.open("https://www.duokan.com/m/book/" + a.source_id),
        void yn())
    }
    function vp(t, n) {
        vl(t)
    }
    function hp(t, n) {
        var e = n.type
          , i = n.id;
        Ec(t, e, i)
    }
    function _p(t, n) {
        var e = n.type
          , i = n.id;
        Mr(t, e, i)
    }
    function mp(t, n) {
        var e = n.id;
        Il(t, e)
    }
    function gp(t, n) {
        function e(t) {
            if (!t.data) {
                var n = Of(i);
                n != r && (r = n,
                z(o, "page.change", r))
            }
        }
        var i = n.id
          , r = n.chapter_id;
        r || (r = Of(i));
        var o = (zl(t, i, r),
        N(".reader", t));
        H(t, "page:show", e),
        J(o, function() {
            D(t, "page:show", e)
        }
        ),
        mf(i, function(t) {
            Zn(i),
            Hc(i, 0, 1e7, function(t) {
                var n = t.item;
                $f(n.fiction_id, n.toc)
            }
            )
        }
        )
    }
    function bp(t, n) {
        mn(""),
        function() {
            ot(t, jt()),
            tr(function(n) {
                var e = {};
                e.label = n.title,
                e.lists = I(n.top, n.area),
                mn(e.label),
                Oe(t, Xu(e))
            }
            )
        }
        ()
    }
    function kp(t, n) {
        mn(""),
        function() {
            ot(t, jt()),
            nr(function(n) {
                var e = {};
                e.label = n.title,
                e.lists = I(n.top, n.area),
                mn(e.label),
                Oe(t, Xu(e))
            }
            )
        }
        ()
    }
    function yp(t, n, e) {
        var i = "";
        return t = Ze(t),
        i += '<div class="book-h5 book-h5_no-img" data-href="' + hi(t) + '" ' + Ou("b*" + Eu(t)) + ' expose=""><span class="book-h5_no-img__order">0' + e + '</span><div class="book-h5_no-img__info"><p class="book-h5_no-img__title">' + t.title + '<i class="book-h5_no-img__author">' + Qe(t) + "</i></p></div></div>"
    }
    function wp(t, n, e) {
        var i = "";
        return t = Ze(t),
        i += '<div class="book-h5" data-href="' + hi(t) + '" ' + Ou("b*" + Eu(t)) + ' expose="">' + Cp(t, !0, !0, e) + '<div class="book-h5__info"><p class="book-h5__title">' + t.title + '</p><p class="book-h5__author">' + Qe(t) + '</p><p class="book-h5__summary">' + vi(t) + '</p><div class="book-h5__wrap">',
        n && (i += n(t)),
        i += '<!--<p class="book-h5__latest">',
        i += t.finish ? "\u5b8c\u7ed3" : "\u8fde\u8f7d",
        i += "</p>--></div></div></div>"
    }
    function xp(t) {
        var n, e = "";
        return t = t.book || t,
        n = hi(t),
        e += '<div class="book-h5_ver" ',
        n && (e += 'data-href="' + n + '"'),
        e += " " + Ou("b*" + Eu(t)) + ' expose="">' + Cp(t, !0, !0, 0, "_ver") + '<div class="book-h5__info"><p class="book-h5__title">' + t.title + '</p><p class="book-h5__sub-title">' + t.summary + "</p></div></div>"
    }
    function Tp(t) {
        var e = ""
          , i = t.main_tag || t.tags && t.tags[0]
          , r = t.category_name !== n ? t.category_name : t.categories[0].label
          , o = Math.floor(t.word_count / 1e4);
        return i = r == i ? "" : i,
        i && (e += '<div class="book-h5__tag">' + i + "</div>"),
        r && (e += '<div class="book-h5__tag">' + r + "</div>"),
        o && (e += '<div class="book-h5__tag">' + o + "\u4e07\u5b57</div>"),
        e
    }
    function Cp(t, n, e, i, r) {
        var o = ""
          , a = t.book_id || t.fiction_id || t.id;
        return o += '<div class="book-h5__cover',
        r && (o += r),
        o += '" data-id="' + a + '" id="' + Le(kr, t) + '"><img alt=' + t.title + ' /><div class="u-tagRT"></div>',
        e && (o += '<p class="book-h5__finish">',
        o += t.finish ? "\u5b8c\u7ed3" : "\u8fde\u8f7d",
        o += "</p>"),
        i && (o += '<div class="book-h5__order">' + i + "</div>"),
        o += "</div>"
    }
    function $p(t) {
        var n = ""
          , e = t.extend.tab_btn_h5;
        return n += e ? Sp(t) : Ip(t)
    }
    function Ip(t) {
        var n = ""
          , e = t.extend
          , i = Eo(t)
          , r = Xp(t)
          , o = e.next_btn_h5;
        return n += '<section class="channel-h5 channel-h5_next" ',
        e.next_btn_h5 && (n += 'id="' + Le(Vp) + '"'),
        n += ">",
        e.hide_header || (n += Ap(t.title, e.title_align, 0, e.title_icon)),
        n += Op(i, e.show_vertical, e.next_btn_h5, e.card_count_h5, 0),
        (r || o) && (n += Lp(r, e.more_text, o)),
        n += "</section>"
    }
    function Sp(t) {
        var n = ""
          , e = t.extend
          , i = Eo(t)
          , r = Math.floor(i.length / 2)
          , o = Xp(t)
          , a = e.next_btn_h5
          , c = Gp(i, r);
        n += '<section class="channel-h5 channel-h5_tab" id="' + Le(Yp) + '">',
        e.hide_header || (n += Ap(t.title, e.title_align, !0, e.title_icon)),
        n += '<div class="tab__bd">';
        for (var s, u = c, l = -1, d = u.length - 1; d > l; ) {
            if (s = u[++l],
            n += '<div class="tab__wrap" style="display:none">' + Op(s, e.show_vertical, e.next_btn_h5, e.card_count_h5, !0, !0),
            o || a) {
                var f = 0 == l ? o : e.url_2 || o;
                n += Lp(f, e.more_text, a)
            }
            n += "</div>"
        }
        return n += "</div></section>"
    }
    function Op(t, n, e, i, r, o) {
        var a = "";
        if (e) {
            t = Gp(t, i),
            a += '<div class="Fade list-h5__wrap">';
            for (var c, s = t, u = -1, l = s.length - 1; l > u; )
                c = s[++u],
                a += "<div>" + Ep(c, n, r, "", o) + "</div>";
            a += "</div>"
        } else
            a += Ep(t, n, r);
        return a
    }
    function Ep(t, n, e, i) {
        var r = "";
        return r += n ? Pp(t, 0, Tp, e, i) : Mp(t)
    }
    function Mp(t) {
        for (var n, e = '<ul class="list-h5_col"><div>', i = t, r = -1, o = i.length - 1; o > r; ) {
            n = i[++r];
            var a = Ze(n);
            e += "<li>" + xp(a) + "</li>"
        }
        return e += "</div></ul>"
    }
    function Pp(t, n, e, i, r) {
        var o = '<ul class="list-h5';
        r && (o += " list-h5_no-img"),
        o += '">';
        for (var a, c = t, s = -1, u = c.length - 1; u > s; )
            a = c[++s],
            o += "<li>",
            o += i ? i && 0 == s ? wp(a, e, s + 1) : yp(a, "", s + 1) : wp(a, e),
            o += "</li>";
        return o += "</ul>"
    }
    function Ap(t, n, e, i) {
        var r = '<div class="channel-h5__header"><p class="channel-h5__title ' + Po("title_align", n) + '">' + t;
        return i && (r += "<i>" + i + "</i>"),
        r += "</p>",
        e && (r += '<div class="tab"><a href="javascript:" ' + Ou("t.1") + '>\u7537</a><a href="javascript:" ' + Ou("t.2") + ">\u5973</a></div>"),
        r += "</div>"
    }
    function Lp(t, n, e) {
        var i = "";
        return i += e && t ? '<div class="channel-h5__footer_next" id="' + Le(Wp) + '"><a class="btn-h5__next" href="javascript:" ' + Ou("n") + '>\u6362\u4e00\u6362</a><a class="btn-h5__more" data-href="' + t + '" ' + Ou("m") + ">" + (n || "\u67e5\u770b\u5168\u90e8") + "</a></div>" : t ? '<div class="channel-h5__footer" id="' + Le(Wp) + '"><a class="btn-h5__more" data-href="' + t + '" ' + Ou("m") + ">" + (n || "\u67e5\u770b\u5168\u90e8") + "</a></div>" : '<div class="channel-h5__footer"><a class="btn-h5__next" href="javascript:" ' + Ou("n") + ">\u6362\u4e00\u6362</a></div>"
    }
    function Np() {
        return '<section class="list-more" id="' + Le(iv) + '"><ul class="list-more__wrap"></ul></section>'
    }
    function Bp(t) {
        for (var n, e = "", i = t, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += "<li>" + wp(n, Tp) + "</li>";
        return e
    }
    function jp(t) {
        for (var n, e, i = '<section class="top-home"><div class="top-home__search" data-href="' + nf() + '">\u8f93\u5165\u4e66\u540d/\u4f5c\u8005/\u5173\u952e\u5b57</div>' + Rp(tv(t)) + '<ul class="top-home__btn">', r = nv(t), o = -1, a = r.length - 1; a > o; )
            e = r[++o],
            n = Ta(e.desc),
            i += '<li data-href="',
            n.url && (i += n.url),
            i += '" data-title="' + e.title + '"><img class="top-home__icon',
            n.hide_name && (i += "noname"),
            i += '" src="' + n.icon + '"><p class="top-home__des">' + e.title + "</p></li>";
        return i += "</ul></section>"
    }
    function Rp(t) {
        for (var n, e = '<div class="Swipe slider-banner" data-track="s" id="' + Le(Hp) + '"><div>', i = t, r = -1, o = i.length - 1; o > r; )
            n = i[++r],
            e += '<div class="u-topic" data-href="' + Cr(n) + '" data-track="' + r + '" expose="" ' + Ou("sld") + ">" + oi(n.banner, n.extend.tag) + "</div>";
        e += '</div><div class="Swipe-tab">';
        for (var n, a = t, r = -1, c = a.length - 1; c > r; )
            n = a[++r],
            e += "<a></a>";
        return e += "</div></div>"
    }
    function Hp(t) {
        var n = !Xn("takeOverTouchEvents")
          , e = 5e3
          , i = N(".Swipe-tab", t)
          , r = {
            $tab: i,
            tabArrow: i.childNodes.length > 1 ? !0 : !1,
            loop: 1,
            disableTouch: n,
            playInterval: e
        };
        return n || (H(t, "touchstart", function() {
            Adapter__takeOverTouchEvents(!0),
            ae(1)
        }
        ),
        H(t, "touchend", function() {
            Adapter__takeOverTouchEvents(!1),
            ae(0)
        }
        )),
        Gt(t, r)
    }
    function Dp(t) {
        var n = ""
          , e = t.extend
          , i = e.more_url;
        n += '<section class="banner-h5">',
        e.hide_header || (n += Ap(t.title, e.title_align, 0, e.title_icon)),
        n += '<ul class="banner-h5__list"><div>';
        for (var r, o = t.data.data, a = -1, c = o.length - 1; c > a; )
            r = o[++a],
            n += '<li><div class="banner-h5__cover" data-href="' + Cr(r) + '" ' + Ou("n") + ' expose=""><img class="cover" src="' + r.banner + '"></div></li>';
        return n += "</div></ul>",
        i && (n += Lp(i, e.more_text)),
        n += "</section>"
    }
    function zp(t) {
        var n = 418;
        ("in.dushu.xiaomi.com" == _v.hostname || _v.port % 2) && (n = 730),
        Fp(),
        aa(t, n)
    }
    function Fp() {
        sa("home-top", Up),
        sa("book-list-h5", qp),
        sa("banner-h5", Qp),
        sa("waterfall-books", Zp)
    }
    function Yp(t) {
        var n, e = N(".tab", t), i = N(".tab__bd", t), r = N(".btn-h5__next", t), o = B(".Fade", t), a = Ir(t);
        e = N(".tab", t),
        i = N(".tab__bd", t),
        n = tn(e, i, {
            tabOnClass: "tab__on",
            callback: function() {
                z(a, "scroll")
            }
        }),
        _(o, function(t) {
            Qt(t)
        }
        ),
        H(t, "click", function(t) {
            var e, i = t.target;
            if (R(i, ".btn-h5__next")) {
                var a = K(o[n.pos()]).fade;
                a && a.next(),
                Kp(r)
            } else
                R(i, ".tab a") && (e = R(i, ".tab a"),
                Kp(e))
        }
        )
    }
    function Vp(t) {
        var n = N(".Fade", t)
          , e = N(".btn-h5__next", t)
          , i = Qt(n);
        e && H(e, "click", function() {
            i.next(),
            Kp(e)
        }
        )
    }
    function Wp(t) {
        var n = N(".btn-h5__more", t);
        H(n, "click", function() {
            Kp(n)
        }
        )
    }
    function Kp(t) {
        var n, e = {};
        n = t.getAttribute("da"),
        e = {
            page: "main",
            t_: n
        },
        qe(e)
    }
    function Xp(t) {
        var n = t.extend;
        return n && n.url ? n.url : O([2, 101], t.type) ? Wd(2 == t.type ? "book" : "fiction", t.id) : 201 == t.type ? Xh(n.channel_id) : ""
    }
    function Gp(t, n) {
        var e, i, r = [];
        for (i = 0,
        e = Math.floor(t.length / n); e > i; i++)
            r[i] = t.slice(i * n, (i + 1) * n);
        return r
    }
    function Jp(t, n, e) {
        ft("/rock/book/recommend?", {
            data: t,
            success: function(t) {
                n(t)
            },
            error: e
        })
    }
    function Up(t) {
        return jp(t)
    }
    function qp(t) {
        return $p(t)
    }
    function Zp() {
        return Np()
    }
    function Qp(t) {
        return Dp(t)
    }
    function tv(t) {
        return t.data.data ? ev(t.data.data, "slider") : []
    }
    function nv(t) {
        return t.data.data ? ev(t.data.data, "tab") : []
    }
    function ev(t, n) {
        return y(t, function(t) {
            var e = Ta(t.desc);
            return e.type == n
        }
        )
    }
    function iv(t) {
        var n, e, i, r;
        n = t,
        $loadingWrap = R(n, ".channel-page"),
        t = R(t, ".wrap"),
        i = R(t, ".Pull-scroll"),
        Me($loadingWrap, Bt()),
        r = Xt(i),
        r.$loading = e = N(".Loading", t),
        H(e, "loading:load", function() {
            rv(n, e, i)
        }
        )
    }
    function rv(t, n, e) {
        var i, r = {}, o = t.dataset.start, a = N(".list-more__wrap", t);
        i = parseInt(o) || 0,
        r = {
            start: i,
            count: 10
        },
        Jp(r, function(e) {
            r.start += 10,
            t.dataset.start = r.start,
            e.items.length ? Me(a, Bp(e.items)) : Ft(n),
            Dt(n)
        }
        , function() {
            Dt(n),
            Vt(n)
        }
        )
    }
    var ov, av, cv, sv, uv, lv, dv, fv, pv, vv = t.document, hv = t.history, _v = t.location, mv = t.navigator, gv = t.console, bv = t.alert, kv = t.setTimeout, yv = t.clearTimeout, wv = t.setInterval, xv = t.clearInterval, Tv = t.getComputedStyle, Cv = t.encodeURIComponent, $v = t.decodeURIComponent, Iv = t.localStorage, Sv = t.sessionStorage, Ov = t.String, Ev = t.Array, Mv = t.Object, Pv = t.Date, Av = t.XMLHttpRequest, Lv = t.HTMLElement, Nv = t.applicationCache, Bv = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
    }, jv = {}, Rv = 1, Hv = "expando" + Math.random(), Dv = "Destructor", zv = "_Destructor", Fv = {
        type: "GET",
        success: E,
        error: E,
        complete: E,
        timeout: 0
    }, Yv = "jsonp" + Pv.now(), Vv = 0, Wv = "", Kv = "Loading_loading", Xv = "Loading_complete", Gv = "Loading_error", Jv = "Swipe-tab__on", Uv = "crossStorageSet", qv = "fakeImeiMd5", Zv = "Tab__on", Qv = {}, th = null , nh = 1, eh = [], ih = 0, rh = {
        on: function(t, n) {
            this._event = this._event || {};
            var e = this._event[t] || (this._event[t] = []);
            return e.push(n),
            this
        },
        off: function(t, n) {
            if (!this._event)
                return this;
            if (!t && !n)
                return this._event = {},
                this;
            var e = this._event[t];
            if (e)
                if (n)
                    for (var i = e.length - 1; i >= 0; i--)
                        e[i] === n && e.splice(i, 1);
                else
                    delete this._event[t];
            return this
        },
        emit: function(t, n) {
            if (!this._event)
                return this;
            var e, i = this._event[t];
            if (i)
                for (i = i.slice(); e = i.shift(); )
                    e.apply(null , m(arguments, 1));
            return this
        }
    }, oh = 200, ah = ".ListView>*{display: none;}.ListView__loading{display: block;}.ListView_error>*{display: none;}.ListView_error>.ListView__error{display: block;}.ListView_complete>*{display: none;}.ListView_complete>.ListView__complete{display: block;}.ListView_empty>*{display: none;}.ListView_empty>.ListView__empty{display: block;}", ch = {
        __init__: function(t) {
            this._cache = [],
            this.options = t || {},
            this.noCache = this.options.noCache
        },
        get: function(n, e) {
            if (!e)
                throw "callback cant be null";
            var i = this._getCache(n);
            return i.data ? e(i.data) : (i.callback.push(e),
            this.timer && t.clearTimeout(this.timer),
            void (this.timer = kv(this.doRequest_.bind(this), 0)))
        },
        run: function(t, n) {
            var e = this._getCache(t);
            e.data = n,
            e.callback.forEach(function(t) {
                t(e.data)
            }
            ),
            e.callback = [],
            this.noCache && (e.data = null )
        },
        _getCache: function(t) {
            var n = w(this._cache, function(n) {
                return n.id == t
            }
            );
            return n || (n = {
                id: t,
                data: null ,
                callback: []
            },
            this._cache.push(n)),
            n
        },
        doRequest_: function() {
            var t = [];
            _(this._cache, function(n) {
                n.callback.length && t.push(n.id)
            }
            ),
            this.request_(t)
        },
        request_: function(t) {}
    }, sh = "", uh = function() {
        function n(t) {
            for (var n, e = []; t; )
                n = t.getAttribute("data-" + r),
                n && e.push(n),
                t = t.parentElement;
            return e.reverse().join(".")
        }
        function e() {
            var t = _v.search.match(/t=(.*?)(?:$|&)/);
            return t && t[1] ? decodeURI(t[1]) : void 0
        }
        function i(t) {
            return o ? o + "|" + t : t
        }
        var r = "track"
          , o = sh = e() || "";
        return function(e) {
            if (!e)
                return sh + "-error";
            vv.getElementById("is-track-root") && (o = "");
            var a = e.target
              , c = n(a);
            if (!c && t.DK_DEBUG)
                throw "path can't be empty";
            var s = {};
            return s[r] = i(n(a)),
            sh = s[r],
            gv.log(s),
            sh
        }
    }
    (), lh = function(t, n) {
        var e = 3e5;
        if (n = n || 0,
        t = t.filter(function(t) {
            return +t.value >= n
        }
        ),
        0 === t.length)
            return t;
        {
            var i = Pv.now()
              , r = []
              , o = [];
            t.forEach(function(t) {
                var n = 1e3 * t.expire_time;
                e > n - i ? r.push(t) : o.push(t)
            }
            )
        }
        return r = r.sort(function(t, e) {
            function i(t) {
                return 1e4 * +new Pv(t.expire_time) + (+t.value - n)
            }
            return i(t) > i(e)
        }
        ),
        o = o.sort(function(t, e) {
            function i(t) {
                return 1e13 * (+t.value - n) + new Pv(t.expire_time).getTime()
            }
            return i(t) > i(e)
        }
        ),
        r.concat(o)
    }
    , dh = {
        get: or,
        sort: lh,
        group: ar,
        getAndUpdate: function(t) {
            return or(t)
        },
        hasAvail: function(t, n) {
            if ("ios" == dv || pv)
                return n(!1);
            var e = {};
            return bn().user_id ? void dh.getAndUpdate(0).then(function(i) {
                if (0 === i.result) {
                    var r = dh.sort(dh.group(i.items).avail, t);
                    e.avail = !!r.length,
                    n && n(e.avail, r)
                }
            }
            , function() {
                gv.error("get coupon failure"),
                n && n(!1, [])
            }
            ) : e
        }
    }, fh = Kt;
    Kt = function() {
        Tn(!1),
        fh.apply(this, arguments)
    }
    ;
    var ph, vh, ph, hh, _h, mh, gh, bh, kh, yh, wh = 1, xh = 2, Th = 3, Ch = 0, $h = {
        timer: null ,
        now: -1,
        timestamps: [],
        current: null ,
        start: function(t, n) {
            this.now = t,
            this.timestamps = n,
            this._startTimer(),
            this.changeScene()
        },
        stop: function() {
            t.clearInterval(this.timer),
            this.timer = null 
        },
        changeScene: function() {
            var t = this._getStatus();
            this.current !== t && (this.current = t,
            this.onChangeScene && this.onChangeScene(t)),
            this.onChange && this.onChange()
        },
        _getStatus: function() {
            for (var t = 0; this.timestamps.length > t && !(this.timestamps[t] > this.now); t++)
                ;
            return t
        },
        _startTimer: function() {
            this.stop();
            var n = this;
            this.timer = t.setInterval(function() {
                n.now = n.now + 1e3,
                n.changeScene()
            }
            , 1e3)
        }
    }, Ih = 0, Sh = 1, Oh = 2, Eh = {
        announce: da,
        author: fa,
        banner: pa,
        "book-detail": va,
        "book-list": ha,
        "bottom-bar": _a,
        tabs: ma,
        top: ga,
        gift: ba
    }, $h = {
        timer: null ,
        now: -1,
        timestamps: [],
        current: null ,
        start: function(t, n) {
            this.now = t,
            this.timestamps = n,
            this._startTimer(),
            this.changeScene()
        },
        stop: function() {
            t.clearInterval(this.timer),
            this.timer = null 
        },
        changeScene: function() {
            var t = this._getStatus();
            this.current !== t && (this.current = t,
            this.onChangeScene && this.onChangeScene(t)),
            this.onChange && this.onChange()
        },
        _getStatus: function() {
            for (var t = 0; this.timestamps.length > t && !(this.timestamps[t] > this.now); t++)
                ;
            return t
        },
        _startTimer: function() {
            this.stop();
            var n = this;
            this.timer = t.setInterval(function() {
                n.now = n.now + 1e3,
                n.changeScene()
            }
            , 1e3)
        }
    }, Mh = "topic__discount_cache_", Ih = (new Pv(Pv.now() + 1e4),
    new Pv(Pv.now() + 2e4),
    0), Sh = 1, Oh = 2, Ph = function(t) {
        var n = {}
          , e = "result";
        return i(t) ? r(n, options) : n[e] = t,
        n[e] = n[e] || 0,
        n
    }
    , Ah = function() {
        return Ph(-9)
    }
    , Lh = {
        MIPAY: {
            id: "MIPAY",
            icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01yFbAVaeBo/SXz0k3IxkFZKer.png",
            name: "\u7c73\u5e01"
        },
        ALIPAY_MOBILE: {
            id: "ALIPAY_MOBILE",
            icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01XLyVfRCBJ/8s9iT1Bb0GqiKK.png",
            name: "\u652f\u4ed8\u5b9d\u94b1\u5305"
        },
        WXPAY: {
            id: "WXPAY",
            icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01dpAabVusZ/JCtat3rVPiKnES.png",
            name: "\u5fae\u4fe1\u652f\u4ed8"
        },
        MIPAY_WEB: {
            id: "MIPAY",
            icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01yFbAVaeBo/SXz0k3IxkFZKer.png",
            name: "\u7c73\u5e01"
        },
        ALIPAY_WAP: {
            id: "ALIPAY_MOBILE",
            icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01XLyVfRCBJ/8s9iT1Bb0GqiKK.png",
            name: "\u652f\u4ed8\u5b9d\u94b1\u5305"
        }
    }, Nh = [], Bh = {}, jh = "", Rh = "", Hh = {
        expose: xu,
        "data-href": Cu
    }, Dh = [], zh = "da", Fh = "da-preload", Yh = "reader__night", Vh = "http://api.ad.xiaomi.com/static/js/miADOutside.js?v=1.0", Wh = "reader", Kh = "chapter", Xh = Jd, Gh = tf.bind(null , 1), Jh = "fiction_", Uh = Jh + "array", qh = "_toc", Zh = "_progress", Qh = "_progress_offset", t_ = "_autopay", n_ = {
        __parent__: ch,
        request_: function(t) {
            this.api(t.join(","), function(n) {
                this._process(t, n.items)
            }
            .bind(this))
        },
        _process: function(t, n) {
            t.forEach(function(t) {
                var e = w(n, function(n) {
                    return n.fiction_id == t
                }
                );
                this.run(t, e)
            }
            .bind(this))
        },
        api: function(t, n) {
            ft("/store/v0/fiction/id_list", {
                dataType: "json",
                data: {
                    ids: t,
                    owner: "0,2"
                },
                success: n,
                error: n.bind(null , {
                    items: []
                })
            })
        }
    }, e_ = {
        main: op,
        rank_list: ap,
        rank: cp,
        cate_list: Br,
        cate: Nr,
        tag: hp,
        author: _p,
        topic: sp,
        topic_list: up,
        super_topic: lp,
        channel: fp,
        book: pp,
        user_center: vp,
        search: mp,
        checkin: jl,
        reader: gp,
        catalog: dp,
        prefer: Xs
    }, i_ = "reading_before_leave";
    t.app__init = ip
}
(window);
