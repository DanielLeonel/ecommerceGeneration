const formulario = document.getElementById('formulario');
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');

const alertFullName = document.getElementById('alertFullName');
const alertPhone = document.getElementById('alertPhone');
const alertEmail = document.getElementById('alertEmail');
const alertPassword = document.getElementById('alertPassword');
const alertSuccess = document.getElementById('alertSuccess');


const regFullName  = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regPhone     = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/; 
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regPassword  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

const mandarAlertaSuccess = () => {
    alertSuccess.classList.remove('d-none');
}

const mandarAlertaError = (err) =>{
    err.forEach((item) => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
    });
}

formulario.addEventListener('submit', e =>{
    e.preventDefault()

    alertSuccess.classList.add('d-none');

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

    //Validacion Password
    if (!regPassword.test(password.value) || !password.value.trim()) {
        
        password.classList.add("is-invalid")
        err.push({
            tipo: alertPassword,
            msg : "Al menos 8 caracteres: ✅ 1 minúscula, 1 mayúscula, 1 número y 1 carácter especial." 
        });
    } else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        alertPassword.classList.add("d-none");
    }

    if (err.length !== 0) {
        mandarAlertaError(err);
        return;
    }
    console.log("Formulario enviado")

    // Code
    
    // Code
    mandarAlertaSuccess();
});

