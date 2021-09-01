import { useState } from "react";
import { ICarousel } from "../../types";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import styles from "./Carousel.module.css";

const Carousel: React.FC<ICarousel> = ({ data }) => {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => {
    current + 1 === data.length
      ? setCurrent(0)
      : setCurrent((prevState) => prevState + 1);
  };

  const prevSlide = () => {
    current === 0
      ? setCurrent(data.length - 1)
      : setCurrent((prevState) => prevState - 1);
  };

  return (
    <div className="w-full h-full relative">
      <MdKeyboardArrowLeft
        onClick={prevSlide}
        color="#9c203f"
        size="3rem"
        className="absolute left-1 top-1/2 transform -translate-y-1/2 cursor-pointer"
      />
      <MdKeyboardArrowRight
        onClick={nextSlide}
        color="#9c203f"
        size="3rem"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer"
      />
      <div className="flex w-full h-full">
        {data.map((slide, index) => (
          <div key={slide.id}>
            <img
              key={slide.id}
              className={`${styles["carousel__slide"]} ${
                current === index && styles["carousel__slide--active"]
              } rounded-lg w-full h-full`}
              src={slide.imageSrc}
              alt="imageSlide"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
