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
          <div className="flex flex-col gap-8 lg:col-span-2">
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
            <div className="bg-white rounded-xl shadow-lg flex flex-col gap-2 items-end p-4">
              <div className="flex flex-row-reverse items-center gap-2">
                <div className="bg-pink-900 w-3 h-3 rounded-full"></div>
                <span className="text-lg font-semibold">محدوده قیمت</span>
              </div>
              <div className="">
                
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
