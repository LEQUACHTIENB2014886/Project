
    <meta charset="UTF-8">
    <title>Chạy file HTML</title>
    <style>
        .iframe-container {
            position: relative;
            width: 100%;
            height: calc(100vh);
            overflow: hidden;
        }

        .iframe-content {
            position: absolute;
            width: calc(100% + 40px);
            height: calc(100% + 0px);
        }
    </style>

<a>
    <div class="iframe-container">
        <div class="iframe-content">
            <iframe src="https://tombatossals.github.io/react-chords/guitar/index.html" style="width: 100%; height: 100%; background-color: #ffffff; border: none; border-radius: 10px; "></iframe>
        </div>
    </div>

    <!-- Code injected by live-server -->
    <script>
        // <![CDATA[  <-- For SVG support
        if ('WebSocket' in window) {
            (function() {
                function refreshCSS() {
                    var sheets = [].slice.call(document.getElementsByTagName("link"));
                    var head = document.getElementsByTagName("head")[0];
                    for (var i = 0; i < sheets.length; ++i) {
                        var elem = sheets[i];
                        var parent = elem.parentElement || head;
                        parent.removeChild(elem);
                        var rel = elem.rel;
                        if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                            var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                            elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                        }
                        parent.appendChild(elem);
                    }
                }
                var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
                var address = protocol + window.location.host + window.location.pathname + '/ws';
                var socket = new WebSocket(address);
                socket.onmessage = function(msg) {
                    if (msg.data == 'reload') window.location.reload();
                    else if (msg.data == 'refreshcss') refreshCSS();
                };
                if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
                    console.log('Live reload enabled.');
                    sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
                }
            })();
        } else {
            console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
        }
        // ]]>
    </script>
</a>

<footer class="text-center text-white" style="background-color: SlateGrey;">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 text-center text-md-start">
        <div class="p-8">
          MelodyTalent designed by LeQuachTien
        </div>
      </div>
      <div class="col-lg-6 ml-lg-0 text-center text-md-end">
        <a href="#" class="btn btn-outline-light btn-floating m-1" role="button"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="btn btn-outline-light btn-floating m-1" role="button"><i class="fab fa-twitter"></i></a>
        <a href="#" class="btn btn-outline-light btn-floating m-1" role="button"><i class="fab fa-google"></i></a>
        <a href="#" class="btn btn-outline-light btn-floating m-1" role="button"><i class="fab fa-instagram"></i></a>
      </div>
      <br><br><br>
      <hr><br>
    </div>
  </div>
</footer>



<style>
  body {
    display: flex;
    flex-direction: column;
    min-height: 60vh;
  }

  footer {
    margin-top: auto;
    background-color: SlateGrey;
    color: white;
    text-align: center;
    padding: 10px 0;
  }

  footer a {
    color: white;
  }

  footer hr {
    border-top: 1px solid white;
    margin: 20px 0;
  }
  
</style></body></html>