const express = require("express");
const seed = require("./index")
const Item = require('./models/item');
const User = require('./models/user')



const app = express();
const port = 3001;

const cors = require('cors')

app.use(cors())


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

app.listen(port, async() => {
        
        await seed()
        console.log(`Server listening at http://localhost:${port}`);
});