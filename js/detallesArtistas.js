//FALTA conectar con API para obtener datos

let nombreCanción = document.querySelector(".nombreCanción")
let nombreArtista = document.querySelector(".nombreArtista")
let nombreDisco = document.querySelector(".nombreDisco")

//ACA DEBERÍA IR LA PARTE DONDE SE SOBRESCRIBEN LAS 3 VARIABLES DE ARRIBA POR LO QUE ESTÉ EN LA API
//hacer un for para buscar la info correspondiente a la canción y sobreescribir usando un innerText

//Evento para agregar canción a mi playlist

let agregarAMiPlaylist = document.querySelector(".agregarAMiPlaylist")

agregarAMiPlaylist.addEventListener("click", function(e) {
    if (agregarAMiPlaylist.innerHTML == "Agregar a mi playlist") {
        agregarAMiPlaylist.innerText = "Agregado a tu playlist"
        localStorage.setItem("cancionesFavoritas", nombreCanción.innerHTML)
        console.log(localStorage);

    } else if (agregarAMiPlaylist.innerHTML == "Agregado a tu playlist"){
        agregarAMiPlaylist.innerText = "Agregar a mi playlist"
        localStorage.removeItem(nombreCanción.innerHTML)
        console.log(localStorage);
    }
})





