const express = require("express")
const { findAllArtists } = require("../controllers/artist.controller")
const router = express()

router.use(express.json())


router.get("/",findAllArtists)


module.exports=router