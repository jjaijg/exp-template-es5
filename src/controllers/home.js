const { testEnvironmentVariable } = require("../settings");

exports.indexPage = (req, res) =>
  res.status(200).json({ message: testEnvironmentVariable });
