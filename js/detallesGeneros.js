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



