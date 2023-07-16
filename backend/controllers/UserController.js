const { User } = require('../models');
const { Op } = require('sequelize');

class UserController {
    async index(req, res) {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            });
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    }

    async search(req, res) {
        const { q } = req.query;
        console.log(q);
        try {
            const users = await User.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                where: {
                    [Op.or]: [
                        { nickname: { [Op.like]: `%${q}%` } },
                        { firstName: { [Op.like]: `%${q}%` } },
                        { lastName: { [Op.like]: `%${q}%` } },
                    ],
                },
                limit: 5,
            });
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();
