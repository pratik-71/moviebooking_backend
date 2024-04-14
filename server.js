const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8085;
const { connection } = require("./config/db.config");

// Use middleware
app.use(cors());
app.use(express.json());



// Register routes
app.use("/api/movies", require("./routes/movie.routes"));
app.use("/api/genres", require("./routes/genre.routes"));
app.use("/api/artists", require("./routes/artist.routes"));
app.use("/api/auth",require("./routes/user.routes"))



// Default route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
});



// Connect to database
connection()

// Start the server
app.listen(port, () => console.log("Server is running on port =", port));
