const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/url_shortner").then(()=>console.log("Database connected")).catch((err)=>console.log(err))
const userSchema=new mongoose.Schema({
    id:{type:String},                       //new url will be custom_link/users/:id
    original:{type:String,required:true},
})
const user=mongoose.model("user",userSchema) 

const count=new mongoose.Schema({
    name:{type:String},
    next_id:{type:Number,default:1}
})
const counter=mongoose.model("count",count)
module.exports = {user,counter}; 