const { default: mongoose } = require("mongoose");

const movies = mongoose.model(
  "movies",
  new mongoose.Schema({
    movieid: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
      required: true,
    },
    released: {
      type: Boolean,
      default: false,
      required: true,
    },
    poster_url: {
      type: String,
      required: true,
    },
    release_date: {
      type: String,
      required: true,
    },
    publish_date: {
      type: String,
      required: true,
    },
    artists:{
        type:Array
    },
    genres:{
        type:Array
    },
    duration:{
        type:Number,
        required:true
    },
    critic_rating:{
        type:Number,
        required:true
    },
    trailor_url:{
        type:String,
        required:true
    },
    wiki_url:{
        type:String,
        required:true
    },
    story_line:{
        type:String,
        required:true
    },
     shows:{
        type:Array
    }
  })
);
module.exports = { movies };
