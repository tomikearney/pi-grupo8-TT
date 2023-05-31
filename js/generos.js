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
       acanciones.innerHTML += `<li class="listaGenero">
                        <a class="aclickeo" href="./detail-genres.html?idGenero=${data.genres[i].id}">${data.genres[i].name}</a>
                        </li>`;
       
       
    }
    return data;
}
)
.catch(function (error) {
    return error;
}
)
