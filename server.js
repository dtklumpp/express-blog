/* External Modules */
const express = require("express");

/* Internal Modules */
const db = require("./models");
const controllers = require("./controllers");

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

app.use("/authors", controllers.author);

// Article Routes

/* Server Listener */
app.listen(PORT, function () {
  console.log(`Server is live and listening at http://localhost:${PORT}`);
});
