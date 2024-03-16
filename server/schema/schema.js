import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    mail:String,
    adhar:String,
   
})

const User = mongoose.model('newbthree', userSchema)

export default User