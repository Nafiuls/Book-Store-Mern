import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  const handleAddToCart = (e) => {
    console.log(e);
  };
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt=""
              className="w-full h-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="flex flex-col">
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book?.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5 flex-1">
            {book?.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book?.description}
          </p>
          <p className="font-medium mb-5">
            ${book?.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              $ {book?.oldPrice}
            </span>
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="bg-yellow-400 rounded-md text-black  hover:bg-black hover:text-white transition-all duration-300 px-5 flex items-center justify-center gap-3 py-2 "
          >
            <FiShoppingCart className="size-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
