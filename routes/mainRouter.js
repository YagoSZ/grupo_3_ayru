const express = require('express');
const app = express();
const router = express.Router();
const mainController = require('../controllers/mainController')

app.get('/', mainController.index);

app.get('/register', mainController.register);

app.get('/login', mainController.login);

router.get('/productDetail', mainController.productDetail);

router.get('/productCart', mainController.productCart);

router.get('/iphone13', mainController.iphoneTrece);

router.get('/s22ultra', mainController.sUltra);

router.get('/s21fe', mainController.sFe);

module.exports = router
