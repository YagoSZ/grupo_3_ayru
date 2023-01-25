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

router.get('/products', mainController.listado); // Traer listado productos
router.get('/products/create', mainController.create); //Traer Pagina creacion productos
router.post('/products', mainController.products) //Guardar nuevo Producto


router.get('/products/:id/edit', mainController.productsEdit); //Traer pagina edicion Productos
router.put('/products/:id/edit', mainController.update);//Editar Productos



module.exports = router
