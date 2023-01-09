products = [
    {
        id: 1,
        descripcion: 'Samsung S21 FE',
        precio: 60.000,
        imagen: "/img/celular.png"
    },

    {
        id: 2,
        descripcion: 'Samsung A52s LTE 5G',
        precio: 100.000,
        imagen: "/img/celular2.png"
    }
]


module.exports = {
    
    index:  (req, res) => {
       res.render('otroPosibleHome');   
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
    
       ediCreaProd: (req, res) => {
        res.render('creacionEdicionProd');
    }
    }
