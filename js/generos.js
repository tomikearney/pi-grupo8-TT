
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


