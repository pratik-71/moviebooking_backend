
const express = require("express")
const { findAllGenres } = require("../controllers/genre.controller")
const router = express()

router.use(express.json())

router.get("/",findAllGenres)


module.exports=router