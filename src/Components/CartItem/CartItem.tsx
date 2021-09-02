import styles from "./CartItem.module.css";
import { HiMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ICartProduct } from "../../types";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

interface IProps {
  item: ICartProduct;
}

const CartItem: React.FC<IProps> = ({ item }) => {
  const { deleteItem, deleteWholeItem, addToCart } = useContext(CartContext);
  const deleteItemHandler = () => {
    deleteItem(item.id);
  };

  const deleteWholeItemHandler = () => {
    deleteWholeItem(item.id);
  };

  const addToCartHandler = () => {
    addToCart(item);
  };
  return (
    <div className="rounded-md border border-gray-300 flex flex-row-reverse select-none">
      <div className="w-32 lg:w-40 pr-1">
        <img
          className="w-full h-full cursor-pointer rounded-r-md"
          src={item.image}
          alt="itemimage"
        />
      </div>
      <div className="flex flex-col justify-between py-2 px-2 lg:py-4 lg:pl-4 lg:pr-6 w-full">
        <span className="text-right text-sm lg:text-lg fd">{item.title}</span>
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="flex flex-row-reverse">
            <div
              className={`${styles["cart-item__quantity"]} flex items-center rounded-md px-1 py-0.5 gap-3 ml-2`}
            >
              <span className="cursor-pointer" onClick={deleteItemHandler}>
                <HiMinus size="1.5rem" color="#9c203f" />
              </span>
              <span className="fd">{item.quantity}</span>
              <span className="cursor-pointer" onClick={addToCartHandler}>
                <FiPlus size="1.5rem" color="#9c203f" />
              </span>
            </div>
            <div
              className="cursor-pointer flex items-center justify-center md:mr-2"
              onClick={deleteWholeItemHandler}
            >
              <MdDelete size="1.5rem" fill="#9c203f" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-light">تومان</span>
            <span className={`fd text-lg font-semibold`}>
              {item.totalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
