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

module.exports = { postBook, getAllBooks, getSignleBook };
