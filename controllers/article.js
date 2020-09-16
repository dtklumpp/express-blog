const express = require("express");
const router = express.Router();

const db = require("../models");

// base route is /articles

// index
router.get("/", function (req, res) {
  return res.send("article index");
});

// new
router.get("/new", function (req, res) {
  return res.send("article new");
});

// create
router.post("/", function (req, res) {
  return res.send("article create");
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
