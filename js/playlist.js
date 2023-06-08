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



/*********************** PLAYLIST ********************************* */
let cancionesFavoritas = localStorage.getItem("cancionesFavoritas");
let resultadolocal = JSON.parse(cancionesFavoritas);
console.log(resultadolocal);
let listacanciones= document.querySelector(".articleMain");

for (let i= 0; i< resultadolocal.length; i++) {
   listacanciones.innerHTML += `<img class="song" src="./img/artistasHome.png "  alt="" >
   <h3 class="title">Titulo</h3>
   <p class="name">Nombre del autor</p>`
    
}
