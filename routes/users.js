const express = require('express');
const app = express();
const router = express.Router();
const upload = require('../middlewares/multerMiddleware');
const path = require("path")
const usersController = require('../controllers/usersController')
const {body} = require('express-validator');


router.get('/register', usersController.getRegister )
router.post('/register', usersController.postUser )
router.get('/login', usersController.getLogin )
router.post('/login', usersController.postLogin)

module.exports = router