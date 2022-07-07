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
    if (!regProducto.test(descripcion1.value) || !descripcion1.value.trim()) {
        
        descripcion1.classList.add("is-invalid")
        err.push({
            tipo: alertDescripcion1,
            msg : "Agregue sólo letras." 
        });
    } else {
        descripcion1.classList.remove("is-invalid");
        descripcion1.classList.add("is-valid");
        alertDescripcion1.classList.add("d-none");
    }   

    
    // Validacion Descri 2
    if (!regProducto.test(descripcion2.value) || !descripcion2.value.trim()) {
        
        descripcion2.classList.add("is-invalid")
        err.push({
            tipo: alertDescripcion1,
            msg : "Agregue sólo letras." 
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
    addProduct();
    
    Swal.fire(
        '¡Nuevo producto registrado!',
        '',
        'success'
      )
   
});

let loadProduct = [];

function addProduct() {
    let newProduct ={
        name : producto.value,
        price : precio.value,
        categorie : category.value,
        img : imagenes.value,
        DescriptionOne : descripcion1.value,
        DescriptionTwo : descripcion2.value

    };
    console.log(newProduct);
    loadProduct.push(newProduct);

    //Guadar en localSorage
    localStorage.setItem('productos', JSON.stringify(loadProduct));


    
};

//Obtener datos de localStorage
document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem("productos")) {
        loadProduct = JSON.parse(localStorage.getItem('productos'));
        console.log("productos desde localStorage", loadProduct)
    }
});
