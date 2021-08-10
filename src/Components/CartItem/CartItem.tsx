import styles from "./CartItem.module.css";
import { HiMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const CartItem = () => {
  return (
    <div className="rounded-md border border-gray-300 hover:shadow-md transition-shadow flex flex-row-reverse">
      <div className="w-32 lg:w-40 pr-1">
        <img
          className="w-full h-full cursor-pointer rounded-r-md"
          src="https://dkstatics-public.digikala.com/digikala-products/4876835.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between py-2 px-2 lg:py-4 lg:pl-4 lg:pr-6 w-full">
        <span className="text-right text-sm lg:text-lg">
          پنیر لیقوان اوجان لبن مقدار 650 گرم
        </span>
        <div className="flex flex-row-reverse justify-between">
          <div className="flex flex-row-reverse">
            <div
              className={`${styles["cart-item__quantity"]} flex items-center rounded-md px-1 py-0.5 gap-3 ml-2`}
            >
              <span className="cursor-pointer">
                <HiMinus size="1.5rem" color="#9c203f" />
              </span>
              <span className="fd">2</span>
              <span className="cursor-pointer">
                <FiPlus size="1.5rem" color="#9c203f" />
              </span>
            </div>
            <div className="cursor-pointer flex items-center md:mr-2">
              <span
                className={`${styles["cart-item__delete-btn-text"]} text-xs font-md hidden md:block`}
              >
                حذف
              </span>
              <span>
                <MdDelete size="1.5rem" fill="#9c203f" />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-light">تومان</span>
            <span className={`fd text-lg font-semibold`}>24,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
