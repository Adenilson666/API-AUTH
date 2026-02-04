const express = require('express');

const router = express.Router();

const userController = require('../controller/registerController');

const authController = require('../controller/authController');

const registerMiddleware = require('../middlewares/registerMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

const ensureAuthMiddleware = require('../middlewares/ensureAuthMiddleware');

router.post('/register', registerMiddleware, userController.registerUser);

router.post('/login', authMiddleware, authController.loginUser);

router.get('/auth/me', ensureAuthMiddleware, authController.getMe);

module.exports = router;
