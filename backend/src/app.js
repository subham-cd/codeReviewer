const express = require('express')
const aiRoutes = require('./routes/ai.routes.js')
const cors = require('cors')

const app =express()//server create

app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send('hello world')
})
app.use('/ai',aiRoutes)
module.exports = app;