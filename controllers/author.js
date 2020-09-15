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
router.get("/new", function (req, res) {
  res.render("author/new");
});

// create
router.post("/", function (req, res) {
  //mongoose
  db.Author.create(req.body, function (err, createdAuthor) {
    if (err) {
      console.log(err);
      return res.send(err);
    }

    res.redirect("/authors");
  });
});

// show
router.get("/:id", function (req, res) {
  db.Author.findById(req.params.id, function (err, foundAuthor) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    const context = { author: foundAuthor };
    res.render("author/show", context);
  });
});

module.exports = router;
