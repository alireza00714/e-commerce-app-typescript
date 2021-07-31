import styles from "./Header.module.css";
import { FaShoppingCart, FaUserCircle, FaShoppingBag } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className="w-full px-3 py-4 fixed top-0">
      <div
        className={`${styles.header} container mx-auto rounded-lg h-16 text-white shadow-md px-3 py-2 flex justify-between items-center relative`}
      >
        <div className="flex items-center">
          <div className="relative cursor-pointer mr-4">
            <FaShoppingCart color="#ffffff" className="w-8 h-8" />
            <div
              className={`${styles["header__cartcount"]} rounded-full fd absolute w-5 h-5 -top-1 -right-2 flex items-center justify-center`}
            >
              2
            </div>
          </div>
          <div className="cursor-pointer">
            <FaUserCircle className="w-8 h-8" />
          </div>
        </div>
        <div
          className={`flex items-center cursor-pointer ${styles["header__brand"]}`}
        >
          <span className="text-3xl	font-black">دیجی مارکت</span>
          <div className="ml-2">
            <FaShoppingBag className="w-10 h-10" />
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <span className="mr-1 text-xl">دسته بندی محصولات</span>
          <div>
            <HiMenu className="w-8 h-8" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
