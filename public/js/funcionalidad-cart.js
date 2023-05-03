
window.addEventListener('load', function (e) {
    let botonAñadirCart = document.querySelector('#boton-añadir-carrito')
    let nombreProducto = document.querySelector('#titulo-producto-details')
    botonAñadirCart.addEventListener('click', function (e) {
        localStorage.setItem('key', '4')
        if (!localStorage.getItem('productCart')) {
            var productosGuardados = []
            const queryString = window.location.href
            const urlParam = queryString.slice(30);
            let id = urlParam
            console.log(id)
            fetch(`/api/products/${id}`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (product) {
                    let productoCart = product.data[0]
                    console.log(product)
                    let objectProduct = {
                        titulo: productoCart.name,
                        descripcion: productoCart.description,
                        precio: productoCart.price,
                        categoria: productoCart.CategoryProduct.name,
                        imagen: productoCart.image
                    }
                    productosGuardados.push(objectProduct)
                    console.log(objectProduct)
                    console.log(productosGuardados)
                    localStorage.setItem('productCart', JSON.stringify(productosGuardados))
                })
        } else {
            let productosGuardados =JSON.parse(localStorage.getItem('productCart'))
            const queryString = window.location.href
            const urlParam = queryString.slice(30);
            let id = urlParam
            console.log(id)
            fetch(`/api/products/${id}`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (devolucion) {
                    let productoCart = devolucion.data[0]
                    console.log(devolucion)
                    let objectProduct = {
                        titulo: productoCart.name,
                        descripcion: productoCart.description,
                        precio: productoCart.price,
                        categoria: productoCart.CategoryProduct.name,
                        imagen: productoCart.image
                    }
                    productosGuardados.push(objectProduct)
                    console.log(objectProduct)
                    console.log(productosGuardados)
                    localStorage.setItem('productCart', JSON.stringify(productosGuardados))
                })
        }
    }
)
})
