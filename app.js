const express = require('express')
const app = express();
const userModel = require('./models/db')
const path = require('path')

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/read',async(req,res)=>{
    let users = await userModel.find();
    res.render("read",{users});
})
app.post('/create',async(req,res)=>{
    const {name,email,link} = req.body;
    const created = await userModel.create({name,email,link});
    res.redirect("/read")
})

app.get('/update/:id',async(req,res)=>{
    const {userId} = req.params.id;
    const {chamge} = req.body;
    const updatedUser = await userModel.findOneAndUpdate({
        _id : userId
    })
 })
app.get('/delete/:id',async(req,res)=>{
    const userId = req.params.id
    const deleteUser = await userModel.findOneAndDelete({_id : userId})
    res.redirect('/read')
})

app.listen(3011)