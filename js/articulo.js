producto = JSON.parse(localStorage.getItem(`Productos`));

// for (let index = 0; index < producto.length; index++) {
    
//      // console.log(objectUser.name);
//      console.log(producto[index].name);
//      // console.log(objectUser.url);
//      console.log(producto[index].url);
//      // console.log(objectUser.descripcion)
//      console.log(producto[index].descripción)
    
// };
   
document.body.innerHTML+= 

    `<section class="banner bg-white">
        <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 col-md-12 text-center mb-5">
            <div class="banner-content">
                <h1 class="text-uppercase fw-bolder">${producto[1].name}</h1>
                <p class="border-bottom border-primary border-5 pb-4">
                ${producto[1].descripción}
                </p>
                <a class="btn btn-light text-uppercase btn-outline-secondary fs-3 fw-bolder" href="#">Cómpralo ahora!</a>
            </div>
            </div>
            <div class="col-lg-5 primera-imagen">
            <img src="${producto[1].url}" alt="imagen del articulo" />
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
          ${producto[1].descripción}
          </p>
        </div>
        <div class="col-lg-3 col-md-4 segunda-imagen">
          <img src="${producto[1].url}" alt="portada de la página" />
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white">
  <div class="container">
    <div class="row mb3">
      <div class="offset-lg-3 col-lg-6 text-center">
        <h3 class="border-bottom border-primary border-2 pb-2">
          Características
        </h3>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-lg-5 col-md-4 offset-lg-2">
        <div class="img-caracter mb-5 tercera-imagen">
          <img
            src="${producto[1].url}"
            alt="imagen de caracteristicas"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mb-3">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Característica 1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              ${producto[1].descripción}
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Característica 2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              ${producto[1].descripción}
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Característica 3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              ${producto[1].descripción}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 text-center mb-3">
        <a
          class="btn btn-light text-uppercase btn-outline-secondary"
          href="#"
          >Cómpralo ahora!</a
        >
      </div>
    </div>
  </div>
</section>`


    // `<section class="banner bg-white"></section>
    // <div class="container">
    // <div class="row align-items-center justify-content-between">
    // <div class="col-lg-6 col-md-12 text-center mb-5">
    // <div class="banner-content">
    // <h1 class="text-uppercase fw-bolder">${producto[1].name}</h1>
    // <p class="border-bottom border-primary border-5 pb-4">
    // ${producto[1].descripción}
    //  </p>
    // <a class="btn btn-light text-uppercase btn-outline-secondary fs-3 fw-bolder" href="#"> Cómpralo ahora!</a>
    // </div>
    // </div>
    // <div class="col-lg-5 primera-imagen">
    // <img src="${producto[1].url}" alt="imagen del articulo" />
    // </div>
    // </div>
    // </div>
    // </section>
    // <section class="bg-light">
    // <div class="container">
    // <div class="row mb3">
    // <div class="offset-lg-3 col-lg-6 text-center">
    // <h3 class="border-bottom border-primary border-2 pb-2">
    // Sobre la página
    // </h3>
    // </div>
    // </div>`

    // `<div class="row align-items-center">`+
    // `<div class="col-lg-5 offset-lg-2 col-md-8">`+
    // `<p>`+
    //           producto.descripción +
    //           `</p>`+
    //         `<p>`+
    //           producto.descripción+
    //           `</p>`+
    //           `</div>`+
    //           `<div class="col-lg-3 col-md-4 segunda-imagen">`+
    //           `<img src="`+ producto.url +`" alt="portada de la página" />`+
    //           `</div>`+
    //           `</div>`+
    //           `</div>`+
    //           `</section>`+


    //           `<section class="bg-white">`+
    //           `<div class="container">`+
    //           `<div class="row mb3">`+
    //           `<div class="offset-lg-3 col-lg-6 text-center">`+
    //           `<h3 class="border-bottom border-primary border-2 pb-2">`+
    //           `Características`+
    //           `</h3>`+
    //           `</div>`+
    //           `</div>`+

    //           `<div class="row align-items-center">`+
    //           `<div class="col-lg-5 col-md-4 offset-lg-2">`+
    //           `<div class="img-caracter mb-5 tercera-imagen">`+
    //           `<img src="`+ producto.url +`" alt="imagen de caracteristicas" class="img-fluid"/>`+
    //           `</div>`+
    //           `</div>`+
    //           `<div class="col-lg-3 col-md-4 mb-3">`+
    //           `<div class="accordion" id="accordionExample">`+
    //           `<div class="accordion-item">`+
    //           `<h2 class="accordion-header" id="headingOne">`+
    //           `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">`+
    //           `Característica 1`+
    //           `</button>`+
    //           `</h2>`+
    //           `<div id="collapseOne" class="accordion-collapse collapse"aria-labelledby="headingOne" data-bs-parent="#accordionExample">`+
    //           `<div class="accordion-body">`+ producto.descripción +`</div>`+
    //           `</div>`+
    //           `</div>`+

    //           `<div class="accordion-item">`+
    //           `<h2 class="accordion-header" id="headingTwo">`+
    //           `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">`+
    //           `Característica 2`+
    //           `</button>`+
    //           `</h2>`+
    //           `<div id="collapseTwo"  class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">`+
    //           `<div class="accordion-body">`+ producto.descripción + `</div>`+
    //           `</div>`+
    //           `</div>`+

    //           `<div class="accordion-item">`+
    //           `<h2 class="accordion-header" id="headingThree">`+
    //           `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"  aria-controls="collapseThree">`+
    //           `Característica 3`+
    //           `</button>`+
    //           `</h2>`
    //           `<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">`+
    //           `<div class="accordion-body">`+ producto.descripción + `</div>`+
    //           `</div>`+
    //           `</div>`+
    //           `</div>`+
    //           `</div>`+

    //           `<div class="col-12 text-center mb-3">`+
    //           `<a class="btn btn-light text-uppercase btn-outline-secondary" href="#">Cómpralo ahora!</a>`+
    //           `</div>`+
    //           `</div>`+
    //           `</div>`+
    //           `</section>`;



