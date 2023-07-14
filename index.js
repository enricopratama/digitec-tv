/* 
const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const logger = require("./app/module/poly_logger")
const c_main = require('./app/controllers/controller_main')
const configuration = require("./app/module/configuration")
const passport = require("./app/module/passport")
const app_config = require('./app/config/app.json')
const cookieParser = require('cookie-parser');
*/
const express = require('express');
const path = require('path');
const app = express();
const config = require("./app/config/app");
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname+'/public'))); // Imported public folder 
app.get("/sitemap.xml", (req, res) => {
    res.sendFile(path.join(__dirname, "sitemap.xml"));
  });

// Routes:
app.get('/', (req, res) => {
    res.render('homepage', { currentPage: 'home' });
});

app.get('/products', (req, res) => {
    res.render('productsNew', { currentPage: 'products' });
});

app.get('/support', (req, res) => {
    res.render('support', { currentPage: 'support' });
});

app.get('/login', (req, res) => {
    res.render('login', { currentPage: 'login' });
});

// Handling non matching request from the client (404 not found)
app.all('*', (req, res) => {
    res.render('page_404', { currentPage: 'page_404' });
  });

// app.get("*", (req, res, next) => {
// if (req.headers.host.startsWith("www.")) {
//     res.redirect(301, `http://${req.headers.host.slice(4)}${req.originalUrl}`);
// } else {
//     next();
// }
// });

app.use((req, res, next) => {
    if (req.headers.host.startsWith('www.')) {
      const newUrl = `http://${req.headers.host.slice(4)}${req.originalUrl}`;
      return res.redirect(301, newUrl);
    }
    next();
  });

app.listen(process.env.APP_PORT, function(err) {
    if (err) {
        return console.log("An error occured.");
    }
    console.log("This server is running on port " + process.env.APP_PORT);
});
