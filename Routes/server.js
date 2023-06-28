const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// Import the controller
const controller = require('./controllers/controller');

// Route for the root URL
router.get('/', controller.getIndexPage);

// Register the router middleware
app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));