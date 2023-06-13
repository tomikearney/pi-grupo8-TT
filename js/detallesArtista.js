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


/******************** Detalle Artista ******************************/
let queryString = location.search //obtengo query string
let queryStringObj = new URLSearchParams(queryString) // la paso a formato adecuado

let id = queryStringObj.get("id") //pongo la clave como parámentro y obtengo su valor

// apiKey = d7e720fab5cf3fb9758c3d08bf546d59;
let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
let endpoint ="https://api.deezer.com/artist/" + id; /*Es la ruta que proporciona la informacion a renderizar, pero en este caso le agregó el id correspondiente a lo que el usuario clickeo*/
let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */

let articleDetallesArtistas = document.querySelector(".articleDetallesArtistas") //obtengo section donde debo escribir info general(albumes no)

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        

        articleDetallesArtistas.innerHTML += ` <h2 class="h2NombreCantante">${data.name}</h2>
            <img id="fotoCantante" src="${data.picture}" alt="">
            `
        

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


let urlAlbumes = url + "/albums" //url con información específica de los albumes del artista al que pertenece el id
let listaAlbumesArtista = document.querySelector(".listaAlbumesArtista") //obtengo section donde debo escribir albumes

    fetch(urlAlbumes) 
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.data);
        
        for (let i = 0; i < 5; i++) {
            listaAlbumesArtista.innerHTML += `
            <li>${data.data[i].title}</li>
            `
        }
        
        

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })