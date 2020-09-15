const express = require("express");
const router = express.Router();
// const router = require("express").Router()

const db = require("../models");

// base route is /authors

// index view /authors
router.get("/", function (req, res) {
  // mongoose code
  db.Author.find({}, function (error, foundAuthors) {
    if (error) return res.send(error);

    const context = {
      authors: foundAuthors,
    };

    res.render("author/index", context);
  });
});

// new

// create

// update form

// put update

// delete

module.exports = router;
