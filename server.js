/* External Modules */
const express = require("express");
const methodOverride = require("method-override");

/* Internal Modules */
const db = require("./models");
const controllers = require("./controllers");

/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = 4000;

app.set("view engine", "ejs");

/* middleware */
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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
