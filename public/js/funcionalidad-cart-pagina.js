window.addEventListener('load', function(e){
    let tarjetaProductos = document.querySelector('.titulo-tarjeta')
    let contenedorTarjetas = document.querySelector('.contenedor-tarjetas')
    let productoEnCart = JSON.parse(localStorage.getItem('productCart'))
    let limpiar = document.querySelector('#borrar-carrito')
    let totalCompra = document.querySelector("#total-precio-cart")
    let obtenerCotizacion = document.querySelector('#obtener-cotizacion-carrito')

    if(productoEnCart){
        let contador = 0
        
        for(let i = 0; i < productoEnCart.length; i++){
            contenedorTarjetas.innerHTML += '<article class="card"> <img class=productos src="'+ productoEnCart[i].imagen +'" alt="Camiseta"><div class="descripcion-producto"><div><h2 class="titulo-tarjeta">' + productoEnCart[i].titulo + '</h2><h3 class="subtitulo-tarjeta">' + productoEnCart[i].categoria + '</h3></div><div class="etiqueta-precio"><div><div class="etiqueta-precio"><div><p>$' + productoEnCart[i].precio + 'x</p></div><select name="cantidad-producto" id="cantProd"><option value="1" selected>1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><div><p>= $Total</p></div></div></div></article>'
            contador += parseInt(productoEnCart[0].precio)
        }

        
        obtenerCotizacion.addEventListener('click', function(e){
            let contador2 = 0
            let etiquetaPrecio = document.querySelectorAll('#cantProd')
            for(let i = 0; i < etiquetaPrecio.length; i++){
                contador2 += parseInt(etiquetaPrecio[i].value)
            }
            console.log(contador)
            console.log(contador2)
            totalCompra.innerHTML = contador * contador2
            console.log(etiquetaPrecio[0].value)
        })

        limpiar.addEventListener('click', function(e){
            localStorage.clear()
            location.reload()
        })


        contenedorTarjetas.innerHTML += '<div class="boton-escritorio"><p><i class="fa-solid fa-angle-down"></i></p></div>'


    }else {
        contenedorTarjetas.innerHTML = '<h2 class="h2-carrito-vacio">El carrito esta vacio</h2>'
        contenedorTarjetas.style.display = 'flex'

        limpiar.addEventListener('click', function(e){
            alert('el Carrito ya esta vacio')
        })

        obtenerCotizacion.addEventListener('click', function(e){
            alert('el Carrito esta vacio')
        })
    }

})


