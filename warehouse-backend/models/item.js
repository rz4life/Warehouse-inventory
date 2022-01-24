const db = require('../db');
const { DataTypes, Model } = require('sequelize');

class Item extends Model {}

Item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    image: DataTypes.STRING,
}, {
    sequelize: db,
});

module.exports = Item;