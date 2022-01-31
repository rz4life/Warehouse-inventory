const User = require ('./models/user')
const Item = require ('./models/item')
const db = require('./db')


async function initialiseDb(){
    Item.belongsTo(User);
}

module.exports = initialiseDb