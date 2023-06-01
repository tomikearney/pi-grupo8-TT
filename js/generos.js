 let urlgeneros = `https://api.allorigins.win/raw?url=
 https://api.deezer.com/genre`
 let acanciones = document.querySelector(".acanciones")

 fetch(urlgeneros)
.then(function (response) {
    return response.json();
}
)
.then(function (data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(data)
       acanciones.innerHTML += `<li class="listaGenero">
                        <a class="aclickeo" href="./detallesGenereos.html?idGenero=${data.id[i]}">${data.name[i]}</a>
                        </li>`;
       
       
    }
    return data;
}
)
.catch(function (error) {
    return error;
}
)
