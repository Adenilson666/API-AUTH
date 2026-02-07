const express = require('express');

const router = express.Router();

const adminController = require('../controller/adminController');

const ensureAdminMiddleware = require('../middlewares/ensureAdminMiddleware');

const ensureAuthMiddleware = require('../middlewares/ensureAuthMiddleware');

router.get('/admin/users', ensureAuthMiddleware, ensureAdminMiddleware, adminController.listUsers);

router.patch('/admin/users/:id', ensureAuthMiddleware, ensureAdminMiddleware, adminController.updateUser);

router.patch('/admin/users/:id/role', ensureAuthMiddleware, ensureAdminMiddleware, adminController.updateUserRole);

router.patch('/admin/users/:id/password',ensureAuthMiddleware,ensureAdminMiddleware,adminController.updateUserPassword);

router.delete('/admin/users/:id', ensureAuthMiddleware, ensureAdminMiddleware, adminController.deleteUser);

module.exports = router;