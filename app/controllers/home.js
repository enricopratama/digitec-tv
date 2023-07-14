const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  res.render("views/home.ejs");
});

router.use(async function (req, res) {
  const data = {
    currentPage: "page_404",
  };
  res.render("pages/page_404", data);
});

module.exports = router;
