const { genres } = require("../models/genre.model")


const findAllGenres = async(req,res)=>{
    console.log("called")
    try {
        const response = await genres.find({})
        if(response){
           return res.status(200).json(response)
        }
        if(!response){   return res.status(404).json("No artist Found")   }
    } catch (error) {
        return res.status(400).json("Somehting went wrong while fetching artist details")
    }
}

module.exports = {findAllGenres}