//HTML5 A To B/B To A
if (!window.atob || !window.btoa) {
    (function (window, undefined) {
        var a = typeof window != "undefined" ? window : exports,
            b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            c = function () {
                try {
                    document.createElement("$")
                } catch (a) {
                    return a
                }
            }();
        a.btoa || (a.btoa = function (a) {
            for (var d, e, f = 0, g = b, h = ""; a.charAt(f | 0) || (g = "=", f % 1); h += g.charAt(63 & d >> 8 - f % 1 * 8)) {
                e = a.charCodeAt(f += .75);
                if (e > 255) throw c;
                d = d << 8 | e
            }
            return h
        }), a.atob || (a.atob = function (a) {
            a = a.replace(/=+$/, "");
            if (a.length % 4 == 1) throw c;
            for (var d = 0, e, f, g = 0, h = ""; f = a.charAt(g++);~ f && (e = d % 4 ? e * 64 + f : f, d++ % 4) ? h += String.fromCharCode(255 & e >> (-2 * d & 6)) : 0) f = b.indexOf(f);
            return h
        })
    })(window);
}