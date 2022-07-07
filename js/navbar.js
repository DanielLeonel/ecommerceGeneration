let navBar = document.getElementById("BarraNavegacion");

function BarraNavegacion() {
  navBar.innerHTML = `<nav
  id="navbar-example3"
  class="navbar navbar-expand-lg navbar-light bg-light fs-5 fw-semibold fixed-top"
>
  <div class="container">
    <a href="/" class="navbar-brand">
      <img
        src="./img/logoDesigners.svg"
        height="55"
        alt="MDB Logo"
        loading="lazy"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse text-center"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a href="index.html" class="nav-link" aria-current="page">Inicio</a>
        </li>
        <li class="nav-item">
          <a href="productos.html" class="nav-link" aria-current="page"
            >Productos y Servicios</a
          >
        </li>
        <li class="nav-item">
          <a href="nosotros.html" class="nav-link" aria-current="page"
            >Nosotros</a
          >
        </li>
        <li class="nav-item">
          <a href="contacto.html" class="nav-link" aria-current="page"
            >Contacto</a
          >
        </li>
      </ul>
      <div class="dropdown">
        <img
          class="dropdown-toggle align-items-center rounded-circle mt-1 mx-4"
          href="#"
          type="button"
          id="dropdownMenuButton"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          src="./img/avatar.png"
          alt="avatar"
          height="40"
          loading="lazy"
        />
        <ul class="dropdown-menu item" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="carrito.html">Carrito</a></li>
          <li><a class="dropdown-item" href="inicio-sesion.html">Iniciar</a></li>
          <li><a class="dropdown-item" href="registro.html">Regístrate</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>`;
}
BarraNavegacion();

let footer = document.getElementById("PieDePagina");
function piePagina() {
  footer.innerHTML = `<footer class="piePagina">
<nav class="container">
    <ul class="foot_ul">
        <li class="logo fa-solid fa-circle"></li>
        <li class="foot_li"><a id="ColorContacto" class="textfoot" href="/contacto.html">Contacto</a></li>
        <li class="foot_li"><a id="ColorAviso" class="textfoot" href="/aviso.html">Aviso de privacidad</a></li>
        <li class="foot_li"><a id="ColorTerminos" class="textfoot" href="/terminos.html">Términos y condiciones</a></li>
        <a href="https://www.facebook.com/Alpha-Designers-101859812590935"><li class="face fa-brands fa-facebook"></li>
        <a href="https://twitter.com/AlphaDesigners2"><li class="twitter fa-brands fa-twitter"></li></a>
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
