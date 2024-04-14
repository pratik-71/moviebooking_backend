const { default: mongoose } = require("mongoose");
const express = require("express")
const db = require("../models/index")

const connection_string = "mongodb://localhost:27017/moviesdb"

const connection=()=>{
  db.mongoose.connect (
    connection_string,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
}

module.exports = {connection}

  
