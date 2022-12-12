const express = require("express");
const router = express.Router();

const { getAllData, createData } = require("../controllers/data");

router.route("/").post(createData);
router.route("/dados").get(getAllData);

module.exports = router;
