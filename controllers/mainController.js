
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
    }
