import React from "react";
import { FaRegEye } from "react-icons/fa";
import background from "../assets/mashroom.png";
import avatar from "../assets/mashroom_avatar.svg";

const Mashrooms = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-[100vh] bg-cover bg-center flex items-end justify-center font-global px-[50px]"
    >
      <div className="text-white flex flex-col md:flex-row items-start lg:items-end lg:justify-between gap-[20px] lg:gap-[50px] my-[50px]">
        <div>
          <div className="flex items-center w-[130px] justify-center gap-[12px] rounded-[30px] bg-[#3B3B3B] px-[20px] py-[8px]">
            <img src={avatar} alt="background" />
            <p>Shroomie</p>
          </div>
          <h2 className="text-[28px] md:text-[38px] font-semibold my-[10px]">
            Magic Mashrooms
          </h2>
          <button className="flex items-center gap-[10px] bg-white text-black py-[15px] cursor-pointer px-[30px] rounded-[20px]">
            <FaRegEye className="text-[#A259FF]" /> See NFTs
          </button>
        </div>
        <div className="bg-[#3B3B3B80] py-[25px] px-[30px] rounded-[20px] font-spacemono">
          <p className="text-[14px]">Auction ends in:</p>
          <div className="flex items-top justify-between">
            <div>
              <p className="text-[32px] font-semibold pr-[16px]">59</p>
              <span className="text-[14px]">Hours</span>
            </div>
            <p className="text-[32px] pr-[15px]">:</p>
            <div>
              <p className="text-[32px] font-semibold">59</p>
              <span className="text-[14px]">Minutes</span>
            </div>
            <p className="text-[32px] pr-[15px]">:</p>
            <div>
              <p className="text-[32px] font-semibold">59</p>
              <span className="text-[14px]">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mashrooms;
