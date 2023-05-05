window.addEventListener('load', function(e){
    
    let tarjetaProducto = document.querySelectorAll('.contenedor-imagen')
    console.log(tarjetaProducto)

    let precioProducto = []
    for (let i = 0; i < tarjetaProducto.length; i++) {
        let fraseQuery = '#precioTarjeta' + i
        console.log(fraseQuery)
        precioProducto.push(document.querySelector(fraseQuery)) 
        tarjetaProducto[i].addEventListener('mouseover', function(e){
            console.log(precioProducto)
            precioProducto[i].style.display = 'block'
            this.style.boxShadow =  '0px 0px 28px 11px rgba(0,0,0,0.75)'
            this.style.webkitBoxShadow = '0px 0px 28px 11px rgba(0,0,0,0.75)'
            this.style.mozBoxShadow =  '0px 0px 28px 11px rgba(0,0,0,0.75)'
        })
        tarjetaProducto[i].addEventListener('mouseout', function(e){
            console.log(precioProducto)
            precioProducto[i].style.display = 'none'
            this.style.boxShadow =  'none'
            this.style.webkitBoxShadow = 'none'
            this.style.mozBoxShadow =  'none'
        })
        
    }
    
})