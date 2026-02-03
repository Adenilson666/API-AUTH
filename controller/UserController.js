const userService = require('../services/userService');

const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user =  await userService.createUser({ name, email, password });
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser,
};