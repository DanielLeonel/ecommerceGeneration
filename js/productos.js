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
    'name'       :'Básico',
    'img'        :'./img/Producto1.svg',
    'description':'Diseño simple, que hará que tu marca resalte por si misma.',
    'precio'     :'799.00'});
addItem({
    'name'       :'Naturaleza',
    'img'        :'./img/Producto2.svg',
    'description':'Diseño ideal para productos de belleza, cuidado y orgánicos.',
    'precio'     :'899.00'});
addItem({
    'name'       :'General',
    'img'        :'./img/Producto3.svg',
    'description':'Cuaquier producto queda bien en este diseño, es todo lo que necesitas.',
    'precio'     :'899.00'});
addItem({
    'name'       :'Tecnología',
    'img'        :'./img/Producto4.svg',
    'description':'Diseño fresco, ideal para productos tecnológicos, intuitivo y llamativo. Buscando llegar a un cliente joven.',
    'precio'     :'599.00'});
addItem({
    'name'       :'Moda',
    'img'        :'./img/Producto5.svg',
    'description':'Con catálogo integrado y filtros diseñados para que tus productos se muestren de la mejor manera.',
    'precio'     :'799.00'});
addItem({
    'name'       :'Restaurante',
    'img'        :'./img/Producto6.svg',
    'description':'Tu menú, pedidos y reservaciones en un mismo lugar, con un diseño totalmente adaptable a tu marca.',
    'precio'     :'999.00'});
addItem({
    'name'       :'Innovador',
    'img'        :'./img/Producto7.svg',
    'description':'Diseño ideal para marcas que son diferentes y que buscan resaltar del resto. Una imagen que seguro tus clientes recordarán',
    'precio'     :'699.00'});
addItem({
    'name'       :'Introducción y actualización continua',
    'img'        :'./img/productos/herramientas-de-marketing-digital (2).jpg',
    'description':'Resolvemos todas tus dudas y te llevamos de la mano en la actualización del diseño para que se adapte a tu marca.',
    'precio'     :'1299.00'});
addItem({
    'name'       :'Administración',
    'img'        :'./img/productos/Los-100-datos-sobre-inbound-marketing-que-necesitas-saber (1).jpg',
    'description':'Gestiona tu e-commerce desde un solo lugar, optimiza y administra tu negocio de forma eficiente. Con control total de pago y envíos.',
    'precio'     :'999.00'});
addItem({
    'name'       :'Crecimiento de tu tienda online',
    'img'        :'./img/productos/1.3.jpg',
    'description':'Mejoramos tu estrategia de marketing para mayores ventas y tu visibilidad online',
    'precio'     :'959.00'});
