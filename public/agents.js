/*
 * Ergoblockchain.org — embeddable Sage activity widget.
 *
 * Drop-in usage on any third-party site:
 *   <div id="sage-feed"></div>
 *   <script src="https://www.ergoblockchain.org/agents.js"
 *           data-target="#sage-feed"
 *           data-height="320"
 *           async></script>
 *
 * The script reads its own data-* attributes, mounts a sandboxed iframe
 * pointing at /widget/sage-activity, and lets the host site control
 * sizing. No exfil, no analytics, no host-CSS conflicts (iframe boundary).
 */
(function () {
  try {
    var SRC =
      "https://www.ergoblockchain.org/widget/sage-activity.html?ref=embed";
    var script = document.currentScript || (function () {
      var s = document.getElementsByTagName("script");
      return s[s.length - 1];
    })();
    if (!script) return;
    var target = script.getAttribute("data-target") || "#sage-feed";
    var height = script.getAttribute("data-height") || "320";
    var width = script.getAttribute("data-width") || "100%";
    var mount = document.querySelector(target);
    if (!mount) {
      mount = document.createElement("div");
      script.parentNode.insertBefore(mount, script);
    }
    var iframe = document.createElement("iframe");
    iframe.src = SRC;
    iframe.title = "Sage live activity — ergoblockchain.org";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.setAttribute("scrolling", "no");
    iframe.style.cssText =
      "width:" + width +
      ";height:" + height + "px" +
      ";border:1px solid rgba(255,255,255,.08)" +
      ";border-radius:14px" +
      ";background:#000" +
      ";display:block" +
      ";color-scheme:dark";
    iframe.setAttribute("sandbox", "allow-scripts allow-popups allow-popups-to-escape-sandbox");
    mount.appendChild(iframe);
  } catch {
    // Fail closed — embed is non-essential.
  }
})();
