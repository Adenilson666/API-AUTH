const express = require('express');

const router = express.Router();

const registerController = require('../controller/registerController');

const authController = require('../controller/authController');

const registerMiddleware = require('../middlewares/registerMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

const ensureAuthMiddleware = require('../middlewares/ensureAuthMiddleware');

const rateLimit = require('../middlewares/rateLimit');

router.post('/register', rateLimit, registerMiddleware, registerController.registerUser);

router.post('/login', rateLimit, authMiddleware, authController.loginUser);

router.get('/auth/me', ensureAuthMiddleware, authController.getMe);

router.patch('/auth/me', ensureAuthMiddleware, authController.updateMe);

router.patch('/auth/me/password',ensureAuthMiddleware,authController.changeMyPassword);

module.exports = router;
