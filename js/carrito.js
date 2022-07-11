let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");
let button5 = document.getElementById("5");
let button6 = document.getElementById("6");
let button7 = document.getElementById("7");
let button8 = document.getElementById("8");
let button9 = document.getElementById("9");
let button10 = document.getElementById("10");

let datos = [];


button1.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{
        "name" :"Linear Style",
        "id":"1",
        "img":"./img/productos/prod1img1.jpg",
        "description":"Diseño simple, que hará que tu marca resalte por si misma.",
        "precio"     :"799.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );
//2
button2.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{
        "name" :"Naturaleza Calm Elements",
        "id":"2",
        "img":"./img/productos/prod2img1.jpg",
        "description":"Diseño ideal para productos de belleza, cuidado y orgánicos.",
        "precio"     :"899.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );
//3
button3.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{
    "name" :"Landing Word",
    "id" :"3",
    "img":"./img/productos/prod3img1.jpg",
    "description":"Cuaquier producto queda bien en este diseño, es todo lo que necesitas.",
    "precio":"899.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );
//4
button4.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{
    "name":"Simple Store",
    "id" :"4",
    "img":"./img/productos/prod4img1.jpg",
    "description":"Diseño fresco, ideal para productos tecnológicos, intuitivo y llamativo. Para un cliente joven.",
    "precio":"599.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );
//5
button5.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{  
    "name"       :"Creative Spark",
    "id"         :"5",
    "img"        :"./img/productos/prod5img1.jpg",
    "description":"Con catálogo integrado y filtros diseñados para que tus productos se muestren de la mejor manera.",
    "precio"     :"799.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );
//6
button6.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{  
        "name"       :"Creative Dining",
        "id"         :"6",
        "img"        :"./img/productos/prod6img1.jpg",
        "description":"Tu menú, pedidos y reservaciones en un mismo lugar, con un diseño totalmente adaptable a tu marca.",
        "precio"     :"999.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );
//7
button7.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{  
    "name"       :"Technology Light",
    "id"         :"7",
    "img"        :"./img/productos/prod7img1.jpg",
    "description":"Diseño ideal para marcas que son diferentes y que buscan resaltar del resto. Una imagen que seguro tus clientes recordarán",
    "precio"     :"699.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );
//8
button8.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{  
        "name"       :"Introducción y Actualización",
        "id"         :"8",
        "img"        :"./img/productos/prod8img1.jpg",
        "description":"Resolvemos todas tus dudas y te llevamos de la mano en la actualización del diseño para que se adapte a tu marca.",
        "precio"     :"1299.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );
//9
button9.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{  
        "name"       :"Administración",
    "id"         :"9",
    "img"        :"./img/productos/prod9img1.jpg",
    "description":"Gestiona tu e-commerce desde un solo lugar, optimiza y administra tu negocio de forma eficiente. Con control total de pago y envíos.",
    "precio"     :"999.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );
//10
button10.addEventListener("click", (event) =>{
    event.preventDefault();
    let element =`{  
        "name"       :"Crecimiento de tu tienda online",
        "id"         :"10",
        "img"        :"./img/productos/prod10img1.jpg",
        "description":"Mejoramos tu estrategia de marketing para mayores ventas y tu visibilidad online",
        "precio"     :"959.00"}`;


datos.push(JSON.parse(element));
localStorage.setItem("elementostabla", JSON.stringify(datos));
console.log(datos);
} );