const express = require('express');
const app = express();
const router = express.Router();
const mainController = require('../controllers/mainController');
const upload = require('../middlewares/multerMiddleware');
const {body} = require('express-validator');


let validationsRegister = [
    body('nombre').notEmpty().withMessage('el Nombre es obligatorio'),
    body('apellido').notEmpty().withMessage('el Apellido es obligatorio'),
    body('email').notEmpty().withMessage('el Email es obligatorio').bail().isEmail().withMessage('el Email es invalido'),
    body('password').notEmpty().withMessage('la Contrasena es obligatoria')
]

router.get('/register', mainController.register);
router.post('/register', upload.single('imagenUsuario'), validationsRegister, mainController.crearUsuario)

router.get('/login', mainController.login);
router.post('/login', mainController.ingresar);

module.exports = router