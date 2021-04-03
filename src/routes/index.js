const express = require("express");
const router = express.Router();

const { indexPage, messagesPage } = require("../controllers");

router.get("/", indexPage);
router.get("/messages", messagesPage);

module.exports = router;
