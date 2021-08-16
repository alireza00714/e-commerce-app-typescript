import "./ProductPage.styles.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";

const ProductPage = () => {
  return (
    <>
      <Header />
      <main className="container px-4 mx-auto my-24 flex justify-center items-center">
        <SingleProduct />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
