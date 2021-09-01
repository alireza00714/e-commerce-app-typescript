import styles from "./ProductCard.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

interface IProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const ProductCard: React.FC<IProps> = ({
  id,
  name,
  price,
  image,
  quantity,
}) => {
  return (
    <div
      className={`${styles.direction} w-52 h-80 border-2 border-gray-200 rounded-xl hover:shadow-lg transition-shadow flex flex-col justify-between p-2 cursor-pointer`}
    >
      <div>
        <Link to={"/buy/products/single/" + id}>
          <img src={image} alt={name} />
        </Link>
        <Link
          to={"/buy/products/single/" + id}
          className="text-sm text-right fd"
        >
          {name}
        </Link>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          {quantity > 0 ? (
            <>
              <span
                className={`${styles["product-card__price"]} fd font-bold text-lg`}
              >
                {price}
              </span>
              <span className={`${styles["product-card__price"]} text-xs mr-1`}>
                تومان
              </span>
            </>
          ) : (
            <span
              className={`${styles["product-card__price"]} fd font-bold text-lg`}
            >
              ناموجود
            </span>
          )}
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
