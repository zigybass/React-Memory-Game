const express = require("express");
const path = require('path');
const app = express();

const app = express();
const PORT = process.argv.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Middleware for app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function() {
  console.log("App listening on Port: " + PORT);
});
