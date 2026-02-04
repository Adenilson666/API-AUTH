const AppError = require('../error/appError');

const loginMiddleware = (err, req, res, next) => {

    let { email, password } = req.body;

    if (email === null || password === null) {
        throw new AppError('E-mail e senha são obrigatórios.', 400);
    }

    if (typeof email !== 'string' || typeof password !== 'string') {
        throw new AppError('E-mail e senha inválidos.', 400);
    }

    email = email.trim().toLowerCase();

    if (!email || !password) {
        throw new AppError('E-mail e senha são obrigatórios.', 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new AppError('Email e senha inválidos.', 400);
    }

    if (password.length < 8 || password.length > 72) {
        throw new AppError('Email e senha inválidos.', 400);
    }

    req.body.email = email;

    next();
};

module.exports = loginMiddleware;