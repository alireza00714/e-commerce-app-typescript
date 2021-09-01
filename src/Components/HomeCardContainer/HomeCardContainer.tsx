import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./HomeCardContainer.css";

SwiperCore.use([Pagination, Navigation]);

interface IHomeCardContainer {
  title: string;
}

const HomeCardContainer: React.FC<IHomeCardContainer> = ({ title }) => {
  return (
    <div className="card-container w-100 shadow-md md:shodow-lg rounded-lg">
      <div className="flex justify-end items-center w-full mb-4 p-4 md:p-6">
        <span className=" font-bold text-xl md:text-2xl">{title}</span>
        <span className="card-container__dot-title w-3 h-3 rounded-full ml-2"></span>
      </div>
      <div className="px-1">
        <Swiper
          dir="rtl"
          slidesPerView={1.6}
          spaceBetween={150}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            "640": {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            "768": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            "1024": {
              slidesPerView: 4,
              spaceBetween: 210,
            },
            "1280": {
              slidesPerView: 5,
              spaceBetween: 140,
            },
            "1536": {
              slidesPerView: 6,
              spaceBetween: 190,
            },
          }}
        >
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCardContainer;
