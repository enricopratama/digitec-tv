const path = require('path');

// Define your controller logic here
const getIndexPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
};

module.exports = {
  getIndexPage,
};