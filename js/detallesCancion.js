//OBTENER DATOS DE API


let queryString = location.search //obtengo query string
let queryStringObj = new URLSearchParams(queryString) // la paso a formato adecuado

let id = queryStringObj.get("id") //pongo la clave como parámentro y obtengo su valor

//Creo una variable donde este la Key de la API
// let apiKey = d7e720fab5cf3fb9758c3d08bf546d59; PREGUNTAR
let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
let endpoint ="https://api.deezer.com/track/" + id; /*Es la ruta que proporciona la informacion a renderizar, pero en este caso le agregó el id correspondiente a lo que el usuario clickeo*/
let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */


fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let sectionDetallesCancion = document.querySelector(".sectionDetallesCancion") //obtengo section donde debo escribir todo

        sectionDetallesCancion.innerHTML += `<h2 class="nombreCancion">${data.title}</h2> 
        <p class="nombreArtista">${data.artist.name}</p>
        <h4 class="nombreDisco">${data.album.title}</h4>
        <img class="imgTapaDisco" src="${data.album.cover}" alt="Tapa disco"> 
        <h4 class="agregarAMiPlaylist">Agregar a mi playlist</h4> 
        <h4><a class="irAMiPlaylist" href="./playlist.html">Ir a mi playlist</a></h4>`
        

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

//EVENTO PARA AGREGAR Y REMOVER CANCIÓN DE FAVORITOS

let agregarAMiPlaylist = document.querySelector(".agregarAMiPlaylist")
let nombreCancion = document.querySelector(".nombreCancion")

agregarAMiPlaylist.addEventListener("click", function(e) {
    let cancionesFavoritas = localStorage.getItem("cancionesFavoritas");
    
    if (!cancionesFavoritas) { //si cancionesFavoritas no existe
        cancionesFavoritas = []; //lo crea vacío
    } else { //si cancionesFavoritas ya existe
        cancionesFavoritas = JSON.parse(cancionesFavoritas); //lo transforma a formato manipulable para que lo usemos
    }

    if (agregarAMiPlaylist.innerHTML == "Agregar a mi playlist") { //si no se agrego a la playlist
        agregarAMiPlaylist.innerText = "Agregado a tu playlist" 

        cancionesFavoritas.push(nombreCancion.innerHTML) //Agrega la canción al array
        let cancionesFavoritasString = JSON.stringify(cancionesFavoritas) //transforma al array a stringyfy
        localStorage.setItem("cancionesFavoritas", cancionesFavoritasString) //vuelve a subir el array(stringyfy) al local storage

    } else if (agregarAMiPlaylist.innerHTML == "Agregado a tu playlist"){ //Si ya está en la playlist
        agregarAMiPlaylist.innerText = "Agregar a mi playlist" 

        let indiceCanción = cancionesFavoritas.indexOf(nombreCancion.innerHTML) //Te da el índice de la canción que le pases en el array
        cancionesFavoritas.splice(indiceCanción, 1) //Elimina la canción correspondiente a ese índice del array obtenido anteriormente
        let cancionesFavoritasString = JSON.stringify(cancionesFavoritas) //transforma al array a stringyfy
        localStorage.setItem("cancionesFavoritas", cancionesFavoritasString) //vuelve a subir el array(stringyfy) al local storage
    }
})

