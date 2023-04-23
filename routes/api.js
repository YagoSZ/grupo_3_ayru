const apiController = require('../controllers/apiController')

const express = require('express');
const router = express.Router();


router.get('/users', apiController.listUsers)
router.get('/users/:id', apiController.detailUsers)

module.exports = router;
