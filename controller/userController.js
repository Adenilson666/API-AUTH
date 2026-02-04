const userService = require('../services/userService');

const listUsers = async (req, res, next) => {
    try {
        const { page, limit} = req.query;

        const result = await userService.listUsers({ page, limit });

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    listUsers,
};