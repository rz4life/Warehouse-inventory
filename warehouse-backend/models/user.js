const db = require('../db');
const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profilepicture: DataTypes.STRING,
    manager: DataTypes.BOOLEAN,
}, {
    sequelize: db,
    timestamps: false,
});

module.exports = User;