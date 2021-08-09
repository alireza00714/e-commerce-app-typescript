import Carousel from "../../Components/Carousel/Carousel";
import Header from "../../Components/Header/Header";
import "./HomePage.styles.css";
import { carouselData } from "../../Components/Carousel/data";
import HomeCardContainer from "../../Components/HomeCardContainer/HomeCardContainer";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="mb-24">
        <div className="container mt-24 mx-auto px-4 grid grid-cols-1 grid-ows-1 grap-y-3 mb-8 lg:grid-cols-3 lg:grid-rows-1 lg:gap-3 ">
          <div className="hidden lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-3">
            <div className="h-52 cursor-pointer">
              <img
                className="w-full h-full rounded-lg bg-auto"
                src="https://picsum.photos/700/300"
                alt=""
              />
            </div>
            <div className="h-52 cursor-pointer">
              <img
                className="w-full h-full rounded-lg bg-auto"
                src="https://picsum.photos/700/300"
                alt=""
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <Carousel data={carouselData} />
          </div>
        </div>
        <div className="container px-4 mx-auto mb-8 ">
          <HomeCardContainer title="پرفروش&zwnj;ترین محصولات" />
        </div>
        <div className="container px-4 mx-auto mb-8 ">
          <div className="grid grid-cols-1 grid-rows-2 gap-3 md:grid-rows-1 md:grid-cols-3">
            <div className="h-52 cursor-pointer">
              <img
                className="w-full h-full rounded-lg bg-auto"
                src="https://picsum.photos/700/300"
                alt=""
              />
            </div>
            <div className="h-52 cursor-pointer md:col-span-2">
              <img
                className="w-full h-full rounded-lg bg-auto"
                src="https://picsum.photos/1000/400"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto mb-8 ">
          <HomeCardContainer title="پربازدیدترین محصولات" />
        </div>
        <div className="container px-4 mx-auto ">
          <HomeCardContainer title="جدیدترین محصولات" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
