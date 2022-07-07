const formulario = document.getElementById('formulario');
const producto = document.getElementById('producto');
const precio = document.getElementById('precio');
const category = document.getElementById('category');
const imagenes = document.getElementById('imagenes');
const descripcion1 = document.getElementById('descripcion1');
const descripcion2 = document.getElementById('descripcion2');

const alertProducto = document.getElementById('alertProducto');
const alertPrecio = document.getElementById('alertPrecio');
const alertCategory = document.getElementById('alertCategory');
const alertImagenes = document.getElementById('alertImagenes');
const alertDescripcion1 = document.getElementById('alertDescripcion1');
const alertDescripcion2 = document.getElementById('alertDescripcion2');
const alertSuccess = document.getElementById('alertSuccess');


const regProducto  = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regPrecio    = /^\d+(?:\.\d{1,2})?$/;
const regDescrip   = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü,.?¿:\s]{20,100}$/;

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


    
    // Validacion nombre producto
    if (!regProducto.test(producto.value) || !producto.value.trim()) {
        
        producto.classList.add("is-invalid")
        err.push({
            tipo: alertProducto,
            msg : "Formato no válido, sólo letras." 
        });
    } else {
        producto.classList.remove("is-invalid");
        producto.classList.add("is-valid");
        alertProducto.classList.add("d-none");
    }

    // Validacion precio con dos decimales max
    if (!regPrecio.test(precio.value) || !precio.value.trim()) {
        
        precio.classList.add("is-invalid")
        err.push({
            tipo: alertPrecio,
            msg : "Sólo numeros." 
        });
    } else {
        precio.classList.remove("is-invalid");
        precio.classList.add("is-valid");
        alertPrecio.classList.add("d-none");
    }

    // Validacion Category
    if (category.value === "---") {
        
        category.classList.add("is-invalid")
        err.push({
            tipo: alertCategory,
            msg : "Selecciona una categoría" 
        });
    } else {
        category.classList.remove("is-invalid");
        category.classList.add("is-valid");
        alertCategory.classList.add("d-none");
    }    
 

    // Validacion Imagenes
    if (imagenes.value == "") {
        
        imagenes.classList.add("is-invalid")
        err.push({
            tipo: alertImagenes,
            msg : "Selecciona una imagen" 
        });
    } else {
        imagenes.classList.remove("is-invalid");
        imagenes.classList.add("is-valid");
        alertImagenes.classList.add("d-none");
    }   

    // Validacion Descri 1
    if (!regDescrip.test(descripcion1.value) || !descripcion1.value.trim()) {
        
        descripcion1.classList.add("is-invalid")
        err.push({
            tipo: alertDescripcion1,
            msg : "De 20 a 100 caracteres, sólo letras." 
        });
    } else {
        descripcion1.classList.remove("is-invalid");
        descripcion1.classList.add("is-valid");
        alertDescripcion1.classList.add("d-none");
    }   

    
    // Validacion Descri 2
    if (!regDescrip.test(descripcion2.value) || !descripcion2.value.trim()) {
        
        descripcion2.classList.add("is-invalid")
        err.push({
            tipo: alertDescripcion2,
            msg : "De 20 a 100 caracteres, sólo letras." 
        });
    } else {
        descripcion2.classList.remove("is-invalid");
        descripcion2.classList.add("is-valid");
        alertDescripcion2.classList.add("d-none");
    }  

    if (err.length !== 0) {
        mandarAlertaError(err);
        return;
    }
    console.log("Formulario enviado")

    // Code
    // saveProduct();
    // Code
    // Swal.fire(
    //     '¡Usuario registrado!',
    //     '',
    //     'success'
    //   )
});

// let registerList = [];

// function addUser(pName, pTel, pCorreo, pContrasena ) {
//     let newUser ={
//         name : pName,
//         tel : pTel,
//         correo : pCorreo,
//         contrasena : pContrasena

//     };
//     console.log(newUser);
//     registerList.push(newUser);

//     //Guadar en localSorage
//     localStorage.setItem('usuarios', JSON.stringify(registerList));


    
// };

// function saveProduct(){
//     let sName = document.querySelector("#fullName").value,
//         sTel = document.querySelector("#phone").value,
//         sCorreo = document.querySelector("#email").value;
//         sContrasena = document.querySelector("#password").value;
// addUser(sName, sTel, sCorreo, sContrasena);



// };

//Obtener datos de localStorage
document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem("usuarios")) {
        registerList = JSON.parse(localStorage.getItem('usuarios'));
        console.log("usuarios desde localStorage", registerList)
    }
});





















// 'use strick'

// console.log("funcionando")

// const formulario = document.querySelector('#formulario')
// const btnEnviar = document.querySelector('#btnEnviar')
// const btnCargando = document.querySelector('#btnCargando')
// const toast = document.querySelector('.toast')

// formulario.addEventListener('submit', e => {
//     // console.log('me diste click')
//     e.preventDefault()

//     const datos = new FormData(formulario)

//     console.log('campo nombreProducto', datos.get('nombreProducto'))
//     console.log('campo urlProducto', datos.get('urlProducto'))
//     console.log('campo descripcionProducto', datos.get('descripcionProducto'))

//     btnEnviar.classList.add('d-none')
//     btnCargando.classList.remove('d-none')

//     window.setTimeout(() => {

//         btnEnviar.classList.remove('d-none')
//         btnCargando.classList.add('d-none')

//         const eventoToast = new bootstrap.Toast(toast)
//         eventoToast.show()

//     },3000)

//     formulario.reset()
// })