import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-screen flex justify-between items-center px-[25px] md:px-[50px] py-[25px]">
      <div className="">
        <Image
          src="/images/ZTFR_w.png"
          width={147}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div className="flex justify-center items-center gap-5">
        <div>
          <Image
            className="invert"
            src="/images/user_icon.png"
            width={20.59}
            height={25}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/images/Country_Flag.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
