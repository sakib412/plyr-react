!(function (e, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? r(
        exports,
        require("react"),
        require("prop-types"),
        require("plyr"),
        require("react-aptor"),
        require("react/jsx-runtime")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "exports",
          "react",
          "prop-types",
          "plyr",
          "react-aptor",
          "react/jsx-runtime",
        ],
        r
      )
    : r(
        ((e = "undefined" != typeof globalThis ? globalThis : e || self)[
          "plyr-react"
        ] = {}),
        e.React,
        e.PropTypes,
        e.PlyrJS,
        e.useAptor,
        e.jsxRuntime
      );
})(this, function (e, r, t, n, o, u) {
  "use strict";
  function i(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  function c(e) {
    if (e && e.__esModule) return e;
    var r = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (t) {
          if ("default" !== t) {
            var n = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(
              r,
              t,
              n.get
                ? n
                : {
                    enumerable: !0,
                    get: function () {
                      return e[t];
                    },
                  }
            );
          }
        }),
      (r.default = e),
      Object.freeze(r)
    );
  }
  var f = c(r),
    a = i(n),
    s = i(o);
  function l() {
    return (
      (l =
        Object.assign ||
        function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
      l.apply(this, arguments)
    );
  }
  var p = ["source", "options"],
    y = function (e, r) {
      var t = new a.default(".plyr-react", r.options || {});
      return r.source && (t.source = r.source), t;
    },
    d = function (e) {
      e && e.destroy();
    },
    j = function () {},
    v = function (e) {
      return e
        ? function () {
            return { plyr: e };
          }
        : function () {
            return new Proxy(
              { plyr: { source: null } },
              {
                get: function (e, r) {
                  return "plyr" === r ? e[r] : j;
                },
              }
            );
          };
    };
  function b(e, r, t) {
    return (
      void 0 === t && (t = null),
      s.default(
        e,
        { instantiate: y, getAPI: v, destroy: d, params: r },
        t || [r.options, r.source]
      )
    );
  }
  var O = f.forwardRef(function (e, r) {
    var t = e.source,
      n = e.options,
      o = void 0 === n ? null : n,
      i = (function (e, r) {
        if (null == e) return {};
        var t,
          n,
          o = {},
          u = Object.keys(e);
        for (n = 0; n < u.length; n++)
          (t = u[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
        return o;
      })(e, p),
      c = b(r, { source: t, options: o });
    return u.jsx("video", l({ ref: c, className: "plyr-react plyr" }, i));
  });
  (e.default = O),
    (e.usePlyr = b),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
