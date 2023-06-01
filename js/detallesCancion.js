//FALTA conectar con API para obtener datos

let nombreCanción = document.querySelector(".nombreCancion")
let nombreArtista = document.querySelector(".nombreArtista")
let nombreDisco = document.querySelector(".nombreDisco")

//ACA DEBERÍA IR LA PARTE DONDE SE SOBRESCRIBEN LAS 3 VARIABLES DE ARRIBA POR LO QUE ESTÉ EN LA API
//hacer un for para buscar la info correspondiente a la canción y sobreescribir usando un innerText

//Evento para agregar canción a mi playlist

let agregarAMiPlaylist = document.querySelector(".agregarAMiPlaylist")

agregarAMiPlaylist.addEventListener("click", function(e) {
    let cancionesFavoritas = localStorage.getItem("cancionesFavoritas");
    
    if (!cancionesFavoritas) {
        cancionesFavoritas = [];
    } else {
        cancionesFavoritas = JSON.parse(cancionesFavoritas);
    }

    if (agregarAMiPlaylist.innerHTML == "Agregar a mi playlist") {
        agregarAMiPlaylist.innerText = "Agregado a tu playlist"

        cancionesFavoritas.push(nombreCancion.innerHTML)
        let cancionesFavoritasString = JSON.stringify(cancionesFavoritas)
        localStorage.setItem("cancionesFavoritas", cancionesFavoritasString)

    } else if (agregarAMiPlaylist.innerHTML == "Agregado a tu playlist"){
        agregarAMiPlaylist.innerText = "Agregar a mi playlist"

        let indiceCanción = cancionesFavoritas.indexOf(nombreCancion.innerHTML) //Te da el índice de la canción que le pases en el array
        cancionesFavoritas.splice(indiceCanción, 1) //Elimina la canción correspondiente a ese índice del array obtenido anteriormente
        let cancionesFavoritasString = JSON.stringify(cancionesFavoritas)
        localStorage.setItem("cancionesFavoritas", cancionesFavoritasString)
    }
})





