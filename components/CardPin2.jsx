import Image from "next/image";
import React from "react";

const CardPin2 = ({ theme }) => {
  return (
    <div
      className={`relative top-1/2 -translate-y-1/2 md:left-5 font-light ${
        theme ? `text-${theme}` : "text-[#FFFF00]"
      }`}
    >
      <div
        className={`w-[180px] md:w-[250px] h-[350px] ${
          theme ? "bg-black/75" : "bg-black"
        } flex gap-2 rounded-xl md:rounded-3xl rounded-ee-3xl relative border-0`}
      >
        <div className="absolute top-5 right-5">
          {!theme ? (
            <Image src="/images/lockY.png" width={10} height={12} alt="lock" />
          ) : (
            <Image src="/images/lockw.png" width={10} height={12} alt="lock" />
          )}
        </div>
        <div className="flex justify-start items-start gap-2 w-full">
          <div
            className={`${
              !theme ? "bg-[#FFFF00]" : ""
            } -translate-y-[1px] w-[50px] md:w-auto`}
          >
            <label for="fileInput" className="cursor-pointer">
              <Image
                src="/images/Add.png"
                width={70}
                height={50}
                alt="add"
                className={`${theme ? "invert" : ""} p-1  md:p-4 z-10`}
              />
            </label>
          </div>
          <div className="flex flex-col justify-start items-start mt-3">
            <span className="text-[12px] md:tracking-[2px]">Upload Files</span>
            <span className="font-normal text-xl md:text-3xl">OR</span>
            <span className="text-end text-sm md:text-normal self-end md:tracking-[2px] md:w-[158px]">
              Upload Folders
            </span>
          </div>
          <div className="text-center absolute top-[25%] md:top-1/3 -right-0 md:-right-[69px] -translate-1/2 translate-x-10 md:translate-x-0 flex flex-col gap-1 md:gap-3 uppercase text-bold">
            <div className="flex gap-5">
              <span className="font-normal text-[25px] md:text-[40px] relative">
                up{" "}
              </span>
              <span className="font-normal text-[25px] md:text-[40px] relative">
                to{" "}
              </span>
              <span
                className={
                  !theme
                    ? "text-black relative text-[25px] md:text-[40px]"
                    : "relative text-[25px] md:text-[40px] flex gap-5"
                }
              >
                <span
                  className={`rotate-90 absolute -left-[120px] w-[239px] md:w-[228px] text-[7px] md:tracking-[1px] font-bold side-heading`}
                >
                  Advance Encryption standard (AES) 256-BIT
                </span>{" "}
                <span>
                  1tb
                </span>
              </span>
            </div>
            <div>
              <span className="font-normal text-xl md:text-[20px] block">
                free
              </span>
            </div>
          </div>
          {!theme ? (
            <div className="absolute left-0 bottom-10 right-0 mt-auto flex flex-col gap-5 px-5 uppercase text-xs">
              <input
                type="text"
                className="text-[#FFFF00] placeholder:text-[#FFFF00] bg-transparent ring-0 border-b-2 border-[#FFFF00] outline-none pb-2 "
                placeholder="Title"
              />
              <textarea
                rows={3}
                className="text-[#FFFF00] placeholder:text-[#FFFF00] bg-transparent ring-0 border-b-2 border-[#FFFF00] outline-none "
                placeholder="Note"
                style={{ resize: "none" }}
              ></textarea>
            </div>
          ) : (
            <div className="absolute left-0 bottom-10 right-0 mt-auto flex flex-col gap-5 px-5 uppercase text-xs">
              <input
                type="text"
                className=" placeholder:text-white bg-transparent ring-0 border-b-2 border-white outline-none pb-2 "
                placeholder="Title"
              />
              <textarea
                rows={3}
                className=" placeholder:text-white bg-transparent ring-0 border-b-2 border-white outline-none "
                placeholder="Note"
                style={{ resize: "none" }}
              ></textarea>
            </div>
          )}
        </div>
        <button className="absolute bottom-3 right-3">
          {!theme ? (
            <Image src="/images/Menu.png" width={5} height={5} alt="menu" />
          ) : (
            <Image
              src="/images/Menuw.png"
              className="invert"
              width={5}
              height={5}
              alt="menu"
            />
          )}
        </button>
        <input type="file" name="" id="fileInput" className="hidden" />
      </div>
    </div>
  );
};

export default CardPin2;
