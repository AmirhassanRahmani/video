import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import navListHeader from "../../dist/navListHeader";
import vidio from "../../images/vidio.webp";
import kids from "../../images/kids.png";
import { useCallback, useEffect, useState } from "react";
import listsUnderKidsMode from "../../dist/listUnderKidsMode";
import NavMenuHeaderItemLayout from "./NavMenuHeaderItemLayout";
import NavMenuHeaderItemTwo from "../header/NavMenuHeaderItemTwo";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ring from "../../images/ring.jpg";

const HeaderLayout = () => {
  const [headerBg, setHeaderBg] = useState(false);
  const [moreIconClick, setMoreIconClick] = useState(false);
  const [justify, setJustify] = useState(false);
  const [notificationClick, setNotificationClick] = useState(false);
  const [arrow, setArrow] = useState(null);
  const [third, setThird] = useState(false);

  const handleWhiteCircle = () => {
    setJustify(!justify);
  };

  const handleNotificationClick = () => {
    setNotificationClick(!notificationClick);
  };

  const handleMoreIconClick = () => {
    setMoreIconClick(!moreIconClick);
    setArrow(null);
  };

  const handleScroll = useCallback(() => {
    setHeaderBg(window.pageYOffset > 1);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleShowArrowContent = (click) => {
    setArrow(click);
  };

  return (
    <div
      className={`header flex items-center justify-between px-[2rem] min-h-[56px] bg-white fixed w-full z-50 shadow-md max-[1030px]:hidden`}
    >
      <div className="leftSideHeader flex items-center gap-[2rem] max-[1130px]:gap-[0.9rem]">
        <div className="LogoSiteVidio h-[3rem] w-[6.3rem]">
          <img src={vidio} alt="logo" className={`w-full h-full object-fill`} />
        </div>
        <div className="navMenuHeader flex items-center space-x-3 h-[56px]n">
          {navListHeader.map((menu, index) => (
            <>
              <NavMenuHeaderItemLayout
                key={index}
                menu={menu}
                index={index}
                headerBg={headerBg}
              />
            </>
          ))}
        </div>
      </div>

      <div className="rightSideHeader flex items-center space-x-[1rem] max-[1237px]:space-x-[.5rem]">
        <div
          className={`inputHeader flex items-center bg-[#eee] pl-3 pr-2 py-1 rounded-[5px] w-[23rem] max-[1237px]:w-[18rem] max-[1130px]:w-[14rem]`}
        >
          <input
            type="text"
            placeholder="Cari di Vidio"
            className={`flex-1 border-none outline-none bg-transparent placeholder:text-black placeholder:text-sm`}
          />
          <div className="searchIconHeader">
            <SearchIcon />
          </div>
        </div>

        <div className="ringIconHeader relative">
          <NotificationsIcon
            onClick={handleNotificationClick}
            className="text-black"
          />

          <div
            className={`moreIconClickContainer absolute top-[2.8rem] left-0 max-[1138px]:left-[-3.5rem] z-50 bg-white w-[17rem] overflow-x-hidden h-auto flex justify-between rounded-[12px] p-4 ${
              moreIconClick ? "block" : "hidden"
            } shadow-md`}
          >
            <div
              className={`clickMoreHorizIcon w-full relative transition-transform duration-1000 ease-in-out ${
                arrow ? "translate-x-[-120%] hidden" : "translate-x-0" //left  hidden
              }`}
            >
              <div className="kidsModeButtonContainer flex items-center justify-between border-b border-1 border-solid border-gray-300 pb-3">
                <div className="kidsModeButton ">
                  <div className="kidModePicture flex items-center gap-2">
                    <img
                      src={kids}
                      alt="kid"
                      className="w-[2.5rem] object-fill"
                    />
                    <p className="text-[.9rem] font-medium">Mode Anak</p>
                  </div>
                </div>
                <div
                  onClick={handleWhiteCircle}
                  className={`toggleCircleButton bg-gray-300 rounded-[1rem] w-[2.5rem] h-[1.4rem] flex items-center ${
                    justify ? "justify-end" : "justify-start"
                  } p-[0.15rem]`}
                >
                  <div className="circleWhite  w-[1.2rem] h-[1.2rem] rounded-full bg-white"></div>
                </div>
              </div>

              <div className="listsUnderKidsMode mt-3">
                {listsUnderKidsMode.map((item, index) => (
                  <div
                    onClick={() => handleShowArrowContent(item.click)}
                    className={`flex items-center justify-between py-2 ${
                      index === 2 || index === 6
                        ? "border-b border-1 border-solid border-gray-300 pb-3"
                        : null
                    } hover:bg-gray-200 cursor-pointer px-2`}
                  >
                    <p className="text-[.85rem] font-medium">{item.title}</p>
                    <p>{item.icon}</p>
                  </div>
                ))}
              </div>

              <div className="footerKidsModeButton pt-3">
                <p className="text-[0.65rem] text-gray-600">
                  Hak cipta © 2023 Vidio.com
                </p>
                <p className=" text-gray-600 text-[0.65rem]">
                  PT Vidio Dot Com. All Right Reserved.
                </p>
              </div>
            </div>

            {listsUnderKidsMode.map((item, index) => (
              <>
                {item.click && (
                  <>
                    <div
                      className={`sideMoreIcon w-full transition-transform duration-300 ${
                        arrow === item.click
                          ? "translate-x-0"
                          : "translate-x-[-100%] hidden" // right hidden
                      } ${
                        third ? "translate-x-[-120%] hidden" : "translate-x-0"
                      }`} //left hidden
                    >
                      <div className="header flex items-center gap-1 border-b border-solid border-gray-200 py-2  hover:bg-gray-200 cursor-pointer">
                        <span>
                          <KeyboardArrowLeftIcon
                            className="text-gray-600"
                            onClick={() => setArrow(null)}
                          />
                        </span>
                        <span className="flex text-[.9rem]">{item.title}</span>
                      </div>
                      {item.parags?.map((item) => (
                        <div className="flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                          <p className="text-[.9rem] mt-2 px-2 py-2">
                            {item.parag}
                          </p>
                          <p
                            className="text-gray-600"
                            onClick={() => setThird(true)}
                          >
                            {item?.icon}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            ))}
            {third && (
              <div className="thirdClick w-full ">
                <div className="flex items-center gap-1 border-b border-solid border-gray-200 py-2 hover:bg-gray-200 cursor-pointer">
                  <span>
                    <KeyboardArrowLeftIcon
                      className="text-gray-600"
                      onClick={() => setThird(false)}
                    />
                  </span>
                  <span className="flex text-[.9rem]">Bahasa</span>
                </div>
                <div className="  cursor-pointer">
                  <p className="text-[.9rem] mt-2 px-2 py-2 hover:bg-gray-200">
                    Indonesia
                  </p>
                  <p className="text-[.9rem] mt-2 px-2 py-2 hover:bg-gray-200">
                    English
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className={`clickRingIcon ${
              notificationClick ? "block" : "hidden"
            } rounded-[12px] absolute top-[3rem] left-[-8.5rem] bg-white w-[20rem] h-[25rem]`}
          >
            <div className="notif text-center font-medium py-2 border-b border-1 border-solid border-red-500">
              Notifikasi
            </div>
            <div className="notifImage grid place-items-center h-full">
              <div className="text-center grid place-items-center gap-3">
                <img src={ring} alt="ring" className="w-[8rem] object-fill" />
                <div className="underRingImage">
                  <p className="text-[1.2rem] font-medium">
                    Masuk ke Akun Kamu
                  </p>
                  <p className="text-[0.8rem]">
                    Dapatkan notifikasi terbaru di sini
                  </p>
                </div>
                <div className="button bg-red-600 p-2 rounded-[5px] text-white">
                  Masuk / Daftar
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="buttonsHeader flex items-center space-x-4">
          <div className="redButton bg-[#fc0f3a] font-bold text-white text-center shadow-[0_2px_8px_0_rgba(30,30,30,0.2)] rounded-[4px] px-4 py-[.2rem] text-[.85rem]">
            Langganan
          </div>
          <div className="whiteButton border border-1 border-solid text-center text-[.75rem] px-4 py-[.2rem] font-bold rounded-[4px] bg-white">
            Masuk
          </div>
        </div>

        <div
          className="menuIconHeader cursor-pointer"
          onClick={handleMoreIconClick}
        >
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
