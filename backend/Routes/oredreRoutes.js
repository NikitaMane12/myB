const express = require("express");
const router = require("./authRoutes");
const { authenticates } = require("../middlerwares/authmiddlewares");
const { getOrderByCustomer } = require("../controllers/orderController");
router.get("/orders/:customers", authenticates, getOrderByCustomer);
module.exports = router;
