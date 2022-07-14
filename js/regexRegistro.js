let url = 'http://localhost:8080/api/users/';

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
    saveProduct();

    comprobarUusario(email);

    // Code
    // postUser();
    // // Code
    // Swal.fire(
    //     '¡Usuario registrado!',
    //     '',
    //     'success'
    //   )

    
        
});

let registerList = [];

function addUser(pName, pTel, pCorreo, pContrasena ) {
    let newUser ={
        name : pName,
        tel : pTel,
        correo : pCorreo,
        contrasena : pContrasena

    };
    console.log(newUser);
    registerList.push(newUser);

    //Guadar en localSorage
    localStorage.setItem('usuarios', JSON.stringify(registerList));


    
};

function saveProduct(){
    let sName = document.querySelector("#fullName").value,
        sTel = document.querySelector("#phone").value,
        sCorreo = document.querySelector("#email").value;
        sContrasena = document.querySelector("#password").value;
addUser(sName, sTel, sCorreo, sContrasena);

};

//Obtener datos de localStorage
document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem("usuarios")) {
        registerList = JSON.parse(localStorage.getItem('usuarios'));
        console.log("usuarios desde localStorage", registerList)
    }
});

    function postUser(){
    let sName = document.getElementById("fullName").value;
    let sCorreo = document.getElementById("email").value;
    let sTel = document.getElementById("phone").value;
    let sContrasena = document.getElementById("password").value;

    let data = {nombre: sName ,
        correo: sCorreo,
        tel: sTel,
        contrasena: sContrasena};
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })};

    existe = false;
    function comprobarUusario(email) {
        fetch(url, {
            method: 'get'
        }).then(function(response) {
            response.json().then(function (json) {
                usuarios = json;
               
                console.log(usuarios);
                productos=json;
                if (usuarios == undefined) {
                    Swal.fire(
                                    '¡Error de servidor!',
                                    '',
                                    'error'
                                  );
                }else{
                    console.log("se encontró la base")
                    console.log("este es el correo a buscar "+ email.value);
                    for (let index = 0; index < json.length; index++) {
                        if (json[index].correo==email.value) {
                            console.log("usuario encontrado en pa posición "+ index+ "con el id "+ json[index].id)
                               Swal.fire(
                                  '¡El usuario ya existe!',
                                  '',
                                  'error'
                                );
                                existe = true;
                        } 
                    }
                   if (!existe){

                    //  Code
                     postUser();
                     // Code
                     Swal.fire(
                         '¡Usuario registrado!',
                         '',
                         'success'
                     )
                   }
                        
                      
                }
    });//then
    }).catch(function(err) {
    console.log("el error es"+err);
    });
    
    
    }// comprobarUsuario