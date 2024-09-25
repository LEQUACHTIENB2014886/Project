(function (t) {
  function e(e) {
    for (
      var i, r, c = e[0], a = e[1], l = e[2], u = 0, f = [];
      u < c.length;
      u++
    )
      (r = c[u]),
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && f.push(o[r][0]),
        (o[r] = 0);
    for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    h && h(e);
    while (f.length) f.shift()();
    return n.push.apply(n, l || []), s();
  }
  function s() {
    for (var t, e = 0; e < n.length; e++) {
      for (var s = n[e], i = !0, c = 1; c < s.length; c++) {
        var a = s[c];
        0 !== o[a] && (i = !1);
      }
      i && (n.splice(e--, 1), (t = r((r.s = s[0]))));
    }
    return t;
  }
  var i = {},
    o = { app: 0 },
    n = [];
  function r(e) {
    if (i[e]) return i[e].exports;
    var s = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
  }
  (r.m = t),
    (r.c = i),
    (r.d = function (t, e, s) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (r.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            s,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return s;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    a = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var l = 0; l < c.length; l++) e(c[l]);
  var h = a;
  n.push([0, "chunk-vendors"]), s();
})({
  0: function (t, e, s) {
    t.exports = s("56d7");
  },
  "4d5b": function (t, e, s) {},
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e),
      s.d(e, "serverBus", function () {
        return it;
      });
    s("cadf"), s("551c"), s("f751"), s("097d");
    var i = s("2b0e"),
      o = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "classic-guitar" },
          [
            e("div", { staticClass: "buttons-wrap" }, [e("Buttons")], 1),
            e("Neck"),
          ],
          1
        );
      },
      n = [],
      r = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "buttons-module" }, [
          e(
            "div",
            { staticClass: "buttons-module-inner" },
            [
              e(
                "button",
                {
                  class: { active: t.isActiveButtons.isActiveMark },
                  on: {
                    click: function (e) {
                      return t.mark();
                    },
                  },
                },
                [t._v("\n      " + t._s(t.buttonMarkName) + "\n    ")]
              ),
              e("Controls"),
              e(
                "button",
                {
                  attrs: { disabled: t.isActiveButtons.isActivePlayAll },
                  on: {
                    click: function (e) {
                      return t.playAllStrings();
                    },
                  },
                },
                [t._v("\n      " + t._s(t.buttonPlayName) + "\n    ")]
              ),
              e(
                "button",
                {
                  staticClass: "button-tuner",
                  class: { active: t.isActiveButtons.isActiveTuner },
                  on: {
                    click: function (e) {
                      return t.tuner();
                    },
                  },
                },
                [t._v("\n      " + t._s(t.buttonTunerName) + "\n    ")]
              ),
              e(
                "div",
                {
                  ref: "dropdownMenu",
                  staticClass: "dropdown",
                  on: {
                    mouseover: function (e) {
                      t.toggleMenu = !0;
                    },
                    mouseleave: function (e) {
                      t.toggleMenu = !1;
                    },
                  },
                },
                [
                  e(
                    "button",
                    {
                      on: {
                        touchstart: function (e) {
                          t.toggleMenu = !t.toggleMenu;
                        },
                      },
                    },
                    [t._v("\n        " + t._s(t.soundsButton) + "\n      ")]
                  ),
                  e(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.toggleMenu,
                          expression: "toggleMenu",
                        },
                      ],
                      staticClass: "dropdown-content",
                    },
                    [
                      e("ul", [
                        e(
                          "li",
                          {
                            on: {
                              click: function (e) {
                                return t.soundSwitch(
                                  "steel",
                                  t.countryGuitarButton
                                );
                              },
                            },
                          },
                          [
                            t._v(
                              "\n            " +
                                t._s(t.countryGuitarButton) +
                                "\n          "
                            ),
                          ]
                        ),
                        e(
                          "li",
                          {
                            on: {
                              click: function (e) {
                                return t.soundSwitch(
                                  "classical",
                                  t.acousticGuitarButton
                                );
                              },
                            },
                          },
                          [
                            t._v(
                              "\n            " +
                                t._s(t.acousticGuitarButton) +
                                "\n          "
                            ),
                          ]
                        ),
                        e(
                          "li",
                          {
                            on: {
                              click: function (e) {
                                return t.soundSwitch(
                                  "electric",
                                  t.electricGuitarButton
                                );
                              },
                            },
                          },
                          [
                            t._v(
                              "\n            " +
                                t._s(t.electricGuitarButton) +
                                "\n          "
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              t.isActiveButtons.isActiveReset
                ? e(
                    "button",
                    {
                      on: {
                        click: function (e) {
                          return t.resetNotes();
                        },
                      },
                    },
                    [t._v("\n      " + t._s(t.resetButton) + "\n    ")]
                  )
                : t._e(),
            ],
            1
          ),
        ]);
      },
      c = [],
      a = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "controls-dropdown" }, [
          e(
            "div",
            {
              ref: "dropdownMenu",
              staticClass: "dropdown",
              on: {
                mouseover: function (e) {
                  t.toggleMenu = !0;
                },
                mouseleave: function (e) {
                  t.toggleMenu = !1;
                },
              },
            },
            [
              e(
                "button",
                {
                  on: {
                    touchstart: function (e) {
                      t.toggleMenu = !t.toggleMenu;
                    },
                  },
                },
                [t._v("\n      " + t._s(t.buttonName) + "\n    ")]
              ),
              e(
                "ul",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.toggleMenu,
                      expression: "toggleMenu",
                    },
                  ],
                  staticClass: "dropdown--highlight",
                },
                [
                  e("li", {
                    class: { active: "c" == t.selected },
                    attrs: { "data-note-color": "sort-c" },
                    domProps: {
                      innerHTML: t._s(t.noteShowObjectValueHTML(t.c)),
                    },
                    on: {
                      click: function (e) {
                        return t.showNotes(t.selectedNotes.c, "c");
                      },
                    },
                  }),
                  e("div", { staticClass: "group--notes" }, [
                    e("li", {
                      class: { active: "cis" == t.selected },
                      attrs: { "data-note-color": "sort-c" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.cis)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.cis, "cis");
                        },
                      },
                    }),
                    e("li", {
                      class: { active: "des" == t.selected },
                      attrs: { "data-note-color": "sort-d" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.des)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.des, "des");
                        },
                      },
                    }),
                  ]),
                  e("li", {
                    class: { active: "d" == t.selected },
                    attrs: { "data-note-color": "sort-d" },
                    domProps: {
                      innerHTML: t._s(t.noteShowObjectValueHTML(t.d)),
                    },
                    on: {
                      click: function (e) {
                        return t.showNotes(t.selectedNotes.d, "d");
                      },
                    },
                  }),
                  e("div", { staticClass: "group--notes" }, [
                    e("li", {
                      class: { active: "dis" == t.selected },
                      attrs: { "data-note-color": "sort-d" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.dis)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.dis, "dis");
                        },
                      },
                    }),
                    e("li", {
                      class: { active: "es" == t.selected },
                      attrs: { "data-note-color": "sort-e" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.es)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.es, "es");
                        },
                      },
                    }),
                  ]),
                  e("li", {
                    class: { active: "e" == t.selected },
                    attrs: { "data-note-color": "sort-e" },
                    domProps: {
                      innerHTML: t._s(t.noteShowObjectValueHTML(t.e)),
                    },
                    on: {
                      click: function (e) {
                        return t.showNotes(t.selectedNotes.e, "e");
                      },
                    },
                  }),
                  e("li", {
                    class: { active: "f" == t.selected },
                    attrs: { "data-note-color": "sort-f" },
                    domProps: {
                      innerHTML: t._s(t.noteShowObjectValueHTML(t.f)),
                    },
                    on: {
                      click: function (e) {
                        return t.showNotes(t.selectedNotes.f, "f");
                      },
                    },
                  }),
                  e("div", { staticClass: "group--notes" }, [
                    e("li", {
                      class: { active: "fis" == t.selected },
                      attrs: { "data-note-color": "sort-f" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.fis)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.fis, "fis");
                        },
                      },
                    }),
                    e("li", {
                      class: { active: "ges" == t.selected },
                      attrs: { "data-note-color": "sort-g" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.ges)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.ges, "ges");
                        },
                      },
                    }),
                  ]),
                  e("li", {
                    class: { active: "g" == t.selected },
                    attrs: { "data-note-color": "sort-g" },
                    domProps: {
                      innerHTML: t._s(t.noteShowObjectValueHTML(t.g)),
                    },
                    on: {
                      click: function (e) {
                        return t.showNotes(t.selectedNotes.g, "g");
                      },
                    },
                  }),
                  e("div", { staticClass: "group--notes" }, [
                    e("li", {
                      class: { active: "gis" == t.selected },
                      attrs: { "data-note-color": "sort-g" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.gis)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.gis, "gis");
                        },
                      },
                    }),
                    e("li", {
                      class: { active: "as" == t.selected },
                      attrs: { "data-note-color": "sort-a" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.as)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.as, "as");
                        },
                      },
                    }),
                  ]),
                  e("li", {
                    class: { active: "a" == t.selected },
                    attrs: { "data-note-color": "sort-a" },
                    domProps: {
                      innerHTML: t._s(t.noteShowObjectValueHTML(t.a)),
                    },
                    on: {
                      click: function (e) {
                        return t.showNotes(t.selectedNotes.a, "a");
                      },
                    },
                  }),
                  e("div", { staticClass: "group--notes" }, [
                    e("li", {
                      class: { active: "ais" == t.selected },
                      attrs: { "data-note-color": "sort-a" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.ais)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.ais, "ais");
                        },
                      },
                    }),
                    e("li", {
                      class: { active: "b" == t.selected },
                      attrs: { "data-note-color": "sort-h" },
                      domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.b)),
                      },
                      on: {
                        click: function (e) {
                          return t.showNotes(t.selectedNotes.b, "b");
                        },
                      },
                    }),
                  ]),
                  e("li", {
                    class: { active: "h" == t.selected },
                    attrs: { "data-note-color": "sort-h" },
                    domProps: {
                      innerHTML: t._s(t.noteShowObjectValueHTML(t.h)),
                    },
                    on: {
                      click: function (e) {
                        return t.showNotes(t.selectedNotes.h, "h");
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
        ]);
      },
      l = [],
      h =
        (s("ac6a"),
        s("456d"),
        {
          name: "Controls",
          data: function () {
            var t = window.translation.classicGuitar,
              e = t.buttonsNames.highlightButton,
              s = t.noteData,
              i = s.c,
              o = s.cis,
              n = s.des,
              r = s.d,
              c = s.dis,
              a = s.es,
              l = s.e,
              h = s.f,
              u = s.fis,
              f = s.ges,
              d = s.g,
              g = s.gis,
              v = s.as,
              w = s.a,
              b = s.ais,
              p = s.b,
              O = s.h;
            return {
              selected: null,
              c: i,
              cis: o,
              des: n,
              d: r,
              dis: c,
              es: a,
              e: l,
              f: h,
              fis: u,
              ges: f,
              g: d,
              gis: g,
              as: v,
              a: w,
              ais: b,
              b: p,
              h: O,
              selectedNotes: {
                c: ["h2", "a4", "g6", "f9", "e9", "d11", "h14"],
                cis: ["h3", "a5", "g7", "f10", "e10", "d12"],
                des: ["h3", "a5", "g7", "f10", "e10", "d12"],
                d: ["d1", "h4", "a6", "g8", "f11", "e11", "d13"],
                dis: ["d2", "h5", "a7", "g9", "f12", "e12", "d14"],
                es: ["d2", "h5", "a7", "g9", "f12", "e12", "d14"],
                e: ["f1", "e1", "d3", "h6", "a8", "g10", "f13", "e13"],
                f: ["f2", "e2", "d4", "h7", "a9", "g11", "f14", "e14"],
                fis: ["f3", "e3", "d5", "h8", "a10", "g12"],
                ges: ["f3", "e3", "d5", "h8", "a10", "g12"],
                g: ["f4", "g1", "e4", "d6", "f4", "a11", "g13"],
                gis: ["g2", "f5", "e5", "d7", "h10", "a12", "g14"],
                as: ["g2", "f5", "e5", "d7", "h10", "a12", "g14"],
                a: ["a1", "g3", "f6", "e6", "d8", "h11", "a13"],
                ais: ["a2", "g4", "f7", "e7", "d9", "h12", "a14"],
                b: ["a2", "g4", "f7", "e7", "d9", "h12", "a14"],
                h: ["h1", "a3", "g5", "f8", "e8", "d10", "h13"],
              },
              buttonName: e,
              toggleMenu: !1,
              touchMove: !1,
            };
          },
          created: function () {
            document.addEventListener("touchend", this.handleOutsideClick),
              document.addEventListener(
                "touchmove",
                this.handleOutsideTouchMove
              );
          },
          destroyed: function () {
            document.removeEventListener("touchend", this.handleOutsideClick),
              document.removeEventListener(
                "touchmove",
                this.handleOutsideTouchMove
              );
          },
          methods: {
            showNotes: function (t, e) {
              this.selected === e
                ? ((this.selected = !1), it.$emit("clearNotesFromControl"))
                : ((this.selected = e), it.$emit("showNotesFromControl", t, e)),
                (this.toggleMenu = !this.toggleMenu);
            },
            noteShowObjectKey: function (t) {
              return Object.keys(t)[0];
            },
            noteShowObjectValueHTML: function (t) {
              return t;
            },
            handleOutsideClick: function (t) {
              var e = this.$refs.dropdownMenu,
                s = t.target;
              e === s ||
                e.contains(s) ||
                this.touchMove ||
                (this.toggleMenu = !1),
                (this.touchMove = !1);
            },
            handleOutsideTouchMove: function (t) {
              this.touchMove = !0;
            },
          },
        }),
      u = h,
      f = (s("61d1"), s("2877")),
      d = Object(f["a"])(u, a, l, !1, null, "58836406", null),
      g = d.exports,
      v = {
        name: "Buttons",
        components: { Controls: g },
        data: function () {
          var t = window.translation.classicGuitar.buttonsNames,
            e = t.markButton,
            s = t.resetButton,
            i = t.tunerButton,
            o = t.playButton,
            n = t.soundsDropDown,
            r = n.defaultButton,
            c = n.countryGuitarButton,
            a = n.acousticGuitarButton,
            l = n.electricGuitarButton;
          return {
            isActiveButtons: {
              isActiveMark: !1,
              isActiveReset: !1,
              isActiveTuner: !1,
              isActivePlayAll: !1,
            },
            buttonMarkName: e,
            buttonResetName: s,
            buttonTunerName: i,
            buttonPlayName: o,
            soundsButton: r,
            resetButton: s,
            countryGuitarButton: c,
            acousticGuitarButton: a,
            electricGuitarButton: l,
            toggleMenu: !1,
            touchMove: !1,
          };
        },
        updated: function () {
          it.$emit("buttonsHandle", this.isActiveButtons);
        },
        mounted: function () {
          it.$emit("buttonsHandle", this.isActiveButtons);
        },
        created: function () {
          var t = this;
          it.$on("resetButtonToggle", function (e) {
            t.isActiveButtons.isActiveReset = e.isActiveReset;
          }),
            document.addEventListener("touchend", this.handleOutsideClick),
            document.addEventListener("touchmove", this.handleOutsideTouchMove);
        },
        destroyed: function () {
          document.removeEventListener("touchend", this.handleOutsideClick);
        },
        methods: {
          mark: function () {
            (this.isActiveButtons.isActiveMark =
              !this.isActiveButtons.isActiveMark),
              (this.isActiveButtons.isActivePlayAll = !1),
              this.isActiveButtons.isActiveTuner && it.$emit("clearNotesArray"),
              (this.isActiveButtons.isActiveTuner = !1);
          },
          resetNotes: function () {
            (this.isActiveButtons.isActiveReset = !1),
              it.$emit("clearNotesArray");
          },
          tuner: function () {
            (this.isActiveButtons.isActiveReset = !1),
              (this.isActiveButtons.isActiveMark = !1),
              (this.isActiveButtons.isActivePlayAll =
                !this.isActiveButtons.isActivePlayAll),
              (this.isActiveButtons.isActiveTuner =
                !this.isActiveButtons.isActiveTuner),
              it.$emit("clearNotesArray");
          },
          playAllStrings: function () {
            it.$emit("playAllStrings");
          },
          soundSwitch: function (t, e) {
            (this.soundsButton = e),
              it.$emit("soundSwitch", t),
              (this.toggleMenu = !this.toggleMenu);
          },
          handleOutsideClick: function (t) {
            var e = this.$refs.dropdownMenu,
              s = t.target;
            e === s ||
              e.contains(s) ||
              this.touchMove ||
              (this.toggleMenu = !1),
              (this.touchMove = !1);
          },
          handleOutsideTouchMove: function (t) {
            this.touchMove = !0;
          },
        },
      },
      w = v,
      b = (s("6b3c"), Object(f["a"])(w, r, c, !1, null, null, null)),
      p = b.exports,
      O =
        (s("d25f"),
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "guitar-neck-new" }, [
            e(
              "ul",
              [
                e("Headstock"),
                t._l(t.notesArr, function (s, i) {
                  return e(
                    "li",
                    { key: i },
                    [
                      0 == i
                        ? e(
                            "ul",
                            {
                              staticClass: "fret--first",
                              style: { fontSize: t.firstFretFontSize },
                            },
                            t._l(s, function (s, i, o) {
                              return e("li", { key: o }, [
                                t._v(
                                  "\n          " +
                                    t._s(t.extractHTML(s)) +
                                    "\n        "
                                ),
                              ]);
                            }),
                            0
                          )
                        : t._e(),
                      3 == i || 5 == i || 7 == i || 9 == i
                        ? e("div", { staticClass: "dots" })
                        : t._e(),
                      12 == i
                        ? e("div", { staticClass: "dots-double" }, [
                            e("span"),
                            e("span"),
                          ])
                        : t._e(),
                      t._l(s, function (s, o, n) {
                        return e(
                          "span",
                          {
                            key: n,
                            class: {
                              "active--note": t.isActiveNote.filter(function (
                                t
                              ) {
                                return t === o;
                              })[0],
                              "show--note": t.activeNoteWhite.filter(function (
                                t
                              ) {
                                return t === o;
                              })[0],
                            },
                            attrs: { note: s },
                            on: {
                              click: [
                                function (e) {
                                  if (
                                    e.ctrlKey ||
                                    e.shiftKey ||
                                    e.altKey ||
                                    e.metaKey
                                  )
                                    return null;
                                  t.clickHandle(
                                    o,
                                    t.activeNoteWhite.filter(function (t) {
                                      return t == o;
                                    })[0],
                                    s,
                                    t.notesCollection[i][o]
                                  );
                                },
                                function (e) {
                                  if (!e.altKey) return null;
                                  t.shiftHandle(
                                    o,
                                    t.activeNoteWhite.filter(function (t) {
                                      return t == o;
                                    })[0],
                                    s
                                  );
                                },
                              ],
                            },
                          },
                          [
                            (t.activeNotesURL.filter(function (t) {
                              return t == o;
                            })[0],
                            e("i", {
                              staticClass: "note-name",
                              style: { fontSize: t.circleFontSize },
                              domProps: { innerHTML: t._s(t.extractHTML(s)) },
                            })),
                          ]
                        );
                      }),
                    ],
                    2
                  );
                }),
                e("Strings"),
                e("SoundStorage"),
              ],
              2
            ),
          ]);
        }),
      m = [],
      j =
        (s("1c01"),
        s("58b2"),
        s("8e6e"),
        s("6762"),
        s("2fdb"),
        s("14b9"),
        s("8615"),
        s("0cd8"),
        s("55dd"),
        s("57e7"),
        s("78ce"),
        s("ade3")),
      N =
        (s("ffc1"),
        s("6d67"),
        s("f3e2"),
        s("28a5"),
        function () {
          var t = this,
            e = t._self._c;
          return e("ul", { staticClass: "strings" }, [
            e("li", [
              e("span", {
                staticClass: "string-left",
                style: { flexGrow: t.strings.f.flexGrowLeft },
              }),
              e("span", {
                ref: "string_f",
                staticClass: "string-right",
                style: { flexGrow: t.strings.f.flexGrowRight },
              }),
            ]),
            e("li", [
              e("span", {
                staticClass: "string-left",
                style: { flexGrow: t.strings.h.flexGrowLeft },
              }),
              e("span", {
                ref: "string_h",
                staticClass: "string-right",
                style: { flexGrow: t.strings.h.flexGrowRight },
              }),
            ]),
            e("li", [
              e("span", {
                staticClass: "string-left",
                style: { flexGrow: t.strings.g.flexGrowLeft },
              }),
              e("span", {
                ref: "string_g",
                staticClass: "string-right",
                style: { flexGrow: t.strings.g.flexGrowRight },
              }),
            ]),
            e("li", [
              e("span", {
                staticClass: "string-left",
                style: { flexGrow: t.strings.d.flexGrowLeft },
              }),
              e("span", {
                ref: "string_d",
                staticClass: "string-right",
                style: { flexGrow: t.strings.d.flexGrowRight },
              }),
            ]),
            e("li", [
              e("span", {
                staticClass: "string-left",
                style: { flexGrow: t.strings.a.flexGrowLeft },
              }),
              e("span", {
                ref: "string_a",
                staticClass: "string-right",
                style: { flexGrow: t.strings.a.flexGrowRight },
              }),
            ]),
            e("li", [
              e("span", {
                staticClass: "string-left",
                style: { flexGrow: t.strings.e.flexGrowLeft },
              }),
              e("span", {
                ref: "string_e",
                staticClass: "string-right",
                style: { flexGrow: t.strings.e.flexGrowRight },
              }),
            ]),
          ]);
        }),
      y = [],
      k = s("cffa"),
      A = {
        name: "Strings",
        data: function () {
          return {
            strings: {
              f: { flexGrowLeft: 11.5, flexGrowRight: 0.5 },
              h: { flexGrowLeft: 11.5, flexGrowRight: 0.5 },
              g: { flexGrowLeft: 11.5, flexGrowRight: 0.5 },
              d: { flexGrowLeft: 11.5, flexGrowRight: 0.5 },
              a: { flexGrowLeft: 11.5, flexGrowRight: 0.5 },
              e: { flexGrowLeft: 11.5, flexGrowRight: 0.5 },
            },
          };
        },
        updated: function () {},
        created: function () {
          var t = this;
          it.$on("shakeString", function (e) {
            (t.noteString = e), t.shakeStringFunc(e);
          });
        },
        methods: {
          shakeStringFunc: function (t) {
            var e,
              s = this.$refs.string_f,
              i = this.$refs.string_h,
              o = this.$refs.string_g,
              n = this.$refs.string_d,
              r = this.$refs.string_a,
              c = this.$refs.string_e,
              a = t.slice(0, 1),
              l = parseInt(t.slice(1) - 1 + 0.5);
            switch (((e = l > 5 ? 1.5 : 1), a)) {
              case "f":
                (this.strings.f.flexGrowLeft = l),
                  (this.strings.f.flexGrowRight = 14 - l),
                  k["b"].fromTo(
                    s,
                    4,
                    { rotation: e },
                    { rotation: 0, ease: k["a"].easeOut.config(e, 0.02) }
                  );
                break;
              case "h":
                (this.strings.h.flexGrowLeft = l),
                  (this.strings.h.flexGrowRight = 14 - l),
                  k["b"].fromTo(
                    i,
                    4,
                    { rotation: e },
                    { rotation: 0, ease: k["a"].easeOut.config(e, 0.02) }
                  );
                break;
              case "g":
                (this.strings.g.flexGrowLeft = l),
                  (this.strings.g.flexGrowRight = 14 - l),
                  k["b"].fromTo(
                    o,
                    4,
                    { rotation: e },
                    { rotation: 0, ease: k["a"].easeOut.config(e, 0.02) }
                  );
                break;
              case "d":
                (this.strings.d.flexGrowLeft = l),
                  (this.strings.d.flexGrowRight = 14 - l),
                  k["b"].fromTo(
                    n,
                    4,
                    { rotation: e },
                    { rotation: 0, ease: k["a"].easeOut.config(e, 0.02) }
                  );
                break;
              case "a":
                (this.strings.a.flexGrowLeft = l),
                  (this.strings.a.flexGrowRight = 14 - l),
                  k["b"].fromTo(
                    r,
                    4,
                    { rotation: e },
                    { rotation: 0, ease: k["a"].easeOut.config(e, 0.02) }
                  );
                break;
              case "e":
                (this.strings.e.flexGrowLeft = l),
                  (this.strings.e.flexGrowRight = 14 - l),
                  k["b"].fromTo(
                    c,
                    4,
                    { rotation: e },
                    { rotation: 0, ease: k["a"].easeOut.config(e, 0.02) }
                  );
                break;
            }
          },
        },
      },
      S = A,
      M = (s("dbe2"), Object(f["a"])(S, N, y, !1, null, "08eeb449", null)),
      L = M.exports,
      T = function () {
        var t = this,
          e = t._self._c;
        return e("div");
      },
      _ = [],
      C = s("1e5c"),
      P = window.translation.classicGuitar,
      x = P.noteData,
      H = P.keys,
      B = {
        name: "SoundStorage",
        data: function () {
          var t = {
            c: {
              notes: ["h2", "a4", "g6", "f9", "e9", "d11", "h14"],
              toggle: !1,
              noteName: "c",
            },
            cis: {
              notes: ["h3", "a5", "g7", "f10", "e10", "d12"],
              toggle: !0,
              noteName: "des",
            },
            des: {
              notes: ["h3", "a5", "g7", "f10", "e10", "d12"],
              toggle: !0,
              noteName: "des",
            },
            d: {
              notes: ["d1", "h4", "a6", "g8", "f11", "e11", "d13"],
              toggle: !1,
              noteName: "d",
            },
            dis: {
              notes: ["d2", "h5", "a7", "g9", "f12", "e12", "d14"],
              toggle: !0,
              noteName: "es",
            },
            es: {
              notes: ["d2", "h5", "a7", "g9", "f12", "e12", "d14"],
              toggle: !0,
              noteName: "es",
            },
            e: {
              notes: ["f1", "e1", "d3", "h6", "a8", "g10", "f13", "e13"],
              toggle: !1,
              noteName: "e",
            },
            f: {
              notes: ["f2", "e2", "d4", "h7", "a9", "g11", "f14", "e14"],
              toggle: !1,
              noteName: "f",
            },
            fis: {
              notes: ["f3", "e3", "d5", "h8", "a10", "g12", "f14"],
              toggle: !0,
              noteName: "ges",
            },
            ges: {
              notes: ["f3", "e3", "d5", "h8", "a10", "g12", "f14"],
              toggle: !0,
              noteName: "ges",
            },
            g: {
              notes: ["g1", "e4", "d6", "f4", "a11", "g13"],
              toggle: !1,
              noteName: "g",
            },
            gis: {
              notes: ["g2", "f5", "e5", "d7", "h10", "a12", "g14"],
              toggle: !0,
              noteName: "as",
            },
            as: {
              notes: ["g2", "f5", "e5", "d7", "h10", "a12", "g14"],
              toggle: !0,
              noteName: "as",
            },
            a: {
              notes: ["a1", "g3", "f6", "e6", "d8", "h11", "a13"],
              toggle: !1,
              noteName: "a",
            },
            ais: {
              notes: ["a2", "g4", "f7", "e7", "d9", "h12", "a14"],
              toggle: !0,
              noteName: "b",
            },
            b: {
              notes: ["a2", "g4", "f7", "e7", "d9", "h12", "a14"],
              toggle: !0,
              noteName: "b",
            },
            h: {
              notes: ["h1", "a3", "g5", "f8", "e8", "d10", "h13"],
              toggle: !1,
              noteName: "h",
            },
          };
          Object.entries(t).map(function (t, e) {
            var s = t[1],
              i = Object.values(x[t[0]])[0];
            return Object.assign(s, i), t[1];
          });
          var e = [
            { f1: "e", h1: "h", g1: "g", d1: "d", a1: "a", e1: "e" },
            { f2: "f", h2: "c", g2: "gis", d2: "dis", a2: "ais", e2: "f" },
            { f3: "fis", h3: "cis", g3: "a", d3: "e", a3: "h", e3: "fis" },
            { f4: "g", h4: "d", g4: "ais", d4: "f", a4: "c", e4: "g" },
            { f5: "gis", h5: "dis", g5: "h", d5: "fis", a5: "cis", e5: "gis" },
            { f6: "a", h6: "e", g6: "c", d6: "g", a6: "d", e6: "a" },
            { f7: "ais", h7: "f", g7: "cis", d7: "gis", a7: "dis", e7: "ais" },
            { f8: "h", h8: "fis", g8: "d", d8: "a", a8: "e", e8: "h" },
            { f9: "c", f4: "g", g9: "dis", d9: "ais", a9: "f", e9: "c" },
            {
              f10: "cis",
              h10: "gis",
              g10: "e",
              d10: "h",
              a10: "fis",
              e10: "cis",
            },
            { f11: "d", h11: "a", g11: "f", d11: "c", a11: "g", e11: "d" },
            {
              f12: "dis",
              h12: "ais",
              g12: "fis",
              d12: "cis",
              a12: "gis",
              e12: "dis",
            },
            { f13: "e", h13: "h", g13: "g", d13: "d", a13: "a", e13: "e" },
            {
              f14: "f",
              h14: "c",
              g14: "gis",
              d14: "dis",
              a14: "ais",
              e14: "f",
            },
          ];
          return {
            howlerObject: {},
            notesHowler: [
              "f1",
              "f2",
              "f3",              
              "f4",
              "f5",
              "f6",
              "f7",
              "f8",
              "f9",
              "f10",
              "f11",
              "f12",
              "f13",
              "f14",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "g1",
              "g2",
              "g3",
              "g4",
              "d1",
              "d2",
              "d3",
              "d4",
              "d5",
              "a1",
              "a2",
              "a3",
              "a4",
              "a5",
              "e1",
              "e2",
              "e3",
              "e4",
              "e5",
            ],
            itemsArr: JSON.parse(JSON.stringify(e)),
            notesCollection: JSON.parse(JSON.stringify(e)),
            selectedNotes: Object.assign({}, t),
            itemsObj: {},
            keyPressShiftHandle: Object.assign({}, H.keyPressShiftHandle),
            keyPressHandle: Object.assign({}, H.keyPressHandle),
          };
        },
        created: function () {
          var t = this;
          it.$on("soundChange", function (e) {
            t.howlerDefine(e), it.$emit("loadSoundFiles", t.itemsObj, e);
          }),
            this.objectSounds();
        },
        methods: {
          howlerDefine: function (t) {
            for (var e = 0; e < this.notesHowler.length; e++) {
              var s = this.notesHowler[e];
              this.howlerObject[s] = new C["Howl"]({
                src: [
                  "../library/guitar/note/guitar/".concat(t, "/") +
                    s +
                    ".mp3",
                ],
              });
            }
            this.itemsObj = {
              f1: this.howlerObject.f1,
              f2: this.howlerObject.f2,
              f3: this.howlerObject.f3,
              f4: this.howlerObject.f4,
              f5: this.howlerObject.f5,
              f6: this.howlerObject.f6,
              f7: this.howlerObject.f7,
              f8: this.howlerObject.f8,
              f9: this.howlerObject.f9,
              f10: this.howlerObject.f10,
              f11: this.howlerObject.f11,
              f12: this.howlerObject.f12,
              f13: this.howlerObject.f13,
              f14: this.howlerObject.f14,
              h0: this.howlerObject.h0,
              h1: this.howlerObject.h1,
              h2: this.howlerObject.h2,
              h3: this.howlerObject.h3,
              h4: this.howlerObject.h4,
              h5: this.howlerObject.h5,
              h6: this.howlerObject.f1,
              h7: this.howlerObject.f2,
              h8: this.howlerObject.f3,
              h10: this.howlerObject.f5,
              h11: this.howlerObject.f6,
              h12: this.howlerObject.f7,
              h13: this.howlerObject.f8,
              h14: this.howlerObject.f9,
              g1: this.howlerObject.g1,
              g2: this.howlerObject.g2,
              g3: this.howlerObject.g3,
              g4: this.howlerObject.g4,
              g5: this.howlerObject.h1,
              g6: this.howlerObject.h2,
              g7: this.howlerObject.h3,
              g8: this.howlerObject.h4,
              g9: this.howlerObject.h5,
              g10: this.howlerObject.f1,
              g11: this.howlerObject.f2,
              g12: this.howlerObject.f3,
              g13: this.howlerObject.f4,
              g14: this.howlerObject.f5,
              d1: this.howlerObject.d1,
              d2: this.howlerObject.d2,
              d3: this.howlerObject.d3,
              d4: this.howlerObject.d4,
              d5: this.howlerObject.d5,
              d6: this.howlerObject.g1,
              d7: this.howlerObject.g2,
              d8: this.howlerObject.g3,
              d9: this.howlerObject.g4,
              d10: this.howlerObject.h1,
              d11: this.howlerObject.h2,
              d12: this.howlerObject.h3,
              d13: this.howlerObject.h4,
              d14: this.howlerObject.h5,
              a1: this.howlerObject.a1,
              a2: this.howlerObject.a2,
              a3: this.howlerObject.a3,
              a4: this.howlerObject.a4,
              a5: this.howlerObject.a5,
              a6: this.howlerObject.d1,
              a7: this.howlerObject.d2,
              a8: this.howlerObject.d3,
              a9: this.howlerObject.d4,
              a10: this.howlerObject.d5,
              a11: this.howlerObject.g1,
              a12: this.howlerObject.g2,
              a13: this.howlerObject.g3,
              a14: this.howlerObject.g4,
              e1: this.howlerObject.e1,
              e2: this.howlerObject.e2,
              e3: this.howlerObject.e3,
              e4: this.howlerObject.e4,
              e5: this.howlerObject.e5,
              e6: this.howlerObject.a1,
              e7: this.howlerObject.a2,
              e8: this.howlerObject.a3,
              e9: this.howlerObject.a4,
              e10: this.howlerObject.a5,
              e11: this.howlerObject.d1,
              e12: this.howlerObject.d2,
              e13: this.howlerObject.d3,
              e14: this.howlerObject.d4,
            };
          },
          objectSounds: function () {
            this.howlerDefine("steel"),
              it.$emit("loadSoundFiles", this.itemsObj);
          },
        },
      },
      G = B,
      R = Object(f["a"])(G, T, _, !1, null, null, null),
      $ = R.exports,
      E = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      U = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "headstock-wrap" }, [
            e("div", { staticClass: "headstock" }, [
              e("span", { staticClass: "headstock-circel-one" }),
              e("span", { staticClass: "headstock-circel-two" }),
              e("ul", { staticClass: "headstock-strings" }, [
                e("li", { staticClass: "headstock-string-f" }),
                e("li", { staticClass: "headstock-string-h" }),
                e("li", { staticClass: "headstock-string-g" }),
                e("li", { staticClass: "headstock-string-d" }),
                e("li", { staticClass: "headstock-string-a" }),
                e("li", { staticClass: "headstock-string-e" }),
              ]),
            ]),
          ]);
        },
      ],
      V = { name: "Headstock" },
      D = V,
      F = (s("ae62"), Object(f["a"])(D, E, U, !1, null, null, null)),
      I = F.exports;
    function W(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function q(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? W(Object(s), !0).forEach(function (e) {
              Object(j["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : W(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var K = $.data(),
      z = {
        name: "Neck",
        components: { Strings: L, SoundStorage: $, Headstock: I },
        data: function () {
          var t = window.translation.classicGuitar,
            e = t.url,
            s = t.noteData,
            i = t.fontSize;
          return {
            url: e,
            firstFretFontSize: i ? i.open_fret : "1.1rem",
            circleFontSize: i ? i.circle : "15px",
            intervalVar: null,
            isActiveNote: [],
            activeNoteWhite: [],
            activeNoteWhiteChar: "",
            activeNotesURL: [],
            activeNoteNamesUrl: {},
            previousStateURL: "",
            activeNoteNamesSecondStateURL: {},
            isActiveButtons: {
              isActiveMark: !1,
              isActiveReset: !1,
              isActiveTuner: !1,
              isActivePlayAll: !0,
            },
            notesArr: K.itemsArr,
            notesCollection: K.notesCollection,
            notesHTML: s,
            noteObj: K.itemsObj,
            currentSoundVersion: "classical",
            keyPressHandle: K.keyPressHandle,
            keyPressShiftHandle: K.keyPressShiftHandle,
            notesObj: { f: "", h: "", g: "", d: "", a: "", e: "" },
            similarNotesArr: [],
            previousPlayingSound: 0,
            previousPlayingSoundId: null,
            previousSoundsArrStorage: [],
            startTimer: 0,
            tunerNote: null,
          };
        },
        beforeMount: function () {
          var t = this;
          if (
            (this.$route.query.notes &&
              (this.isActiveNote = this.$route.query.notes.split(".")),
            this.$route.query.inverted)
          ) {
            var e = this.$route.query.inverted.split(".");
            e.forEach(function (t) {
              K.notesCollection.filter(function (e, s) {
                e[t] && (K.itemsArr[s][t] = K.selectedNotes[e[t]].noteName);
              });
            });
          }
          if (this.$route.query.highlighted) {
            var s = this.$route.query.highlighted.split(".");
            s.forEach(function (e) {
              var s = K.selectedNotes[e].notes;
              (t.activeNoteWhiteChar = e),
                t.notesArr.map(function (t) {
                  return (
                    Object.entries(t).forEach(function (i) {
                      var o = i[0];
                      i[1];
                      s.forEach(function (s) {
                        s === o && (t[o] = e);
                      });
                    }),
                    t
                  );
                }),
                t.toggleNoteNames(e);
            });
          }
        },
        beforeDestroy: function () {
          document.removeEventListener("keydown", this.keyDown),
            window.removeEventListener(
              "popstate",
              this.backButtonFunctionalityURL
            );
        },
        mounted: function () {
          this.isActiveNote.length >= 1 &&
            ((this.isActiveButtons.isActiveReset = !0),
            it.$emit("resetButtonToggle", this.isActiveButtons)),
            document.addEventListener("keydown", this.keyDown),
            window.addEventListener(
              "popstate",
              this.backButtonFunctionalityURL,
              !1
            );
        },
        created: function () {
          var t = this;
          it.$on("buttonsHandle", function (e) {
            (t.isActiveMark = e.isActiveMark),
              (t.isActiveButtons.isActiveMark = e.isActiveMark),
              (t.isActiveButtons.isActiveReset = e.isActiveReset),
              (t.isActiveButtons.isActiveTuner = e.isActiveTuner),
              (t.isActiveButtons.isActivePlayAll = e.isActivePlayAll);
          }),
            it.$on("clearNotesArray", function () {
              (t.isActiveNote = []),
                (t.activeNotesURL = []),
                clearInterval(t.intervalVar),
                jQuery.ajax({
                  url: this.url,
                  type: "GET",
                  success: function () {
                    window.history.pushState("", "", this.url + "");
                  },
                  error: function () {
                    console.log("There was a problem with the request.");
                  },
                });
            }),
            it.$on("playAllStrings", function () {
              t.playAllStrings();
            }),
            it.$on("showNotesFromControl", function (e, s) {
              (t.activeNotesURL = e),
                (t.activeNoteWhite = e),
                (t.activeNoteWhiteChar = s),
                t.notesArr.map(function (t) {
                  return (
                    Object.entries(t).forEach(function (i) {
                      var o = i[0];
                      i[1];
                      e.forEach(function (e) {
                        e === o && (t[o] = s);
                      });
                    }),
                    t
                  );
                }),
                t.toggleNoteNames(s),
                jQuery.ajax({
                  url: ""
                    .concat(t.url, ".php", "?notes=")
                    .concat(t.isActiveNote.join("."), "&highlighted=")
                    .concat(
                      Object.keys(t.activeNoteNamesUrl).join("."),
                      "&inverted="
                    )
                    .concat(
                      Object.keys(t.activeNoteNamesSecondStateURL).join(".")
                    ),
                  type: "GET",
                  success: function (t) {
                    window.history.pushState("", "", this.url + "");
                  },
                  error: function () {
                    console.log("There was a problem with the request.");
                  },
                });
            }),
            it.$on("clearNotesFromControl", function () {
              (t.activeNotesURL = []),
                (t.activeNoteWhite = []),
                (t.activeNoteWhiteChar = "");
            }),
            it.$on("soundSwitch", function (e) {
              it.$emit("soundChange", e),
                t.isActiveButtons.isActiveTuner && t.playSound(t.tunerNote);
            }),
            it.$on("loadSoundFiles", function (e, s) {
              (t.noteObj = e), (t.currentSoundVersion = s);
            });
        },
        methods: {
          clickHandle: function (t, e, s, i) {
            var o = this.activeNoteNamesUrl[s];
            s === i ||
              o ||
              (this.isActiveNote.filter(function (e) {
                return e == t;
              })[0] == t ||
                e ||
                this.notesArr.map(function (e) {
                  return (
                    Object.entries(e).forEach(function (s) {
                      var o = s[0];
                      t === o && (e[o] = i);
                    }),
                    e
                  );
                }),
              delete this.activeNoteNamesSecondStateURL[t]),
              this.playSound(t, e, s);
          },
          shiftHandle: function (t, e, s) {
            var i = K.selectedNotes[s].noteName,
              o = K.selectedNotes[s].toggle;
            this.isActiveNote.filter(function (e) {
              return e === t;
            })[0] === t ||
              e ||
              (this.notesArr.map(function (e) {
                return (
                  Object.entries(e).forEach(function (s) {
                    var o = s[0];
                    t === o && (e[o] = i);
                  }),
                  e
                );
              }),
              o &&
                (this.activeNoteNamesSecondStateURL = q(
                  q({}, Object(j["a"])({}, t, t)),
                  this.activeNoteNamesSecondStateURL
                ))),
              this.playSound(t, e, i);
          },
          updateSingleNoteName: function (t, e) {
            var s = K.selectedNotes[e].noteName;
            this.notesArr.map(function (e) {
              return (
                Object.entries(e).forEach(function (i) {
                  var o = i[0];
                  i[1];
                  t === o && (e[o] = s);
                }),
                e
              );
            });
          },
          playSound: function (t, e, s) {
            var i = this.noteObj[t],
              o = this.isActiveNote,
              n = t.substr(0, 1) + 0,
              r = this.noteObj[n];
              var parentDirectory = this.url.substring(0, this.url.lastIndexOf("/")); 
            if (((this.tunerNote = n), this.isActiveButtons.isActiveTuner)) {
              clearInterval(this.intervalVar),
                this.isActiveNote.splice(0, this.isActiveNote.length);
              var c = r.play();
              this.previousPlayingSoundId &&
                this.previousPlayingSound.fade(
                  1,
                  0,
                  10,
                  this.previousPlayingSoundId
                ),
                (this.previousPlayingSoundId = c),
                (this.previousPlayingSound = i),
                it.$emit("shakeString", n),
                o.push(t.substr(0, 1) + 1);
              var a = this;
              this.intervalVar = setInterval(function () {
                (c = r.play()),
                  (a.previousPlayingSoundId = c),
                  (a.previousPlayingSound = i),
                  it.$emit("shakeString", n);
              }, 3150);
            } else
              Date.now() - this.startTimer > 100 &&
                this.previousPlayingSound &&
                this.previousPlayingSound.fade(
                  1,
                  0,
                  10,
                  this.previousPlayingSoundId
                ),
                (this.startTimer = Date.now()),
                (this.previousPlayingSoundId = i.play()),
                it.$emit("shakeString", t),
                (this.previousPlayingSound = i);
            this.isActiveButtons.isActiveMark &&
              (o.filter(function (e) {
                return e == t;
              })[0] !== t
                ? (o.push(t), void 0 !== e && this.toggleNoteNames(s))
                : (o.splice(o.indexOf(t), 1),
                  void 0 !== e && this.isMarkedRemoved(s)),
              this.isActiveNote.length >= 1
                ? ((this.isActiveButtons.isActiveReset = !0),
                  (this.isActiveButtons.isActivePlayAll = !0),
                  jQuery.ajax({
                    url: parentDirectory
                    .concat(this.url, ".php", "?notes=")
                      .concat(o.join("."), "&highlighted=")
                      .concat(
                        Object.keys(this.activeNoteNamesUrl).join("."),
                        "&inverted="
                      )
                      .concat(
                        Object.keys(this.activeNoteNamesSecondStateURL).join(
                          "."
                        )
                      ),
                    type: "GET",
                    success: function (t) {
                      window.history.pushState("", "", this.url);
                    },
                    error: function () {
                      console.log("There was a problem with the request.");
                    },
                  }))
                : ((this.isActiveButtons.isActiveReset = !1),
                  (this.isActiveButtons.isActivePlayAll = !1),
                  jQuery.ajax({
                    url: this.url +".php",
                    type: "GET",
                    success: function () {
                      window.history.pushState("", "", this.url);
                    },
                    error: function () {
                      console.log("There was a problem with the request.");
                    },
                  })),
              it.$emit("resetButtonToggle", this.isActiveButtons));
          },
          playAllStrings: function () {
            var t = this.currentSoundVersion,
              e = this.isActiveNote,
              s = (this.notesObj = {
                f: "",
                h: "",
                g: "",
                d: "",
                a: "",
                e: "",
              });
            function i(t) {
              var i = e.filter(function (e) {
                return e.slice(0, 1) === t.slice(0, 1);
              });
              i.sort(function (t, e) {
                return parseInt(t.slice(1)) - parseInt(e.slice(1));
              }),
                (s[t.slice(0, 1)] = i.pop());
            }
            e.reduce(function (t, e) {
              return i(e), t;
            }, []),
              (this.similarNotesArr = Object.values(s));
            var o = this.similarNotesArr.filter(function (t) {
                return "" !== t;
              }),
              n = this.noteObj;
            0 === o.length && (o = ["f1", "h1", "g1", "d1", "a1", "e1"]),
              o.reverse().forEach(function (e, s, i) {
                var o = n[e];
                setTimeout(function () {
                  var s = o.play();
                  it.$emit("shakeString", e),
                    "electric" === t
                      ? (o.fade(1, 0.7, 100, s),
                        setTimeout(function () {
                          o.fade(0.7, 0, 3e3, s);
                        }, 100))
                      : o.fade(1, 0, 3e3, s);
                }, 50 * s);
              });
          },
          keyDown: function (t) {
            t.preventDefault(),
              t.repeat || !this.keyPressHandle[t.keyCode] || t.shiftKey
                ? !t.repeat && this.keyPressHandle[t.keyCode] && t.shiftKey
                  ? this.keyPressShiftHandle[t.keyCode]
                    ? this.playSound(this.keyPressShiftHandle[t.keyCode])
                    : this.keyPressShiftHandle[t.code] &&
                      this.playSound(this.keyPressShiftHandle[t.code])
                  : 32 !== t.keyCode ||
                    t.repeat ||
                    (t.preventDefault(), this.playAllStrings())
                : this.playSound(this.keyPressHandle[t.keyCode]);
          },
          toggleNoteNames: function (t) {
            var e = this;
            switch (t) {
              case "des":
                delete this.activeNoteNamesUrl["cis"];
                break;
              case "es":
                delete this.activeNoteNamesUrl["dis"];
                break;
              case "as":
                delete this.activeNoteNamesUrl["gis"];
                break;
              case "ges":
                delete this.activeNoteNamesUrl["fis"];
                break;
              case "b":
                delete this.activeNoteNamesUrl["ais"];
                break;
              case "cis":
              case "dis":
              case "gis":
              case "fis":
              case "ais":
                this.isActiveNote.map(function (s) {
                  e.notesArr.map(function (i) {
                    Object.entries(i).forEach(function (i) {
                      var o = i[0],
                        n = i[1];
                      o === s &&
                        n === t &&
                        (e.activeNoteNamesUrl = q(
                          q({}, Object(j["a"])({}, t, t)),
                          e.activeNoteNamesUrl
                        ));
                    });
                  });
                });
                break;
              default:
                break;
            }
          },
          isMarkedRemoved: function (t) {
            var e = this,
              s = this.isActiveNote.filter(function (t) {
                return e.activeNoteWhite.includes(t);
              });
            s.length < 1 && delete this.activeNoteNamesUrl[t];
          },
          extractHTML: function (t) {
            return this.notesHTML[t];
          },
          backButtonFunctionalityURL: function () {
            window.location.href = document.referrer;
          },
        },
      },
      J = z,
      Q = (s("a96c"), Object(f["a"])(J, O, m, !1, null, null, null)),
      X = Q.exports,
      Y = { name: "App", components: { Neck: X, Buttons: p } },
      Z = Y,
      tt =
        (s("9f87"), s("9ac8"), Object(f["a"])(Z, o, n, !1, null, null, null)),
      et = tt.exports,
      st = s("8c4f");
    i["a"].use(st["a"]), (i["a"].config.productionTip = !1);
    var it = new i["a"](),
      ot = new st["a"]({ mode: "history", path: "*" });
    new i["a"]({
      router: ot,
      render: function (t) {
        return t(et);
      },
    }).$mount("#classic-guitar");
  },
  "61d1": function (t, e, s) {
    "use strict";
    s("c2be");
  },
  "6b3c": function (t, e, s) {
    "use strict";
    s("aa34");
  },
  "7e51": function (t, e, s) {},
  "9ac8": function (t, e, s) {
    "use strict";
    s("4d5b");
  },
  "9f87": function (t, e, s) {
    "use strict";
    s("b64c");
  },
  a96c: function (t, e, s) {
    "use strict";
    s("d32d");
  },
  aa34: function (t, e, s) {},
  ae62: function (t, e, s) {
    "use strict";
    s("7e51");
  },
  b64c: function (t, e, s) {},
  c2be: function (t, e, s) {},
  d32d: function (t, e, s) {},
  dbe2: function (t, e, s) {
    "use strict";
    s("f39b");
  },
  f39b: function (t, e, s) {},
});
