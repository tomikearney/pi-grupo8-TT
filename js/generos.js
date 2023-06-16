
 //Declaro varables para el form 
 let form = document.querySelector("#buscadorForm");//capturo el formulario
 let campoBuscador = document.querySelector("#searchInput");//[name=busqueda]capturamos el campo del busqueda
 
 //Agregamos un evento al buscador para que no deje buscar con campo vacio o menos de 3 carácteres
 form.addEventListener ("submit", function(e){
     e.preventDefault();
     console.log(campoBuscador.value);
     if(campoBuscador.value == ''){
          alert('Debe ingresar alguna palabra');
     } else if (campoBuscador.value.length < 3){
          alert('Ingresar al menos 3 caracteres');
     } else{
          this.submit();
     }
 })

/************************ GENEROS ***********************************/ 
 
 let urlgeneros = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';
 let articleGenerosMusicales = document.querySelector(".articleGenerosMusicales")
 
fetch(urlgeneros)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        for(let i = 1; i < data.data.length; i++) { 
            console.log(data.data[i].name)

            articleGenerosMusicales.innerHTML += `<div class="divGeneros">
                                            <a class="aClickeo" href="./detallesGeneros.html?id=${data.data[i].id}">${data.data[i].name}</a>
                                        </div>`
        }
    })

    .catch(function (error) {
        return error;
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

