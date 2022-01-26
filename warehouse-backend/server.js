const express = require("express");
const seed = require("./index")
const Item = require('./models/item');
const User = require('./models/user')



const app = express();
const port = 3001;

const cors = require('cors')

app.use(cors())

app.use(express.json());
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

app.post('/signup', async (req,res) =>{
    try {

    const newuser = await User.create(req.body)
    res.send({message:"User successfully created", user: newuser})

    } catch (error) {
      res.json({error})  
    }
    
})

app.post('/user/login', async (req,res) =>{
    try {

        console.log(req)
        const user = await User.findOne({
            where:{
                email : req.body.email
            }
        })
        console.log(user)
        if(user.password === req.body.password){
            res.json({message: "Login successful", user: user})
        }else{ 
            res.status(401)
            res.json({error:"email or password is incorrect"})
        }
        
    } catch (error) {
        console.log(error)
        res.status(400)
       res.json({error: "email or password is incorrect"}) 
    }
})



// app.put('/items/edit', )

app.listen(port, async() => {
        
        await seed()
        console.log(`Server listening at http://localhost:${port}`);
});