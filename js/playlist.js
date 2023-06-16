
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

/*********************** PLAYLIST ********************************* */
let favoritos = [];

let cancionesFavoritasStorange = localStorage.getItem("favoritos");

if(cancionesFavoritasStorange != null){
    favoritos =JSON.parse (cancionesFavoritasStorange) //objeto literal json a lenguaje manipulable en js
}

let sectionPlaylist= document.querySelector(".sectionPlaylist");
let listaCancionesFavoritas = document.querySelector(".listaCancionesFavoritas")

if (favoritos === null ||favoritos.length === 0 ) {
    sectionPlaylist.innerHTML = `<p>Aún no agregaste nada a Tu Playlist</p>`
} else {
    for (let i= 0; i < favoritos.length; i++) {
    let id = favoritos[i]

    let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
    let endpoint ="https://api.deezer.com/track/" + id; /*Es la ruta que proporciona la informacion a renderizar, pero en este caso le agregó el id correspondiente a lo que el usuario clickeo*/
    let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            
            listaCancionesFavoritas.innerHTML += `<li class= "liFavoritos">
                                                        <img class='imgCancionFavorita' src="${data.album.cover}" alt="imagenCanciónFavorita">
                                                        <a class='playlistDetalleSong' href="./detallesCancion.html?id=${data.id}">
                                                        <h3 class='nombreCancionFavorita'>${data.title}</h3>
                                                        <p class="nombreArtistaCanciónFavorita">${data.artist.name}</p>
                                                        </a>
                                                    </li>`
        })
        .catch(function (error) {
            console.log("Error: " + error);
        })
    }
}



