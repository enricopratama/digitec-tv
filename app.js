const express = require('express');
const app = express();
const router = express.Router(); // import router object 

// Import the controller
const controller = require('./Controllers/controller');

// Route for the root URL
router.get('/', controller.getIndexPage);

// Register the router middleware
app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));