const AppError = require('../error/appError');

const registerMiddleware = (req, res, next) => {

    let { name, email, password } = req.body;

    if (name === null || email === null || password === null) {
        throw new AppError('Nome, e-mail e senha são obrigatórios.', 400);
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
        throw new AppError('Nome, e-mail e senha devem ser strings.', 400);
    }

    if ('role' in req.body) {
        throw new AppError('Você não pode enviar o campo role.', 400);
    }

    name = name.trim();
    email = email.trim().toLowerCase();

    if (!name || !email || !password) {
        throw new AppError('Nome, e-mail e senha não podem estar vazios.', 400);
    }

    if (/^\d+$/.test(name.trim())) {
        throw new AppError('O campo nome não pode ser uma string de números.', 400);
    }

    if (name.length > 100) {
        throw new AppError('Nome não pode exceder 100 caracteres.', 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new AppError('Formato de e-mail inválido.', 400);
    }

    if (email.length > 191) {
        throw new AppError('E-mail não pode exceder 191 caracteres.', 400);
    }

    if (password.length < 8 || password.length > 72) {
        throw new AppError('Senha deve ter pelo menos 8 caracteres e no máximo 72 caracteres.', 400);
    }

    req.body.name = name;
    req.body.email = email;

    next();
};

module.exports = registerMiddleware;