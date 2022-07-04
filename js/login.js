const alert = document.querySelector('.alert');
const form = document.querySelector('#form');

let users = [];

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    alert.classList.add('d-none');

    const data = new FormData(form);

    const objectUser = {
        email: data.get('email'),
        password: data.get('password'),
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

    //Validacion para que el user no mande un input vacio
    if (!data.get('email').trim() || !data.get('password').trim()|| espacios) {
         console.log("Mandaste un form vacio");
         alert.classList.remove('d-none');
         return;
    }    
    users.push(objectUser);
    //Guadar en localSorage
    localStorage.setItem("Users", JSON.stringify(users));
    registros = JSON.parse(localStorage.getItem('Users'));
    console.log(objectUser.email);
    console.log(registros[0].email);
    console.log(objectUser.password);
    console.log(registros[0].password);
    
    console.log(registros[0].email)
    if ((objectUser.email == registros[0].email)&&(objectUser.password==registros[0].password)) {
        Swal.fire(
            '¡Inicio de sesión aceptada.!',
            '',
            'success'
          );
    } else{
        Swal.fire(
            '¡Error en el usuario o contraseña.!',
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