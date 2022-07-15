let variable = (localStorage.getItem(`id`));
const URL_MAIN = 'http://localhost:8080/api/products/';
id = JSON.parse(localStorage.getItem(`id`));
console.log(id.id);
console.log(variable);
// console.log(producto[id]);

// function id (id){
// this.id=id;
// };


// for (let index = 0; index < producto.length; index++) {
    
//      // console.log(objectUser.name);
//      console.log(producto[index].name);
//      // console.log(objectUser.url);
//      console.log(producto[index].url);
//      // console.log(objectUser.descripcion)
//      console.log(producto[index].descripción)
    
// };
   
function addItems(div_Productos) {
  fetch(URL_MAIN, {
      method: 'get'
  }).then(function (response) {
      response.json().then(function (json) {
          console.log(json);
          console.log(json[id.id].img);

          console.log(json.length);
          productos = json;
              
              div_Productos.innerHTML += `
              <section class="banner bg-white">
              <div class="container">
              <div class="row align-items-center justify-content-between">
                  <div class="col-lg-6 col-md-12 text-center mb-5">
                  <div class="banner-content">
                      <h1 class="text-uppercase fw-bolder">${json[(id.id)-1].nombre}</h1>
                      <p class="border-bottom border-primary border-5 pb-4"> <h5> 
                      ${json[(id.id)-1].descripcion}</h5>
                      <h3>$ ${json[(id.id)-1].precio}.00</h3>
                      </p>
                      <a class="btn btn-light text-uppercase btn-outline-secondary fs-3 fw-bolder" href="#">Cómpralo ahora!</a>
                  </div>
                  </div>
                  <div class="col-lg-5 primera-imagen">
                  <img src="./img/productos/${json[(id.id)-1].img}" alt="imagen del articulo" />
                  </div>
              </div>
              </div>
          </section>
      
          <section class="bg-light">
          <div class="container">
            <div class="row mb3">
              <div class="offset-lg-3 col-lg-6 text-center">
                <h3 class="border-bottom border-primary border-2 pb-2">
                  Sobre la página
                </h3>
              </div>
            </div>
      
            <div class="row align-items-center">
              <div class="col-lg-5 offset-lg-2 col-md-8">
                <p>
                ${json[(id.id)-1].descripcion2}
                </p>
              </div>
              <div class="col-lg-3 col-md-4 segunda-imagen">
                <img src="./img/productos/${json[(id.id)-1].img2}" alt="portada de la página" />
              </div>
            </div>
          </div>
        </section>`

      });//then
  }).catch(function (err) {
      console.log(err);
  });



}// addItems








  window.addEventListener("load", function () {
    let div = document.getElementById("html");
    addItems(div);
});