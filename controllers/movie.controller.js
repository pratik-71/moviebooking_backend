const { movies } = require("../models/movie.model");

const findAllMovies = async (req, res) => {
    let { status } = req.query;

    try {
        let response;
        status = status ? status.toLowerCase() : undefined;
        
        if (status === "published" || status === "released") {
            response = await movies.find({ [status]: true });
        } else {
            response = await movies.find({});
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json("not found ");
    }
};



const findOne = async (req, res) => {
    try {
      let response = await movies.findOne({ movieid: req.params.id });
      if (response) {
      return  res.status(200).json(response);
      } else {
       return res.status(404).json("Not found");
      }
    } catch (error) {
     return res.status(500).json("Internal Server Error");
    }
  };



  
  const findShows = async (req, res) => {
    try {
      let response = await movies.findOne({ movieid: req.params.id }).select("shows");
      if (response) {
      return  res.status(200).json(response);
      } else {
       return res.status(404).json("No show found");
      }
    } catch (error) {
     return res.status(500).json("Internal Server Error");
    }
  };


  

  const getFilteredMovies = async(req,res)=>{
    const { status, title, genres, artists, start_date, end_date } = req.query;
  let query = { status };

  if (title) {
    query.title = { $regex: title, $options: 'i' };
  }
  if (genres) {
    query.genres = { $in: genres.split(',') };
  }
  if (artists) {
    query.artists = { $in: artists.split(',') };
  }
  if (start_date && end_date) {
    query.release_date = { $gte: new Date(start_date), $lte: new Date(end_date) };
  }

  movies.find(query)
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to get movies.' });
    });
  }






module.exports = { findAllMovies,findOne,findShows,getFilteredMovies };
