producto = JSON.parse(localStorage.getItem(`productos`));
for (let index = 0; index < producto.length; index++) {
    document.getElementById("productosItems").innerHTML+= 
    `<div class="col-12 col-md-4 mb-5 px-2">
          <div class="card"> 
          <a href="articulo.html" id="${index}"><img src=" ${producto[index].img} " class="card-img-top" alt="..." /></a>
                <div class="card-body">
                <h5 class="card-title">  ${producto[index].name}  </h5>
                <p class="card-text"> ${producto[index].DescriptionOne} </p> 
                <div class="card-body">
                      <h2 class="my-2">$ ${producto[index].price} </h2> 
                </div>
                <div class="d-grid gap-2">
                      <button class="btn btn-primary">Comprar</button>
                </div>
             </div>
           </div>
          </div>`;
}

