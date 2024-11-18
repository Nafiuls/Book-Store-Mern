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
const orderRoutes = require("./src/orders/order.router");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);
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
