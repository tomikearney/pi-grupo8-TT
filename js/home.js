function formulario() {
    let buscador = document.querySelector('#search-input').value;
    if (buscador== "") {
        alert ("por favor ingrese un espacio");
        return false
        
    }
    if (buscador.length < 3 ) {
        alert("el termino es muy corto");
        return false
        
    }

    return true
    
}

//Diseños Home
