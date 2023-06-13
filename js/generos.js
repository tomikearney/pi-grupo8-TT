
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
 
 let urlgeneros = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre`;
 let listaGeneros = document.querySelector(".listaGeneros")
 
fetch(urlgeneros)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        let generos = '';

        for (let i = 0; i < data.data.length; i++) {
            console.log(data.data[i].name)

            listaGeneros.innerHTML += `<li class="listaGenero">
                                        <a class="aclickeo" href="./detallesGeneros.html?idGenero=${data.data[i].id}">${data.data[i].name}</a>
                                    </li>`;
        
        
        }
}
)
.catch(function (error) {
    return error;
 });


