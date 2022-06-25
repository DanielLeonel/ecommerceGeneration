let productList = [];

function addUser(pName, pUrl, pDesc ) {
    let newProduct ={
        name : pName,
        url : pUrl,
        descripción : pDesc

    };
    console.log(newProduct);
    productList.push(newProduct);
    localStorageProducts(productList);
};

function getProductList(){
    let storedList = localStorage.getItem("localProducts");
    if(storedList == null){
        productList =[];
    }else{
        productList = JSON.parse(storedList);
    }
    return productList;
};

function localStorageProducts(plist){
localStorage.setItem("localProducts", JSON.stringify(plist));

};

document.querySelector("#btnEnviar").addEventListener("click", saveProduct);

function saveProduct(){
    let sName = document.querySelector("#validationCustom01").value,
        sUrl = document.querySelector("#validationCustom02").value,
        sDesc = document.querySelector("#validationCustom03").value;
addUser(sName, sUrl, sDesc);

};