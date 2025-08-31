import React from "react";
import { LuRocket } from "react-icons/lu";
import Creator1 from "../assets/creator1.svg";
import Creator2 from "../assets/creator2.svg";
import Creator3 from "../assets/creator3.svg";
import Creator4 from "../assets/creator4.svg";
import Creator5 from "../assets/creator5.svg";
import Creator6 from "../assets/creator6.svg";
import Creator7 from "../assets/creator7.svg";
import Creator8 from "../assets/creator8.svg";
import Creator9 from "../assets/creator9.svg";
import Creator10 from "../assets/creator10.svg";
import Creator11 from "../assets/creator11.svg";
import Creator12 from "../assets/creator12.svg";

const Creators = () => {
  const creatorsItems = [
    { avatar: Creator1, name: "Keepitreal", sales: "34.53 ETH" },
    { avatar: Creator2, name: "DigiLab", sales: "34.53 ETH" },
    { avatar: Creator3, name: "GravityOne", sales: "34.53 ETH" },
    { avatar: Creator4, name: "Juanie", sales: "34.53 ETH" },
    { avatar: Creator5, name: "BlueWhale", sales: "34.53 ETH" },
    { avatar: Creator6, name: "Mr Fox", sales: "34.53 ETH" },
    { avatar: Creator7, name: "Shroomie", sales: "34.53 ETH" },
    { avatar: Creator8, name: "Robotica", sales: "34.53 ETH" },
    { avatar: Creator9, name: "RustyRobot", sales: "34.53 ETH" },
    { avatar: Creator10, name: "Animakid", sales: "34.53 ETH" },
    { avatar: Creator11, name: "Dotgu", sales: "34.53 ETH" },
    { avatar: Creator12, name: "Ghiblier", sales: "34.53 ETH" },
  ];

  return (
    <div className="max-w-[1180px] mx-auto font-global text-white px-[30px] xl:px-0">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-[28px] lg:text-[38px] font-semibold">
          Top creators
        </h2>
        <p className="text-[18px] lg:text-[22px]">
          Checkout Top Rated Creators on the NFT Marketplace
        </p>
        </div>
        <button className="hidden md:flex items-center gap-[8px] border border-[#A259FF] rounded-[20px] py-[15px] px-[25px] font-semibold cursor-pointer">
          <LuRocket className="text-[#A259FF]" /> View Rankings
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[35px] my-[50px]">
        {creatorsItems.map((item, index) => {
          return (
            <div key={index} className="relative bg-[#3B3B3B] border border-[#3B3B3B] hover:border-[#A259FF] hover:bg-transparent cursor-pointer rounded-[20px] flex items-center flex-col justify-between transition-all duration-300 group">
              <p className="absolute top-0 left-0 mx-[15px] mt-[12px] bg-[#2B2B2B] group-hover:bg-[#3B3B3B] px-[12px] py-[5px] rounded-full font-monospace text-[#858584]">{index + 1}</p>
              <img src={item.avatar} alt="avatar" className="my-[20px]" />
              <p className="text-[22px] font-semibold mb-[3px]">{item.name}</p>
              <p className="text-[#858584] mb-[25px]">
                Total Sales: <span className='text-white'>{item.sales}</span>
              </p>
            </div>
          );
        })}
      </div>
      <button className="flex md:hidden items-center gap-[8px] border border-[#A259FF] rounded-[20px] py-[15px] px-[25px] font-semibold cursor-pointer w-full justify-center mb-[30px]">
          <LuRocket className="text-[#A259FF]" /> View Rankings
        </button>
    </div>
  );
};

export default Creators;
