import styles from "./ProductCard.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="w-52 h-80 border-2 border-gray-200 rounded-md hover:shadow-lg transition-shadow flex flex-col justify-between p-2">
      <div>
        <div>
          <img
            className="cursor-pointer"
            src="https://dkstatics-public.digikala.com/digikala-products/4876835.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
            alt=""
          />
        </div>
        <span className="text-sm cursor-pointer text-right">
          پنیر لیقوان اوجان لبن مقدار 650 گرم
        </span>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <span
            className={`${styles["product-card__price"]} fd font-bold text-lg`}
          >
            24,000
          </span>
          <span className={`${styles["product-card__price"]} text-xs mr-1`}>
            تومان
          </span>
        </div>
        <div className="flex items-center">
          <div className={`${styles["product-card__add-to-wishlist-btn"]}`}>
            <AiFillHeart />
          </div>
          <div className={`${styles["product-card__add-to-cart-btn"]} mr-1`}>
            <MdAddShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
