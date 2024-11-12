const Book = require("./book.model");
// post a book
const postBook = async (req, res) => {
  try {
    const newBook = await Book.create({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully!", book: newBook });
  } catch (error) {
    console.log("error creating book", error);
    res.status(500).send({ message: "Error creating book!" });
  }
};

// get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.log("error getting books", error);
    res.status(500).send({ message: "Error getting books!" });
  }
};

// get single book by id
const getSignleBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.log("error getting book", error);
    res.status(500).send({ message: "Error getting book!" });
  }
};

// update a book by id
const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res
      .status(200)
      .send({ message: "Book updated successfully!", book: updatedBook });
  } catch (error) {
    console.log("error updating book", error);
    res.status(500).send({ message: "Error updating book!" });
  }
};

// delete a book by id
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book deleted successfully!" });
  } catch (error) {
    console.log("error deleting book", error);
    res.status(500).send({ message: "Error deleting book!" });
  }
};

module.exports = {
  postBook,
  getAllBooks,
  getSignleBook,
  updateBook,
  deleteBook,
};
