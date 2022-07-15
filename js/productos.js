let productos;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN = 'http://localhost:8080/api/products/';
function addItems(div_Productos) {
    fetch(URL_MAIN, {
        method: 'get'
    }).then(function (response) {
        response.json().then(function (json) {
            console.log(json);
            console.log(json.length);
            productos = json;
            Array.from(json).forEach((p) => {
                div_Productos.innerHTML += `
        <div class="col-12 col-md-4 mb-5 px-2">
        <div class="card">
        <a id = "${p.id}" href="http://127.0.0.1:5501/articulo.html">
          <img src="img/${p.img}" class="card-img-top" alt="..." />
          </a>
              <div class="card-body">
              <h5 class="card-title" id="productTitleModal">${p.nombre}</h5>
              <p class="card-text" id"productBodyModal">${p.descripcion}</p>
              <div class="card-body">
                    <h2 class="my-2 card-price">$${p.precio} .MXN</h2>
              </div>
              <div class="d-grid gap-2">
              <button class="btn btn-primary" id="${p.id}">Comprar</button>
              </div>
           </div>
         </div>
        </div>`;
            }); // foreach
        });//then
    }).catch(function (err) {
        console.log(err);
    });

}// addItems

window.addEventListener("load", function () {
    let div = document.getElementById("productosItems");
    addItems(div);
});

function view(index) {
    // console.log(index);
    // console.table(productos[index]);
    document.getElementById("productTitleModal").innerHTML = productos[index].nombre;
    document.getElementById("productBodyModal").innerHTML = `${productos[index].descripcion}  <img class="bd-placeholder-img card-img-top" role="img" src="img/${productos[index].img}" />
<strong>$ ${productos[index].precio} MXN<strong>`;
    $("#productModal").modal("show");
}// view



/////// El siguiente código agrega un nuevo producto mediante un POST
// const data =     {nombre: "Cuaderno doble raya",
//     descripcion: "Cuaderno doble raya Norma",
//     price: 56.0,
//     url_Imagen: "cuadernodobleraya.jpg"
// };

// fetch(URL_MAIN, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });




