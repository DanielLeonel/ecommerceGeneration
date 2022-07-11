let datos=[];
let  total = 0;



let bodyTabla=document.getElementById("carritoprod");


window.addEventListener("load", function() {
    
    if(localStorage.getItem("elementostabla")!=null)
    {
        datos=JSON.parse(localStorage.getItem("elementostabla"));
        datos.forEach(element =>
          {
              bodyTabla.innerHTML += `
             <div class="container-md  d-inline-flex p-2 d-flex justify-content-md-around productocarrito">
              <div class=" container-md  justify-content-md-around text-center">
              <div class=" pado principal-articulo-element-texto">
                  <p>
                      ${element.name}
                  </p>
              </div>
              <div class="principal-articulo-element-img">
              <img id="img" src="${element.img}" alt="Producto1">
              </div>
          </div>

          <div class="pado container-md  justify-content-md-around text-center precio">
              <p>$ ${element.precio}</p>
          </div>
          </div>
              `;
             
              total=total+parseFloat(element.precio);
              document.getElementById("total").innerHTML="$" + total;
              console.log(total);
          });
    }

  });//window
