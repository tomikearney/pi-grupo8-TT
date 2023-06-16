/*

//FUNCIONALIDAD MODO OSCURO

function modoOscuro(){
     
     let footer = document.querySelector(".footer");
     let headerSeccionPrimeraParte = document.querySelector(".headerSeccionPrimeraParte");
     let frasesPage = document.querySelector(".frasesPage");
     let body = document.querySelector("body");

     let h2Node = document.querySelectorAll("h2")
     let h2Array = Array.from(h2Node) //lo transformo en array para poder iterar
     let headerNavBotonNode = document.querySelectorAll(".headerNavBoton"); //tipo de dato no iterable
     let headerNavBotonArray = Array.from(headerNavBotonNode) //lo transformo en array para poder iterar


     footer.style.backgroundColor = "rgb(0 0 0 / 34%)"
     headerSeccionPrimeraParte.style.backgroundColor = "rgb(0 0 0 / 34%)"
     body.style.backgroundColor = "#191919fa"

     frasesPage.style.color = "white"


     for (let i = 0; i < headerNavBotonArray.length; i++) {
          headerNavBotonArray[i].style.backgroundColor = "dimgrey"
     }

     for (let i = 0; i < h2Array.length; i++) {
          h2Array[i].style.color = "white"
     }

}

let articleModoOscuro = document.querySelector(".articleModoOscuro");
articleModoOscuro.addEventListener("click", function() {
     let modo = localStorage.getItem("modo");
     
     if(modo == null || modo == "Modo claro"){ //Si el modo está en claro
          articleModoOscuro.innerText = "Modo claro"
          localStorage.setItem("modo", "modo oscuro")
          modoOscuro()

     }
     else { //Si el modo está oscuro
          articleModoOscuro.innerText = "Modo oscuro"
          localStorage.setItem("modo", "Modo claro")
     }


     

});




*/






//Trayendo datos de api
let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
let endpoint ="https://api.deezer.com/chart"; /*Es la ruta que proporciona la informacion a renderizar*/


let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */

fetch(url) /*esta recibe un parametro que es la ruta desde donde obtenemos la informacion, retornandonos una promesa */
/*Fetch es un metodo que recibe un parametro, en este caso la url ( de la Api) */
     .then (function(response){ /*Acá comienza la promesa: recibe una funcion (callback) la cual recibe la respuesta (retorno) como parametro */
          // console.log(response) 
          return response.json(); /*con .json convertimos la info en un objeto literal. Aca se devuelve el reponse la cual sera devuelto al siguiente then */
     })

     .then (function(data){ /*recibe una funcion (callback) que tiene como parametro los datos que recibira el primer then, convencion data */
          console.log(data); 

          let artists = data.artists.data; /*se obtendra un array de objetos literales */
          // console.log(artists)
          let albums = data.albums.data /*aca tenemos un array de objeto literales de albums */
          //console.log(albums) 
          let canciones = data.tracks.data;


          //para capturar elementos (que lo llamo en el contenedor)

          let seccionArtistas = document.querySelector ("#artistasSeccion");
          let seccionAlbums = document.querySelector("#discosSeccion");
          let seccionCanciones = document.querySelector("#cancionesSeccion");

          //bucle para la seccion de Canciones
          for (let i = 0; i < 5; i++) {
               seccionCanciones.innerHTML += 
                                             `<li>
                                                  <div class="uk-position-center uk-panel">
                                                       <a href="./detallesCancion.html?id=${canciones[i].id}"><h3>${canciones[i].title}</h3></a>
                                                       <h6>${canciones[i].artist.name}</h6>

                                                  </div>
                                                  <a href="./detallesArtista.html?id=${artists[i].id}">
                                                       <img src="${canciones[i].album.cover_medium}" width="400" height="600" alt="">
                                                  </a>
                                             </li>`
          } 

          //Bucle para la seccion de Artistas
          for (let i = 0; i < 5; i++) {
               seccionArtistas.innerHTML += `<li>
                                                  <div class="uk-position-center uk-panel">
                                                       <a href="./detallesArtista.html?id=${artists[i].id}"><h3>${artists[i].name}</h3></a>
                                                  </div>
                                                  <a href="./detallesArtista.html?id=${artists[i].id}">
                                                       <img src="${artists[i].picture_medium}" width="400" height="600" alt="">
                                                  </a>
                                             </li>
                                             `
          } 
          
                                             
          //Bucle para la seccion de Albums
          
          for (let i = 0; i < 5; i++) {
               seccionAlbums.innerHTML += 
                                             `<li>
                                                  <div class="uk-position-center uk-panel">
                                                       <a href="./detallesDisco.html?id=${albums[i].id}"><h3>${canciones[i].title}</h3></a>
                                                       <h6>${albums[i].artist.name}</h6>

                                                  </div>
                                                  <a href="./detallesArtista.html?id=${artists[i].id}">
                                                       <img src="${albums[i].cover_medium}" width="400" height="600" alt="">
                                                  </a>
                                             </li>`
          } 
     })
     /*Atrapara los errores en cualquier de las instancias del fetch */
     .catch( function(error){
          console.log(`Error: ${error}`)
     })
    
     
     //Declaro varables para el form 
     let form = document.querySelector("#buscadorForm");//capturo el formulario
     let campoBuscador = document.querySelector("#searchInput");//[name=busqueda]capturamos el campo del busqueda
     
     //Agregamos un evento al buscador para que no deje buscar con campo vacio o menos de 3 carácteres
     form.addEventListener ("submit", function(e){
         e.preventDefault();
         console.log(campoBuscador.value);
         if(campoBuscador.value == ''){
              alert('Debe ingresar alguna palabra');
         } else if (campoBuscador.value.length < 3){
              alert('Ingresar al menos 3 caracteres');
         } else{
              this.submit();
         }
     })


/************************ MENU RESPONSIVIDAD ***********************************/ 

/*RESPONSIVIDAD: Le agregamos un evento al icono de menu de Home*/
     //capturo el elemento del DOM
     let botonMenu= document.querySelector("#icon-menu");
     //Le doy un evento "click", y una funcion (una callback)
     botonMenu.addEventListener("click", function () {
          
          let containerAll= document.querySelector("#moveContent") 
               containerAll.classList.toggle("moveContainerAll") //se creo una clase en style imaginaria, para luego usarla acá.
          //El contenido ya se mueve!

          let menuAparecer = document.querySelector("#showMenu")
               menuAparecer.classList.toggle("showLateral")
     }); 

     //let botonMenu= document.querySelector("")

