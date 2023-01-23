const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));


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
    }, 

    ediProd: (req, res) => {
        res.render('edicionProd');
    },

    productsEdit: (req, res) => {

        let id = req.params.id;

        let product = products.find(product => product.id == id)

        res.render('edicionProd', {product});
    },
    
    update: (req, res) => {

        let id = req.params.id;

        let productToEdit = products.find(product => product.id == id)

        productToEdit = { 
        id: productToEdit.id,
        descripcion: req.body.producto,
        detalle: req.body.texto,
        colores: req.body.menu,
        disponibilidad: req.body.segundoMenu,
        price: req.body.numero,
        }

        let newProduct = products.map(product => {
            if(product.id == productToEdit.id) {
                return product = {...productToEdit}
            }
            
            return product
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(newProduct));

        res.redirect('/')
    },
}

