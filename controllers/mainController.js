const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
const {validationResult} = require('express-validator');
const session = require('express-session')
const { Op } = require('sequelize');
const { Association } = require('sequelize');
const db = require('../database/models');
const sequelize = db.sequelize;
const { json } = require('sequelize');


module.exports = {
    
    index:  (req, res) => {
       let logged = req.session.usuario
       let promesaOfertas =  db.Product.findAll({
        order: [
            ['price', 'ASC']
        ],
        limit: 5
       })
       let promesaShowcase = db.Product.findAll({
        where: {
            name: {
              [Op.or]: ['Realme 10', 'Iphone 13 Pro', 'Notebook Lenovo']
            }
        }
       })
       let promesaDestacados = db.Product.findAll({
        order: [
            ['price', 'DESC']
        ],
        limit: 5
       })
       Promise.all([promesaShowcase, promesaDestacados, promesaOfertas])
       .then(function([productosShowcase, productosDestacados, productosOferta]){
        res.render('otroPosibleHome', {showcase: productosShowcase, productos: productosDestacados, ofertas: productosOferta, logged: logged});   
       })
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
                img = 'pngegg.png';
            }

            db.User.create({
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                category_id: 1,
                image: img
            }).then (function(usuario){
                db.User.findOne({
                    include: [{association: "Category"}],
                    where: {
                        email: usuario.email
                    }
                }).then(function(user){
                    console.log(user)
                    req.session.usuario = user
                    res.redirect('/');
                })
            })
        }else{
            res.render('register', {errors: errors.mapped(), old: req.body})
        }


    },

    traerPerfilUsuario: (req, res) => {
        res.render('Perfil', {usuario: req.session.usuario});
    },

    editarUsuario: (req, res) => {


        res.render('edicionPerfil', {usuario: req.session.usuario});
        
    },

    borrarUsuario: (req, res) => {

        db.User.destroy({
            where: {
                id: req.session.usuario.id
            }
        })
        .then(function(){
            res.redirect('/cerrarSesion')
        })
    
    },

    guardarEdicionUsuario: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){

            let img 

            if (req.file != undefined){
                img = req.file.filename;
            }
            else {
                img = 'pngegg.png';
            }

            db.User.update({
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                category_id: 1,
                image: img
            }, {
                where: {
                    id : req.session.usuario.id
                }
            })
            .then(function(){
                db.User.findOne({
                    include: [{association: "Category"}],
                    where: {
                        id: req.session.usuario.id
                    }
                })
                .then(function(usuario){
                    req.session.usuario = usuario
                    res.redirect('/');
                })
    
    
                
            })
        }else{
            res.render('edicionPerfil', {usuario: req.session.usuario, errors: errors.mapped(), old: req.body})
        }
    },

    
    login:  (req, res) => {
        res.render('login');
    },

    ingresar:  (req, res) => {

        const {email, password} = req.body

        db.User.findOne({
            include: [{association: "Category"}],
            where: {
                email: email
            }
        })
        .then(function(usuario){
            if (usuario){

                 bcrypt.compare(password, usuario.password, function(err, result){
                     if(result == true){
                         req.session.usuario = usuario  
                         return res.redirect('/')
                     }
                    else{
                        let errorPassword = 'La contraseña es incorrecta'
                        return res.render('login', {errorPassword})
                     }
                 })

            } else{
                let errorMail = 'No existe usuario con el mail: ' + email
                return res.render('login', {errorMail})
            }
        })
    },

    cerrarSesion: (req, res) => {
        req.session.usuario = undefined
        res.redirect('/');
    },
    
    productCart: (req, res) => {
        let logged = req.session.usuario
        res.render('productCart', {logged});
    },

    detail: (req, res) => {

        let id = req.params.id;

        db.Product.findOne({
            where: {
                id : req.params.id
            },
            include: [
                {association: "CategoryProduct"},
                {association: "Disponibility"},
                {association: "AvailableLocation"},
                {association: "colorsInProduct"},
            ],
        })
        .then(function(product){
            console.log(req.session.usuario)
            res.render('details', {product, logged: req.session.usuario})
        })
    }, 

    listado: (req, res) => {
        let id = req.params.id
        if(id == 1){
            db.Product.findAll({
                where: {
                    category_products_id: 1
                }
            })
            .then(function(productosCelulares){
                res.render('listado', {productosCelulares, logged: req.session.usuario})
            })
        } else if(id == 3){
            db.Product.findAll({
                where: {
                    category_products_id: 2
                }
            })
            .then(function(productosTelevisores){
                res.render('listado', {productosTelevisores, logged: req.session.usuario})
            })
        } else if(id == 4){
            db.Product.findAll({
                where: {
                    category_products_id: 3
                }
            })
            .then(function(productosNotebooks){
                res.render('listado', {productosNotebooks, logged: req.session.usuario})
            })
        } else if(id == 0){
            let promesaCelulares = db.Product.findAll({
                where: {
                    category_products_id: 1
                }
            })
            let promesaTelevisores = db.Product.findAll({
                where: {
                    category_products_id: 2
                }
            })
            let promesaNotebooks = db.Product.findAll({
                where: {
                    category_products_id: 3
                }
            })
            Promise.all([promesaCelulares, promesaTelevisores, promesaNotebooks])
            .then(function([productosCelulares, productosTelevisores, productosNotebooks]){
                res.render('listado', {productosCelulares, productosTelevisores, productosNotebooks, logged: req.session.usuario})
            })
        }
    },

    create: (req, res) => {
        let promesaLocations = db.AvailableLocation.findAll({
            order: [
                ['location', 'ASC']
            ],
        })
        let promesaCategory = db.CategoryProduct.findAll()

        Promise.all([promesaCategory, promesaLocations])
        .then(function([allCategorys, allLocations]){
            res.render('creacionProd', {allCategorys, allLocations, logged: req.session.usuario});
        })
    },

    products: (req, res) => {

        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Product.create({
                name: req.body.nombre,
                price: req.body.precio,
                image: '/img/default1.png',
                description: req.body.descripcion,
                colors: req.body.colores,
                disponibility_id: req.body.disponibilidad,
                category_products_id: req.body.categoria,
                available_locations: req.body.ubicacionesDisponible
            })
            .then(function(product){
                productoId = product.id
                arrayColores = req.body.colores
                for (let i = 0; i < arrayColores.length; i++) {
                    colorId = arrayColores[i]
                    db.products_colors.create({
                    id_products: productoId,
                    id_colors: colorId
                })
                }
    
            })
            .then(function(){
                res.redirect('/');
            })
        } else {
            let promesaLocations = db.AvailableLocation.findAll({
                order: [
                    ['location', 'ASC']
                ],
            })
            let promesaCategory = db.CategoryProduct.findAll()
    
            Promise.all([promesaCategory, promesaLocations])
            .then(function([allCategorys, allLocations]){
                console.log(errors)
                res.render('creacionProd', {allCategorys, allLocations, logged: req.session.usuario, old: req.body, errors: errors.mapped()})
            })
        }

    },

    productsEdit: (req, res) => {
        
        let id = req.params.id;
        let promesaLocations = db.AvailableLocation.findAll({
            order: [
                ['location', 'ASC']
            ],
        })
        let promesaCategory = db.CategoryProduct.findAll()
        let promesaProduct = db.Product.findByPk(id)

        Promise.all([promesaCategory, promesaLocations, promesaProduct])
        .then(function([allCategorys, allLocations, product]){
            res.render('edicionProd', {allCategorys, allLocations, product, logged: req.session.usuario});
        })
    },
    
    update: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            productoId = req.params.id
            arrayColores = req.body.colores

        let img 
        if (req.file != undefined){
            img = req.file.filename;
        }
        else {
            img = '/img/default1.png';
        }
        db.Product.update({
            name: req.body.nombre,
            price: req.body.precio,
            image: img,
            description: req.body.descripcion,
            disponibility_id: req.body.disponibilidad,
            category_products_id: req.body.categoria,
            available_locations: req.body.ubicacionesDisponible,
            colorsInProduct: {id_products: req.body}
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            db.products_colors.destroy({
                where: {
                    id_products: productoId
                }
            })
        })
        .then(function(){
            if (arrayColores) {
                for (let i = 0; i < arrayColores.length; i++) {
                    colorId = arrayColores[i]
                    db.products_colors.create({
                    id_products: productoId,
                    id_colors: colorId
                })
                }
            }
        })

        

        res.redirect('/')
        } else {
            let promesaLocations = db.AvailableLocation.findAll({
                order: [
                    ['location', 'ASC']
                ],
            })
            let promesaCategory = db.CategoryProduct.findAll()
    
            Promise.all([promesaCategory, promesaLocations])
            .then(function([allCategorys, allLocations]){
                console.log(errors)
                res.render('creacionProd', {allCategorys, allLocations, logged: req.session.usuario, old: req.body, errors: errors.mapped()})
            })
        }
    },

    destroy: (req, res) => {

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            res.redirect('/products');
        })
    },

    find: (req, res) => {
        let request = req.body.request
        console.log(request)
        let contadorTarjeta = 0

        db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `${request}%`
                }
            }
        })
        .then(function(productos){
                res.render('listadoBusqueda', {productos, logged: req.session.usuario, request, contadorTarjeta});
        })
    }
}

        // if(req.body.recordarme){
            // res.cookie('email',loggedUser.email,{maxAge: 1000 * 60 * 60 * 24})
        //   return res.redirect('/')}
        //   else {
            // res.redirect("/login")
// }