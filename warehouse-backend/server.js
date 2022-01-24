const express = require("express");
const initialiseDb = require('./initialiseDb');
const Item = require('./models/item');
const User = require('./models/user')
const app = express();
const port = 3001;


async function seed(){
    await initialiseDb()
    let comb = Item.create({name: "comb",description: "brown"})
}

seed()
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.get('/items', async (req, res) => {
    const items = await Item.findAll();
    res.json({items})
})

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json({users})
})

app.get('/items/:id', async (req, res) => {
    const item = await Item.findByPk(req.params.id)
    res.json({item})
})

app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json({user})
})