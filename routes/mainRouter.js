const express = require('express');
const app = express();
const router = express.Router();
const upload = require('../middlewares/multerMiddleware');
const path = require("path")
const mainController = require('../controllers/mainController')
const {body} = require('express-validator');

let validationsRegister = [
    body('nombre').notEmpty().withMessage('el Nombre es obligatorio'),
    body('apellido').notEmpty().withMessage('el Apellido es obligatorio'),
    body('email').notEmpty().withMessage('el Email es obligatorio').bail().isEmail().withMessage('el Email es invalido'),
    body('password').notEmpty().withMessage('la Contrasena es obligatoria').bail().isLength({min : 8, max: undefined}).withMessage('debes introducir al menos 8 caracteres')
]

let validationsProduct = [
    body('nombre').notEmpty().withMessage('el Nombre es obligatorio'),
    body('colores').notEmpty().withMessage('Debe seleccionar al menos 1 color'),
    body('disponibilidad').notEmpty().withMessage('Debe elegir una opcion'),
    body('precio').notEmpty().withMessage('Marcar el Precio es obligatorio').bail().isDecimal().withMessage('el Numero es invalido'),
    body('categoria').notEmpty().withMessage('Debe elegir una opcion'),
    body('ubicacionesDisponible').notEmpty().withMessage('Debe elegir una opcion')
]



router.get('/productCart', mainController.productCart);


//routes de ADMINS
router.get('/products/create', mainController.create); //Traer Pagina creacion productos
router.post('/products', validationsProduct, mainController.products) //Guardar nuevo Producto


router.get('/products/:id/edit', mainController.productsEdit); //Traer pagina edicion Productos
router.put('/products/:id/edit', upload.single('imagenProducto'), validationsProduct, mainController.update);//Editar Productos

router.delete('/products/:id', mainController.destroy)

router.post('/buscador', mainController.find); //traer pagina resultado buscador

router.get('/edicionPerfil', mainController.editarUsuario); //Traer pagina edicion Usuario
router.post('/edicionPerfil', upload.single('imagenUsuario'), validationsRegister, mainController.guardarEdicionUsuario); //Guardar edicion Usuario

router.get('/perfil', mainController.traerPerfilUsuario); //Traer perfil Usuario
router.get('/cerrarSesion', mainController.cerrarSesion) //Cerrar Sesion
router.get('/eliminarUsuario', mainController.borrarUsuario) // Eliminar usuario logeado






module.exports = router
