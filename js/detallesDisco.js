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

let id = queryStringObj.get("id") //pongo la clave como parámentro y obtengo su valor
console.log(id)
let proxi = "https://cors-anywhere.herokuapp.com/"; /*Te intercambia por otra la direccion, es un intermediario   */
let endpoint ="https://api.deezer.com/album/" + id; /*Es la ruta que proporciona la informacion a renderizar, pero en este caso le agregó el id correspondiente a lo que el usuario clickeo*/
let url = proxi+endpoint; /*las dos unidades unidas iran en el fetch */

let contenedorDetallesArtistas = document.querySelector(".contenedorDetallesArtistas") //obtengo section donde debo escribir info general

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data); //se modifico la seleccion de datos del dom, porque no vi otra forma de solucionar el orden :)

        let nombreDisco = document.querySelector(".nombreDisco");
        let TapaDisco = document.querySelector(".TapaDisco");
        let artistaSong = document.querySelector(".artistaSong");
        let generoAlbumArtista = document.querySelector(".generoAlbumArtista");
        let lanzamiento = document.querySelector(".lanzamiento");
        
        nombreDisco.textContent = data.title;
        TapaDisco.src = data.cover_medium;
        artistaSong.innerHTML +=  `<a  href="./detallesArtista.html?id=${data.artist.id}">${data.artist.name}</a>`;
        //se debe redirigir a la pagina de detalles genero, en caso que presente. 
        if(data.genres.data.length>0){
            generoAlbumArtista.innerHTML += `<a href="detallesGeneros.html?id=${data.genres.data[0].id}">${data.genres.data[0].name}</a>`;
        }else{
            generoAlbumArtista.innerHTML = "Genero Desconocido"
        }

        lanzamiento.innerHTML +=data.release_date;

        let listaCancionesDisco = document.querySelector(".listaCancionesDisco") //obtengo article donde debo escribir listado canciones del álbum
        //se agrego un par de cosa para que la lista de canciones se guarde. A su vez, luego rediriga a detallesCanciones.
        let songList= "";

        for (let i = 0; i < data.tracks.data.length; i++) {
            let song =data.tracks.data[i];
            console.log(song)
           songList +=`<li class='liCancionesAlbum'><p><a class = "enlasesStyle" href="detallesCancion.html?id=${song.id}">${song.title}</a></p></li>`

        } 
        listaCancionesDisco.innerHTML += songList;
        })

    .catch(function (error) {
        console.log("Error: " + error);
    })

