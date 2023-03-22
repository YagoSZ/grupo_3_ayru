const session = require('express-session')

function authMiddleware(req, res, next) {
    console.log(req.session.usuario)
    if (req.session.usuario == undefined) {
        return res.render('login');
    }
    next();
}

module.exports = authMiddleware;
