import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import listType from "../../dist/listType";

const Type = () => {
  const swiperRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(false);

  const handleNextClick = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideTo(12, 1000);
      setSlideIndex(true);
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideTo(0, 1000);
      setSlideIndex(false);
    }
  };
  return (
    <div className={`max-w-[90%] mx-auto relative mt-8`}>
      <Swiper
        spaceBetween={0}
        slidesPerView={10}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 10,
          },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-four",
          prevEl: ".swiper-button-prev-four",
        }}
        className="swiper_container_four !static"
        ref={swiperRef}
      >
        {listType.map((item, index) => (
          <SwiperSlide>
            <div className="imageCircle w-[10rem] h-[10rem] rounded-full p-[1.5rem] flex flex-col items-center justify-between">
              <img
                src={item.imgUrl}
                alt={index}
                className="w-full h-full rounded-full object-fill shadow-[0_3px_6px_0_rgba(51,51,51,0.2)]"
              />
              <p className="text-center text-sm mt-2">{item.info}</p>
            </div>
          </SwiperSlide>
        ))}
        <div
          onClick={handleNextClick}
          className={`swiper-button-next-second absolute top-[38%] right-[-1.5rem] z-10 w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full bg-white cursor-pointer border border-1 border-solid border-[#eee] ${
            !slideIndex ? "block" : "hidden"
          }`}
        >
          <ArrowForwardIosIcon className="!text-[.8rem]" />
        </div>
        <div
          onClick={handlePrevClick}
          className={`swiper-button-prev-second absolute top-[38%] left-[-.1rem] z-10 w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full bg-white cursor-pointer border border-1 border-solid border-[#eee] ${
            slideIndex ? "block" : "hidden"
          }`}
        >
          <ArrowBackIosIcon className="!text-[.8rem]" />
        </div>
      </Swiper>
    </div>
  );
};

export default Type;
