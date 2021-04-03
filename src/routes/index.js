const express = require("express");
const router = express.Router();

const { testEnvironmentVariable } = require("../settings");

router.get("/", function (req, res, next) {
  return res.status(200).json({ message: testEnvironmentVariable });
});
module.exports = router;
