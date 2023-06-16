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
            <img id="fotoCantante" src="${data.picture_medium}" alt="">`
        
        let urlAlbumes = url + "/albums?limit=5" //url con información específica de los albumes del artista al que pertenece el id solo 5 porque de cada artista necesitamos 5 
        let listaAlbumesArtista = document.querySelector(".listaAlbumesArtista") //obtengo section donde debo escribir albumes

        fetch(urlAlbumes) 
            .then(function (albumResponse) {
            return albumResponse.json()
            })

            .then(function (albumData) {
                console.log(albumData);
            
                for (let i = 0; i < albumData.data.length; i++) {
                listaAlbumesArtista.innerHTML += `<li><a href="./detallesDisco.html?id=${albumData.data[i].id}">${albumData.data[i].title}</a></li>`
            
                }
            })
    })
    .catch(function (error) {
        console.log("Error: " + error)
    });


    //se deben poner uno dentro de otro fetch para que cuando se haga click en un album se rediriga y no de error

    /************************ MENU RESPONSIVIDAD ***********************************/ 

/*RESPONSIVIDAD: Le agregamos un evento al icono de menu de Home*/
     //capturo el elemento del DOM
     let botonMenu= document.querySelector("#icon-menu");
     //Le doy un evento "click", y una funcion (una callback)
     botonMenu.addEventListener("click", function () {
          
          let containerAll= document.querySelector("#moveContent") 
               containerAll.classList.toggle("moveContainerAll") //se creo una clase en style imaginaria, para luego usarla acá.
          //El contenido ya se mueve!

          let menuAparecer = document.querySelector("#showMenu")
               menuAparecer.classList.toggle("showLateral")
     }); 

