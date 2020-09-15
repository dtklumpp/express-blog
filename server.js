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
app.get("/", function (req, res) {
  // render("file", context)
  res.render("index");
});

/* Server Listener */
app.listen(PORT, function () {
  console.log(`Server is live and listening at http://localhost:${PORT}`);
});
