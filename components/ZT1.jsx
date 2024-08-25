import React from "react";
import Header from "./Header";
import HeaderWhite from "./HeaderWhite";
import Footer from "./Footer";
import CardPin from "./CardPin";
import MainHeadiing from "./MainHeadiing";
const ZT1 = ({ imageURL }) => {
  return (
    <>
      {!imageURL ? (
        <div className="relative bg-[#FFFF00]">
          <Header />
          <div className="h-screen">
            <CardPin theme= "black"/>
            <MainHeadiing theme= "black"/>
          </div>
          <Footer theme= "black"/>
        </div>
      ) : (
        <div className="relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/Screen_Woman_ZTFR.jpg')"}}>
          <HeaderWhite/>
          <div className="h-screen">
            <CardPin theme = "white"/>
            <MainHeadiing theme = "white"/>
          </div>
          <Footer theme = "white"/>
        </div>
      )}
    </>
    // <div
    //   className="relative bg-cover bg-[#FFFF00] bg-center bg-no-repeat"
    //   style={{ backgroundImage: "url('/images/Screen_Woman_ZTFR.jpg')" }}
    // >
    //   <HeaderWhite />
    //   <div className="h-screen">
    //     <CardPin theme="white" />
    //     <MainHeadiing theme="white" />
    //   </div>
    //   <Footer theme="white" />
    // </div>
  );
};

export default ZT1;
