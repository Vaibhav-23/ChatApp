import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
        //fullname field is requires
    }, 
    userName:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
    gender:{
        type:String,
        required:true,
        enum : ["male","female"],
    },

    profilePic:{
        type: String,
        default: "",
    },
    //this will give us createdAt and updatedAt time in the mongodb 
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;