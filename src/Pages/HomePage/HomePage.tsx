import Carousel from "../../Components/Carousel/Carousel";
import "./HomePage.styles.css";
import { carouselData } from "../../Components/Carousel/data";
import HomeCardContainer from "../../Components/HomeCardContainer/HomeCardContainer";
import { useEffect } from "react";
import { useState } from "react";
import { IProduct } from "../../types";

const uniqueRandomNumberGenerator = () => {
  const nums = new Set();
  while (nums.size !== 8) {
    nums.add(Math.floor(Math.random() * 24) + 1);
  }
  return [...nums];
};

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [mostViewedProducts, setMostViewedProducts] = useState<IProduct[]>([]);
  const [mostRecentProducts, setMostRecentProducts] = useState<IProduct[]>([]);
  const [mostSoldProducts, setMostSoldProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  useEffect(() => {
    const mostViewedNumbers = uniqueRandomNumberGenerator();
    const mostRecentNumbers = uniqueRandomNumberGenerator();
    const mostSoldNumbers = uniqueRandomNumberGenerator();
    setMostViewedProducts(
      products.filter((item, index) => mostViewedNumbers.includes(index))
    );
    setMostRecentProducts(
      products.filter((item, index) => mostRecentNumbers.includes(index))
    );
    setMostSoldProducts(
      products.filter((item, index) => mostSoldNumbers.includes(index))
    );
  }, [products]);

  return (
    <main className="mb-24">
      <div className="container mt-24 mx-auto px-4 grid grid-cols-1 grid-rows-1 gap-y-3 mb-8 lg:grid-cols-3 lg:grid-rows-1 lg:gap-3 ">
        <div className="hidden lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-3 select-none">
          <div className="h-full cursor-pointer">
            <img
              className="w-full h-full rounded-lg bg-auto"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/8700d9f42376253e86ed95a5a67bbebd8c53ed43_1630496382.jpg?x-oss-process=image/quality,q_80"
              alt=""
            />
          </div>
          <div className="h-full cursor-pointer">
            <img
              className="w-full h-full rounded-lg bg-auto"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/99a848bd8c8859dbe824f6c169af6bcc85143642_1630310681.gif"
              alt=""
            />
          </div>
        </div>
        <div className="md:col-span-2 select-none">
          <Carousel data={carouselData} />
        </div>
      </div>
      <div className="container px-4 mx-auto mb-8 ">
        <HomeCardContainer
          products={mostSoldProducts}
          title="پرفروش&zwnj;ترین محصولات"
        />
      </div>
      <div className="container px-4 mx-auto mb-8 ">
        <div className="grid grid-cols-1 grid-rows-2 gap-3 md:grid-rows-1 md:grid-cols-3">
          <div className="h-52 cursor-pointer">
            <img
              className="w-full h-full rounded-lg bg-auto"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/23f85765c9c81b04e2dc7e89cce26b7209995534_1630130776.jpg?x-oss-process=image/quality,q_80"
              alt=""
            />
          </div>
          <div className="h-52 cursor-pointer md:col-span-2">
            <img
              className="w-full h-full rounded-lg bg-auto"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c11cf0a502e9cb2b6ef8e3fb32b593e2e84348b0_1629698997.jpg?x-oss-process=image/quality,q_80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto mb-8 ">
        <HomeCardContainer
          products={mostViewedProducts}
          title="پربازدیدترین محصولات"
        />
      </div>
      <div className="container px-4 mx-auto ">
        <HomeCardContainer
          products={mostRecentProducts}
          title="جدیدترین محصولات"
        />
      </div>
    </main>
  );
};

export default HomePage;
