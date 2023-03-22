const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
const {validationResult} = require('express-validator');
const session = require('express-session')



module.exports = {
    
    index:  (req, res) => {
       
       res.render('otroPosibleHome', {productos: products});   
    }, 
    
    register:  (req, res) => {
        res.render('register');
    },

    crearUsuario:  (req, res) => {

        let errors = validationResult(req);
        if(errors.isEmpty()){

            let img 

            if (req.file != undefined){
                img = req.file.filename;
            }
            else {
                img = '/img/default1.png';
            }

            let userToCreate = {
                "id": users[users.length - 1].id + 1,
                "firstName": req.body.nombre,
                "lastName": req.body.apellido,
                "email": req.body.email,
                "password": bcrypt.hashSync(req.body.password, 10),
                "admin": false,
                "image": img
            }

            users.push(userToCreate);

            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ''));


            res.redirect('/');
        }else{
            console.log(req.body.password);
            res.render('register', {errors: errors.mapped(), old: req.body})
        }


    },



    
    login:  (req, res) => {
        res.render('login');
    },

    ingresar:  (req, res) => {
        console.log(req.body)

        const {email, password} = req.body
        const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')))

        const loggedUser = users.find(user => user.email == email )
        console.log(loggedUser)

        if (loggedUser){
          let validPassword =  bcrypt.compareSync(password, loggedUser.password)
          console.log(validPassword)
          if(validPassword){
            req.session.usuario = loggedUser;
            res.redirect('/')
          }
          else{
            res.redirect('/login')
          }
        } else {
            res.redirect('/login')
        }
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

