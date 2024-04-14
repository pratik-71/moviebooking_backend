const { default: mongoose } = require("mongoose");

const genres = mongoose.model(
    "genres",
    new mongoose.Schema({
        genreid:{
            type:Number,
            required:true
        },
        genre:{
            type:String,
            required:true
        }
    })
)
module.exports = {genres}