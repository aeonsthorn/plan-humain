window.addEventListener("load", loadAnalytics);

function loadAnalytics() {
  addGoogleAnalytics();
  loadClarity();
}

function addGoogleAnalytics() {
  var script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-EBFRWBLND6";
  script.async = true;
  document.body.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-EBFRWBLND6");
  };
}

function loadClarity() {
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "fbqdwvcllx");
}
