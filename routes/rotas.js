const express = require('express');

const router = express.Router();

const registerController = require('../controller/registerController');

const authController = require('../controller/authController');

const userController = require('../controller/userController');

const registerMiddleware = require('../middlewares/registerMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

const ensureAuthMiddleware = require('../middlewares/ensureAuthMiddleware');

const ensureAdminMiddleware = require('../middlewares/ensureAdminMiddleware');

router.post('/register', registerMiddleware, registerController.registerUser);

router.post('/login', authMiddleware, authController.loginUser);

router.get('/auth/me', ensureAuthMiddleware, authController.getMe);

router.get('/users', ensureAuthMiddleware, ensureAdminMiddleware, userController.listUsers);

module.exports = router;
