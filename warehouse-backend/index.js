const initialiseDb = require('./initialiseDb');
const User = require ('./models/user')
const Item = require ('./models/item')
const path = require('path')
const fs = require('fs').promises
const db = require("./db")


async function seed(){
    await db.sync();
    await initialiseDb()

    const seedPath = path.join(__dirname,'item.json')
    const buffer = await fs.readFile(seedPath)
    const {data} = JSON.parse(String(buffer))
    const itemPromises = data.map(item =>  Item.create(item))
    
    await Promise.all(itemPromises)
    console.log("Items seeded")
}

module.exports =  seed