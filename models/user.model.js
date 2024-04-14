const { default: mongoose } = require("mongoose");

const user = mongoose.model(
    "user",
    new mongoose.Schema({
        userid:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        first_name:{
            type:String,
            required:true
        },
        last_name:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            default:"user"
        },
        isLoggedIn:{
            type:Boolean,
            default:false
        },
        uuid:{
            type:String,
        },
        accesstoken:{
            type:String
        },
        coupens:{
            type:Array
        },
        bookingRequests:{
            type:Array
        }
        
    })
)
module.exports = {user}