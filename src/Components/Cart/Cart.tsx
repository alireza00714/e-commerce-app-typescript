import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className="container mx-auto px-4">
      <div className={`${styles.cart} flex flex-col rounded-xl shadow-lg`}>
        <div className="flex flex-row-reverse justify-between px-4 md:px-6 py-4">
          <div className="flex items-center">
            <span className="mr-2 font-bold text-xl lg:text-2xl">سبد خرید</span>
            <span
              className={`${styles["cart__dot-title"]} w-4 h-4 rounded-full`}
            ></span>
          </div>
          <button className={`${styles["cart__reset-btn"]} text-white px-2 py-1 rounded-md`}>
            خالی کردن سبد خرید
          </button>
        </div>
        <div className={`${styles["divider"]} lg:mb-1`}></div>
        <div className="p-4 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-1 gap-10">
          <div className="order-2 lg:order-none col-span-1 lg:col-span-2">
            <Checkout />
          </div>
          <div className="order-1 lg:order-none col-span-1 lg:col-span-4 flex flex-col gap-4 lg:gap-5">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
