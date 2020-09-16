const express = require("express");
const router = express.Router();

const db = require("../models");

// base route is /articles

// index
router.get("/", function (req, res) {
  db.Article.find({}, function (error, foundArticles) {
    if (error) return res.send(error);

    const context = {
      articles: foundArticles,
    };

    res.render("article/index", context);
  });
});

// new
router.get("/new", function (req, res) {
  res.render("article/new");
});

// create
router.post("/", function (req, res) {
  db.Article.create(req.body, function (err, createdArticle) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    res.redirect("/articles");
  });
});

// show
router.get("/:id", function (req, res) {
  return res.send("article show");
});

// edit
router.get("/:id/edit", function (req, res) {
  return res.send("article edit");
});

// update
router.put("/:id", function (req, res) {
  return res.send("article update");
});

// delete
router.delete("/:id", function (req, res) {
  return res.send("article delete");
});

module.exports = router;
