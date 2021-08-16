import styles from "./SingleProduct.module.css";
import "./Swiper.styles.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import { AiFillHeart } from "react-icons/ai";
import { MdShare } from "react-icons/md";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

SwiperCore.use([Navigation, Thumbs]);

const SingleProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <div
      className={`${styles["single-product"]} w-full rounded-xl shadow-lg flex flex-col lg:flex-row`}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center flex-row-reverse pl-4 lg:pl-6 lg:flex-row">
          <div className="flex gap-2">
            <div className={`${styles["single-product__share-btn"]}`}>
              <MdShare />
            </div>
            <div className={`${styles["single-product__add-to-wishlist-btn"]}`}>
              <AiFillHeart />
            </div>
          </div>
          <div className="flex flex-col gap-2 order-first lg:order-none pr-4 lg:py-6 lg:pr-6">
            <h3 className="text-xl font-semibold text-right">
              کیبورد و ماوس بی‌سیم لاجیتک
            </h3>
            <span className="text-right text-gray-400 text-sm mb-4 lg:mb-0">
              Logitech MK220 Wireless Keyboard and Mouse
            </span>
          </div>
        </div>
        <div
          className={`${styles["single-product__divider"]} hidden lg:block`}
        ></div>
        <div className="flex justify-end flex-col lg:flex-row gap-8 px-2 lg:px-0 lg:pr-6 lg:py-6 order-3 lg:order-none mb-4 lg:mb-4">
          <div
            className={`${styles["single-product__add-to-card-container"]} rounded-md flex flex-col justify-between gap-4 p-2`}
          >
            <div className="flex justify-between lg:w-64 px-2">
              <span className="fd text-lg font-semibold">542,000</span>
              <span className="text-lg font-semibold">:قیمت</span>
            </div>
            <button
              className={`${styles["single-product__add-to-card-btn"]} text-white text-lg font-bold rounded py-2`}
            >
              افزودن به سبد خرید
            </button>
          </div>
          <div className="flex justify-between lg:w-56 px-2 lg:px-0">
            <div className="flex flex-col lg:justify-around gap-2 lg:gap-0">
              <span className="text-sm text-sm font-medium text-right">
                کالای دیجیتال
              </span>
              <span className="text-sm text-sm font-medium text-right">
                لاجیتک
              </span>
            </div>
            <div className="flex flex-col lg:justify-around gap-2 lg:gap-0">
              <span className="text-sm text-sm font-medium text-right">
                :دسته بندی
              </span>
              <span className="text-sm text-sm font-medium text-right">
                :برند
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pr-6 lg:py-6 order-last lg:order-none px-4 lg:px-0 mb-4 lg:mb-0">
          <h5 className="font-semibold text-right text-lg">
            :نقد و بررسی اجمالی محصول
          </h5>
          <p className="text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      </div>
      <div
        className={`${styles["single-product__divider"]} hidden lg:block`}
      ></div>
      <div className="w-full order-first mb-4 lg:mb-0 lg:order-none lg:w-2/5">
        <div className="p-2 lg:p-4">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-9.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-10.jpg"
                alt="pic"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-9.jpg"
                alt="pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-10.jpg"
                alt="pic"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;