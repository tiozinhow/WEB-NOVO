<script>
  var allowedIps = ["45.165.65.16", "127.0.0.1"];
  var currentIp = "";

  function checkIp() {
    fetch("https://api.ipify.org")
      .then(response => response.text())
      .then(ip => {
        currentIp = ip;
        if (!allowedIps.includes(ip)) {
          window.location.replace("https://botyuke.netlify.app/prisao");
        } else {
          setTimeout(() => {
            window.location.replace("https://botyuke.netlify.app/fim");
          }, Math.floor(Math.random() * 4000) + 1000); // espera de 1 a 4 segundos
        }
      });
  }

  checkIp();
</script>
