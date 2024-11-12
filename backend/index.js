const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
require("dotenv").config();
// middle ware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);
async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("The server is running!");
  });
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
