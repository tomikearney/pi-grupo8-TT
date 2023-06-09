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

/************************** DETALLE GENERO ***************************** */
let urlgeneros = `https://api.allorigins.win/raw?url=
https://api.deezer.com/genre`
let aCanciones = document.querySelector(".aCanciones")

fetch(urlgeneros)
   .then(function (response) {
       return response.json();
   })
   .then(function (data) {
       console.log(data);
       for (let i = 0; i < data.data.length; i++) {
           console.log(data.data[i].name)
           aCanciones.innerHTML += `<li class="listaGenero">
                                       <a class="aclickeo" href="./detallesGenereos.html?idGenero=${data.data[i].id}">${data.data[i].name}</a>
                                   </li>`;
       
       
       }
       return data; 
})
.catch( function(error){
    console.log(`Error: ${error}`)
})

