import "./ProductPage.styles.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";

const ProductPage = () => {
  return (
    <>
      <Header />
      <main className="my-24 flex justify-center items-center grid grid-cols-1">
        <SingleProduct />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
