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
  return res.send("article new");
});

// create
router.post("/", function (req, res) {
  return res.send({ route: "Create", body: req.body });
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
