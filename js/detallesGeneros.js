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

  
/******************** TRAYENDO DATOS DE LA API ******************************/


let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let id = queryStringObj.get("id"); //MODIFICACION DE ENDPOINTS
let urlGeneros = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + id;
let urlArtistasForAGenre = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/`+id+`/artists`;

let listaGeneros = document.querySelector(".listaGeneros") //article de genero donde estaran los generos

fetch(urlGeneros)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {

      let tituloGenero = document.querySelector(".tituloGenero");
      tituloGenero.innerText = data.name;
    })
    .catch(function (error) {
      console.log(`Error:${error}`);
    }); 


fetch(urlArtistasForAGenre) // esta url nos da todos los artistas pertenecientes a un determinado genero
  .then( function (response) {
    return response.json();
  })
  
  .then(function (data) {
    // console.log(data);
    let listaForGeneros  = document.querySelector(".listaForGeneros")

    for (let i = 0; i < data.data.length; i++) {
      listaForGeneros.innerHTML += `<li>
                                    <a href="detallesArtista.html?id=${data.data[i].id}">
                                    <img class='invisible-border' src="${data.data[i].picture_medium}" alt="${data.data[i].name}">
                                    <h2 class='nameSinger'>${data.data[i].name}</h2>
                                    </a>
                                </li>`
                                    
  
    }
  
  })
  .catch(function (error) {
    console.log(`Error:${error}`);
  }); 
 




