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

      let titleGenero = document.querySelector(".titleGenero");
      titleGenero.innerText = data.name;
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
    let liForGeneros  = document.querySelector(".liForGeneros")

    for (let i = 0; i < data.data.length; i++) {
      liForGeneros.innerHTML +=` <li>
                                    <a href="detallesArtista.html?id=${data.data[i].id}">
                                    <h2 class='raleway'>${data.data[i].name}</h2>
                                    <img class='invisible-border' src="${data.data[i].picture_medium}" alt="${data.data[i].name}">
                                    </a>
                                </li>`
    }
  
  })
  .catch(function (error) {
    console.log(`Error:${error}`);
  }); 
 

