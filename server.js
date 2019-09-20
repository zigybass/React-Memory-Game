const express = require("express");

const app = express();
const PORT = process.argv.PORT || 3000;

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Middleware for app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



app.listen(PORT, function() {
  console.log("App listening on Port: " + PORT);
});
