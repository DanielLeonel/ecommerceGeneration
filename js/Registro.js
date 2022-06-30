
let userList = []

function handleSubmit(event) {
     event.preventDefault()

     const data = new FormData(event.target)
     const user = Object.fromEntries(data.entries())

   
     userList.push( user )
     localStorage.setItem("ElementosRegistro", JSON.stringify(userList) );
     console.log( userList ) 
     if (localStorage.getItem(userList)) {
        const registrados = JSON.parse(localStorage.getItem(userList))
        
     } 
     document.getElementById("formulario").reset() 
 }


const form = document.querySelector("form")
form.addEventListener('submit', handleSubmit);















