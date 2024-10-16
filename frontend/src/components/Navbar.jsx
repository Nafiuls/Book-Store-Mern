import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import imgAvatar from "../assets/Icons/avatar.png";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/carts" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  // toggle drop down
  const [isOpen, setIsOpen] = useState(false);
  const user = true;

  return (
    <header className="max-w-7xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center gap-16">
          <Link to={"/"}>
            <HiMiniBars3CenterLeft size={25} />
          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            {/* icon */}
            <CiSearch
              size={20}
              className="absolute inline-block left-3 inset-y-2"
            />
            <input
              type="text"
              placeholder="Search Here"
              className="outline-none bg-[#EAEAEA] py-1 md:px-8 px-6 rounded-sm"
            />
          </div>
        </div>
        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          {/* conditional icon */}
          <div className="flex items-center">
            {user ? (
              <>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <img
                    src={imgAvatar}
                    alt=""
                    className={` rounded-full ${
                      user ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* dropdown menu */}
                {isOpen && (
                  <div className="absolute top-10 z-40 right-0 mt-2 rounded-md shadow-lg bg-white w-48">
                    <ul className=" px-2 py-2">
                      {navigation.map((item, index) => (
                        <li key={index} onClick={() => setIsOpen(false)}>
                          <Link
                            className="block px-2 py-2 text-sm hover:bg-gray-100"
                            to={item.href}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <FaUserCircle size={24} />
                </Link>
              </>
            )}
          </div>
          <button className="hidden sm:block">
            <FaRegHeart size={25} />
          </button>
          {/* shop button */}
          <Link
            to={"/cart"}
            className="flex items-center bg-primary p-1 sm:px-6 px-2 font-semibold text-secondary rounded-md"
          >
            <MdOutlineShoppingCart size={25} />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
