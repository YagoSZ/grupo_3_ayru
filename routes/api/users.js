const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/api/usersApiController');

//Rutas
router.get('/', usersApiController.listUsers);

router.get('/:id', usersApiController.detailUsers);

module.exports = router;