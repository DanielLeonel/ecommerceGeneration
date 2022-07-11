producto = JSON.parse(localStorage.getItem(`productos`));
if (producto == undefined) {
      console.log("Error al acceder a los productos")

      'use strick'

function addItem(item){
      const itemHTML = 
      '<div class="col-12 col-md-4 mb-5 px-2">\n' +
      '<div class="card">\n' +
        '<img src="' + item.img + '" class="card-img-top" alt="..." />\n' +
            '<div class="card-body">\n' +
            '<h5 class="card-title">' + item.name + '</h5>\n' +
            '<p class="card-text">' + item.description + '</p>\n' +
            '<div class="card-body">\n' +
                  '<h2 class="my-2">$' + item.precio + '</h2>\n' +
            '</div>\n' +
            '<div class="d-grid gap-2">\n' +
                  '<button class="btn btn-primary">Comprar</button>\n' +
            '</div>\n' +
         '</div>\n' +
       '</div>\n' +
      '</div>';
      
      const itemsContainer = document.getElementById("productosItems");
      itemsContainer.innerHTML += itemHTML;
  }

  addItem({
    'name'       :'Linear Style',
    'img'        :'./img/productos/prod1img1.jpg',
    'description':'Diseño simple, que hará que tu marca resalte por si misma.',
    'precio'     :'799.00'});
addItem({
    'name'       :'Naturaleza Calm Elements',
    'img'        :'./img/productos/prod2img1.jpg',
    'description':'Diseño ideal para productos de belleza, cuidado y orgánicos.',
    'precio'     :'899.00'});
addItem({
    'name'       :'Landing Word',
    'img'        :'./img/productos/prod3img1.jpg',
    'description':'Cualquier producto queda bien en este diseño, es todo lo que necesitas.',
    'precio'     :'899.00'});
addItem({
    'name'       :'Simple Store',
    'img'        :'./img/productos/prod4img1.jpg',
    'description':'Diseño fresco, ideal para productos tecnológicos, intuitivo y llamativo. Para un cliente joven.',
    'precio'     :'599.00'});
addItem({
    'name'       :'Creative Spark',
    'img'        :'./img/productos/prod5img1.jpg',
    'description':'Con catálogo integrado y filtros diseñados para que tus productos se muestren de la mejor manera.',
    'precio'     :'799.00'});
addItem({
    'name'       :'Creative Dining',
    'img'        :'./img/productos/prod6img1.jpg',
    'description':'Tu menú, pedidos y reservaciones en un mismo lugar, con un diseño totalmente adaptable a tu marca.',
    'precio'     :'999.00'});
addItem({
    'name'       :'Technology Light',
    'img'        :'./img/productos/prod7img1.jpg',
    'description':'Diseño ideal para marcas que son diferentes y que buscan resaltar del resto. Una imagen que seguro tus clientes recordarán',
    'precio'     :'699.00'});
addItem({
    'name'       :'Introducción y Actualización',
    'img'        :'./img/productos/prod8img1.jpg',
    'description':'Resolvemos todas tus dudas y te llevamos de la mano en la actualización del diseño para que se adapte a tu marca.',
    'precio'     :'1299.00'});
addItem({
    'name'       :'Administración',
    'img'        :'./img/productos/prod9img1.jpg',
    'description':'Gestiona tu ecommerce desde un solo lugar, optimiza y administra tu negocio de forma eficiente. Con control total de pago y envíos.',
    'precio'     :'999.00'});
addItem({
    'name'       :'Crecimiento de tu Ecommerce',
    'img'        :'./img/productos/prod10img1.jpg',
    'description':'Mejoramos tu estrategia de marketing para mayores ventas y tu visibilidad online',
    'precio'     :'959.00'});


}else{
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
}



