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

let elegidos = [];
let emojis = [];

function descubrir(e) {
  const id = e.target.id;
  
  if (elegidos.length < 2 && !elegidos.includes(id)) {
    elegidos.push(id);
    emojis.push(e.target.innerText);
    e.target.classList.add("descubierta");

    if (elegidos.length === 2) {
      if (emojis[0] === emojis[1]) {
        console.log("coinciden");
        
      } else {
        setTimeout(() => {
          elegidos.forEach(id => {
            document.getElementById(id).classList.remove("descubierta");
          });
          elegidos = [];
          emojis = [];
        }, 1000); 
      }
    }
  }
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});
