const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')

module.exports = {
    getRegister: function(req, res) {
        res.render('register')
    },

    postUser: function(req, res) {

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


            res.redirect('/users/login')
        }else{
            console.log(req.body.password);
            res.render('register', {errors: errors.mapped(), old: req.body})
        }

        // const {email, password} = req.body

        // const userData = {

        //     email,
        //     password: bcrypt.hashSync(password, 10)

        // }

        // users.push(userData)
        // fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users), null, ' ')

        // res.redirect('/users/login')
    },

    getLogin: function(req, res) {
        res.render('login')
    },

    postLogin: function(req, res) {
        const {email, password} = req.body
        const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')))

        const loggedUser = users.find(user => user.email === email )

        if (loggedUser){
          let ec =  bcrypt.compareSync(password, loggedUser.password)
          req.session.usuario = loggedUser;
          res.redirect('/')
