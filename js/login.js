const alert = document.querySelector('#camposVacios');
const form = document.querySelector('#form');
const email = document.querySelector('#userEmail');
const password = document.querySelector('#userPassword');


const alertEmail = document.querySelector('#alertEmail');
const alertPassword = document.querySelector('#alertPassword');


const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regPassword  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;


let users = [];

const mandarAlertaError = (err) =>{
    err.forEach((item) => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
    });
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();


    const err = [];

    const data = new FormData(form);

    const objectUser = {
        email: email,
        password: password,
        id: `${Date.now()}`
    }
    // espacios=false;
    // stringEmail= objectUser.email;
    // stringPassword = objectUser.password;
    // for (let index = 0; index < stringEmail.length; index++) {
    //     if(stringEmail[index]==" "){
    //         console.log("EL usuario lleva espacios");
    //         espacios = true;
    //     }
    // }
    
    // for (let index = 0; index < stringPassword.length; index++) {
    //     if(stringPassword[index]==" "){
    //         console.log("La contraseña lleva espacios");
    //         espacios = true;
    //     }
        
        
    // }

    //Validacion email
    if (!regUserEmail.test(data.get('email')) || !data.get('email').trim()) {
        
        email.classList.add("is-invalid")
        err.push({
            tipo: alertEmail,
            msg : "Escribe un correo electrónico válido." 
        });
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        alertEmail.classList.add('d-none');
    }

    //Validacion Password
    if (!regPassword.test(data.get('password')) || !data.get('password').trim()) {
        
        password.classList.add("is-invalid")
        err.push({
            tipo: alertPassword,
            msg : "No es una contraseña válida." 
        });
    } else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid")
        alertPassword.classList.add("d-none");
    }

    if (err.length !== 0) {
        mandarAlertaError(err);
        return;
    }
    //Validacion para que el user no mande un input vacio
    // if (!data.get('email').trim() || !data.get('password').trim()|| espacios) {
    //      console.log("Mandaste un form vacio");
    //      alert.classList.remove('d-none');
    //      return;
    // }    
    users.push(objectUser);
    //Guadar en localSorage
    localStorage.setItem("Users", JSON.stringify(users));
    registros = JSON.parse(localStorage.getItem('Users'));
    // console.log(objectUser.email);
    // console.log(registros[0].email);
    // console.log(objectUser.password);
    // console.log(registros[0].password);
    
    console.log(registros[0].email)
    if ((objectUser.email == registros[0].email)&&(objectUser.password==registros[0].password)) {
        Swal.fire(
            '¡Inicio de sesión aceptada!',
            '',
            'success'
          );
    } else{
        Swal.fire(
            '¡Error en el usuario o contraseña!',
            '',
            'error'
          );

    }
    console.log(users);
    form.reset();

});

//Obtener datos de localStorage
document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem("Users")) {
        users = JSON.parse(localStorage.getItem('Users'));
        console.log("Datos desde localStorage", users)
    }
});

document.addEventListener('submit', (e) =>{
    e.preventDefault();
    usuario = localStorage.getItem
})