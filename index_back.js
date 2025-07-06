const cors = require("cors")
const express=require("express")
const app=express()
app.use(cors())
const user=require("./model")
app.use(express.json());
app.post("/shorten", async (req,res)=>{
    try{
        const body=req.body
        if (!body.url){
            return res.send("Url required")
        }
        const already=await user.find({original:body.url})
        try{if(already.length>0){ 
            res.send(already[0].id)
            console.log("already existing url with id ",already[0].id)
        }
        else{
            const done=await user.create({
                id:user.length+1,
                original:body.url
                })
            res.send(user.length) 
            console.log("new id succesfully created")      
        }}catch{(err)=>{
            res.send("error occured"+err)}
        }       
    }
    catch{(err)=>"couldn't getch users"+err}   
})

app.listen(8000,()=>console.log("Server started")) 