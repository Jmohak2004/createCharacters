const express = require('express')
const app = express();
const db = require('./models/db')

app.get('/',(req,res)=>{
    console.log()
})

app.post('/create-user',(req,res)=>{
    const {name,email,image} = req.body;
})

app.delete('/delete:id',(req,res)=>{

})

app.update('/',(req,res)=>{

})

app.listen(3011)