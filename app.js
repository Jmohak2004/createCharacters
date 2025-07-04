const express = require('express')
const app = express();
const db = require('./models/db')
const path = require('path')

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/get',(req,res)=>{
    res.render("read")
})
app.post('/create-user',(req,res)=>{
    const {name,email,image} = req.body;
})

app.delete('/delete:id',(req,res)=>{

})

app.post('/',(req,res)=>{

})

app.listen(3011)