import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaShoppingCart, FaUserCircle, FaShoppingBag } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ICategory } from "../../types";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <header>
      <div
        className={`${styles.header} h-16 w-full fixed top-0 z-10 shadow-lg lg:container lg:top-3 lg:rounded-lg lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-between px-3`}
      >
        <div className="flex">
          {!(pathname === "/pay/cart/1") && (
            <Link
              to={"/pay/cart/1"}
              className="relative mr-4 cursor-pointer select-none h-full"
            >
              <FaShoppingCart size="2rem" fill="#fff" />
              <span
                className={`${styles["header__cartcount"]} w-6 h-6 absolute -top-2 -right-2 rounded-full flex items-center justify-center fd font-medium`}
              >
                2
              </span>
            </Link>
          )}
          <div className="cursor-pointer">
            <FaUserCircle size="2rem" fill="#fff" />
          </div>
        </div>
        <Link
          to="/"
          className="flex items-center cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex select-none"
        >
          <span className="text-3xl font-black text-white mr-1">
            دیجی&zwnj;مارکت
          </span>
          <span>
            <FaShoppingBag size="2.5rem" fill="#fff" />
          </span>
        </Link>
        {!(pathname === "/pay/cart/1") && (
          <div
            className="flex items-center cursor-pointer select-none h-full"
            onMouseEnter={() => {
              setIsCategoryOpen(true);
            }}
            onMouseLeave={() => setIsCategoryOpen(false)}
            onClick={() => {
              setIsCategoryOpen(!isCategoryOpen);
            }}
          >
            <span className="text-white text-xl font-medium">
              دسته&zwnj;بندی کالاها
            </span>
            <span>
              <HiMenu size="2rem" fill="#fff" />
            </span>
            {isCategoryOpen && (
              <div
                className={`${styles["header__category"]} absolute right-0 top-14 shadow-lg rounded-bl-lg lg:rounded-b-lg flex flex-col w-80 py-4`}
                onMouseOver={() => setIsCategoryOpen(true)}
              >
                {categories.map((category) => (
                  <Link
                    to={"/buy/products/" + category.name}
                    key={category.id}
                    className="w-full cursor-pointer flex flex-row-reverse justify-between items-center hover:bg-pink-700 py-4"
                  >
                    <span className="text-white pr-4 text-lg">
                      {category.name}
                    </span>
                    <MdKeyboardArrowLeft
                      className="ml-4"
                      size="1.5rem"
                      color="#fff"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
