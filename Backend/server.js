const express = require('express')
const cors = require ('cors')
const app = express()
const port = 3001 
const Sequelize = require('sequelize');
const { all_Ready_user2 } = require('./models');

app.use(express.json())
app.use(cors())


app.post('/users', async (req, res) => {
    // req.body contains an Object with firstName, lastName, email,password,gender
    const { firstName, lastName, email,password,
        gender } = req.body;
        console.log(req.body)
    const newUser = await all_Ready_user2.create({
        firstName,
        lastName,
        email,
        password,
        gender
    });
    
    
    // Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });
})

app.post('/signIn',  async (req, res)=> {
    const { email,password,
         } = req.body;
        console.log(email)
        console.log(password)

    const existingUser = await all_Ready_user2.findOne({
        where: {
            email:email,
            password:password
        }
     
    }) 
    console.log(existingUser)

    if (existingUser != null){
        
      res.sendStatus(200)
    }
    else{
        res.sendStatus(500)
    }
})

    
app.listen(port, ()=>{console.log('app started')})