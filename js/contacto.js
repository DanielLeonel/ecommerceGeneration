let nombre = document.getElementById("Name");
let lastname = document.getElementById("Apellido");
let phone = document.getElementById("Telefono");
let correo = document.getElementById("Correo");
let coment = document.getElementById("Comentario");

function validarNombre() {
  if (nombre.value.length < 3) {
    return false;
  } //if
  return true;
}

function validarNombre() {
  if (nombre.value.length < 3) {
    return false;
  }
  if (!isNaN(nombre.value)) {
    return false;
  }
  if (/[0-9]/.test(nombre.value)) {
    return false;
  }
  return true;
}
//
function validarTelefono() {
  if (phone.value.length == 0) {
    return false;
  } // if
  if (phone.value.length == 10) {
    return true;
  } // if
  if (isNaN(phone.value)) {
    return false;
  } //if

  if (phone.value <= 0) {
    return false;
  } //if
} // validarCantidad

function validarCorreo() {
  if (
    /^[a-zA-Z_0-9._%+-]+@(?:[a-zA-Z_0-9.-]+\.)[a-zA-Z]{2,6}/.test(correo.value)
  ) {
    return true;
  }
  return false;
}

function validarComentario() {
  if (coment.value.length == 0) {
    return false;
  }
  return true;
}
function validarApellido() {
  if (lastname.value.length == 0) {
    return false;
  }
  if (!isNaN(lastname.value)) {
    return false;
  }
  if (/[0-9]/.test(lastname.value)) {
    return false;
  }
  return true;
}
let agregar = document.getElementById("enviar");
agregar.addEventListener("click", (event) => {
  event.preventDefault();

  let lista = "";
  if (!validarNombre()) {
    nombre.style.border = "red thin solid";
    lista += "<li>Se debe escribir un nombre válido</li>";
  } else {
    nombre.style.border = "";
  }
  if (!validarCorreo()) {
    correo.style.border = "red thin solid";
    lista += "<li>Se debe escribir un correo válido</li>";
  } else {
    correo.style.border = "";
  }
  if (!validarApellido()) {
    lastname.style.border = "red thin solid";
    lista += "<li>Se debe escribir un apellido válido</li>";
  } else {
    lastname.style.border = "";
  }
  if (!validarTelefono()) {
    phone.style.border = "red thin solid";
    lista += "<li>Se debe escribir un telefono válido</li>";
  } else {
    phone.style.border = "";
  }
  if (!validarComentario()) {
    coment.style.border = "red thin solid";
    lista += "<li>Se debe escribir un comentario válido</li>";
  } else {
    coment.style.border = "";
  }

  if (
    !validarComentario() ||
    !validarApellido() ||
    !validarTelefono() ||
    !validarCorreo() ||
    !validarNombre()
  ) {
    document.getElementById(
      "alertValidacionesTexto"
    ).innerHTML = `!Los campos deben ser llenados correctamente!;
          <ul>${lista}</ul>`;
    document.getElementById("alertValidaciones").style.display = "block";

    setTimeout(function () {
      document.getElementById("alertValidaciones").style.display = "none";
    }, 5000);
    return false;
  }
  nombre.style.border = "";
  lastname.style.border = "";
  phone.style.border = "";
  correo.style.border = "";
  coment.style.border = "";
  document.getElementById("alertValidaciones").style.display = "none";
});
