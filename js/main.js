//Permitir copiar al portapapeles los números de cuenta y CCI con un clic.
//Dar un mensaje de confirmación al usuario cuando se copia.
//(Opcional) Mejorar la experiencia de las listas desplegables <details> con un pequeño efecto visual.
// Función para copiar texto al portapapeles
function copiarTexto(id) {
  const texto = document.getElementById(id).innerText;
  navigator.clipboard.writeText(texto).then(() => {
    mostrarAviso("Copiado: " + texto);
  }).catch(err => {
    console.error("Error al copiar: ", err);
  });
}

// Función para mostrar un aviso temporal
function mostrarAviso(mensaje) {
  const aviso = document.createElement("div");
  aviso.className = "aviso-copiado";
  aviso.innerText = mensaje;

  document.body.appendChild(aviso);

  // El aviso desaparece después de 2 segundos
  setTimeout(() => {
    aviso.remove();
  }, 2000);
}

// Opcional: animación al abrir/cerrar listas desplegables
document.querySelectorAll("details").forEach(det => {
  det.addEventListener("toggle", () => {
    if (det.open) {
      det.style.backgroundColor = "#e9ecef";
    } else {
      det.style.backgroundColor = "#f9f9f9";
    }
  });
});


// Menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul.menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
