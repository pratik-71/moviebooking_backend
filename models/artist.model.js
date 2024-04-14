const { default: mongoose } = require("mongoose");

const artists = mongoose.model(
    "artists",
    new mongoose.Schema({
        artistsid:{
            type:Number,
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
        wiki_url:{
            type:String,
            required:true
        },
        profile_url:{
            type:String,
            required:true
        },
        movies:[

        ]
    })
)
module.exports = {artists}