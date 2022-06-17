function addItem(item){
    const itemHTML = '<div class="card">\n' + 
    '<img src="' + item.img + '" class="card-img-top" alt="...">\n' +
    ' <div class="card-body">\n' +
      '<h5 class="card-title">' + item.name + '</h5>\n' +
      '<p class="card-text">' + item.description + '</p>\n' +
      '<button class="btn btn-primary">Comprar</button>\n' +
      '<p class="card-text"><small class="text-muted">' + item.lastTime+ '</small></p>\n' +
    '</div>\n' +
    '</div>';
    
    const itemsContainer = document.getElementById("productosItems");
    itemsContainer.innerHTML += itemHTML;
}

function addItem2(item){
  const itemHTML = '<div class="card">\n' + 
  '<img src="' + item.img + '" class="card-img-top" alt="...">\n' +
  ' <div class="card-body">\n' +
    '<h5 class="card-title">' + item.name + '</h5>\n' +
    '<p class="card-text">' + item.description + '</p>\n' +
    '<button class="btn btn-primary">Comprar</button>\n' +
    '<p class="card-text"><small class="text-muted">' + item.lastTime+ '</small></p>\n' +
  '</div>\n' +
  '</div>';
  
  const itemsContainer = document.getElementById("productosItems2");
  itemsContainer.innerHTML += itemHTML;
}

function addItem3(item){
  const itemHTML = '<div class="card">\n' + 
  '<img src="' + item.img + '" class="card-img-top" alt="...">\n' +
  ' <div class="card-body">\n' +
    '<h5 class="card-title">' + item.name + '</h5>\n' +
    '<p class="card-text">' + item.description + '</p>\n' +
    '<button class="btn btn-primary">Comprar</button>\n' +
    '<p class="card-text"><small class="text-muted">' + item.lastTime+ '</small></p>\n' +
  '</div>\n' +
  '</div>';
  
  const itemsContainer = document.getElementById("productosItems3");
  itemsContainer.innerHTML += itemHTML;
}


addItem({
    'name'       :'Option 1',
    'img'        :'https://picsum.photos/400/400.webp?random=1',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
    'lastTime'   :'Subida hace una semana'});

addItem({
      'name'       :'Option 2',
      'img'        :'https://picsum.photos/400/400.webp?random=2',
      'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
      'lastTime'   :'Subida hace una semana'});
addItem({
      'name'       :'Option 3',
      'img'        :'https://picsum.photos/400/400.webp?random=3',
      'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
      'lastTime'   :'Subida hace una semana'});

addItem2({
      'name'       :'Option 4',
      'img'        :'https://picsum.photos/400/400.webp?random=4',
      'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
      'lastTime'   :'Subida hace una semana'});
addItem2({
      'name'       :'Option 5',
      'img'        :'https://picsum.photos/400/400.webp?random=5',
      'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
      'lastTime'   :'Subida hace una semana'});
addItem2({
      'name'       :'Option 6',
      'img'        :'https://picsum.photos/400/400.webp?random=6',
      'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
      'lastTime'   :'Subida hace una semana'});
addItem3({
      'name'       :'Option 7',
      'img'        :'https://picsum.photos/400/400.webp?random=7',
      'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
      'lastTime'   :'Subida hace una semana'});
addItem3({
       'name'       :'Option 8',
       'img'        :'https://picsum.photos/400/400.webp?random=8',
       'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
       'lastTime'   :'Subida hace una semana'});
addItem3({
       'name'       :'Option 9',
       'img'        :'https://picsum.photos/400/400.webp?random=9',
       'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus?',
       'lastTime'   :'Subida hace una semana'});