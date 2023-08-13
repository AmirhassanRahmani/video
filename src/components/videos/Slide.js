import React, { useCallback, useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";

const Slide = ({ item, swiperIndex, index }) => {

  const [showVideo, setShowVideo] = useState(false);
  const [sliderImage, setSliderImage] = useState(false);

  useEffect(() => {
    let intervalId;
    if (swiperIndex === index) {
      intervalId = setInterval(() => {
        setShowVideo(true);
      }, 2000);
    } else {
      setShowVideo(false);
    }

    return () => clearInterval(intervalId);
  }, [index, swiperIndex]);

  const handleSlider = useCallback(() => {
    const isSliderImage = window.innerWidth <= 1000;
    setSliderImage(isSliderImage);
    localStorage.setItem("sliderImage", JSON.stringify(isSliderImage));
  }, []);

  useEffect(() => {
    const storedSliderImage = JSON.parse(localStorage.getItem("sliderImage"));
    if (storedSliderImage !== null) {
      setSliderImage(storedSliderImage);
    }
    window.addEventListener("resize", handleSlider);
    return () => window.removeEventListener("resize", handleSlider);
  }, [handleSlider]);

  return (
    <Link to={`vidio/${item?.transform}`}>
      <div
        className={`video w-full h-[34rem] relative ${
          index === 4 || index === 5 ? "no-before" : ""
        }`}
        style={{
          // background: `url(${item.backgroundUrl}) center/cover no-repeat`,
          background: sliderImage
            ? `url(${item.bgUrl}) center/cover no-repeat`
            : `url(${item.backgroundUrl}) center/cover no-repeat`,
        }}
      >
        <div className="videoInfo z-20 text-white w-[25rem] absolute top-[8rem] left-[6rem] max-[1000px]:hidden">
          <p className="text-[2rem] font-semibold">{item.videoInfoBold}</p>
          <p className="parag text-[1rem] text-justify my-4">
            {item.videoInfosmall}
          </p>
          <div className="flex items-center justify-center mt-[2rem] w-[12rem] bg-red-600  rounded-[1.5rem] py-[0.8rem] px-[.85rem]">
            <span className="flex">
              <PlayArrowIcon className="!text-[1.3rem] mr-2" />
            </span>
            <span className="flex text-[1rem] font-medium">Cek Sekarang</span>
          </div>
        </div>
        {swiperIndex === index && showVideo && (
          <video
            className="absolute h-full right-0 top-0 max-[1000px]:hidden"
            autoPlay
            loop
            muted
            playsInline
            src={item.videoUrl}
          ></video>
        )}
      </div>
    </Link>
  );
};

export default Slide;
