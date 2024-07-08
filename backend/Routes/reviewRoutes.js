const express = require("express");
const { getReviewsByBook } = require("../controllers/reviewController");
const router = express.Router();
router.get("/reviews/:booId", getReviewsByBook);
module.exports.router;
