import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CostRange from "../../Components/CostRange/CostRange";
import ProductList from "../../Components/ProductList/ProductList";
import { IProduct } from "../../types";
import "./ProductsListPage.styles.css";

const ProductsListPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);
  const [brands, setBrands] = useState<string[]>([]);
  const [brandsFilter, setBrandsFilter] = useState<string[]>([]);
  const [sortType, setSortType] = useState<string>("default");
  const [availability, setAvailability] = useState<string>("all");
  const { category } = useParams<{ category: string }>();

  const brandChangeHandler = (value: string, checked: boolean): void => {
    if (checked) setBrandsFilter([...brandsFilter, value]);
    else setBrandsFilter([...brandsFilter.filter((brand) => brand !== value)]);
  };

  const availabilityChangeHandler = (value: string): void => {
    setAvailability(value);
  };

  useEffect(() => {
    if (category)
      fetch("/api/products/" + category)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    else
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
  }, [category]);

  useEffect(() => {
    setBrands([...new Set(products.map((product) => product.brand))]);
    setFilteredProducts(products);
    setBrandsFilter([]);
    setSortType("default");
    setAvailability("all");
  }, [products]);

  return (
    <main className="my-24 container mx-auto px-4">
      <div className="lg:grid lg:grid-cols-6 lg:gap-4 xl:gap-8">
        <div className="lg:col-span-4  mb-8 lg:mb-0">
          <ProductList
            filteredProducts={filteredProducts}
            sortType={sortType}
            setSortType={setSortType}
          />
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <div className="bg-white rounded-xl shadow-lg flex flex-col gap-4 items-end pt-4 px-4 pb-8">
              <div className="flex flex-row-reverse items-center gap-2">
                <div className="bg-pink-900 w-3 h-3 rounded-full"></div>
                <span className="text-lg font-semibold">برندها</span>
              </div>
              <div className="px-8 flex flex-row-reverse flex-wrap gap-x-6 gap-y-3">
                {brands.map((brand, index) => (
                  <label
                    className="brand-filter__label"
                    htmlFor={brand}
                    key={index}
                  >
                    {brand}
                    <input
                      type="checkbox"
                      className="brand-filter__checkbox"
                      id={brand}
                      value={brand}
                      checked={brandsFilter.includes(brand) ? true : false}
                      onChange={(e) => {
                        brandChangeHandler(
                          e.target.value,
                          Boolean(e.target.checked)
                        );
                      }}
                    />
                    <div className="brand-filter__checkmark ml-1"></div>
                  </label>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg flex flex-col gap-2 items-end p-4">
              <div className="flex flex-row-reverse items-center gap-2">
                <div className="bg-pink-900 w-3 h-3 rounded-full"></div>
                <span className="text-lg font-semibold">وضعیت محصولات</span>
              </div>
              <div className="pr-4">
                <label
                  className="availability-filter__label"
                  htmlFor="available"
                >
                  موجود
                  <input
                    name="availibility"
                    type="radio"
                    className="availability-filter__radio font-medium"
                    id="available"
                    value={"available"}
                    checked={availability === "available" ? true : false}
                    onChange={(e) => {
                      availabilityChangeHandler(e.target.value);
                    }}
                  />
                  <div className="availability-filter__radio-checkmark ml-1"></div>
                </label>
                <label className="availability-filter__label" htmlFor="all">
                  همه
                  <input
                    name="availibility"
                    type="radio"
                    className="availability-filter__radio font-medium"
                    id="all"
                    value="all"
                    checked={availability === "all" ? true : false}
                    onChange={(e) => {
                      availabilityChangeHandler(e.target.value);
                    }}
                  />
                  <div className="availability-filter__radio-checkmark ml-1"></div>
                </label>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg flex flex-col gap-12 items-end pt-4 px-4 pb-8">
              <div className="flex flex-row-reverse items-center gap-2">
                <div className="bg-pink-900 w-3 h-3 rounded-full"></div>
                <span className="text-lg font-semibold">محدوده قیمت</span>
              </div>
              <div className="relative w-full pr-12 pl-8">
                <CostRange
                  rtl={false}
                  min={0}
                  max={500000}
                  step={5000}
                  products={products}
                  filteredProducts={filteredProducts}
                  setFilteredProducts={setFilteredProducts}
                  availability={availability}
                  sortType={sortType}
                  brandsFilter={brandsFilter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsListPage;
