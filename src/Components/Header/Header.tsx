import styles from "./Header.module.css";
import { FaShoppingCart, FaUserCircle, FaShoppingBag } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header>
      <div
        className={`${styles.header} h-16 w-full fixed top-0 z-10 shadow-lg lg:container lg:top-3 lg:rounded-lg lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-between px-3`}
      >
        <div className="flex">
          <div className="relative mr-4 cursor-pointer">
            <FaShoppingCart size="2rem" fill="#fff" />
            <span
              className={`${styles["header__cartcount"]} w-6 h-6 absolute -top-2 -right-2 rounded-full flex items-center justify-center fd font-medium`}
            >
              2
            </span>
          </div>
          <div className="cursor-pointer">
            <FaUserCircle size="2rem" fill="#fff" />
          </div>
        </div>
        <div className="flex items-center cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
          <span className="text-2xl font-black text-white mr-1">
            دیجی&zwnj;مارکت
          </span>
          <span>
            <FaShoppingBag size="2.5rem" fill="#fff"/>
          </span>
        </div>
        <div className="flex items-center cursor-pointer">
          <span className="text-white text-lg font-medium hidden lg:block">
            دسته&zwnj;بندی کالاها
          </span>
          <span>
            <HiMenu size="2rem" fill="#fff" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
