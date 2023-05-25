//manipulacion
//HOME repeticion de secciones y obtencion de informacion de las apis
//REPETICIONES DE CANCIONES-PLAYLIST-ARTISTAS CON FOR FALTA

//Declaro varables para el form 
let buscadorForm = document.querySelector("#buscadorForm");
let searchInput = document.querySelector("#searchInput");

//Agregamos un evento al buscador para que no deje buscar con campo vacio o menos de 3 carácteres
buscadorForm.addEventListener ("submit", function(e){
    e.preventDefault();
    if(searchInput.value == ''){
        alert('Debe ingresar alguna palabra');
   } else if (searchInput.value.length < 3){
        alert('Ingresar al menos 3 caracteres');
   } else{
        this.submit();
   }
})

//guardar lo que ingresa el usuario
searchInput.addEventListener('keydown', function(e) {
    console.log(searchInput.value);
})

//Diseños Home
