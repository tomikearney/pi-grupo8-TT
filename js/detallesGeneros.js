let qs = location.search;
let qsOL= new URLSearchParams(qs);
let id = qsOL.get("id");

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart" + id;
let cancionesSeccion = document.querySelector("#cancionesSeccion")

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for (let i = 0; i < 15; i++){
    let artists = data.artists.data;;
    console.log(canciones[i].id);
    cancionesSeccion.innerHTML += `+= <article class="articleMain">
                                       <img class="articleImg" src="${artists[i].picture_medium}" alt="">
                                       <h3 class="name">${artists[i].name}</h3>
                                       <a href="./detallesArtista.html?id=${artists[i].id}">
                                       <button type="" class="verMas">Ver más</button> </a>
                                  </article>`


}

})
.catch(function(error) {
  console.log("Error: " + error);
})
