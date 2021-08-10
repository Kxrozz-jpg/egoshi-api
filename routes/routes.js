const express = require("express");
const router = express.Router();

/* Pages or Routes */
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/token", (req, res) => {
  res.redirect(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  );
});

router.get("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "authorization, content-type");
  next();
});

module.exports = router;
