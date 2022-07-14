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
    users.push(objectUser);
    comprobarUsuario(email.value,password.value);
    form.reset();
});
//método fetch
let productos;
let usuarios;
console.log(email.value);
console.log(password.value);

// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN ='http://localhost:8080/api/users/';

function comprobarUsuario(email,password) {
    console.log(email + password);
    fetch(URL_MAIN, {
        method: 'get'
        
    }).then(function(response) {
        
        response.json().then(function (json) {
            
            console.log(json);
            console.log(json.length);
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
                console.log(email);
                for (let index = 0; index < json.length; index++) {
                    if (json[index].correo==email) {
                        console.log("usuario encontrado")
                        if (json[index].contrasena==password) {
                            console.log(json[index].nombre);
                            Swal.fire(
                                            `'¡Bienvenido ${json[index].nombre}!`,
                                            ``,
                                            'success'
                                          );
                                          setTimeout(function(){
                                            window.open("http://127.0.0.1:5501/index.html","_self")
                                          },2000);
                                          
                                        
                        }
                        return;
                    }else{
                        Swal.fire(
                            '¡Usuario no encontrado!',
                            '',
                            'error'
                          );
                    }    
                }
            }

});//then
}).catch(function(err) {
console.log("el error es"+err);
});
}// comprobar usuarios

form.addEventListener('submit', (e) =>{
        e.preventDefault();
    const objectUser = {
        email: email,
        password: password,
        id: `${Date.now()}`
    }
    espacios=false;
    stringEmail= objectUser.email;
    stringPassword = objectUser.password;
    for (let index = 0; index < stringEmail.length; index++) {
        if(stringEmail[index]==" "){
            console.log("EL usuario lleva espacios");
            espacios = true;
        }
    }
    for (let index = 0; index < stringPassword.length; index++) {
        if(stringPassword[index]==" "){
            console.log("La contraseña lleva espacios");
            espacios = true;
        }  
    }
});