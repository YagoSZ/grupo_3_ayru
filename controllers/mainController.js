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

    listado: (req, res) => {
        res.render('listado', {productos: products})
    },

    create: (req, res) => {

        res.render('creacionProd');

    },

    products: (req, res) => {
        productToCreate = {
            id: products[products.length - 1].id + 1,
            ...req.body,
        }

        products.push(productToCreate);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''));

        res.redirect('/')

    },

    // ediProd: (req, res) => {
    //     res.render('edicionProd', {});
    // },

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
        ...req.body,
        imagenPrincipal: productToEdit.imagenPrincipal,
        imagenShowcase2: productToEdit.imagenShowcase2,
        imagenShowcase3: productToEdit.imagenShowcase3,
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

    destroy: (req, res) => {
        let id = req.params.id;

        let productToDelete = products.filter(product => product.id != id);

        fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete));

        res.redirect('/products');
    }
}

