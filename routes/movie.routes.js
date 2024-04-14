const express = require("express")
const { findAllMovies, findOne, findShows, getFilteredMovies } = require("../controllers/movie.controller")
const router = express()

router.use(express.json())

router.get("/",findAllMovies)
router.get("/:id",findOne)
router.get("/:id/shows",findShows)
router.get("/",getFilteredMovies)

module.exports=router