function generateURL() {
  function e(e) {
    var t = "",
      n = "",
      i = "abcdefghijklmnop",
      r = "qrstuvwxyzabcdef",
      s = {
        hihatfod: 1,
        sidetamlys: 2,
        gulvtam: 3,
        ride: 4,
        hihat: 5,
        lilletromme: 6,
        stortromme: 7,
      };
    for (var a in e) {
      for (var o = e[a], l = "", c = "", d = 0, h = 0; h < o.length; h++) {
        var m = parseInt(o[h]);
        1 === m
          ? ((l += i[h]), d++)
          : 2 === m && ((c += h < 10 ? r[h] : r[h]), d++);
      }
      "" !== l && (t += s[a] + l), "" !== c && (n += s[a] + c);
    }
    return t + "-" + n;
  }
  function t(e) {
    var t = "";
    for (var n in e) t += n;
    return t;
  }

  function n(e) {
    var t = {
      standard: "a",
      powerful: "b",
      monumental: "c",
      smooth: "d",
      minimalistic: "e",
      energetic: "f",
    };
    return t[e];
  }
  var i = "";
  (i += url_collection.tempo + "-"),
    (i += url_collection.swing ? "y" : "n"),
    (i += "-" + url_collection.rhythm.replace("/", "")),
    (i += "-" + n(url_collection.sound)),
    (i += "-" + t(url_collection.muted)),
    (i += "-" + e(url_collection.sequence)),
    $.ajax({
      url: TRANSLATION.url,
      type: "GET",
      success: function (e) {
        window.history.pushState("", "", this.url + "?data=" + i);
      },
      error: function () {
        console.log("There was a problem with the request.");
      },
    });
}
function decodeURL(e) {
  function t(e, t, n, i, r, s) {
    var a = e.split(/(?=\d)/) || [];
    a.forEach(function (e) {
      for (
        var a = e[0], o = e.slice(1), l = Array(i).fill(0), c = 0;
        c < o.length;
        c++
      ) {
        var d = t.indexOf(o[c]);
        d >= -1 && (l[d] = n);
      }
      r[s[a]].forEach(function (e, t) {
        r[s[a]][t] += l[t];
      });
    });
  }
  function n(e, n, i) {
    var r = {
        hihatfod: Array(i).fill(0),
        sidetamlys: Array(i).fill(0),
        gulvtam: Array(i).fill(0),
        ride: Array(i).fill(0),
        hihat: Array(i).fill(0),
        lilletromme: Array(i).fill(0),
        stortromme: Array(i).fill(0),
      },
      s = {
        1: "hihatfod",
        2: "sidetamlys",
        3: "gulvtam",
        4: "ride",
        5: "hihat",
        6: "lilletromme",
        7: "stortromme",
      },
      a = "abcdefghijklmnop",
      o = "qrstuvwxyzabcdef";
    e && t(e, a, 1, i, r, s), n && t(n, o, 2, i, r, s);
    for (var l in r) r[l] = r[l].join("");
    return r;
  }
  function i(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
    return t;
  }
  function r(e) {
    var t = {
      a: "standard",
      b: "powerful",
      c: "monumental",
      d: "smooth",
      e: "minimalistic",
      f: "energetic",
    };
    return t[e];
  }
  function s(e) {
    switch (e) {
      case "44":
        return 16;
      case "34":
        return 12;
      case "54":
        return 10;
      case "68":
        return 12;
      default:
        return 16;
    }
  }
  var a = e.split("-"),
    o = {};
  return (
    (o.tempo = parseInt(a[0])),
    (o.swing = "y" === a[1]),
    (o.rhythm = a[2].split("").join("/")),
    (o.sound = r(a[3])),
    (o.muted = i(a[4])),
    (o.sequence = n(a[5], a[6], s(a[2]))),
    o
  );
}
function decodeOldURL(e) {
  function t(e) {
    var t = e.replace("m.", "").split("");
    return t.reduce(function (e, t) {
      return (e[t] = 1), e;
    }, {});
  }
  function n(e) {
    switch ((a = e.replace("t.", ""))) {
      case "4":
        return "4/4";
      case "3":
        return "3/4";
      case "5":
        return "5/4";
      case "6":
        return "6/8";
      default:
        return "4/4";
    }
  }
  function i(e) {
    switch ((a = e.replace("t.", ""))) {
      case "4":
        return 16;
      case "3":
        return 12;
      case "5":
        return 10;
      case "6":
        return 12;
      default:
        return 16;
    }
  }
  function r(e, t) {
    var n = {
        hihatfod: Array(t).fill(0),
        sidetamlys: Array(t).fill(0),
        gulvtam: Array(t).fill(0),
        ride: Array(t).fill(0),
        hihat: Array(t).fill(0),
        lilletromme: Array(t).fill(0),
        stortromme: Array(t).fill(0),
      },
      i = {
        0: "hihatfod",
        1: "sidetamlys",
        2: "gulvtam",
        3: "ride",
        4: "hihat",
        5: "lilletromme",
        6: "stortromme",
      };
    e.forEach(function (e) {
      var t = e.split("."),
        r = i[parseInt(t[0], 10)],
        s = parseInt(t[1], 10),
        a = parseInt(t[2], 10);
      n[r][s] = a;
    });
    for (var r in n) n[r] = n[r].join("");
    return n;
  }
  var s = {},
    a = e.replace('"', "").replace('"', ""),
    o = a.split("-").reverse();
  return (
    (s.swing = "s.1" === o[0]),
    (s.tempo = parseInt(o[1].replace("tmp.", ""), 10)),
    (s.rhythm = n(o[2])),
    (s.muted = t(o[3])),
    (s.sequence = r(o.slice(4), i(o[2]))),
    (s.sound = "standard"),
    s
  );
}
function parseURLData() {
  var e = new URL(window.location.href),
    t = e.searchParams.get("data");
  if (!t) return null;
  var n = decodeURIComponent(t);
  return n.includes("-") && n.includes('"')
    ? decodeOldURL(n)
    : n.includes('"')
    ? null
    : decodeURL(n);
}
function resetURL() {
  $.ajax({
    url: TRANSLATION.url,
    type: "GET",
    success: function (e) {
      window.history.pushState("", "", this.url + "");
    },
    error: function () {
      console.log("There was a problem with the request.");
    },
  });
}
var AUDIO = new (window.AudioContext || window.webkitAudioContext)(),
  currentPatternForSwing,
  swing_toggler = !1,
  TRANSLATION = DRUM_MACHINE_TRANSLATION,
  BUTTON_NAMES = TRANSLATION.buttonNames,
  SOUND_TYPES = BUTTON_NAMES.sound,
  MODAL_NAMES = BUTTON_NAMES.modal,
  url_collection = {
    sequence: {
      hihatfod: "",
      sidetamlys: "",
      gulvtam: "",
      ride: "",
      hihat: "",
      lilletromme: "",
      stortromme: "",
    },
    muted: {},
    rhythm: "4/4",
    tempo: 90,
    swing: !1,
    sound: "standard",
  },
  dispatcher = _.extend(
    {
      EventKeys: {},
      register: function (e) {
        for (var t in e) {
          if (t in this.EventKeys)
            throw "Dispatcher error: duplicate event key: " + t;
          this.EventKeys[t] = e[t];
        }
      },
    },
    Backbone.Events
  ),
  SampleBank = (function (e) {
    function t(e, t) {
      for (var i in e) c++;
      for (var i in e) r(i, e[i]);
      n = t;
    }
    function n() {
      console.warn("Need to pass a callback to load()");
    }
    function i(e, t) {
      return t
        ? ((o[e] = t), void (++l == c && n()))
        : void console.error("Unable to decode audio file", url);
    }
    function r(t, n) {
      var r = new XMLHttpRequest();
      (r.responseType = "arraybuffer"),
        (r.onload = function () {
          e.decodeAudioData(
            r.response,
            function (e) {
              i(t, e);
            },
            function (e) {
              console.error("Unable to decode audio data", e);
            }
          );
        }),
        (r.onerror = function (e) {
          console.error("Error loading sample data", t, n, e);
        }),
        r.open("GET", n, !0),
        r.send();
    }
    function s(e, n) {
      (o = {}), (l = 0), (c = 0), t(e, n);
    }
    function a(t, n) {
      var i = e.createBufferSource();
      (i.buffer = o[t]), i.connect(e.destination), i.start(n || 0);
    }
    var o = {},
      l = 0,
      c = 0,
      d = { play: a, init: t, loadNew: s };
    return d;
  })(AUDIO),
  Sequencer = (function (e, t) {
    function n(e) {
      (p = e),
        (g = 60 / p / 4),
        currentPatternForSwing &&
          (g =
            "5/4" == currentPatternForSwing.rhythm ||
            "6/8" == currentPatternForSwing.rhythm
              ? 60 / p / 2.000000000000002
              : 60 / p / 4);
    }
    function i() {
      if (!w) return !1;
      var t = e.currentTime;
      if (((t -= E), 0 === e.currentTime && (v -= E), v < t + 0.2)) {
        var n = v + E;
        o(n), r();
      }
      f = setTimeout(i, 0);
    }
    function r() {
      _++;
      var e = S.hihat.length;
      _ >= e && (_ = 0), (v += g);
    }
    function s(e, n) {
      var i = S[e][_];
      "1" === i
        ? (t.play(e, n),
          dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_NOTE_PLAY, e))
        : "2" === i && a(e, n);
    }
    function a(e, n) {
      var i = {
        hihat: "aabenhihat",
        sidetamlys: "sidetamdyb",
        lilletromme: "kantslag",
      };
      i[e] &&
        (t.play(i[e], n),
        dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_NOTE_PLAY, e));
    }
    function o(e) {
      function t(e) {
        "4/4" === e || "3/4" === e ? n() : ("5/4" !== e && "6/8" !== e) || i(),
          _ >= a + 1 && (_ = 0);
      }
      function n() {
        _ % 4 === 3 && (_ = 15 === _ ? 0 : _ + 1),
          "3/4" === r && 12 === _ && _++;
      }
      function i() {
        _ % 2 === 0 && (v += g / 6);
      }
      var r = currentPatternForSwing.rhythm,
        a = S.hihat.length;
      for (var o in S)
        P[o] && swing_toggler && t(r),
          P[o] && s(o, e),
          dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_STEP, _);
    }
    function l(e, t) {
      if (!y) throw "Sequencer not initialized";
      null === S && c(e),
        void 0 === t && (t = 1),
        t === -1 && (t = Number.MAX_INT),
        h();
    }
    function c(e) {
      S = {};
      for (var t in e.sequence) {
        var n = d(e.sequence[t]);
        S[t] = n;
      }
    }
    function d(e) {
      return e.split("");
    }
    function h() {
      (w = !0), (v = 0), (E = e.currentTime + 0.005), i();
    }
    function m() {
      (w = !1),
        (_ = 0),
        $("#play").attr("class", "btn-play"),
        dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_STEP, _);
    }
    function u(e) {
      dispatcher.register(T), new A(e).render(), n(90), (y = !0);
    }
    var p,
      g,
      v,
      E,
      f,
      T = {
        SEQUENCER_PLAY: "sequencer:play",
        SEQUENCER_STOP: "sequencer:stop",
        SEQUENCER_SET_PATTERN: "sequencer:setpattern",
        SEQUENCER_SET_PATTERN_FROM_TACT: "sequencer:settPatternFromTact",
        SEQUENCER_PATTERN_CHANGED: "sequencer:patternchanged",
        SEQUENCER_STEP: "sequencer:step",
        SEQUENCER_NOTE_PLAY: "sequencer:noteplay",
      },
      y = !1,
      _ = 0,
      w = !1,
      S = null,
      P = {},
      C = Handlebars.compile(
        '    <div class="sequencer">        <div class="sequencer-channels">\t\t\t{{#each channels}}\t\t\t\t<div class="channel" data-inst="{{ this }}" data-count="{{ @index }}"></div>\t\t\t{{/each}} \t\t</div>    </div>'
      ),
      R = {},
      N = {},
      A = Backbone.View.extend({
        channelViews: {},
        initialize: function (e) {
          this.listenTo(dispatcher, dispatcher.EventKeys.SEQUENCER_PLAY, l),
            this.listenTo(
              dispatcher,
              dispatcher.EventKeys.SEQUENCER_STOP,
              this.stop
            ),
            this.listenTo(
              dispatcher,
              dispatcher.EventKeys.SEQUENCER_SET_PATTERN,
              this.setPattern
            ),
            this.listenTo(
              dispatcher,
              dispatcher.EventKeys.SEQUENCER_SET_PATTERN_FROM_TACT,
              this.settPatternFromTact
            ),
            this.listenTo(
              dispatcher,
              dispatcher.EventKeys.SEQUENCER_SET_TEMPO,
              n
            ),
            this.listenTo(
              dispatcher,
              dispatcher.EventKeys.SEQUENCER_STEP,
              this.setPlayhead
            ),
            this.listenTo(
              dispatcher,
              dispatcher.EventKeys.SEQUENCER_NOTE_PLAY,
              this.onNotePlay
            );
        },
        settPatternFromTact: function (e) {
          c(e), this.render(), (currentPatternForSwing = e), (R = {});
          for (var t in this.channelViews) this.channelViews[t].remove();
          for (var t in S) {
            var n = this.$el.find('.channel[data-inst="' + t + '"]');
            this.channelViews[t] = new O({
              channel: t,
              model: S[t],
              el: n,
              pattern_name: TRANSLATION.patternName[t],
              muted: e.muted[t],
              rhythm: e.rhythm,
            });
          }
          this.renderChannels();
        },
        setPattern: function (e) {
          c(e), this.render(), (currentPatternForSwing = e);
          var t = 0;
          for (var n in this.channelViews) this.channelViews[n].remove();
          for (var n in S) {
            var i = this.$el.find('.channel[data-inst="' + n + '"]');
            (this.channelViews[n] = new O({
              channel: n,
              model: S[n],
              el: i,
              pattern_name: TRANSLATION.patternName[n],
              muted: e.muted[t],
              rhythm: e.rhythm,
            })),
              t++;
          }
          this.renderChannels(), generateURL();
        },
        render: function () {
          var e = S ? Object.keys(S) : [],
            t = C({ channels: e });
          return this.$el.html(t), this;
        },
        renderChannels: function () {
          this.$channelContainer = this.$el.find(".sequencer-channels");
          for (var e in this.channelViews) this.channelViews[e].render();
          this.$steps = $(".channel span");
        },
        setPlayhead: function (e) {
          for (var t in this.channelViews) this.channelViews[t].setPlayhead(e);
        },
        stop: function () {
          m();
          for (var e in this.channelViews) this.channelViews[e].clearPlayhead();
        },
      }),
      b = Handlebars.compile(
        '    <p class="seq-row-name mute active" title="{{ pattern_name }}">    <span class="desktop--show">{{ pattern_name }}</span>    </p>      <div class="seq-row inline">      \t{{#each notes}}        <span data-tic="{{ @index }}" class=""></span>\t\t{{/each}}     </div>    '
      ),
      O = Backbone.View.extend({
        events: {
          "click .seq-row span": "onNoteClick",
          "click .pad": "onPadClick",
          "click .mute": "onMuteClick",
        },
        channel: null,
        active: !0,
        initialize: function (e) {
          (this.channel = e.channel),
            (this.pattern_name = e.pattern_name),
            (this.muted = e.muted),
            (this.rhythm = e.rhythm);
        },
        render: function () {
          var e = b({
            id: this.channel,
            symbol: this.channel.substr(0, 1).toUpperCase(),
            word: this.channel,
            notes: this.model,
            pattern_name: this.pattern_name,
          });
          this.$el.html(e),
            (this.$notes = this.$el.find(".seq-row span")),
            (this.$eq_bar = this.$el.find(".meter span")),
            (this.$active = this.$el.find(".mute"));
          var t = this,
            n = 1;
          return (
            this.model.forEach(function (e, i) {
              var r = t.$notes.eq(i);
              "1" === e
                ? (r.addClass("seq-note"),
                  (R[t.el.dataset.count + ":" + i] =
                    t.el.dataset.count + "." + i + "." + e))
                : ("2" === e && "hihat" == t.channel) ||
                  ("2" === e && "sidetamlys" == t.channel) ||
                  ("2" === e && "lilletromme" == t.channel)
                ? (r.addClass("seq-note-yellow"),
                  (R[t.el.dataset.count + ":" + i] =
                    t.el.dataset.count + "." + i + "." + e))
                : "3" === e
                ? r.addClass("seq-note-empty")
                : delete R[t.el.dataset.count + ":" + i],
                "4/4" == t.rhythm || "3/4" == t.rhythm
                  ? (i % 4 === 0 &&
                      r.addClass("seq-step-measure").html(i / 4 + 1),
                    swing_toggler && i % 4 === 3 && r.hide())
                  : ("5/4" != t.rhythm && "6/8" != t.rhythm) ||
                    (i % 2 === 0 && r.addClass("seq-step-measure").html(n++));
            }),
            (url_collection.sequence[t.channel] = t.model.join("")),
            this.active
              ? delete N[t.el.dataset.count]
              : (N[t.el.dataset.count] = t.el.dataset.count),
            this.muted
              ? (this.$active.toggleClass("active", !this.active),
                this.$notes.toggleClass("seq-active", !this.active),
                (P[this.channel] = !this.active),
                (N[t.el.dataset.count] = t.el.dataset.count),
                this.active || delete N[t.el.dataset.count])
              : (this.$active.toggleClass("active", this.active),
                this.$notes.toggleClass("seq-active", this.active),
                (P[this.channel] = this.active)),
            (url_collection.muted = N),
            (url_collection.rhythm = t.rhythm),
            (url_collection.swing = swing_toggler),
            this
          );
        },
        clearPlayhead: function () {
          this.$notes.removeClass("seq-playhead");
        },
        setPlayhead: function (e) {
          this.clearPlayhead(),
            this.$notes
              .filter('[data-tic="' + e + '"]')
              .addClass("seq-playhead");
        },
        onNoteClick: function (e) {
          var n = $(e.currentTarget).attr("data-tic"),
            i = S[this.channel][n],
            r = ["hihat", "sidetamlys", "lilletromme"],
            s = {
              hihat: "aabenhihat",
              sidetamlys: "sidetamdyb",
              lilletromme: "kantslag",
            };
          r.includes(this.channel)
            ? (S[this.channel][n] =
                "2" === i ? "0" : (parseInt(i) + 1).toString())
            : (S[this.channel][n] = "1" === i ? "0" : "1");
          var a = S[this.channel][n];
          w ||
            "0" === a ||
            ("2" === a && this.channel in s
              ? t.play(s[this.channel])
              : t.play(this.channel)),
            $(".clearBtn").toggleClass(
              "clearBtn-disabled",
              Object.values(S).every(function (e) {
                return e.every(function (e) {
                  return "0" === e;
                });
              })
            ),
            this.render(),
            generateURL();
        },
        onMuteClick: function (e) {
          (this.active = !this.active),
            (P[this.channel] = this.active),
            this.$active.toggleClass("active", this.active),
            this.$notes.toggleClass("seq-active", this.active),
            this.active || $(".clearBtn").removeClass("clearBtn-disabled"),
            this.render(),
            generateURL();
        },
        spikeEQ: function () {
          var e = this;
          this.$eq_bar.removeClass("fade"),
            this.$eq_bar.css("transform", "scaleX(1)"),
            setTimeout(function () {
              e.$eq_bar.addClass("fade"),
                e.$eq_bar.css("transform", "scaleX(0)");
            }, 50);
        },
      });
    return { init: u };
  })(AUDIO, SampleBank),
  Transport = (function () {
    function e() {
      dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_REQUEST_PLAY);
    }
    function t() {
      dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_REQUEST_STOP);
    }
    function n(e) {
      dispatcher.register(i), new a(e).render();
    }
    const BUTTON_NAMES = {
      settings: "Cài đặt",
      presetsButtonName: "Nhịp điệu",
      reset: "Xóa",
    };
    var i = {
        TRANSPORT_PLAY: "transport:play",
        TRANSPORT_STOP: "transport:stop",
        TRANSPORT_CLEAR: "transport:clear",
        TRANSPORT_REQUEST_PLAY: "transport:requestplay",
        TRANSPORT_REQUEST_STOP: "transport:requeststop",
        TRANSPORT_REQUEST_MUTE: "transport:requestmute",
        TRANSPORT_TEMPO_CHANGED: "transport:tempochanged",
        TRANSPORT_CHANGE_TEMPO: "transport:changetempo",
      },
      r = {
        "3/4": {
          sequence: {
            hihatfod: "000000000000",
            sidetamlys: "000000000000",
            gulvtam: "000000000000",
            ride: "000000000000",
            hihat: "000000000000",
            lilletromme: "000000000000",
            stortromme: "000000000000",
          },
          muted: {},
          swing: !1,
          rhythm: "3/4",
        },
        "4/4": {
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "0000000000000000",
            lilletromme: "0000000000000000",
            stortromme: "0000000000000000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "5/4": {
          sequence: {
            hihatfod: "0000000000",
            sidetamlys: "0000000000",
            gulvtam: "0000000000",
            ride: "0000000000",
            hihat: "0000000000",
            lilletromme: "0000000000",
            stortromme: "0000000000",
          },
          muted: {},
          swing: !1,
          rhythm: "5/4",
        },
        "6/8": {
          sequence: {
            hihatfod: "000000000000",
            sidetamlys: "000000000000",
            gulvtam: "000000000000",
            ride: "000000000000",
            hihat: "000000000000",
            lilletromme: "000000000000",
            stortromme: "000000000000",
          },
          muted: {},
          swing: !1,
          rhythm: "6/8",
        },
      },
      s = Handlebars.compile(
        '<div class="transport"><div class="module-wrapper"><div class="buttons"><button id="play" class="btn-play" title="Start">&ensp;</button><input type="text" name="tempo" size="4" min="30" max="250" maxlength="3" step="10" value="90" class="transport-tempo"><button class="modal-button">' +
          BUTTON_NAMES.settings +
          '</button><nav class="dropdown"><button class="presetsBtn dropButton">' +
          BUTTON_NAMES.presetsButtonName +
          '</button><ul class="presets dropdown-content"></ul></nav><button class="clearBtn">' +
          BUTTON_NAMES.reset +
          '</button></div></div><div class="modal-container"></div></div>'
      ),
      a = Backbone.View.extend({
        events: {
          "click .btn-play, .btn-pause": function (e) {
            $(e.target).toggleClass("btn-play btn-pause");
          },
          "click .btn-play": "onPlayClick",
          "click .btn-pause": "onStopClick",
          "change .transport-tempo": "onTempoChange",
          "click .clearBtn": "onClearBtnClick",
          "click .modal-button": function () {
            dispatcher.trigger(dispatcher.EventKeys.MODAL_OPEN);
          },
          "click .modal-container": function (e) {
            e.target.classList.contains("modal-container") &&
              (dispatcher.trigger(dispatcher.EventKeys.MODAL_CLOSE),
              $(".dropdown__content").removeClass("active"));
          },
          "touchstart .beatTime": "onBeatClick",
          "touchstart .presetsBtn": "onBeatClick",
          "mouseover .dropdown button": "showDropdown",
          "mouseleave .dropdown": "hideDropdown",
        },
        initialize: function (n) {
          this.listenTo(dispatcher, dispatcher.EventKeys.TRANSPORT_PLAY, e),
            this.listenTo(dispatcher, dispatcher.EventKeys.TRANSPORT_STOP, t),
            this.listenTo(
              dispatcher,
              dispatcher.EventKeys.TRANSPORT_CLEAR,
              this.onClearBtnClick
            ),
            this.listenTo(
              dispatcher,
              dispatcher.EventKeys.TRANSPORT_CHANGE_TEMPO,
              this.onIncomingTempoChange
            ),
            (this.spacePressed = !1),
            $(document).on("keydown", this.keydown.bind(this)),
            $(document).on("keyup", this.keyup.bind(this));
        },
        render: function () {
          var e = s();
          return (
            $("body").on("touchend", this.outsideClickDetect),
            window.addEventListener(
              "popstate",
              this.backButtonFunctionalityURL,
              !1
            ),
            this.$el.html(e),
            (this.$tempo = this.$el.find(".transport-tempo")),
            (this.$ryd = this.$el.find(".clearBtn")),
            this
          );
        },
        outsideClickDetect: function (e) {
          var t = $(e.target);
          t.closest(".dropdown").length ||
            $(".dropdown").find(".dropdown-content").removeClass("active");
        },
        backButtonFunctionalityURL: function () {
          window.location.href = document.referrer;
        },
        onPlayClick: e,
        onStopClick: t,
        onTempoChange: function (e) {
          var t = $(e.currentTarget).val(),
            n = parseInt(t);
          swing_toggler &&
            (t /=
              "5/4" === currentPatternForSwing.rhythm ||
              "6/8" === currentPatternForSwing.rhythm
                ? 0.66666666666
                : 1.33),
            (url_collection.tempo = n),
            (url_collection.rhythm = currentPatternForSwing.rhythm),
            (url_collection.swing = swing_toggler),
            generateURL(),
            dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED, t);
        },
        onIncomingTempoChange: function (e) {
          this.$tempo.val(e),
            dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED, e);
        },
        keydown: function (n) {
          var i = parseInt($('input[name="tempo"]').val()),
            r = $("#play");
          switch (n.keyCode) {
            case 32:
              n.preventDefault(),
                this.spacePressed ||
                  ((this.spacePressed = !0),
                  r.toggleClass("btn-play btn-pause"),
                  r.hasClass("btn-pause")
                    ? dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_PLAY, e)
                    : t());
              break;
            case 37:
              $('input[name="tempo"]')
                .val(i - 1)
                .change();
              break;
            case 39:
              $('input[name="tempo"]')
                .val(i + 1)
                .change();
          }
        },
        keyup: function (e) {
          32 === e.keyCode && (this.spacePressed = !1);
        },
        onClearBtnClick: function (e) {
          e.preventDefault(),
            (currentPatternForSwing =
              r[currentPatternForSwing.rhythm] || currentPatternForSwing),
            this.$ryd.addClass("clearBtn-disabled");
          for (var t in currentPatternForSwing.sequence)
            (currentPatternForSwing.sequence[t] =
              currentPatternForSwing.sequence[t].replace(/1/g, "0")),
              (currentPatternForSwing.sequence[t] =
                currentPatternForSwing.sequence[t].replace(/2/g, "0"));
          resetURL(),
            $(".presetsBtn").text(BUTTON_NAMES.presetsButtonName),
            $(".preset_active").removeClass("active"),
            dispatcher.trigger(
              dispatcher.EventKeys.SEQUENCER_SET_PATTERN_FROM_TACT,
              currentPatternForSwing
            );
        },
        hideDropdown: function (e) {
          $(e.currentTarget).find(".dropdown-content").removeClass("active");
        },
        showDropdown: function (e) {
          $(e.currentTarget)
            .parent()
            .find(".dropdown-content")
            .addClass("active");
        },
        onBeatClick: function (e) {
          $(e.currentTarget)
            .parent()
            .find(".dropdown-content")
            .toggleClass("active");
        },
      });
    return { init: n };
  })(),
  PresetList = (function () {
    function e(e) {
      dispatcher.register(t), new s(e).render();
    }
    var t = { PRESET_SELECTED: "preset:selected" },
      n = {
        "Pop/rock 1": {
          tempo: 90,
          name: "Pop/rock 1",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1010101010101010",
            lilletromme: "0000100000001000",
            stortromme: "1000000010000000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Pop/rock 2": {
          tempo: 90,
          name: "Pop/rock 2",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1010101010101010",
            lilletromme: "0000100000001000",
            stortromme: "1000000010100000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Pop/rock 3": {
          tempo: 90,
          name: "Pop/rock 3",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1010101010101010",
            lilletromme: "0000100000001000",
            stortromme: "1000001010000000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Pop/rock 4": {
          tempo: 90,
          name: "Pop/rock 4",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1010101010101010",
            lilletromme: "0000100000001000",
            stortromme: "1000001000100000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Pop/rock 5": {
          tempo: 90,
          name: "Pop/rock 5",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1010101010101010",
            lilletromme: "0000100000001000",
            stortromme: "1000000100100000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Pop/rock 6": {
          tempo: 90,
          name: "Pop/rock 6",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1010101010101010",
            lilletromme: "0000100000001000",
            stortromme: "0010000010000000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Pop/rock i 3/4": {
          tempo: 110,
          name: "Pop/rock i 3/4",
          sequence: {
            hihatfod: "000000000000",
            sidetamlys: "000000000000",
            gulvtam: "000000000000",
            ride: "000000000000",
            hihat: "101010101010",
            lilletromme: "000000001000",
            stortromme: "100000100000",
          },
          muted: {},
          swing: !1,
          rhythm: "3/4",
        },
        "Pop/rock i 6/8": {
          tempo: 180,
          name: "Pop/rock i 6/8",
          sequence: {
            hihatfod: "000000000000",
            sidetamlys: "000000000000",
            gulvtam: "000000000000",
            ride: "000000000000",
            hihat: "101010101010",
            lilletromme: "000000100000",
            stortromme: "100000000000",
          },
          muted: {},
          swing: !1,
          rhythm: "6/8",
        },
        "Jazz 1": {
          tempo: 110,
          name: "Jazz 1",
          sequence: {
            hihatfod: "0000100000001000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "1000101010001010",
            hihat: "0000000000000000",
            lilletromme: "0000000000000000",
            stortromme: "0000000000000000",
          },
          muted: {},
          swing: !0,
          rhythm: "4/4",
        },
        "Jazz 2": {
          tempo: 110,
          name: "Jazz 2",
          sequence: {
            hihatfod: "0000100000001000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "1000101010001010",
            hihat: "0000000000000000",
            lilletromme: "0000000000001000",
            stortromme: "1000000000000000",
          },
          muted: {},
          swing: !0,
          rhythm: "4/4",
        },
        "Jazz 3": {
          tempo: 110,
          name: "Jazz 3",
          sequence: {
            hihatfod: "0000100000001000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "1000101010001010",
            hihat: "0000000000000000",
            lilletromme: "0000000000100000",
            stortromme: "0000001000000000",
          },
          muted: {},
          swing: !0,
          rhythm: "4/4",
        },
        "Jazz 4": {
          tempo: 110,
          name: "Jazz 4",
          sequence: {
            hihatfod: "0000100000001000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "1010101010101010",
            hihat: "0000000000000000",
            lilletromme: "0020000000002000",
            stortromme: "1000000010000000",
          },
          muted: {},
          swing: !0,
          rhythm: "4/4",
        },
        "Funk 1": {
          tempo: 110,
          name: "Funk 1",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1010101010101010",
            lilletromme: "0000100101001100",
            stortromme: "1000000000100001",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Funk 2": {
          tempo: 90,
          name: "Funk 2",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1111112111111121",
            lilletromme: "0000100101011000",
            stortromme: "1010000010100100",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Disco 1": {
          tempo: 90,
          name: "Disco 1",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1020102010201020",
            lilletromme: "0000100000001000",
            stortromme: "1000100010001000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Disco 2": {
          tempo: 110,
          name: "Disco 2",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1020101110201011",
            lilletromme: "0000100000001000",
            stortromme: "1000100010001000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Rap 1": {
          tempo: 80,
          name: "Rap 1",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "0110101010101010",
            lilletromme: "0000100000001000",
            stortromme: "1010001001000000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Rap 2": {
          tempo: 90,
          name: "Rap 2",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "1010101010101020",
            lilletromme: "0000100000001000",
            stortromme: "1011011001100000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Heavy metal 1": {
          tempo: 90,
          name: "Heavy metal 1",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "2020202020202020",
            lilletromme: "0000100000001010",
            stortromme: "1011001111000001",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "Heavy metal 2": {
          tempo: 90,
          name: "Heavy metal 2",
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "2020202020202020",
            lilletromme: "0000100000001000",
            stortromme: "1110001110010011",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
      },
      i = 0;
    _.forOwn(n, function (e) {
      (i += 1), (e.name = BUTTON_NAMES.presets[i]);
    });
    var r = Handlebars.compile(
        '        {{#each items}}            <li data-preset-id="{{ @key }}" class="preset-item">{{ name }}</li>        {{/each}}    '
      ),
      s = Backbone.View.extend({
        events: { "click .preset-item": "onPresetClick" },
        initialize: function () {
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.PRESET_SELECTED,
            this.onPresetSelected
          );
        },
        render: function () {
          var e = r({ items: n });
          return (
            this.$el.html(e),
            (this.$items = this.$el.find(".preset-item")),
            this
          );
        },
        onPresetClick: function (e) {
          e.preventDefault();
          var t = $(e.currentTarget).text(),
            i = $(e.currentTarget).attr("data-preset-id"),
            r = n[i].rhythm,
            s = n[i].swing,
            a = n[i].tempo,
            o = n[i].tempo;
          s ? ((o /= 1.33), (swing_toggler = !0)) : (swing_toggler = !1),
            $(".swing-toggle").toggleClass("active", swing_toggler),
            this.$items.removeClass("preset_active active"),
            $(".set-beat").removeClass("active"),
            $(".dropdown ul").removeClass("active"),
            $(e.currentTarget).addClass("preset_active active"),
            $(".presetsBtn").text(t),
            $(".beatTime").text(r),
            $(".clearBtn").removeClass("clearBtn-disabled"),
            (url_collection.tempo = a),
            (url_collection.rhythm = r),
            (url_collection.swing = swing_toggler),
            generateURL(),
            dispatcher.trigger(dispatcher.EventKeys.PRESET_SELECTED, n[i]),
            dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED, o);
        },
      });
    return { init: e };
  })(),
  SoundTypes = (function () {
    function e(e) {
      dispatcher.register(t), new r(e).render();
    }
    const SOUND_TYPES = {
      standard: "Mặc định",
      powerful: "Mạnh mẽ",
      monumental: "Vĩ đại",
      smooth: "Mượt mà",
      minimalistic: "Tối giản",
      energetic: "Năng động",
    };
    var t = { SOUND_SELECTED: "sound:selected" },
      n = Handlebars.compile(
        '        {{#each items}}            <li data-sound-id="{{ @key }}" class="sound-item">{{ lookup ../SOUND_TYPES @key }}</li>        {{/each}}    '
      ),
      i = {
        standard: "standard",
        powerful: "powerful",
        monumental: "monumental",
        smooth: "smooth",
        minimalistic: "minimalistic",
        energetic: "energetic",
      },
      r = Backbone.View.extend({
        events: { "click .sound-item": "onSoundClick" },
        initialize: function () {
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.SOUND_SELECTED,
            this.onSoundSelected
          );
        },
        render: function () {
          var e = n({ items: i, SOUND_TYPES: SOUND_TYPES });
          return (
            this.$el.html(e), (this.$items = this.$el.find(".sound-item")), this
          );
        },
        onSoundClick: function (e) {
          e.preventDefault();
          var t = $(e.currentTarget).text(),
            n = $(e.currentTarget).attr("data-sound-id");
          this.$items.removeClass("sound_active active"),
            $(e.currentTarget).addClass("sound_active active"),
            $(".dropdown ul").removeClass("active"),
            $(".sound-types-button").text(t),
            dispatcher.trigger(dispatcher.EventKeys.SOUND_SELECTED, i[n]),
            url_collection.sound !== i[n] &&
              ((url_collection.sound = i[n]), generateURL());
        },
      });
    return { init: e };
  })(),
  TimeSignature = (function () {
    function e(e) {
      dispatcher.register(t), new s(e).render();
    }
    var t = { BEAT_SELECTED: "beat:selected" },
      n = Handlebars.compile(
        '        {{#each items}}            <li class="set-beat" data-beat="{{ this }}">{{ this }}</li>        {{/each}}    '
      ),
      i = ["3/4", "4/4", "5/4", "6/8"],
      r = {
        "3/4": {
          sequence: {
            hihatfod: "000000000000",
            sidetamlys: "000000000000",
            gulvtam: "000000000000",
            ride: "000000000000",
            hihat: "000000000000",
            lilletromme: "000000000000",
            stortromme: "000000000000",
          },
          muted: {},
          swing: !1,
          rhythm: "3/4",
        },
        "4/4": {
          sequence: {
            hihatfod: "0000000000000000",
            sidetamlys: "0000000000000000",
            gulvtam: "0000000000000000",
            ride: "0000000000000000",
            hihat: "0000000000000000",
            lilletromme: "0000000000000000",
            stortromme: "0000000000000000",
          },
          muted: {},
          swing: !1,
          rhythm: "4/4",
        },
        "5/4": {
          sequence: {
            hihatfod: "0000000000",
            sidetamlys: "0000000000",
            gulvtam: "0000000000",
            ride: "0000000000",
            hihat: "0000000000",
            lilletromme: "0000000000",
            stortromme: "0000000000",
          },
          muted: {},
          swing: !1,
          rhythm: "5/4",
        },
        "6/8": {
          sequence: {
            hihatfod: "000000000000",
            sidetamlys: "000000000000",
            gulvtam: "000000000000",
            ride: "000000000000",
            hihat: "000000000000",
            lilletromme: "000000000000",
            stortromme: "000000000000",
          },
          muted: {},
          swing: !1,
          rhythm: "6/8",
        },
      },
      s = Backbone.View.extend({
        events: { "click .set-beat": "onBeatClick" },
        initialize: function () {
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.BEAT_SELECTED,
            this.onBeatSelected
          );
        },
        render: function () {
          var e = n({ items: i });
          return (
            this.$el.html(e), (this.$items = this.$el.find(".set-beat")), this
          );
        },
        onBeatClick: function (e) {
          e.preventDefault();
          var t = $(e.currentTarget).text();
          this.$items.removeClass("beat_active active"),
            $(e.currentTarget).addClass("beat_active active"),
            $(".dropdown ul").removeClass("active"),
            $(".beatTime").text(t),
            $(".presetsBtn").text(BUTTON_NAMES.presetsButtonName),
            $(".clearBtn").addClass("clearBtn-disabled");
          var n = $(".transport-tempo").val();
          currentPatternForSwing = r[t] || currentPatternForSwing;
          for (var i in currentPatternForSwing.sequence)
            (currentPatternForSwing.sequence[i] =
              currentPatternForSwing.sequence[i].replace(/1/g, "0")),
              (currentPatternForSwing.sequence[i] =
                currentPatternForSwing.sequence[i].replace(/2/g, "0"));
          (url_collection.sequence = currentPatternForSwing.sequence),
            (url_collection.rhythm = t),
            generateURL();
          var s = $("#play");
          s[0].classList.contains("btn-pause") &&
            (dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_REQUEST_STOP),
            dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_REQUEST_PLAY),
            s.toggleClass("btn-play btn-pause")),
            dispatcher.trigger(
              dispatcher.EventKeys.SEQUENCER_SET_PATTERN_FROM_TACT,
              currentPatternForSwing
            ),
            dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED, n),
            dispatcher.trigger(dispatcher.EventKeys.BEAT_SELECTED, t);
        },
      });
    return { init: e };
  })(),
  SwingRhythm = (function () {
    function e(e) {
      dispatcher.register(t), new i(e).render();
    }
    var t = { SWING_SELECTED: "swing:selected" },
      n = Handlebars.compile(
        '        <label class="switch">            <input type="button" class="swing-toggle">            <span class="slider round"></span>        </label>    '
      ),
      i = Backbone.View.extend({
        events: { "click .swing-toggle": "onSwingClick" },
        initialize: function () {
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.SWING_SELECTED,
            this.onSwingClick
          );
        },
        render: function () {
          var e = n();
          return this.$el.html(e), this;
        },
        onSwingClick: function (e) {
          swing_toggler = !swing_toggler;
          var t = $("#r-mid").find(".seq-row"),
            n = $(".sequencer-channels").find(".mute");
          this.$el.find(".swing-toggle").toggleClass("active", swing_toggler),
            t.each(function (e) {
              var t = "",
                n = $(this).find("span");
              n.each(function (e) {
                if ($(n[e]).hasClass("seq-note")) t += "1";
                else if ($(n[e]).hasClass("seq-note-yellow")) t += "2";
                else {
                  if ($(n[e]).hasClass("seq-note-empty")) return t;
                  t += "0";
                }
              }),
                (currentPatternForSwing.sequence[
                  Object.keys(currentPatternForSwing.sequence)[e]
                ] = t);
            });
          var i = $(".transport-tempo").val();
          swing_toggler
            ? "5/4" === currentPatternForSwing.rhythm ||
              "6/8" === currentPatternForSwing.rhythm
              ? (newTempo = i / 0.66666666666)
              : (newTempo = i / 1.33)
            : (newTempo = i),
            (currentPatternForSwing.muted = {}),
            n.each(function (e) {
              $(this).hasClass("active") ||
                (currentPatternForSwing.muted[e] = 1);
            }),
            dispatcher.trigger(
              dispatcher.EventKeys.SEQUENCER_SET_PATTERN,
              currentPatternForSwing
            ),
            dispatcher.trigger(
              dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED,
              newTempo
            );
        },
      });
    return { init: e };
  })();
const Modal = (function () {
  function e(e) {
    dispatcher.register(t), new i(e).render();
  }

  const MODAL_NAMES = {
    drums: "Tên trống",
    TimeSignature: "Số chỉ nhịp",
    swing: "Swing",
  };

  const SOUND_TYPES = {
    standard: "Mặc định",
  };

  var t = { MODAL_OPEN: "modal:open", MODAL_CLOSE: "modal:close" },
    n = Handlebars.compile(`
      <div class="custom-modal">
            <div class="custom-modal-content">
                <div class="modal-item">
                    <span class="modal-item-title">${MODAL_NAMES.drums}</span>
                    <div class="modal-item-selector">
                        <div class="dropdown__select">
                            <div class="dropdown__button">
                                <div class="sound-types-button">${SOUND_TYPES.standard}</div>
                                <div class="dropdown__icons">
                                    <span class="dropdown__separator"></span>
                                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="dropdown__icon">
                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                    </svg>
                                </div>
                            </div>
                            <ul class="sound-types dropdown__content"></ul>
                        </div>
                    </div>
                </div>
                <div class="modal-item">
                    <span class="modal-item-title">${MODAL_NAMES.TimeSignature}</span>
                    <div class="modal-item-selector">
                        <div class="dropdown__select">
                            <div class="dropdown__button">
                                <div class="beatTime dropButton"></div>
                                <div class="dropdown__icons">
                                    <span class="dropdown__separator"></span>
                                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="dropdown__icon">
                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                    </svg>
                                </div>
                            </div>
                            <ul class="time-signature dropdown__content"></ul>
                        </div>
                    </div>
                </div>
                <div class="modal-item">
                    <span class="modal-item-title">${MODAL_NAMES.swing}</span>
                    <div class="modal-item-selector">
                        <div class="swing-selector"></div>
                    </div>
                </div>
            </div>
        </div>
        `),
    i = Backbone.View.extend({
      events: { "click .dropdown__select": "toggleDropdown" },
      initialize: function () {
        this.listenTo(dispatcher, dispatcher.EventKeys.MODAL_OPEN, this.open);
        this.listenTo(dispatcher, dispatcher.EventKeys.MODAL_CLOSE, this.close);
        this.toggleDropdown = this.toggleDropdown.bind(this);
      },
      render: function () {
        var e = n();
        return (
          this.$el.html(e),
          $(".custom-modal").on("click", this.outsideClick.bind(this)),
          this
        );
      },
      outsideClick: function (e) {
        if (
          $(e.target).closest(".dropdown__select").length === 0 &&
          $(e.target).closest(".dropdown__content").length === 0
        ) {
          this.$el.find(".dropdown__content").removeClass("active");
        }
      },
      toggleDropdown: function (e) {
        e.stopPropagation();
        this.$el
          .find(".dropdown__content")
          .not($(e.currentTarget).find(".dropdown__content"))
          .removeClass("active");
        $(e.currentTarget).find(".dropdown__content").toggleClass("active");
      },
      open: function () {
        this.$el.show();
      },
      close: function () {
        this.$el.hide();
      },
    });
  return { init: e };
})();

const App = {
  _connectModules: function () {
    dispatcher.on(dispatcher.EventKeys.TRANSPORT_REQUEST_PLAY, function () {
      dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_PLAY);
    });
    dispatcher.on(dispatcher.EventKeys.TRANSPORT_REQUEST_STOP, function () {
      dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_STOP);
    });
    dispatcher.on(dispatcher.EventKeys.TRANSPORT_REQUEST_MUTE, function (e) {
      dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_SET_PATTERN, e);
    });
    dispatcher.on(dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED, function (e) {
      dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_SET_TEMPO, e);
    });
    dispatcher.on(dispatcher.EventKeys.PRESET_SELECTED, function (e) {
      dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_CHANGE_TEMPO, e.tempo);
      dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_SET_PATTERN, e);
    });
    dispatcher.on(dispatcher.EventKeys.SOUND_SELECTED, function (e) {
      var t = "../library/drum-machine/audio/" + e + "/",
        n = {
          hihatfod: t + "hihat-foot.mp3",
          sidetamlys: t + "tom1.mp3",
          gulvtam: t + "floor-tom.mp3",
          ride: t + "ride.mp3",
          hihat: t + "hihat.mp3",
          kantslag: t + "snare-stick.mp3",
          stortromme: t + "bass.mp3",
          aabenhihat: t + "hihat-open.mp3",
          lilletromme: t + "snare-drum.mp3",
          sidetamdyb: t + "tom2.mp3",
        };
      SampleBank.loadNew(n, function () {});
    });
  },
  onLoad: function () {
    var e = {
        sequence: {
          hihatfod: "0000000000000000",
          sidetamlys: "0000000000000000",
          gulvtam: "0000000000000000",
          ride: "0000000000000000",
          hihat: "1010101010101010",
          lilletromme: "0000100000001000",
          stortromme: "1000000010000000",
        },
        muted: {},
        swing: false,
        rhythm: "4/4",
        tempo: 90,
        sound: "standard",
      },
      t = parseURLData(),
      n = t ? t : e;
    this._connectModules();
    url_collection = n;
    $(".beatTime").text(n.rhythm);
    if ("standard" !== n.sound) {
      $(".sound-types-button").text(SOUND_TYPES[n.sound]);
    }
    dispatcher.trigger(dispatcher.EventKeys.SOUND_SELECTED, n.sound);
    if (n.swing) {
      dispatcher.trigger(dispatcher.EventKeys.PRESET_SELECTED, n);
      dispatcher.trigger(dispatcher.EventKeys.SWING_SELECTED);
    } else {
      dispatcher.trigger(dispatcher.EventKeys.PRESET_SELECTED, n);
      dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED, n.tempo);
    }
  },
  init: function () {
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_STOP);
      }
    });
    var e = {
        hihatfod: "hihat-foot",
        sidetamlys: "tom1",
        gulvtam: "floor-tom",
        ride: "ride",
        hihat: "hihat",
        kantslag: "snare-stick",
        stortromme: "bass",
        aabenhihat: "hihat-open",
        lilletromme: "snare-drum",
        sidetamdyb: "tom2",
      },
      t = {},
      n = Object.keys(e);
    n.forEach(function (n) {
      var i = e[n];
      t[n] = "../library/drum-machine/audio/standard/" + i + ".mp3";
    });
    Sequencer.init({ el: $("#r-mid") });
    Transport.init({ el: $("#r-top") });
    PresetList.init({ el: $(".presets") });
    Modal.init({ el: $(".modal-container") });
    SoundTypes.init({ el: $(".sound-types") });
    TimeSignature.init({ el: $(".time-signature") });
    SwingRhythm.init({ el: $(".swing-selector") });
    SampleBank.init(t, this.onLoad.bind(this));
  },
};
App.init(),
  $("input").on("change", function () {
    var e = Math.abs(parseInt(this.value, 10) || 1);
    this.value = e > 999 ? 999 : e;
  });
var presets = {
  "Pop/rock 1": {
    tempo: 90,
    name: "Pop/rock 1",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1010101010101010",
      lilletromme: "0000100000001000",
      stortromme: "1000000010000000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Pop/rock 2": {
    tempo: 90,
    name: "Pop/rock 2",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1010101010101010",
      lilletromme: "0000100000001000",
      stortromme: "1000000010100000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Pop/rock 3": {
    tempo: 90,
    name: "Pop/rock 3",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1010101010101010",
      lilletromme: "0000100000001000",
      stortromme: "1000001010000000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Pop/rock 4": {
    tempo: 90,
    name: "Pop/rock 4",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1010101010101010",
      lilletromme: "0000100000001000",
      stortromme: "1000001000100000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Pop/rock 5": {
    tempo: 90,
    name: "Pop/rock 5",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1010101010101010",
      lilletromme: "0000100000001000",
      stortromme: "1000000100100000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Pop/rock 6": {
    tempo: 90,
    name: "Pop/rock 6",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1010101010101010",
      lilletromme: "0000100000001000",
      stortromme: "0010000010000000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Pop/rock i 3/4": {
    tempo: 110,
    name: "Pop/rock i 3/4",
    sequence: {
      hihatfod: "000000000000",
      sidetamlys: "000000000000",
      gulvtam: "000000000000",
      ride: "000000000000",
      hihat: "101010101010",
      lilletromme: "000000001000",
      stortromme: "100000100000",
    },
    muted: {},
    swing: !1,
    rhythm: "3/4",
  },
  "Pop/rock i 6/8": {
    tempo: 90,
    name: "Pop/rock i 6/8",
    sequence: {
      hihatfod: "000000000000",
      sidetamlys: "000000000000",
      gulvtam: "000000000000",
      ride: "000000000000",
      hihat: "101010101010",
      lilletromme: "000000100000",
      stortromme: "100000000000",
    },
    muted: {},
    swing: !1,
    rhythm: "6/8",
  },
  "Jazz 1": {
    tempo: 110,
    name: "Jazz 1",
    sequence: {
      hihatfod: "0000100000001000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "1000101010001010",
      hihat: "0000000000000000",
      lilletromme: "0000000000000000",
      stortromme: "0000000000000000",
    },
    muted: {},
    swing: !0,
    rhythm: "4/4",
  },
  "Jazz 2": {
    tempo: 110,
    name: "Jazz 2",
    sequence: {
      hihatfod: "0000100000001000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "1000101010001010",
      hihat: "0000000000000000",
      lilletromme: "0000000000001000",
      stortromme: "1000000000000000",
    },
    muted: {},
    swing: !0,
    rhythm: "4/4",
  },
  "Jazz 3": {
    tempo: 110,
    name: "Jazz 3",
    sequence: {
      hihatfod: "0000100000001000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "1000101010001010",
      hihat: "0000000000000000",
      lilletromme: "0000000000100000",
      stortromme: "0000001000000000",
    },
    muted: {},
    swing: !0,
    rhythm: "4/4",
  },
  "Jazz 4": {
    tempo: 110,
    name: "Jazz 4",
    sequence: {
      hihatfod: "0000100000001000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "1010101010101010",
      hihat: "0000000000000000",
      lilletromme: "0020000000002000",
      stortromme: "1000000010000000",
    },
    muted: {},
    swing: !0,
    rhythm: "4/4",
  },
  "Funk 1": {
    tempo: 110,
    name: "Funk 1",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1010101010101010",
      lilletromme: "0000100101001100",
      stortromme: "1000000000100001",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Funk 2": {
    tempo: 90,
    name: "Funk 2",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1111112111111121",
      lilletromme: "0000100101011000",
      stortromme: "1010000010100100",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Disco 1": {
    tempo: 90,
    name: "Disco 1",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1020102010201020",
      lilletromme: "0000100000001000",
      stortromme: "1000100010001000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Disco 2": {
    tempo: 110,
    name: "Disco 2",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1020101110201011",
      lilletromme: "0000100000001000",
      stortromme: "1000100010001000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Rap 1": {
    tempo: 80,
    name: "Rap 1",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "0110101010101010",
      lilletromme: "0000100000001000",
      stortromme: "1010001001000000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Rap 2": {
    tempo: 90,
    name: "Rap 2",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "1010101010101020",
      lilletromme: "0000100000001000",
      stortromme: "1011011001100000",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Heavy metal 1": {
    tempo: 90,
    name: "Heavy metal 1",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "2020202020202020",
      lilletromme: "0000100000001010",
      stortromme: "1011001111000001",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
  "Heavy metal 2": {
    tempo: 90,
    name: "Heavy metal 2",
    sequence: {
      hihatfod: "0000000000000000",
      sidetamlys: "0000000000000000",
      gulvtam: "0000000000000000",
      ride: "0000000000000000",
      hihat: "2020202020202020",
      lilletromme: "0000100000001000",
      stortromme: "1110001110010011",
    },
    muted: {},
    swing: !1,
    rhythm: "4/4",
  },
};
