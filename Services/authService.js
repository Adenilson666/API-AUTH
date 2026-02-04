const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models');
const AppError = require('../error/appError');
const { get } = require('../app');

const loginUser = async ({email, password}) => {

    if (!email|| !password) {
        throw new AppError('Email e senha são obrigatórios.', 400);
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({ where: { email: normalizedEmail } });

    if (!user) {
        throw new AppError('Email ou senha inválidos.', 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        throw new AppError('Email ou senha inválidos.', 401);
    }   

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );

    return {
        user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    },
    
        token,
    };
};

const getMe = async (userId) => {
    const user = await User.findByPk(userId, {
        attributes: ['id', 'name', 'email', 'role', 'createdAt', 'updatedAt']
    });

    if (!user) {
        throw new AppError('Usuário não encontrado.', 404);
    }

    return user;
}

module.exports = {
    loginUser,
    getMe,
};