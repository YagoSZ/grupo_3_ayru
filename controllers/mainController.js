
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
        res.render('iphoneTrece');
    },
    
    sUltra: (req, res) => {
        res.render('sUltra');
    },
    
    sFe: (req, res) => {
       res.render('sFe');
    },
    }
