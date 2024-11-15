const express = require("express");
const { createOrder, getOrderByEmail } = require("./order.controller");

const router = express.Router();

// create a order endpoint
router.post("/create-order", createOrder);
// get order by user email
router.get("/get-order/:email", getOrderByEmail);
module.exports = router;
