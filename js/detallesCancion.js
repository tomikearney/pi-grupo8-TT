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

// apiKey = d7e720fab5cf3fb9758c3d08bf546d59; 
let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
let endpoint ="https://api.deezer.com/track/" + id; /*Es la ruta que proporciona la informacion a renderizar, pero en este caso le agregó el id correspondiente a lo que el usuario clickeo*/
let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */

//ORI
let detallesSongs = document.querySelector("#detallesSongs");//modifico elementos del dom
let previewSong = document.querySelector("#previewSong"); //article de la muestra de la cancion
let previewAudio = document.querySelector("#previewAudio");



fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        
        let nameSongs = document.querySelector(".nameSongs");
        let imgTapaDisco = document.querySelector(".imgTapaDisco");
        let artistaSong = document.querySelector(".artistaSong");
        let albumSongs = document.querySelector(".albumSongs");
        let duracionCancion = document.querySelector(".duracionCancion");
        let lanzamiento = document.querySelector(".lanzamiento");

        nameSongs.innerText = data.title;
        imgTapaDisco.src = data.album.cover_medium;
        artistaSong.innerHTML += `<a href="./detallesArtista.html?id=${data.artist.id}">${data.artist.name}</a>`
        albumSongs.innerHTML +=`<a href="./detallesDisco.html?id=${data.album.id}">${data.album.title}</a>`
        duracionCancion.innerHTML += data.duration + ` Segundos`;
        lanzamiento.innerHTML += data. release_date

        //lyrics de la cancion
        let explicitSong = document.querySelector(".explicitSong");
        if(data.explicit_lyrics ===true){
            explicitSong.innerHTML += "Contiene Lyrics";
        }else{
            explicitSong.innerHTML += "No contiene Lyrics";
        }

        //preview de 30 segundos
        let previewUrl =data.preview;
        if(previewUrl){
            previewAudio.src = previewUrl;

            previewAudio.load ();

            previewContainer.style.display = "block"
        }else{
            previewContainer.style.display = "none";
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
});

//EVENTO PARA AGREGAR Y REMOVER CANCIÓN DE FAVORITOS
let btnAgregarAMiPlaylist = document.querySelector('#agregarAMiPlaylist'); 
let btnName = document.querySelector(".btnName");

let favoritos = []; //

let cancionesFavoritasStorange = localStorage.getItem("favoritos"); //recupero del localStorage
    
if (cancionesFavoritasStorange != null) { //si cancionesFavoritas no existe
    favoritos = JSON.parse(cancionesFavoritasStorange); //lo transforma a formato manipulable en js (Objeto Literal) y se agrega al array de favoritos
}

if (favoritos.includes(id)) { //si el id está en favoritos
    btnName.innerText = "Quitar de tu playlist"
}

btnAgregarAMiPlaylist.addEventListener("click", function(e) {

    if (favoritos.includes(id)) { //si el id está en favoritos
        let indiceCanción = favoritos.indexOf(id) //Te da el índice de la canción que le pases en el array
        favoritos.splice(indiceCanción, 1) //Elimina la canción correspondiente a ese índice del array obtenido anteriormente
        btnName.innerText = "Agregar de tu playlist"; 

    } else { //si el id no está en favoritos
        favoritos.push(id); //Agrega el id al array
        btnName.innerText = "Quitar de tu playlist";
    }

    let cancionesFavoritasString = JSON.stringify(favoritos) //transforma al array a stringyfy
        localStorage.setItem("favoritos", cancionesFavoritasString) //vuelve a subir el array(stringyfy) al local storage
})

