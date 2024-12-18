import BookCard from "../books/BookCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa6";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const Reccomended = () => {
  const { data: books = [] } = useFetchAllBooksQuery();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 capitalize">
        Recommended for you
      </h2>
      {/* books render div */}
      <h1 className="my-10 flex justify-center items-center text-xl gap-3 ">
        Swipe <FaArrowRight />
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          1180: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Reccomended;
