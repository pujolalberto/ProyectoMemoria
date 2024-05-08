var grupoTarjetas = ["😎", "🍦", "🐸", "👽", "👾", "🤖", "👹", "🐌"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}


function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";
  let i = 1;

  tarjetasBarajadas.forEach(function(elemento) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta' id='"+ i +"'>" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
    i += 1;
  });
}

function descubrir(e) {
  const id = e.target.id;
  let elegidos = [0,0];
  if (elegidos[0] == 0) { 
    elegidos[0] = id;
  } else {
    elegidos[1] = id;
  }

  let emojis = ["",""];
  if (emojis[0] == 0) { 
    emojis[0] = e.target.innerText;
  } else {
    emojis[1] = e.target.innerText;
  }

  if (emojis[0] == emojis[1]) {
    console.log("coinciden");
  }
  //verificar si ya se dieron todas las coincidencias
  //longitud * 2 = contador

  this.classList.add("descubierta");
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});