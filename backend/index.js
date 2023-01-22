const Express = require("express");
const Mongoose = require("mongoose");
const Cors = require("cors");
const Bodyparser = require("body-parser");
const UserModel = require("./models/Users")
const PostModel = require("./models/Users")

const app = new Express
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Cors())

Mongoose.connect("mongodb+srv://abdulazeem:abdulazeem86@cluster0.qch7vjx.mongodb.net/BlogDB?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/signup",async(req,res)=>{
    console.log(req.body)
   const newUser = new UserModel(req.body)
   await newUser.save(
    (err,data)=>{
        if (err) {
           res.json({"Status":"Error", "Error":err})
        } else {
           res.json({"Status":"Success", "Data":data}) 
        }
    }
   )
})

app.post("/Addpost",async(req,res)=>{
    console.log(req.body)
   const newPost = new PostModel(req.body)
   await newPost.save(
    (err,data)=>{
        if (err) {
           res.json({"Status":"Error", "Error":err})
        } else {
           res.json({"Status":"Success", "Data":data}) 
        }
    }
   )
})

app.listen(3002,()=>{
    console.log("Server started");
})