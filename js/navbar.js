let navBar = document.getElementById("BarraNavegacion");


function BarraNavegacion(){
navBar.innerHTML=`<nav class="navbar navbar-expand-lg border-bottom" id="menu">
<div class="container-fluid">
 <img src="./img/logo 3.svg" alt="" width="30" height="24">
 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     <li><a href="/inicio.html" id="ColorInicio" class="nav-link px-2">Inicio</a></li>
     <li><a href="/productos.html" id="ColorProductos" class="nav-link px-2">Productos y Servicios</a></li>
     <li><a href="/nosotros.html" id="ColorNosotros" class="nav-link px-2">Nosotros</a></li>
     <li><a href="/contacto.html" id="ColorContacto" class="nav-link px-2">Contacto</a></li>
   </ul>
   <div class="col-md-3 mr-auto text-center text-end">
     <a href="/carrito.html"><button type="button" class="btn btn-outline-primary me-2"><i class="fa-solid fa-cart-shopping"></i></button></a>
     <a href="/inicioSesion.html"><button type="button" class="btn btn-outline-primary me-2">Iniciar</button></a>
     <a href="/registro.html"><button type="button" class="btn btn-primary">Registro</button></a>
   </div>
 </div>
</div> 
</nav>`;
}
BarraNavegacion();
let footer = document.getElementById("PieDePagina");
function piePagina(){
footer.innerHTML=`<footer class="piePagina">
<nav class="container">
    <ul class="foot_ul">
        <li class="logo fa-solid fa-circle"></li>
        <li class="foot_li"><a id="ColorContacto" class="textfoot" href="/contacto.html">Contacto</a></li>
        <li class="foot_li"><a id="ColorAviso" class="textfoot" href="/aviso.html">Aviso de privacidad</a></li>
        <li class="foot_li"><a id="ColorTerminos" class="textfoot" href="/terminos.html">Términos y condiciones</a></li>
        <li class="face fa-brands fa-facebook"></li>
        <li class="twitter fa-brands fa-twitter"></li>
    </ul>
    <ul class="foot_ul_responsive">
            <li class="logo_responsive fa-solid fa-circle"></li>
            <li class="foot_responsive"><a class="textResponsive" href="/contacto.html">Contacto</a></li>
            <li class="foot_responsive"><a class="textResponsive" href="/aviso.html">Aviso de privacidad</a></li>
            <li class="foot_responsive"><a class="textResponsive" href="/terminos.html">Términos y condiciones</a></li>
            <li class="face_responsive fa-brands fa-facebook"></li>
            <li class="twitter_responsive fa-brands fa-twitter"></li>
        </div>
    </ul>
</nav>
</footer>`;
}
piePagina();

