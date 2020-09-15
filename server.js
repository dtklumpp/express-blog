/* External Modules */
const express = require("express");

/* Internal Modules */

/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = 4000;

/* Routes */

/* Server Listener */
app.listen(PORT, function () {
  console.log(`Server is live and listening at http://localhost:${PORT}`);
});
