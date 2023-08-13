import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./Video.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import listOfVideos from "../../dist/listOfVideos";
import Slide from "./Slide";
import { useCallback, useEffect, useState } from "react";

const Videos = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [arrowSlider, setArrowSlider] = useState(false);
  // const [sliderImage, setSliderImage] = useState(false);

  const handleShowArrow = () => {
    setArrowSlider(true);
  };

  const handleHideArrow = () => {
    setArrowSlider(false);
  };

  const handleSlideChange = (swiper) => {
    setSwiperIndex(swiper.realIndex);
  };

  // const handleSlider = useCallback(() => {
  //   setSliderImage(window.innerWidth <= 1000);
  // }, [sliderImage]);

  // useEffect(() => {
  //   window.addEventListener("resize", handleSlider);
  //   return () => window.removeEventListener("resize", handleSlider);
  // }, [handleSlider]);

  return (
    <>
      <div
        className="SwiperSliderVideoContainer cursor-pointer"
        onMouseEnter={handleShowArrow}
        onMouseLeave={handleHideArrow}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Pagination, EffectFade]}
          effect='fade'
          navigation={{
            nextEl: ".swiper-button-next-first",
            prevEl: ".swiper-button-prev-first",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          className="swiper_container_first"
          onSlideChange={handleSlideChange}
        >
          {listOfVideos.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Slide item={item} swiperIndex={swiperIndex} index={index} />
            </SwiperSlide>
          ))}
          <div
            className={`swiper-button-next-first absolute top-[50%] right-[1rem] z-10 w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full bg-whiteSmoke-rgba hover:bg-white cursor-pointer ${
              arrowSlider ? "block" : "hidden"
            }`}
          >
            <ArrowForwardIosIcon className="!text-[.8rem]" />
          </div>
          <div
            className={`swiper-button-prev-first absolute top-[50%] left-[1rem] z-10 w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full bg-whiteSmoke-rgba hover:bg-white cursor-pointer ${
              arrowSlider ? "block" : "hidden"
            }`}
          >
            <ArrowBackIosIcon className="!text-[.8rem]" />
          </div>
          <div className="swiper-pagination !text-left !left-[6rem] !bottom-[1.5rem]"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Videos;
