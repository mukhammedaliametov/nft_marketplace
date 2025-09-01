import React from "react";
import { FaRegEye } from "react-icons/fa";
import Discover1 from "../assets/discover1.png";
import Discover2 from "../assets/discover2.png";
import Discover3 from "../assets/discover3.png";
import Avatar1 from "../assets/discover_avatar1.svg";
import Avatar2 from "../assets/discover_avatar2.svg";
import Avatar3 from "../assets/discover_avatar3.svg";

const Discover = () => {
  const discoverItems = [
    {
      img: Discover1,
      name: "Distant Galaxy",
      avatar: Avatar1,
      author: "MoonDancer",
    },
    {
      img: Discover2,
      name: "Life On Edena",
      avatar: Avatar2,
      author: "NebulaKid",
    },
    {
      img: Discover3,
      name: "AstroFiction",
      avatar: Avatar3,
      author: "Spaceone",
    },
  ];

  return (
    <div className="max-w-[1180px] mx-auto font-global text-white px-[30px] xl:px-0 my-[70px]">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-[28px] lg:text-[38px] font-semibold">
            Discover More NFTs
          </h2>
          <p className="text-[18px] lg:text-[22px]">
            Explore new trending NFTs
          </p>
        </div>
        <button className="hidden md:flex items-center gap-[8px] border border-[#A259FF] rounded-[20px] py-[15px] px-[25px] font-semibold cursor-pointer">
          <FaRegEye className="text-[#A259FF]" /> See All
        </button>
      </div>
      <div className="flex items-center justify-around overflow-x-scroll lg:overflow-hidden my-[50px] gap-[30px]">
        {discoverItems.map((item, index) => {
          return (
            <div key={index} className="flex-shrink-0">
              <img src={item.img} alt="img" />
              <div className="bg-[#3B3B3B] rounded-b-[20px] py-[20px] px-[30px]">
                <div>
                  <p className="text-[20px] font-semibold">{item.name}</p>
                  <div className="flex items-center gap-[10px] my-[10px]">
                    <img src={item.avatar} alt="avatar" />
                    <p className="font-spacemono">{item.author}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-[30px] font-spacemono">
                  <div>
                    <span className="text-[14px] text-[#858584]">Price</span> <p>1.63 ETH</p>
                  </div>
                  <div>
                    <span className="text-[14px] text-[#858584]">Highest Bid</span> <p>0.33 wETH</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
