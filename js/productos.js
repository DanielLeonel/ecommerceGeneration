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
    'name'       :'Option 1',
    'img'        :'https://picsum.photos/400/400.webp?random=1',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
addItem({
    'name'       :'Option 2',
    'img'        :'https://picsum.photos/400/400.webp?random=2',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
addItem({
    'name'       :'Option 3',
    'img'        :'https://picsum.photos/400/400.webp?random=3',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
addItem({
    'name'       :'Option 4',
    'img'        :'https://picsum.photos/400/400.webp?random=4',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
addItem({
    'name'       :'Option 5',
    'img'        :'https://picsum.photos/400/400.webp?random=5',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
addItem({
    'name'       :'Option 6',
    'img'        :'https://picsum.photos/400/400.webp?random=6',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
addItem({
    'name'       :'Option 7',
    'img'        :'https://picsum.photos/400/400.webp?random=7',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
addItem({
    'name'       :'Option 8',
    'img'        :'https://picsum.photos/400/400.webp?random=8',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
addItem({
    'name'       :'Option 9',
    'img'        :'https://picsum.photos/400/400.webp?random=9',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
addItem({
    'name'       :'Option 10',
    'img'        :'https://picsum.photos/400/400.webp?random=10',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'precio'     :'100.00'});
