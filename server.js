const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks", {useNewUrlParser: true});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/books", (req, res) => {
  db.Book
    .find({})
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.status(400).json(err));
});

app.post("/api/books", (req, res) => {
  db.Book
    .create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(400).json(err));
});

app.post("/api/books", (req, res) => {
  db.Book
    .deleteOne(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(400).json(err));
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
