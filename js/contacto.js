const formulario = document.getElementById('formulario');
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const comentarios = document.getElementById('comentarios');

const alertFullName = document.getElementById('alertFullName');
const alertPhone = document.getElementById('alertPhone');
const alertEmail = document.getElementById('alertEmail');
const alertPassword = document.getElementById('alertComentarios');


const regFullName  = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regPhone     = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/; 
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regComentarios  = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü,.?¿!¡:$*\s]{20,700}$/;

const mandarAlertaError = (err) =>{
  err.forEach((item) => {
      item.tipo.classList.remove('d-none');
      item.tipo.textContent = item.msg;
  });
}

formulario.addEventListener('submit', e =>{
  e.preventDefault()


  const err = [];


  
  // Validacion nombre completo
  if (!regFullName.test(fullName.value) || !fullName.value.trim()) {
      
      fullName.classList.add("is-invalid")
      err.push({
          tipo: alertFullName,
          msg : "Formato no válido, sólo letras." 
      });
  } else {
      fullName.classList.remove("is-invalid");
      fullName.classList.add("is-valid");
      alertFullName.classList.add("d-none");
  }

  // Validacion tel[e]fono
  if (!regPhone.test(phone.value) || !phone.value.trim()) {
      
      phone.classList.add("is-invalid")
      err.push({
          tipo: alertPhone,
          msg : "Formato no válido." 
      });
  } else {
      phone.classList.remove("is-invalid");
      phone.classList.add("is-valid");
      alertPhone.classList.add("d-none");
  }

  //Validacion email
  if (!regUserEmail.test(email.value) || !email.value.trim()) {
      
      email.classList.add("is-invalid")
      err.push({
          tipo: alertEmail,
          msg : "Escribe un correo electrónico válido." 
      });
  } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
      alertEmail.classList.add("d-none");
  }

  //Validacion Comentarios
  if (!regComentarios.test(comentarios.value) || !comentarios.value.trim()) {
      
    comentarios.classList.add("is-invalid")
      err.push({
          tipo: alertComentarios,
          msg : "Sólo se aceptan letras. [20 a 500 caracteres] ❌" 
      });
  } else {
      comentarios.classList.remove("is-invalid");
      comentarios.classList.add("is-valid");
      alertComentarios.classList.add("d-none");
  }

  if (err.length !== 0) {
      mandarAlertaError(err);
      return;
  }
  console.log("Formulario enviado")

  Swal.fire(
      '¡Mensaje enviado!',
      '',
      'success'
    )
  formulario.reset()
});
