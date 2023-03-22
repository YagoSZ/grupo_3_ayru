const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')

module.exports = {
    getRegister: function(req, res) {
        res.render('register')
    },

    postUser: function(req, res) {
        const user = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')))
        const {email, password} = req.body

        const userData = {

            email,
            password: bcrypt.hashSync(password, 10)

        }

        users.push(userData)
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users), null, ' ')

        res.redirect('/login')
    }
}