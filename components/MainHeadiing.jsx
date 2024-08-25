import React from "react";

const MainHeadiing = ({ theme }) => {
  return (
    <div
      className={`absolute top-1/2 left-full -translate-x-[110%] md:left-[84%] lg:left-1/2 md:-translate-x-1/2 -translate-y-1/2 uppercase tracking-[5px] text-end flex flex-col justify-center items-center gap-3 md:gap-5 lg:gap-10 text-${theme} main-heading`}
    >
      <div className="flex flex-col items-end justify-end w-full lg:w-auto">
        <span className="text-xl md:text-2xl lg:text-4xl">Let's do</span>
        <span className="text-3xl md:text-6xl lg:text-9xl text-justify">This</span>
      </div>
      <span className="w-[140px] sm:w-[200px] md:w-auto text-[8px] sm:text-[12px] tracking-[2px] sm:tracking-[3px] md:text-center title-description">
        UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
      </span>
    </div>
  );
};

export default MainHeadiing;
