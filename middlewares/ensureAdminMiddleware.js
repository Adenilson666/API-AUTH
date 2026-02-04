const AppError = require('../error/appError');

module.exports = (req, res, next) => {
    if (!req.user) {
        throw new AppError('Acesso negado. Permissão de administrador necessária.', 403);
    }

    if (req.user.role !== 'admin') {
        throw new AppError('Acesso negado. Permissão de administrador necessária.', 403);
    }

    next();
};