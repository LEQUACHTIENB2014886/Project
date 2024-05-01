var minAdsWidth = 800,
  minWidthForLeftAds = 1006,
  minWidthForBodyAds = 800,
  url = "",
  checkLoading = !1,
  isTestModAds = !0;
function downloadAdsJs() {
  try {
    var o = "";
    try {
      o = Joomla.getOptions("mod_ads").url;
    } catch {
      try {
        o = JoomlaExUrl;
      } catch {
        return;
      }
    }
    var e = document.createElement("script");
    (e.src = o),
      document.head.append(e),
      (e.onload = function () {
        initGoogleAdvScript();
      });
  } catch {}
}
function isFoundGoogleAd() {
  var o = document.querySelectorAll(".adsbygoogle");
  return !!o.length && o[0];
}
function getGoogleAdvScript(o) {
  o ||
    (o =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2389742668952551");
  var e = document.createElement("script");
  return (
    (e.src = o),
    e.setAttribute("async", ""),
    e.setAttribute("crossorigin", "anonymous"),
    e
  );
}
function initGoogleAdvScript(o) {
  o || (o = "");
  var e = isFoundGoogleAd();
  if (e) {
    var t = getGoogleAdvScript(o);
    e.before(t);
  }
}
function removeLeftAds() {
  document.querySelectorAll("[data-ads-box=navigation]").forEach(function (o) {
    o.remove();
  });
}
function removeBodyAds() {
  document
    .querySelectorAll("[data-ads-box=top], [data-ads-box=middle]")
    .forEach(function (o) {
      o.remove();
    });
}
function isFoundBodyAds() {
  return !!document.querySelectorAll(
    "[data-ads-box=top], [data-ads-box=middle]"
  ).length;
}
function isFoundMobileAds() {
  return !!document.getElementsByClassName("[data-ads-box=mobile]").length;
}
function processGoogleAds() {
  if (void 0 !== checkLoading && !checkLoading) {
    checkLoading = !0;
    var o = document.documentElement.clientWidth,
      e = !1;
    o < minWidthForBodyAds
      ? (removeBodyAds(), removeLeftAds())
      : o < minWidthForLeftAds
      ? (removeLeftAds(), isFoundBodyAds() && (e = !0))
      : (e = !0),
      isFoundMobileAds() && (e = !0),
      e && downloadAdsJs();
  }
}
document.addEventListener("DOMContentLoaded", function (o) {
  processGoogleAds();
}),
  (window.onload = function () {
    processGoogleAds();
  });
