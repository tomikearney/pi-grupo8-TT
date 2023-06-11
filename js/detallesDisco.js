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

/************************DETALLE DISCO ************************* */

let queryString = location.search //obtengo query string
let queryStringObj = new URLSearchParams(queryString) // la paso a formato adecuado

let idDisco = queryStringObj.get("id") //pongo la clave como parámentro y obtengo su valor

let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
let endpoint ="https://api.deezer.com/album/" + idDisco; /*Es la ruta que proporciona la informacion a renderizar, pero en este caso le agregó el id correspondiente a lo que el usuario clickeo*/
let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */

let sectionDetallesDisco = document.querySelector(".sectionDetallesDisco") //obtengo section donde debo escribir info general

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        sectionDetallesDisco.innerHTML += `<h1 class="nombreDisco">${data.title}</h1>
        <p class="nombreArtista">${data.artist.name}</p>
        <p class="géneroArtista">${data.genres.data[0].name}</p>
        <p class="fechaDisco">${data.release_date}</p>
        <img class="imgTapaDisco" src="${data.cover}" alt="Tapa disco"> 
        `

        let listaCancionesDisco = document.querySelector(".listaCancionesDisco") //obtengo article donde debo escribir listado canciones del álbum
        for (let i = 0; i < data.tracks.data.length; i++) {
            listaCancionesDisco.innerHTML += `
            <li>${data.tracks.data[i].title}</li>`
        

    }})
    .catch(function (error) {
        console.log("Error: " + error);
    })
