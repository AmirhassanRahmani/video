import React, { useCallback, useEffect, useState } from "react";
import Header from "./header/Header";
import Videos from "./videos/Videos";
import CardVideos from "./main/CardVideos";
import CardVideosTwo from "./main/second/CardVideosTwo";
import Type from "./typeSite/Type";
import CardVideosThree from "./main/third/CardVidoesThree";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Main = () => {
  const [observe, setObserve] = useState();

  const handleEpisode = useCallback(() => {
    setObserve(window.pageYOffset > 680);
  }, [observe]);

  useEffect(() => {
    window.addEventListener("scroll", handleEpisode);
    return () => {
      window.removeEventListener("scroll", handleEpisode);
    };
  }, [handleEpisode]);

  const handleScrollToTopArrow = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pb-8">
      <Header />
      <Videos />
      <CardVideos />
      <CardVideosTwo />
      <Type />
      <CardVideosThree />
      <div
        onClick={handleScrollToTopArrow}
        className={`upArrow w-[2.5rem] h-[2.5rem] bg-gray-300 rounded-[5px] fixed bottom-[5rem] right-[.5rem] ${
          observe ? "grid" : "hidden"
        } place-items-center text-white cursor-pointer max-[1000px]:hidden`}
      >
        <ArrowUpwardIcon />
      </div>
    </div>
  );
};

export default Main;
