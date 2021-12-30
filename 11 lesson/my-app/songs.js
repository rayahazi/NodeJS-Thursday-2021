const express = require("express");

// Create new router for specific data:
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Songs home page..</h1>");
});

router.get("/about", (req, res) => {
  res.send("<h1>About the song</h1>");
});

module.exports = router;