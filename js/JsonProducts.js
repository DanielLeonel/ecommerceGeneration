let productList = [];

function addUser(pName, pUrl, pDesc ) {
    let newProduct ={
        name : pName,
        url : pUrl,
        descripción : pDesc

    };
    console.log(newProduct);
    productList.push(newProduct);

    //Guadar en localSorage
    localStorage.setItem('Productos', JSON.stringify(productList));


    
};
document.querySelector("#btnEnviar").addEventListener("click", saveProduct);

function saveProduct(){
    let sName = document.querySelector("#validationCustom01").value,
        sUrl = document.querySelector("#validationCustom02").value,
        sDesc = document.querySelector("#validationCustom03").value;
addUser(sName, sUrl, sDesc);

Swal.fire(
    '¡Carga Exitosa!',
    '',
    'success'
  )

};

//Obtener datos de localStorage
document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem("Productos")) {
        productList = JSON.parse(localStorage.getItem('Productos'));
        console.log("Productos desde localStorage", productList)
    }
});

