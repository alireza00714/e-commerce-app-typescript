import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col">
      <div className="flex flex-row-reverse items-center py-4 pr-4">
        <span className="font-medium text-sm ml-4">:مرتب سازی بر اساس</span>
        <label
          className={`${styles["product-list__sort-item"]} text-sm px-2 py-1`}
          htmlFor="newest"
        >
          جدیدترین
          <input type="radio" id="newest" name="sortRadio" />
          <div
            className={`${styles["product-list__sort-checkmark"]} rounded-md`}
          ></div>
        </label>
        <label
          className={`${styles["product-list__sort-item"]} text-sm px-2 py-1`}
          htmlFor="expensive"
        >
          گران&zwnj;ترین
          <input type="radio" id="expensive" name="sortRadio" />
          <div
            className={`${styles["product-list__sort-checkmark"]} rounded-md`}
          ></div>
        </label>
        <label
          className={`${styles["product-list__sort-item"]} text-sm px-2 py-1`}
          htmlFor="cheapest"
        >
          ارزان&zwnj;ترین
          <input type="radio" id="cheapest" name="sortRadio" />
          <div
            className={`${styles["product-list__sort-checkmark"]} rounded-md`}
          ></div>
        </label>
      </div>
      <div className={`${styles["product-list__divider"]}`}></div>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-8 lg:gap-1 lg:py-4 xl:gap-8 2xl:gap-8 py-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/*paginaiton*/}
      <div></div>
    </div>
  );
};

export default ProductList;
