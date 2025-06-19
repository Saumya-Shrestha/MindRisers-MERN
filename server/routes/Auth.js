const express = require('express');
const { createUser } = require('../controller/authController');

const router = express.Router();

router.post('/createuser', createUser);

module.exports = router;
