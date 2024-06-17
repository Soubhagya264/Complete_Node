const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err))
// Define a schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})
// Create a model
const User = mongoose.model('User', userSchema)
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})
app.post('/users', async (req, res) => {
    //handle field
    if (!req.body || !req.body.name || !req.body.email) {
        return res.status(400).send({ message: "Please fill all the fields" })
    }
    const user = await User.create({
        name: req.body.name,
        email: req.body.email
    })
    return res.status(201).json({ msg: "Success", user: user });
})


