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

app.get('/edit/:userid',async(req,res)=>{
    let userId = req.params.userid;
    let user = await userModel.findOne({
        _id : userId
    })
    res.render("edit",{user})
 })

app.post('/update/:userid',async(req,res)=>{
    let userId = req.params.userid;
    let  {name,email,link} = req.body;
    let user = await userModel.findOneAndUpdate({_id : userId},{name,email,link},{new:true})
    res.redirect("/read")

})
app.get('/delete/:id',async(req,res)=>{
    const userId = req.params.id
    const deleteUser = await userModel.findOneAndDelete({_id : userId})
    res.redirect('/read')
})

app.listen(3011)