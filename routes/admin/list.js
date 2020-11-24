const express = require("express");

var router = express.Router()

router.get("/", (req, res) => {
  res.send("list")
})

module.exports = router