const cors = require("cors")
const express=require("express")
const app=express()
const {user,counter}=require("./models/model")
app.use(express.json());
app.use(cors())

async function getNext(){
    const result=await counter.findOneAndUpdate(
        { name: "url_id" },
        { $inc: { next_id: 1 } },
        { new: true, upsert: true }
    )
    return result.next_id
}

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
            console.log("i am here")
            new_id=await getNext()
            console.log(new_id)
            const done=await user.create({
                id:new_id.toString(),
                original:body.url
                })
            res.send(new_id.toString()) 
            console.log("new id succesfully created")      
        }}catch{(err)=>{
            res.send("error occured"+err)}
        }       
    }
    catch{(err)=>"couldn't getch users"+err}   
})

app.get("/shorten/:id",async (req,res)=>{
    try{
       const id= req.params.id
       const user1= await user.find({id:id})
       if (user1.length==0){
        return res.status(404).send("no url found for this id")
       }
       console.log(user1)
       res.redirect(user1[0].original)
    }catch(err){
        console.log("some error: "+err) 
    }
})

app.listen(8000,()=>console.log("Server started")) 