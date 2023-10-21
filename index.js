//Import or REquire Statememts
const express = require('express') //commonJS module import method
const dotenv_config = require('dotenv').config()

const app = express()
const PORT = process.env.PORT



app.get('/',(req,res)=>{
    res.send('Hello You are Welcome to Basic Backend Server')
})

app.get('/api/sayHello',(req,res)=>{
    res.json({"Message":"You are ping to server"})
})

app.listen(PORT,()=>{
    console.log(`Server is listening at the ${PORT}`)
})