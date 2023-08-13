import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const NavMenuHeaderItem = ({ menu, index, headerBg }) => {
  const [state, setState] = useState(false);

  const handleStateTrue = () => {
    setState(true);
  };

  const handleStateFalse = () => {
    setState(false);
  };

  return (
    <>
      <div
        onMouseEnter={index === 6 ? handleStateTrue : null}
        onMouseLeave={index === 6 ? handleStateFalse : null}
        className="flex items-center cursor-pointer h-[56px]"
      >
        <span
          className={`${
            index === 0 &&
            'relative before:content-[""] before:w-[.5rem] before:h-[.5rem] before:bg-red-500 before:absolute before:rounded-full before:top-[.6rem] before:left-[-.9rem] max-[1137px]:hidden'
          } text-[.95rem] font-medium text-gray-500 transition ease delay-50 ${
            headerBg ? "hover:text-gray-600" : "hover:text-white"
          }  ${index === 6 && `relative `}`}
        >
          {menu.nav}
          {index === 6 && (
            <span
              className={`absolute top-[1rem] left-2 ${
                state ? "block" : "hidden"
              }`}
            >
              <ArrowDropUpIcon className="text-gray-300 !text-[3.5rem]" />
            </span>
          )}
          {index === 6 && (
            <div
              onMouseLeave={handleStateFalse}
              className={`hoverLainnya ${
                state ? "block" : "hidden"
              } absolute top-[3rem] left-[-0.5rem] bg-gray-300 text-black p-2 w-[15.5rem] rounded-[1rem]`}
            >
              {menu.hoverNav.map((item) => (
                <div className="py-4 indent-2 font-medium text-sm border-b border-1 border-solid border-gray-400 transition-all delay-50 hover:text-blue-600 hover:bg-blue-300">
                  {item}
                </div>
              ))}
            </div>
          )}
        </span>
        {index === 6 && (
          <span className="relative left-[-0.2rem] ">
            <ArrowDropDownIcon className="!text-[1.2rem] text-gray-500" />
          </span>
        )}
      </div>
    </>
  );
};

export default NavMenuHeaderItem;
