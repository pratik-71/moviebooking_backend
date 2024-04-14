const { artists } = require("../models/artist.model")


const findAllArtists = async(req,res)=>{
    try {
        const response = await artists.find({})
        if(response){
           return res.status(200).json(response)
        }
        if(!response){   return res.status(404).json("No artist Found")   }
    } catch (error) {
        return res.status(400).json("Somehting went wrong while fetching artist details")
    }
}

module.exports = {findAllArtists}