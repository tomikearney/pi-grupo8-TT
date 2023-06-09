/******************** FORMULARIO ******************************/
let form = document.querySelector("#buscadorForm");
let campoBuscador = document.querySelector("#searchInput");
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

/******************DETALLE CANCIONESS*****************/ 
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
        `
        

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

//EVENTO PARA AGREGAR Y REMOVER CANCIÓN DE FAVORITOS

let agregarAMiPlaylist = document.querySelector(".agregarAMiPlaylist") //Usuario clickeará en este elemento para agregar o quitar de la playlist

let cancionesFavoritas = localStorage.getItem("cancionesFavoritas");
    
if (!cancionesFavoritas) { //si cancionesFavoritas no existe
    cancionesFavoritas = []; //lo crea vacío
} else { //si cancionesFavoritas ya existe
    cancionesFavoritas = JSON.parse(cancionesFavoritas); //lo transforma a formato manipulable en js para que lo usemos
}

if (cancionesFavoritas.includes(id)) { //si el id está en el cancionesFavoritas
    agregarAMiPlaylist.innerText = "Quitar de tu playlist"
}

agregarAMiPlaylist.addEventListener("click", function(e) {
    if (cancionesFavoritas.includes(id)) { //si el id está en el cancionesFavoritas
        let indiceCanción = cancionesFavoritas.indexOf(id) //Te da el índice de la canción que le pases en el array
        cancionesFavoritas.splice(indiceCanción, 1) //Elimina la canción correspondiente a ese índice del array obtenido anteriormente
        agregarAMiPlaylist.innerText = "Agregar de tu playlist" 

    } else { //si el id no está en el cancionesFavoritas
        cancionesFavoritas.push(id) //Agrega el id al array
        agregarAMiPlaylist.innerText = "Quitar de tu playlist"


    }

    let cancionesFavoritasString = JSON.stringify(cancionesFavoritas) //transforma al array a stringyfy
        localStorage.setItem("cancionesFavoritas", cancionesFavoritasString) //vuelve a subir el array(stringyfy) al local storage
})

