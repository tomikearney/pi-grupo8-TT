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

//Creo una variable donde este la Key de la API
// let apiKey = d7e720fab5cf3fb9758c3d08bf546d59; PREGUNTAR
let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
let endpoint ="https://api.deezer.com/artist/" + id; /*Es la ruta que proporciona la informacion a renderizar, pero en este caso le agregó el id correspondiente a lo que el usuario clickeo*/
let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */


fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let sectionDetallesArtistas = document.querySelector(".sectionDetallesArtistas") //obtengo section donde debo escribir todo

        sectionDetallesArtistas.innerHTML += ` <h2 class="h2NombreCantante">${data.name}</h2>
            <img id="fotoCantante" src="${data.picture}" alt="">
            <ul class="ulÁlbumesCantante">
                <li>Album 1</li>
                <li>Álbum 2</li>
            </ul>`
        

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })
