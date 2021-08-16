import CostRange from "../../Components/CostRange/CostRange";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProductList from "../../Components/ProductList/ProductList";
import "./ProductsListPage.styles.css";

const ProductsListPage = () => {
  return (
    <>
      <Header />
      <main className="my-24 container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-6 lg:gap-4 xl:gap-16">
          <div className="lg:col-span-4">
            <ProductList />
          </div>
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-8 lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-lg flex flex-col gap-4 items-end pt-4 px-4 pb-8">
                <div className="flex flex-row-reverse items-center gap-2">
                  <div className="bg-pink-900 w-3 h-3 rounded-full"></div>
                  <span className="text-lg font-semibold">برندها</span>
                </div>
                <div className="px-8 flex flex-row-reverse flex-wrap gap-x-6 gap-y-3">
                  <label className="brand-filter__label" htmlFor="samsung">
                    samsung
                    <input
                      type="checkbox"
                      className="brand-filter__checkbox"
                      id="samsung"
                    />
                    <div className="brand-filter__checkmark ml-1"></div>
                  </label>
                  <label className="brand-filter__label" htmlFor="apple">
                    apple
                    <input
                      type="checkbox"
                      className="brand-filter__checkbox"
                      id="apple"
                    />
                    <div className="brand-filter__checkmark ml-1"></div>
                  </label>
                  <label className="brand-filter__label" htmlFor="shiaomi">
                    shiaomi
                    <input
                      type="checkbox"
                      className="brand-filter__checkbox"
                      id="shiaomi"
                    />
                    <div className="brand-filter__checkmark ml-1"></div>
                  </label>
                  <label className="brand-filter__label" htmlFor="LG">
                    LG
                    <input
                      type="checkbox"
                      className="brand-filter__checkbox"
                      id="LG"
                    />
                    <div className="brand-filter__checkmark ml-1"></div>
                  </label>
                  <label className="brand-filter__label" htmlFor="bosch">
                    bosch
                    <input
                      type="checkbox"
                      className="brand-filter__checkbox"
                      id="bosch"
                    />
                    <div className="brand-filter__checkmark ml-1"></div>
                  </label>
                  <label className="brand-filter__label" htmlFor="kenwood">
                    kenwood
                    <input
                      type="checkbox"
                      className="brand-filter__checkbox"
                      id="kenwood"
                    />
                    <div className="brand-filter__checkmark ml-1"></div>
                  </label>
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
                  <CostRange rtl={false} min={0} max={100} step={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsListPage;
