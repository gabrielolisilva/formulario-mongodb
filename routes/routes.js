const express = require("express");
const router = express.Router();

const { createData } = require("../controllers/data");

router.route("/").post(createData);

module.exports = router;
