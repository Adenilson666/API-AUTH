const bcrypt = require('bcrypt');
const {User} = require('../models');

const loginUser = async ({email, password}) => {
    if (!email?.trim() || !password) {
        const err = new Error('Email and password are required to login.');
        err.statusCode = 400;
        throw err;
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({ where: { email: normalizedEmail } });

    if (!user) {
        const err = new Error('Invalid email or password.');
        err.statusCode = 401;
        throw err;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        const err = new Error('Invalid email or password.');
        err.statusCode = 401;
        throw err;
    }   

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };
};

module.exports = {
    loginUser,
};