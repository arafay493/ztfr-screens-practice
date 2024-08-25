import Image from "next/image";
import React from "react";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`absolute bottom-0 left-0 flex flex-col lg:flex-row gap-2 justify-between w-screen px-[25px]  md:px-[50px] py-[25px] uppercase tracking-[2px] text-[6px] font-bold text-${theme}`}
    >
      <div className="flex flex-col gap-2">
        <div>&copy; Zitransfer 2023</div>
        <div className="flex gap-5">
          <div>All right reserved</div>
          <div>zitransfer is part of zimo group</div>
        </div>
      </div>
      <div className="flex w-fit gap-2 h-[7px] sm:whitespace-nowrap -ms-3">
        <Image
          className={theme === "white" ? "invert" : "invert-0"}
          src="/images/lock.png"
          width={5}
          height={5}
          alt="lock"
        />
        <span className="w-fit">
          zitranser uses advance encryption standard (AES) 256-bit to Protect
          the confidentiality of the data you upload
        </span>
      </div>
    </footer>
  );
};

export default Footer;
