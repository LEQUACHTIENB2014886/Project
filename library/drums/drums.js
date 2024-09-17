/*!For license information please see main.4e25a160.js.LICENSE.txt*/ (() => {
  var e = {
      718: (e, t, n) => {
        var r;
        !(function () {
          "use strict";
          var i = function () {
            this.init();
          };
          i.prototype = {
            init: function () {
              var e = this || a;
              return (
                (e._counter = 1e3),
                (e._html5AudioPool = []),
                (e.html5PoolSize = 10),
                (e._codecs = {}),
                (e._howls = []),
                (e._muted = !1),
                (e._volume = 1),
                (e._canPlayEvent = "canplaythrough"),
                (e._navigator =
                  "undefined" !== typeof window && window.navigator
                    ? window.navigator
                    : null),
                (e.masterGain = null),
                (e.noAudio = !1),
                (e.usingWebAudio = !0),
                (e.autoSuspend = !0),
                (e.ctx = null),
                (e.autoUnlock = !0),
                e._setup(),
                e
              );
            },
            volume: function (e) {
              var t = this || a;
              if (
                ((e = parseFloat(e)),
                t.ctx || p(),
                "undefined" !== typeof e && e >= 0 && e <= 1)
              ) {
                if (((t._volume = e), t._muted)) return t;
                t.usingWebAudio &&
                  t.masterGain.gain.setValueAtTime(e, a.ctx.currentTime);
                for (var n = 0; n < t._howls.length; n++)
                  if (!t._howls[n]._webAudio)
                    for (
                      var r = t._howls[n]._getSoundIds(), i = 0;
                      i < r.length;
                      i++
                    ) {
                      var o = t._howls[n]._soundById(r[i]);
                      o && o._node && (o._node.volume = o._volume * e);
                    }
                return t;
              }
              return t._volume;
            },
            mute: function (e) {
              var t = this || a;
              t.ctx || p(),
                (t._muted = e),
                t.usingWebAudio &&
                  t.masterGain.gain.setValueAtTime(
                    e ? 0 : t._volume,
                    a.ctx.currentTime
                  );
              for (var n = 0; n < t._howls.length; n++)
                if (!t._howls[n]._webAudio)
                  for (
                    var r = t._howls[n]._getSoundIds(), i = 0;
                    i < r.length;
                    i++
                  ) {
                    var o = t._howls[n]._soundById(r[i]);
                    o && o._node && (o._node.muted = !!e || o._muted);
                  }
              return t;
            },
            stop: function () {
              for (var e = this || a, t = 0; t < e._howls.length; t++)
                e._howls[t].stop();
              return e;
            },
            unload: function () {
              for (var e = this || a, t = e._howls.length - 1; t >= 0; t--)
                e._howls[t].unload();
              return (
                e.usingWebAudio &&
                  e.ctx &&
                  "undefined" !== typeof e.ctx.close &&
                  (e.ctx.close(), (e.ctx = null), p()),
                e
              );
            },
            codecs: function (e) {
              return (this || a)._codecs[e.replace(/^x-/, "")];
            },
            _setup: function () {
              var e = this || a;
              if (
                ((e.state = (e.ctx && e.ctx.state) || "suspended"),
                e._autoSuspend(),
                !e.usingWebAudio)
              )
                if ("undefined" !== typeof Audio)
                  try {
                    "undefined" === typeof new Audio().oncanplaythrough &&
                      (e._canPlayEvent = "canplay");
                  } catch (t) {
                    e.noAudio = !0;
                  }
                else e.noAudio = !0;
              try {
                new Audio().muted && (e.noAudio = !0);
              } catch (t) {}
              return e.noAudio || e._setupCodecs(), e;
            },
            _setupCodecs: function () {
              var e = this || a,
                t = null;
              try {
                t = "undefined" !== typeof Audio ? new Audio() : null;
              } catch (c) {
                return e;
              }
              if (!t || "function" !== typeof t.canPlayType) return e;
              var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                r = e._navigator ? e._navigator.userAgent : "",
                i = r.match(/OPR\/(\d+)/g),
                o = i && parseInt(i[0].split("/")[1], 10) < 33,
                l = -1 !== r.indexOf("Safari") && -1 === r.indexOf("Chrome"),
                u = r.match(/Version\/(.*?) /),
                s = l && u && parseInt(u[1], 10) < 15;
              return (
                (e._codecs = {
                  mp3: !(
                    o ||
                    (!n && !t.canPlayType("audio/mp3;").replace(/^no$/, ""))
                  ),
                  mpeg: !!n,
                  opus: !!t
                    .canPlayType('audio/ogg; codecs="opus"')
                    .replace(/^no$/, ""),
                  ogg: !!t
                    .canPlayType('audio/ogg; codecs="vorbis"')
                    .replace(/^no$/, ""),
                  oga: !!t
                    .canPlayType('audio/ogg; codecs="vorbis"')
                    .replace(/^no$/, ""),
                  wav: !!(
                    t.canPlayType('audio/wav; codecs="1"') ||
                    t.canPlayType("audio/wav")
                  ).replace(/^no$/, ""),
                  aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                  caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                  m4a: !!(
                    t.canPlayType("audio/x-m4a;") ||
                    t.canPlayType("audio/m4a;") ||
                    t.canPlayType("audio/aac;")
                  ).replace(/^no$/, ""),
                  m4b: !!(
                    t.canPlayType("audio/x-m4b;") ||
                    t.canPlayType("audio/m4b;") ||
                    t.canPlayType("audio/aac;")
                  ).replace(/^no$/, ""),
                  mp4: !!(
                    t.canPlayType("audio/x-mp4;") ||
                    t.canPlayType("audio/mp4;") ||
                    t.canPlayType("audio/aac;")
                  ).replace(/^no$/, ""),
                  weba: !(
                    s ||
                    !t
                      .canPlayType('audio/webm; codecs="vorbis"')
                      .replace(/^no$/, "")
                  ),
                  webm: !(
                    s ||
                    !t
                      .canPlayType('audio/webm; codecs="vorbis"')
                      .replace(/^no$/, "")
                  ),
                  dolby: !!t
                    .canPlayType('audio/mp4; codecs="ec-3"')
                    .replace(/^no$/, ""),
                  flac: !!(
                    t.canPlayType("audio/x-flac;") ||
                    t.canPlayType("audio/flac;")
                  ).replace(/^no$/, ""),
                }),
                e
              );
            },
            _unlockAudio: function () {
              var e = this || a;
              if (!e._audioUnlocked && e.ctx) {
                (e._audioUnlocked = !1),
                  (e.autoUnlock = !1),
                  e._mobileUnloaded ||
                    44100 === e.ctx.sampleRate ||
                    ((e._mobileUnloaded = !0), e.unload()),
                  (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
                var t = function (n) {
                  for (; e._html5AudioPool.length < e.html5PoolSize; )
                    try {
                      var r = new Audio();
                      (r._unlocked = !0), e._releaseHtml5Audio(r);
                    } catch (n) {
                      e.noAudio = !0;
                      break;
                    }
                  for (var i = 0; i < e._howls.length; i++)
                    if (!e._howls[i]._webAudio)
                      for (
                        var a = e._howls[i]._getSoundIds(), o = 0;
                        o < a.length;
                        o++
                      ) {
                        var l = e._howls[i]._soundById(a[o]);
                        l &&
                          l._node &&
                          !l._node._unlocked &&
                          ((l._node._unlocked = !0), l._node.load());
                      }
                  e._autoResume();
                  var u = e.ctx.createBufferSource();
                  (u.buffer = e._scratchBuffer),
                    u.connect(e.ctx.destination),
                    "undefined" === typeof u.start ? u.noteOn(0) : u.start(0),
                    "function" === typeof e.ctx.resume && e.ctx.resume(),
                    (u.onended = function () {
                      u.disconnect(0),
                        (e._audioUnlocked = !0),
                        document.removeEventListener("touchstart", t, !0),
                        document.removeEventListener("touchend", t, !0),
                        document.removeEventListener("click", t, !0),
                        document.removeEventListener("keydown", t, !0);
                      for (var n = 0; n < e._howls.length; n++)
                        e._howls[n]._emit("unlock");
                    });
                };
                return (
                  document.addEventListener("touchstart", t, !0),
                  document.addEventListener("touchend", t, !0),
                  document.addEventListener("click", t, !0),
                  document.addEventListener("keydown", t, !0),
                  e
                );
              }
            },
            _obtainHtml5Audio: function () {
              var e = this || a;
              if (e._html5AudioPool.length) return e._html5AudioPool.pop();
              var t = new Audio().play();
              return (
                t &&
                  "undefined" !== typeof Promise &&
                  (t instanceof Promise || "function" === typeof t.then) &&
                  t.catch(function () {
                    console.warn(
                      "HTML5 Audio pool exhausted, returning potentially locked audio object."
                    );
                  }),
                new Audio()
              );
            },
            _releaseHtml5Audio: function (e) {
              var t = this || a;
              return e._unlocked && t._html5AudioPool.push(e), t;
            },
            _autoSuspend: function () {
              var e = this;
              if (
                e.autoSuspend &&
                e.ctx &&
                "undefined" !== typeof e.ctx.suspend &&
                a.usingWebAudio
              ) {
                for (var t = 0; t < e._howls.length; t++)
                  if (e._howls[t]._webAudio)
                    for (var n = 0; n < e._howls[t]._sounds.length; n++)
                      if (!e._howls[t]._sounds[n]._paused) return e;
                return (
                  e._suspendTimer && clearTimeout(e._suspendTimer),
                  (e._suspendTimer = setTimeout(function () {
                    if (e.autoSuspend) {
                      (e._suspendTimer = null), (e.state = "suspending");
                      var t = function () {
                        (e.state = "suspended"),
                          e._resumeAfterSuspend &&
                            (delete e._resumeAfterSuspend, e._autoResume());
                      };
                      e.ctx.suspend().then(t, t);
                    }
                  }, 3e4)),
                  e
                );
              }
            },
            _autoResume: function () {
              var e = this;
              if (
                e.ctx &&
                "undefined" !== typeof e.ctx.resume &&
                a.usingWebAudio
              )
                return (
                  "running" === e.state &&
                  "interrupted" !== e.ctx.state &&
                  e._suspendTimer
                    ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                    : "suspended" === e.state ||
                      ("running" === e.state && "interrupted" === e.ctx.state)
                    ? (e.ctx.resume().then(function () {
                        e.state = "running";
                        for (var t = 0; t < e._howls.length; t++)
                          e._howls[t]._emit("resume");
                      }),
                      e._suspendTimer &&
                        (clearTimeout(e._suspendTimer),
                        (e._suspendTimer = null)))
                    : "suspending" === e.state && (e._resumeAfterSuspend = !0),
                  e
                );
            },
          };
          var a = new i(),
            o = function (e) {
              e.src && 0 !== e.src.length
                ? this.init(e)
                : console.error(
                    "An array of source files must be passed with any new Howl."
                  );
            };
          o.prototype = {
            init: function (e) {
              var t = this;
              return (
                a.ctx || p(),
                (t._autoplay = e.autoplay || !1),
                (t._format =
                  "string" !== typeof e.format ? e.format : [e.format]),
                (t._html5 = e.html5 || !1),
                (t._muted = e.mute || !1),
                (t._loop = e.loop || !1),
                (t._pool = e.pool || 5),
                (t._preload =
                  ("boolean" !== typeof e.preload &&
                    "metadata" !== e.preload) ||
                  e.preload),
                (t._rate = e.rate || 1),
                (t._sprite = e.sprite || {}),
                (t._src = "string" !== typeof e.src ? e.src : [e.src]),
                (t._volume = void 0 !== e.volume ? e.volume : 1),
                (t._xhr = {
                  method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                  headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                  withCredentials:
                    !(!e.xhr || !e.xhr.withCredentials) &&
                    e.xhr.withCredentials,
                }),
                (t._duration = 0),
                (t._state = "unloaded"),
                (t._sounds = []),
                (t._endTimers = {}),
                (t._queue = []),
                (t._playLock = !1),
                (t._onend = e.onend ? [{ fn: e.onend }] : []),
                (t._onfade = e.onfade ? [{ fn: e.onfade }] : []),
                (t._onload = e.onload ? [{ fn: e.onload }] : []),
                (t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
                (t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
                (t._onpause = e.onpause ? [{ fn: e.onpause }] : []),
                (t._onplay = e.onplay ? [{ fn: e.onplay }] : []),
                (t._onstop = e.onstop ? [{ fn: e.onstop }] : []),
                (t._onmute = e.onmute ? [{ fn: e.onmute }] : []),
                (t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
                (t._onrate = e.onrate ? [{ fn: e.onrate }] : []),
                (t._onseek = e.onseek ? [{ fn: e.onseek }] : []),
                (t._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
                (t._onresume = []),
                (t._webAudio = a.usingWebAudio && !t._html5),
                "undefined" !== typeof a.ctx &&
                  a.ctx &&
                  a.autoUnlock &&
                  a._unlockAudio(),
                a._howls.push(t),
                t._autoplay &&
                  t._queue.push({
                    event: "play",
                    action: function () {
                      t.play();
                    },
                  }),
                t._preload && "none" !== t._preload && t.load(),
                t
              );
            },
            load: function () {
              var e = this,
                t = null;
              if (a.noAudio) e._emit("loaderror", null, "No audio support.");
              else {
                "string" === typeof e._src && (e._src = [e._src]);
                for (var n = 0; n < e._src.length; n++) {
                  var r, i;
                  if (e._format && e._format[n]) r = e._format[n];
                  else {
                    if ("string" !== typeof (i = e._src[n])) {
                      e._emit(
                        "loaderror",
                        null,
                        "Non-string found in selected audio sources - ignoring."
                      );
                      continue;
                    }
                    (r = /^data:audio\/([^;,]+);/i.exec(i)) ||
                      (r = /\.([^.]+)$/.exec(i.split("?", 1)[0])),
                      r && (r = r[1].toLowerCase());
                  }
                  if (
                    (r ||
                      console.warn(
                        'No file extension was found. Consider using the "format" property or specify an extension.'
                      ),
                    r && a.codecs(r))
                  ) {
                    t = e._src[n];
                    break;
                  }
                }
                if (t)
                  return (
                    (e._src = t),
                    (e._state = "loading"),
                    "https:" === window.location.protocol &&
                      "http:" === t.slice(0, 5) &&
                      ((e._html5 = !0), (e._webAudio = !1)),
                    new l(e),
                    e._webAudio && s(e),
                    e
                  );
                e._emit(
                  "loaderror",
                  null,
                  "No codec support for selected audio sources."
                );
              }
            },
            play: function (e, t) {
              var n = this,
                r = null;
              if ("number" === typeof e) (r = e), (e = null);
              else {
                if (
                  "string" === typeof e &&
                  "loaded" === n._state &&
                  !n._sprite[e]
                )
                  return null;
                if (
                  "undefined" === typeof e &&
                  ((e = "__default"), !n._playLock)
                ) {
                  for (var i = 0, o = 0; o < n._sounds.length; o++)
                    n._sounds[o]._paused &&
                      !n._sounds[o]._ended &&
                      (i++, (r = n._sounds[o]._id));
                  1 === i ? (e = null) : (r = null);
                }
              }
              var l = r ? n._soundById(r) : n._inactiveSound();
              if (!l) return null;
              if (
                (r && !e && (e = l._sprite || "__default"),
                "loaded" !== n._state)
              ) {
                (l._sprite = e), (l._ended = !1);
                var u = l._id;
                return (
                  n._queue.push({
                    event: "play",
                    action: function () {
                      n.play(u);
                    },
                  }),
                  u
                );
              }
              if (r && !l._paused) return t || n._loadQueue("play"), l._id;
              n._webAudio && a._autoResume();
              var s = Math.max(
                  0,
                  l._seek > 0 ? l._seek : n._sprite[e][0] / 1e3
                ),
                c = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - s),
                f = (1e3 * c) / Math.abs(l._rate),
                d = n._sprite[e][0] / 1e3,
                p = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
              (l._sprite = e), (l._ended = !1);
              var h = function () {
                (l._paused = !1),
                  (l._seek = s),
                  (l._start = d),
                  (l._stop = p),
                  (l._loop = !(!l._loop && !n._sprite[e][2]));
              };
              if (!(s >= p)) {
                var m = l._node;
                if (n._webAudio) {
                  var _ = function () {
                    (n._playLock = !1), h(), n._refreshBuffer(l);
                    var e = l._muted || n._muted ? 0 : l._volume;
                    m.gain.setValueAtTime(e, a.ctx.currentTime),
                      (l._playStart = a.ctx.currentTime),
                      "undefined" === typeof m.bufferSource.start
                        ? l._loop
                          ? m.bufferSource.noteGrainOn(0, s, 86400)
                          : m.bufferSource.noteGrainOn(0, s, c)
                        : l._loop
                        ? m.bufferSource.start(0, s, 86400)
                        : m.bufferSource.start(0, s, c),
                      f !== 1 / 0 &&
                        (n._endTimers[l._id] = setTimeout(
                          n._ended.bind(n, l),
                          f
                        )),
                      t ||
                        setTimeout(function () {
                          n._emit("play", l._id), n._loadQueue();
                        }, 0);
                  };
                  "running" === a.state && "interrupted" !== a.ctx.state
                    ? _()
                    : ((n._playLock = !0),
                      n.once("resume", _),
                      n._clearTimer(l._id));
                } else {
                  var g = function () {
                    (m.currentTime = s),
                      (m.muted = l._muted || n._muted || a._muted || m.muted),
                      (m.volume = l._volume * a.volume()),
                      (m.playbackRate = l._rate);
                    try {
                      var r = m.play();
                      if (
                        (r &&
                        "undefined" !== typeof Promise &&
                        (r instanceof Promise || "function" === typeof r.then)
                          ? ((n._playLock = !0),
                            h(),
                            r
                              .then(function () {
                                (n._playLock = !1),
                                  (m._unlocked = !0),
                                  t ? n._loadQueue() : n._emit("play", l._id);
                              })
                              .catch(function () {
                                (n._playLock = !1),
                                  n._emit(
                                    "playerror",
                                    l._id,
                                    "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                                  ),
                                  (l._ended = !0),
                                  (l._paused = !0);
                              }))
                          : t ||
                            ((n._playLock = !1), h(), n._emit("play", l._id)),
                        (m.playbackRate = l._rate),
                        m.paused)
                      )
                        return void n._emit(
                          "playerror",
                          l._id,
                          "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                        );
                      "__default" !== e || l._loop
                        ? (n._endTimers[l._id] = setTimeout(
                            n._ended.bind(n, l),
                            f
                          ))
                        : ((n._endTimers[l._id] = function () {
                            n._ended(l),
                              m.removeEventListener(
                                "ended",
                                n._endTimers[l._id],
                                !1
                              );
                          }),
                          m.addEventListener("ended", n._endTimers[l._id], !1));
                    } catch (i) {
                      n._emit("playerror", l._id, i);
                    }
                  };
                  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" ===
                    m.src && ((m.src = n._src), m.load());
                  var v =
                    (window && window.ejecta) ||
                    (!m.readyState && a._navigator.isCocoonJS);
                  if (m.readyState >= 3 || v) g();
                  else {
                    (n._playLock = !0), (n._state = "loading");
                    var y = function () {
                      (n._state = "loaded"),
                        g(),
                        m.removeEventListener(a._canPlayEvent, y, !1);
                    };
                    m.addEventListener(a._canPlayEvent, y, !1),
                      n._clearTimer(l._id);
                  }
                }
                return l._id;
              }
              n._ended(l);
            },
            pause: function (e) {
              var t = this;
              if ("loaded" !== t._state || t._playLock)
                return (
                  t._queue.push({
                    event: "pause",
                    action: function () {
                      t.pause(e);
                    },
                  }),
                  t
                );
              for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
                t._clearTimer(n[r]);
                var i = t._soundById(n[r]);
                if (
                  i &&
                  !i._paused &&
                  ((i._seek = t.seek(n[r])),
                  (i._rateSeek = 0),
                  (i._paused = !0),
                  t._stopFade(n[r]),
                  i._node)
                )
                  if (t._webAudio) {
                    if (!i._node.bufferSource) continue;
                    "undefined" === typeof i._node.bufferSource.stop
                      ? i._node.bufferSource.noteOff(0)
                      : i._node.bufferSource.stop(0),
                      t._cleanBuffer(i._node);
                  } else
                    (isNaN(i._node.duration) && i._node.duration !== 1 / 0) ||
                      i._node.pause();
                arguments[1] || t._emit("pause", i ? i._id : null);
              }
              return t;
            },
            stop: function (e, t) {
              var n = this;
              if ("loaded" !== n._state || n._playLock)
                return (
                  n._queue.push({
                    event: "stop",
                    action: function () {
                      n.stop(e);
                    },
                  }),
                  n
                );
              for (var r = n._getSoundIds(e), i = 0; i < r.length; i++) {
                n._clearTimer(r[i]);
                var a = n._soundById(r[i]);
                a &&
                  ((a._seek = a._start || 0),
                  (a._rateSeek = 0),
                  (a._paused = !0),
                  (a._ended = !0),
                  n._stopFade(r[i]),
                  a._node &&
                    (n._webAudio
                      ? a._node.bufferSource &&
                        ("undefined" === typeof a._node.bufferSource.stop
                          ? a._node.bufferSource.noteOff(0)
                          : a._node.bufferSource.stop(0),
                        n._cleanBuffer(a._node))
                      : (isNaN(a._node.duration) &&
                          a._node.duration !== 1 / 0) ||
                        ((a._node.currentTime = a._start || 0),
                        a._node.pause(),
                        a._node.duration === 1 / 0 && n._clearSound(a._node))),
                  t || n._emit("stop", a._id));
              }
              return n;
            },
            mute: function (e, t) {
              var n = this;
              if ("loaded" !== n._state || n._playLock)
                return (
                  n._queue.push({
                    event: "mute",
                    action: function () {
                      n.mute(e, t);
                    },
                  }),
                  n
                );
              if ("undefined" === typeof t) {
                if ("boolean" !== typeof e) return n._muted;
                n._muted = e;
              }
              for (var r = n._getSoundIds(t), i = 0; i < r.length; i++) {
                var o = n._soundById(r[i]);
                o &&
                  ((o._muted = e),
                  o._interval && n._stopFade(o._id),
                  n._webAudio && o._node
                    ? o._node.gain.setValueAtTime(
                        e ? 0 : o._volume,
                        a.ctx.currentTime
                      )
                    : o._node && (o._node.muted = !!a._muted || e),
                  n._emit("mute", o._id));
              }
              return n;
            },
            volume: function () {
              var e,
                t,
                n,
                r = this,
                i = arguments;
              if (0 === i.length) return r._volume;
              if (
                (1 === i.length ||
                (2 === i.length && "undefined" === typeof i[1])
                  ? r._getSoundIds().indexOf(i[0]) >= 0
                    ? (t = parseInt(i[0], 10))
                    : (e = parseFloat(i[0]))
                  : i.length >= 2 &&
                    ((e = parseFloat(i[0])), (t = parseInt(i[1], 10))),
                !("undefined" !== typeof e && e >= 0 && e <= 1))
              )
                return (n = t ? r._soundById(t) : r._sounds[0]) ? n._volume : 0;
              if ("loaded" !== r._state || r._playLock)
                return (
                  r._queue.push({
                    event: "volume",
                    action: function () {
                      r.volume.apply(r, i);
                    },
                  }),
                  r
                );
              "undefined" === typeof t && (r._volume = e),
                (t = r._getSoundIds(t));
              for (var o = 0; o < t.length; o++)
                (n = r._soundById(t[o])) &&
                  ((n._volume = e),
                  i[2] || r._stopFade(t[o]),
                  r._webAudio && n._node && !n._muted
                    ? n._node.gain.setValueAtTime(e, a.ctx.currentTime)
                    : n._node && !n._muted && (n._node.volume = e * a.volume()),
                  r._emit("volume", n._id));
              return r;
            },
            fade: function (e, t, n, r) {
              var i = this;
              if ("loaded" !== i._state || i._playLock)
                return (
                  i._queue.push({
                    event: "fade",
                    action: function () {
                      i.fade(e, t, n, r);
                    },
                  }),
                  i
                );
              (e = Math.min(Math.max(0, parseFloat(e)), 1)),
                (t = Math.min(Math.max(0, parseFloat(t)), 1)),
                (n = parseFloat(n)),
                i.volume(e, r);
              for (var o = i._getSoundIds(r), l = 0; l < o.length; l++) {
                var u = i._soundById(o[l]);
                if (u) {
                  if ((r || i._stopFade(o[l]), i._webAudio && !u._muted)) {
                    var s = a.ctx.currentTime,
                      c = s + n / 1e3;
                    (u._volume = e),
                      u._node.gain.setValueAtTime(e, s),
                      u._node.gain.linearRampToValueAtTime(t, c);
                  }
                  i._startFadeInterval(
                    u,
                    e,
                    t,
                    n,
                    o[l],
                    "undefined" === typeof r
                  );
                }
              }
              return i;
            },
            _startFadeInterval: function (e, t, n, r, i, a) {
              var o = this,
                l = t,
                u = n - t,
                s = Math.abs(u / 0.01),
                c = Math.max(4, s > 0 ? r / s : r),
                f = Date.now();
              (e._fadeTo = n),
                (e._interval = setInterval(function () {
                  var i = (Date.now() - f) / r;
                  (f = Date.now()),
                    (l += u * i),
                    (l = Math.round(100 * l) / 100),
                    (l = u < 0 ? Math.max(n, l) : Math.min(n, l)),
                    o._webAudio ? (e._volume = l) : o.volume(l, e._id, !0),
                    a && (o._volume = l),
                    ((n < t && l <= n) || (n > t && l >= n)) &&
                      (clearInterval(e._interval),
                      (e._interval = null),
                      (e._fadeTo = null),
                      o.volume(n, e._id),
                      o._emit("fade", e._id));
                }, c));
            },
            _stopFade: function (e) {
              var t = this,
                n = t._soundById(e);
              return (
                n &&
                  n._interval &&
                  (t._webAudio &&
                    n._node.gain.cancelScheduledValues(a.ctx.currentTime),
                  clearInterval(n._interval),
                  (n._interval = null),
                  t.volume(n._fadeTo, e),
                  (n._fadeTo = null),
                  t._emit("fade", e)),
                t
              );
            },
            loop: function () {
              var e,
                t,
                n,
                r = this,
                i = arguments;
              if (0 === i.length) return r._loop;
              if (1 === i.length) {
                if ("boolean" !== typeof i[0])
                  return !!(n = r._soundById(parseInt(i[0], 10))) && n._loop;
                (e = i[0]), (r._loop = e);
              } else 2 === i.length && ((e = i[0]), (t = parseInt(i[1], 10)));
              for (var a = r._getSoundIds(t), o = 0; o < a.length; o++)
                (n = r._soundById(a[o])) &&
                  ((n._loop = e),
                  r._webAudio &&
                    n._node &&
                    n._node.bufferSource &&
                    ((n._node.bufferSource.loop = e),
                    e &&
                      ((n._node.bufferSource.loopStart = n._start || 0),
                      (n._node.bufferSource.loopEnd = n._stop),
                      r.playing(a[o]) &&
                        (r.pause(a[o], !0), r.play(a[o], !0)))));
              return r;
            },
            rate: function () {
              var e,
                t,
                n,
                r = this,
                i = arguments;
              if (0 === i.length) t = r._sounds[0]._id;
              else if (1 === i.length) {
                r._getSoundIds().indexOf(i[0]) >= 0
                  ? (t = parseInt(i[0], 10))
                  : (e = parseFloat(i[0]));
              } else
                2 === i.length &&
                  ((e = parseFloat(i[0])), (t = parseInt(i[1], 10)));
              if ("number" !== typeof e)
                return (n = r._soundById(t)) ? n._rate : r._rate;
              if ("loaded" !== r._state || r._playLock)
                return (
                  r._queue.push({
                    event: "rate",
                    action: function () {
                      r.rate.apply(r, i);
                    },
                  }),
                  r
                );
              "undefined" === typeof t && (r._rate = e),
                (t = r._getSoundIds(t));
              for (var o = 0; o < t.length; o++)
                if ((n = r._soundById(t[o]))) {
                  r.playing(t[o]) &&
                    ((n._rateSeek = r.seek(t[o])),
                    (n._playStart = r._webAudio
                      ? a.ctx.currentTime
                      : n._playStart)),
                    (n._rate = e),
                    r._webAudio && n._node && n._node.bufferSource
                      ? n._node.bufferSource.playbackRate.setValueAtTime(
                          e,
                          a.ctx.currentTime
                        )
                      : n._node && (n._node.playbackRate = e);
                  var l = r.seek(t[o]),
                    u =
                      (1e3 *
                        ((r._sprite[n._sprite][0] + r._sprite[n._sprite][1]) /
                          1e3 -
                          l)) /
                      Math.abs(n._rate);
                  (!r._endTimers[t[o]] && n._paused) ||
                    (r._clearTimer(t[o]),
                    (r._endTimers[t[o]] = setTimeout(r._ended.bind(r, n), u))),
                    r._emit("rate", n._id);
                }
              return r;
            },
            seek: function () {
              var e,
                t,
                n = this,
                r = arguments;
              if (0 === r.length) n._sounds.length && (t = n._sounds[0]._id);
              else if (1 === r.length) {
                n._getSoundIds().indexOf(r[0]) >= 0
                  ? (t = parseInt(r[0], 10))
                  : n._sounds.length &&
                    ((t = n._sounds[0]._id), (e = parseFloat(r[0])));
              } else
                2 === r.length &&
                  ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)));
              if ("undefined" === typeof t) return 0;
              if (
                "number" === typeof e &&
                ("loaded" !== n._state || n._playLock)
              )
                return (
                  n._queue.push({
                    event: "seek",
                    action: function () {
                      n.seek.apply(n, r);
                    },
                  }),
                  n
                );
              var i = n._soundById(t);
              if (i) {
                if (!("number" === typeof e && e >= 0)) {
                  if (n._webAudio) {
                    var o = n.playing(t) ? a.ctx.currentTime - i._playStart : 0,
                      l = i._rateSeek ? i._rateSeek - i._seek : 0;
                    return i._seek + (l + o * Math.abs(i._rate));
                  }
                  return i._node.currentTime;
                }
                var u = n.playing(t);
                u && n.pause(t, !0),
                  (i._seek = e),
                  (i._ended = !1),
                  n._clearTimer(t),
                  n._webAudio ||
                    !i._node ||
                    isNaN(i._node.duration) ||
                    (i._node.currentTime = e);
                var s = function () {
                  u && n.play(t, !0), n._emit("seek", t);
                };
                if (u && !n._webAudio) {
                  var c = function () {
                    n._playLock ? setTimeout(c, 0) : s();
                  };
                  setTimeout(c, 0);
                } else s();
              }
              return n;
            },
            playing: function (e) {
              var t = this;
              if ("number" === typeof e) {
                var n = t._soundById(e);
                return !!n && !n._paused;
              }
              for (var r = 0; r < t._sounds.length; r++)
                if (!t._sounds[r]._paused) return !0;
              return !1;
            },
            duration: function (e) {
              var t = this,
                n = t._duration,
                r = t._soundById(e);
              return r && (n = t._sprite[r._sprite][1] / 1e3), n;
            },
            state: function () {
              return this._state;
            },
            unload: function () {
              for (var e = this, t = e._sounds, n = 0; n < t.length; n++)
                t[n]._paused || e.stop(t[n]._id),
                  e._webAudio ||
                    (e._clearSound(t[n]._node),
                    t[n]._node.removeEventListener("error", t[n]._errorFn, !1),
                    t[n]._node.removeEventListener(
                      a._canPlayEvent,
                      t[n]._loadFn,
                      !1
                    ),
                    t[n]._node.removeEventListener("ended", t[n]._endFn, !1),
                    a._releaseHtml5Audio(t[n]._node)),
                  delete t[n]._node,
                  e._clearTimer(t[n]._id);
              var r = a._howls.indexOf(e);
              r >= 0 && a._howls.splice(r, 1);
              var i = !0;
              for (n = 0; n < a._howls.length; n++)
                if (
                  a._howls[n]._src === e._src ||
                  e._src.indexOf(a._howls[n]._src) >= 0
                ) {
                  i = !1;
                  break;
                }
              return (
                u && i && delete u[e._src],
                (a.noAudio = !1),
                (e._state = "unloaded"),
                (e._sounds = []),
                (e = null),
                null
              );
            },
            on: function (e, t, n, r) {
              var i = this["_on" + e];
              return (
                "function" === typeof t &&
                  i.push(r ? { id: n, fn: t, once: r } : { id: n, fn: t }),
                this
              );
            },
            off: function (e, t, n) {
              var r = this,
                i = r["_on" + e],
                a = 0;
              if (("number" === typeof t && ((n = t), (t = null)), t || n))
                for (a = 0; a < i.length; a++) {
                  var o = n === i[a].id;
                  if ((t === i[a].fn && o) || (!t && o)) {
                    i.splice(a, 1);
                    break;
                  }
                }
              else if (e) r["_on" + e] = [];
              else {
                var l = Object.keys(r);
                for (a = 0; a < l.length; a++)
                  0 === l[a].indexOf("_on") &&
                    Array.isArray(r[l[a]]) &&
                    (r[l[a]] = []);
              }
              return r;
            },
            once: function (e, t, n) {
              return this.on(e, t, n, 1), this;
            },
            _emit: function (e, t, n) {
              for (
                var r = this, i = r["_on" + e], a = i.length - 1;
                a >= 0;
                a--
              )
                (i[a].id && i[a].id !== t && "load" !== e) ||
                  (setTimeout(
                    function (e) {
                      e.call(this, t, n);
                    }.bind(r, i[a].fn),
                    0
                  ),
                  i[a].once && r.off(e, i[a].fn, i[a].id));
              return r._loadQueue(e), r;
            },
            _loadQueue: function (e) {
              var t = this;
              if (t._queue.length > 0) {
                var n = t._queue[0];
                n.event === e && (t._queue.shift(), t._loadQueue()),
                  e || n.action();
              }
              return t;
            },
            _ended: function (e) {
              var t = this,
                n = e._sprite;
              if (
                !t._webAudio &&
                e._node &&
                !e._node.paused &&
                !e._node.ended &&
                e._node.currentTime < e._stop
              )
                return setTimeout(t._ended.bind(t, e), 100), t;
              var r = !(!e._loop && !t._sprite[n][2]);
              if (
                (t._emit("end", e._id),
                !t._webAudio && r && t.stop(e._id, !0).play(e._id),
                t._webAudio && r)
              ) {
                t._emit("play", e._id),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  (e._playStart = a.ctx.currentTime);
                var i = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
                t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), i);
              }
              return (
                t._webAudio &&
                  !r &&
                  ((e._paused = !0),
                  (e._ended = !0),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  t._clearTimer(e._id),
                  t._cleanBuffer(e._node),
                  a._autoSuspend()),
                t._webAudio || r || t.stop(e._id, !0),
                t
              );
            },
            _clearTimer: function (e) {
              var t = this;
              if (t._endTimers[e]) {
                if ("function" !== typeof t._endTimers[e])
                  clearTimeout(t._endTimers[e]);
                else {
                  var n = t._soundById(e);
                  n &&
                    n._node &&
                    n._node.removeEventListener("ended", t._endTimers[e], !1);
                }
                delete t._endTimers[e];
              }
              return t;
            },
            _soundById: function (e) {
              for (var t = this, n = 0; n < t._sounds.length; n++)
                if (e === t._sounds[n]._id) return t._sounds[n];
              return null;
            },
            _inactiveSound: function () {
              var e = this;
              e._drain();
              for (var t = 0; t < e._sounds.length; t++)
                if (e._sounds[t]._ended) return e._sounds[t].reset();
              return new l(e);
            },
            _drain: function () {
              var e = this,
                t = e._pool,
                n = 0,
                r = 0;
              if (!(e._sounds.length < t)) {
                for (r = 0; r < e._sounds.length; r++)
                  e._sounds[r]._ended && n++;
                for (r = e._sounds.length - 1; r >= 0; r--) {
                  if (n <= t) return;
                  e._sounds[r]._ended &&
                    (e._webAudio &&
                      e._sounds[r]._node &&
                      e._sounds[r]._node.disconnect(0),
                    e._sounds.splice(r, 1),
                    n--);
                }
              }
            },
            _getSoundIds: function (e) {
              if ("undefined" === typeof e) {
                for (var t = [], n = 0; n < this._sounds.length; n++)
                  t.push(this._sounds[n]._id);
                return t;
              }
              return [e];
            },
            _refreshBuffer: function (e) {
              return (
                (e._node.bufferSource = a.ctx.createBufferSource()),
                (e._node.bufferSource.buffer = u[this._src]),
                e._panner
                  ? e._node.bufferSource.connect(e._panner)
                  : e._node.bufferSource.connect(e._node),
                (e._node.bufferSource.loop = e._loop),
                e._loop &&
                  ((e._node.bufferSource.loopStart = e._start || 0),
                  (e._node.bufferSource.loopEnd = e._stop || 0)),
                e._node.bufferSource.playbackRate.setValueAtTime(
                  e._rate,
                  a.ctx.currentTime
                ),
                this
              );
            },
            _cleanBuffer: function (e) {
              var t = a._navigator && a._navigator.vendor.indexOf("Apple") >= 0;
              if (!e.bufferSource) return this;
              if (
                a._scratchBuffer &&
                e.bufferSource &&
                ((e.bufferSource.onended = null),
                e.bufferSource.disconnect(0),
                t)
              )
                try {
                  e.bufferSource.buffer = a._scratchBuffer;
                } catch (n) {}
              return (e.bufferSource = null), this;
            },
            _clearSound: function (e) {
              /MSIE |Trident\//.test(a._navigator && a._navigator.userAgent) ||
                (e.src =
                  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
            },
          };
          var l = function (e) {
            (this._parent = e), this.init();
          };
          l.prototype = {
            init: function () {
              var e = this,
                t = e._parent;
              return (
                (e._muted = t._muted),
                (e._loop = t._loop),
                (e._volume = t._volume),
                (e._rate = t._rate),
                (e._seek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = "__default"),
                (e._id = ++a._counter),
                t._sounds.push(e),
                e.create(),
                e
              );
            },
            create: function () {
              var e = this,
                t = e._parent,
                n = a._muted || e._muted || e._parent._muted ? 0 : e._volume;
              return (
                t._webAudio
                  ? ((e._node =
                      "undefined" === typeof a.ctx.createGain
                        ? a.ctx.createGainNode()
                        : a.ctx.createGain()),
                    e._node.gain.setValueAtTime(n, a.ctx.currentTime),
                    (e._node.paused = !0),
                    e._node.connect(a.masterGain))
                  : a.noAudio ||
                    ((e._node = a._obtainHtml5Audio()),
                    (e._errorFn = e._errorListener.bind(e)),
                    e._node.addEventListener("error", e._errorFn, !1),
                    (e._loadFn = e._loadListener.bind(e)),
                    e._node.addEventListener(a._canPlayEvent, e._loadFn, !1),
                    (e._endFn = e._endListener.bind(e)),
                    e._node.addEventListener("ended", e._endFn, !1),
                    (e._node.src = t._src),
                    (e._node.preload = !0 === t._preload ? "auto" : t._preload),
                    (e._node.volume = n * a.volume()),
                    e._node.load()),
                e
              );
            },
            reset: function () {
              var e = this,
                t = e._parent;
              return (
                (e._muted = t._muted),
                (e._loop = t._loop),
                (e._volume = t._volume),
                (e._rate = t._rate),
                (e._seek = 0),
                (e._rateSeek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = "__default"),
                (e._id = ++a._counter),
                e
              );
            },
            _errorListener: function () {
              var e = this;
              e._parent._emit(
                "loaderror",
                e._id,
                e._node.error ? e._node.error.code : 0
              ),
                e._node.removeEventListener("error", e._errorFn, !1);
            },
            _loadListener: function () {
              var e = this,
                t = e._parent;
              (t._duration = Math.ceil(10 * e._node.duration) / 10),
                0 === Object.keys(t._sprite).length &&
                  (t._sprite = { __default: [0, 1e3 * t._duration] }),
                "loaded" !== t._state &&
                  ((t._state = "loaded"), t._emit("load"), t._loadQueue()),
                e._node.removeEventListener(a._canPlayEvent, e._loadFn, !1);
            },
            _endListener: function () {
              var e = this,
                t = e._parent;
              t._duration === 1 / 0 &&
                ((t._duration = Math.ceil(10 * e._node.duration) / 10),
                t._sprite.__default[1] === 1 / 0 &&
                  (t._sprite.__default[1] = 1e3 * t._duration),
                t._ended(e)),
                e._node.removeEventListener("ended", e._endFn, !1);
            },
          };
          var u = {},
            s = function (e) {
              var t = e._src;
              if (u[t]) return (e._duration = u[t].duration), void d(e);
              if (/^data:[^;]+;base64,/.test(t)) {
                for (
                  var n = atob(t.split(",")[1]),
                    r = new Uint8Array(n.length),
                    i = 0;
                  i < n.length;
                  ++i
                )
                  r[i] = n.charCodeAt(i);
                f(r.buffer, e);
              } else {
                var a = new XMLHttpRequest();
                a.open(e._xhr.method, t, !0),
                  (a.withCredentials = e._xhr.withCredentials),
                  (a.responseType = "arraybuffer"),
                  e._xhr.headers &&
                    Object.keys(e._xhr.headers).forEach(function (t) {
                      a.setRequestHeader(t, e._xhr.headers[t]);
                    }),
                  (a.onload = function () {
                    var t = (a.status + "")[0];
                    "0" === t || "2" === t || "3" === t
                      ? f(a.response, e)
                      : e._emit(
                          "loaderror",
                          null,
                          "Failed loading audio file with status: " +
                            a.status +
                            "."
                        );
                  }),
                  (a.onerror = function () {
                    e._webAudio &&
                      ((e._html5 = !0),
                      (e._webAudio = !1),
                      (e._sounds = []),
                      delete u[t],
                      e.load());
                  }),
                  c(a);
              }
            },
            c = function (e) {
              try {
                e.send();
              } catch (t) {
                e.onerror();
              }
            },
            f = function (e, t) {
              var n = function () {
                  t._emit("loaderror", null, "Decoding audio data failed.");
                },
                r = function (e) {
                  e && t._sounds.length > 0 ? ((u[t._src] = e), d(t, e)) : n();
                };
              "undefined" !== typeof Promise &&
              1 === a.ctx.decodeAudioData.length
                ? a.ctx.decodeAudioData(e).then(r).catch(n)
                : a.ctx.decodeAudioData(e, r, n);
            },
            d = function (e, t) {
              t && !e._duration && (e._duration = t.duration),
                0 === Object.keys(e._sprite).length &&
                  (e._sprite = { __default: [0, 1e3 * e._duration] }),
                "loaded" !== e._state &&
                  ((e._state = "loaded"), e._emit("load"), e._loadQueue());
            },
            p = function () {
              if (a.usingWebAudio) {
                try {
                  "undefined" !== typeof AudioContext
                    ? (a.ctx = new AudioContext())
                    : "undefined" !== typeof webkitAudioContext
                    ? (a.ctx = new webkitAudioContext())
                    : (a.usingWebAudio = !1);
                } catch (i) {
                  a.usingWebAudio = !1;
                }
                a.ctx || (a.usingWebAudio = !1);
                var e = /iP(hone|od|ad)/.test(
                    a._navigator && a._navigator.platform
                  ),
                  t =
                    a._navigator &&
                    a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                  n = t ? parseInt(t[1], 10) : null;
                if (e && n && n < 9) {
                  var r = /safari/.test(
                    a._navigator && a._navigator.userAgent.toLowerCase()
                  );
                  a._navigator && !r && (a.usingWebAudio = !1);
                }
                a.usingWebAudio &&
                  ((a.masterGain =
                    "undefined" === typeof a.ctx.createGain
                      ? a.ctx.createGainNode()
                      : a.ctx.createGain()),
                  a.masterGain.gain.setValueAtTime(
                    a._muted ? 0 : a._volume,
                    a.ctx.currentTime
                  ),
                  a.masterGain.connect(a.ctx.destination)),
                  a._setup();
              }
            };
          void 0 ===
            (r = function () {
              return { Howler: a, Howl: o };
            }.apply(t, [])) || (e.exports = r),
            (t.Howler = a),
            (t.Howl = o),
            "undefined" !== typeof n.g
              ? ((n.g.HowlerGlobal = i),
                (n.g.Howler = a),
                (n.g.Howl = o),
                (n.g.Sound = l))
              : "undefined" !== typeof window &&
                ((window.HowlerGlobal = i),
                (window.Howler = a),
                (window.Howl = o),
                (window.Sound = l));
        })(),
          (function () {
            "use strict";
            var e;
            (HowlerGlobal.prototype._pos = [0, 0, 0]),
              (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
              (HowlerGlobal.prototype.stereo = function (e) {
                var t = this;
                if (!t.ctx || !t.ctx.listener) return t;
                for (var n = t._howls.length - 1; n >= 0; n--)
                  t._howls[n].stereo(e);
                return t;
              }),
              (HowlerGlobal.prototype.pos = function (e, t, n) {
                var r = this;
                return r.ctx && r.ctx.listener
                  ? ((t = "number" !== typeof t ? r._pos[1] : t),
                    (n = "number" !== typeof n ? r._pos[2] : n),
                    "number" !== typeof e
                      ? r._pos
                      : ((r._pos = [e, t, n]),
                        "undefined" !== typeof r.ctx.listener.positionX
                          ? (r.ctx.listener.positionX.setTargetAtTime(
                              r._pos[0],
                              Howler.ctx.currentTime,
                              0.1
                            ),
                            r.ctx.listener.positionY.setTargetAtTime(
                              r._pos[1],
                              Howler.ctx.currentTime,
                              0.1
                            ),
                            r.ctx.listener.positionZ.setTargetAtTime(
                              r._pos[2],
                              Howler.ctx.currentTime,
                              0.1
                            ))
                          : r.ctx.listener.setPosition(
                              r._pos[0],
                              r._pos[1],
                              r._pos[2]
                            ),
                        r))
                  : r;
              }),
              (HowlerGlobal.prototype.orientation = function (
                e,
                t,
                n,
                r,
                i,
                a
              ) {
                var o = this;
                if (!o.ctx || !o.ctx.listener) return o;
                var l = o._orientation;
                return (
                  (t = "number" !== typeof t ? l[1] : t),
                  (n = "number" !== typeof n ? l[2] : n),
                  (r = "number" !== typeof r ? l[3] : r),
                  (i = "number" !== typeof i ? l[4] : i),
                  (a = "number" !== typeof a ? l[5] : a),
                  "number" !== typeof e
                    ? l
                    : ((o._orientation = [e, t, n, r, i, a]),
                      "undefined" !== typeof o.ctx.listener.forwardX
                        ? (o.ctx.listener.forwardX.setTargetAtTime(
                            e,
                            Howler.ctx.currentTime,
                            0.1
                          ),
                          o.ctx.listener.forwardY.setTargetAtTime(
                            t,
                            Howler.ctx.currentTime,
                            0.1
                          ),
                          o.ctx.listener.forwardZ.setTargetAtTime(
                            n,
                            Howler.ctx.currentTime,
                            0.1
                          ),
                          o.ctx.listener.upX.setTargetAtTime(
                            r,
                            Howler.ctx.currentTime,
                            0.1
                          ),
                          o.ctx.listener.upY.setTargetAtTime(
                            i,
                            Howler.ctx.currentTime,
                            0.1
                          ),
                          o.ctx.listener.upZ.setTargetAtTime(
                            a,
                            Howler.ctx.currentTime,
                            0.1
                          ))
                        : o.ctx.listener.setOrientation(e, t, n, r, i, a),
                      o)
                );
              }),
              (Howl.prototype.init =
                ((e = Howl.prototype.init),
                function (t) {
                  var n = this;
                  return (
                    (n._orientation = t.orientation || [1, 0, 0]),
                    (n._stereo = t.stereo || null),
                    (n._pos = t.pos || null),
                    (n._pannerAttr = {
                      coneInnerAngle:
                        "undefined" !== typeof t.coneInnerAngle
                          ? t.coneInnerAngle
                          : 360,
                      coneOuterAngle:
                        "undefined" !== typeof t.coneOuterAngle
                          ? t.coneOuterAngle
                          : 360,
                      coneOuterGain:
                        "undefined" !== typeof t.coneOuterGain
                          ? t.coneOuterGain
                          : 0,
                      distanceModel:
                        "undefined" !== typeof t.distanceModel
                          ? t.distanceModel
                          : "inverse",
                      maxDistance:
                        "undefined" !== typeof t.maxDistance
                          ? t.maxDistance
                          : 1e4,
                      panningModel:
                        "undefined" !== typeof t.panningModel
                          ? t.panningModel
                          : "HRTF",
                      refDistance:
                        "undefined" !== typeof t.refDistance
                          ? t.refDistance
                          : 1,
                      rolloffFactor:
                        "undefined" !== typeof t.rolloffFactor
                          ? t.rolloffFactor
                          : 1,
                    }),
                    (n._onstereo = t.onstereo ? [{ fn: t.onstereo }] : []),
                    (n._onpos = t.onpos ? [{ fn: t.onpos }] : []),
                    (n._onorientation = t.onorientation
                      ? [{ fn: t.onorientation }]
                      : []),
                    e.call(this, t)
                  );
                })),
              (Howl.prototype.stereo = function (e, n) {
                var r = this;
                if (!r._webAudio) return r;
                if ("loaded" !== r._state)
                  return (
                    r._queue.push({
                      event: "stereo",
                      action: function () {
                        r.stereo(e, n);
                      },
                    }),
                    r
                  );
                var i =
                  "undefined" === typeof Howler.ctx.createStereoPanner
                    ? "spatial"
                    : "stereo";
                if ("undefined" === typeof n) {
                  if ("number" !== typeof e) return r._stereo;
                  (r._stereo = e), (r._pos = [e, 0, 0]);
                }
                for (var a = r._getSoundIds(n), o = 0; o < a.length; o++) {
                  var l = r._soundById(a[o]);
                  if (l) {
                    if ("number" !== typeof e) return l._stereo;
                    (l._stereo = e),
                      (l._pos = [e, 0, 0]),
                      l._node &&
                        ((l._pannerAttr.panningModel = "equalpower"),
                        (l._panner && l._panner.pan) || t(l, i),
                        "spatial" === i
                          ? "undefined" !== typeof l._panner.positionX
                            ? (l._panner.positionX.setValueAtTime(
                                e,
                                Howler.ctx.currentTime
                              ),
                              l._panner.positionY.setValueAtTime(
                                0,
                                Howler.ctx.currentTime
                              ),
                              l._panner.positionZ.setValueAtTime(
                                0,
                                Howler.ctx.currentTime
                              ))
                            : l._panner.setPosition(e, 0, 0)
                          : l._panner.pan.setValueAtTime(
                              e,
                              Howler.ctx.currentTime
                            )),
                      r._emit("stereo", l._id);
                  }
                }
                return r;
              }),
              (Howl.prototype.pos = function (e, n, r, i) {
                var a = this;
                if (!a._webAudio) return a;
                if ("loaded" !== a._state)
                  return (
                    a._queue.push({
                      event: "pos",
                      action: function () {
                        a.pos(e, n, r, i);
                      },
                    }),
                    a
                  );
                if (
                  ((n = "number" !== typeof n ? 0 : n),
                  (r = "number" !== typeof r ? -0.5 : r),
                  "undefined" === typeof i)
                ) {
                  if ("number" !== typeof e) return a._pos;
                  a._pos = [e, n, r];
                }
                for (var o = a._getSoundIds(i), l = 0; l < o.length; l++) {
                  var u = a._soundById(o[l]);
                  if (u) {
                    if ("number" !== typeof e) return u._pos;
                    (u._pos = [e, n, r]),
                      u._node &&
                        ((u._panner && !u._panner.pan) || t(u, "spatial"),
                        "undefined" !== typeof u._panner.positionX
                          ? (u._panner.positionX.setValueAtTime(
                              e,
                              Howler.ctx.currentTime
                            ),
                            u._panner.positionY.setValueAtTime(
                              n,
                              Howler.ctx.currentTime
                            ),
                            u._panner.positionZ.setValueAtTime(
                              r,
                              Howler.ctx.currentTime
                            ))
                          : u._panner.setPosition(e, n, r)),
                      a._emit("pos", u._id);
                  }
                }
                return a;
              }),
              (Howl.prototype.orientation = function (e, n, r, i) {
                var a = this;
                if (!a._webAudio) return a;
                if ("loaded" !== a._state)
                  return (
                    a._queue.push({
                      event: "orientation",
                      action: function () {
                        a.orientation(e, n, r, i);
                      },
                    }),
                    a
                  );
                if (
                  ((n = "number" !== typeof n ? a._orientation[1] : n),
                  (r = "number" !== typeof r ? a._orientation[2] : r),
                  "undefined" === typeof i)
                ) {
                  if ("number" !== typeof e) return a._orientation;
                  a._orientation = [e, n, r];
                }
                for (var o = a._getSoundIds(i), l = 0; l < o.length; l++) {
                  var u = a._soundById(o[l]);
                  if (u) {
                    if ("number" !== typeof e) return u._orientation;
                    (u._orientation = [e, n, r]),
                      u._node &&
                        (u._panner ||
                          (u._pos || (u._pos = a._pos || [0, 0, -0.5]),
                          t(u, "spatial")),
                        "undefined" !== typeof u._panner.orientationX
                          ? (u._panner.orientationX.setValueAtTime(
                              e,
                              Howler.ctx.currentTime
                            ),
                            u._panner.orientationY.setValueAtTime(
                              n,
                              Howler.ctx.currentTime
                            ),
                            u._panner.orientationZ.setValueAtTime(
                              r,
                              Howler.ctx.currentTime
                            ))
                          : u._panner.setOrientation(e, n, r)),
                      a._emit("orientation", u._id);
                  }
                }
                return a;
              }),
              (Howl.prototype.pannerAttr = function () {
                var e,
                  n,
                  r,
                  i = this,
                  a = arguments;
                if (!i._webAudio) return i;
                if (0 === a.length) return i._pannerAttr;
                if (1 === a.length) {
                  if ("object" !== typeof a[0])
                    return (r = i._soundById(parseInt(a[0], 10)))
                      ? r._pannerAttr
                      : i._pannerAttr;
                  (e = a[0]),
                    "undefined" === typeof n &&
                      (e.pannerAttr ||
                        (e.pannerAttr = {
                          coneInnerAngle: e.coneInnerAngle,
                          coneOuterAngle: e.coneOuterAngle,
                          coneOuterGain: e.coneOuterGain,
                          distanceModel: e.distanceModel,
                          maxDistance: e.maxDistance,
                          refDistance: e.refDistance,
                          rolloffFactor: e.rolloffFactor,
                          panningModel: e.panningModel,
                        }),
                      (i._pannerAttr = {
                        coneInnerAngle:
                          "undefined" !== typeof e.pannerAttr.coneInnerAngle
                            ? e.pannerAttr.coneInnerAngle
                            : i._coneInnerAngle,
                        coneOuterAngle:
                          "undefined" !== typeof e.pannerAttr.coneOuterAngle
                            ? e.pannerAttr.coneOuterAngle
                            : i._coneOuterAngle,
                        coneOuterGain:
                          "undefined" !== typeof e.pannerAttr.coneOuterGain
                            ? e.pannerAttr.coneOuterGain
                            : i._coneOuterGain,
                        distanceModel:
                          "undefined" !== typeof e.pannerAttr.distanceModel
                            ? e.pannerAttr.distanceModel
                            : i._distanceModel,
                        maxDistance:
                          "undefined" !== typeof e.pannerAttr.maxDistance
                            ? e.pannerAttr.maxDistance
                            : i._maxDistance,
                        refDistance:
                          "undefined" !== typeof e.pannerAttr.refDistance
                            ? e.pannerAttr.refDistance
                            : i._refDistance,
                        rolloffFactor:
                          "undefined" !== typeof e.pannerAttr.rolloffFactor
                            ? e.pannerAttr.rolloffFactor
                            : i._rolloffFactor,
                        panningModel:
                          "undefined" !== typeof e.pannerAttr.panningModel
                            ? e.pannerAttr.panningModel
                            : i._panningModel,
                      }));
                } else 2 === a.length && ((e = a[0]), (n = parseInt(a[1], 10)));
                for (var o = i._getSoundIds(n), l = 0; l < o.length; l++)
                  if ((r = i._soundById(o[l]))) {
                    var u = r._pannerAttr;
                    u = {
                      coneInnerAngle:
                        "undefined" !== typeof e.coneInnerAngle
                          ? e.coneInnerAngle
                          : u.coneInnerAngle,
                      coneOuterAngle:
                        "undefined" !== typeof e.coneOuterAngle
                          ? e.coneOuterAngle
                          : u.coneOuterAngle,
                      coneOuterGain:
                        "undefined" !== typeof e.coneOuterGain
                          ? e.coneOuterGain
                          : u.coneOuterGain,
                      distanceModel:
                        "undefined" !== typeof e.distanceModel
                          ? e.distanceModel
                          : u.distanceModel,
                      maxDistance:
                        "undefined" !== typeof e.maxDistance
                          ? e.maxDistance
                          : u.maxDistance,
                      refDistance:
                        "undefined" !== typeof e.refDistance
                          ? e.refDistance
                          : u.refDistance,
                      rolloffFactor:
                        "undefined" !== typeof e.rolloffFactor
                          ? e.rolloffFactor
                          : u.rolloffFactor,
                      panningModel:
                        "undefined" !== typeof e.panningModel
                          ? e.panningModel
                          : u.panningModel,
                    };
                    var s = r._panner;
                    s ||
                      (r._pos || (r._pos = i._pos || [0, 0, -0.5]),
                      t(r, "spatial"),
                      (s = r._panner)),
                      (s.coneInnerAngle = u.coneInnerAngle),
                      (s.coneOuterAngle = u.coneOuterAngle),
                      (s.coneOuterGain = u.coneOuterGain),
                      (s.distanceModel = u.distanceModel),
                      (s.maxDistance = u.maxDistance),
                      (s.refDistance = u.refDistance),
                      (s.rolloffFactor = u.rolloffFactor),
                      (s.panningModel = u.panningModel);
                  }
                return i;
              }),
              (Sound.prototype.init = (function (e) {
                return function () {
                  var t = this,
                    n = t._parent;
                  (t._orientation = n._orientation),
                    (t._stereo = n._stereo),
                    (t._pos = n._pos),
                    (t._pannerAttr = n._pannerAttr),
                    e.call(this),
                    t._stereo
                      ? n.stereo(t._stereo)
                      : t._pos && n.pos(t._pos[0], t._pos[1], t._pos[2], t._id);
                };
              })(Sound.prototype.init)),
              (Sound.prototype.reset = (function (e) {
                return function () {
                  var t = this,
                    n = t._parent;
                  return (
                    (t._orientation = n._orientation),
                    (t._stereo = n._stereo),
                    (t._pos = n._pos),
                    (t._pannerAttr = n._pannerAttr),
                    t._stereo
                      ? n.stereo(t._stereo)
                      : t._pos
                      ? n.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
                      : t._panner &&
                        (t._panner.disconnect(0),
                        (t._panner = void 0),
                        n._refreshBuffer(t)),
                    e.call(this)
                  );
                };
              })(Sound.prototype.reset));
            var t = function (e, t) {
              "spatial" === (t = t || "spatial")
                ? ((e._panner = Howler.ctx.createPanner()),
                  (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
                  (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
                  (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
                  (e._panner.distanceModel = e._pannerAttr.distanceModel),
                  (e._panner.maxDistance = e._pannerAttr.maxDistance),
                  (e._panner.refDistance = e._pannerAttr.refDistance),
                  (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
                  (e._panner.panningModel = e._pannerAttr.panningModel),
                  "undefined" !== typeof e._panner.positionX
                    ? (e._panner.positionX.setValueAtTime(
                        e._pos[0],
                        Howler.ctx.currentTime
                      ),
                      e._panner.positionY.setValueAtTime(
                        e._pos[1],
                        Howler.ctx.currentTime
                      ),
                      e._panner.positionZ.setValueAtTime(
                        e._pos[2],
                        Howler.ctx.currentTime
                      ))
                    : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
                  "undefined" !== typeof e._panner.orientationX
                    ? (e._panner.orientationX.setValueAtTime(
                        e._orientation[0],
                        Howler.ctx.currentTime
                      ),
                      e._panner.orientationY.setValueAtTime(
                        e._orientation[1],
                        Howler.ctx.currentTime
                      ),
                      e._panner.orientationZ.setValueAtTime(
                        e._orientation[2],
                        Howler.ctx.currentTime
                      ))
                    : e._panner.setOrientation(
                        e._orientation[0],
                        e._orientation[1],
                        e._orientation[2]
                      ))
                : ((e._panner = Howler.ctx.createStereoPanner()),
                  e._panner.pan.setValueAtTime(
                    e._stereo,
                    Howler.ctx.currentTime
                  )),
                e._panner.connect(e._node),
                e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
            };
          })();
      },
      470: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (i) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, i) {
              for (
                var a,
                  o,
                  l = (function (e) {
                    if (null === e || void 0 === e)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(e);
                  })(e),
                  u = 1;
                u < arguments.length;
                u++
              ) {
                for (var s in (a = Object(arguments[u])))
                  n.call(a, s) && (l[s] = a[s]);
                if (t) {
                  o = t(a);
                  for (var c = 0; c < o.length; c++)
                    r.call(a, o[c]) && (l[o[c]] = a[o[c]]);
                }
              }
              return l;
            };
      },
      345: (e, t, n) => {
        "use strict";
        var r = n(950),
          i = n(470),
          a = n(340);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(o(227));
        var l = new Set(),
          u = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var f = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          m = {};
        function _(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new _(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new _(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new _(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new _(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new _(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new _(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 === i.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!p.call(m, e) ||
                    (!p.call(h, e) &&
                      (d.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new _(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new _(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new _(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new _(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = 60103,
          x = 60106,
          T = 60107,
          S = 60108,
          E = 60114,
          C = 60109,
          A = 60110,
          O = 60112,
          P = 60113,
          M = 60120,
          L = 60115,
          N = 60116,
          R = 60121,
          D = 60128,
          z = 60129,
          I = 60130,
          F = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var j = Symbol.for;
          (k = j("react.element")),
            (x = j("react.portal")),
            (T = j("react.fragment")),
            (S = j("react.strict_mode")),
            (E = j("react.profiler")),
            (C = j("react.provider")),
            (A = j("react.context")),
            (O = j("react.forward_ref")),
            (P = j("react.suspense")),
            (M = j("react.suspense_list")),
            (L = j("react.memo")),
            (N = j("react.lazy")),
            (R = j("react.block")),
            j("react.scope"),
            (D = j("react.opaque.id")),
            (z = j("react.debug_trace_mode")),
            (I = j("react.offscreen")),
            (F = j("react.legacy_hidden"));
        }
        var B,
          H = "function" === typeof Symbol && Symbol.iterator;
        function U(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (H && e[H]) || e["@@iterator"])
            ? e
            : null;
        }
        function V(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              B = (t && t[1]) || "";
            }
          return "\n" + B + e;
        }
        var Y = !1;
        function W(e, t) {
          if (!e || Y) return "";
          Y = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  l = a.length - 1;
                1 <= o && 0 <= l && i[o] !== a[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || i[o] !== a[l]))
                        return "\n" + i[o].replace(" at new ", " at ");
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (Y = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? V(e) : "";
        }
        function $(e) {
          switch (e.tag) {
            case 5:
              return V(e.type);
            case 16:
              return V("Lazy");
            case 13:
              return V("Suspense");
            case 19:
              return V("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = W(e.type, !1));
            case 11:
              return (e = W(e.type.render, !1));
            case 22:
              return (e = W(e.type._render, !1));
            case 1:
              return (e = W(e.type, !0));
            default:
              return "";
          }
        }
        function Q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case T:
              return "Fragment";
            case x:
              return "Portal";
            case E:
              return "Profiler";
            case S:
              return "StrictMode";
            case P:
              return "Suspense";
            case M:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case A:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case O:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case L:
                return Q(e.type);
              case R:
                return Q(e._render);
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return Q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function G(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function X(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = G(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = G(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ie(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ie(e, t.type, q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ie(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ae(e, t) {
          return (
            (e = i({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function oe(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + q(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ue(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: q(n) };
        }
        function se(e, t) {
          var n = q(t.value),
            r = q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var fe = {
          html: "http://www.w3.org/1999/xhtml",
          mathml: "http://www.w3.org/1998/Math/MathML",
          svg: "http://www.w3.org/2000/svg",
        };
        function de(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function pe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? de(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var he,
          me,
          _e =
            ((me = function (e, t) {
              if (e.namespaceURI !== fe.svg || "innerHTML" in e)
                e.innerHTML = t;
              else {
                for (
                  (he = he || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = he.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return me(e, t);
                  });
                }
              : me);
        function ge(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var ve = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          ye = ["Webkit", "ms", "Moz", "O"];
        function be(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (ve.hasOwnProperty(e) && ve[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function we(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = be(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(ve).forEach(function (e) {
          ye.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (ve[t] = ve[e]);
          });
        });
        var ke = i(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function xe(e, t) {
          if (t) {
            if (
              ke[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function Te(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ee = null,
          Ce = null,
          Ae = null;
        function Oe(e) {
          if ((e = ni(e))) {
            if ("function" !== typeof Ee) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ii(t)), Ee(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          Ce ? (Ae ? Ae.push(e) : (Ae = [e])) : (Ce = e);
        }
        function Me() {
          if (Ce) {
            var e = Ce,
              t = Ae;
            if (((Ae = Ce = null), Oe(e), t))
              for (e = 0; e < t.length; e++) Oe(t[e]);
          }
        }
        function Le(e, t) {
          return e(t);
        }
        function Ne(e, t, n, r, i) {
          return e(t, n, r, i);
        }
        function Re() {}
        var De = Le,
          ze = !1,
          Ie = !1;
        function Fe() {
          (null === Ce && null === Ae) || (Re(), Me());
        }
        function je(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ii(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Be = !1;
        if (f)
          try {
            var He = {};
            Object.defineProperty(He, "passive", {
              get: function () {
                Be = !0;
              },
            }),
              window.addEventListener("test", He, He),
              window.removeEventListener("test", He, He);
          } catch (me) {
            Be = !1;
          }
        function Ue(e, t, n, r, i, a, o, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ve = !1,
          Ye = null,
          We = !1,
          $e = null,
          Qe = {
            onError: function (e) {
              (Ve = !0), (Ye = e);
            },
          };
        function qe(e, t, n, r, i, a, o, l, u) {
          (Ve = !1), (Ye = null), Ue.apply(Qe, arguments);
        }
        function Ge(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Xe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ke(e) {
          if (Ge(e) !== e) throw Error(o(188));
        }
        function Ze(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ge(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return Ke(i), e;
                    if (a === r) return Ke(i), t;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var l = !1, u = i.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = i), (r = a);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = i), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = a.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = a), (r = i);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = a), (n = i);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function Je(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var et,
          tt,
          nt,
          rt,
          it = !1,
          at = [],
          ot = null,
          lt = null,
          ut = null,
          st = new Map(),
          ct = new Map(),
          ft = [],
          dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function pt(e, t, n, r, i) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: i,
            targetContainers: [r],
          };
        }
        function ht(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              ot = null;
              break;
            case "dragenter":
            case "dragleave":
              lt = null;
              break;
            case "mouseover":
            case "mouseout":
              ut = null;
              break;
            case "pointerover":
            case "pointerout":
              st.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ct.delete(t.pointerId);
          }
        }
        function mt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = pt(t, n, r, i, a)),
              null !== t && null !== (t = ni(t)) && tt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function _t(e) {
          var t = ti(e.target);
          if (null !== t) {
            var n = Ge(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Xe(n)))
                  return (
                    (e.blockedOn = t),
                    void rt(e.lanePriority, function () {
                      a.unstable_runWithPriority(e.priority, function () {
                        nt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function gt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ni(n)) && tt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function vt(e, t, n) {
          gt(e) && n.delete(t);
        }
        function yt() {
          for (it = !1; 0 < at.length; ) {
            var e = at[0];
            if (null !== e.blockedOn) {
              null !== (e = ni(e.blockedOn)) && et(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Zt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && at.shift();
          }
          null !== ot && gt(ot) && (ot = null),
            null !== lt && gt(lt) && (lt = null),
            null !== ut && gt(ut) && (ut = null),
            st.forEach(vt),
            ct.forEach(vt);
        }
        function bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            it ||
              ((it = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, yt)));
        }
        function wt(e) {
          function t(t) {
            return bt(t, e);
          }
          if (0 < at.length) {
            bt(at[0], e);
            for (var n = 1; n < at.length; n++) {
              var r = at[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== ot && bt(ot, e),
              null !== lt && bt(lt, e),
              null !== ut && bt(ut, e),
              st.forEach(t),
              ct.forEach(t),
              n = 0;
            n < ft.length;
            n++
          )
            (r = ft[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ft.length && null === (n = ft[0]).blockedOn; )
            _t(n), null === n.blockedOn && ft.shift();
        }
        function kt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xt = {
            animationend: kt("Animation", "AnimationEnd"),
            animationiteration: kt("Animation", "AnimationIteration"),
            animationstart: kt("Animation", "AnimationStart"),
            transitionend: kt("Transition", "TransitionEnd"),
          },
          Tt = {},
          St = {};
        function Et(e) {
          if (Tt[e]) return Tt[e];
          if (!xt[e]) return e;
          var t,
            n = xt[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in St) return (Tt[e] = n[t]);
          return e;
        }
        f &&
          ((St = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xt.animationend.animation,
            delete xt.animationiteration.animation,
            delete xt.animationstart.animation),
          "TransitionEvent" in window || delete xt.transitionend.transition);
        var Ct = Et("animationend"),
          At = Et("animationiteration"),
          Ot = Et("animationstart"),
          Pt = Et("transitionend"),
          Mt = new Map(),
          Lt = new Map(),
          Nt = [
            "abort",
            "abort",
            Ct,
            "animationEnd",
            At,
            "animationIteration",
            Ot,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Pt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Rt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              i = e[n + 1];
            (i = "on" + (i[0].toUpperCase() + i.slice(1))),
              Lt.set(r, t),
              Mt.set(r, i),
              s(i, [r]);
          }
        }
        (0, a.unstable_now)();
        var Dt = 8;
        function zt(e) {
          if (0 !== (1 & e)) return (Dt = 15), 1;
          if (0 !== (2 & e)) return (Dt = 14), 2;
          if (0 !== (4 & e)) return (Dt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Dt = 12), t)
            : 0 !== (32 & e)
            ? ((Dt = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((Dt = 10), t)
            : 0 !== (256 & e)
            ? ((Dt = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((Dt = 8), t)
            : 0 !== (4096 & e)
            ? ((Dt = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((Dt = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((Dt = 5), t)
            : 67108864 & e
            ? ((Dt = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((Dt = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((Dt = 2), t)
            : 0 !== (1073741824 & e)
            ? ((Dt = 1), 1073741824)
            : ((Dt = 8), e);
        }
        function It(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Dt = 0);
          var r = 0,
            i = 0,
            a = e.expiredLanes,
            o = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== a) (r = a), (i = Dt = 15);
          else if (0 !== (a = 134217727 & n)) {
            var u = a & ~o;
            0 !== u
              ? ((r = zt(u)), (i = Dt))
              : 0 !== (l &= a) && ((r = zt(l)), (i = Dt));
          } else
            0 !== (a = n & ~o)
              ? ((r = zt(a)), (i = Dt))
              : 0 !== l && ((r = zt(l)), (i = Dt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Vt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & o))
          ) {
            if ((zt(t), i <= Dt)) return t;
            Dt = i;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - Vt(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function Ft(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function jt(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Bt(24 & ~t)) ? jt(10, t) : e;
            case 10:
              return 0 === (e = Bt(192 & ~t)) ? jt(8, t) : e;
            case 8:
              return (
                0 === (e = Bt(3584 & ~t)) &&
                  0 === (e = Bt(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Bt(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(o(358, e));
        }
        function Bt(e) {
          return e & -e;
        }
        function Ht(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Ut(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Vt(t))] = n);
        }
        var Vt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Yt(e) / Wt) | 0)) | 0;
              },
          Yt = Math.log,
          Wt = Math.LN2;
        var $t = a.unstable_UserBlockingPriority,
          Qt = a.unstable_runWithPriority,
          qt = !0;
        function Gt(e, t, n, r) {
          ze || Re();
          var i = Kt,
            a = ze;
          ze = !0;
          try {
            Ne(i, e, t, n, r);
          } finally {
            (ze = a) || Fe();
          }
        }
        function Xt(e, t, n, r) {
          Qt($t, Kt.bind(null, e, t, n, r));
        }
        function Kt(e, t, n, r) {
          var i;
          if (qt)
            if ((i = 0 === (4 & t)) && 0 < at.length && -1 < dt.indexOf(e))
              (e = pt(null, e, t, n, r)), at.push(e);
            else {
              var a = Zt(e, t, n, r);
              if (null === a) i && ht(e, r);
              else {
                if (i) {
                  if (-1 < dt.indexOf(e))
                    return (e = pt(a, e, t, n, r)), void at.push(e);
                  if (
                    (function (e, t, n, r, i) {
                      switch (t) {
                        case "focusin":
                          return (ot = mt(ot, e, t, n, r, i)), !0;
                        case "dragenter":
                          return (lt = mt(lt, e, t, n, r, i)), !0;
                        case "mouseover":
                          return (ut = mt(ut, e, t, n, r, i)), !0;
                        case "pointerover":
                          var a = i.pointerId;
                          return (
                            st.set(a, mt(st.get(a) || null, e, t, n, r, i)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (a = i.pointerId),
                            ct.set(a, mt(ct.get(a) || null, e, t, n, r, i)),
                            !0
                          );
                      }
                      return !1;
                    })(a, e, t, n, r)
                  )
                    return;
                  ht(e, r);
                }
                Rr(e, t, r, null, n);
              }
            }
        }
        function Zt(e, t, n, r) {
          var i = Se(r);
          if (null !== (i = ti(i))) {
            var a = Ge(i);
            if (null === a) i = null;
            else {
              var o = a.tag;
              if (13 === o) {
                if (null !== (i = Xe(a))) return i;
                i = null;
              } else if (3 === o) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                i = null;
              } else a !== i && (i = null);
            }
          }
          return Rr(e, t, r, i, n), null;
        }
        var Jt = null,
          en = null,
          tn = null;
        function nn() {
          if (tn) return tn;
          var e,
            t,
            n = en,
            r = n.length,
            i = "value" in Jt ? Jt.value : Jt.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (tn = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function rn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function on() {
          return !1;
        }
        function ln(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? an
                : on),
              (this.isPropagationStopped = on),
              this
            );
          }
          return (
            i(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an,
            }),
            t
          );
        }
        var un,
          sn,
          cn,
          fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          dn = ln(fn),
          pn = i({}, fn, { view: 0, detail: 0 }),
          hn = ln(pn),
          mn = i({}, pn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== cn &&
                    (cn && "mousemove" === e.type
                      ? ((un = e.screenX - cn.screenX),
                        (sn = e.screenY - cn.screenY))
                      : (sn = un = 0),
                    (cn = e)),
                  un);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          _n = ln(mn),
          gn = ln(i({}, mn, { dataTransfer: 0 })),
          vn = ln(i({}, pn, { relatedTarget: 0 })),
          yn = ln(
            i({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bn = i({}, fn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          wn = ln(bn),
          kn = ln(i({}, fn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Tn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var An = i({}, pn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = rn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Tn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? rn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? rn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          On = ln(An),
          Pn = ln(
            i({}, mn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Mn = ln(
            i({}, pn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Ln = ln(
            i({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = i({}, mn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = ln(Nn),
          Dn = [9, 13, 27, 32],
          zn = f && "CompositionEvent" in window,
          In = null;
        f && "documentMode" in document && (In = document.documentMode);
        var Fn = f && "TextEvent" in window && !In,
          jn = f && (!zn || (In && 8 < In && 11 >= In)),
          Bn = String.fromCharCode(32),
          Hn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Dn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Yn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Qn(e, t, n, r) {
          Pe(r),
            0 < (t = zr(t, "onChange")).length &&
              ((n = new dn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Gn = null;
        function Xn(e) {
          Ar(e, 0);
        }
        function Kn(e) {
          if (K(ri(e))) return e;
        }
        function Zn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (f) {
          var er;
          if (f) {
            var tr = "oninput" in document;
            if (!tr) {
              var nr = document.createElement("div");
              nr.setAttribute("oninput", "return;"),
                (tr = "function" === typeof nr.oninput);
            }
            er = tr;
          } else er = !1;
          Jn = er && (!document.documentMode || 9 < document.documentMode);
        }
        function rr() {
          qn && (qn.detachEvent("onpropertychange", ir), (Gn = qn = null));
        }
        function ir(e) {
          if ("value" === e.propertyName && Kn(Gn)) {
            var t = [];
            if ((Qn(t, Gn, e, Se(e)), (e = Xn), ze)) e(t);
            else {
              ze = !0;
              try {
                Le(e, t);
              } finally {
                (ze = !1), Fe();
              }
            }
          }
        }
        function ar(e, t, n) {
          "focusin" === e
            ? (rr(), (Gn = n), (qn = t).attachEvent("onpropertychange", ir))
            : "focusout" === e && rr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(Gn);
        }
        function lr(e, t) {
          if ("click" === e) return Kn(t);
        }
        function ur(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var sr =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          cr = Object.prototype.hasOwnProperty;
        function fr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!cr.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function dr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function pr(e, t) {
          var n,
            r = dr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = dr(r);
          }
        }
        function hr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? hr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function mr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function _r(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var gr = f && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          yr = null,
          br = null,
          wr = !1;
        function kr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          wr ||
            null == vr ||
            vr !== Z(r) ||
            ("selectionStart" in (r = vr) && _r(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (br && fr(br, r)) ||
              ((br = r),
              0 < (r = zr(yr, "onSelect")).length &&
                ((t = new dn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        Rt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Rt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Rt(Nt, 2);
        for (
          var xr =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Tr = 0;
          Tr < xr.length;
          Tr++
        )
          Lt.set(xr[Tr], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Sr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Er = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Sr)
          );
        function Cr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, a, l, u, s) {
              if ((qe.apply(this, arguments), Ve)) {
                if (!Ve) throw Error(o(198));
                var c = Ye;
                (Ve = !1), (Ye = null), We || ((We = !0), ($e = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ar(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== a && i.isPropagationStopped()))
                    break e;
                  Cr(i, l, s), (a = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (l = r[o]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== a && i.isPropagationStopped())
                  )
                    break e;
                  Cr(i, l, s), (a = u);
                }
            }
          }
          if (We) throw ((e = $e), (We = !1), ($e = null), e);
        }
        function Or(e, t) {
          var n = ai(t),
            r = e + "__bubble";
          n.has(r) || (Nr(t, e, 2, !1), n.add(r));
        }
        var Pr = "_reactListening" + Math.random().toString(36).slice(2);
        function Mr(e) {
          e[Pr] ||
            ((e[Pr] = !0),
            l.forEach(function (t) {
              Er.has(t) || Lr(t, !1, e, null), Lr(t, !0, e, null);
            }));
        }
        function Lr(e, t, n, r) {
          var i =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && Er.has(e))
          ) {
            if ("scroll" !== e) return;
            (i |= 2), (a = r);
          }
          var o = ai(a),
            l = e + "__" + (t ? "capture" : "bubble");
          o.has(l) || (t && (i |= 4), Nr(a, e, i, t), o.add(l));
        }
        function Nr(e, t, n, r) {
          var i = Lt.get(t);
          switch (void 0 === i ? 2 : i) {
            case 0:
              i = Gt;
              break;
            case 1:
              i = Xt;
              break;
            default:
              i = Kt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Be ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Rr(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === i ||
                        (8 === u.nodeType && u.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ti(l))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = a = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (Ie) return e(t, n);
            Ie = !0;
            try {
              return De(e, t, n);
            } finally {
              (Ie = !1), Fe();
            }
          })(function () {
            var r = a,
              i = Se(n),
              o = [];
            e: {
              var l = Mt.get(e);
              if (void 0 !== l) {
                var u = dn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === rn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = On;
                    break;
                  case "focusin":
                    (s = "focus"), (u = vn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = _n;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = gn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Mn;
                    break;
                  case Ct:
                  case At:
                  case Ot:
                    u = yn;
                    break;
                  case Pt:
                    u = Ln;
                    break;
                  case "scroll":
                    u = hn;
                    break;
                  case "wheel":
                    u = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = wn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = je(h, d)) &&
                        c.push(Dr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, i)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 !== (16 & t) ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ti(s) && !s[Jr])) &&
                  (u || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ti(s)
                          : null) &&
                        (s !== (f = Ge(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = _n),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : ri(u)),
                  (p = null == s ? l : ri(s)),
                  ((l = new c(m, h + "leave", u, n, i)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  ti(i) === r &&
                    (((c = new c(d, h + "enter", s, n, i)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Ir(p)) h++;
                    for (p = 0, m = d; m; m = Ir(m)) p++;
                    for (; 0 < h - p; ) (c = Ir(c)), h--;
                    for (; 0 < p - h; ) (d = Ir(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Ir(c)), (d = Ir(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Fr(o, l, u, c, !1),
                  null !== s && null !== f && Fr(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? ri(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var _ = Zn;
              else if ($n(l))
                if (Jn) _ = ur;
                else {
                  _ = or;
                  var g = ar;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (_ = lr);
              switch (
                (_ && (_ = _(e, r))
                  ? Qn(o, _, n, i)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ie(l, "number", l.value)),
                (g = r ? ri(r) : window),
                e)
              ) {
                case "focusin":
                  ($n(g) || "true" === g.contentEditable) &&
                    ((vr = g), (yr = r), (br = null));
                  break;
                case "focusout":
                  br = yr = vr = null;
                  break;
                case "mousedown":
                  wr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (wr = !1), kr(o, n, i);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  kr(o, n, i);
              }
              var v;
              if (zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Yn
                  ? Un(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (jn &&
                  "ko" !== n.locale &&
                  (Yn || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Yn && (v = nn())
                    : ((en = "value" in (Jt = i) ? Jt.value : Jt.textContent),
                      (Yn = !0))),
                0 < (g = zr(r, y)).length &&
                  ((y = new kn(y, e, null, n, i)),
                  o.push({ event: y, listeners: g }),
                  v ? (y.data = v) : null !== (v = Vn(n)) && (y.data = v))),
                (v = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Hn = !0), Bn);
                        case "textInput":
                          return (e = t.data) === Bn && Hn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Yn)
                        return "compositionend" === e || (!zn && Un(e, t))
                          ? ((e = nn()), (tn = en = Jt = null), (Yn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return jn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = zr(r, "onBeforeInput")).length &&
                  ((i = new kn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = v));
            }
            Ar(o, t);
          });
        }
        function Dr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function zr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = je(e, n)) && r.unshift(Dr(e, a, i)),
              null != (a = je(e, t)) && r.push(Dr(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function Ir(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Fr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              i
                ? null != (u = je(n, a)) && o.unshift(Dr(n, u, l))
                : i || (null != (u = je(n, a)) && o.push(Dr(n, u, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        function jr() {}
        var Br = null,
          Hr = null;
        function Ur(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Vr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Yr = "function" === typeof setTimeout ? setTimeout : void 0,
          Wr = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function $r(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Qr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function qr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Gr = 0;
        var Xr = Math.random().toString(36).slice(2),
          Kr = "__reactFiber$" + Xr,
          Zr = "__reactProps$" + Xr,
          Jr = "__reactContainer$" + Xr,
          ei = "__reactEvents$" + Xr;
        function ti(e) {
          var t = e[Kr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Jr] || n[Kr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = qr(e); null !== e; ) {
                  if ((n = e[Kr])) return n;
                  e = qr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ni(e) {
          return !(e = e[Kr] || e[Jr]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ri(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ii(e) {
          return e[Zr] || null;
        }
        function ai(e) {
          var t = e[ei];
          return void 0 === t && (t = e[ei] = new Set()), t;
        }
        var oi = [],
          li = -1;
        function ui(e) {
          return { current: e };
        }
        function si(e) {
          0 > li || ((e.current = oi[li]), (oi[li] = null), li--);
        }
        function ci(e, t) {
          li++, (oi[li] = e.current), (e.current = t);
        }
        var fi = {},
          di = ui(fi),
          pi = ui(!1),
          hi = fi;
        function mi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return fi;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function _i(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function gi() {
          si(pi), si(di);
        }
        function vi(e, t, n) {
          if (di.current !== fi) throw Error(o(168));
          ci(di, t), ci(pi, n);
        }
        function yi(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(o(108, Q(t) || "Unknown", a));
          return i({}, n, r);
        }
        function bi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              fi),
            (hi = di.current),
            ci(di, e),
            ci(pi, pi.current),
            !0
          );
        }
        function wi(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = yi(e, t, hi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              si(pi),
              si(di),
              ci(di, e))
            : si(pi),
            ci(pi, n);
        }
        var ki = null,
          xi = null,
          Ti = a.unstable_runWithPriority,
          Si = a.unstable_scheduleCallback,
          Ei = a.unstable_cancelCallback,
          Ci = a.unstable_shouldYield,
          Ai = a.unstable_requestPaint,
          Oi = a.unstable_now,
          Pi = a.unstable_getCurrentPriorityLevel,
          Mi = a.unstable_ImmediatePriority,
          Li = a.unstable_UserBlockingPriority,
          Ni = a.unstable_NormalPriority,
          Ri = a.unstable_LowPriority,
          Di = a.unstable_IdlePriority,
          zi = {},
          Ii = void 0 !== Ai ? Ai : function () {},
          Fi = null,
          ji = null,
          Bi = !1,
          Hi = Oi(),
          Ui =
            1e4 > Hi
              ? Oi
              : function () {
                  return Oi() - Hi;
                };
        function Vi() {
          switch (Pi()) {
            case Mi:
              return 99;
            case Li:
              return 98;
            case Ni:
              return 97;
            case Ri:
              return 96;
            case Di:
              return 95;
            default:
              throw Error(o(332));
          }
        }
        function Yi(e) {
          switch (e) {
            case 99:
              return Mi;
            case 98:
              return Li;
            case 97:
              return Ni;
            case 96:
              return Ri;
            case 95:
              return Di;
            default:
              throw Error(o(332));
          }
        }
        function Wi(e, t) {
          return (e = Yi(e)), Ti(e, t);
        }
        function $i(e, t, n) {
          return (e = Yi(e)), Si(e, t, n);
        }
        function Qi() {
          if (null !== ji) {
            var e = ji;
            (ji = null), Ei(e);
          }
          qi();
        }
        function qi() {
          if (!Bi && null !== Fi) {
            Bi = !0;
            var e = 0;
            try {
              var t = Fi;
              Wi(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Fi = null);
            } catch (n) {
              throw (null !== Fi && (Fi = Fi.slice(e + 1)), Si(Mi, Qi), n);
            } finally {
              Bi = !1;
            }
          }
        }
        var Gi = w.ReactCurrentBatchConfig;
        function Xi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = i({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Ki = ui(null),
          Zi = null,
          Ji = null,
          ea = null;
        function ta() {
          ea = Ji = Zi = null;
        }
        function na(e) {
          var t = Ki.current;
          si(Ki), (e.type._context._currentValue = t);
        }
        function ra(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ia(e, t) {
          (Zi = e),
            (ea = Ji = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (zo = !0), (e.firstContext = null));
        }
        function aa(e, t) {
          if (ea !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) ||
                ((ea = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === Ji)
            ) {
              if (null === Zi) throw Error(o(308));
              (Ji = t),
                (Zi.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else Ji = Ji.next = t;
          return e._currentValue;
        }
        var oa = !1;
        function la(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function ua(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function sa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function ca(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function fa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function da(e, t, n, r) {
          var a = e.updateQueue;
          oa = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var s = u,
              c = s.next;
            (s.next = null), null === l ? (o = c) : (l.next = c), (l = s);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== l &&
                (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
                (f.lastBaseUpdate = s));
            }
          }
          if (null !== o) {
            for (d = a.baseState, l = 0, f = c = s = null; ; ) {
              u = o.lane;
              var p = o.eventTime;
              if ((r & u) === u) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((u = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, u);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (u =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, u)
                              : h) ||
                        void 0 === u
                      )
                        break e;
                      d = i({}, d, u);
                      break e;
                    case 2:
                      oa = !0;
                  }
                }
                null !== o.callback &&
                  ((e.flags |= 32),
                  null === (u = a.effects) ? (a.effects = [o]) : u.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: u,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                  (l |= u);
              if (null === (o = o.next)) {
                if (null === (u = a.shared.pending)) break;
                (o = u.next),
                  (u.next = null),
                  (a.lastBaseUpdate = u),
                  (a.shared.pending = null);
              }
            }
            null === f && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = f),
              (Hl |= l),
              (e.lanes = l),
              (e.memoizedState = d);
          }
        }
        function pa(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(o(191, i));
                i.call(r);
              }
            }
        }
        var ha = new r.Component().refs;
        function ma(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : i({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var _a = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ge(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = du(),
              i = pu(e),
              a = sa(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              ca(e, a),
              hu(e, i, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = du(),
              i = pu(e),
              a = sa(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              ca(e, a),
              hu(e, i, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = du(),
              r = pu(e),
              i = sa(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              ca(e, i),
              hu(e, r, n);
          },
        };
        function ga(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !fr(n, r) ||
                !fr(i, a);
        }
        function va(e, t, n) {
          var r = !1,
            i = fi,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = aa(a))
              : ((i = _i(t) ? hi : di.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? mi(e, i)
                  : fi)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = _a),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function ya(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && _a.enqueueReplaceState(t, t.state, null);
        }
        function ba(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = ha), la(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = aa(a))
            : ((a = _i(t) ? hi : di.current), (i.context = mi(e, a))),
            da(e, n, i, r),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (ma(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && _a.enqueueReplaceState(i, i.state, null),
              da(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4);
        }
        var wa = Array.isArray;
        function ka(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === ha && (t = r.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function xa(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              o(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Ta(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = $u(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Xu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = i(t, n.props)).ref = ka(e, t, n)), (r.return = e), r)
              : (((r = Qu(n.type, n.key, n.props, null, e.mode, r)).ref = ka(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ku(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = qu(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" === typeof t || "number" === typeof t)
              return ((t = Xu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Qu(t.type, t.key, t.props, null, e.mode, n)).ref = ka(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Ku(t, e.mode, n)).return = e), t;
              }
              if (wa(t) || U(t))
                return ((t = qu(t, e.mode, n, null)).return = e), t;
              xa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n)
              return null !== i ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === i
                    ? n.type === T
                      ? f(e, t, n.props.children, r, i)
                      : s(e, t, n, r)
                    : null;
                case x:
                  return n.key === i ? c(e, t, n, r) : null;
              }
              if (wa(n) || U(n)) return null !== i ? null : f(e, t, n, r, null);
              xa(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if ("string" === typeof r || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === T
                      ? f(t, e, r.props.children, i, r.key)
                      : s(t, e, r, i)
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
              }
              if (wa(r) || U(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              xa(t, r);
            }
            return null;
          }
          function m(i, o, l, u) {
            for (
              var s = null, c = null, f = o, m = (o = 0), _ = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((_ = f), (f = null)) : (_ = f.sibling);
              var g = p(i, f, l[m], u);
              if (null === g) {
                null === f && (f = _);
                break;
              }
              e && f && null === g.alternate && t(i, f),
                (o = a(g, o, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = _);
            }
            if (m === l.length) return n(i, f), s;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(i, l[m], u)) &&
                  ((o = a(f, o, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return s;
            }
            for (f = r(i, f); m < l.length; m++)
              null !== (_ = h(f, i, m, l[m], u)) &&
                (e &&
                  null !== _.alternate &&
                  f.delete(null === _.key ? m : _.key),
                (o = a(_, o, m)),
                null === c ? (s = _) : (c.sibling = _),
                (c = _));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              s
            );
          }
          function _(i, l, u, s) {
            var c = U(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), m = l, _ = (l = 0), g = null, v = u.next();
              null !== m && !v.done;
              _++, v = u.next()
            ) {
              m.index > _ ? ((g = m), (m = null)) : (g = m.sibling);
              var y = p(i, m, v.value, s);
              if (null === y) {
                null === m && (m = g);
                break;
              }
              e && m && null === y.alternate && t(i, m),
                (l = a(y, l, _)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y),
                (m = g);
            }
            if (v.done) return n(i, m), c;
            if (null === m) {
              for (; !v.done; _++, v = u.next())
                null !== (v = d(i, v.value, s)) &&
                  ((l = a(v, l, _)),
                  null === f ? (c = v) : (f.sibling = v),
                  (f = v));
              return c;
            }
            for (m = r(i, m); !v.done; _++, v = u.next())
              null !== (v = h(m, i, _, v.value, s)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? _ : v.key),
                (l = a(v, l, _)),
                null === f ? (c = v) : (f.sibling = v),
                (f = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(i, e);
                }),
              c
            );
          }
          return function (e, r, a, u) {
            var s =
              "object" === typeof a &&
              null !== a &&
              a.type === T &&
              null === a.key;
            s && (a = a.props.children);
            var c = "object" === typeof a && null !== a;
            if (c)
              switch (a.$$typeof) {
                case k:
                  e: {
                    for (c = a.key, s = r; null !== s; ) {
                      if (s.key === c) {
                        if (7 === s.tag) {
                          if (a.type === T) {
                            n(e, s.sibling),
                              ((r = i(s, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (s.elementType === a.type) {
                          n(e, s.sibling),
                            ((r = i(s, a.props)).ref = ka(e, s, a)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, s);
                        break;
                      }
                      t(e, s), (s = s.sibling);
                    }
                    a.type === T
                      ? (((r = qu(a.props.children, e.mode, u, a.key)).return =
                          e),
                        (e = r))
                      : (((u = Qu(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          u
                        )).ref = ka(e, r, a)),
                        (u.return = e),
                        (e = u));
                  }
                  return l(e);
                case x:
                  e: {
                    for (s = a.key; null !== r; ) {
                      if (r.key === s) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = i(r, a.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Ku(a, e.mode, u)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" === typeof a || "number" === typeof a)
              return (
                (a = "" + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = i(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Xu(a, e.mode, u)).return = e), (e = r)),
                l(e)
              );
            if (wa(a)) return m(e, r, a, u);
            if (U(a)) return _(e, r, a, u);
            if ((c && xa(e, a), "undefined" === typeof a && !s))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(o(152, Q(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Sa = Ta(!0),
          Ea = Ta(!1),
          Ca = {},
          Aa = ui(Ca),
          Oa = ui(Ca),
          Pa = ui(Ca);
        function Ma(e) {
          if (e === Ca) throw Error(o(174));
          return e;
        }
        function La(e, t) {
          switch ((ci(Pa, t), ci(Oa, e), ci(Aa, Ca), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : pe(null, "");
              break;
            default:
              t = pe(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          si(Aa), ci(Aa, t);
        }
        function Na() {
          si(Aa), si(Oa), si(Pa);
        }
        function Ra(e) {
          Ma(Pa.current);
          var t = Ma(Aa.current),
            n = pe(t, e.type);
          t !== n && (ci(Oa, e), ci(Aa, n));
        }
        function Da(e) {
          Oa.current === e && (si(Aa), si(Oa));
        }
        var za = ui(0);
        function Ia(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Fa = null,
          ja = null,
          Ba = !1;
        function Ha(e, t) {
          var n = Yu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Ua(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Va(e) {
          if (Ba) {
            var t = ja;
            if (t) {
              var n = t;
              if (!Ua(e, t)) {
                if (!(t = Qr(n.nextSibling)) || !Ua(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Ba = !1), void (Fa = e)
                  );
                Ha(Fa, n);
              }
              (Fa = e), (ja = Qr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Ba = !1), (Fa = e);
          }
        }
        function Ya(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Fa = e;
        }
        function Wa(e) {
          if (e !== Fa) return !1;
          if (!Ba) return Ya(e), (Ba = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Vr(t, e.memoizedProps))
          )
            for (t = ja; t; ) Ha(e, t), (t = Qr(t.nextSibling));
          if ((Ya(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ja = Qr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ja = null;
            }
          } else ja = Fa ? Qr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function $a() {
          (ja = Fa = null), (Ba = !1);
        }
        var Qa = [];
        function qa() {
          for (var e = 0; e < Qa.length; e++)
            Qa[e]._workInProgressVersionPrimary = null;
          Qa.length = 0;
        }
        var Ga = w.ReactCurrentDispatcher,
          Xa = w.ReactCurrentBatchConfig,
          Ka = 0,
          Za = null,
          Ja = null,
          eo = null,
          to = !1,
          no = !1;
        function ro() {
          throw Error(o(321));
        }
        function io(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function ao(e, t, n, r, i, a) {
          if (
            ((Ka = a),
            (Za = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Ga.current = null === e || null === e.memoizedState ? Lo : No),
            (e = n(r, i)),
            no)
          ) {
            a = 0;
            do {
              if (((no = !1), !(25 > a))) throw Error(o(301));
              (a += 1),
                (eo = Ja = null),
                (t.updateQueue = null),
                (Ga.current = Ro),
                (e = n(r, i));
            } while (no);
          }
          if (
            ((Ga.current = Mo),
            (t = null !== Ja && null !== Ja.next),
            (Ka = 0),
            (eo = Ja = Za = null),
            (to = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function oo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === eo ? (Za.memoizedState = eo = e) : (eo = eo.next = e), eo
          );
        }
        function lo() {
          if (null === Ja) {
            var e = Za.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Ja.next;
          var t = null === eo ? Za.memoizedState : eo.next;
          if (null !== t) (eo = t), (Ja = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (Ja = e).memoizedState,
              baseState: Ja.baseState,
              baseQueue: Ja.baseQueue,
              queue: Ja.queue,
              next: null,
            }),
              null === eo ? (Za.memoizedState = eo = e) : (eo = eo.next = e);
          }
          return eo;
        }
        function uo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function so(e) {
          var t = lo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = Ja,
            i = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== i) {
              var l = i.next;
              (i.next = a.next), (a.next = l);
            }
            (r.baseQueue = i = a), (n.pending = null);
          }
          if (null !== i) {
            (i = i.next), (r = r.baseState);
            var u = (l = a = null),
              s = i;
            do {
              var c = s.lane;
              if ((Ka & c) === c)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      eagerReducer: s.eagerReducer,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
              else {
                var f = {
                  lane: c,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (a = r)) : (u = u.next = f),
                  (Za.lanes |= c),
                  (Hl |= c);
              }
              s = s.next;
            } while (null !== s && s !== i);
            null === u ? (a = r) : (u.next = l),
              sr(r, t.memoizedState) || (zo = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function co(e) {
          var t = lo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            a = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== i);
            sr(a, t.memoizedState) || (zo = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function fo(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var i = t._workInProgressVersionPrimary;
          if (
            (null !== i
              ? (e = i === r)
              : ((e = e.mutableReadLanes),
                (e = (Ka & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Qa.push(t))),
            e)
          )
            return n(t._source);
          throw (Qa.push(t), Error(o(350)));
        }
        function po(e, t, n, r) {
          var i = Nl;
          if (null === i) throw Error(o(349));
          var a = t._getVersion,
            l = a(t._source),
            u = Ga.current,
            s = u.useState(function () {
              return fo(i, t, n);
            }),
            c = s[1],
            f = s[0];
          s = eo;
          var d = e.memoizedState,
            p = d.refs,
            h = p.getSnapshot,
            m = d.source;
          d = d.subscribe;
          var _ = Za;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            u.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = a(t._source);
                if (!sr(l, e)) {
                  (e = n(t._source)),
                    sr(f, e) ||
                      (c(e),
                      (e = pu(_)),
                      (i.mutableReadLanes |= e & i.pendingLanes)),
                    (e = i.mutableReadLanes),
                    (i.entangledLanes |= e);
                  for (var r = i.entanglements, o = e; 0 < o; ) {
                    var u = 31 - Vt(o),
                      s = 1 << u;
                    (r[u] |= e), (o &= ~s);
                  }
                }
              },
              [n, t, r]
            ),
            u.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = pu(_);
                    i.mutableReadLanes |= r & i.pendingLanes;
                  } catch (a) {
                    n(function () {
                      throw a;
                    });
                  }
                });
              },
              [t, r]
            ),
            (sr(h, n) && sr(m, t) && sr(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: uo,
                lastRenderedState: f,
              }).dispatch = c =
                Po.bind(null, Za, e)),
              (s.queue = e),
              (s.baseQueue = null),
              (f = fo(i, t, n)),
              (s.memoizedState = s.baseState = f)),
            f
          );
        }
        function ho(e, t, n) {
          return po(lo(), e, t, n);
        }
        function mo(e) {
          var t = oo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: uo,
                lastRenderedState: e,
              }).dispatch =
              Po.bind(null, Za, e)),
            [t.memoizedState, e]
          );
        }
        function _o(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Za.updateQueue)
              ? ((t = { lastEffect: null }),
                (Za.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function go(e) {
          return (e = { current: e }), (oo().memoizedState = e);
        }
        function vo() {
          return lo().memoizedState;
        }
        function yo(e, t, n, r) {
          var i = oo();
          (Za.flags |= e),
            (i.memoizedState = _o(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function bo(e, t, n, r) {
          var i = lo();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== Ja) {
            var o = Ja.memoizedState;
            if (((a = o.destroy), null !== r && io(r, o.deps)))
              return void _o(t, n, a, r);
          }
          (Za.flags |= e), (i.memoizedState = _o(1 | t, n, a, r));
        }
        function wo(e, t) {
          return yo(516, 4, e, t);
        }
        function ko(e, t) {
          return bo(516, 4, e, t);
        }
        function xo(e, t) {
          return bo(4, 2, e, t);
        }
        function To(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function So(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            bo(4, 2, To.bind(null, t, e), n)
          );
        }
        function Eo() {}
        function Co(e, t) {
          var n = lo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && io(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ao(e, t) {
          var n = lo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && io(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Oo(e, t) {
          var n = Vi();
          Wi(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Wi(97 < n ? 97 : n, function () {
              var n = Xa.transition;
              Xa.transition = 1;
              try {
                e(!1), t();
              } finally {
                Xa.transition = n;
              }
            });
        }
        function Po(e, t, n) {
          var r = du(),
            i = pu(e),
            a = {
              lane: i,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            o = t.pending;
          if (
            (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
            (t.pending = a),
            (o = e.alternate),
            e === Za || (null !== o && o === Za))
          )
            no = to = !0;
          else {
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  u = o(l, n);
                if (((a.eagerReducer = o), (a.eagerState = u), sr(u, l)))
                  return;
              } catch (s) {}
            hu(e, i, r);
          }
        }
        var Mo = {
            readContext: aa,
            useCallback: ro,
            useContext: ro,
            useEffect: ro,
            useImperativeHandle: ro,
            useLayoutEffect: ro,
            useMemo: ro,
            useReducer: ro,
            useRef: ro,
            useState: ro,
            useDebugValue: ro,
            useDeferredValue: ro,
            useTransition: ro,
            useMutableSource: ro,
            useOpaqueIdentifier: ro,
            unstable_isNewReconciler: !1,
          },
          Lo = {
            readContext: aa,
            useCallback: function (e, t) {
              return (oo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: aa,
            useEffect: wo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                yo(4, 2, To.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return yo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = oo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = oo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Po.bind(null, Za, e)),
                [r.memoizedState, e]
              );
            },
            useRef: go,
            useState: mo,
            useDebugValue: Eo,
            useDeferredValue: function (e) {
              var t = mo(e),
                n = t[0],
                r = t[1];
              return (
                wo(
                  function () {
                    var t = Xa.transition;
                    Xa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = mo(!1),
                t = e[0];
              return go((e = Oo.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = oo();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                po(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Ba) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: D, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Gr++).toString(36))),
                      Error(o(355)))
                    );
                  }),
                  n = mo(t)[1];
                return (
                  0 === (2 & Za.mode) &&
                    ((Za.flags |= 516),
                    _o(
                      5,
                      function () {
                        n("r:" + (Gr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return mo((t = "r:" + (Gr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          No = {
            readContext: aa,
            useCallback: Co,
            useContext: aa,
            useEffect: ko,
            useImperativeHandle: So,
            useLayoutEffect: xo,
            useMemo: Ao,
            useReducer: so,
            useRef: vo,
            useState: function () {
              return so(uo);
            },
            useDebugValue: Eo,
            useDeferredValue: function (e) {
              var t = so(uo),
                n = t[0],
                r = t[1];
              return (
                ko(
                  function () {
                    var t = Xa.transition;
                    Xa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = so(uo)[0];
              return [vo().current, e];
            },
            useMutableSource: ho,
            useOpaqueIdentifier: function () {
              return so(uo)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ro = {
            readContext: aa,
            useCallback: Co,
            useContext: aa,
            useEffect: ko,
            useImperativeHandle: So,
            useLayoutEffect: xo,
            useMemo: Ao,
            useReducer: co,
            useRef: vo,
            useState: function () {
              return co(uo);
            },
            useDebugValue: Eo,
            useDeferredValue: function (e) {
              var t = co(uo),
                n = t[0],
                r = t[1];
              return (
                ko(
                  function () {
                    var t = Xa.transition;
                    Xa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = co(uo)[0];
              return [vo().current, e];
            },
            useMutableSource: ho,
            useOpaqueIdentifier: function () {
              return co(uo)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Do = w.ReactCurrentOwner,
          zo = !1;
        function Io(e, t, n, r) {
          t.child = null === e ? Ea(t, null, n, r) : Sa(t, e.child, n, r);
        }
        function Fo(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            ia(t, i),
            (r = ao(e, t, n, r, a, i)),
            null === e || zo
              ? ((t.flags |= 1), Io(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                al(e, t, i))
          );
        }
        function jo(e, t, n, r, i, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Wu(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Qu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Bo(e, t, o, r, i, a));
          }
          return (
            (o = e.child),
            0 === (i & a) &&
            ((i = o.memoizedProps),
            (n = null !== (n = n.compare) ? n : fr)(i, r) && e.ref === t.ref)
              ? al(e, t, a)
              : ((t.flags |= 1),
                ((e = $u(o, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Bo(e, t, n, r, i, a) {
          if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((zo = !1), 0 === (a & i)))
              return (t.lanes = e.lanes), al(e, t, a);
            0 !== (16384 & e.flags) && (zo = !0);
          }
          return Vo(e, t, n, r, a);
        }
        function Ho(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), ku(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  ku(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                ku(t, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              ku(t, r);
          return Io(e, t, i, n), t.child;
        }
        function Uo(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Vo(e, t, n, r, i) {
          var a = _i(n) ? hi : di.current;
          return (
            (a = mi(t, a)),
            ia(t, i),
            (n = ao(e, t, n, r, a, i)),
            null === e || zo
              ? ((t.flags |= 1), Io(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                al(e, t, i))
          );
        }
        function Yo(e, t, n, r, i) {
          if (_i(n)) {
            var a = !0;
            bi(t);
          } else a = !1;
          if ((ia(t, i), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              va(t, n, r),
              ba(t, n, r, i),
              (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var u = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = aa(s))
              : (s = mi(t, (s = _i(n) ? hi : di.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || u !== s) && ya(t, o, r, s)),
              (oa = !1);
            var d = t.memoizedState;
            (o.state = d),
              da(t, r, o, i),
              (u = t.memoizedState),
              l !== r || d !== u || pi.current || oa
                ? ("function" === typeof c &&
                    (ma(t, n, c, r), (u = t.memoizedState)),
                  (l = oa || ga(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = l))
                : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (o = t.stateNode),
              ua(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : Xi(t.type, l)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = aa(u))
                : (u = mi(t, (u = _i(n) ? hi : di.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== f || d !== u) && ya(t, o, r, u)),
              (oa = !1),
              (d = t.memoizedState),
              (o.state = d),
              da(t, r, o, i);
            var h = t.memoizedState;
            l !== f || d !== h || pi.current || oa
              ? ("function" === typeof p &&
                  (ma(t, n, p, r), (h = t.memoizedState)),
                (s = oa || ga(t, n, s, r, d, h, u))
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Wo(e, t, n, r, a, i);
        }
        function Wo(e, t, n, r, i, a) {
          Uo(e, t);
          var o = 0 !== (64 & t.flags);
          if (!r && !o) return i && wi(t, n, !1), al(e, t, a);
          (r = t.stateNode), (Do.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Sa(t, e.child, null, a)),
                (t.child = Sa(t, null, l, a)))
              : Io(e, t, l, a),
            (t.memoizedState = r.state),
            i && wi(t, n, !0),
            t.child
          );
        }
        function $o(e) {
          var t = e.stateNode;
          t.pendingContext
            ? vi(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && vi(0, t.context, !1),
            La(e, t.containerInfo);
        }
        var Qo,
          qo,
          Go,
          Xo,
          Ko = { dehydrated: null, retryLane: 0 };
        function Zo(e, t, n) {
          var r,
            i = t.pendingProps,
            a = za.current,
            o = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((o = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === i.fallback ||
                !0 === i.unstable_avoidThisFallback ||
                (a |= 1),
            ci(za, 1 & a),
            null === e
              ? (void 0 !== i.fallback && Va(t),
                (e = i.children),
                (a = i.fallback),
                o
                  ? ((e = Jo(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ko),
                    e)
                  : "number" === typeof i.unstable_expectedLoadTime
                  ? ((e = Jo(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ko),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Gu(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                o
                  ? ((i = tl(e, t, i.children, i.fallback, n)),
                    (o = t.child),
                    (a = e.child.memoizedState),
                    (o.memoizedState =
                      null === a
                        ? { baseLanes: n }
                        : { baseLanes: a.baseLanes | n }),
                    (o.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Ko),
                    i)
                  : ((n = el(e, t, i.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Jo(e, t, n, r) {
          var i = e.mode,
            a = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 === (2 & i) && null !== a
              ? ((a.childLanes = 0), (a.pendingProps = t))
              : (a = Gu(t, i, 0, null)),
            (n = qu(n, i, r, null)),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            n
          );
        }
        function el(e, t, n, r) {
          var i = e.child;
          return (
            (e = i.sibling),
            (n = $u(i, { mode: "visible", children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tl(e, t, n, r, i) {
          var a = t.mode,
            o = e.child;
          e = o.sibling;
          var l = { mode: "hidden", children: n };
          return (
            0 === (2 & a) && t.child !== o
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (o = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = o),
                    (o.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = $u(o, l)),
            null !== e ? (r = $u(e, r)) : ((r = qu(r, a, i, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ra(e.return, t);
        }
        function rl(e, t, n, r, i, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
                lastEffect: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i),
              (o.lastEffect = a));
        }
        function il(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((Io(e, t, r.children, n), 0 !== (2 & (r = za.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                else if (19 === e.tag) nl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((ci(za, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === Ia(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  rl(t, !1, i, n, a, t.lastEffect);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === Ia(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                rl(t, !0, n, null, a, t.lastEffect);
                break;
              case "together":
                rl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function al(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Hl |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(o(153));
            if (null !== t.child) {
              for (
                n = $u((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = $u(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function ol(e, t) {
          if (!Ba)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ll(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return _i(t.type) && gi(), null;
            case 3:
              return (
                Na(),
                si(pi),
                si(di),
                qa(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Wa(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                qo(t),
                null
              );
            case 5:
              Da(t);
              var a = Ma(Pa.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Go(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return null;
                }
                if (((e = Ma(Aa.current)), Wa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Kr] = t), (r[Zr] = l), n)) {
                    case "dialog":
                      Or("cancel", r), Or("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Or("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Sr.length; e++) Or(Sr[e], r);
                      break;
                    case "source":
                      Or("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Or("error", r), Or("load", r);
                      break;
                    case "details":
                      Or("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Or("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Or("invalid", r);
                      break;
                    case "textarea":
                      ue(r, l), Or("invalid", r);
                  }
                  for (var s in (xe(n, l), (e = null), l))
                    l.hasOwnProperty(s) &&
                      ((a = l[s]),
                      "children" === s
                        ? "string" === typeof a
                          ? r.textContent !== a && (e = ["children", a])
                          : "number" === typeof a &&
                            r.textContent !== "" + a &&
                            (e = ["children", "" + a])
                        : u.hasOwnProperty(s) &&
                          null != a &&
                          "onScroll" === s &&
                          Or("scroll", r));
                  switch (n) {
                    case "input":
                      X(r), re(r, l, !0);
                      break;
                    case "textarea":
                      X(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = jr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((s = 9 === a.nodeType ? a : a.ownerDocument),
                    e === fe.html && (e = de(n)),
                    e === fe.html
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[Kr] = t),
                    (e[Zr] = r),
                    Qo(e, t, !1, !1),
                    (t.stateNode = e),
                    (s = Te(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Or("cancel", e), Or("close", e), (a = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Or("load", e), (a = r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Sr.length; a++) Or(Sr[a], e);
                      a = r;
                      break;
                    case "source":
                      Or("error", e), (a = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Or("error", e), Or("load", e), (a = r);
                      break;
                    case "details":
                      Or("toggle", e), (a = r);
                      break;
                    case "input":
                      ee(e, r), (a = J(e, r)), Or("invalid", e);
                      break;
                    case "option":
                      a = ae(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = i({}, r, { value: void 0 })),
                        Or("invalid", e);
                      break;
                    case "textarea":
                      ue(e, r), (a = le(e, r)), Or("invalid", e);
                      break;
                    default:
                      a = r;
                  }
                  xe(n, a);
                  var c = a;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var f = c[l];
                      "style" === l
                        ? we(e, f)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (f = f ? f.__html : void 0) && _e(e, f)
                        : "children" === l
                        ? "string" === typeof f
                          ? ("textarea" !== n || "" !== f) && ge(e, f)
                          : "number" === typeof f && ge(e, "" + f)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (u.hasOwnProperty(l)
                            ? null != f && "onScroll" === l && Or("scroll", e)
                            : null != f && b(e, l, f, s));
                    }
                  switch (n) {
                    case "input":
                      X(e), re(e, r, !1);
                      break;
                    case "textarea":
                      X(e), ce(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + q(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? oe(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            oe(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" === typeof a.onClick && (e.onclick = jr);
                  }
                  Ur(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Xo(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                (n = Ma(Pa.current)),
                  Ma(Aa.current),
                  Wa(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Kr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Kr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                si(za),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Wa(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & za.current)
                        ? 0 === Fl && (Fl = 3)
                        : ((0 !== Fl && 3 !== Fl) || (Fl = 4),
                          null === Nl ||
                            (0 === (134217727 & Hl) &&
                              0 === (134217727 & Ul)) ||
                            vu(Nl, Dl))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return (
                Na(), qo(t), null === e && Mr(t.stateNode.containerInfo), null
              );
            case 10:
              return na(t), null;
            case 19:
              if ((si(za), null === (r = t.memoizedState))) return null;
              if (((l = 0 !== (64 & t.flags)), null === (s = r.rendering)))
                if (l) ol(r, !1);
                else {
                  if (0 !== Fl || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = Ia(e))) {
                        for (
                          t.flags |= 64,
                            ol(r, !1),
                            null !== (l = s.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return ci(za, (1 & za.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Ui() > $l &&
                    ((t.flags |= 64),
                    (l = !0),
                    ol(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Ia(s))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      ol(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !s.alternate &&
                        !Ba)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Ui() - r.renderingStartTime > $l &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      ol(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                    (r.last = s));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ui()),
                  (n.sibling = null),
                  (t = za.current),
                  ci(za, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                xu(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(o(156, t.tag));
        }
        function ul(e) {
          switch (e.tag) {
            case 1:
              _i(e.type) && gi();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Na(), si(pi), si(di), qa(), 0 !== (64 & (t = e.flags))))
                throw Error(o(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Da(e), null;
            case 13:
              return (
                si(za),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return si(za), null;
            case 4:
              return Na(), null;
            case 10:
              return na(e), null;
            case 23:
            case 24:
              return xu(), null;
            default:
              return null;
          }
        }
        function sl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += $(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i };
        }
        function cl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        (Qo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (qo = function () {}),
          (Go = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Ma(Aa.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (a = ae(e, a)), (r = ae(e, r)), (l = []);
                  break;
                case "select":
                  (a = i({}, a, { value: void 0 })),
                    (r = i({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = le(e, a)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = jr);
              }
              for (f in (xe(n, r), (n = null), a))
                if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                  if ("style" === f) {
                    var s = a[f];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (u.hasOwnProperty(f)
                        ? l || (l = [])
                        : (l = l || []).push(f, null));
              for (f in r) {
                var c = r[f];
                if (
                  ((s = null != a ? a[f] : void 0),
                  r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                )
                  if ("style" === f)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          s[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (l || (l = []), l.push(f, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (l = l || []).push(f, c))
                      : "children" === f
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(f, "" + c)
                      : "suppressContentEditableWarning" !== f &&
                        "suppressHydrationWarning" !== f &&
                        (u.hasOwnProperty(f)
                          ? (null != c && "onScroll" === f && Or("scroll", e),
                            l || s === c || (l = []))
                          : "object" === typeof c &&
                            null !== c &&
                            c.$$typeof === D
                          ? c.toString()
                          : (l = l || []).push(f, c));
              }
              n && (l = l || []).push("style", n);
              var f = l;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Xo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var fl = "function" === typeof WeakMap ? WeakMap : Map;
        function dl(e, t, n) {
          ((n = sa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Xl || ((Xl = !0), (Kl = r)), cl(0, t);
            }),
            n
          );
        }
        function pl(e, t, n) {
          (n = sa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            n.payload = function () {
              return cl(0, t), r(i);
            };
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r &&
                  (null === Zl ? (Zl = new Set([this])) : Zl.add(this),
                  cl(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var hl = "function" === typeof WeakSet ? WeakSet : Set;
        function ml(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                Bu(e, n);
              }
            else t.current = null;
        }
        function _l(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Xi(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && $r(t.stateNode.containerInfo));
          }
          throw Error(o(163));
        }
        function gl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var i = e;
                  (r = i.next),
                    0 !== (4 & (i = i.tag)) &&
                      0 !== (1 & i) &&
                      (Iu(n, e), zu(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Xi(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && pa(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                pa(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Ur(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && wt(n))))
              );
          }
          throw Error(o(163));
        }
        function vl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" === typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var i = n.memoizedProps.style;
                (i =
                  void 0 !== i && null !== i && i.hasOwnProperty("display")
                    ? i.display
                    : null),
                  (r.style.display = be("display", i));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function yl(e, t) {
          if (xi && "function" === typeof xi.onCommitFiberUnmount)
            try {
              xi.onCommitFiberUnmount(ki, t);
            } catch (a) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    i = r.destroy;
                  if (((r = r.tag), void 0 !== i))
                    if (0 !== (4 & r)) Iu(t, n);
                    else {
                      r = t;
                      try {
                        i();
                      } catch (a) {
                        Bu(r, a);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (ml(t),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (a) {
                  Bu(t, a);
                }
              break;
            case 5:
              ml(t);
              break;
            case 4:
              Sl(e, t);
          }
        }
        function bl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function wl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function kl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (wl(t)) break e;
              t = t.return;
            }
            throw Error(o(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(o(161));
          }
          16 & n.flags && (ge(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || wl(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? xl(e, n, t) : Tl(e, n, t);
        }
        function xl(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = jr));
          else if (4 !== r && null !== (e = e.child))
            for (xl(e, t, n), e = e.sibling; null !== e; )
              xl(e, t, n), (e = e.sibling);
        }
        function Tl(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (Tl(e, t, n), e = e.sibling; null !== e; )
              Tl(e, t, n), (e = e.sibling);
        }
        function Sl(e, t) {
          for (var n, r, i = t, a = !1; ; ) {
            if (!a) {
              a = i.return;
              e: for (;;) {
                if (null === a) throw Error(o(160));
                switch (((n = a.stateNode), a.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                a = a.return;
              }
              a = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
              e: for (var l = e, u = i, s = u; ; )
                if ((yl(l, s), null !== s.child && 4 !== s.tag))
                  (s.child.return = s), (s = s.child);
                else {
                  if (s === u) break e;
                  for (; null === s.sibling; ) {
                    if (null === s.return || s.return === u) break e;
                    s = s.return;
                  }
                  (s.sibling.return = s.return), (s = s.sibling);
                }
              r
                ? ((l = n),
                  (u = i.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(u)
                    : l.removeChild(u))
                : n.removeChild(i.stateNode);
            } else if (4 === i.tag) {
              if (null !== i.child) {
                (n = i.stateNode.containerInfo),
                  (r = !0),
                  (i.child.return = i),
                  (i = i.child);
                continue;
              }
            } else if ((yl(e, i), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (a = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function El(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var i = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                  for (
                    n[Zr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Te(e, i),
                      t = Te(e, r),
                      i = 0;
                    i < a.length;
                    i += 2
                  ) {
                    var l = a[i],
                      u = a[i + 1];
                    "style" === l
                      ? we(n, u)
                      : "dangerouslySetInnerHTML" === l
                      ? _e(n, u)
                      : "children" === l
                      ? ge(n, u)
                      : b(n, l, u, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      se(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? oe(n, !!r.multiple, a, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? oe(n, !!r.multiple, r.defaultValue, !0)
                              : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(o(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), wt(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((Wl = Ui()), vl(t.child, !0)),
                void Cl(t)
              );
            case 19:
              return void Cl(t);
            case 23:
            case 24:
              return void vl(t, null !== t.memoizedState);
          }
          throw Error(o(163));
        }
        function Cl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hl()),
              t.forEach(function (t) {
                var r = Uu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Al(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Ol = Math.ceil,
          Pl = w.ReactCurrentDispatcher,
          Ml = w.ReactCurrentOwner,
          Ll = 0,
          Nl = null,
          Rl = null,
          Dl = 0,
          zl = 0,
          Il = ui(0),
          Fl = 0,
          jl = null,
          Bl = 0,
          Hl = 0,
          Ul = 0,
          Vl = 0,
          Yl = null,
          Wl = 0,
          $l = 1 / 0;
        function Ql() {
          $l = Ui() + 500;
        }
        var ql,
          Gl = null,
          Xl = !1,
          Kl = null,
          Zl = null,
          Jl = !1,
          eu = null,
          tu = 90,
          nu = [],
          ru = [],
          iu = null,
          au = 0,
          ou = null,
          lu = -1,
          uu = 0,
          su = 0,
          cu = null,
          fu = !1;
        function du() {
          return 0 !== (48 & Ll) ? Ui() : -1 !== lu ? lu : (lu = Ui());
        }
        function pu(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === Vi() ? 1 : 2;
          if ((0 === uu && (uu = Bl), 0 !== Gi.transition)) {
            0 !== su && (su = null !== Yl ? Yl.pendingLanes : 0), (e = uu);
            var t = 4186112 & ~su;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Vi()),
            0 !== (4 & Ll) && 98 === e
              ? (e = jt(12, uu))
              : (e = jt(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  uu
                )),
            e
          );
        }
        function hu(e, t, n) {
          if (50 < au) throw ((au = 0), (ou = null), Error(o(185)));
          if (null === (e = mu(e, t))) return null;
          Ut(e, t, n), e === Nl && ((Ul |= t), 4 === Fl && vu(e, Dl));
          var r = Vi();
          1 === t
            ? 0 !== (8 & Ll) && 0 === (48 & Ll)
              ? yu(e)
              : (_u(e, n), 0 === Ll && (Ql(), Qi()))
            : (0 === (4 & Ll) ||
                (98 !== r && 99 !== r) ||
                (null === iu ? (iu = new Set([e])) : iu.add(e)),
              _u(e, n)),
            (Yl = e);
        }
        function mu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function _u(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              i = e.pingedLanes,
              a = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var u = 31 - Vt(l),
              s = 1 << u,
              c = a[u];
            if (-1 === c) {
              if (0 === (s & r) || 0 !== (s & i)) {
                (c = t), zt(s);
                var f = Dt;
                a[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= s);
            l &= ~s;
          }
          if (((r = It(e, e === Nl ? Dl : 0)), (t = Dt), 0 === r))
            null !== n &&
              (n !== zi && Ei(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== zi && Ei(n);
            }
            15 === t
              ? ((n = yu.bind(null, e)),
                null === Fi ? ((Fi = [n]), (ji = Si(Mi, qi))) : Fi.push(n),
                (n = zi))
              : 14 === t
              ? (n = $i(99, yu.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, e));
                  }
                })(t)),
                (n = $i(n, gu.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gu(e) {
          if (((lu = -1), (su = uu = 0), 0 !== (48 & Ll))) throw Error(o(327));
          var t = e.callbackNode;
          if (Du() && e.callbackNode !== t) return null;
          var n = It(e, e === Nl ? Dl : 0);
          if (0 === n) return null;
          var r = n,
            i = Ll;
          Ll |= 16;
          var a = Eu();
          for ((Nl === e && Dl === r) || (Ql(), Tu(e, r)); ; )
            try {
              Ou();
              break;
            } catch (u) {
              Su(e, u);
            }
          if (
            (ta(),
            (Pl.current = a),
            (Ll = i),
            null !== Rl ? (r = 0) : ((Nl = null), (Dl = 0), (r = Fl)),
            0 !== (Bl & Ul))
          )
            Tu(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Ll |= 64),
                e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
                0 !== (n = Ft(e)) && (r = Cu(e, n))),
              1 === r)
            )
              throw ((t = jl), Tu(e, 0), vu(e, n), _u(e, Ui()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                Lu(e);
                break;
              case 3:
                if (
                  (vu(e, n), (62914560 & n) === n && 10 < (r = Wl + 500 - Ui()))
                ) {
                  if (0 !== It(e, 0)) break;
                  if (((i = e.suspendedLanes) & n) !== n) {
                    du(), (e.pingedLanes |= e.suspendedLanes & i);
                    break;
                  }
                  e.timeoutHandle = Yr(Lu.bind(null, e), r);
                  break;
                }
                Lu(e);
                break;
              case 4:
                if ((vu(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, i = -1; 0 < n; ) {
                  var l = 31 - Vt(n);
                  (a = 1 << l), (l = r[l]) > i && (i = l), (n &= ~a);
                }
                if (
                  ((n = i),
                  10 <
                    (n =
                      (120 > (n = Ui() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Ol(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Yr(Lu.bind(null, e), n);
                  break;
                }
                Lu(e);
                break;
              default:
                throw Error(o(329));
            }
          }
          return _u(e, Ui()), e.callbackNode === t ? gu.bind(null, e) : null;
        }
        function vu(e, t) {
          for (
            t &= ~Vl,
              t &= ~Ul,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Vt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function yu(e) {
          if (0 !== (48 & Ll)) throw Error(o(327));
          if ((Du(), e === Nl && 0 !== (e.expiredLanes & Dl))) {
            var t = Dl,
              n = Cu(e, t);
            0 !== (Bl & Ul) && (n = Cu(e, (t = It(e, t))));
          } else n = Cu(e, (t = It(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Ll |= 64),
              e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
              0 !== (t = Ft(e)) && (n = Cu(e, t))),
            1 === n)
          )
            throw ((n = jl), Tu(e, 0), vu(e, t), _u(e, Ui()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Lu(e),
            _u(e, Ui()),
            null
          );
        }
        function bu(e, t) {
          var n = Ll;
          Ll |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ll = n) && (Ql(), Qi());
          }
        }
        function wu(e, t) {
          var n = Ll;
          (Ll &= -2), (Ll |= 8);
          try {
            return e(t);
          } finally {
            0 === (Ll = n) && (Ql(), Qi());
          }
        }
        function ku(e, t) {
          ci(Il, zl), (zl |= t), (Bl |= t);
        }
        function xu() {
          (zl = Il.current), si(Il);
        }
        function Tu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Wr(n)), null !== Rl))
            for (n = Rl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    gi();
                  break;
                case 3:
                  Na(), si(pi), si(di), qa();
                  break;
                case 5:
                  Da(r);
                  break;
                case 4:
                  Na();
                  break;
                case 13:
                case 19:
                  si(za);
                  break;
                case 10:
                  na(r);
                  break;
                case 23:
                case 24:
                  xu();
              }
              n = n.return;
            }
          (Nl = e),
            (Rl = $u(e.current, null)),
            (Dl = zl = Bl = t),
            (Fl = 0),
            (jl = null),
            (Vl = Ul = Hl = 0);
        }
        function Su(e, t) {
          for (;;) {
            var n = Rl;
            try {
              if ((ta(), (Ga.current = Mo), to)) {
                for (var r = Za.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                to = !1;
              }
              if (
                ((Ka = 0),
                (eo = Ja = Za = null),
                (no = !1),
                (Ml.current = null),
                null === n || null === n.return)
              ) {
                (Fl = 1), (jl = t), (Rl = null);
                break;
              }
              e: {
                var a = e,
                  o = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Dl),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var s = u;
                  if (0 === (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var f = 0 !== (1 & za.current),
                    d = o;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var h = d.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var m = d.memoizedProps;
                        p =
                          void 0 !== m.fallback &&
                          (!0 !== m.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var _ = d.updateQueue;
                      if (null === _) {
                        var g = new Set();
                        g.add(s), (d.updateQueue = g);
                      } else _.add(s);
                      if (0 === (2 & d.mode)) {
                        if (
                          ((d.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var v = sa(-1, 1);
                            (v.tag = 2), ca(l, v);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (l = t);
                      var y = a.pingCache;
                      if (
                        (null === y
                          ? ((y = a.pingCache = new fl()),
                            (u = new Set()),
                            y.set(s, u))
                          : void 0 === (u = y.get(s)) &&
                            ((u = new Set()), y.set(s, u)),
                        !u.has(l))
                      ) {
                        u.add(l);
                        var b = Hu.bind(null, a, s, l);
                        s.then(b, b);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  u = Error(
                    (Q(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== Fl && (Fl = 2), (u = sl(u, l)), (d = o);
                do {
                  switch (d.tag) {
                    case 3:
                      (a = u),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        fa(d, dl(0, a, t));
                      break e;
                    case 1:
                      a = u;
                      var w = d.type,
                        k = d.stateNode;
                      if (
                        0 === (64 & d.flags) &&
                        ("function" === typeof w.getDerivedStateFromError ||
                          (null !== k &&
                            "function" === typeof k.componentDidCatch &&
                            (null === Zl || !Zl.has(k))))
                      ) {
                        (d.flags |= 4096),
                          (t &= -t),
                          (d.lanes |= t),
                          fa(d, pl(d, a, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Mu(n);
            } catch (x) {
              (t = x), Rl === n && null !== n && (Rl = n = n.return);
              continue;
            }
            break;
          }
        }
        function Eu() {
          var e = Pl.current;
          return (Pl.current = Mo), null === e ? Mo : e;
        }
        function Cu(e, t) {
          var n = Ll;
          Ll |= 16;
          var r = Eu();
          for ((Nl === e && Dl === t) || Tu(e, t); ; )
            try {
              Au();
              break;
            } catch (i) {
              Su(e, i);
            }
          if ((ta(), (Ll = n), (Pl.current = r), null !== Rl))
            throw Error(o(261));
          return (Nl = null), (Dl = 0), Fl;
        }
        function Au() {
          for (; null !== Rl; ) Pu(Rl);
        }
        function Ou() {
          for (; null !== Rl && !Ci(); ) Pu(Rl);
        }
        function Pu(e) {
          var t = ql(e.alternate, e, zl);
          (e.memoizedProps = e.pendingProps),
            null === t ? Mu(e) : (Rl = t),
            (Ml.current = null);
        }
        function Mu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = ll(n, t, zl))) return void (Rl = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & zl) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, i = n.child; null !== i; )
                  (r |= i.lanes | i.childLanes), (i = i.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = ul(t))) return (n.flags &= 2047), void (Rl = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Rl = t);
            Rl = t = e;
          } while (null !== t);
          0 === Fl && (Fl = 5);
        }
        function Lu(e) {
          var t = Vi();
          return Wi(99, Nu.bind(null, e, t)), null;
        }
        function Nu(e, t) {
          do {
            Du();
          } while (null !== eu);
          if (0 !== (48 & Ll)) throw Error(o(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(o(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            i = r,
            a = e.pendingLanes & ~i;
          (e.pendingLanes = i),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= i),
            (e.mutableReadLanes &= i),
            (e.entangledLanes &= i),
            (i = e.entanglements);
          for (var l = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
            var s = 31 - Vt(a),
              c = 1 << s;
            (i[s] = 0), (l[s] = -1), (u[s] = -1), (a &= ~c);
          }
          if (
            (null !== iu && 0 === (24 & r) && iu.has(e) && iu.delete(e),
            e === Nl && ((Rl = Nl = null), (Dl = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((i = Ll),
              (Ll |= 32),
              (Ml.current = null),
              (Br = qt),
              _r((l = mr())))
            ) {
              if ("selectionStart" in l)
                u = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                  (c = u.getSelection && u.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (u = c.anchorNode),
                    (a = c.anchorOffset),
                    (s = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    u.nodeType, s.nodeType;
                  } catch (E) {
                    u = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    h = 0,
                    m = 0,
                    _ = l,
                    g = null;
                  t: for (;;) {
                    for (
                      var v;
                      _ !== u || (0 !== a && 3 !== _.nodeType) || (d = f + a),
                        _ !== s || (0 !== c && 3 !== _.nodeType) || (p = f + c),
                        3 === _.nodeType && (f += _.nodeValue.length),
                        null !== (v = _.firstChild);

                    )
                      (g = _), (_ = v);
                    for (;;) {
                      if (_ === l) break t;
                      if (
                        (g === u && ++h === a && (d = f),
                        g === s && ++m === c && (p = f),
                        null !== (v = _.nextSibling))
                      )
                        break;
                      g = (_ = g).parentNode;
                    }
                    _ = v;
                  }
                  u = -1 === d || -1 === p ? null : { start: d, end: p };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Hr = { focusedElem: l, selectionRange: u }),
              (qt = !1),
              (cu = null),
              (fu = !1),
              (Gl = r);
            do {
              try {
                Ru();
              } catch (E) {
                if (null === Gl) throw Error(o(330));
                Bu(Gl, E), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            (cu = null), (Gl = r);
            do {
              try {
                for (l = e; null !== Gl; ) {
                  var y = Gl.flags;
                  if ((16 & y && ge(Gl.stateNode, ""), 128 & y)) {
                    var b = Gl.alternate;
                    if (null !== b) {
                      var w = b.ref;
                      null !== w &&
                        ("function" === typeof w
                          ? w(null)
                          : (w.current = null));
                    }
                  }
                  switch (1038 & y) {
                    case 2:
                      kl(Gl), (Gl.flags &= -3);
                      break;
                    case 6:
                      kl(Gl), (Gl.flags &= -3), El(Gl.alternate, Gl);
                      break;
                    case 1024:
                      Gl.flags &= -1025;
                      break;
                    case 1028:
                      (Gl.flags &= -1025), El(Gl.alternate, Gl);
                      break;
                    case 4:
                      El(Gl.alternate, Gl);
                      break;
                    case 8:
                      Sl(l, (u = Gl));
                      var k = u.alternate;
                      bl(u), null !== k && bl(k);
                  }
                  Gl = Gl.nextEffect;
                }
              } catch (E) {
                if (null === Gl) throw Error(o(330));
                Bu(Gl, E), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            if (
              ((w = Hr),
              (b = mr()),
              (y = w.focusedElem),
              (l = w.selectionRange),
              b !== y &&
                y &&
                y.ownerDocument &&
                hr(y.ownerDocument.documentElement, y))
            ) {
              null !== l &&
                _r(y) &&
                ((b = l.start),
                void 0 === (w = l.end) && (w = b),
                "selectionStart" in y
                  ? ((y.selectionStart = b),
                    (y.selectionEnd = Math.min(w, y.value.length)))
                  : (w =
                      ((b = y.ownerDocument || document) && b.defaultView) ||
                      window).getSelection &&
                    ((w = w.getSelection()),
                    (u = y.textContent.length),
                    (k = Math.min(l.start, u)),
                    (l = void 0 === l.end ? k : Math.min(l.end, u)),
                    !w.extend && k > l && ((u = l), (l = k), (k = u)),
                    (u = pr(y, k)),
                    (a = pr(y, l)),
                    u &&
                      a &&
                      (1 !== w.rangeCount ||
                        w.anchorNode !== u.node ||
                        w.anchorOffset !== u.offset ||
                        w.focusNode !== a.node ||
                        w.focusOffset !== a.offset) &&
                      ((b = b.createRange()).setStart(u.node, u.offset),
                      w.removeAllRanges(),
                      k > l
                        ? (w.addRange(b), w.extend(a.node, a.offset))
                        : (b.setEnd(a.node, a.offset), w.addRange(b))))),
                (b = []);
              for (w = y; (w = w.parentNode); )
                1 === w.nodeType &&
                  b.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
              for (
                "function" === typeof y.focus && y.focus(), y = 0;
                y < b.length;
                y++
              )
                ((w = b[y]).element.scrollLeft = w.left),
                  (w.element.scrollTop = w.top);
            }
            (qt = !!Br), (Hr = Br = null), (e.current = n), (Gl = r);
            do {
              try {
                for (y = e; null !== Gl; ) {
                  var x = Gl.flags;
                  if ((36 & x && gl(y, Gl.alternate, Gl), 128 & x)) {
                    b = void 0;
                    var T = Gl.ref;
                    if (null !== T) {
                      var S = Gl.stateNode;
                      Gl.tag,
                        (b = S),
                        "function" === typeof T ? T(b) : (T.current = b);
                    }
                  }
                  Gl = Gl.nextEffect;
                }
              } catch (E) {
                if (null === Gl) throw Error(o(330));
                Bu(Gl, E), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            (Gl = null), Ii(), (Ll = i);
          } else e.current = n;
          if (Jl) (Jl = !1), (eu = e), (tu = t);
          else
            for (Gl = r; null !== Gl; )
              (t = Gl.nextEffect),
                (Gl.nextEffect = null),
                8 & Gl.flags &&
                  (((x = Gl).sibling = null), (x.stateNode = null)),
                (Gl = t);
          if (
            (0 === (r = e.pendingLanes) && (Zl = null),
            1 === r ? (e === ou ? au++ : ((au = 0), (ou = e))) : (au = 0),
            (n = n.stateNode),
            xi && "function" === typeof xi.onCommitFiberRoot)
          )
            try {
              xi.onCommitFiberRoot(
                ki,
                n,
                void 0,
                64 === (64 & n.current.flags)
              );
            } catch (E) {}
          if ((_u(e, Ui()), Xl)) throw ((Xl = !1), (e = Kl), (Kl = null), e);
          return 0 !== (8 & Ll) || Qi(), null;
        }
        function Ru() {
          for (; null !== Gl; ) {
            var e = Gl.alternate;
            fu ||
              null === cu ||
              (0 !== (8 & Gl.flags)
                ? Je(Gl, cu) && (fu = !0)
                : 13 === Gl.tag && Al(e, Gl) && Je(Gl, cu) && (fu = !0));
            var t = Gl.flags;
            0 !== (256 & t) && _l(e, Gl),
              0 === (512 & t) ||
                Jl ||
                ((Jl = !0),
                $i(97, function () {
                  return Du(), null;
                })),
              (Gl = Gl.nextEffect);
          }
        }
        function Du() {
          if (90 !== tu) {
            var e = 97 < tu ? 97 : tu;
            return (tu = 90), Wi(e, Fu);
          }
          return !1;
        }
        function zu(e, t) {
          nu.push(t, e),
            Jl ||
              ((Jl = !0),
              $i(97, function () {
                return Du(), null;
              }));
        }
        function Iu(e, t) {
          ru.push(t, e),
            Jl ||
              ((Jl = !0),
              $i(97, function () {
                return Du(), null;
              }));
        }
        function Fu() {
          if (null === eu) return !1;
          var e = eu;
          if (((eu = null), 0 !== (48 & Ll))) throw Error(o(331));
          var t = Ll;
          Ll |= 32;
          var n = ru;
          ru = [];
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r],
              a = n[r + 1],
              l = i.destroy;
            if (((i.destroy = void 0), "function" === typeof l))
              try {
                l();
              } catch (s) {
                if (null === a) throw Error(o(330));
                Bu(a, s);
              }
          }
          for (n = nu, nu = [], r = 0; r < n.length; r += 2) {
            (i = n[r]), (a = n[r + 1]);
            try {
              var u = i.create;
              i.destroy = u();
            } catch (s) {
              if (null === a) throw Error(o(330));
              Bu(a, s);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Ll = t), Qi(), !0;
        }
        function ju(e, t, n) {
          ca(e, (t = dl(0, (t = sl(n, t)), 1))),
            (t = du()),
            null !== (e = mu(e, 1)) && (Ut(e, 1, t), _u(e, t));
        }
        function Bu(e, t) {
          if (3 === e.tag) ju(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                ju(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Zl || !Zl.has(r)))
                ) {
                  var i = pl(n, (e = sl(t, e)), 1);
                  if ((ca(n, i), (i = du()), null !== (n = mu(n, 1))))
                    Ut(n, 1, i), _u(n, i);
                  else if (
                    "function" === typeof r.componentDidCatch &&
                    (null === Zl || !Zl.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (a) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Hu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = du()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Nl === e &&
              (Dl & n) === n &&
              (4 === Fl ||
              (3 === Fl && (62914560 & Dl) === Dl && 500 > Ui() - Wl)
                ? Tu(e, 0)
                : (Vl |= n)),
            _u(e, t);
        }
        function Uu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === Vi() ? 1 : 2)
                : (0 === uu && (uu = Bl),
                  0 === (t = Bt(62914560 & ~uu)) && (t = 4194304))),
            (n = du()),
            null !== (e = mu(e, t)) && (Ut(e, t, n), _u(e, n));
        }
        function Vu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Yu(e, t, n, r) {
          return new Vu(e, t, n, r);
        }
        function Wu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function $u(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Yu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Qu(e, t, n, r, i, a) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Wu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case T:
                return qu(n.children, i, a, t);
              case z:
                (l = 8), (i |= 16);
                break;
              case S:
                (l = 8), (i |= 1);
                break;
              case E:
                return (
                  ((e = Yu(12, n, t, 8 | i)).elementType = E),
                  (e.type = E),
                  (e.lanes = a),
                  e
                );
              case P:
                return (
                  ((e = Yu(13, n, t, i)).type = P),
                  (e.elementType = P),
                  (e.lanes = a),
                  e
                );
              case M:
                return (
                  ((e = Yu(19, n, t, i)).elementType = M), (e.lanes = a), e
                );
              case I:
                return Gu(n, i, a, t);
              case F:
                return (
                  ((e = Yu(24, n, t, i)).elementType = F), (e.lanes = a), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case A:
                      l = 9;
                      break e;
                    case O:
                      l = 11;
                      break e;
                    case L:
                      l = 14;
                      break e;
                    case N:
                      (l = 16), (r = null);
                      break e;
                    case R:
                      l = 22;
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Yu(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function qu(e, t, n, r) {
          return ((e = Yu(7, e, r, t)).lanes = n), e;
        }
        function Gu(e, t, n, r) {
          return ((e = Yu(23, e, r, t)).elementType = I), (e.lanes = n), e;
        }
        function Xu(e, t, n) {
          return ((e = Yu(6, e, null, t)).lanes = n), e;
        }
        function Ku(e, t, n) {
          return (
            ((t = Yu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Zu(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ht(0)),
            (this.expirationTimes = Ht(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ht(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ju(e, t, n, r) {
          var i = t.current,
            a = du(),
            l = pu(i);
          e: if (n) {
            t: {
              if (Ge((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(o(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (_i(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(o(171));
            }
            if (1 === n.tag) {
              var s = n.type;
              if (_i(s)) {
                n = yi(n, s, u);
                break e;
              }
            }
            n = u;
          } else n = fi;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = sa(a, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            ca(i, t),
            hu(i, l, a),
            l
          );
        }
        function es(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function ts(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function ns(e, t) {
          ts(e, t), (e = e.alternate) && ts(e, t);
        }
        function rs(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Zu(e, t, null != n && !0 === n.hydrate)),
            (t = Yu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            la(t),
            (e[Jr] = n.current),
            Mr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var i = (t = r[e])._getVersion;
              (i = i(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, i])
                  : n.mutableSourceEagerHydrationData.push(t, i);
            }
          this._internalRoot = n;
        }
        function is(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function as(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a._internalRoot;
            if ("function" === typeof i) {
              var l = i;
              i = function () {
                var e = es(o);
                l.call(e);
              };
            }
            Ju(t, o, e, i);
          } else {
            if (
              ((a = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new rs(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (o = a._internalRoot),
              "function" === typeof i)
            ) {
              var u = i;
              i = function () {
                var e = es(o);
                u.call(e);
              };
            }
            wu(function () {
              Ju(t, o, e, i);
            });
          }
          return es(o);
        }
        function os(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!is(t)) throw Error(o(200));
          return (function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: x,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          })(e, t, null, n);
        }
        (ql = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || pi.current) zo = !0;
            else {
              if (0 === (n & r)) {
                switch (((zo = !1), t.tag)) {
                  case 3:
                    $o(t), $a();
                    break;
                  case 5:
                    Ra(t);
                    break;
                  case 1:
                    _i(t.type) && bi(t);
                    break;
                  case 4:
                    La(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var i = t.type._context;
                    ci(Ki, i._currentValue), (i._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Zo(e, t, n)
                        : (ci(za, 1 & za.current),
                          null !== (t = al(e, t, n)) ? t.sibling : null);
                    ci(za, 1 & za.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return il(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (i = t.memoizedState) &&
                        ((i.rendering = null),
                        (i.tail = null),
                        (i.lastEffect = null)),
                      ci(za, za.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Ho(e, t, n);
                }
                return al(e, t, n);
              }
              zo = 0 !== (16384 & e.flags);
            }
          else zo = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (i = mi(t, di.current)),
                ia(t, n),
                (i = ao(null, t, r, e, i, n)),
                (t.flags |= 1),
                "object" === typeof i &&
                  null !== i &&
                  "function" === typeof i.render &&
                  void 0 === i.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  _i(r))
                ) {
                  var a = !0;
                  bi(t);
                } else a = !1;
                (t.memoizedState =
                  null !== i.state && void 0 !== i.state ? i.state : null),
                  la(t);
                var l = r.getDerivedStateFromProps;
                "function" === typeof l && ma(t, r, l, e),
                  (i.updater = _a),
                  (t.stateNode = i),
                  (i._reactInternals = t),
                  ba(t, r, e, n),
                  (t = Wo(null, t, r, !0, a, n));
              } else (t.tag = 0), Io(null, t, i, n), (t = t.child);
              return t;
            case 16:
              i = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (i = (a = i._init)(i._payload)),
                  (t.type = i),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Wu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(i)),
                  (e = Xi(i, e)),
                  a)
                ) {
                  case 0:
                    t = Vo(null, t, i, e, n);
                    break e;
                  case 1:
                    t = Yo(null, t, i, e, n);
                    break e;
                  case 11:
                    t = Fo(null, t, i, e, n);
                    break e;
                  case 14:
                    t = jo(null, t, i, Xi(i.type, e), r, n);
                    break e;
                }
                throw Error(o(306, i, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Vo(e, t, r, (i = t.elementType === r ? i : Xi(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Yo(e, t, r, (i = t.elementType === r ? i : Xi(r, i)), n)
              );
            case 3:
              if (($o(t), (r = t.updateQueue), null === e || null === r))
                throw Error(o(282));
              if (
                ((r = t.pendingProps),
                (i = null !== (i = t.memoizedState) ? i.element : null),
                ua(e, t),
                da(t, r, null, n),
                (r = t.memoizedState.element) === i)
              )
                $a(), (t = al(e, t, n));
              else {
                if (
                  ((a = (i = t.stateNode).hydrate) &&
                    ((ja = Qr(t.stateNode.containerInfo.firstChild)),
                    (Fa = t),
                    (a = Ba = !0)),
                  a)
                ) {
                  if (null != (e = i.mutableSourceEagerHydrationData))
                    for (i = 0; i < e.length; i += 2)
                      ((a = e[i])._workInProgressVersionPrimary = e[i + 1]),
                        Qa.push(a);
                  for (n = Ea(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Io(e, t, r, n), $a();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ra(t),
                null === e && Va(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = i.children),
                Vr(r, i)
                  ? (l = null)
                  : null !== a && Vr(r, a) && (t.flags |= 16),
                Uo(e, t),
                Io(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Va(t), null;
            case 13:
              return Zo(e, t, n);
            case 4:
              return (
                La(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Sa(t, null, r, n)) : Io(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Fo(e, t, r, (i = t.elementType === r ? i : Xi(r, i)), n)
              );
            case 7:
              return Io(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Io(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (i = t.pendingProps),
                  (l = t.memoizedProps),
                  (a = i.value);
                var u = t.type._context;
                if (
                  (ci(Ki, u._currentValue), (u._currentValue = a), null !== l)
                )
                  if (
                    ((u = l.value),
                    0 ===
                      (a = sr(u, a)
                        ? 0
                        : 0 |
                          ("function" === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(u, a)
                            : 1073741823)))
                  ) {
                    if (l.children === i.children && !pi.current) {
                      t = al(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var s = u.dependencies;
                      if (null !== s) {
                        l = u.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & a)) {
                            1 === u.tag &&
                              (((c = sa(-1, n & -n)).tag = 2), ca(u, c)),
                              (u.lanes |= n),
                              null !== (c = u.alternate) && (c.lanes |= n),
                              ra(u.return, n),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== l) l.return = u;
                      else
                        for (l = u; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (u = l.sibling)) {
                            (u.return = l.return), (l = u);
                            break;
                          }
                          l = l.return;
                        }
                      u = l;
                    }
                Io(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = (a = t.pendingProps).children),
                ia(t, n),
                (r = r((i = aa(i, a.unstable_observedBits)))),
                (t.flags |= 1),
                Io(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Xi((i = t.type), t.pendingProps)),
                jo(e, t, i, (a = Xi(i.type, a)), r, n)
              );
            case 15:
              return Bo(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Xi(r, i)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                _i(r) ? ((e = !0), bi(t)) : (e = !1),
                ia(t, n),
                va(t, r, i),
                ba(t, r, i, n),
                Wo(null, t, r, !0, e, n)
              );
            case 19:
              return il(e, t, n);
            case 23:
            case 24:
              return Ho(e, t, n);
          }
          throw Error(o(156, t.tag));
        }),
          (rs.prototype.render = function (e) {
            Ju(e, this._internalRoot, null, null);
          }),
          (rs.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Ju(null, e, null, function () {
              t[Jr] = null;
            });
          }),
          (et = function (e) {
            13 === e.tag && (hu(e, 4, du()), ns(e, 4));
          }),
          (tt = function (e) {
            13 === e.tag && (hu(e, 67108864, du()), ns(e, 67108864));
          }),
          (nt = function (e) {
            if (13 === e.tag) {
              var t = du(),
                n = pu(e);
              hu(e, n, t), ns(e, n);
            }
          }),
          (rt = function (e, t) {
            return t();
          }),
          (Ee = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = ii(r);
                      if (!i) throw Error(o(90));
                      K(r), ne(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                se(e, n);
                break;
              case "select":
                null != (t = n.value) && oe(e, !!n.multiple, t, !1);
            }
          }),
          (Le = bu),
          (Ne = function (e, t, n, r, i) {
            var a = Ll;
            Ll |= 4;
            try {
              return Wi(98, e.bind(null, t, n, r, i));
            } finally {
              0 === (Ll = a) && (Ql(), Qi());
            }
          }),
          (Re = function () {
            0 === (49 & Ll) &&
              ((function () {
                if (null !== iu) {
                  var e = iu;
                  (iu = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), _u(e, Ui());
                    });
                }
                Qi();
              })(),
              Du());
          }),
          (De = function (e, t) {
            var n = Ll;
            Ll |= 2;
            try {
              return e(t);
            } finally {
              0 === (Ll = n) && (Ql(), Qi());
            }
          });
        var ls = { Events: [ni, ri, ii, Pe, Me, Du, { current: !1 }] },
          us = {
            findFiberByHostInstance: ti,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          ss = {
            bundleType: us.bundleType,
            version: us.version,
            rendererPackageName: us.rendererPackageName,
            rendererConfig: us.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ze(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              us.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!cs.isDisabled && cs.supportsFiber)
            try {
              (ki = cs.inject(ss)), (xi = cs);
            } catch (me) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ls),
          (t.createPortal = os),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw Error(o(268, Object.keys(e)));
            }
            return (e = null === (e = Ze(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Ll;
            if (0 !== (48 & n)) return e(t);
            Ll |= 1;
            try {
              if (e) return Wi(99, e.bind(null, t));
            } finally {
              (Ll = n), Qi();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!is(t)) throw Error(o(200));
            return as(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!is(t)) throw Error(o(200));
            return as(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!is(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (wu(function () {
                as(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Jr] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = bu),
          (t.unstable_createPortal = function (e, t) {
            return os(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!is(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return as(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      119: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(345));
      },
      654: (e, t, n) => {
        "use strict";
        n(470);
        var r = n(950),
          i = 60103;
        if (
          ((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)
        ) {
          var a = Symbol.for;
          (i = a("react.element")), (t.Fragment = a("react.fragment"));
        }
        var o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = Object.prototype.hasOwnProperty,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            a = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: s,
            ref: c,
            props: a,
            _owner: o.current,
          };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      49: (e, t, n) => {
        "use strict";
        var r = n(470),
          i = 60103,
          a = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var o = 60109,
          l = 60110,
          u = 60112;
        t.Suspense = 60113;
        var s = 60115,
          c = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (i = f("react.element")),
            (a = f("react.portal")),
            (t.Fragment = f("react.fragment")),
            (t.StrictMode = f("react.strict_mode")),
            (t.Profiler = f("react.profiler")),
            (o = f("react.provider")),
            (l = f("react.context")),
            (u = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (s = f("react.memo")),
            (c = f("react.lazy"));
        }
        var d = "function" === typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = {};
        function _(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (_.prototype.isReactComponent = {}),
          (_.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (_.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = _.prototype);
        var y = (v.prototype = new g());
        (y.constructor = v), r(y, _.prototype), (y.isPureReactComponent = !0);
        var b = { current: null },
          w = Object.prototype.hasOwnProperty,
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, n) {
          var r,
            a = {},
            o = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              w.call(t, r) && !k.hasOwnProperty(r) && (a[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) a.children = n;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
          return {
            $$typeof: i,
            type: e,
            key: o,
            ref: l,
            props: a,
            _owner: b.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === i;
        }
        var S = /\/+/g;
        function E(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function C(e, t, n, r, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case i:
                  case a:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === r ? "." + E(u, 0) : r),
              Array.isArray(o)
                ? ((n = ""),
                  null != e && (n = e.replace(S, "$&/") + "/"),
                  C(o, t, n, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (T(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: i,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      n +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(S, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var c = r + E((l = e[s]), s);
              u += C(l, t, n, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += C((l = l.value), t, n, (c = r + E(l, s++)), o);
          else if ("object" === l)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return u;
        }
        function A(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            C(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var P = { current: null };
        function M() {
          var e = P.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var L = {
          ReactCurrentDispatcher: P,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: b,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: A,
          forEach: function (e, t, n) {
            A(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              A(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              A(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = _),
          (t.PureComponent = v),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(p(267, e));
            var a = r({}, e.props),
              o = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (u = b.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                w.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
              a.children = s;
            }
            return {
              $$typeof: i,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return M().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return M().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return M().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M().useRef(e);
          }),
          (t.useState = function (e) {
            return M().useState(e);
          }),
          (t.version = "17.0.2");
      },
      950: (e, t, n) => {
        "use strict";
        e.exports = n(49);
      },
      414: (e, t, n) => {
        "use strict";
        e.exports = n(654);
      },
      761: (e, t) => {
        "use strict";
        var n, r, i, a;
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        if (
          "undefined" === typeof window ||
          "function" !== typeof MessageChannel
        ) {
          var s = null,
            c = null,
            f = function () {
              if (null !== s)
                try {
                  var e = t.unstable_now();
                  s(!0, e), (s = null);
                } catch (n) {
                  throw (setTimeout(f, 0), n);
                }
            };
          (n = function (e) {
            null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (i = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" !== typeof console) {
            var h = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" !== typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var m = !1,
            _ = null,
            g = -1,
            v = 5,
            y = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= y;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (v = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var b = new MessageChannel(),
            w = b.port2;
          (b.port1.onmessage = function () {
            if (null !== _) {
              var e = t.unstable_now();
              y = e + v;
              try {
                _(!0, e) ? w.postMessage(null) : ((m = !1), (_ = null));
              } catch (n) {
                throw (w.postMessage(null), n);
              }
            } else m = !1;
          }),
            (n = function (e) {
              (_ = e), m || ((m = !0), w.postMessage(null));
            }),
            (r = function (e, n) {
              g = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (i = function () {
              p(g), (g = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(void 0 !== i && 0 < S(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function x(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function T(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, i = e.length; r < i; ) {
                var a = 2 * (r + 1) - 1,
                  o = e[a],
                  l = a + 1,
                  u = e[l];
                if (void 0 !== o && 0 > S(o, n))
                  void 0 !== u && 0 > S(u, o)
                    ? ((e[r] = u), (e[l] = n), (r = l))
                    : ((e[r] = o), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== u && 0 > S(u, n))) break e;
                  (e[r] = u), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function S(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var E = [],
          C = [],
          A = 1,
          O = null,
          P = 3,
          M = !1,
          L = !1,
          N = !1;
        function R(e) {
          for (var t = x(C); null !== t; ) {
            if (null === t.callback) T(C);
            else {
              if (!(t.startTime <= e)) break;
              T(C), (t.sortIndex = t.expirationTime), k(E, t);
            }
            t = x(C);
          }
        }
        function D(e) {
          if (((N = !1), R(e), !L))
            if (null !== x(E)) (L = !0), n(z);
            else {
              var t = x(C);
              null !== t && r(D, t.startTime - e);
            }
        }
        function z(e, n) {
          (L = !1), N && ((N = !1), i()), (M = !0);
          var a = P;
          try {
            for (
              R(n), O = x(E);
              null !== O &&
              (!(O.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var o = O.callback;
              if ("function" === typeof o) {
                (O.callback = null), (P = O.priorityLevel);
                var l = o(O.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (O.callback = l)
                    : O === x(E) && T(E),
                  R(n);
              } else T(E);
              O = x(E);
            }
            if (null !== O) var u = !0;
            else {
              var s = x(C);
              null !== s && r(D, s.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (O = null), (P = a), (M = !1);
          }
        }
        var I = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            L || M || ((L = !0), n(z));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return x(E);
          }),
          (t.unstable_next = function (e) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = P;
            }
            var n = P;
            P = t;
            try {
              return e();
            } finally {
              P = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = I),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = P;
            P = e;
            try {
              return t();
            } finally {
              P = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: A++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (u = o + u),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  k(C, e),
                  null === x(E) &&
                    e === x(C) &&
                    (N ? i() : (N = !0), r(D, o - l)))
                : ((e.sortIndex = u), k(E, e), L || M || ((L = !0), n(z))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = P;
            return function () {
              var n = P;
              P = t;
              try {
                return e.apply(this, arguments);
              } finally {
                P = n;
              }
            };
          });
      },
      340: (e, t, n) => {
        "use strict";
        e.exports = n(761);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/main.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "drum-kit:";
      n.l = (r, i, a, o) => {
        if (e[r]) e[r].push(i);
        else {
          var l, u;
          if (void 0 !== a)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + a
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((u = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + a),
            (l.src = r)),
            (e[r] = [i]);
          var d = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                i && i.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            u && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var a = new Promise((n, r) => (i = e[t] = [n, r]));
            r.push((i[2] = a));
            var o = n.p + n.u(t),
              l = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = a),
                    (l.request = o),
                    i[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var i,
            a,
            o = r[0],
            l = r[1],
            u = r[2],
            s = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (i in l) n.o(l, i) && (n.m[i] = l[i]);
            if (u) u(n);
          }
          for (t && t(r); s < o.length; s++)
            (a = o[s]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkdrum_kit = self.webpackChunkdrum_kit || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      "use strict";
      var e = n(950),
        t = n(119),
        r = n(414);
      const i = { isActiveButton: !1, soundType: "standard", soundBank: {} },
        a = (0, e.createContext)(i),
        { Provider: o } = a,
        l = (t) => {
          let { children: n } = t;
          const [a, l] = (0, e.useReducer)((e, t) => {
            switch (t.type) {
              case "TOGGLE_BUTTON":
                return { ...e, isActiveButton: !e.isActiveButton };
              case "CHANGE_SOUND":
                return { ...e, soundType: t.soundType };
              case "CREATE_SOUND":
                return { ...e, soundBank: t.soundBank };
              default:
                return e;
            }
          }, i);
          return (0, r.jsx)(o, {
            value: { state: a, dispatch: l },
            children: n,
          });
        };
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function s(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      var c,
        f,
        d,
        p,
        h,
        m,
        _,
        g,
        v,
        y,
        b,
        w = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        k = { duration: 0.5, overwrite: !1, delay: 0 },
        x = 1e8,
        T = 1e-8,
        S = 2 * Math.PI,
        E = S / 4,
        C = 0,
        A = Math.sqrt,
        O = Math.cos,
        P = Math.sin,
        M = function (e) {
          return "string" === typeof e;
        },
        L = function (e) {
          return "function" === typeof e;
        },
        N = function (e) {
          return "number" === typeof e;
        },
        R = function (e) {
          return "undefined" === typeof e;
        },
        D = function (e) {
          return "object" === typeof e;
        },
        z = function (e) {
          return !1 !== e;
        },
        I = function () {
          return "undefined" !== typeof window;
        },
        F = function (e) {
          return L(e) || M(e);
        },
        j =
          ("function" === typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        B = Array.isArray,
        H = /(?:-?\.?\d|\.)+/gi,
        U = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        V = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        W = /[+-]=-?[.\d]+/,
        $ = /[^,'"\[\]\s]+/gi,
        Q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        q = {},
        G = {},
        X = function (e) {
          return (G = Se(e, q)) && Cn;
        },
        K = function (e, t) {
          return console.warn(
            "Invalid property",
            e,
            "set to",
            t,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        Z = function (e, t) {
          return !t && console.warn(e);
        },
        J = function (e, t) {
          return (e && (q[e] = t) && G && (G[e] = t)) || q;
        },
        ee = function () {
          return 0;
        },
        te = { suppressEvents: !0, isStart: !0, kill: !1 },
        ne = { suppressEvents: !0, kill: !1 },
        re = { suppressEvents: !0 },
        ie = {},
        ae = [],
        oe = {},
        le = {},
        ue = {},
        se = 30,
        ce = [],
        fe = "",
        de = function (e) {
          var t,
            n,
            r = e[0];
          if ((D(r) || L(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
            for (n = ce.length; n-- && !ce[n].targetTest(r); );
            t = ce[n];
          }
          for (n = e.length; n--; )
            (e[n] && (e[n]._gsap || (e[n]._gsap = new Bt(e[n], t)))) ||
              e.splice(n, 1);
          return e;
        },
        pe = function (e) {
          return e._gsap || de(rt(e))[0]._gsap;
        },
        he = function (e, t, n) {
          return (n = e[t]) && L(n)
            ? e[t]()
            : (R(n) && e.getAttribute && e.getAttribute(t)) || n;
        },
        me = function (e, t) {
          return (e = e.split(",")).forEach(t) || e;
        },
        _e = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        ge = function (e) {
          return Math.round(1e7 * e) / 1e7 || 0;
        },
        ve = function (e, t) {
          var n = t.charAt(0),
            r = parseFloat(t.substr(2));
          return (
            (e = parseFloat(e)),
            "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
          );
        },
        ye = function (e, t) {
          for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
          return r < n;
        },
        be = function () {
          var e,
            t,
            n = ae.length,
            r = ae.slice(0);
          for (oe = {}, ae.length = 0, e = 0; e < n; e++)
            (t = r[e]) &&
              t._lazy &&
              (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
        },
        we = function (e, t, n, r) {
          ae.length && !f && be(),
            e.render(t, n, r || (f && t < 0 && (e._initted || e._startAt))),
            ae.length && !f && be();
        },
        ke = function (e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match($).length < 2
            ? t
            : M(e)
            ? e.trim()
            : e;
        },
        xe = function (e) {
          return e;
        },
        Te = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        Se = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        Ee = function e(t, n) {
          for (var r in n)
            "__proto__" !== r &&
              "constructor" !== r &&
              "prototype" !== r &&
              (t[r] = D(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
          return t;
        },
        Ce = function (e, t) {
          var n,
            r = {};
          for (n in e) n in t || (r[n] = e[n]);
          return r;
        },
        Ae = function (e) {
          var t,
            n = e.parent || p,
            r = e.keyframes
              ? ((t = B(e.keyframes)),
                function (e, n) {
                  for (var r in n)
                    r in e ||
                      ("duration" === r && t) ||
                      "ease" === r ||
                      (e[r] = n[r]);
                })
              : Te;
          if (z(e.inherit))
            for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
          return e;
        },
        Oe = function (e, t, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var a,
            o = e[r];
          if (i) for (a = t[i]; o && o[i] > a; ) o = o._prev;
          return (
            o
              ? ((t._next = o._next), (o._next = t))
              : ((t._next = e[n]), (e[n] = t)),
            t._next ? (t._next._prev = t) : (e[r] = t),
            (t._prev = o),
            (t.parent = t._dp = e),
            t
          );
        },
        Pe = function (e, t, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = t._prev,
            a = t._next;
          i ? (i._next = a) : e[n] === t && (e[n] = a),
            a ? (a._prev = i) : e[r] === t && (e[r] = i),
            (t._next = t._prev = t.parent = null);
        },
        Me = function (e, t) {
          e.parent &&
            (!t || e.parent.autoRemoveChildren) &&
            e.parent.remove &&
            e.parent.remove(e),
            (e._act = 0);
        },
        Le = function (e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
          return e;
        },
        Ne = function (e, t, n, r) {
          return (
            e._startAt &&
            (f
              ? e._startAt.revert(ne)
              : (e.vars.immediateRender && !e.vars.autoRevert) ||
                e._startAt.render(t, !0, r))
          );
        },
        Re = function e(t) {
          return !t || (t._ts && e(t.parent));
        },
        De = function (e) {
          return e._repeat
            ? ze(e._tTime, (e = e.duration() + e._rDelay)) * e
            : 0;
        },
        ze = function (e, t) {
          var n = Math.floor((e /= t));
          return e && n === e ? n - 1 : n;
        },
        Ie = function (e, t) {
          return (
            (e - t._start) * t._ts +
            (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
          );
        },
        Fe = function (e) {
          return (e._end = ge(
            e._start + (e._tDur / Math.abs(e._ts || e._rts || T) || 0)
          ));
        },
        je = function (e, t) {
          var n = e._dp;
          return (
            n &&
              n.smoothChildTiming &&
              e._ts &&
              ((e._start = ge(
                n._time -
                  (e._ts > 0
                    ? t / e._ts
                    : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
              )),
              Fe(e),
              n._dirty || Le(n, e)),
            e
          );
        },
        Be = function (e, t) {
          var n;
          if (
            ((t._time ||
              (!t._dur && t._initted) ||
              (t._start < e._time && (t._dur || !t.add))) &&
              ((n = Ie(e.rawTime(), t)),
              (!t._dur || Ze(0, t.totalDuration(), n) - t._tTime > T) &&
                t.render(n, !0)),
            Le(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
          ) {
            if (e._dur < e.duration())
              for (n = e; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            e._zTime = -1e-8;
          }
        },
        He = function (e, t, n, r) {
          return (
            t.parent && Me(t),
            (t._start = ge(
              (N(n) ? n : n || e !== p ? Ge(e, n, t) : e._time) + t._delay
            )),
            (t._end = ge(
              t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
            )),
            Oe(e, t, "_first", "_last", e._sort ? "_start" : 0),
            We(t) || (e._recent = t),
            r || Be(e, t),
            e._ts < 0 && je(e, e._tTime),
            e
          );
        },
        Ue = function (e, t) {
          return (
            (q.ScrollTrigger || K("scrollTrigger", t)) &&
            q.ScrollTrigger.create(t, e)
          );
        },
        Ve = function (e, t, n, r, i) {
          return (
            qt(e, t, i),
            e._initted
              ? !n &&
                e._pt &&
                !f &&
                ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
                v !== Ct.frame
                ? (ae.push(e), (e._lazy = [i, r]), 1)
                : void 0
              : 1
          );
        },
        Ye = function e(t) {
          var n = t.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
          );
        },
        We = function (e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t;
        },
        $e = function (e, t, n, r) {
          var i = e._repeat,
            a = ge(t) || 0,
            o = e._tTime / e._tDur;
          return (
            o && !r && (e._time *= a / e._dur),
            (e._dur = a),
            (e._tDur = i
              ? i < 0
                ? 1e10
                : ge(a * (i + 1) + e._rDelay * i)
              : a),
            o > 0 && !r && je(e, (e._tTime = e._tDur * o)),
            e.parent && Fe(e),
            n || Le(e.parent, e),
            e
          );
        },
        Qe = function (e) {
          return e instanceof Ut ? Le(e) : $e(e, e._dur);
        },
        qe = { _start: 0, endTime: ee, totalDuration: ee },
        Ge = function e(t, n, r) {
          var i,
            a,
            o,
            l = t.labels,
            u = t._recent || qe,
            s = t.duration() >= x ? u.endTime(!1) : t._dur;
          return M(n) && (isNaN(n) || n in l)
            ? ((a = n.charAt(0)),
              (o = "%" === n.substr(-1)),
              (i = n.indexOf("=")),
              "<" === a || ">" === a
                ? (i >= 0 && (n = n.replace(/=/, "")),
                  ("<" === a ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (o ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                : i < 0
                ? (n in l || (l[n] = s), l[n])
                : ((a = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                  o && r && (a = (a / 100) * (B(r) ? r[0] : r).totalDuration()),
                  i > 1 ? e(t, n.substr(0, i - 1), r) + a : s + a))
            : null == n
            ? s
            : +n;
        },
        Xe = function (e, t, n) {
          var r,
            i,
            a = N(t[1]),
            o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
            l = t[o];
          if ((a && (l.duration = t[1]), (l.parent = n), e)) {
            for (r = l, i = n; i && !("immediateRender" in r); )
              (r = i.vars.defaults || {}), (i = z(i.vars.inherit) && i.parent);
            (l.immediateRender = z(r.immediateRender)),
              e < 2 ? (l.runBackwards = 1) : (l.startAt = t[o - 1]);
          }
          return new Jt(t[0], l, t[o + 1]);
        },
        Ke = function (e, t) {
          return e || 0 === e ? t(e) : t;
        },
        Ze = function (e, t, n) {
          return n < e ? e : n > t ? t : n;
        },
        Je = function (e, t) {
          return M(e) && (t = Q.exec(e)) ? t[1] : "";
        },
        et = [].slice,
        tt = function (e, t) {
          return (
            e &&
            D(e) &&
            "length" in e &&
            ((!t && !e.length) || (e.length - 1 in e && D(e[0]))) &&
            !e.nodeType &&
            e !== h
          );
        },
        nt = function (e, t, n) {
          return (
            void 0 === n && (n = []),
            e.forEach(function (e) {
              var r;
              return (M(e) && !t) || tt(e, 1)
                ? (r = n).push.apply(r, rt(e))
                : n.push(e);
            }) || n
          );
        },
        rt = function (e, t, n) {
          return d && !t && d.selector
            ? d.selector(e)
            : !M(e) || n || (!m && At())
            ? B(e)
              ? nt(e, n)
              : tt(e)
              ? et.call(e, 0)
              : e
              ? [e]
              : []
            : et.call((t || _).querySelectorAll(e), 0);
        },
        it = function (e) {
          return (
            (e = rt(e)[0] || Z("Invalid scope") || {}),
            function (t) {
              var n = e.current || e.nativeElement || e;
              return rt(
                t,
                n.querySelectorAll
                  ? n
                  : n === e
                  ? Z("Invalid scope") || _.createElement("div")
                  : e
              );
            }
          );
        },
        at = function (e) {
          return e.sort(function () {
            return 0.5 - Math.random();
          });
        },
        ot = function (e) {
          if (L(e)) return e;
          var t = D(e) ? e : { each: e },
            n = Dt(t.ease),
            r = t.from || 0,
            i = parseFloat(t.base) || 0,
            a = {},
            o = r > 0 && r < 1,
            l = isNaN(r) || o,
            u = t.axis,
            s = r,
            c = r;
          return (
            M(r)
              ? (s = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !o && l && ((s = r[0]), (c = r[1])),
            function (e, o, f) {
              var d,
                p,
                h,
                m,
                _,
                g,
                v,
                y,
                b,
                w = (f || t).length,
                k = a[w];
              if (!k) {
                if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, x])[1])) {
                  for (
                    v = -x;
                    v < (v = f[b++].getBoundingClientRect().left) && b < w;

                  );
                  b < w && b--;
                }
                for (
                  k = a[w] = [],
                    d = l ? Math.min(b, w) * s - 0.5 : r % b,
                    p = b === x ? 0 : l ? (w * c) / b - 0.5 : (r / b) | 0,
                    v = 0,
                    y = x,
                    g = 0;
                  g < w;
                  g++
                )
                  (h = (g % b) - d),
                    (m = p - ((g / b) | 0)),
                    (k[g] = _ =
                      u ? Math.abs("y" === u ? m : h) : A(h * h + m * m)),
                    _ > v && (v = _),
                    _ < y && (y = _);
                "random" === r && at(k),
                  (k.max = v - y),
                  (k.min = y),
                  (k.v = w =
                    (parseFloat(t.amount) ||
                      parseFloat(t.each) *
                        (b > w
                          ? w - 1
                          : u
                          ? "y" === u
                            ? w / b
                            : b
                          : Math.max(b, w / b)) ||
                      0) * ("edges" === r ? -1 : 1)),
                  (k.b = w < 0 ? i - w : i),
                  (k.u = Je(t.amount || t.each) || 0),
                  (n = n && w < 0 ? Nt(n) : n);
              }
              return (
                (w = (k[e] - k.min) / k.max || 0),
                ge(k.b + (n ? n(w) : w) * k.v) + k.u
              );
            }
          );
        },
        lt = function (e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function (n) {
            var r = ge(Math.round(parseFloat(n) / e) * e * t);
            return (r - (r % 1)) / t + (N(n) ? 0 : Je(n));
          };
        },
        ut = function (e, t) {
          var n,
            r,
            i = B(e);
          return (
            !i &&
              D(e) &&
              ((n = i = e.radius || x),
              e.values
                ? ((e = rt(e.values)), (r = !N(e[0])) && (n *= n))
                : (e = lt(e.increment))),
            Ke(
              t,
              i
                ? L(e)
                  ? function (t) {
                      return (r = e(t)), Math.abs(r - t) <= n ? r : t;
                    }
                  : function (t) {
                      for (
                        var i,
                          a,
                          o = parseFloat(r ? t.x : t),
                          l = parseFloat(r ? t.y : 0),
                          u = x,
                          s = 0,
                          c = e.length;
                        c--;

                      )
                        (i = r
                          ? (i = e[c].x - o) * i + (a = e[c].y - l) * a
                          : Math.abs(e[c] - o)) < u && ((u = i), (s = c));
                      return (
                        (s = !n || u <= n ? e[s] : t),
                        r || s === t || N(t) ? s : s + Je(t)
                      );
                    }
                : lt(e)
            )
          );
        },
        st = function (e, t, n, r) {
          return Ke(B(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
            return B(e)
              ? e[~~(Math.random() * e.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                    ) *
                      n *
                      r
                  ) / r;
          });
        },
        ct = function (e, t, n) {
          return Ke(n, function (n) {
            return e[~~t(n)];
          });
        },
        ft = function (e) {
          for (var t, n, r, i, a = 0, o = ""; ~(t = e.indexOf("random(", a)); )
            (r = e.indexOf(")", t)),
              (i = "[" === e.charAt(t + 7)),
              (n = e.substr(t + 7, r - t - 7).match(i ? $ : H)),
              (o +=
                e.substr(a, t - a) +
                st(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
              (a = r + 1);
          return o + e.substr(a, e.length - a);
        },
        dt = function (e, t, n, r, i) {
          var a = t - e,
            o = r - n;
          return Ke(i, function (t) {
            return n + (((t - e) / a) * o || 0);
          });
        },
        pt = function (e, t, n) {
          var r,
            i,
            a,
            o = e.labels,
            l = x;
          for (r in o)
            (i = o[r] - t) < 0 === !!n &&
              i &&
              l > (i = Math.abs(i)) &&
              ((a = r), (l = i));
          return a;
        },
        ht = function (e, t, n) {
          var r,
            i,
            a,
            o = e.vars,
            l = o[t],
            u = d,
            s = e._ctx;
          if (l)
            return (
              (r = o[t + "Params"]),
              (i = o.callbackScope || e),
              n && ae.length && be(),
              s && (d = s),
              (a = r ? l.apply(i, r) : l.call(i)),
              (d = u),
              a
            );
        },
        mt = function (e) {
          return (
            Me(e),
            e.scrollTrigger && e.scrollTrigger.kill(!!f),
            e.progress() < 1 && ht(e, "onInterrupt"),
            e
          );
        },
        _t = [],
        gt = function (e) {
          if (e)
            if (((e = (!e.name && e.default) || e), I() || e.headless)) {
              var t = e.name,
                n = L(e),
                r =
                  t && !n && e.init
                    ? function () {
                        this._props = [];
                      }
                    : e,
                i = {
                  init: ee,
                  render: sn,
                  add: $t,
                  kill: fn,
                  modifier: cn,
                  rawVars: 0,
                },
                a = {
                  targetTest: 0,
                  get: 0,
                  getSetter: an,
                  aliases: {},
                  register: 0,
                };
              if ((At(), e !== r)) {
                if (le[t]) return;
                Te(r, Te(Ce(e, i), a)),
                  Se(r.prototype, Se(i, Ce(e, a))),
                  (le[(r.prop = t)] = r),
                  e.targetTest && (ce.push(r), (ie[t] = 1)),
                  (t =
                    ("css" === t
                      ? "CSS"
                      : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
              }
              J(t, r), e.register && e.register(Cn, r, hn);
            } else _t.push(e);
        },
        vt = 255,
        yt = {
          aqua: [0, vt, vt],
          lime: [0, vt, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, vt],
          navy: [0, 0, 128],
          white: [vt, vt, vt],
          olive: [128, 128, 0],
          yellow: [vt, vt, 0],
          orange: [vt, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [vt, 0, 0],
          pink: [vt, 192, 203],
          cyan: [0, vt, vt],
          transparent: [vt, vt, vt, 0],
        },
        bt = function (e, t, n) {
          return (
            ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
              ? t + (n - t) * e * 6
              : e < 0.5
              ? n
              : 3 * e < 2
              ? t + (n - t) * (2 / 3 - e) * 6
              : t) *
              vt +
              0.5) |
            0
          );
        },
        wt = function (e, t, n) {
          var r,
            i,
            a,
            o,
            l,
            u,
            s,
            c,
            f,
            d,
            p = e ? (N(e) ? [e >> 16, (e >> 8) & vt, e & vt] : 0) : yt.black;
          if (!p) {
            if (
              ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), yt[e])
            )
              p = yt[e];
            else if ("#" === e.charAt(0)) {
              if (
                (e.length < 6 &&
                  ((r = e.charAt(1)),
                  (i = e.charAt(2)),
                  (a = e.charAt(3)),
                  (e =
                    "#" +
                    r +
                    r +
                    i +
                    i +
                    a +
                    a +
                    (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
                9 === e.length)
              )
                return [
                  (p = parseInt(e.substr(1, 6), 16)) >> 16,
                  (p >> 8) & vt,
                  p & vt,
                  parseInt(e.substr(7), 16) / 255,
                ];
              p = [
                (e = parseInt(e.substr(1), 16)) >> 16,
                (e >> 8) & vt,
                e & vt,
              ];
            } else if ("hsl" === e.substr(0, 3))
              if (((p = d = e.match(H)), t)) {
                if (~e.indexOf("="))
                  return (p = e.match(U)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (o = (+p[0] % 360) / 360),
                  (l = +p[1] / 100),
                  (r =
                    2 * (u = +p[2] / 100) -
                    (i = u <= 0.5 ? u * (l + 1) : u + l - u * l)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = bt(o + 1 / 3, r, i)),
                  (p[1] = bt(o, r, i)),
                  (p[2] = bt(o - 1 / 3, r, i));
            else p = e.match(H) || yt.transparent;
            p = p.map(Number);
          }
          return (
            t &&
              !d &&
              ((r = p[0] / vt),
              (i = p[1] / vt),
              (a = p[2] / vt),
              (u = ((s = Math.max(r, i, a)) + (c = Math.min(r, i, a))) / 2),
              s === c
                ? (o = l = 0)
                : ((f = s - c),
                  (l = u > 0.5 ? f / (2 - s - c) : f / (s + c)),
                  (o =
                    s === r
                      ? (i - a) / f + (i < a ? 6 : 0)
                      : s === i
                      ? (a - r) / f + 2
                      : (r - i) / f + 4),
                  (o *= 60)),
              (p[0] = ~~(o + 0.5)),
              (p[1] = ~~(100 * l + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        kt = function (e) {
          var t = [],
            n = [],
            r = -1;
          return (
            e.split(Tt).forEach(function (e) {
              var i = e.match(V) || [];
              t.push.apply(t, i), n.push((r += i.length + 1));
            }),
            (t.c = n),
            t
          );
        },
        xt = function (e, t, n) {
          var r,
            i,
            a,
            o,
            l = "",
            u = (e + l).match(Tt),
            s = t ? "hsla(" : "rgba(",
            c = 0;
          if (!u) return e;
          if (
            ((u = u.map(function (e) {
              return (
                (e = wt(e, t, 1)) &&
                s +
                  (t
                    ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                    : e.join(",")) +
                  ")"
              );
            })),
            n && ((a = kt(e)), (r = n.c).join(l) !== a.c.join(l)))
          )
            for (o = (i = e.replace(Tt, "1").split(V)).length - 1; c < o; c++)
              l +=
                i[c] +
                (~r.indexOf(c)
                  ? u.shift() || s + "0,0,0,0)"
                  : (a.length ? a : u.length ? u : n).shift());
          if (!i)
            for (o = (i = e.split(Tt)).length - 1; c < o; c++) l += i[c] + u[c];
          return l + i[o];
        },
        Tt = (function () {
          var e,
            t =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in yt) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi");
        })(),
        St = /hsl[a]?\(/,
        Et = function (e) {
          var t,
            n = e.join(" ");
          if (((Tt.lastIndex = 0), Tt.test(n)))
            return (
              (t = St.test(n)),
              (e[1] = xt(e[1], t)),
              (e[0] = xt(e[0], t, kt(e[1]))),
              !0
            );
        },
        Ct = (function () {
          var e,
            t,
            n,
            r,
            i,
            a,
            o = Date.now,
            l = 500,
            u = 33,
            s = o(),
            c = s,
            f = 1e3 / 240,
            d = f,
            p = [],
            v = function n(h) {
              var m,
                _,
                g,
                v,
                y = o() - c,
                b = !0 === h;
              if (
                ((y > l || y < 0) && (s += y - u),
                ((m = (g = (c += y) - s) - d) > 0 || b) &&
                  ((v = ++r.frame),
                  (i = g - 1e3 * r.time),
                  (r.time = g /= 1e3),
                  (d += m + (m >= f ? 4 : f - m)),
                  (_ = 1)),
                b || (e = t(n)),
                _)
              )
                for (a = 0; a < p.length; a++) p[a](g, i, v, h);
            };
          return (r = {
            time: 0,
            frame: 0,
            tick: function () {
              v(!0);
            },
            deltaRatio: function (e) {
              return i / (1e3 / (e || 60));
            },
            wake: function () {
              g &&
                (!m &&
                  I() &&
                  ((h = m = window),
                  (_ = h.document || {}),
                  (q.gsap = Cn),
                  (h.gsapVersions || (h.gsapVersions = [])).push(Cn.version),
                  X(G || h.GreenSockGlobals || (!h.gsap && h) || {}),
                  _t.forEach(gt)),
                (n =
                  "undefined" !== typeof requestAnimationFrame &&
                  requestAnimationFrame),
                e && r.sleep(),
                (t =
                  n ||
                  function (e) {
                    return setTimeout(e, (d - 1e3 * r.time + 1) | 0);
                  }),
                (b = 1),
                v(2));
            },
            sleep: function () {
              (n ? cancelAnimationFrame : clearTimeout)(e), (b = 0), (t = ee);
            },
            lagSmoothing: function (e, t) {
              (l = e || 1 / 0), (u = Math.min(t || 33, l));
            },
            fps: function (e) {
              (f = 1e3 / (e || 240)), (d = 1e3 * r.time + f);
            },
            add: function (e, t, n) {
              var i = t
                ? function (t, n, a, o) {
                    e(t, n, a, o), r.remove(i);
                  }
                : e;
              return r.remove(e), p[n ? "unshift" : "push"](i), At(), i;
            },
            remove: function (e, t) {
              ~(t = p.indexOf(e)) && p.splice(t, 1) && a >= t && a--;
            },
            _listeners: p,
          });
        })(),
        At = function () {
          return !b && Ct.wake();
        },
        Ot = {},
        Pt = /^[\d.\-M][\d.\-,\s]/,
        Mt = /["']/g,
        Lt = function (e) {
          for (
            var t,
              n,
              r,
              i = {},
              a = e.substr(1, e.length - 3).split(":"),
              o = a[0],
              l = 1,
              u = a.length;
            l < u;
            l++
          )
            (n = a[l]),
              (t = l !== u - 1 ? n.lastIndexOf(",") : n.length),
              (r = n.substr(0, t)),
              (i[o] = isNaN(r) ? r.replace(Mt, "").trim() : +r),
              (o = n.substr(t + 1).trim());
          return i;
        },
        Nt = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Rt = function e(t, n) {
          for (var r, i = t._first; i; )
            i instanceof Ut
              ? e(i, n)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === n ||
                (i.timeline
                  ? e(i.timeline, n)
                  : ((r = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = r),
                    (i._yoyo = n))),
              (i = i._next);
        },
        Dt = function (e, t) {
          return (
            (e &&
              (L(e)
                ? e
                : Ot[e] ||
                  (function (e) {
                    var t = (e + "").split("("),
                      n = Ot[t[0]];
                    return n && t.length > 1 && n.config
                      ? n.config.apply(
                          null,
                          ~e.indexOf("{")
                            ? [Lt(t[1])]
                            : (function (e) {
                                var t = e.indexOf("(") + 1,
                                  n = e.indexOf(")"),
                                  r = e.indexOf("(", t);
                                return e.substring(
                                  t,
                                  ~r && r < n ? e.indexOf(")", n + 1) : n
                                );
                              })(e)
                                .split(",")
                                .map(ke)
                        )
                      : Ot._CE && Pt.test(e)
                      ? Ot._CE("", e)
                      : n;
                  })(e))) ||
            t
          );
        },
        zt = function (e, t, n, r) {
          void 0 === n &&
            (n = function (e) {
              return 1 - t(1 - e);
            }),
            void 0 === r &&
              (r = function (e) {
                return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
              });
          var i,
            a = { easeIn: t, easeOut: n, easeInOut: r };
          return (
            me(e, function (e) {
              for (var t in ((Ot[e] = q[e] = a),
              (Ot[(i = e.toLowerCase())] = n),
              a))
                Ot[
                  i +
                    ("easeIn" === t
                      ? ".in"
                      : "easeOut" === t
                      ? ".out"
                      : ".inOut")
                ] = Ot[e + "." + t] = a[t];
            }),
            a
          );
        },
        It = function (e) {
          return function (t) {
            return t < 0.5
              ? (1 - e(1 - 2 * t)) / 2
              : 0.5 + e(2 * (t - 0.5)) / 2;
          };
        },
        Ft = function e(t, n, r) {
          var i = n >= 1 ? n : 1,
            a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            o = (a / S) * (Math.asin(1 / i) || 0),
            l = function (e) {
              return 1 === e
                ? 1
                : i * Math.pow(2, -10 * e) * P((e - o) * a) + 1;
            },
            u =
              "out" === t
                ? l
                : "in" === t
                ? function (e) {
                    return 1 - l(1 - e);
                  }
                : It(l);
          return (
            (a = S / a),
            (u.config = function (n, r) {
              return e(t, n, r);
            }),
            u
          );
        },
        jt = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var r = function (e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
            },
            i =
              "out" === t
                ? r
                : "in" === t
                ? function (e) {
                    return 1 - r(1 - e);
                  }
                : It(r);
          return (
            (i.config = function (n) {
              return e(t, n);
            }),
            i
          );
        };
      me("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
        var n = t < 5 ? t + 1 : t;
        zt(
          e + ",Power" + (n - 1),
          t
            ? function (e) {
                return Math.pow(e, n);
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - Math.pow(1 - e, n);
          },
          function (e) {
            return e < 0.5
              ? Math.pow(2 * e, n) / 2
              : 1 - Math.pow(2 * (1 - e), n) / 2;
          }
        );
      }),
        (Ot.Linear.easeNone = Ot.none = Ot.Linear.easeIn),
        zt("Elastic", Ft("in"), Ft("out"), Ft()),
        (function (e, t) {
          var n = 1 / t,
            r = 2 * n,
            i = 2.5 * n,
            a = function (a) {
              return a < n
                ? e * a * a
                : a < r
                ? e * Math.pow(a - 1.5 / t, 2) + 0.75
                : a < i
                ? e * (a -= 2.25 / t) * a + 0.9375
                : e * Math.pow(a - 2.625 / t, 2) + 0.984375;
            };
          zt(
            "Bounce",
            function (e) {
              return 1 - a(1 - e);
            },
            a
          );
        })(7.5625, 2.75),
        zt("Expo", function (e) {
          return e ? Math.pow(2, 10 * (e - 1)) : 0;
        }),
        zt("Circ", function (e) {
          return -(A(1 - e * e) - 1);
        }),
        zt("Sine", function (e) {
          return 1 === e ? 1 : 1 - O(e * E);
        }),
        zt("Back", jt("in"), jt("out"), jt()),
        (Ot.SteppedEase =
          Ot.steps =
          q.SteppedEase =
            {
              config: function (e, t) {
                void 0 === e && (e = 1);
                var n = 1 / e,
                  r = e + (t ? 0 : 1),
                  i = t ? 1 : 0;
                return function (e) {
                  return (((r * Ze(0, 0.99999999, e)) | 0) + i) * n;
                };
              },
            }),
        (k.ease = Ot["quad.out"]),
        me(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (e) {
            return (fe += e + "," + e + "Params,");
          }
        );
      var Bt = function (e, t) {
          (this.id = C++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = t),
            (this.get = t ? t.get : he),
            (this.set = t ? t.getSetter : an);
        },
        Ht = (function () {
          function e(e) {
            (this.vars = e),
              (this._delay = +e.delay || 0),
              (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                ((this._rDelay = e.repeatDelay || 0),
                (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
              (this._ts = 1),
              $e(this, +e.duration, 1, 1),
              (this.data = e.data),
              d && ((this._ctx = d), d.data.push(this)),
              b || Ct.wake();
          }
          var t = e.prototype;
          return (
            (t.delay = function (e) {
              return e || 0 === e
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + e - this._delay),
                  (this._delay = e),
                  this)
                : this._delay;
            }),
            (t.duration = function (e) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                  )
                : this.totalDuration() && this._dur;
            }),
            (t.totalDuration = function (e) {
              return arguments.length
                ? ((this._dirty = 0),
                  $e(
                    this,
                    this._repeat < 0
                      ? e
                      : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (t.totalTime = function (e, t) {
              if ((At(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  je(this, e), !n._dp || n.parent || Be(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && e < this._tDur) ||
                    (this._ts < 0 && e > 0) ||
                    (!this._tDur && !e)) &&
                  He(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== e ||
                  (!this._dur && !t) ||
                  (this._initted && Math.abs(this._zTime) === T) ||
                  (!e && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = e), we(this, e, t)),
                this
              );
            }),
            (t.time = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), e + De(this)) %
                      (this._dur + this._rDelay) || (e ? this._dur : 0),
                    t
                  )
                : this._time;
            }),
            (t.totalProgress = function (e, t) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * e, t)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() > 0
                ? 1
                : 0;
            }),
            (t.progress = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                      De(this),
                    t
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                ? 1
                : 0;
            }),
            (t.iteration = function (e, t) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (e - 1) * n, t)
                : this._repeat
                ? ze(this._tTime, n) + 1
                : 1;
            }),
            (t.timeScale = function (e, t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === e) return this;
              var n =
                this.parent && this._ts
                  ? Ie(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +e || 0),
                (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
                this.totalTime(
                  Ze(-Math.abs(this._delay), this._tDur, n),
                  !1 !== t
                ),
                Fe(this),
                (function (e) {
                  for (var t = e.parent; t && t.parent; )
                    (t._dirty = 1), t.totalDuration(), (t = t.parent);
                  return e;
                })(this)
              );
            }),
            (t.paused = function (e) {
              return arguments.length
                ? (this._ps !== e &&
                    ((this._ps = e),
                    e
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (At(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== T &&
                            (this._tTime -= T)
                        ))),
                  this)
                : this._ps;
            }),
            (t.startTime = function (e) {
              if (arguments.length) {
                this._start = e;
                var t = this.parent || this._dp;
                return (
                  t &&
                    (t._sort || !this.parent) &&
                    He(t, this, e - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (t.endTime = function (e) {
              return (
                this._start +
                (z(e) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (t.rawTime = function (e) {
              var t = this.parent || this._dp;
              return t
                ? e &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Ie(t.rawTime(e), this)
                  : this._tTime
                : this._tTime;
            }),
            (t.revert = function (e) {
              void 0 === e && (e = re);
              var t = f;
              return (
                (f = e),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(e),
                  this.totalTime(-0.01, e.suppressEvents)),
                "nested" !== this.data && !1 !== e.kill && this.kill(),
                (f = t),
                this
              );
            }),
            (t.globalTime = function (e) {
              for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                (n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp);
              return !this.parent && this._sat ? this._sat.globalTime(e) : n;
            }),
            (t.repeat = function (e) {
              return arguments.length
                ? ((this._repeat = e === 1 / 0 ? -2 : e), Qe(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (t.repeatDelay = function (e) {
              if (arguments.length) {
                var t = this._time;
                return (this._rDelay = e), Qe(this), t ? this.time(t) : this;
              }
              return this._rDelay;
            }),
            (t.yoyo = function (e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
            }),
            (t.seek = function (e, t) {
              return this.totalTime(Ge(this, e), z(t));
            }),
            (t.restart = function (e, t) {
              return this.play().totalTime(e ? -this._delay : 0, z(t));
            }),
            (t.play = function (e, t) {
              return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
            }),
            (t.reverse = function (e, t) {
              return (
                null != e && this.seek(e || this.totalDuration(), t),
                this.reversed(!0).paused(!1)
              );
            }),
            (t.pause = function (e, t) {
              return null != e && this.seek(e, t), this.paused(!0);
            }),
            (t.resume = function () {
              return this.paused(!1);
            }),
            (t.reversed = function (e) {
              return arguments.length
                ? (!!e !== this.reversed() &&
                    this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (t.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (t.isActive = function () {
              var e,
                t = this.parent || this._dp,
                n = this._start;
              return !(
                t &&
                !(
                  this._ts &&
                  this._initted &&
                  t.isActive() &&
                  (e = t.rawTime(!0)) >= n &&
                  e < this.endTime(!0) - T
                )
              );
            }),
            (t.eventCallback = function (e, t, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (t
                    ? ((r[e] = t),
                      n && (r[e + "Params"] = n),
                      "onUpdate" === e && (this._onUpdate = t))
                    : delete r[e],
                  this)
                : r[e];
            }),
            (t.then = function (e) {
              var t = this;
              return new Promise(function (n) {
                var r = L(e) ? e : xe,
                  i = function () {
                    var e = t.then;
                    (t.then = null),
                      L(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                      n(r),
                      (t.then = e);
                  };
                (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
                (!t._tTime && t._ts < 0)
                  ? i()
                  : (t._prom = i);
              });
            }),
            (t.kill = function () {
              mt(this);
            }),
            e
          );
        })();
      Te(Ht.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Ut = (function (e) {
        function t(t, n) {
          var r;
          return (
            void 0 === t && (t = {}),
            ((r = e.call(this, t) || this).labels = {}),
            (r.smoothChildTiming = !!t.smoothChildTiming),
            (r.autoRemoveChildren = !!t.autoRemoveChildren),
            (r._sort = z(t.sortChildren)),
            p && He(t.parent || p, u(r), n),
            t.reversed && r.reverse(),
            t.paused && r.paused(!0),
            t.scrollTrigger && Ue(u(r), t.scrollTrigger),
            r
          );
        }
        s(t, e);
        var n = t.prototype;
        return (
          (n.to = function (e, t, n) {
            return Xe(0, arguments, this), this;
          }),
          (n.from = function (e, t, n) {
            return Xe(1, arguments, this), this;
          }),
          (n.fromTo = function (e, t, n, r) {
            return Xe(2, arguments, this), this;
          }),
          (n.set = function (e, t, n) {
            return (
              (t.duration = 0),
              (t.parent = this),
              Ae(t).repeatDelay || (t.repeat = 0),
              (t.immediateRender = !!t.immediateRender),
              new Jt(e, t, Ge(this, n), 1),
              this
            );
          }),
          (n.call = function (e, t, n) {
            return He(this, Jt.delayedCall(0, e, t), n);
          }),
          (n.staggerTo = function (e, t, n, r, i, a, o) {
            return (
              (n.duration = t),
              (n.stagger = n.stagger || r),
              (n.onComplete = a),
              (n.onCompleteParams = o),
              (n.parent = this),
              new Jt(e, n, Ge(this, i)),
              this
            );
          }),
          (n.staggerFrom = function (e, t, n, r, i, a, o) {
            return (
              (n.runBackwards = 1),
              (Ae(n).immediateRender = z(n.immediateRender)),
              this.staggerTo(e, t, n, r, i, a, o)
            );
          }),
          (n.staggerFromTo = function (e, t, n, r, i, a, o, l) {
            return (
              (r.startAt = n),
              (Ae(r).immediateRender = z(r.immediateRender)),
              this.staggerTo(e, t, r, i, a, o, l)
            );
          }),
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              l,
              u,
              s,
              c,
              d,
              h,
              m,
              _,
              g = this._time,
              v = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              b = e <= 0 ? 0 : ge(e),
              w = this._zTime < 0 !== e < 0 && (this._initted || !y);
            if (
              (this !== p && b > v && e >= 0 && (b = v),
              b !== this._tTime || n || w)
            ) {
              if (
                (g !== this._time &&
                  y &&
                  ((b += this._time - g), (e += this._time - g)),
                (r = b),
                (d = this._start),
                (u = !(c = this._ts)),
                w && (y || (g = this._zTime), (e || !t) && (this._zTime = e)),
                this._repeat)
              ) {
                if (
                  ((m = this._yoyo),
                  (l = y + this._rDelay),
                  this._repeat < -1 && e < 0)
                )
                  return this.totalTime(100 * l + e, t, n);
                if (
                  ((r = ge(b % l)),
                  b === v
                    ? ((o = this._repeat), (r = y))
                    : ((o = ~~(b / l)) && o === b / l && ((r = y), o--),
                      r > y && (r = y)),
                  (h = ze(this._tTime, l)),
                  !g &&
                    this._tTime &&
                    h !== o &&
                    this._tTime - h * l - this._dur <= 0 &&
                    (h = o),
                  m && 1 & o && ((r = y - r), (_ = 1)),
                  o !== h && !this._lock)
                ) {
                  var k = m && 1 & h,
                    x = k === (m && 1 & o);
                  if (
                    (o < h && (k = !k),
                    (g = k ? 0 : b % y ? y : b),
                    (this._lock = 1),
                    (this.render(g || (_ ? 0 : ge(o * l)), t, !y)._lock = 0),
                    (this._tTime = b),
                    !t && this.parent && ht(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !_ &&
                      (this.invalidate()._lock = 1),
                    (g && g !== this._time) ||
                      u !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((y = this._dur),
                    (v = this._tDur),
                    x &&
                      ((this._lock = 2),
                      (g = k ? y : -1e-4),
                      this.render(g, !0),
                      this.vars.repeatRefresh && !_ && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !u)
                  )
                    return this;
                  Rt(this, _);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((s = (function (e, t, n) {
                    var r;
                    if (n > t)
                      for (r = e._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > t) return r;
                        r = r._next;
                      }
                    else
                      for (r = e._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < t) return r;
                        r = r._prev;
                      }
                  })(this, ge(g), ge(r))),
                  s && (b -= r - (r = s._start))),
                (this._tTime = b),
                (this._time = r),
                (this._act = !c),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e),
                  (g = 0)),
                !g && r && !t && !o && (ht(this, "onStart"), this._tTime !== b))
              )
                return this;
              if (r >= g && e >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((a = i._next),
                    (i._act || r >= i._start) && i._ts && s !== i)
                  ) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (r - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (r - i._start) * i._ts,
                        t,
                        n
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (s = 0), a && (b += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = a;
                }
              else {
                i = this._last;
                for (var S = e < 0 ? e : r; i; ) {
                  if (
                    ((a = i._prev), (i._act || S <= i._end) && i._ts && s !== i)
                  ) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (S - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (S - i._start) * i._ts,
                        t,
                        n || (f && (i._initted || i._startAt))
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (s = 0), a && (b += this._zTime = S ? -1e-8 : T);
                      break;
                    }
                  }
                  i = a;
                }
              }
              if (
                s &&
                !t &&
                (this.pause(),
                (s.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1),
                this._ts)
              )
                return (this._start = d), Fe(this), this.render(e, t, n);
              this._onUpdate && !t && ht(this, "onUpdate", !0),
                ((b === v && this._tTime >= this.totalDuration()) ||
                  (!b && g)) &&
                  ((d !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((e || !y) &&
                      ((b === v && this._ts > 0) || (!b && this._ts < 0)) &&
                      Me(this, 1),
                    t ||
                      (e < 0 && !g) ||
                      (!b && !g && v) ||
                      (ht(
                        this,
                        b === v && e >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(b < v && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (e, t) {
            var n = this;
            if ((N(t) || (t = Ge(this, t, e)), !(e instanceof Ht))) {
              if (B(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  this
                );
              if (M(e)) return this.addLabel(e, t);
              if (!L(e)) return this;
              e = Jt.delayedCall(0, e);
            }
            return this !== e ? He(this, e, t) : this;
          }),
          (n.getChildren = function (e, t, n, r) {
            void 0 === e && (e = !0),
              void 0 === t && (t = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -x);
            for (var i = [], a = this._first; a; )
              a._start >= r &&
                (a instanceof Jt
                  ? t && i.push(a)
                  : (n && i.push(a),
                    e && i.push.apply(i, a.getChildren(!0, t, n)))),
                (a = a._next);
            return i;
          }),
          (n.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
              if (t[n].vars.id === e) return t[n];
          }),
          (n.remove = function (e) {
            return M(e)
              ? this.removeLabel(e)
              : L(e)
              ? this.killTweensOf(e)
              : (Pe(this, e),
                e === this._recent && (this._recent = this._last),
                Le(this));
          }),
          (n.totalTime = function (t, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = ge(
                    Ct.time -
                      (this._ts > 0
                        ? t / this._ts
                        : (this.totalDuration() - t) / -this._ts)
                  )),
                e.prototype.totalTime.call(this, t, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (e, t) {
            return (this.labels[e] = Ge(this, t)), this;
          }),
          (n.removeLabel = function (e) {
            return delete this.labels[e], this;
          }),
          (n.addPause = function (e, t, n) {
            var r = Jt.delayedCall(0, t || ee, n);
            return (
              (r.data = "isPause"),
              (this._hasPause = 1),
              He(this, r, Ge(this, e))
            );
          }),
          (n.removePause = function (e) {
            var t = this._first;
            for (e = Ge(this, e); t; )
              t._start === e && "isPause" === t.data && Me(t), (t = t._next);
          }),
          (n.killTweensOf = function (e, t, n) {
            for (var r = this.getTweensOf(e, n), i = r.length; i--; )
              Vt !== r[i] && r[i].kill(e, t);
            return this;
          }),
          (n.getTweensOf = function (e, t) {
            for (var n, r = [], i = rt(e), a = this._first, o = N(t); a; )
              a instanceof Jt
                ? ye(a._targets, i) &&
                  (o
                    ? (!Vt || (a._initted && a._ts)) &&
                      a.globalTime(0) <= t &&
                      a.globalTime(a.totalDuration()) > t
                    : !t || a.isActive()) &&
                  r.push(a)
                : (n = a.getTweensOf(i, t)).length && r.push.apply(r, n),
                (a = a._next);
            return r;
          }),
          (n.tweenTo = function (e, t) {
            t = t || {};
            var n,
              r = this,
              i = Ge(r, e),
              a = t,
              o = a.startAt,
              l = a.onStart,
              u = a.onStartParams,
              s = a.immediateRender,
              c = Jt.to(
                r,
                Te(
                  {
                    ease: t.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      t.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : r._time)) /
                          r.timeScale()
                      ) ||
                      T,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var e =
                          t.duration ||
                          Math.abs(
                            (i - (o && "time" in o ? o.time : r._time)) /
                              r.timeScale()
                          );
                        c._dur !== e && $e(c, e, 0, 1).render(c._time, !0, !0),
                          (n = 1);
                      }
                      l && l.apply(c, u || []);
                    },
                  },
                  t
                )
              );
            return s ? c.render(0) : c;
          }),
          (n.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, Te({ startAt: { time: Ge(this, e) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (e) {
            return void 0 === e && (e = this._time), pt(this, Ge(this, e));
          }),
          (n.previousLabel = function (e) {
            return void 0 === e && (e = this._time), pt(this, Ge(this, e), 1);
          }),
          (n.currentLabel = function (e) {
            return arguments.length
              ? this.seek(e, !0)
              : this.previousLabel(this._time + T);
          }),
          (n.shiftChildren = function (e, t, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, a = this.labels; i; )
              i._start >= n && ((i._start += e), (i._end += e)), (i = i._next);
            if (t) for (r in a) a[r] >= n && (a[r] += e);
            return Le(this);
          }),
          (n.invalidate = function (t) {
            var n = this._first;
            for (this._lock = 0; n; ) n.invalidate(t), (n = n._next);
            return e.prototype.invalidate.call(this, t);
          }),
          (n.clear = function (e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n; )
              (t = n._next), this.remove(n), (n = t);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              Le(this)
            );
          }),
          (n.totalDuration = function (e) {
            var t,
              n,
              r,
              i = 0,
              a = this,
              o = a._last,
              l = x;
            if (arguments.length)
              return a.timeScale(
                (a._repeat < 0 ? a.duration() : a.totalDuration()) /
                  (a.reversed() ? -e : e)
              );
            if (a._dirty) {
              for (r = a.parent; o; )
                (t = o._prev),
                  o._dirty && o.totalDuration(),
                  (n = o._start) > l && a._sort && o._ts && !a._lock
                    ? ((a._lock = 1), (He(a, o, n - o._delay, 1)._lock = 0))
                    : (l = n),
                  n < 0 &&
                    o._ts &&
                    ((i -= n),
                    ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                      ((a._start += n / a._ts),
                      (a._time -= n),
                      (a._tTime -= n)),
                    a.shiftChildren(-n, !1, -Infinity),
                    (l = 0)),
                  o._end > i && o._ts && (i = o._end),
                  (o = t);
              $e(a, a === p && a._time > i ? a._time : i, 1, 1), (a._dirty = 0);
            }
            return a._tDur;
          }),
          (t.updateRoot = function (e) {
            if ((p._ts && (we(p, Ie(e, p)), (v = Ct.frame)), Ct.frame >= se)) {
              se += w.autoSleep || 120;
              var t = p._first;
              if ((!t || !t._ts) && w.autoSleep && Ct._listeners.length < 2) {
                for (; t && !t._ts; ) t = t._next;
                t || Ct.sleep();
              }
            }
          }),
          t
        );
      })(Ht);
      Te(Ut.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Vt,
        Yt,
        Wt = function (e, t, n, r, i, a, o) {
          var l,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            m = new hn(this._pt, e, t, 0, 1, un, null, i),
            _ = 0,
            g = 0;
          for (
            m.b = n,
              m.e = r,
              n += "",
              (p = ~(r += "").indexOf("random(")) && (r = ft(r)),
              a && (a((h = [n, r]), e, t), (n = h[0]), (r = h[1])),
              u = n.match(Y) || [];
            (l = Y.exec(r));

          )
            (c = l[0]),
              (f = r.substring(_, l.index)),
              s ? (s = (s + 1) % 5) : "rgba(" === f.substr(-5) && (s = 1),
              c !== u[g++] &&
                ((d = parseFloat(u[g - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: f || 1 === g ? f : ",",
                  s: d,
                  c: "=" === c.charAt(1) ? ve(d, c) - d : parseFloat(c) - d,
                  m: s && s < 4 ? Math.round : 0,
                }),
                (_ = Y.lastIndex));
          return (
            (m.c = _ < r.length ? r.substring(_, r.length) : ""),
            (m.fp = o),
            (W.test(r) || p) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        $t = function (e, t, n, r, i, a, o, l, u, s) {
          L(r) && (r = r(i || 0, e, a));
          var c,
            f = e[t],
            d =
              "get" !== n
                ? n
                : L(f)
                ? u
                  ? e[
                      t.indexOf("set") || !L(e["get" + t.substr(3)])
                        ? t
                        : "get" + t.substr(3)
                    ](u)
                  : e[t]()
                : f,
            p = L(f) ? (u ? nn : tn) : en;
          if (
            (M(r) &&
              (~r.indexOf("random(") && (r = ft(r)),
              "=" === r.charAt(1) &&
                ((c = ve(d, r) + (Je(d) || 0)) || 0 === c) &&
                (r = c)),
            !s || d !== r || Yt)
          )
            return isNaN(d * r) || "" === r
              ? (!f && !(t in e) && K(t, r),
                Wt.call(this, e, t, d, r, p, l || w.stringFilter, u))
              : ((c = new hn(
                  this._pt,
                  e,
                  t,
                  +d || 0,
                  r - (d || 0),
                  "boolean" === typeof f ? ln : on,
                  0,
                  p
                )),
                u && (c.fp = u),
                o && c.modifier(o, this, e),
                (this._pt = c));
        },
        Qt = function (e, t, n, r, i, a) {
          var o, l, u, s;
          if (
            le[e] &&
            !1 !==
              (o = new le[e]()).init(
                i,
                o.rawVars
                  ? t[e]
                  : (function (e, t, n, r, i) {
                      if (
                        (L(e) && (e = Xt(e, i, t, n, r)),
                        !D(e) || (e.style && e.nodeType) || B(e) || j(e))
                      )
                        return M(e) ? Xt(e, i, t, n, r) : e;
                      var a,
                        o = {};
                      for (a in e) o[a] = Xt(e[a], i, t, n, r);
                      return o;
                    })(t[e], r, i, a, n),
                n,
                r,
                a
              ) &&
            ((n._pt = l =
              new hn(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
            n !== y)
          )
            for (
              u = n._ptLookup[n._targets.indexOf(i)], s = o._props.length;
              s--;

            )
              u[o._props[s]] = l;
          return o;
        },
        qt = function e(t, n, r) {
          var i,
            a,
            o,
            l,
            u,
            s,
            d,
            h,
            m,
            _,
            g,
            v,
            y,
            b = t.vars,
            w = b.ease,
            S = b.startAt,
            E = b.immediateRender,
            C = b.lazy,
            A = b.onUpdate,
            O = b.runBackwards,
            P = b.yoyoEase,
            M = b.keyframes,
            L = b.autoRevert,
            N = t._dur,
            R = t._startAt,
            D = t._targets,
            I = t.parent,
            F = I && "nested" === I.data ? I.vars.targets : D,
            j = "auto" === t._overwrite && !c,
            B = t.timeline;
          if (
            (B && (!M || !w) && (w = "none"),
            (t._ease = Dt(w, k.ease)),
            (t._yEase = P ? Nt(Dt(!0 === P ? w : P, k.ease)) : 0),
            P &&
              t._yoyo &&
              !t._repeat &&
              ((P = t._yEase), (t._yEase = t._ease), (t._ease = P)),
            (t._from = !B && !!b.runBackwards),
            !B || (M && !b.stagger))
          ) {
            if (
              ((v = (h = D[0] ? pe(D[0]).harness : 0) && b[h.prop]),
              (i = Ce(b, ie)),
              R &&
                (R._zTime < 0 && R.progress(1),
                n < 0 && O && E && !L
                  ? R.render(-1, !0)
                  : R.revert(O && N ? ne : te),
                (R._lazy = 0)),
              S)
            ) {
              if (
                (Me(
                  (t._startAt = Jt.set(
                    D,
                    Te(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: I,
                        immediateRender: !0,
                        lazy: !R && z(C),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          A &&
                          function () {
                            return ht(t, "onUpdate");
                          },
                        stagger: 0,
                      },
                      S
                    )
                  ))
                ),
                (t._startAt._dp = 0),
                (t._startAt._sat = t),
                n < 0 && (f || (!E && !L)) && t._startAt.revert(ne),
                E && N && n <= 0 && r <= 0)
              )
                return void (n && (t._zTime = n));
            } else if (O && N && !R)
              if (
                (n && (E = !1),
                (o = Te(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: E && !R && z(C),
                    immediateRender: E,
                    stagger: 0,
                    parent: I,
                  },
                  i
                )),
                v && (o[h.prop] = v),
                Me((t._startAt = Jt.set(D, o))),
                (t._startAt._dp = 0),
                (t._startAt._sat = t),
                n < 0 &&
                  (f ? t._startAt.revert(ne) : t._startAt.render(-1, !0)),
                (t._zTime = n),
                E)
              ) {
                if (!n) return;
              } else e(t._startAt, T, T);
            for (
              t._pt = t._ptCache = 0, C = (N && z(C)) || (C && !N), a = 0;
              a < D.length;
              a++
            ) {
              if (
                ((d = (u = D[a])._gsap || de(D)[a]._gsap),
                (t._ptLookup[a] = _ = {}),
                oe[d.id] && ae.length && be(),
                (g = F === D ? a : F.indexOf(u)),
                h &&
                  !1 !== (m = new h()).init(u, v || i, t, g, F) &&
                  ((t._pt = l =
                    new hn(t._pt, u, m.name, 0, 1, m.render, m, 0, m.priority)),
                  m._props.forEach(function (e) {
                    _[e] = l;
                  }),
                  m.priority && (s = 1)),
                !h || v)
              )
                for (o in i)
                  le[o] && (m = Qt(o, i, t, g, u, F))
                    ? m.priority && (s = 1)
                    : (_[o] = l =
                        $t.call(t, u, o, "get", i[o], g, F, 0, b.stringFilter));
              t._op && t._op[a] && t.kill(u, t._op[a]),
                j &&
                  t._pt &&
                  ((Vt = t),
                  p.killTweensOf(u, _, t.globalTime(n)),
                  (y = !t.parent),
                  (Vt = 0)),
                t._pt && C && (oe[d.id] = 1);
            }
            s && pn(t), t._onInit && t._onInit(t);
          }
          (t._onUpdate = A),
            (t._initted = (!t._op || t._pt) && !y),
            M && n <= 0 && B.render(x, !0, !0);
        },
        Gt = function (e, t, n, r) {
          var i,
            a,
            o = t.ease || r || "power1.inOut";
          if (B(t))
            (a = n[e] || (n[e] = [])),
              t.forEach(function (e, n) {
                return a.push({ t: (n / (t.length - 1)) * 100, v: e, e: o });
              });
          else
            for (i in t)
              (a = n[i] || (n[i] = [])),
                "ease" === i || a.push({ t: parseFloat(e), v: t[i], e: o });
        },
        Xt = function (e, t, n, r, i) {
          return L(e)
            ? e.call(t, n, r, i)
            : M(e) && ~e.indexOf("random(")
            ? ft(e)
            : e;
        },
        Kt = fe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Zt = {};
      me(Kt + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
        return (Zt[e] = 1);
      });
      var Jt = (function (e) {
        function t(t, n, r, i) {
          var a;
          "number" === typeof n && ((r.duration = n), (n = r), (r = null));
          var o,
            l,
            s,
            f,
            d,
            h,
            m,
            _,
            g = (a = e.call(this, i ? n : Ae(n)) || this).vars,
            v = g.duration,
            y = g.delay,
            b = g.immediateRender,
            k = g.stagger,
            x = g.overwrite,
            T = g.keyframes,
            S = g.defaults,
            E = g.scrollTrigger,
            C = g.yoyoEase,
            A = n.parent || p,
            O = (B(t) || j(t) ? N(t[0]) : "length" in n) ? [t] : rt(t);
          if (
            ((a._targets = O.length
              ? de(O)
              : Z(
                  "GSAP target " + t + " not found. https://gsap.com",
                  !w.nullTargetWarn
                ) || []),
            (a._ptLookup = []),
            (a._overwrite = x),
            T || k || F(v) || F(y))
          ) {
            if (
              ((n = a.vars),
              (o = a.timeline =
                new Ut({
                  data: "nested",
                  defaults: S || {},
                  targets: A && "nested" === A.data ? A.vars.targets : O,
                })).kill(),
              (o.parent = o._dp = u(a)),
              (o._start = 0),
              k || F(v) || F(y))
            ) {
              if (((f = O.length), (m = k && ot(k)), D(k)))
                for (d in k) ~Kt.indexOf(d) && (_ || (_ = {}), (_[d] = k[d]));
              for (l = 0; l < f; l++)
                ((s = Ce(n, Zt)).stagger = 0),
                  C && (s.yoyoEase = C),
                  _ && Se(s, _),
                  (h = O[l]),
                  (s.duration = +Xt(v, u(a), l, h, O)),
                  (s.delay = (+Xt(y, u(a), l, h, O) || 0) - a._delay),
                  !k &&
                    1 === f &&
                    s.delay &&
                    ((a._delay = y = s.delay), (a._start += y), (s.delay = 0)),
                  o.to(h, s, m ? m(l, h, O) : 0),
                  (o._ease = Ot.none);
              o.duration() ? (v = y = 0) : (a.timeline = 0);
            } else if (T) {
              Ae(Te(o.vars.defaults, { ease: "none" })),
                (o._ease = Dt(T.ease || n.ease || "none"));
              var P,
                M,
                L,
                R = 0;
              if (B(T))
                T.forEach(function (e) {
                  return o.to(O, e, ">");
                }),
                  o.duration();
              else {
                for (d in ((s = {}), T))
                  "ease" === d ||
                    "easeEach" === d ||
                    Gt(d, T[d], s, T.easeEach);
                for (d in s)
                  for (
                    P = s[d].sort(function (e, t) {
                      return e.t - t.t;
                    }),
                      R = 0,
                      l = 0;
                    l < P.length;
                    l++
                  )
                    ((L = {
                      ease: (M = P[l]).e,
                      duration: ((M.t - (l ? P[l - 1].t : 0)) / 100) * v,
                    })[d] = M.v),
                      o.to(O, L, R),
                      (R += L.duration);
                o.duration() < v && o.to({}, { duration: v - o.duration() });
              }
            }
            v || a.duration((v = o.duration()));
          } else a.timeline = 0;
          return (
            !0 !== x || c || ((Vt = u(a)), p.killTweensOf(O), (Vt = 0)),
            He(A, u(a), r),
            n.reversed && a.reverse(),
            n.paused && a.paused(!0),
            (b ||
              (!v &&
                !T &&
                a._start === ge(A._time) &&
                z(b) &&
                Re(u(a)) &&
                "nested" !== A.data)) &&
              ((a._tTime = -1e-8), a.render(Math.max(0, -y) || 0)),
            E && Ue(u(a), E),
            a
          );
        }
        s(t, e);
        var n = t.prototype;
        return (
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              l,
              u,
              s,
              c,
              d,
              p = this._time,
              h = this._tDur,
              m = this._dur,
              _ = e < 0,
              g = e > h - T && !_ ? h : e < T ? 0 : e;
            if (m) {
              if (
                g !== this._tTime ||
                !e ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== _)
              ) {
                if (((r = g), (c = this.timeline), this._repeat)) {
                  if (((o = m + this._rDelay), this._repeat < -1 && _))
                    return this.totalTime(100 * o + e, t, n);
                  if (
                    ((r = ge(g % o)),
                    g === h
                      ? ((a = this._repeat), (r = m))
                      : ((a = ~~(g / o)) && a === ge(g / o) && ((r = m), a--),
                        r > m && (r = m)),
                    (u = this._yoyo && 1 & a) &&
                      ((d = this._yEase), (r = m - r)),
                    (l = ze(this._tTime, o)),
                    r === p && !n && this._initted && a === l)
                  )
                    return (this._tTime = g), this;
                  a !== l &&
                    (c && this._yEase && Rt(c, u),
                    this.vars.repeatRefresh &&
                      !u &&
                      !this._lock &&
                      this._time !== o &&
                      this._initted &&
                      ((this._lock = n = 1),
                      (this.render(ge(o * a), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Ve(this, _ ? e : r, n, t, g))
                    return (this._tTime = 0), this;
                  if (
                    p !== this._time &&
                    (!n || !this.vars.repeatRefresh || a === l)
                  )
                    return this;
                  if (m !== this._dur) return this.render(e, t, n);
                }
                if (
                  ((this._tTime = g),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = s = (d || this._ease)(r / m)),
                  this._from && (this.ratio = s = 1 - s),
                  r &&
                    !p &&
                    !t &&
                    !a &&
                    (ht(this, "onStart"), this._tTime !== g))
                )
                  return this;
                for (i = this._pt; i; ) i.r(s, i.d), (i = i._next);
                (c &&
                  c.render(
                    e < 0 ? e : c._dur * c._ease(r / this._dur),
                    t,
                    n
                  )) ||
                  (this._startAt && (this._zTime = e)),
                  this._onUpdate &&
                    !t &&
                    (_ && Ne(this, e, 0, n), ht(this, "onUpdate")),
                  this._repeat &&
                    a !== l &&
                    this.vars.onRepeat &&
                    !t &&
                    this.parent &&
                    ht(this, "onRepeat"),
                  (g !== this._tDur && g) ||
                    this._tTime !== g ||
                    (_ && !this._onUpdate && Ne(this, e, 0, !0),
                    (e || !m) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      Me(this, 1),
                    t ||
                      (_ && !p) ||
                      !(g || p || u) ||
                      (ht(
                        this,
                        g === h ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(g < h && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (e, t, n, r) {
                var i,
                  a,
                  o,
                  l = e.ratio,
                  u =
                    t < 0 ||
                    (!t &&
                      ((!e._start && Ye(e) && (e._initted || !We(e))) ||
                        ((e._ts < 0 || e._dp._ts < 0) && !We(e))))
                      ? 0
                      : 1,
                  s = e._rDelay,
                  c = 0;
                if (
                  (s &&
                    e._repeat &&
                    ((c = Ze(0, e._tDur, t)),
                    (a = ze(c, s)),
                    e._yoyo && 1 & a && (u = 1 - u),
                    a !== ze(e._tTime, s) &&
                      ((l = 1 - u),
                      e.vars.repeatRefresh && e._initted && e.invalidate())),
                  u !== l || f || r || e._zTime === T || (!t && e._zTime))
                ) {
                  if (!e._initted && Ve(e, t, r, n, c)) return;
                  for (
                    o = e._zTime,
                      e._zTime = t || (n ? T : 0),
                      n || (n = t && !o),
                      e.ratio = u,
                      e._from && (u = 1 - u),
                      e._time = 0,
                      e._tTime = c,
                      i = e._pt;
                    i;

                  )
                    i.r(u, i.d), (i = i._next);
                  t < 0 && Ne(e, t, 0, !0),
                    e._onUpdate && !n && ht(e, "onUpdate"),
                    c && e._repeat && !n && e.parent && ht(e, "onRepeat"),
                    (t >= e._tDur || t < 0) &&
                      e.ratio === u &&
                      (u && Me(e, 1),
                      n ||
                        f ||
                        (ht(e, u ? "onComplete" : "onReverseComplete", !0),
                        e._prom && e._prom()));
                } else e._zTime || (e._zTime = t);
              })(this, e, t, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (t) {
            return (
              (!t || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(t),
              e.prototype.invalidate.call(this, t)
            );
          }),
          (n.resetTo = function (e, t, n, r, i) {
            b || Ct.wake(), this._ts || this.play();
            var a = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || qt(this, a),
              (function (e, t, n, r, i, a, o, l) {
                var u,
                  s,
                  c,
                  f,
                  d = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
                if (!d)
                  for (
                    d = e._ptCache[t] = [],
                      c = e._ptLookup,
                      f = e._targets.length;
                    f--;

                  ) {
                    if ((u = c[f][t]) && u.d && u.d._pt)
                      for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
                        u = u._next;
                    if (!u)
                      return (
                        (Yt = 1),
                        (e.vars[t] = "+=0"),
                        qt(e, o),
                        (Yt = 0),
                        l ? Z(t + " not eligible for reset") : 1
                      );
                    d.push(u);
                  }
                for (f = d.length; f--; )
                  ((u = (s = d[f])._pt || s).s =
                    (!r && 0 !== r) || i ? u.s + (r || 0) + a * u.c : r),
                    (u.c = n - u.s),
                    s.e && (s.e = _e(n) + Je(s.e)),
                    s.b && (s.b = u.s + Je(s.b));
              })(this, e, t, n, r, this._ease(a / this._dur), a, i)
                ? this.resetTo(e, t, n, r, 1)
                : (je(this, 0),
                  this.parent ||
                    Oe(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0))
            );
          }),
          (n.kill = function (e, t) {
            if ((void 0 === t && (t = "all"), !e && (!t || "all" === t)))
              return (this._lazy = this._pt = 0), this.parent ? mt(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(e, t, Vt && !0 !== Vt.vars.overwrite)
                  ._first || mt(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  $e(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              a,
              o,
              l,
              u,
              s,
              c = this._targets,
              f = e ? rt(e) : c,
              d = this._ptLookup,
              p = this._pt;
            if (
              (!t || "all" === t) &&
              (function (e, t) {
                for (
                  var n = e.length, r = n === t.length;
                  r && n-- && e[n] === t[n];

                );
                return n < 0;
              })(c, f)
            )
              return "all" === t && (this._pt = 0), mt(this);
            for (
              r = this._op = this._op || [],
                "all" !== t &&
                  (M(t) &&
                    ((l = {}),
                    me(t, function (e) {
                      return (l[e] = 1);
                    }),
                    (t = l)),
                  (t = (function (e, t) {
                    var n,
                      r,
                      i,
                      a,
                      o = e[0] ? pe(e[0]).harness : 0,
                      l = o && o.aliases;
                    if (!l) return t;
                    for (r in ((n = Se({}, t)), l))
                      if ((r in n))
                        for (i = (a = l[r].split(",")).length; i--; )
                          n[a[i]] = n[r];
                    return n;
                  })(c, t))),
                s = c.length;
              s--;

            )
              if (~f.indexOf(c[s]))
                for (l in ((i = d[s]),
                "all" === t
                  ? ((r[s] = t), (o = i), (a = {}))
                  : ((a = r[s] = r[s] || {}), (o = t)),
                o))
                  (u = i && i[l]) &&
                    (("kill" in u.d && !0 !== u.d.kill(l)) ||
                      Pe(this, u, "_pt"),
                    delete i[l]),
                    "all" !== a && (a[l] = 1);
            return this._initted && !this._pt && p && mt(this), this;
          }),
          (t.to = function (e, n) {
            return new t(e, n, arguments[2]);
          }),
          (t.from = function (e, t) {
            return Xe(1, arguments);
          }),
          (t.delayedCall = function (e, n, r, i) {
            return new t(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: e,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (t.fromTo = function (e, t, n) {
            return Xe(2, arguments);
          }),
          (t.set = function (e, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n)
            );
          }),
          (t.killTweensOf = function (e, t, n) {
            return p.killTweensOf(e, t, n);
          }),
          t
        );
      })(Ht);
      Te(Jt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        me("staggerTo,staggerFrom,staggerFromTo", function (e) {
          Jt[e] = function () {
            var t = new Ut(),
              n = et.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
            );
          };
        });
      var en = function (e, t, n) {
          return (e[t] = n);
        },
        tn = function (e, t, n) {
          return e[t](n);
        },
        nn = function (e, t, n, r) {
          return e[t](r.fp, n);
        },
        rn = function (e, t, n) {
          return e.setAttribute(t, n);
        },
        an = function (e, t) {
          return L(e[t]) ? tn : R(e[t]) && e.setAttribute ? rn : en;
        },
        on = function (e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
        },
        ln = function (e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t);
        },
        un = function (e, t) {
          var n = t._pt,
            r = "";
          if (!e && t.b) r = t.b;
          else if (1 === e && t.e) r = t.e;
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * e)
                  : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
                r),
                (n = n._next);
            r += t.c;
          }
          t.set(t.t, t.p, r, t);
        },
        sn = function (e, t) {
          for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
        },
        cn = function (e, t, n, r) {
          for (var i, a = this._pt; a; )
            (i = a._next), a.p === r && a.modifier(e, t, n), (a = i);
        },
        fn = function (e) {
          for (var t, n, r = this._pt; r; )
            (n = r._next),
              (r.p === e && !r.op) || r.op === e
                ? Pe(this, r, "_pt")
                : r.dep || (t = 1),
              (r = n);
          return !t;
        },
        dn = function (e, t, n, r) {
          r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
        },
        pn = function (e) {
          for (var t, n, r, i, a = e._pt; a; ) {
            for (t = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
            (a._prev = n ? n._prev : i) ? (a._prev._next = a) : (r = a),
              (a._next = n) ? (n._prev = a) : (i = a),
              (a = t);
          }
          e._pt = r;
        },
        hn = (function () {
          function e(e, t, n, r, i, a, o, l, u) {
            (this.t = t),
              (this.s = r),
              (this.c = i),
              (this.p = n),
              (this.r = a || on),
              (this.d = o || this),
              (this.set = l || en),
              (this.pr = u || 0),
              (this._next = e),
              e && (e._prev = this);
          }
          return (
            (e.prototype.modifier = function (e, t, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = dn),
                (this.m = e),
                (this.mt = n),
                (this.tween = t);
            }),
            e
          );
        })();
      me(
        fe +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (e) {
          return (ie[e] = 1);
        }
      ),
        (q.TweenMax = q.TweenLite = Jt),
        (q.TimelineLite = q.TimelineMax = Ut),
        (p = new Ut({
          sortChildren: !1,
          defaults: k,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (w.stringFilter = Et);
      var mn = [],
        _n = {},
        gn = [],
        vn = 0,
        yn = 0,
        bn = function (e) {
          return (_n[e] || gn).map(function (e) {
            return e();
          });
        },
        wn = function () {
          var e = Date.now(),
            t = [];
          e - vn > 2 &&
            (bn("matchMediaInit"),
            mn.forEach(function (e) {
              var n,
                r,
                i,
                a,
                o = e.queries,
                l = e.conditions;
              for (r in o)
                (n = h.matchMedia(o[r]).matches) && (i = 1),
                  n !== l[r] && ((l[r] = n), (a = 1));
              a && (e.revert(), i && t.push(e));
            }),
            bn("matchMediaRevert"),
            t.forEach(function (e) {
              return e.onMatch(e, function (t) {
                return e.add(null, t);
              });
            }),
            (vn = e),
            bn("matchMedia"));
        },
        kn = (function () {
          function e(e, t) {
            (this.selector = t && it(t)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = yn++),
              e && this.add(e);
          }
          var t = e.prototype;
          return (
            (t.add = function (e, t, n) {
              L(e) && ((n = t), (t = e), (e = L));
              var r = this,
                i = function () {
                  var e,
                    i = d,
                    a = r.selector;
                  return (
                    i && i !== r && i.data.push(r),
                    n && (r.selector = it(n)),
                    (d = r),
                    (e = t.apply(r, arguments)),
                    L(e) && r._r.push(e),
                    (d = i),
                    (r.selector = a),
                    (r.isReverted = !1),
                    e
                  );
                };
              return (
                (r.last = i),
                e === L
                  ? i(r, function (e) {
                      return r.add(null, e);
                    })
                  : e
                  ? (r[e] = i)
                  : i
              );
            }),
            (t.ignore = function (e) {
              var t = d;
              (d = null), e(this), (d = t);
            }),
            (t.getTweens = function () {
              var t = [];
              return (
                this.data.forEach(function (n) {
                  return n instanceof e
                    ? t.push.apply(t, n.getTweens())
                    : n instanceof Jt &&
                        !(n.parent && "nested" === n.parent.data) &&
                        t.push(n);
                }),
                t
              );
            }),
            (t.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (t.kill = function (e, t) {
              var n = this;
              if (
                (e
                  ? (function () {
                      for (var t, r = n.getTweens(), i = n.data.length; i--; )
                        "isFlip" === (t = n.data[i]).data &&
                          (t.revert(),
                          t.getChildren(!0, !0, !1).forEach(function (e) {
                            return r.splice(r.indexOf(e), 1);
                          }));
                      for (
                        r
                          .map(function (e) {
                            return {
                              g:
                                e._dur ||
                                e._delay ||
                                (e._sat && !e._sat.vars.immediateRender)
                                  ? e.globalTime(0)
                                  : -1 / 0,
                              t: e,
                            };
                          })
                          .sort(function (e, t) {
                            return t.g - e.g || -1 / 0;
                          })
                          .forEach(function (t) {
                            return t.t.revert(e);
                          }),
                          i = n.data.length;
                        i--;

                      )
                        (t = n.data[i]) instanceof Ut
                          ? "nested" !== t.data &&
                            (t.scrollTrigger && t.scrollTrigger.revert(),
                            t.kill())
                          : !(t instanceof Jt) && t.revert && t.revert(e);
                      n._r.forEach(function (t) {
                        return t(e, n);
                      }),
                        (n.isReverted = !0);
                    })()
                  : this.data.forEach(function (e) {
                      return e.kill && e.kill();
                    }),
                this.clear(),
                t)
              )
                for (var r = mn.length; r--; )
                  mn[r].id === this.id && mn.splice(r, 1);
            }),
            (t.revert = function (e) {
              this.kill(e || {});
            }),
            e
          );
        })(),
        xn = (function () {
          function e(e) {
            (this.contexts = []), (this.scope = e), d && d.data.push(this);
          }
          var t = e.prototype;
          return (
            (t.add = function (e, t, n) {
              D(e) || (e = { matches: e });
              var r,
                i,
                a,
                o = new kn(0, n || this.scope),
                l = (o.conditions = {});
              for (i in (d && !o.selector && (o.selector = d.selector),
              this.contexts.push(o),
              (t = o.add("onMatch", t)),
              (o.queries = e),
              e))
                "all" === i
                  ? (a = 1)
                  : (r = h.matchMedia(e[i])) &&
                    (mn.indexOf(o) < 0 && mn.push(o),
                    (l[i] = r.matches) && (a = 1),
                    r.addListener
                      ? r.addListener(wn)
                      : r.addEventListener("change", wn));
              return (
                a &&
                  t(o, function (e) {
                    return o.add(null, e);
                  }),
                this
              );
            }),
            (t.revert = function (e) {
              this.kill(e || {});
            }),
            (t.kill = function (e) {
              this.contexts.forEach(function (t) {
                return t.kill(e, !0);
              });
            }),
            e
          );
        })(),
        Tn = {
          registerPlugin: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            t.forEach(function (e) {
              return gt(e);
            });
          },
          timeline: function (e) {
            return new Ut(e);
          },
          getTweensOf: function (e, t) {
            return p.getTweensOf(e, t);
          },
          getProperty: function (e, t, n, r) {
            M(e) && (e = rt(e)[0]);
            var i = pe(e || {}).get,
              a = n ? xe : ke;
            return (
              "native" === n && (n = ""),
              e
                ? t
                  ? a(((le[t] && le[t].get) || i)(e, t, n, r))
                  : function (t, n, r) {
                      return a(((le[t] && le[t].get) || i)(e, t, n, r));
                    }
                : e
            );
          },
          quickSetter: function (e, t, n) {
            if ((e = rt(e)).length > 1) {
              var r = e.map(function (e) {
                  return Cn.quickSetter(e, t, n);
                }),
                i = r.length;
              return function (e) {
                for (var t = i; t--; ) r[t](e);
              };
            }
            e = e[0] || {};
            var a = le[t],
              o = pe(e),
              l = (o.harness && (o.harness.aliases || {})[t]) || t,
              u = a
                ? function (t) {
                    var r = new a();
                    (y._pt = 0),
                      r.init(e, n ? t + n : t, y, 0, [e]),
                      r.render(1, r),
                      y._pt && sn(1, y);
                  }
                : o.set(e, l);
            return a
              ? u
              : function (t) {
                  return u(e, l, n ? t + n : t, o, 1);
                };
          },
          quickTo: function (e, t, n) {
            var r,
              i = Cn.to(
                e,
                Se((((r = {})[t] = "+=0.1"), (r.paused = !0), r), n || {})
              ),
              a = function (e, n, r) {
                return i.resetTo(t, e, n, r);
              };
            return (a.tween = i), a;
          },
          isTweening: function (e) {
            return p.getTweensOf(e, !0).length > 0;
          },
          defaults: function (e) {
            return e && e.ease && (e.ease = Dt(e.ease, k.ease)), Ee(k, e || {});
          },
          config: function (e) {
            return Ee(w, e || {});
          },
          registerEffect: function (e) {
            var t = e.name,
              n = e.effect,
              r = e.plugins,
              i = e.defaults,
              a = e.extendTimeline;
            (r || "").split(",").forEach(function (e) {
              return (
                e &&
                !le[e] &&
                !q[e] &&
                Z(t + " effect requires " + e + " plugin.")
              );
            }),
              (ue[t] = function (e, t, r) {
                return n(rt(e), Te(t || {}, i), r);
              }),
              a &&
                (Ut.prototype[t] = function (e, n, r) {
                  return this.add(ue[t](e, D(n) ? n : (r = n) && {}, this), r);
                });
          },
          registerEase: function (e, t) {
            Ot[e] = Dt(t);
          },
          parseEase: function (e, t) {
            return arguments.length ? Dt(e, t) : Ot;
          },
          getById: function (e) {
            return p.getById(e);
          },
          exportRoot: function (e, t) {
            void 0 === e && (e = {});
            var n,
              r,
              i = new Ut(e);
            for (
              i.smoothChildTiming = z(e.smoothChildTiming),
                p.remove(i),
                i._dp = 0,
                i._time = i._tTime = p._time,
                n = p._first;
              n;

            )
              (r = n._next),
                (!t &&
                  !n._dur &&
                  n instanceof Jt &&
                  n.vars.onComplete === n._targets[0]) ||
                  He(i, n, n._start - n._delay),
                (n = r);
            return He(p, i, 0), i;
          },
          context: function (e, t) {
            return e ? new kn(e, t) : d;
          },
          matchMedia: function (e) {
            return new xn(e);
          },
          matchMediaRefresh: function () {
            return (
              mn.forEach(function (e) {
                var t,
                  n,
                  r = e.conditions;
                for (n in r) r[n] && ((r[n] = !1), (t = 1));
                t && e.revert();
              }) || wn()
            );
          },
          addEventListener: function (e, t) {
            var n = _n[e] || (_n[e] = []);
            ~n.indexOf(t) || n.push(t);
          },
          removeEventListener: function (e, t) {
            var n = _n[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1);
          },
          utils: {
            wrap: function e(t, n, r) {
              var i = n - t;
              return B(t)
                ? ct(t, e(0, t.length), n)
                : Ke(r, function (e) {
                    return ((i + ((e - t) % i)) % i) + t;
                  });
            },
            wrapYoyo: function e(t, n, r) {
              var i = n - t,
                a = 2 * i;
              return B(t)
                ? ct(t, e(0, t.length - 1), n)
                : Ke(r, function (e) {
                    return (
                      t + ((e = (a + ((e - t) % a)) % a || 0) > i ? a - e : e)
                    );
                  });
            },
            distribute: ot,
            random: st,
            snap: ut,
            normalize: function (e, t, n) {
              return dt(e, t, 0, 1, n);
            },
            getUnit: Je,
            clamp: function (e, t, n) {
              return Ke(n, function (n) {
                return Ze(e, t, n);
              });
            },
            splitColor: wt,
            toArray: rt,
            selector: it,
            mapRange: dt,
            pipe: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return function (e) {
                return t.reduce(function (e, t) {
                  return t(e);
                }, e);
              };
            },
            unitize: function (e, t) {
              return function (n) {
                return e(parseFloat(n)) + (t || Je(n));
              };
            },
            interpolate: function e(t, n, r, i) {
              var a = isNaN(t + n)
                ? 0
                : function (e) {
                    return (1 - e) * t + e * n;
                  };
              if (!a) {
                var o,
                  l,
                  u,
                  s,
                  c,
                  f = M(t),
                  d = {};
                if ((!0 === r && (i = 1) && (r = null), f))
                  (t = { p: t }), (n = { p: n });
                else if (B(t) && !B(n)) {
                  for (u = [], s = t.length, c = s - 2, l = 1; l < s; l++)
                    u.push(e(t[l - 1], t[l]));
                  s--,
                    (a = function (e) {
                      e *= s;
                      var t = Math.min(c, ~~e);
                      return u[t](e - t);
                    }),
                    (r = n);
                } else i || (t = Se(B(t) ? [] : {}, t));
                if (!u) {
                  for (o in n) $t.call(d, t, o, "get", n[o]);
                  a = function (e) {
                    return sn(e, d) || (f ? t.p : t);
                  };
                }
              }
              return Ke(r, a);
            },
            shuffle: at,
          },
          install: X,
          effects: ue,
          ticker: Ct,
          updateRoot: Ut.updateRoot,
          plugins: le,
          globalTimeline: p,
          core: {
            PropTween: hn,
            globals: J,
            Tween: Jt,
            Timeline: Ut,
            Animation: Ht,
            getCache: pe,
            _removeLinkedListItem: Pe,
            reverting: function () {
              return f;
            },
            context: function (e) {
              return e && d && (d.data.push(e), (e._ctx = d)), d;
            },
            suppressOverwrites: function (e) {
              return (c = e);
            },
          },
        };
      me("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
        return (Tn[e] = Jt[e]);
      }),
        Ct.add(Ut.updateRoot),
        (y = Tn.to({}, { duration: 0 }));
      var Sn = function (e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
            n = n._next;
          return n;
        },
        En = function (e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function (e, n, r) {
              r._onInit = function (e) {
                var r, i;
                if (
                  (M(n) &&
                    ((r = {}),
                    me(n, function (e) {
                      return (r[e] = 1);
                    }),
                    (n = r)),
                  t)
                ) {
                  for (i in ((r = {}), n)) r[i] = t(n[i]);
                  n = r;
                }
                !(function (e, t) {
                  var n,
                    r,
                    i,
                    a = e._targets;
                  for (n in t)
                    for (r = a.length; r--; )
                      (i = e._ptLookup[r][n]) &&
                        (i = i.d) &&
                        (i._pt && (i = Sn(i, n)),
                        i && i.modifier && i.modifier(t[n], e, a[r], n));
                })(e, n);
              };
            },
          };
        },
        Cn =
          Tn.registerPlugin(
            {
              name: "attr",
              init: function (e, t, n, r, i) {
                var a, o, l;
                for (a in ((this.tween = n), t))
                  (l = e.getAttribute(a) || ""),
                    ((o = this.add(
                      e,
                      "setAttribute",
                      (l || 0) + "",
                      t[a],
                      r,
                      i,
                      0,
                      0,
                      a
                    )).op = a),
                    (o.b = l),
                    this._props.push(a);
              },
              render: function (e, t) {
                for (var n = t._pt; n; )
                  f ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
              },
            },
            {
              name: "endArray",
              init: function (e, t) {
                for (var n = t.length; n--; )
                  this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
              },
            },
            En("roundProps", lt),
            En("modifiers"),
            En("snap", ut)
          ) || Tn;
      (Jt.version = Ut.version = Cn.version = "3.12.5"), (g = 1), I() && At();
      Ot.Power0,
        Ot.Power1,
        Ot.Power2,
        Ot.Power3,
        Ot.Power4,
        Ot.Linear,
        Ot.Quad,
        Ot.Cubic,
        Ot.Quart,
        Ot.Quint,
        Ot.Strong,
        Ot.Elastic,
        Ot.Back,
        Ot.SteppedEase,
        Ot.Bounce,
        Ot.Sine,
        Ot.Expo,
        Ot.Circ;
      var An,
        On,
        Pn,
        Mn,
        Ln,
        Nn,
        Rn,
        Dn,
        zn = {},
        In = 180 / Math.PI,
        Fn = Math.PI / 180,
        jn = Math.atan2,
        Bn = /([A-Z])/g,
        Hn = /(left|right|width|margin|padding|x)/i,
        Un = /[\s,\(]\S/,
        Vn = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        Yn = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        Wn = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        $n = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
            t
          );
        },
        Qn = function (e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        qn = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        Gn = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        Xn = function (e, t, n) {
          return (e.style[t] = n);
        },
        Kn = function (e, t, n) {
          return e.style.setProperty(t, n);
        },
        Zn = function (e, t, n) {
          return (e._gsap[t] = n);
        },
        Jn = function (e, t, n) {
          return (e._gsap.scaleX = e._gsap.scaleY = n);
        },
        er = function (e, t, n, r, i) {
          var a = e._gsap;
          (a.scaleX = a.scaleY = n), a.renderTransform(i, a);
        },
        tr = function (e, t, n, r, i) {
          var a = e._gsap;
          (a[t] = n), a.renderTransform(i, a);
        },
        nr = "transform",
        rr = nr + "Origin",
        ir = function e(t, n) {
          var r = this,
            i = this.target,
            a = i.style,
            o = i._gsap;
          if (t in zn && a) {
            if (((this.tfm = this.tfm || {}), "transform" === t))
              return Vn.transform.split(",").forEach(function (t) {
                return e.call(r, t, n);
              });
            if (
              (~(t = Vn[t] || t).indexOf(",")
                ? t.split(",").forEach(function (e) {
                    return (r.tfm[e] = kr(i, e));
                  })
                : (this.tfm[t] = o.x ? o[t] : kr(i, t)),
              t === rr && (this.tfm.zOrigin = o.zOrigin),
              this.props.indexOf(nr) >= 0)
            )
              return;
            o.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(rr, n, "")),
              (t = nr);
          }
          (a || n) && this.props.push(t, n, a[t]);
        },
        ar = function (e) {
          e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
        },
        or = function () {
          var e,
            t,
            n = this.props,
            r = this.target,
            i = r.style,
            a = r._gsap;
          for (e = 0; e < n.length; e += 3)
            n[e + 1]
              ? (r[n[e]] = n[e + 2])
              : n[e + 2]
              ? (i[n[e]] = n[e + 2])
              : i.removeProperty(
                  "--" === n[e].substr(0, 2)
                    ? n[e]
                    : n[e].replace(Bn, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (t in this.tfm) a[t] = this.tfm[t];
            a.svg &&
              (a.renderTransform(),
              r.setAttribute("data-svg-origin", this.svgo || "")),
              ((e = Rn()) && e.isStart) ||
                i[nr] ||
                (ar(i),
                a.zOrigin &&
                  i[rr] &&
                  ((i[rr] += " " + a.zOrigin + "px"),
                  (a.zOrigin = 0),
                  a.renderTransform()),
                (a.uncache = 1));
          }
        },
        lr = function (e, t) {
          var n = { target: e, props: [], revert: or, save: ir };
          return (
            e._gsap || Cn.core.getCache(e),
            t &&
              t.split(",").forEach(function (e) {
                return n.save(e);
              }),
            n
          );
        },
        ur = function (e, t) {
          var n = On.createElementNS
            ? On.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : On.createElement(e);
          return n && n.style ? n : On.createElement(e);
        },
        sr = function e(t, n, r) {
          var i = getComputedStyle(t);
          return (
            i[n] ||
            i.getPropertyValue(n.replace(Bn, "-$1").toLowerCase()) ||
            i.getPropertyValue(n) ||
            (!r && e(t, fr(n) || n, 1)) ||
            ""
          );
        },
        cr = "O,Moz,ms,Ms,Webkit".split(","),
        fr = function (e, t, n) {
          var r = (t || Ln).style,
            i = 5;
          if (e in r && !n) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            i-- && !(cr[i] + e in r);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? cr[i] : "") + e;
        },
        dr = function () {
          "undefined" !== typeof window &&
            window.document &&
            ((An = window),
            (On = An.document),
            (Pn = On.documentElement),
            (Ln = ur("div") || { style: {} }),
            ur("div"),
            (nr = fr(nr)),
            (rr = nr + "Origin"),
            (Ln.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (Dn = !!fr("perspective")),
            (Rn = Cn.core.reverting),
            (Mn = 1));
        },
        pr = function e(t) {
          var n,
            r = ur(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            a = this.nextSibling,
            o = this.style.cssText;
          if (
            (Pn.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (l) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            i && (a ? i.insertBefore(this, a) : i.appendChild(this)),
            Pn.removeChild(r),
            (this.style.cssText = o),
            n
          );
        },
        hr = function (e, t) {
          for (var n = t.length; n--; )
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
        },
        mr = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (n) {
            t = pr.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === pr ||
              (t = pr.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +hr(e, ["x", "cx", "x1"]) || 0,
                  y: +hr(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        _r = function (e) {
          return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !mr(e));
        },
        gr = function (e, t) {
          if (t) {
            var n,
              r = e.style;
            t in zn && t !== rr && (t = nr),
              r.removeProperty
                ? (("ms" !== (n = t.substr(0, 2)) &&
                    "webkit" !== t.substr(0, 6)) ||
                    (t = "-" + t),
                  r.removeProperty(
                    "--" === n ? t : t.replace(Bn, "-$1").toLowerCase()
                  ))
                : r.removeAttribute(t);
          }
        },
        vr = function (e, t, n, r, i, a) {
          var o = new hn(e._pt, t, n, 0, 1, a ? Gn : qn);
          return (e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o;
        },
        yr = { deg: 1, rad: 1, turn: 1 },
        br = { grid: 1, flex: 1 },
        wr = function e(t, n, r, i) {
          var a,
            o,
            l,
            u,
            s = parseFloat(r) || 0,
            c = (r + "").trim().substr((s + "").length) || "px",
            f = Ln.style,
            d = Hn.test(n),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (d ? "Width" : "Height"),
            m = 100,
            _ = "px" === i,
            g = "%" === i;
          if (i === c || !s || yr[i] || yr[c]) return s;
          if (
            ("px" !== c && !_ && (s = e(t, n, r, "px")),
            (u = t.getCTM && _r(t)),
            (g || "%" === c) && (zn[n] || ~n.indexOf("adius")))
          )
            return (
              (a = u ? t.getBBox()[d ? "width" : "height"] : t[h]),
              _e(g ? (s / a) * m : (s / 100) * a)
            );
          if (
            ((f[d ? "width" : "height"] = m + (_ ? c : i)),
            (o =
              ~n.indexOf("adius") || ("em" === i && t.appendChild && !p)
                ? t
                : t.parentNode),
            u && (o = (t.ownerSVGElement || {}).parentNode),
            (o && o !== On && o.appendChild) || (o = On.body),
            (l = o._gsap) &&
              g &&
              l.width &&
              d &&
              l.time === Ct.time &&
              !l.uncache)
          )
            return _e((s / l.width) * m);
          if (!g || ("height" !== n && "width" !== n))
            (g || "%" === c) &&
              !br[sr(o, "display")] &&
              (f.position = sr(t, "position")),
              o === t && (f.position = "static"),
              o.appendChild(Ln),
              (a = Ln[h]),
              o.removeChild(Ln),
              (f.position = "absolute");
          else {
            var v = t.style[n];
            (t.style[n] = m + i), (a = t[h]), v ? (t.style[n] = v) : gr(t, n);
          }
          return (
            d && g && (((l = pe(o)).time = Ct.time), (l.width = o[h])),
            _e(_ ? (a * s) / m : a && s ? (m / a) * s : 0)
          );
        },
        kr = function (e, t, n, r) {
          var i;
          return (
            Mn || dr(),
            t in Vn &&
              "transform" !== t &&
              ~(t = Vn[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            zn[t] && "transform" !== t
              ? ((i = Rr(e, r)),
                (i =
                  "transformOrigin" !== t
                    ? i[t]
                    : i.svg
                    ? i.origin
                    : Dr(sr(e, rr)) + " " + i.zOrigin + "px"))
              : (!(i = e.style[t]) ||
                  "auto" === i ||
                  r ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (Cr[t] && Cr[t](e, t, n)) ||
                  sr(e, t) ||
                  he(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            n && !~(i + "").trim().indexOf(" ") ? wr(e, t, i, n) + n : i
          );
        },
        xr = function (e, t, n, r) {
          if (!n || "none" === n) {
            var i = fr(t, e, 1),
              a = i && sr(e, i, 1);
            a && a !== n
              ? ((t = i), (n = a))
              : "borderColor" === t && (n = sr(e, "borderTopColor"));
          }
          var o,
            l,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            m,
            _,
            g = new hn(this._pt, e.style, t, 0, 1, un),
            v = 0,
            y = 0;
          if (
            ((g.b = n),
            (g.e = r),
            (n += ""),
            "auto" === (r += "") &&
              ((f = e.style[t]),
              (e.style[t] = r),
              (r = sr(e, t) || r),
              f ? (e.style[t] = f) : gr(e, t)),
            Et((o = [n, r])),
            (r = o[1]),
            (u = (n = o[0]).match(V) || []),
            (r.match(V) || []).length)
          ) {
            for (; (l = V.exec(r)); )
              (d = l[0]),
                (h = r.substring(v, l.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) ||
                    (c = 1),
                d !== (f = u[y++] || "") &&
                  ((s = parseFloat(f) || 0),
                  (_ = f.substr((s + "").length)),
                  "=" === d.charAt(1) && (d = ve(s, d) + _),
                  (p = parseFloat(d)),
                  (m = d.substr((p + "").length)),
                  (v = V.lastIndex - m.length),
                  m ||
                    ((m = m || w.units[t] || _),
                    v === r.length && ((r += m), (g.e += m))),
                  _ !== m && (s = wr(e, t, f, m) || 0),
                  (g._pt = {
                    _next: g._pt,
                    p: h || 1 === y ? h : ",",
                    s: s,
                    c: p - s,
                    m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            g.c = v < r.length ? r.substring(v, r.length) : "";
          } else g.r = "display" === t && "none" === r ? Gn : qn;
          return W.test(r) && (g.e = 0), (this._pt = g), g;
        },
        Tr = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        Sr = function (e) {
          var t = e.split(" "),
            n = t[0],
            r = t[1] || "50%";
          return (
            ("top" !== n && "bottom" !== n && "left" !== r && "right" !== r) ||
              ((e = n), (n = r), (r = e)),
            (t[0] = Tr[n] || n),
            (t[1] = Tr[r] || r),
            t.join(" ")
          );
        },
        Er = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n,
              r,
              i,
              a = t.t,
              o = a.style,
              l = t.u,
              u = a._gsap;
            if ("all" === l || !0 === l) (o.cssText = ""), (r = 1);
            else
              for (i = (l = l.split(",")).length; --i > -1; )
                (n = l[i]),
                  zn[n] && ((r = 1), (n = "transformOrigin" === n ? rr : nr)),
                  gr(a, n);
            r &&
              (gr(a, nr),
              u &&
                (u.svg && a.removeAttribute("transform"),
                Rr(a, 1),
                (u.uncache = 1),
                ar(o)));
          }
        },
        Cr = {
          clearProps: function (e, t, n, r, i) {
            if ("isFromStart" !== i.data) {
              var a = (e._pt = new hn(e._pt, t, n, 0, 0, Er));
              return (
                (a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1
              );
            }
          },
        },
        Ar = [1, 0, 0, 1, 0, 0],
        Or = {},
        Pr = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        Mr = function (e) {
          var t = sr(e, nr);
          return Pr(t) ? Ar : t.substr(7).match(U).map(_e);
        },
        Lr = function (e, t) {
          var n,
            r,
            i,
            a,
            o = e._gsap || pe(e),
            l = e.style,
            u = Mr(e);
          return o.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = e.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? Ar
              : u
            : (u !== Ar ||
                e.offsetParent ||
                e === Pn ||
                o.svg ||
                ((i = l.display),
                (l.display = "block"),
                ((n = e.parentNode) && e.offsetParent) ||
                  ((a = 1), (r = e.nextElementSibling), Pn.appendChild(e)),
                (u = Mr(e)),
                i ? (l.display = i) : gr(e, "display"),
                a &&
                  (r
                    ? n.insertBefore(e, r)
                    : n
                    ? n.appendChild(e)
                    : Pn.removeChild(e))),
              t && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        Nr = function (e, t, n, r, i, a) {
          var o,
            l,
            u,
            s = e._gsap,
            c = i || Lr(e, !0),
            f = s.xOrigin || 0,
            d = s.yOrigin || 0,
            p = s.xOffset || 0,
            h = s.yOffset || 0,
            m = c[0],
            _ = c[1],
            g = c[2],
            v = c[3],
            y = c[4],
            b = c[5],
            w = t.split(" "),
            k = parseFloat(w[0]) || 0,
            x = parseFloat(w[1]) || 0;
          n
            ? c !== Ar &&
              (l = m * v - _ * g) &&
              ((u = k * (-_ / l) + x * (m / l) - (m * b - _ * y) / l),
              (k = k * (v / l) + x * (-g / l) + (g * b - v * y) / l),
              (x = u))
            : ((k =
                (o = mr(e)).x + (~w[0].indexOf("%") ? (k / 100) * o.width : k)),
              (x =
                o.y +
                (~(w[1] || w[0]).indexOf("%") ? (x / 100) * o.height : x))),
            r || (!1 !== r && s.smooth)
              ? ((y = k - f),
                (b = x - d),
                (s.xOffset = p + (y * m + b * g) - y),
                (s.yOffset = h + (y * _ + b * v) - b))
              : (s.xOffset = s.yOffset = 0),
            (s.xOrigin = k),
            (s.yOrigin = x),
            (s.smooth = !!r),
            (s.origin = t),
            (s.originIsAbsolute = !!n),
            (e.style[rr] = "0px 0px"),
            a &&
              (vr(a, s, "xOrigin", f, k),
              vr(a, s, "yOrigin", d, x),
              vr(a, s, "xOffset", p, s.xOffset),
              vr(a, s, "yOffset", h, s.yOffset)),
            e.setAttribute("data-svg-origin", k + " " + x);
        },
        Rr = function (e, t) {
          var n = e._gsap || new Bt(e);
          if ("x" in n && !t && !n.uncache) return n;
          var r,
            i,
            a,
            o,
            l,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            m,
            _,
            g,
            v,
            y,
            b,
            k,
            x,
            T,
            S,
            E,
            C,
            A,
            O,
            P,
            M,
            L,
            N,
            R,
            D,
            z = e.style,
            I = n.scaleX < 0,
            F = "px",
            j = "deg",
            B = getComputedStyle(e),
            H = sr(e, rr) || "0";
          return (
            (r = i = a = u = s = c = f = d = p = 0),
            (o = l = 1),
            (n.svg = !(!e.getCTM || !_r(e))),
            B.translate &&
              (("none" === B.translate &&
                "none" === B.scale &&
                "none" === B.rotate) ||
                (z[nr] =
                  ("none" !== B.translate
                    ? "translate3d(" +
                      (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
                  ("none" !== B.scale
                    ? "scale(" + B.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== B[nr] ? B[nr] : "")),
              (z.scale = z.rotate = z.translate = "none")),
            (_ = Lr(e, n.svg)),
            n.svg &&
              (n.uncache
                ? ((A = e.getBBox()),
                  (H = n.xOrigin - A.x + "px " + (n.yOrigin - A.y) + "px"),
                  (C = ""))
                : (C = !t && e.getAttribute("data-svg-origin")),
              Nr(e, C || H, !!C || n.originIsAbsolute, !1 !== n.smooth, _)),
            (h = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            _ !== Ar &&
              ((b = _[0]),
              (k = _[1]),
              (x = _[2]),
              (T = _[3]),
              (r = S = _[4]),
              (i = E = _[5]),
              6 === _.length
                ? ((o = Math.sqrt(b * b + k * k)),
                  (l = Math.sqrt(T * T + x * x)),
                  (u = b || k ? jn(k, b) * In : 0),
                  (f = x || T ? jn(x, T) * In + u : 0) &&
                    (l *= Math.abs(Math.cos(f * Fn))),
                  n.svg &&
                    ((r -= h - (h * b + m * x)), (i -= m - (h * k + m * T))))
                : ((D = _[6]),
                  (N = _[7]),
                  (P = _[8]),
                  (M = _[9]),
                  (L = _[10]),
                  (R = _[11]),
                  (r = _[12]),
                  (i = _[13]),
                  (a = _[14]),
                  (s = (g = jn(D, L)) * In),
                  g &&
                    ((C = S * (v = Math.cos(-g)) + P * (y = Math.sin(-g))),
                    (A = E * v + M * y),
                    (O = D * v + L * y),
                    (P = S * -y + P * v),
                    (M = E * -y + M * v),
                    (L = D * -y + L * v),
                    (R = N * -y + R * v),
                    (S = C),
                    (E = A),
                    (D = O)),
                  (c = (g = jn(-x, L)) * In),
                  g &&
                    ((v = Math.cos(-g)),
                    (R = T * (y = Math.sin(-g)) + R * v),
                    (b = C = b * v - P * y),
                    (k = A = k * v - M * y),
                    (x = O = x * v - L * y)),
                  (u = (g = jn(k, b)) * In),
                  g &&
                    ((C = b * (v = Math.cos(g)) + k * (y = Math.sin(g))),
                    (A = S * v + E * y),
                    (k = k * v - b * y),
                    (E = E * v - S * y),
                    (b = C),
                    (S = A)),
                  s &&
                    Math.abs(s) + Math.abs(u) > 359.9 &&
                    ((s = u = 0), (c = 180 - c)),
                  (o = _e(Math.sqrt(b * b + k * k + x * x))),
                  (l = _e(Math.sqrt(E * E + D * D))),
                  (g = jn(S, E)),
                  (f = Math.abs(g) > 2e-4 ? g * In : 0),
                  (p = R ? 1 / (R < 0 ? -R : R) : 0)),
              n.svg &&
                ((C = e.getAttribute("transform")),
                (n.forceCSS =
                  e.setAttribute("transform", "") || !Pr(sr(e, nr))),
                C && e.setAttribute("transform", C))),
            Math.abs(f) > 90 &&
              Math.abs(f) < 270 &&
              (I
                ? ((o *= -1),
                  (f += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((l *= -1), (f += f <= 0 ? 180 : -180))),
            (t = t || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!t && n.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (e.offsetWidth * n.xPercent) / 100
                : 0) +
              F),
            (n.y =
              i -
              ((n.yPercent =
                i &&
                ((!t && n.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * n.yPercent) / 100
                : 0) +
              F),
            (n.z = a + F),
            (n.scaleX = _e(o)),
            (n.scaleY = _e(l)),
            (n.rotation = _e(u) + j),
            (n.rotationX = _e(s) + j),
            (n.rotationY = _e(c) + j),
            (n.skewX = f + j),
            (n.skewY = d + j),
            (n.transformPerspective = p + F),
            (n.zOrigin =
              parseFloat(H.split(" ")[2]) || (!t && n.zOrigin) || 0) &&
              (z[rr] = Dr(H)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = w.force3D),
            (n.renderTransform = n.svg ? Ur : Dn ? Hr : Ir),
            (n.uncache = 0),
            n
          );
        },
        Dr = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        zr = function (e, t, n) {
          var r = Je(t);
          return _e(parseFloat(t) + parseFloat(wr(e, "x", n + "px", r))) + r;
        },
        Ir = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            Hr(e, t);
        },
        Fr = "0deg",
        jr = "0px",
        Br = ") ",
        Hr = function (e, t) {
          var n = t || this,
            r = n.xPercent,
            i = n.yPercent,
            a = n.x,
            o = n.y,
            l = n.z,
            u = n.rotation,
            s = n.rotationY,
            c = n.rotationX,
            f = n.skewX,
            d = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            m = n.transformPerspective,
            _ = n.force3D,
            g = n.target,
            v = n.zOrigin,
            y = "",
            b = ("auto" === _ && e && 1 !== e) || !0 === _;
          if (v && (c !== Fr || s !== Fr)) {
            var w,
              k = parseFloat(s) * Fn,
              x = Math.sin(k),
              T = Math.cos(k);
            (k = parseFloat(c) * Fn),
              (w = Math.cos(k)),
              (a = zr(g, a, x * w * -v)),
              (o = zr(g, o, -Math.sin(k) * -v)),
              (l = zr(g, l, T * w * -v + v));
          }
          m !== jr && (y += "perspective(" + m + Br),
            (r || i) && (y += "translate(" + r + "%, " + i + "%) "),
            (b || a !== jr || o !== jr || l !== jr) &&
              (y +=
                l !== jr || b
                  ? "translate3d(" + a + ", " + o + ", " + l + ") "
                  : "translate(" + a + ", " + o + Br),
            u !== Fr && (y += "rotate(" + u + Br),
            s !== Fr && (y += "rotateY(" + s + Br),
            c !== Fr && (y += "rotateX(" + c + Br),
            (f === Fr && d === Fr) || (y += "skew(" + f + ", " + d + Br),
            (1 === p && 1 === h) || (y += "scale(" + p + ", " + h + Br),
            (g.style[nr] = y || "translate(0, 0)");
        },
        Ur = function (e, t) {
          var n,
            r,
            i,
            a,
            o,
            l = t || this,
            u = l.xPercent,
            s = l.yPercent,
            c = l.x,
            f = l.y,
            d = l.rotation,
            p = l.skewX,
            h = l.skewY,
            m = l.scaleX,
            _ = l.scaleY,
            g = l.target,
            v = l.xOrigin,
            y = l.yOrigin,
            b = l.xOffset,
            w = l.yOffset,
            k = l.forceCSS,
            x = parseFloat(c),
            T = parseFloat(f);
          (d = parseFloat(d)),
            (p = parseFloat(p)),
            (h = parseFloat(h)) && ((p += h = parseFloat(h)), (d += h)),
            d || p
              ? ((d *= Fn),
                (p *= Fn),
                (n = Math.cos(d) * m),
                (r = Math.sin(d) * m),
                (i = Math.sin(d - p) * -_),
                (a = Math.cos(d - p) * _),
                p &&
                  ((h *= Fn),
                  (o = Math.tan(p - h)),
                  (i *= o = Math.sqrt(1 + o * o)),
                  (a *= o),
                  h &&
                    ((o = Math.tan(h)),
                    (n *= o = Math.sqrt(1 + o * o)),
                    (r *= o))),
                (n = _e(n)),
                (r = _e(r)),
                (i = _e(i)),
                (a = _e(a)))
              : ((n = m), (a = _), (r = i = 0)),
            ((x && !~(c + "").indexOf("px")) ||
              (T && !~(f + "").indexOf("px"))) &&
              ((x = wr(g, "x", c, "px")), (T = wr(g, "y", f, "px"))),
            (v || y || b || w) &&
              ((x = _e(x + v - (v * n + y * i) + b)),
              (T = _e(T + y - (v * r + y * a) + w))),
            (u || s) &&
              ((o = g.getBBox()),
              (x = _e(x + (u / 100) * o.width)),
              (T = _e(T + (s / 100) * o.height))),
            (o =
              "matrix(" +
              n +
              "," +
              r +
              "," +
              i +
              "," +
              a +
              "," +
              x +
              "," +
              T +
              ")"),
            g.setAttribute("transform", o),
            k && (g.style[nr] = o);
        },
        Vr = function (e, t, n, r, i) {
          var a,
            o,
            l = 360,
            u = M(i),
            s = parseFloat(i) * (u && ~i.indexOf("rad") ? In : 1) - r,
            c = r + s + "deg";
          return (
            u &&
              ("short" === (a = i.split("_")[1]) &&
                (s %= l) !== s % 180 &&
                (s += s < 0 ? l : -360),
              "cw" === a && s < 0
                ? (s = ((s + 36e9) % l) - ~~(s / l) * l)
                : "ccw" === a &&
                  s > 0 &&
                  (s = ((s - 36e9) % l) - ~~(s / l) * l)),
            (e._pt = o = new hn(e._pt, t, n, r, s, Wn)),
            (o.e = c),
            (o.u = "deg"),
            e._props.push(n),
            o
          );
        },
        Yr = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        Wr = function (e, t, n) {
          var r,
            i,
            a,
            o,
            l,
            u,
            s,
            c = Yr({}, n._gsap),
            f = n.style;
          for (i in (c.svg
            ? ((a = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (f[nr] = t),
              (r = Rr(n, 1)),
              gr(n, nr),
              n.setAttribute("transform", a))
            : ((a = getComputedStyle(n)[nr]),
              (f[nr] = t),
              (r = Rr(n, 1)),
              (f[nr] = a)),
          zn))
            (a = c[i]) !== (o = r[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((l = Je(a) !== (s = Je(o)) ? wr(n, i, a, s) : parseFloat(a)),
              (u = parseFloat(o)),
              (e._pt = new hn(e._pt, r, i, l, u - l, Yn)),
              (e._pt.u = s || 0),
              e._props.push(i));
          Yr(r, c);
        };
      me("padding,margin,Width,Radius", function (e, t) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          a = "Left",
          o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(
            function (n) {
              return t < 2 ? e + n : "border" + n + e;
            }
          );
        Cr[t > 1 ? "border" + e : e] = function (e, t, n, r, i) {
          var a, l;
          if (arguments.length < 4)
            return (
              (a = o.map(function (t) {
                return kr(e, t, n);
              })),
              5 === (l = a.join(" ")).split(a[0]).length ? a[0] : l
            );
          (a = (r + "").split(" ")),
            (l = {}),
            o.forEach(function (e, t) {
              return (l[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
            }),
            e.init(t, l, i);
        };
      });
      var $r = {
        name: "css",
        register: dr,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, n, r, i) {
          var a,
            o,
            l,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            m,
            _,
            g,
            v,
            y,
            b,
            k = this._props,
            x = e.style,
            T = n.vars.startAt;
          for (f in (Mn || dr(),
          (this.styles = this.styles || lr(e)),
          (b = this.styles.props),
          (this.tween = n),
          t))
            if (
              "autoRound" !== f &&
              ((o = t[f]), !le[f] || !Qt(f, t, n, r, e, i))
            )
              if (
                ((s = typeof o),
                (c = Cr[f]),
                "function" === s && (s = typeof (o = o.call(n, r, e, i))),
                "string" === s && ~o.indexOf("random(") && (o = ft(o)),
                c)
              )
                c(this, e, f, o, n) && (y = 1);
              else if ("--" === f.substr(0, 2))
                (a = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
                  (o += ""),
                  (Tt.lastIndex = 0),
                  Tt.test(a) || ((d = Je(a)), (p = Je(o))),
                  p ? d !== p && (a = wr(e, f, a, p) + p) : d && (o += d),
                  this.add(x, "setProperty", a, o, r, i, 0, 0, f),
                  k.push(f),
                  b.push(f, 0, x[f]);
              else if ("undefined" !== s) {
                if (
                  (T && f in T
                    ? ((a =
                        "function" === typeof T[f]
                          ? T[f].call(n, r, e, i)
                          : T[f]),
                      M(a) && ~a.indexOf("random(") && (a = ft(a)),
                      Je(a + "") ||
                        "auto" === a ||
                        (a += w.units[f] || Je(kr(e, f)) || ""),
                      "=" === (a + "").charAt(1) && (a = kr(e, f)))
                    : (a = kr(e, f)),
                  (u = parseFloat(a)),
                  (h =
                    "string" === s && "=" === o.charAt(1) && o.substr(0, 2)) &&
                    (o = o.substr(2)),
                  (l = parseFloat(o)),
                  f in Vn &&
                    ("autoAlpha" === f &&
                      (1 === u &&
                        "hidden" === kr(e, "visibility") &&
                        l &&
                        (u = 0),
                      b.push("visibility", 0, x.visibility),
                      vr(
                        this,
                        x,
                        "visibility",
                        u ? "inherit" : "hidden",
                        l ? "inherit" : "hidden",
                        !l
                      )),
                    "scale" !== f &&
                      "transform" !== f &&
                      ~(f = Vn[f]).indexOf(",") &&
                      (f = f.split(",")[0])),
                  (m = f in zn))
                )
                  if (
                    (this.styles.save(f),
                    _ ||
                      (((g = e._gsap).renderTransform && !t.parseTransform) ||
                        Rr(e, t.parseTransform),
                      (v = !1 !== t.smoothOrigin && g.smooth),
                      ((_ = this._pt =
                        new hn(
                          this._pt,
                          x,
                          nr,
                          0,
                          1,
                          g.renderTransform,
                          g,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === f)
                  )
                    (this._pt = new hn(
                      this._pt,
                      g,
                      "scaleY",
                      g.scaleY,
                      (h ? ve(g.scaleY, h + l) : l) - g.scaleY || 0,
                      Yn
                    )),
                      (this._pt.u = 0),
                      k.push("scaleY", f),
                      (f += "X");
                  else {
                    if ("transformOrigin" === f) {
                      b.push(rr, 0, x[rr]),
                        (o = Sr(o)),
                        g.svg
                          ? Nr(e, o, 0, v, 0, this)
                          : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                              g.zOrigin && vr(this, g, "zOrigin", g.zOrigin, p),
                            vr(this, x, f, Dr(a), Dr(o)));
                      continue;
                    }
                    if ("svgOrigin" === f) {
                      Nr(e, o, 1, v, 0, this);
                      continue;
                    }
                    if (f in Or) {
                      Vr(this, g, f, u, h ? ve(u, h + o) : o);
                      continue;
                    }
                    if ("smoothOrigin" === f) {
                      vr(this, g, "smooth", g.smooth, o);
                      continue;
                    }
                    if ("force3D" === f) {
                      g[f] = o;
                      continue;
                    }
                    if ("transform" === f) {
                      Wr(this, o, e);
                      continue;
                    }
                  }
                else f in x || (f = fr(f) || f);
                if (
                  m ||
                  ((l || 0 === l) && (u || 0 === u) && !Un.test(o) && f in x)
                )
                  l || (l = 0),
                    (d = (a + "").substr((u + "").length)) !==
                      (p = Je(o) || (f in w.units ? w.units[f] : d)) &&
                      (u = wr(e, f, a, p)),
                    (this._pt = new hn(
                      this._pt,
                      m ? g : x,
                      f,
                      u,
                      (h ? ve(u, h + l) : l) - u,
                      m || ("px" !== p && "zIndex" !== f) || !1 === t.autoRound
                        ? Yn
                        : Qn
                    )),
                    (this._pt.u = p || 0),
                    d !== p &&
                      "%" !== p &&
                      ((this._pt.b = a), (this._pt.r = $n));
                else if (f in x) xr.call(this, e, f, a, h ? h + o : o);
                else if (f in e) this.add(e, f, a || e[f], h ? h + o : o, r, i);
                else if ("parseTransform" !== f) {
                  K(f, o);
                  continue;
                }
                m || (f in x ? b.push(f, 0, x[f]) : b.push(f, 1, a || e[f])),
                  k.push(f);
              }
          y && pn(this);
        },
        render: function (e, t) {
          if (t.tween._time || !Rn())
            for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
          else t.styles.revert();
        },
        get: kr,
        aliases: Vn,
        getSetter: function (e, t, n) {
          var r = Vn[t];
          return (
            r && r.indexOf(",") < 0 && (t = r),
            t in zn && t !== rr && (e._gsap.x || kr(e, "x"))
              ? n && Nn === n
                ? "scale" === t
                  ? Jn
                  : Zn
                : (Nn = n || {}) && ("scale" === t ? er : tr)
              : e.style && !R(e.style[t])
              ? Xn
              : ~t.indexOf("-")
              ? Kn
              : an(e, t)
          );
        },
        core: { _removeProperty: gr, _getMatrix: Lr },
      };
      (Cn.utils.checkPrefix = fr),
        (Cn.core.getStyleSaver = lr),
        (function (e, t, n, r) {
          var i = me(
            e +
              "," +
              t +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (e) {
              zn[e] = 1;
            }
          );
          me(t, function (e) {
            (w.units[e] = "deg"), (Or[e] = 1);
          }),
            (Vn[i[13]] = e + "," + t),
            me(
              "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
              function (e) {
                var t = e.split(":");
                Vn[t[1]] = i[t[0]];
              }
            );
        })(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
          "rotation,rotationX,rotationY,skewX,skewY"
        ),
        me(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            w.units[e] = "px";
          }
        ),
        Cn.registerPlugin($r);
      var Qr = Cn.registerPlugin($r) || Cn;
      Qr.core.Tween;
      const {
          keyCodes: { keys: qr, names: Gr },
        } = window.translation,
        Xr = (t) => {
          let { clickHandler: n } = t;
          const r = (0, e.useCallback)(
            (e) => {
              !e.repeat && qr[e.keyCode] && n(qr[e.keyCode]);
            },
            [n]
          );
          return (
            (0, e.useEffect)(
              () => (
                window.addEventListener("keydown", r),
                () => {
                  window.removeEventListener("keydown", r);
                }
              ),
              [r]
            ),
            null
          );
        },
        Kr = (e) => Gr[e],
        Zr = (t) => {
          let { clickHandler: n } = t;
          const {
              state: { isActiveButton: i },
            } = (0, e.useContext)(a),
            o = (0, e.useRef)(null),
            l = (0, e.useRef)(null),
            u = Qr.timeline(),
            s = Qr.timeline(),
            c = (e) => {
              "bass" === e &&
                (Qr.killTweensOf(o.current),
                n(e),
                u
                  .to(o.current, 0.05, { transform: "translateY(10%)" })
                  .to(o.current, 0.05, { transform: "translateY(0%)" }),
                s
                  .to(l.current, 0.08, {
                    bottom: "-5%",
                    transform: "rotateX(30deg)",
                    right: "3%",
                  })
                  .to(l.current, 0.08, {
                    bottom: "0",
                    height: "50%",
                    transform: "rotateX(0deg)",
                    right: "5%",
                  }));
            };
          return (0, r.jsxs)("div", {
            className: "bass",
            onMouseDown: () => {
              c("bass");
            },
            onTouchStart: () => {
              c("bass");
            },
            onTouchEnd: (e) => e.preventDefault(),
            children: [
              (0, r.jsx)(Xr, { clickHandler: c }),
              (0, r.jsxs)("div", {
                className: "bass-pedal-wrapper",
                children: [
                  (0, r.jsx)("div", { className: "head", ref: o }),
                  (0, r.jsx)("div", { className: "pedal", ref: l }),
                ],
              }),
              i &&
                (0, r.jsx)("span", {
                  className: "shortcut-name",
                  children: Kr("bass"),
                }),
            ],
          });
        },
        {
          button_text: { show: Jr, hide: ei, sound: ti },
        } = window.translation,
        ni = Object.keys(ti).filter((e) => "default" !== e),
        ri = () => {
          const {
              dispatch: t,
              state: { isActiveButton: n },
            } = (0, e.useContext)(a),
            [i, o] = (0, e.useState)(!1),
            [l, u] = (0, e.useState)("default"),
            [s, c] = (0, e.useState)(0);
          return (0, r.jsxs)("div", {
            className: "buttons-module",
            children: [
              (0, r.jsxs)("nav", {
                className: "dropdown",
                onMouseEnter: () => o(!0),
                onMouseLeave: () => o(!1),
                children: [
                  (0, r.jsx)("button", {
                    onClick: () => {
                      o(!0);
                    },
                    children: ti[l],
                  }),
                  (0, r.jsx)("ul", {
                    className: !0 === i ? "active" : "",
                    children: ni.map((e, n) =>
                      (0, r.jsx)(
                        "li",
                        {
                          className: s === n ? "active" : "",
                          onClick: () => {
                            t({ type: "CHANGE_SOUND", soundType: e }),
                              u(e),
                              c(n),
                              o(!1);
                          },
                          children: ti[e],
                        },
                        n
                      )
                    ),
                  }),
                ],
              }),
              (0, r.jsx)("button", {
                onClick: () => {
                  t({ type: "TOGGLE_BUTTON" });
                },
                children: n ? ei : Jr,
              }),
            ],
          });
        },
        ii = (t) => {
          let { clickHandler: n } = t;
          const {
              state: { isActiveButton: i },
            } = (0, e.useContext)(a),
            o = (e) => {
              [
                "snareRight",
                "snareLeft",
                "snareLeftCrossStick",
                "snareRightCrossStick",
              ].includes(e) && n(e);
            };
          return (0, r.jsxs)("div", {
            className: "snare",
            children: [
              (0, r.jsx)(Xr, { clickHandler: o }),
              (0, r.jsx)("div", {
                className: "drum",
                onMouseDown: () => {
                  o("snareRight");
                },
                onTouchStart: () => {
                  o("snareRight");
                },
                onTouchEnd: (e) => e.preventDefault(),
                children:
                  i &&
                  (0, r.jsx)("span", {
                    className: "shortcut-name",
                    children: Kr("snareRight"),
                  }),
              }),
              (0, r.jsx)("div", {
                className: "cross",
                onMouseDown: () => {
                  o("snareRightCrossStick");
                },
                onTouchStart: () => {
                  o("snareRightCrossStick");
                },
                onTouchEnd: (e) => e.preventDefault(),
                children:
                  i &&
                  (0, r.jsx)("span", {
                    className: "shortcut-name",
                    children: Kr("snareRightCrossStick"),
                  }),
              }),
            ],
          });
        },
        ai = (t) => {
          let { clickHandler: n } = t;
          const {
              state: { isActiveButton: i },
            } = (0, e.useContext)(a),
            o = (e) => {
              "floor" === e && n(e);
            };
          return (0, r.jsxs)("div", {
            className: "floor",
            onMouseDown: () => {
              o("floor");
            },
            onTouchStart: () => {
              o("floor");
            },
            onTouchEnd: (e) => e.preventDefault(),
            children: [
              (0, r.jsx)(Xr, { clickHandler: o }),
              i &&
                (0, r.jsx)("span", {
                  className: "shortcut-name",
                  children: Kr("floor"),
                }),
            ],
          });
        },
        oi = (t) => {
          let { clickHandler: n } = t;
          const {
              state: { isActiveButton: i },
            } = (0, e.useContext)(a),
            o = (0, e.useRef)(null),
            l = (0, e.useRef)(null),
            u = (0, e.useRef)(null),
            s = Qr.timeline(),
            c = Qr.timeline(),
            f = Qr.timeline(),
            d = (e) => {
              "hihatRight" === e || "hihatLeft" === e
                ? (Qr.killTweensOf(o.current),
                  s
                    .to(o.current, 0.1, {
                      transform: "rotate(2.25deg) translateY(0%)",
                      filter: "brightness(1.05)",
                    })
                    .to(o.current, 0.1, { transform: "rotate(-1.5deg)" })
                    .to(o.current, 0.1, { transform: "rotate(2deg)" })
                    .to(o.current, 0.1, {
                      transform: "rotate(.5deg)",
                      filter: "brightness(1)",
                    })
                    .to(o.current, 0.1, {
                      transform: "rotate(0) translateY(0%)",
                    }),
                  c.to(l.current, 0.1, {
                    transform: "translateY(0%) rotate(0)",
                    height: "100%",
                    marginLeft: 0,
                  }),
                  f.to(u.current, 0.05, { transform: "translateY(0%)" }),
                  n(e))
                : "hihatLeftClosed" === e || "hihatRightClosed" === e
                ? (Qr.killTweensOf(o.current),
                  s
                    .to(o.current, 0.1, {
                      transform: "translateY(1%)",
                      filter: "brightness(1.125)",
                    })
                    .to(o.current, 0.2, { filter: "brightness(1)" }),
                  c.to(l.current, 0.08, {
                    transform: "translateY(5%) rotate(-10deg)",
                    height: "76%",
                    marginTop: 2,
                  }),
                  f.to(u.current, 0.05, { transform: "translateY(10%)" }),
                  n(e))
                : "hihatFoot" === e &&
                  (Qr.killTweensOf(o.current),
                  s
                    .to(o.current, {
                      transform: "translateY(0%)",
                      duration: 0.05,
                    })
                    .to(o.current, {
                      transform: "translateY(1%)",
                      duration: 0.05,
                    }),
                  c
                    .to(l.current, {
                      transform: "translateY(0%) rotate(0)",
                      height: "100%",
                      marginLeft: 0,
                      duration: 0.05,
                    })
                    .to(l.current, {
                      transform: "translateY(5%) rotate(-10deg)",
                      height: "76%",
                      marginTop: 2,
                      duration: 0.05,
                    }),
                  f
                    .to(u.current, {
                      transform: "translateY(0%)",
                      duration: 0.05,
                    })
                    .to(u.current, {
                      transform: "translateY(10%)",
                      duration: 0.05,
                    }),
                  n(e));
            };
          return (0, r.jsxs)("div", {
            className: "hihat",
            children: [
              (0, r.jsx)(Xr, { clickHandler: d }),
              (0, r.jsx)("div", { className: "hihat-cymbal", ref: o }),
              (0, r.jsxs)("div", {
                className: "drum",
                children: [
                  (0, r.jsx)("div", {
                    onMouseDown: () => {
                      d("hihatRight");
                    },
                    onTouchStart: () => {
                      d("hihatRight");
                    },
                    onTouchEnd: (e) => e.preventDefault(),
                    children:
                      i &&
                      (0, r.jsx)("span", {
                        className: "shortcut-name",
                        children: Kr("hihatRight"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                    onMouseDown: () => {
                      d("hihatRightClosed");
                    },
                    onTouchStart: () => {
                      d("hihatRightClosed");
                    },
                    onTouchEnd: (e) => e.preventDefault(),
                    children:
                      i &&
                      (0, r.jsx)("span", {
                        className: "shortcut-name shortcut-bottom",
                        children: Kr("hihatRightClosed"),
                      }),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "pedal-wrapper",
                onMouseDown: () => {
                  d("hihatFoot");
                },
                onTouchStart: () => {
                  d("hihatFoot");
                },
                onTouchEnd: (e) => e.preventDefault(),
                children: [
                  (0, r.jsx)("div", { className: "chain", ref: u }),
                  (0, r.jsx)("div", { className: "pedal", ref: l }),
                  i &&
                    (0, r.jsx)("span", {
                      className: "shortcut-name",
                      children: Kr("hihatFoot"),
                    }),
                ],
              }),
            ],
          });
        },
        li = (t) => {
          let { clickHandler: n } = t;
          const {
              state: { isActiveButton: i },
            } = (0, e.useContext)(a),
            o = (e) => {
              "tom1" === e && n(e);
            };
          return (0, r.jsxs)("div", {
            className: "tom-1",
            onMouseDown: () => {
              o("tom1");
            },
            onTouchStart: () => {
              o("tom1");
            },
            onTouchEnd: (e) => e.preventDefault(),
            children: [
              (0, r.jsx)(Xr, { clickHandler: o }),
              i &&
                (0, r.jsx)("span", {
                  className: "shortcut-name",
                  children: Kr("tom1"),
                }),
            ],
          });
        },
        ui = (t) => {
          let { clickHandler: n } = t;
          const {
              state: { isActiveButton: i },
            } = (0, e.useContext)(a),
            o = (e) => {
              "tom2" === e && n(e);
            };
          return (0, r.jsxs)("div", {
            className: "tom-2",
            onMouseDown: () => {
              o("tom2");
            },
            onTouchStart: () => {
              o("tom2");
            },
            onTouchEnd: (e) => e.preventDefault(),
            children: [
              (0, r.jsx)(Xr, { clickHandler: o }),
              i &&
                (0, r.jsx)("span", {
                  className: "shortcut-name",
                  children: Kr("tom2"),
                }),
            ],
          });
        },
        si = (t) => {
          let { clickHandler: n } = t;
          const {
              state: { isActiveButton: i },
            } = (0, e.useContext)(a),
            o = (0, e.useRef)(null),
            l = (0, e.useRef)(null),
            u = (e, t) => {
              if ("crash" === e) {
                Qr.killTweensOf(o.current), Qr.killTweensOf(l.current), n(e);
                let t = Qr.timeline(),
                  r = Qr.timeline();
                t
                  .to(o.current, {
                    transform: "scaleY(1.3) rotate(1deg)",
                    filter: "brightness(1.05)",
                    duration: 0.1,
                  })
                  .to(o.current, {
                    transform: "scaleY(.8)",
                    opacity: 0,
                    duration: 0.1,
                  })
                  .to(o.current, {
                    transform: "scaleY(1.25) rotate(-3deg)",
                    opacity: 1,
                    duration: 0.2,
                  })
                  .to(o.current, {
                    transform: "scaleY(.85)",
                    filter: "brightness(1.04)",
                    opacity: 0,
                    duration: 0.2,
                  })
                  .to(o.current, {
                    transform: "scaleY(1.2) rotate(0)",
                    opacity: 1,
                    duration: 0.2,
                  })
                  .to(o.current, {
                    transform: "scaleY(.9)",
                    filter: "brightness(1.03)",
                    opacity: 0,
                    duration: 0.2,
                  })
                  .to(o.current, {
                    transform: "scaleY(1.12) rotate(-2deg)",
                    opacity: 1,
                    duration: 0.2,
                  })
                  .to(o.current, {
                    transform: "scaleY(.95)",
                    filter: "brightness(1.02)",
                    opacity: 0,
                    duration: 0.2,
                  })
                  .to(o.current, {
                    filter: "brightness(1)",
                    opacity: 1,
                    duration: 0.1,
                  })
                  .to(o.current, {
                    transform: "scaleY(1.05) rotate(-1deg)",
                    duration: 0.1,
                  })
                  .to(o.current, {
                    transform: "scaleY(1) rotate(0deg)",
                    opacity: 1,
                    duration: 0.1,
                  }),
                  r
                    .to(l.current, {
                      transform: "scaleY(1.3) rotate(1deg)",
                      filter: "brightness(1.05)",
                      duration: 0.1,
                    })
                    .to(l.current, { transform: "scaleY(.8)", duration: 0.1 })
                    .to(l.current, {
                      transform: "scaleY(1.25) rotate(-3deg)",
                      duration: 0.2,
                    })
                    .to(l.current, {
                      transform: "scaleY(.85)",
                      filter: "brightness(1.04)",
                      duration: 0.2,
                    })
                    .to(l.current, {
                      transform: "scaleY(1.2) rotate(0)",
                      duration: 0.2,
                    })
                    .to(l.current, {
                      transform: "scaleY(.9)",
                      filter: "brightness(1.03)",
                      duration: 0.2,
                    })
                    .to(l.current, {
                      transform: "scaleY(1.12) rotate(-2deg)",
                      duration: 0.2,
                    })
                    .to(l.current, {
                      transform: "scaleY(.95)",
                      filter: "brightness(1.02)",
                      duration: 0.2,
                    })
                    .to(l.current, { filter: "brightness(1)", duration: 0.1 })
                    .to(l.current, {
                      transform: "scaleY(1.05) rotate(-1deg)",
                      duration: 0.1,
                    })
                    .to(l.current, {
                      transform: "scaleY(1) rotate(0deg)",
                      duration: 0.1,
                    });
              }
            };
          return (0, r.jsxs)("div", {
            className: "crash",
            children: [
              i &&
                (0, r.jsx)("span", {
                  className: "shortcut-name",
                  children: Kr("crash"),
                }),
              (0, r.jsx)(Xr, { clickHandler: u }),
              (0, r.jsx)("span", { className: "fixator" }),
              (0, r.jsx)("div", { className: "--crash-flicker", ref: l }),
              (0, r.jsx)("div", { className: "--crash-cymbal", ref: o }),
              (0, r.jsx)("div", {
                className: "--crash-click-area",
                onMouseDown: () => {
                  u("crash");
                },
                onTouchStart: () => {
                  u("crash");
                },
                onTouchEnd: (e) => e.preventDefault(),
              }),
            ],
          });
        },
        ci = (t) => {
          let { clickHandler: n } = t;
          const {
              state: { isActiveButton: i },
            } = (0, e.useContext)(a),
            o = (0, e.useRef)(null);
          let l = Qr.timeline();
          const u = (e) => {
            "ride" === e &&
              (Qr.killTweensOf(o.current),
              n(e),
              l
                .to(o.current, {
                  transform: "scaleY(1.1)",
                  filter: "brightness(1.05)",
                  duration: 0.2,
                })
                .to(o.current, { transform: "scaleY(0.9)", duration: 0.2 })
                .to(o.current, {
                  transform: "scaleY(1.03)",
                  filter: "brightness(1)",
                  duration: 0.2,
                })
                .to(o.current, { transform: "scaleY(0.97)", duration: 0.2 })
                .to(o.current, { transform: "scaleY(1.02)", duration: 0.2 })
                .to(o.current, { transform: "scaleY(0.98)", duration: 0.2 })
                .to(o.current, { transform: "scaleY(1.01)", duration: 0.2 })
                .to(o.current, { transform: "scaleY(0.99)", duration: 0.2 })
                .to(o.current, { transform: "scaleY(1.03)", duration: 0.2 }));
          };
          return (0, r.jsxs)("div", {
            className: "ride",
            children: [
              i &&
                (0, r.jsx)("span", {
                  className: "shortcut-name",
                  children: Kr("ride"),
                }),
              (0, r.jsx)(Xr, { clickHandler: u }),
              (0, r.jsx)("div", { className: "--ride-cymbal", ref: o }),
              (0, r.jsx)("span", { className: "fixator" }),
              (0, r.jsx)("div", {
                className: "--ride-click-area",
                onMouseDown: () => {
                  u("ride");
                },
                onTouchStart: () => {
                  u("ride");
                },
                onTouchEnd: (e) => e.preventDefault(),
              }),
            ],
          });
        };
      let fi = Date.now(),
        di = "";
      const pi = (t) => {
          let { beatHandler: n } = t;
          const i = n[0],
            a = (0, e.useRef)(null),
            o = (0, e.useRef)(null),
            l = (0, e.useRef)(null),
            u = (0, e.useRef)(null),
            s = (0, e.useRef)(null),
            c = (0, e.useRef)(null),
            f = (0, e.useRef)(null),
            d = (0, e.useRef)(null),
            p = (0, e.useRef)(null);
          return (
            (0, e.useEffect)(() => {
              const e = Qr.timeline(),
                t = Date.now() - fi,
                n = 0.05;
              fi = Date.now();
              const r = {
                  snareLeft: {
                    rotation: -70,
                    duration: n,
                    onComplete: () => {
                      e.to(l.current, { rotation: -30, duration: 0.2 });
                    },
                  },
                  snareRight: {
                    rotation: -70,
                    duration: n,
                    onComplete: () => {
                      e.to(u.current, { rotation: -30, duration: 0.2 });
                    },
                  },
                  snareLeftCrossStick: {
                    rotation: -70,
                    duration: n,
                    onComplete: () => {
                      e.to(l.current, { rotation: -30, duration: 0.2 });
                    },
                  },
                  snareRightCrossStick: {
                    rotation: -70,
                    duration: n,
                    onComplete: () => {
                      e.to(u.current, { rotation: -30, duration: 0.2 });
                    },
                  },
                  hihatLeft: {
                    rotation: -70,
                    duration: n,
                    onComplete: () => {
                      e.to(s.current, { rotation: -30, duration: 0.2 });
                    },
                  },
                  hihatRight: {
                    rotation: -75,
                    duration: n,
                    onComplete: () => {
                      e.to(c.current, { rotation: -30, duration: 0.2 });
                    },
                  },
                  hihatLeftClosed: {
                    rotation: -70,
                    duration: n,
                    onComplete: () => {
                      e.to(s.current, { rotation: -30, duration: 0.2 });
                    },
                  },
                  hihatRightClosed: {
                    rotation: -75,
                    duration: n,
                    onComplete: () => {
                      e.to(c.current, { rotation: -30, duration: 0.2 });
                    },
                  },
                  floor: {
                    rotation: 70,
                    duration: n,
                    onComplete: () => {
                      e.to(f.current, { rotation: 40, duration: 0.2 });
                    },
                  },
                  bass: {},
                  tom1: {
                    rotateX: -75,
                    rotation: -40,
                    duration: n,
                    onComplete: () => {
                      e.to(d.current, {
                        rotateX: 0,
                        rotation: -10,
                        duration: 0.2,
                      });
                    },
                  },
                  tom2: {
                    rotateX: -75,
                    duration: n,
                    onComplete: () => {
                      e.to(p.current, { rotateX: 0, duration: 0.2 });
                    },
                  },
                  crash: {
                    rotation: -50,
                    duration: 0.01,
                    height: "40%",
                    onComplete: () => {
                      e.to(a.current, {
                        rotation: -30,
                        duration: 0.2,
                        height: "50%",
                      });
                    },
                  },
                  ride: {
                    rotation: 50,
                    duration: n,
                    onComplete: () => {
                      e.to(o.current, { rotation: 30, duration: 0.2 });
                    },
                  },
                },
                h = {
                  snareLeft: { element: l.current, hide: ".left-drumstick" },
                  snareRight: { element: u.current, hide: ".right-drumstick" },
                  snareLeftCrossStick: {
                    element: l.current,
                    hide: ".left-drumstick",
                  },
                  snareRightCrossStick: {
                    element: u.current,
                    hide: ".right-drumstick",
                  },
                  hihatLeft: { element: s.current, hide: ".left-drumstick" },
                  hihatRight: { element: c.current, hide: ".right-drumstick" },
                  hihatLeftClosed: {
                    element: s.current,
                    hide: ".left-drumstick",
                  },
                  hihatRightClosed: {
                    element: c.current,
                    hide: ".right-drumstick",
                  },
                  crash: { element: a.current, hide: ".left-drumstick" },
                  ride: { element: o.current, hide: ".right-drumstick" },
                  tom1: { element: d.current, hide: ".left-drumstick" },
                  tom2: { element: p.current, hide: ".right-drumstick" },
                  floor: { element: f.current, hide: ".right-drumstick" },
                };
              function m(t) {
                ["default", "bass", "pedal", "hihatFoot"].includes(t) ||
                  (Qr.killTweensOf(h[i].element),
                  e
                    .set(h[t].hide, { opacity: 0 })
                    .set(h[t].element, { opacity: 1 })
                    .to(h[t].element, r[t]));
              }
              function _(t, n) {
                Qr.killTweensOf(h[t].element),
                  e
                    .set(n, { opacity: 0 })
                    .set(h[t].element, { opacity: 1 })
                    .to(h[t].element, r[t]);
              }
              if (t < 500)
                switch (di + i) {
                  case "ridesnareRight":
                  case "hihatRightsnareRight":
                  case "hihatRightsnareRightCrossStick":
                  case "hihatRightClosedsnareRight":
                  case "hihatRightClosedsnareRightCrossStick":
                    _("snareLeft", ".left-drumstick");
                    break;
                  case "snareRightride":
                  case "snareRightCrossStickride":
                    _("ride", ".right-drumstick");
                    break;
                  case "ridesnareRightCrossStick":
                    _("snareLeftCrossStick", ".left-drumstick");
                    break;
                  case "hihatLeftsnareLeft":
                  case "hihatLeftClosedsnareLeft":
                  case "hihatLeftClosedsnareLeftCrossStick":
                  case "hihatLeftsnareLeftCrossStick":
                    _("snareRight", ".right-drumstick");
                    break;
                  default:
                    m(i);
                }
              else m(i);
              di = i;
            }, [i, n]),
            (0, r.jsxs)("div", {
              className: "drumstick",
              children: [
                (0, r.jsx)("span", {
                  className: "drumstick--snareLeft left-drumstick",
                  ref: l,
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--snareRight right-drumstick",
                  ref: u,
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--hihatLeft left-drumstick",
                  ref: s,
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--hihatRight right-drumstick",
                  ref: c,
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--crash left-drumstick",
                  ref: a,
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--ride right-drumstick",
                  ref: o,
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--tom1 left-drumstick",
                  ref: d,
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--tom2 right-drumstick",
                  ref: p,
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--floor right-drumstick",
                  ref: f,
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--default-left left-drumstick",
                }),
                (0, r.jsx)("span", {
                  className: "drumstick--default-right right-drumstick",
                }),
              ],
            })
          );
        },
        hi =
          n.p +
          "../library/drums/drum-kit-standard.eb6cdcf0e2d2b6c360fb.png",
        mi =
          n.p +
          "../library/drums/drum-kit-powerful.78d86422eefbbf8e260a.png",
        _i =
          n.p +
          "../library/drums/drum-kit-monumental.b0171cb723a2e7f276af.png",
        gi =
          n.p +
          "../library/drums/drum-kit-minimalistic.7e68037b956863be4251.png",
        vi =
          n.p +
          "../library/drums/drum-kit-smooth.b13115727ee3d7ea1576.png",
        yi =
          n.p +
          "../library/drums/drum-kit-energetic.f936dddefd272872c094.png",
        bi = () => {
          const {
              state: { soundType: t },
            } = (0, e.useContext)(a),
            [n, i] = (0, e.useState)(hi);
          return (
            (0, e.useEffect)(() => {
              switch (t) {
                case "standard":
                default:
                  i(hi);
                  break;
                case "powerful":
                  i(mi);
                  break;
                case "monumental":
                  i(_i);
                  break;
                case "smooth":
                  i(vi);
                  break;
                case "energetic":
                  i(yi);
                  break;
                case "minimalistic":
                  i(gi);
              }
            }, [t]),
            (0, r.jsx)("img", { src: n, alt: "drums" })
          );
        };
      var wi = n(718);
      const ki = () => {
          const {
            dispatch: t,
            state: { soundType: n },
          } = (0, e.useContext)(a);
          return (
            (0, e.useEffect)(() => {
              const e = (e) =>
                  new wi.Howl({
                    src: [
                      "../library/drums/"
                        .concat(n, "/")
                        .concat(e, ".mp3"),
                    ],
                  }),
                r = {
                  bass: e("bass"),
                  snareLeft: e("snare-drum"),
                  snareRight: e("snare-drum"),
                  snareLeftCrossStick: e("snare-stick"),
                  snareRightCrossStick: e("snare-stick"),
                  floor: e("floor-tom"),
                  tom1: e("tom1"),
                  tom2: e("tom2"),
                  crash: e("crash"),
                  ride: e("ride"),
                  hihatLeft: e("hihat-open"),
                  hihatRight: e("hihat-open"),
                  hihatLeftClosed: e("hihat"),
                  hihatRightClosed: e("hihat"),
                  hihatFoot: e("hihat-foot"),
                };
              t({ type: "CREATE_SOUND", soundBank: r });
            }, [n, t]),
            null
          );
        },
        xi = new Set([
          "hihatLeft",
          "hihatRight",
          "hihatLeftClosed",
          "hihatRightClosed",
        ]),
        Ti = () => {
          const {
              state: { soundBank: t },
            } = (0, e.useContext)(a),
            [n, i] = (0, e.useState)(["default", Date.now()]),
            [o, l] = (0, e.useState)(null),
            u = (e) => {
              xi.has(e)
                ? (((e) => {
                    let n = t[o];
                    o && n && n.playing()
                      ? (n.fade(1, 0, 10),
                        setTimeout(() => {
                          n.stop(), n.volume(1), t[e].play();
                        }, 20))
                      : t[e].play();
                  })(e),
                  l(e))
                : t[e].play(),
                i([e, Date.now()]);
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(ri, {}),
              (0, r.jsxs)("div", {
                className: "drums",
                children: [
                  (0, r.jsx)(bi, {}),
                  (0, r.jsx)(pi, { beatHandler: n }),
                  (0, r.jsx)(Zr, { clickHandler: u }),
                  (0, r.jsx)(oi, { clickHandler: u }),
                  (0, r.jsx)(ii, { clickHandler: u }),
                  (0, r.jsx)(li, { clickHandler: u }),
                  (0, r.jsx)(ui, { clickHandler: u }),
                  (0, r.jsx)(si, { clickHandler: u }),
                  (0, r.jsx)(ci, { clickHandler: u }),
                  (0, r.jsx)(ai, { clickHandler: u }),
                ],
              }),
              (0, r.jsx)(ki, {}),
            ],
          });
        };
      const Si = function () {
          return (0, r.jsx)(l, { children: (0, r.jsx)(Ti, {}) });
        },
        Ei = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(206)
              .then(n.bind(n, 206))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: i,
                  getLCP: a,
                  getTTFB: o,
                } = t;
                n(e), r(e), i(e), a(e), o(e);
              });
        };
      t.render(
        (0, r.jsx)(e.StrictMode, { children: (0, r.jsx)(Si, {}) }),
        document.getElementById("drums")
      ),
        Ei();
    })();
})();
