const express = require("express");
const Book = require("./book.model");
const {
  postBook,
  getAllBooks,
  getSignleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const router = express.Router();
// book routes

// post a book
router.post("/add-book", postBook);

// get all books
router.get("/get-books", getAllBooks);

// get a single book by /:id
router.get("/single-book/:id", getSignleBook);

// update a book by /:id
router.put("/edit-book/:id", updateBook);

// delete a book by /:id
router.delete("/delete-book/:id", deleteBook);
module.exports = router;
