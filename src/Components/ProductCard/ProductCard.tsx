import styles from "./ProductCard.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { IProduct } from "../../types";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const AddToCartHandler = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image1,
    });
  };

  return (
    <div
      className={`${styles.direction} w-52 h-80 border-2 border-gray-200 rounded-xl hover:shadow-lg transition-shadow flex flex-col justify-between p-2 cursor-pointer select-none`}
    >
      <div>
        <Link to={"/buy/products/single/" + product.id}>
          <img src={product.image1} alt={product.title} />
        </Link>
        <Link
          to={"/buy/products/single/" + product.id}
          className="text-sm text-right fd"
        >
          {product.title}
        </Link>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          {product.quantity > 0 ? (
            <>
              <span
                className={`${styles["product-card__price"]} fd font-bold text-lg`}
              >
                {product.price}
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
          <div
            className={`${styles["product-card__add-to-cart-btn"]} mr-1`}
            onClick={AddToCartHandler}
          >
            <MdAddShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
