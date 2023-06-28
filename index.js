const express = require('express');
const path = require('path');
const app = express();
const config = require("./config/app");

app.use(express.static(path.join(__dirname, "static")));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home.ejs");
});

// Handling non matching request from the client
app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
  });

app.listen(config.PORT, function(err) {
    if (err) {
        return console.log("An error occured.");
    }
    console.log("This server is running on port " + config.PORT);
});


