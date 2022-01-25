const initialiseDb = require('./initialiseDb');
const User = require ('./models/user')
const Item = require ('./models/item')
const path = require('path')
const fs = require('fs').promises
const db = require("./db")


async function seed(){
    await initialiseDb()
    await db.sync({force: true});

    const seedPath = path.join(__dirname,'item.json')
    const seedPath2 = path.join(__dirname,'user.json')
    const buffer = await fs.readFile(seedPath)
    const buffer2 = await fs.readFile(seedPath2)
    const {data} = JSON.parse(String(buffer))
    const {userdata} = JSON.parse(String(buffer2))
    const itemPromises = data.map(item =>  Item.create(item))
    const itemPromises2 = userdata.map(item =>  User.create(item))
    
    await Promise.all(itemPromises)
    await Promise.all(itemPromises2)
    console.log("Items seeded")
}

module.exports =  seed