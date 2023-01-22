const Mongoose = require("mongoose")

const userSchema = Mongoose.Schema({
    Name:String,
    Address:String,
    phoneNumber:Number,
    emailAddress:String,
    userName:String,
    password:String
})

const postSchema = Mongoose.Schema({
    UserId:String,
    Post:String
})

const UserModel = Mongoose.model("Users",userSchema);
module.exports = UserModel;

const PostModel = Mongoose.model("Posts",postSchema);
module.exports = PostModel;