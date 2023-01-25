const express = require('express');
const app = express();
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.index);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/productDetail', mainController.productDetail);

router.get('/productCart', mainController.productCart);

router.get('/iphone13', mainController.iphoneTrece);

router.get('/s22ultra', mainController.sUltra);

router.get('/s21fe', mainController.sFe);

router.get('/detalle/:id/', mainController.detail)

// router.get('/edicionProd/:id/', mainController.ediProd);

// router.get('/products', mainController.products);

 //router.get('/products/create', mainController.create);

// router.get('/products/:id', mainController.product);

// router.post('/products', mainController.products)

router.get('/products/:id/edit', mainController.productsEdit);
router.put('/products/:id/edit', mainController.update);



module.exports = router
