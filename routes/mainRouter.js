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

module.exports = router
