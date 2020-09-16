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
  db.Author.find({}, function (err, foundAuthors) {
    if (err) return res.send(err);

    const context = {
      authors: foundAuthors,
    };

    res.render("article/new", context);
  });
});

// create
router.post("/", function (req, res) {
  console.log(req.body);
  db.Article.create(req.body, function (err, createdArticle) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    db.Author.findById(req.body.author, function (err, foundAuthor) {
      if (err) {
        console.log(err);
        return res.send(err);
      }

      foundAuthor.articles.push(createdArticle);
      foundAuthor.save(); // important because this commits the author back to the db

      res.redirect("/articles");
    });
  });
});

// show
router.get("/:id", function (req, res) {
  db.Article.findById(req.params.id, function (err, foundArticle) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    const context = { article: foundArticle };
    res.render("article/show", context);
  });
});

// edit
router.get("/:id/edit", function (req, res) {
  db.Article.findById(req.params.id, function (err, foundArticle) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    const context = { article: foundArticle };
    res.render("article/edit", context);
  });
});

// update
router.put("/:id", function (req, res) {
  db.Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function (err, updatedArticle) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      res.redirect(`/articles/${updatedArticle._id}`);
    }
  );
});

// delete
// TODO refactor to delete article and remove article from author
router.delete("/:id", function (req, res) {
  db.Article.findByIdAndDelete(req.params.id, function (err, deletedArticle) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    res.redirect("/articles");
  });
});

module.exports = router;
