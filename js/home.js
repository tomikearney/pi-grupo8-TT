//Creo una variable donde este la Key de la API
// let apiKey = d7e720fab5cf3fb9758c3d08bf546d59; PREGUNTAR
let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
let endpoint ="https://api.deezer.com/chart"; /*Es la ruta que proporciona la informacion a renderizar*/
let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */

fetch(url) /*esta recibe un parametro que es la ruta desde donde obtenemos la informacion, retornandonos una promesa */
     .then (function(response){ /*recibe una funcion (callback) la cual recibe la respuesta (retorno) como parametro */
          // console.log(response) 
          return response.json(); /*con .json convertimos la info en un objeto literal */
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
               seccionCanciones.innerHTML += ` <article class="articleMain">
                                                  <img class="articleImg" src="${canciones[i].album.cover_medium}" alt=""> 
                                                  <h3 class="title">${canciones[i].title}</h3>
                                                  <p class="name">${canciones[i].artist.name}</p>
                                                  <a  href="./detallesCancion.html?id=${canciones[i].id}">
                                                  <button type="" class="verMas">Ver más</button>
                                                  </a>
                                             </article>`
          } 

          //Bucle para la seccion de Artistas
          for (let i = 0; i < 5; i++) {
               seccionArtistas.innerHTML += `<article class="articleMain">
                                                  <img class="articleImg" src="${artists[i].picture_medium}" alt="">
                                                  <h3 class="name">${artists[i].name}</h3>
                                                  <a href="./detallesArtista.html?id=${artists[i].id}">
                                                  <button type="" class="verMas">Ver más</button>
                                                  </a>
                                             </article>`
          } 


          //Bucle para la seccion de Albums
          
          for (let i = 0; i < 5; i++) {
               seccionAlbums.innerHTML += `<article class="articleMain">
                                             <img class="articleImg" src="${albums[i].cover_medium}" alt="">
                                             <h3 class="title">${albums[i].title}</h3>
                                             <p class="name">${albums[i].artist.name}</p>
                                             <a  href="./detallesDisco.html">
                                             <button type="" class="verMas">Ver más</button>
                                             </a>
                                        </article>`
          } 
     })
     /*Atrapara los errores en cualquier de las instancias del fetch */
     .catch( function(error){
          console.log(`Error: ${error}`)
     })
    
     
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

   

