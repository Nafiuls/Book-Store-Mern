import { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  //   filtering
  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLocaleLowerCase()
        );
  console.log(filteredBooks);
  return (
    <div className="my-[80px]">
      <h2 className="text-2xl font-semibold mb-6">Top Sellers</h2>
      {/* category filtering */}
      <div className="mb-6 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] py-2 px-4 focus:outline-none rounded-sm border-gray-300"
        >
          {categories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* books render */}
      <div>
        {filteredBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
