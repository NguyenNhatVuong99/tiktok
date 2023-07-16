'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            nickname: DataTypes.STRING,
            avatar: DataTypes.STRING,
            bio: DataTypes.STRING,
            tick: DataTypes.BOOLEAN,
            followingsCount: DataTypes.INTEGER,
            followersCount: DataTypes.INTEGER,
            likesCount: DataTypes.INTEGER,
            facebookUrl: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    return User;
};
