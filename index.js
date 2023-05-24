var boton = document.getElementById("boton");

function traer() {
  var dni = document.getElementById("dni").value;

  // Validar la longitud del número de DNI
  if (dni.length !== 8) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Debe ingresar 8 dígitos numéricos",
    });
    return;
  }

  // Validar si el DNI contiene caracteres no numéricos
  if (!/^\d+$/.test(dni)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Solo se permiten números",
    });
    return;
  }

  var proxyUrl = "https://api.allorigins.win/raw?url=";
  var targetUrl = "https://api.apis.net.pe/v1/dni?numero=" + dni;

  fetch(proxyUrl + targetUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data && data.nombres) {
        document.getElementById("recived").textContent = data.nombres;
        document.getElementById("static").textContent = "ERES GENIAL!";
      } else {
        Swal.fire({
          icon: "info",
          title: "Información",
          text: "El DNI no se encontró",
        });
      }
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al consultar el DNI",
      });
    });
}

boton.addEventListener("click", function (event) {
  event.preventDefault();
  traer();

  playAudio();
});
