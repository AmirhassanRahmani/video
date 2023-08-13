import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import listCardVideos from "../../dist/listCardVideos";
import download from "../../images/download.svg";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const CardVideos = () => {
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
      <div className="text-[1.2rem] font-bold mb-3">Vidio Originals</div>
      <Swiper
        spaceBetween={10}
        slidesPerView={7}
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
            slidesPerView: 7,
          },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-second",
          prevEl: ".swiper-button-prev-second",
        }}
        className="swiper_container_second !static"
        // onSlideChange={handleSlideChange}
        ref={swiperRef}
      >
        {listCardVideos.map((item, index) => (
          <SwiperSlide>
            <Link to={`vidio/${item.url}`}>
              <div className="cardImage relative cursor-pointer">
                <img
                  src={item.cardImage}
                  alt="card"
                  className="rounded-[10px]"
                />
                <img
                  src={download}
                  alt=""
                  className="absolute bottom-2 left-2"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        <div
          onClick={handleNextClick}
          className={`swiper-button-next-second absolute top-[48%] right-[-1.5rem] z-10 w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full bg-white cursor-pointer border border-1 border-solid border-[#eee]`}
        >
          <ArrowForwardIosIcon className="!text-[.8rem]" />
        </div>
        <div
          onClick={handlePrevClick}
          className={`swiper-button-prev-second absolute top-[48%] left-[-1.5rem] z-10 w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full bg-white cursor-pointer border border-1 border-solid border-[#eee] ${
            slideIndex ? "block" : "hidden"
          }`}
        >
          <ArrowBackIosIcon className="!text-[.8rem]" />
        </div>
      </Swiper>
    </div>
  );
};

export default CardVideos;
