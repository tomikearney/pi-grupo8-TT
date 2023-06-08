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
let queryString = location.search //Obtengo la cadena de texto de consulta de la URL actual
let queryStringObjeto = new URLSearchParams(queryString);
let id = queryStringObjeto.get("id") 

let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
let endpoint ="https://api.deezer.com/chart"; /*Es la ruta que proporciona la informacion a renderizar*/
let url = proxi+endpoint;
let cancionesbusquedad = document.querySelector("#cancionesSeccion")
let


fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  
  if (artistasbusquedad.length == 0) {
     cancionesbusquedad.innerHTML=  ` no hay resultado a tu busquedad `
  
     
  }
  else{
     cancionesbusquedad.innerHTML=  ` Estos son los resultados a tu busquedad  `
     for (let i = 0; i < 5; i++){
          let canciones =  data.tracks[i].data;
          cancionesbusquedad.innerHTML += ` <article class="articleMain">
                                                  <img class="articleImg" src="${canciones[i].album.cover_medium}" alt=""> 
                                                  <h3 class="title">${canciones[i].title}</h3>
                                                  <p class="name">${canciones[i].artist.name}</p>
                                                  <a  href="./detallesCancion.html?id=${canciones[i].id}">
                                                  <button type="" class="verMas">Ver más</button>
                                                  </a>
                                             </article>`



     }

  }
})
.catch(function(error) {
  console.log("Error: " + error);
})


