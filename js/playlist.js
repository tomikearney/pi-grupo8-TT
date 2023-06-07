let cancionesFavoritas = localStorage.getItem("cancionesFavoritas");
let resultadolocal = JSON.parse(cancionesFavoritas);
console.log(resultadolocal);
let listacanciones= document.querySelector(".articleMain");

for (let i= 0; i< resultadolocal.length; i++) {
   listacanciones.innerHTML += `<img class="song" src="./img/artistasHome.png "  alt="" >
   <h3 class="title">Titulo</h3>
   <p class="name">Nombre del autor</p>`
    
}
