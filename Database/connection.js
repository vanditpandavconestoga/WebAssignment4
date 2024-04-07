const mongoose = require("mongoose");

// this is for Connect to MongoDB Atlas
const DB =
  "mongodb+srv://webassignment4:vojMZERGzlbyvwbQ@cluster0.bp2d9kh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// "mongodb+srv://Vandit:g69qYVeNLqheSCBO@cluster0.xrz09ul.mongodb.net/userWebLab?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => console.log("Connected mongoDB Atlas successfully"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));
