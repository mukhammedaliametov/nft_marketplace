import React from "react";
import Icon1 from "../assets/works_1.svg";
import Icon2 from "../assets/works_2.svg";
import Icon3 from "../assets/works_3.svg";

const Works = () => {
  const worksItems = [
    {
      img: Icon1,
      title: "Setup Your wallet",
      info: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      img: Icon2,
      title: "Create Collection",
      info: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      img: Icon3,
      title: "Start Earning",
      info: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  return (
    <div className="max-w-[1180px] mx-auto font-global text-white px-[30px] xl:px-0 my-[70px]"> 
      <div>
        <h2 className="text-[28px] lg:text-[38px] font-semibold">
          How it works
        </h2>
        <p className="text-[18px] lg:text-[22px]">
          Find out how to get started
        </p>
      </div>
      <div className="flex items-center justify-around overflow-x-scroll lg:overflow-hidden my-[50px] gap-[30px] lg:gap-0">
        {worksItems.map((item, index) => {
          return (
            <div key={index} className="bg-[#3B3B3B] rounded-[20px] px-[20px] py-[30px]">
              <img src={item.img} alt="img" className="mx-auto" />
              <div className="text-center">
                <h2 className="text-[22px] font-semibold mb-[10px]">{item.title}</h2>
              <p className="w-[270px]">{item.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
