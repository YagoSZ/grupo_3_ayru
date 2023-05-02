const express = require('express');
const router = express.Router();
const path = require('path');

const apiProductsController = require('../../controllers/apis/controllerApiProducts.js')


router.get('/api/products', apiProductsController.productsList);
router.get('/api/products/:id', apiProductsController.detail);

module.exports = router;
