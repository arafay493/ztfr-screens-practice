import Image from "next/image";
import React from "react";

const CardPin = ({ theme }) => {
  return (
    <div
      className={`relative top-1/2 -translate-y-1/2 -translate-x-10 left-0 font-semibold text-${theme}`}
    >
      <div
        className={`w-[157px] h-[489px] ${
          theme === "white" ? "bg-black/75" : "bg-black"
        } flex justify-end items-center rounded-se-3xl rounded-ee-3xl relative cardPin`}
      >
        <div
          className={`-rotate-90 w-[250px] h-[36px] absolute -left-8 right-0 top-1/2 -translate-y-1/2 ${
            theme === "white" ? "text-white" : "text-[#FFFF00]"
          } text-[12px] text-center`}
        >
          UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
        </div>
        <div className="absolute top-5 right-5 w-[7px] h-[240px]">
          {theme === "black" ? (
            <div>
              <Image
                src="/images/lockY.png"
                width={12}
                height={15}
                alt="lock"
              />
            </div>
          ) : (
            <div>
              <Image src="/images/lockw.png" width={10} height={7} alt="lock" />
            </div>
          )}
        </div>
        <p className="rotate-90 text-[10px] absolute top-0 bottom-[14.8rem] w-[132%] side-heading">
          Advance Encryption standard (AES) 256-BIT
        </p>
      </div>
    </div>
  );
};

export default CardPin;
