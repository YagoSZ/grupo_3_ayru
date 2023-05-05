window.addEventListener('load', function(e){
    let menuDesplegable = document.querySelector('.dropdown')
    let listas = document.querySelector('.dropdown-content')
    let buscador = document.querySelector('.click-buscador')
    let buscadorDesplegable = document.querySelector('.buscador-desplegable ')

    menuDesplegable.addEventListener('click', function(e){
        listas.classList.toggle('dropdown-content-toggle') 
    })

    buscador.addEventListener('click', function(e){
        buscadorDesplegable.classList.toggle('buscador-desplegable-toggle')
    })

})