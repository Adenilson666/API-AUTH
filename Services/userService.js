const bcrypt = require('bcrypt');
const {User} = require('../models');


const createUser = async ({name, email, password}) => {
  
    if (!name?.trim() || !email?.trim() || !password) {
        const err = new Error('Name, email, and password are required to create a user.');
        err.statusCode = 400;
        throw err;
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existUser = await User.findOne({ where: { email: normalizedEmail } });
    if (existUser) {
        const err = new Error('Email is already in use.');
        err.statusCode = 409;
        throw err;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
        name: name.trim(),
        email: normalizedEmail,
        password: passwordHash
    });

    return{
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };
};

module.exports = {
    createUser,
};