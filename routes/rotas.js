const express = require('express');

const router = express.Router();

const registerController = require('../controller/registerController');

const authController = require('../controller/authController');

const adminController = require('../controller/adminController');

const registerMiddleware = require('../middlewares/registerMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

const ensureAuthMiddleware = require('../middlewares/ensureAuthMiddleware');

const ensureAdminMiddleware = require('../middlewares/ensureAdminMiddleware');

router.post('/register', registerMiddleware, registerController.registerUser);

router.post('/login', authMiddleware, authController.loginUser);

router.get('/auth/me', ensureAuthMiddleware, authController.getMe);

router.patch('/auth/me', ensureAuthMiddleware, authController.updateMe);

router.patch('/auth/me/password',ensureAuthMiddleware,authController.changeMyPassword);

router.get('/admin/users', ensureAuthMiddleware, ensureAdminMiddleware, adminController.listUsers);

router.patch('/admin/users/:id', ensureAuthMiddleware, ensureAdminMiddleware, adminController.updateUser);

router.patch('/admin/users/:id/role', ensureAuthMiddleware, ensureAdminMiddleware, adminController.updateUserRole);

router.patch('/admin/users/:id/password',ensureAuthMiddleware,ensureAdminMiddleware,adminController.updateUserPassword);

router.delete('/admin/users/:id', ensureAuthMiddleware, ensureAdminMiddleware, adminController.deleteUser);

module.exports = router;
