const express = require("express");
const Book = require("./book.model");
const { postBook, getAllBooks, getSignleBook } = require("./book.controller");
const router = express.Router();
// book routes

// post a book
router.post("/add-book", postBook);

// get all books
router.get("/get-books", getAllBooks);

// get a single book by /:id
router.get("/single-book/:id", getSignleBook);
router;
module.exports = router;
