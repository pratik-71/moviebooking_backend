const mongoose = require("mongoose");

const Artist = require("./artist.model");
const Genre = require("./genre.model");
const Movie = require("./movie.model");
const User = require("./user.model");

// Export all models
module.exports = {
    mongoose,
    Artist,
    Genre,
    Movie,
    User
};
