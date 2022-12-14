let products = [
    {
        id: 1,
        descripcion: 'Samsung S21 FE',
        precio: 60000,
        imagenPrincipal: "/img/celular.png",
        imagenShowcase2: "/img/s21fe-dorado.jpg",
        imagenShowcase3: "/img/s21fe-lila.jpg",
        detalle: "el diseño del Samsung Galaxy S21 FE tenemos sensaciones encontradas. Lo positivo gusta mucho, aunque lo negativo tiene más peso de lo que nos gustaría. El S21 FE mantiene la línea de diseño de su hermano, el Galaxy S21. Es un diseño industrial no muy llamativo, pero con una parte trasera atractiva y un frontal bien aprovechado. Bajo el punto de vista de un servidor, es elegante, más aún en esta unidad de color negro que repele bastante bien las huellas. Detalles del producto: Triple Cámara trasera de 12 MP + 12 MP + 8 MP Cámara Frontal de 32 MP. Infinity-O Display de 6.4 FHD+ Dynamic AMOLED 2X HID 120Hz. Procesador Exynos 2100 | Octa-Core 2.9GHz,2.8GHz,2.2GHz. 4.500 mAh para mayor duración de la batería y 25W Super Fast charging",
        colores: 'lila / dorado / verde',
        disponibilidad: 'en stock',
        categoria: 'Celulares',
        ubicacionesDisponible: 'todo el pais'
    },

    {
        id: 2,
        descripcion: 'Samsung S22 ULTRA',
        precio: 100000,
        imagenPrincipal: "/img/s21fe-dorado.jpg",
        imagenShowcase2: "/img/s22gris.jpg",
        imagenShowcase3: "/img/s22naranja.jpg",
        detalle:"Con un diseño de vanguardia, el celular Samsung Galaxy S22 Ultra es un teléfono único que ofrece una pantalla Dynamic AMOLED 2x con una resolución Quad HD+ sin Notch ni distracciones. Además, tiene 12GB de RAM y 256GB de almacenamiento. Desempeño: Su procesador Octa-Core y la memoria RAM de 12 GB te permitirán ejecutar aplicaciones y realizar múltiples tareas al mismo tiempo. Además, su sistema operativo Android es eficiente y fácil de usar.",
        colores:'Gris / Blanco / verde / Naranja',
        disponibilidad:'en stock',
        categoria:'Celulares',
        ubicacionesDisponible:'todo el pais'

    },

    {
        id: 3,
        descripcion: 'Iphone 13 Pro',
        precio: 100000,
        imagenPrincipal: "/img/iphone13pro-azul.jpg",
        imagenShowcase2: "/img/iphone13pro-blanco.jpg",
        imagenShowcase3: "/img/iphone13pro-negro.jpg",
        detalle: "Pantalla: Si la pantalla de los iPhone era buena, ahora, desde esta generación es mucho mejor. Contábamos con un panel OLED, pues en este modelo podremos disfrutar de una pantalla Super Retina XDR de 6,1 pulgadas. Y, no solo esto, sino que la tasa de refresco tiene una importante novedad, pues este smartphone de Apple llega con hasta 120 Hz con ProMotion. Dejará de contar con una tasa básica de 60 Hz, por lo que a partir de ahora se adaptará según las exigencias y lo que considere el propio sistema operativo. Además de que el brillo también se ha potenciado en esta generación. En cualquiera caso, estamos ante un iPhone 13 Pro que no solo será una gran opción para ver todo tipo de contenidos, ya sean en streaming o no, sino que será el modelo idóneo para jugar a todo tipo de videojuegos en alta resolución." ,
        colores: 'Blanco / azul / negro' ,
        disponibilidad: 'en stock' ,
        categoria: 'Celulares',
        ubicacionesDisponible: 'todo el pais'
    }
]


module.exports = {
    
    index:  (req, res) => {
       res.render('otroPosibleHome', {productos: products});   
    }, 
    
    register:  (req, res) => {
        res.render('register');
    },
    
    login:  (req, res) => {
        res.render('login');
    },
    
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    
    productCart: (req, res) => {
        res.render('productCart');
    },
    
    iphoneTrece: (req, res) => {
        res.render('iphone13');
    },
    
    sUltra: (req, res) => {
        res.render('s22Ultra');
    },
    
    sFe: (req, res) => {
       res.render('s21Fe');
    },

    detail: (req, res) => {

        let id = req.params.id;

        let product = products.find(product => product.id == id)

        res.render('details', {product});
    }
    }
