const express = require('express');
const app = express();
const router = express.Router();
const upload = require('../middlewares/multerMiddleware');
const path = require("path")
const usersController = require('../controllers/usersController')
const {body} = require('express-validator');


router.get('/', usersController.getRegister )
router.post('/', usersController.postUser )
router.get('/', usersController.getLogin )
router.post('/', usersController.postLogin)

module.exports = router