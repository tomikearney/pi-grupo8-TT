//Defino la API KEY para realizar las solicitudes
let apiKey =  "21416077f4bf1a730cab43a0b4680acc";
/******************** FORMULARIO ***************************** */
// //Declaro varables para el form 
let form = document.querySelector("#buscadorForm");//capturo el formulario
let campoBuscador = document.querySelector("#searchInput");//[name=busqueda]capturamos el campo del busqueda
//Agregamos un evento al buscador para que no deje buscar con campo vacio o menos de 3 carácteres
form.addEventListener ("submit", function(e){
    e.preventDefault();
    console.log(campoBuscador.value)
    if(campoBuscador.value == ''){
         alert('Debe ingresar alguna palabra');
    } else if (campoBuscador.value.length < 3){
         alert('Ingresar al menos 3 caracteres');
         console.log(campoBuscador.value)
    } else{
         this.submit();
    }
})

/********************* SEARCH RESULTADOS ***************************** */
let qs = location.search // nos devuelve una qs en formato de texto que es dificl de trabajar
let qsOL = new URLSearchParams(qs)
let  id = qsOL.get("busqueda") //Como id se guarda lo que busca el usuario

let FindResults = document.querySelector(".FindResults")
FindResults.innerText = `Resultados de búsqueda para ${id}:`

//FUNCTION PARA QUE DESAPAREZCA GIF UNA VEZ CARGA EL DOM

let sectionGif = document.querySelector(".sectionGif")
let main = document.querySelector("main")

let fetchCompletados = 0

main.style.display = "none"
function esconderGif() { //La voy a ejecutar cada vez que termina un fetch
  fetchCompletados += 1

  if (fetchCompletados >= 3) {
    sectionGif.style.display = "none"
    main.style.display = "block"
  }
}


//RESULTADOS CANCIÓN
let proxi = "https://cors-anywhere.herokuapp.com/"; 
let endpoint =`https://api.deezer.com/search/track?q=${id}`;
let url = proxi + endpoint;

let cancionesbusqueda = document.querySelector("#cancionesSeccion")
let titleArticleCanciones = document.querySelector(".titleArticleCanciones")


fetch(url)
    .then(function(response) {
      return response.json()
    })

    .then(function(data) {
      console.log(data);

      //Si no hay resultados de búsqueda
      if (data.data.length == 0) {
        titleArticleCanciones.innerText=  `No hay resultados de canciones para tu busqueda `

      }
      
      //Si hay resultados, recorro el array
      else {   
        for (let i = 0; i < 5; i++){
              tracks = data.data
              if (tracks[i] != null) { //Si hay más tracks que recorrer
                cancionesbusqueda.innerHTML += ` <article class="articleMain">
                                                      <img class="articleImg" src="${tracks[i].album.cover_medium}" alt=""> 
                                                      <h3 class="title">${tracks[i].title}</h3>
                                                      <p class="name">${tracks[i].artist.name}</p>
                                                      <a  href="./detallesCancion.html?id=${tracks[i].id}">
                                                      <button type="" class="verMas">Ver más</button>
                                                      </a>
                                                </article>`
              }
              

        }
      }
      
      esconderGif()

  })
  .catch(function(error) {
    console.log("Error: " + error);

  })


//RESULTADOS ARTISTAS
let artistasSeccion= document.querySelector("#artistasSeccion")
let titleArticleArtistas = document.querySelector(".titleArticleArtistas")


let endpointArtist =`https://api.deezer.com/search/artist?q=${id}`;
let urlArtist = proxi+ endpointArtist;

fetch(urlArtist)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  if (data.data.length == 0) {
        titleArticleArtistas.innerText=  `No hay resultados de artistas para tu busqueda `

      }
  else{
        for (let i = 0; i < 5; i++){
             let artists = data.data;;
             if (artists[i] != null) { 
              artistasSeccion.innerHTML += `<article class="articleMain">
                                                <img class="articleImg" src="${artists[i].picture_medium}" alt="">
                                                <h3 class="name">${artists[i].name}</h3>
                                                <a href="./detallesArtista.html?id=${artists[i].id}">
                                                <button type="" class="verMas">Ver más</button> </a>
                                           </article>`
             }
        }
   
  }
  
  esconderGif()

})
.catch(function(error) {
  console.log("Error: " + error);
})


//RESULTADOS DISCOS
let discosSeccion = document.querySelector("#discosSeccion")
let titleArticleDiscos = document.querySelector(".titleArticleDiscos")


let endpointAlbum =`https://api.deezer.com/search/album?q=${id}`;
let urlDiscos = proxi+ endpointAlbum;

fetch(urlDiscos)
.then(function(response) {
  return response.json()
})
.then(function(data) {

  console.log(data);
  if (data.data.length == 0) {
    titleArticleDiscos.innerText=  `No hay resultados de álbumes para tu busqueda`

  }

  else{
     for (let i = 0; i < 5; i++){
          let albums = data.data
          if (albums[i] != null) {
            discosSeccion.innerHTML += `<article class="articleMain">
                                      <img class="articleImg" src="${albums[i].cover_medium}" alt="">
                                      <h3 class="title">${albums[i].title}</h3>
                                      <p class="name">${albums[i].artist.name}</p>
                                      <a href="./detallesDisco.html">
                                      <button type="" class="verMas">Ver más</button>
                                      </a>
                                      </article>`
          }
          
     }
}

esconderGif()

})
.catch(function(error) {
  console.log("Error: " + error);
})



