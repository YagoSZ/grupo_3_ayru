const express = require('express');
const router = express.Router();
const path = require('path');

const controllerApiUsers = require('../../controllers/apis/controllerApiUsers');

router.get('/api/users', controllerApiUsers.listUsers);
router.get('/api/users/:id', controllerApiUsers.detailUsers);

module.exports = router;
