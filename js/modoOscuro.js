/*ACLARACIÓN: brian hablamos en clase y nos dijiste que como el uikit nos estaba modificando todos los estilos lo dejemos así*/

/*FUNCIONALIDAD MODO OSCURO*/

let modeToggle = document.querySelector("#modeToggle");

function pasarAModoOscuro(){ //Transforma todo a modo oscuro
     
     let footer = document.querySelector(".footer");
     let headerSeccionPrimeraParte = document.querySelector(".headerSeccionPrimeraParte");
     let body = document.querySelector("body");
     
     let headerNavBotonNode = document.querySelectorAll(".headerNavBoton"); //tipo de dato no iterable
     let headerNavBotonArray = Array.from(headerNavBotonNode) //lo transformo en array para poder iterar

     let html = document.querySelector(":root");

     for (let i = 0; i < headerNavBotonArray.length; i++) {
          headerNavBotonArray[i].style.backgroundColor = "dimgrey";
     }

     html.style.color = '#fff';

          
     footer.style.backgroundColor = "rgb(0 0 0 / 34%)"
     headerSeccionPrimeraParte.style.backgroundColor = "rgb(0 0 0 / 34%)"
     body.style.backgroundColor = "#191919fa"

     //modeToggle.style.backgroundImage = "url('../img/lightbulbpasarAModoClaro.png')"
     modeToggle.innerText = "Modo claro"
}

function pasarAModoClaro(){ //Transforma todo a modo claro
     let footer = document.querySelector(".footer");
     let headerSeccionPrimeraParte = document.querySelector(".headerSeccionPrimeraParte");
     let body = document.querySelector("body");
     
     let headerNavBotonNode = document.querySelectorAll(".headerNavBoton"); //tipo de dato no iterable
     let headerNavBotonArray = Array.from(headerNavBotonNode) //lo transformo en array para poder iterar

     let html = document.querySelector(":root");

     for (let i = 0; i < headerNavBotonArray.length; i++) {
          headerNavBotonArray[i].style.backgroundColor = "rgb(0, 61, 123)";
          }
     
     
     html.style.color = '#000';
     
     footer.style.backgroundColor = "rgb(0, 61, 123)";
     headerSeccionPrimeraParte.style.backgroundColor = "rgb(0, 61, 123)";
     body.style.backgroundColor = "#ffff"


     modeToggle.innerText = "Modo oscuro"
}


/*Determinar que modo está guardado en el storage*/
let modoActual = localStorage.getItem("modo"); //Traigo modo establecido actualmente
console.log(modoActual);
if (modoActual == "modo oscuro") {
     pasarAModoOscuro()
}
else if (modoActual == null) { //Si no había ningún modo establecido
     modoActual = "modo claro"
} //Si estaba guardado el modo oscuro

localStorage.setItem("modo", modoActual)

/*Evento cuando el usuario toca para cambiar de modo*/
modeToggle.addEventListener("click", function() {
     let modoActual = localStorage.getItem("modo"); //Traigo modo establecido actualmente

     if(modoActual == "modo claro"){ //Si el modo está en claro, va a pasar a oscuro
          localStorage.setItem("modo", "modo oscuro")
          pasarAModoOscuro()
     }
     else { //Si el modo está oscuro, va a pasar a claro
          localStorage.setItem("modo", "modo claro")
          pasarAModoClaro()
     }

});


