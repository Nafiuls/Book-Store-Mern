const express = require("express");
const { createOrder } = require("./order.controller");

const router = express.Router();

// create a order endpoint
router.post("/create-order", createOrder);

module.exports = router;
