import React from "react";
import Header from "./Header";
import HeaderWhite from "./HeaderWhite";
import Footer from "./Footer";
import MainHeadiing from "./MainHeadiing";
import CardPin2 from "./CardPin2";
const ZT2 = ({ imageURL }) => {
  return (
    <>
      {!imageURL ? (
        <div className="relative bg-[#FFFF00]">
          <Header />
          <div className="h-screen">
            <CardPin2 />
            <MainHeadiing />
          </div>
          <Footer />
        </div>
      ) : (
        <div className="relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/Screen_Woman_ZTFR.jpg')"}}>
          <HeaderWhite/> 
          <div className="h-screen">
            <CardPin2 theme = "white"/>
            <MainHeadiing theme = "white"/>
          </div>
          <Footer theme = "white"/>
        </div>
      )}
    </>
  );
};

export default ZT2;
