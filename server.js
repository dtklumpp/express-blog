/* External Modules */
const express = require("express");

/* Internal Modules */
const db = require("./models");

/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = 4000;

app.set("view engine", "ejs");

/* Routes */

// view routes
app.get("/", function (req, res) {
  // render("file", context)
  res.render("index");
});

// Author Routes

// index view
app.get("/authors", function (req, res) {
  // mongoose code
  db.Author.find({}, function (error, foundAuthors) {
    if (error) return res.send(error);

    const context = {
      authors: foundAuthors,
    };

    res.render("author/index", context);
  });
});

// Article Routes

/* Server Listener */
app.listen(PORT, function () {
  console.log(`Server is live and listening at http://localhost:${PORT}`);
});
