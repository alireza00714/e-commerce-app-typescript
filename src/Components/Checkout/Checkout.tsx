import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { totalCost, totalQuantity } = useContext(CartContext);
  return (
    <div className="border border-gray-300 rounded-md flex flex-col p-2 lg:hover:shadow-lg transition-shadow lg:sticky lg:top-24">
      <div className="flex flex-col px-2 pt-2">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-sm">تومان</span>
            <span className="fd text-gray-500">{totalCost}</span>
          </div>
          <span className="text-gray-500 fd">قیمت کالاها ({totalQuantity})</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1">
            <span className="text-red-700 text-sm">تومان</span>
            <span className="fd text-red-700 fd">0 (0%)</span>
          </div>
          <span className="text-gray-500">تخفیف کالاها</span>
        </div>
        <div className={`${styles["divider"]} mb-2`}></div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-1">
            <span className="text-md font-semibold">تومان</span>
            <span className="fd text-lg font-semibold fd">{totalCost}</span>
          </div>
          <span className="font-semibold text-lg">جمع سبد خرید</span>
        </div>
      </div>
      <button
        className={`${styles["checkout__payment-btn"]} text-white py-4 rounded-md font-bold text-xl`}
      >
        پرداخت فاکتور
      </button>
    </div>
  );
};

export default Checkout;
