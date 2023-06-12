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

let cancionesFavoritas = localStorage.getItem("cancionesFavoritas");
let cancionesFavoritasArray = JSON.parse(cancionesFavoritas); //objeto literal json a lenguaje manipulable en js

let listaCancionesFavoritas= document.querySelector(".listaCancionesFavoritas");

for (let i= 0; i < cancionesFavoritasArray.length; i++) {
    let idCanción = cancionesFavoritasArray[i]

    // apiKey = d7e720fab5cf3fb9758c3d08bf546d59; 
    let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
    let endpoint ="https://api.deezer.com/track/" + idCanción; /*Es la ruta que proporciona la informacion a renderizar, pero en este caso le agregó el id correspondiente a lo que el usuario clickeo*/
    let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */


    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            
            listaCancionesFavoritas.innerHTML += 
                `<h3 class="nombreCanciónFavorita">${data.title}</h3>
                <p class="nombreArtistaCanciónFavorita">${data.artist.name}</p>
                <img class="imgCanciónFavorita" src="${data.album.cover_small}" alt="imagen canción favorita" >`
        })
        .catch(function (error) {
            console.log("Error: " + error);
        })
}

