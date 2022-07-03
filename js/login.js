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

    //Validacion para que el user no mande un input vacio
    if (!data.get('email').trim() || !data.get('password').trim()) {
         console.log("Mandaste un form vacio");
         alert.classList.remove('d-none');
         return;
    }    
    users.push(objectUser);
    //Guadar en localSorage
    localStorage.setItem("Users", JSON.stringify(users));
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