const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const MU = process.env.MONGOOSE_URL;
mongoose.connect(MU)
.then(()=>{
    console.log("mongodb connnected successfully")
})
.catch((err)=>{
    console.log(err)
})

userSchema = mongoose.Schema({
    name:String,
    email : String,
    link:String
    
})

module.exports = mongoose.model('users',userSchema)