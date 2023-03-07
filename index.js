const express = require('express')
const mongoose = require('mongoose')
const USER = require('./models/userModels')
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello From Homepage")
})

app.get("/users", (req,res) => {
    res.send("Hello From Users")
})

app.get("/adduser", async(req, res) => {
    try {
        const users = await USER.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get("/adduser/:id", async(req, res) => {
    try {
        const {id} = req.params
        const user = await USER.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post("/adduser", async(req, res) => {
   try {
    const user = await USER.create(req.body)
    res.status(200).json(user)
    console.log('User Created')
   } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
   }
})

app.listen(5000, ()=>{
    console.log('Node Running On Port 5000')
})

mongoose.connect('mongodb+srv://manuelcodes:emma123@cluster0.ndpmwpw.mongodb.net/Node-Api?retryWrites=true&w=majority')
  .then(() => {console.log('Connected!')}).catch((error)=>{
    console.log(error)
  });