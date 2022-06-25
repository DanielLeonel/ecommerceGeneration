let nombre = document.getElementById("Name");
let email = document.getElementById("Correo"); 
let mensaje = document.getElementById("email");
let contraseña = document.getElementById("number");
let password = document.getElementById("password")
let apaterno = document.getElementById("apellido");
let amaterno = document.getElementById("amaterno");

function validarNombreCompleto(){
  if (nombre.value.length <3) 
   {
    return false;
  }
  if (!isNaN(nombre.value)){
    return false;
 }
 if(/[0-9]/.test(nombre.value)){
  return false;
 }
 return true;
}
//
function validarApellidoP(){
  if (apaterno.value.length <5) 
   {
    return false;
  }
  if (!isNaN(apaterno.value)){
    return false;
 }
 if(/[0-9]/.test(apaterno.value)){
  return false;
 }
 return true;
}
function validarApellidoM(){
  if (amaterno.value.length <5) 
   {
    return false;
  }
  if (!isNaN(amaterno.value)){
    return false;
 }
//  if(/[0-9]/.test(amaterno.value)){
//   return false;
//  }
 return true;
} 


  function validarContraseña(){
      if(contraseña.value.length<=8) {
          return false;
      }
       if (contraseña.value <=0) {
          return false;
       }//if
       return true;
  }// validarCantidad


  function validarCorreoElectronico()
  {
      if(/^[a-zA-Z_0-9._%+-]+@(?:[a-zA-Z_0-9.-]+\.)[a-zA-Z]{2,6}/.test(email.value))
      {
        return true;
      }   
        return false;
    }    
function validarConfirmarContraseña(){
   if (password.value<=0) {
      return false;
   }//if
   if(contraseña.value==password.value) {
return true;
}//
}
    function validarConfirmarCorreo()
    {
      if(mensaje.value==0)
      {
         return false;
      }   
        if(email.value==mensaje.value)
     {
      return true;
      }
    return false;
  }
      let agregar = document.getElementById("enviar");
      agregar.addEventListener("click", (event)=> {
          event.preventDefault();

      let lista="";
      if(!validarNombreCompleto()){
          nombre.style.border="red thin solid";   
          lista+="<li>Se debe escribir un nombre válido</li>";
      }else{
        nombre.style.border=""; 
      }
      if(!validarApellidoP()){
        apaterno.style.border="red thin solid";
        lista+="<li>Apellido paterno no valido</li>";
      }
      else{
      apaterno.style.border=""; 
      }
      if(!validarApellidoM()){
        amaterno.style.border="red thin solid";
        lista+="<li>Apellido materno no valido</li>";
      }
      else{
      amaterno.style.border=""; 
      }      
      if(!validarCorreoElectronico()){
          email.style.border="red thin solid";
          lista+="<li>Se debe escribir un correo válido</li>";
      }else{
        email.style.border=""; 
      }
      if(!validarConfirmarCorreo()){
        mensaje.style.border="red thin solid";
        lista+="<li>Correo diferente</li>";
    }
    else{
      mensaje.style.border=""; 
    }
    
      if(!validarContraseña()){
        contraseña.style.border="red thin solid";
        lista+="<li>Se debe escribir una contraseña válida</li>";
    }else{
      contraseña.style.border=""; 
    }
    if(!validarConfirmarContraseña()){
      password.style.border="red thin solid";
      lista+="<li>Contraseña diferente</li>";
  }else{
    password.style.border=""; 
  }
  

      if ((!validarNombreCompleto()) || (!validarContraseña()) ||(!validarCorreoElectronico()) || (!validarConfirmarContraseña()) (!validarConfirmarCorreo()) (!validarApellidoM()) (!validarApellidoP())){
          document.getElementById("alertValidacionesTexto").innerHTML= 
          `!!!Los campos deben ser llenados correctamente!!!;
          <ul>${lista}</ul>`;
          document.getElementById("alertValidaciones").style.display="block";
        
          setTimeout(function(){
              document.getElementById("alertValidaciones").style.display="none";
          },
          5000
          )
          return false;
      }
      nombre.style.border="";
      email.style.border="";
      contraseña.style.border="";
      password.style.border="";
      mensaje.style.border="";
      amaterno.style.border="";
      apaterno.style.border="";
      document.getElementById("alertValidaciones").style.display="none";
      
});