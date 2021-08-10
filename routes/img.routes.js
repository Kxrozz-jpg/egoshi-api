const express = require("express");
const router = express.Router();

/* JSON Docs */
const baka = require("../docs/baka.json");

const querys = {
  img: ["si", "no", "a"],
};

const List = {
  usage: "/{route}",
  variable: ["img", "gif"],
};

router.get("/", (req, res) => {
  res.status(200).json(List);
});

router.get("/img", (req, res) => {
  res.json(querys);
});

router.get("/baka", (req, res) => {
  const status = res.statusCode;
  var random = baka[Math.floor(Math.random() * baka.length)];
  res.status(200).json({ status, ...random });
});

module.exports = router;
