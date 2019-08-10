const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');


app.use(cors())
app.use(bodyParser.json())

//Middlewares
const users = require('./routes/users')
app.use('/users',users)

app.get('/',(req,res)=>{
    res.send('/')
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true } ,()=>{
    console.log("Connected to DB")
})

app.listen(3000)
