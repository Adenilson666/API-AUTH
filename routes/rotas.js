const express = require('express');

const router = express.Router();

const userController = require('../controller/registerController');

const authController = require('../controller/authController');

const registerMiddleware = require('../middlewares/registerMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', registerMiddleware, userController.registerUser);

router.post('/login', authMiddleware, authController.loginUser);

module.exports = router;
