import React, { useCallback, useEffect, useState } from "react";
import HeaderLayout from "../layout/HeaderLayout";
import { useParams, useNavigate } from "react-router-dom";
import listCardVideosTwo from "../../dist/listCardVideosTwo";
import download from "../../images/download.svg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import listAsideEpisode from "../../dist/listAsideEpisode";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReplyIcon from "@mui/icons-material/Reply";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import "./Page.css";

const PageTwo = () => {
  const [goUp, setGoUp] = useState(false);

  const [showIcon, setShowIcon] = useState(null);

  const [selected, setSelected] = useState(null);

  const [leftBorder, setLeftBorder] = useState(0);

  const [observe, setObserve] = useState();

  const [observeTwo, setObserveTwo] = useState();

  const handleEpisode = useCallback(() => {
    setObserve(window.pageYOffset > 680);
  }, [observe]);

  useEffect(() => {
    window.addEventListener("scroll", handleEpisode);
    return () => {
      window.removeEventListener("scroll", handleEpisode);
    };
  }, [handleEpisode]);

  const handleEpisodeTwo = useCallback(() => {
    setObserveTwo(window.pageYOffset > 630);
  }, [observeTwo]);

  useEffect(() => {
    window.addEventListener("scroll", handleEpisodeTwo);
    return () => {
      window.removeEventListener("scroll", handleEpisodeTwo);
    };
  }, [handleEpisodeTwo]);

  const navigate = useNavigate();
  const params = useParams();

  const handleGoUpFilmsInfo = useCallback(() => {
    setGoUp(window.pageYOffset > 170);
  }, [goUp]);

  useEffect(() => {
    window.addEventListener("scroll", handleGoUpFilmsInfo);
    return () => {
      window.removeEventListener("scroll", handleGoUpFilmsInfo);
    };
  }, [handleGoUpFilmsInfo]);

  const [cardTwo, setCardTwo] = useState(
    listCardVideosTwo.find((list) => list.url === params.vidioId)
  );

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleScrollToTopArrow = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRedColor = (index, id, event) => {
    event.preventDefault();
    setLeftBorder(index);
    const targetSection = document.getElementById(id);
    const offsetTop =
      targetSection.getBoundingClientRect().top + window.pageYOffset;
    const offset = offsetTop - 300; // Adjust the offset based on your needs

    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const handleRedColorTwo = (index, id, event) => {
    event.preventDefault();
    setLeftBorder(index);
    setSelected(id);
  };

  const handlePlayIconShow = (index) => {
    if (index === showIcon) {
      return setShowIcon(null);
    }
    setShowIcon(index);
  };

  const handlePlayIconHide = () => {
    setShowIcon(null);
  };

  return (
    <div onLoad={handleScrollToTop}>
      <HeaderLayout />
      <div className="relative top-[3rem] max-[1030px]:top-0">
        {cardTwo &&
          cardTwo.data.map((item, index) => (
            <div>
              <div
                className={`blurBackgroundImage bg-cover bg-center h-[10rem]  min-w-full  overflow-hidden max-[1030px]:hidden`}
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  filter: "blur(6px)",
                  opacity: 0.8,
                }}
              ></div>

              <div
                className={`scrollNameFilmAndButtons bg-no-repeat bg-cover bg-center fixed top-[3.3rem] w-full ${
                  goUp ? "grid" : "hidden"
                } h-[7rem] grid place-items-center bg-gray-500 z-20 max-[1030px]:hidden`}
              >
                <img
                  src={item.res}
                  alt=""
                  className={`w-full h-full absolute top-0 left-0 object-cover filter blur-[36px] opacity-90 z-[-1] ${
                    goUp ? "block" : "hidden"
                  }`}
                />
                <div className="flex items-center justify-between w-[80%] mx-auto">
                  <div className="filmName flex text-white font-black text-[1.5rem] ">
                    {item.filmName}
                  </div>
                  <div className="buttonsContainer flex items-center justify-center gap-8 ">
                    <div className="redButton bg-[#fc0f3a] flex items-center justify-center p-3 rounded-full w-[15rem] shadow-md">
                      <span>
                        <PlayArrowIcon className="!text-[1.4rem] text-white !flex mr-1" />
                      </span>
                      <span className="text-white font-semibold text-[1.1rem]">
                        Mulai Nonton
                      </span>
                    </div>
                    <div className="downloadButton bg-white border border-b border-style border-[#e3e3e3] rounded-full p-3 px-6 flex items-center justify-center">
                      <span>
                        <FileUploadOutlinedIcon className="!flex mr-1" />
                      </span>
                      <span className="font-semibold">Bagikan</span>
                    </div>
                    <div className="addButton bg-white border border-b border-style border-[#e3e3e3] rounded-full p-3 px-6 flex items-center justify-center">
                      <span>
                        <AddSharpIcon className="!flex mr-1" />
                      </span>
                      <span className="font-semibold">Daftarku</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scrollFilmNameAndButtons hidden max-[1030px]:block">
                <div className="imgUrl w-full h-[32rem] relative">
                  <img
                    src={item?.res}
                    alt={index}
                    className="w-full h-full object-fill"
                  />
                  <div className="arrowBack absolute top-4 left-4 bg-white-play w-[2.8rem] h-[2.8rem] rounded-full flex items-center justify-center">
                    <ArrowBackIcon
                      className="text-white !text-[2rem]"
                      onClick={() => navigate("/")}
                    />
                  </div>

                  <div className="trailer flex items-center justify-center absolute bottom-4 left-4 bg-white-play w-[6.3rem] h-[2.3rem] rounded-[1rem]">
                    <span>
                      <PlayArrowIcon className="text-white !text-[1.4rem]" />
                    </span>
                    <span className="text-white font-semibold text-[1.1rem] ml-1">
                      Trailer
                    </span>
                  </div>
                </div>

                <div className="filmInfos pl-[2rem] pt-[1rem]">
                  <div className="filmName font-bold text-[1.5rem]">
                    {item.filmName}
                  </div>

                  <div className="filmSummery flex items-center gap-[.4rem] py-2">
                    <img src={download} alt="king" />
                    <p className="text-[1.1rem] border-l border-solid border-gray-700 pl-2">
                      {item.age}
                    </p>
                    <p className="text-[1.1rem] border-l border-solid border-gray-700 pl-2">
                      {item.typeFilm}
                    </p>
                  </div>

                  <div className="redBigButton bg-[#fc0f3a] py-4 mt-3 rounded-[0.3rem] flex items-center justify-center w-[90%]">
                    <span>
                      <PlayArrowIcon className="text-white !text-[2rem]" />
                    </span>
                    <span className="text-white font-semibold text-[1.3rem] flex ml-3">
                      Lanjutkan Menonton
                    </span>
                  </div>

                  <div className="filmAbout mt-3 text-justify w-[90%] text-[1.2rem]">
                    {item.filmInfo}
                  </div>

                  <div className="blueText text-[#004ad9] font-semibold pt-2 text-[1.2rem]">
                    Selengkapnya
                  </div>
                  <div className="twoIcons flex items-center gap-[2rem] mt-4 ml-[2rem] mb-3 max-[400px]:ml-[0.5rem]">
                    <div className="icon">
                      <ReplyIcon className="!text-[3.2rem] max-[500px]:!text-[2.8rem] transform scale-x-[-1]" />
                      <p className="text-[1.2rem] max-[400px]:!text-[1rem]">
                        Bagikan
                      </p>
                    </div>
                    <div className="icon">
                      <BookmarkBorderOutlinedIcon className="!text-[3.2rem] max-[500px]:!text-[2.8rem]" />
                      <p className="text-[1.2rem] max-[400px]:!text-[1rem]">
                        Daftarku
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`justFilmNameObserve bg-white shadow-md w-full h-[8rem] z-20 min-[1030px]:hidden ${
                  observeTwo ? "fixed top-[0rem]" : "hidden"
                }`}
              >
                <div className="flex items-center px-3 py-4">
                  <span>
                    <ArrowBackIcon
                      className="!text-[2.5rem] mr-auto"
                      onClick={() => navigate("/")}
                    />
                  </span>
                  <span className="text-[2rem] font-bold mx-auto">
                    {item.filmName}
                  </span>
                </div>

                <div className="putar bg-[#fc0f3a] py-4 px-[2rem] w-[10rem] rounded-[10px] mx-auto relative top-[.7rem]">
                  <div className="flex items-center justify-center">
                    <span>
                      <PlayArrowIcon className="text-white !text-[2rem]" />
                    </span>
                    <span className="text-white font-bold text-[1.8rem] ml-2">
                      Putar
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`filmImageAndInfo flex w-[80%] mx-[auto] mt-[3rem] relative  transition-all duration-[1s] ease-in-out  ${
                  goUp ? "top-[-50rem]" : "top-[0]"
                } pb-3 max-[1030px]:hidden`}
              >
                <div className="filmImageAndInfoLeft w-[20%] relative top-[-6rem] mr-[2rem]">
                  <img
                    src={item.imageUrl}
                    alt={index}
                    className="rounded-[18px] w-full h-full object-fill cursor-pointer"
                  />
                </div>

                <div className="filmImageAndInfoRight w-[80%]">
                  <div className="filmNameAndInfo">
                    <div className="name text-[1.4rem] font-bold mb-2">
                      {item.filmName}
                    </div>
                    <div className="ageAndType flex gap-4">
                      <div className="age bg-gray-300 w-[2.6rem] h-[1.5rem] rounded-[.7rem] flex items-center justify-center text-[0.8rem]">
                        {item.age}
                      </div>
                      <div className="filmType text-[0.9rem]">
                        {item.typeFilm}
                      </div>
                    </div>
                  </div>
                  <div className="buttonsContainer flex items-center gap-4 mt-8 cursor-pointer">
                    <div className="redButton bg-[#fc0f3a] flex items-center justify-center p-2 rounded-full w-[10rem] shadow-md">
                      <span>
                        <PlayArrowIcon className="!text-[1.2rem] text-white !flex mr-1" />
                      </span>
                      <span className="text-white font-semibold">
                        Mulai Nonton
                      </span>
                    </div>
                    <div className="downloadButton border border-b border-style border-[#e3e3e3] rounded-full p-2 flex items-center justify-center">
                      <span>
                        <FileUploadOutlinedIcon className="!flex mr-1" />
                      </span>
                      <span className="font-semibold">Bagikan</span>
                    </div>
                    <div className="addButton border border-b border-style border-[#e3e3e3] rounded-full p-2 flex items-center justify-center">
                      <span>
                        <AddSharpIcon className="!flex mr-1" />
                      </span>
                      <span className="font-semibold">Daftarku</span>
                    </div>
                  </div>
                  <div className="filmExpression mt-3">
                    <div className="w-[45rem] grid gap-[0.7rem] mt-[2rem]">
                      <div className="express text-[.85rem]">
                        {item.filmInfo}
                      </div>
                      <div className="sutradara">
                        <span className="font-bold text-[.9rem]">
                          Sutradara:{" "}
                        </span>
                        <span className="text-[.85rem]">{item.sutradara}</span>
                      </div>
                      <div className="pemain">
                        <span className="font-bold text-[.9rem]">Pemain: </span>
                        <span className="text-[.85rem]">{item.pemain}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="flex justify-between w-[80%] mx-auto max-[1030px]:hidden">
          <div
            className={`w-[20%]  ${
              observe ? "fixed top-[13rem]" : "relative top-[4rem]"
            }`}
          >
            {listAsideEpisode.map((item, index) => (
              <>
                {cardTwo.hasOwnProperty(item.id) && (
                  <a
                    href={item.href}
                    className={`block text-[1.2rem] cursor-pointer py-[9px] px-[21px] relative border-l-4 border-style border-gray-300 ${
                      leftBorder === index
                        ? "border-l-4 border-style border-red-500 font-black"
                        : ""
                    } ${
                      leftBorder === index ? "text-[#1e1e1e]" : "text-[#999]"
                    } hover:text-[#1e1e1e]`}
                    onClick={(event) => handleRedColor(index, item.id, event)}
                  >
                    {item.name}
                  </a>
                )}
              </>
            ))}
          </div>

          <div className="w-[80%] ml-auto border-t border-style border-gray-200">
            <div className="episodeContainer">
              <div className="episodeAndSeason flex items-center justify-between mt-8">
                {cardTwo.episode && (
                  <div className="episode font-bold text-[1.3rem]" id="episode">
                    Episode
                  </div>
                )}

                {cardTwo.episode && (
                  <div
                    className="season font-semibold text-[.95rem] border border-style border-gray-300 rounded-full px-3
              py-2 flex items-center justify-center"
                  >
                    <span>
                      <select className="outline-none">
                        <option>Season 1</option>
                        <option>Season 2</option>
                      </select>
                    </span>
                  </div>
                )}
              </div>
              <div className="episodeParts mt-[2rem]">
                {listCardVideosTwo
                  .filter((item) => item.episode)
                  .filter((item) => item.url === params.vidioId)
                  .map((item, index) => (
                    <>
                      {item.episode.map((item, index) => (
                        <>
                          <div
                            className="episodeCard flex gap-4 mb-8 cursor-pointer"
                            onMouseEnter={() => handlePlayIconShow(index)}
                            onMouseLeave={() => handlePlayIconHide()}
                          >
                            <div className="episodeCardLeft w-[20rem] h-[11rem]">
                              <img
                                src={item.imgEpi}
                                alt={index}
                                className="w-[20rem] h-[11rem] object-fill rounded-[10px]"
                              />
                              <div
                                className={`playIconHover w-[3rem] h-[3rem] bg-white-play rounded-full grid place-items-center relative bottom-[63%] mx-auto ${
                                  showIcon === index ? "grid" : "hidden"
                                }`}
                              >
                                <PlayArrowIcon className="text-white" />
                              </div>
                            </div>
                            <div className="episodeCardRight">
                              <div className="part font-black text-[1.2rem]">
                                {item.part}
                              </div>
                              <div className="freeAndMinute flex items-center gap-3 my-2">
                                <div className="minute text-gray-400">
                                  {item.time}
                                </div>
                                <div className="free bg-gray-400 w-[3rem] h-[1.5rem] text-[0.9rem] font-bold text-white grid place-items-center rounded-[0.6rem]">
                                  {item.free}
                                </div>
                              </div>
                              <div className="partInfo">{item.infoPart}</div>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  ))}
              </div>
            </div>

            <div className="trailerContainer">
              <div className="trailerAndSeason flex items-center justify-between mt-8">
                {cardTwo.trailer && (
                  <div className="trailer font-bold text-[1.3rem]" id="trailer">
                    Trailer
                  </div>
                )}
              </div>
              <div className="trailerParts mt-[2rem]">
                {listCardVideosTwo
                  .filter((item) => item.trailer)
                  .filter((item) => item.url === params.vidioId)
                  .map((item, index) => (
                    <>
                      {item.trailer.map((item, index) => (
                        <div
                          className="trailerCard flex gap-4 mb-8 cursor-pointer"
                          onMouseEnter={() => handlePlayIconShow(index)}
                          onMouseLeave={() => handlePlayIconHide()}
                        >
                          <div className="trailerCardLeft w-[20rem] h-[11rem]">
                            <img
                              src={item.imgEpi}
                              alt={index}
                              className="w-[20rem] h-[11rem] object-fill rounded-[10px]"
                            />
                            <div
                              className={`playIconHover w-[3rem] h-[3rem] bg-white-play rounded-full grid place-items-center relative bottom-[63%] mx-auto ${
                                showIcon === index ? "grid" : "hidden"
                              }`}
                            >
                              <PlayArrowIcon className="text-white" />
                            </div>
                          </div>
                          <div className="trailerCardRight">
                            <div className="part font-black text-[1.2rem]">
                              {item.part}
                            </div>
                            <div className="freeAndMinute flex items-center gap-3 my-2">
                              <div className="minute text-gray-400">
                                {item.time}
                              </div>
                              <div className="free bg-gray-400 w-[3rem] h-[1.5rem] text-[0.9rem] font-bold text-white grid place-items-center rounded-[0.6rem]">
                                {item.free}
                              </div>
                            </div>
                            <div className="partInfo">{item.infoPart}</div>
                          </div>
                        </div>
                      ))}
                    </>
                  ))}
              </div>
            </div>

            <div className="kontenContainer">
              <div className="kontenAndSeason flex items-center justify-between mt-8">
                {cardTwo.konten && (
                  <div className="konten font-bold text-[1.3rem]" id="konten">
                    Serupa dengan {cardTwo.data[0].filmName}
                  </div>
                )}
              </div>
              <div className="kontenParts mt-[2rem]">
                {listCardVideosTwo
                  .filter((item) => item.konten)
                  .filter((item) => item.url === params.vidioId)
                  .map((item, index) => (
                    <>
                      <div className="kontenCardsContainer grid grid-cols-5 ">
                        {item.konten.map((item, index) => (
                          <div className="kontenCard mb-4 mx-4 bg-red-200 rounded-[10px] shadow-lg">
                            <img
                              src={item.imgKon}
                              alt={index}
                              className="w-full h-full object-fill rounded-[10px]"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="listAsideEpisode hidden items-center justify-between mt-2 px-8 border-b-2 border-style border-gray-300  max-[1030px]:flex max-[460px]:px-1">
          {listAsideEpisode.map((item, index) => (
            <>
              {cardTwo.hasOwnProperty(item.id) && (
                <a
                  href={item.href}
                  onClick={(event) => handleRedColorTwo(index, item.id, event)}
                  className={`text-[1.9rem] font-semibold pb-2 ${
                    leftBorder === index
                      ? "border-b-4 border-style border-red-500 font-black"
                      : ""
                  } max-[1015px]:text-[1.3rem] max-[1015px]:mt-[1rem] max-[460px]:text-[1rem]  `}
                >
                  {item.name}
                </a>
              )}
            </>
          ))}
        </div>

        <div
          className={`episodeParts mt-[2rem] pl-4 min-[1030px]:hidden ${
            selected === "episode" ? "block" : "hidden"
          }`}
        >
          {listCardVideosTwo
            .filter((item) => item.episode)
            .filter((item) => item.url === params.vidioId)
            .map((item, index) => (
              <>
                {item.episode.map((item, index) => (
                  <>
                    <div
                      className="episodeCard flex gap-4 mb-8 cursor-pointer"
                      onMouseEnter={() => handlePlayIconShow(index)}
                      onMouseLeave={() => handlePlayIconHide()}
                    >
                      <div className="episodeCardLeft w-[45%] h-[11rem]">
                        <img
                          src={item.imgEpi}
                          alt={index}
                          className="w-full h-full  object-fill rounded-[10px]"
                        />
                        <div
                          className={`playIconHover w-[3rem] h-[3rem] bg-white-play rounded-full grid place-items-center relative bottom-[63%] mx-auto ${
                            showIcon === index ? "grid" : "hidden"
                          }`}
                        >
                          <PlayArrowIcon className="text-white" />
                        </div>
                      </div>

                      <div className="episodeCardRight w-[55%]">
                        <div className="part font-black text-[1.2rem]">
                          {item.part}
                        </div>
                        <div className="freeAndMinute flex items-center gap-3 my-2">
                          <div className="minute text-gray-400">
                            {item.time}
                          </div>
                          <div className="free bg-gray-400 w-[3rem] h-[1.5rem] text-[0.9rem] font-bold text-white grid place-items-center rounded-[0.6rem]">
                            {item.free}
                          </div>
                        </div>
                        <div className="partInfo w-[50%] text-justify">
                          {item.infoPart}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            ))}
        </div>

        <div
          className={`trailerParts mt-[2rem] pl-4 min-[1030px]:hidden ${
            selected === "trailer" ? "block" : "hidden"
          }`}
        >
          {listCardVideosTwo
            .filter((item) => item.trailer)
            .filter((item) => item.url === params.vidioId)
            .map((item, index) => (
              <>
                {item.trailer.map((item, index) => (
                  <div
                    className="trailerCard flex gap-4 mb-8 cursor-pointer"
                    onMouseEnter={() => handlePlayIconShow(index)}
                    onMouseLeave={() => handlePlayIconHide()}
                  >
                    <div className="trailerCardLeft w-[45%] h-[11rem]">
                      <img
                        src={item.imgEpi}
                        alt={index}
                        className="w-full h-full object-fill rounded-[10px]"
                      />
                      <div
                        className={`playIconHover w-[3rem] h-[3rem] bg-white-play rounded-full grid place-items-center relative bottom-[63%] mx-auto ${
                          showIcon === index ? "grid" : "hidden"
                        }`}
                      >
                        <PlayArrowIcon className="text-white" />
                      </div>
                    </div>
                    <div className="trailerCardRight w-[55%]">
                      <div className="part font-black text-[1.2rem]">
                        {item.part}
                      </div>
                      <div className="freeAndMinute flex items-center gap-3 my-2">
                        <div className="minute text-gray-400">{item.time}</div>
                        <div className="free bg-gray-400 w-[3rem] h-[1.5rem] text-[0.9rem] font-bold text-white grid place-items-center rounded-[0.6rem]">
                          {item.free}
                        </div>
                      </div>
                      <div className="partInfo w-[50%] text-justify ">
                        {item.infoPart}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ))}
        </div>

        <div
          className={`kontenParts mt-[2rem] pl-4 min-[1030px]:hidden ${
            selected === "konten" ? "block" : "hidden"
          }`}
        >
          {listCardVideosTwo
            .filter((item) => item.konten)
            .filter((item) => item.url === params.vidioId)
            .map((item, index) => (
              <>
                <div className="kontenCardsContainer grid grid-cols-5 max-[800px]:grid-cols-4 max-[600px]:grid-cols-3 max-[400px]:grid-cols-2">
                  {item.konten.map((item, index) => (
                    <div className="kontenCard mb-4 mx-4 bg-red-200 rounded-[10px] shadow-lg">
                      <img
                        src={item.imgKon}
                        alt={index}
                        className="w-full h-full object-fill rounded-[10px]"
                      />
                    </div>
                  ))}
                </div>
              </>
            ))}
        </div>
      </div>

      <div
        onClick={handleScrollToTopArrow}
        className={`upArrow w-[3rem] h-[3rem] bg-gray-300 rounded-[5px] fixed bottom-[5rem] right-[1rem] ${
          observe ? "grid" : "hidden"
        } place-items-center text-white cursor-pointer`}
      >
        <ArrowUpwardIcon />
      </div>
    </div>
  );
};

export default PageTwo;
