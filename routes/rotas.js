const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');

const authController = require('../controller/authController');

router.post('/register', userController.createUser);

router.post('/login', authController.loginUser);

module.exports = router;
