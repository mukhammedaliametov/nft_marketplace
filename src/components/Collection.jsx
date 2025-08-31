import React from "react";
import firstCollection1 from "../assets/first_col_1.png";
import firstCollection2 from "../assets/first_col_2.png";
import firstCollection3 from "../assets/first_col_3.png";
import lastCollection1 from "../assets/last_col_1.png";
import lastCollection2 from "../assets/last_col_2.png";
import lastCollection3 from "../assets/last_col_3.png";
import thirdCollection1 from "../assets/third_col_1.png";
import thirdCollection2 from "../assets/third_col_2.png";
import thirdCollection3 from "../assets/third_col_3.png";
import Avatar1 from "../assets/first_col_avatar.svg";
import Avatar2 from "../assets/last_col_avatar.svg";
import Avatar3 from "../assets/third_col_avatar.svg";

const Collection = () => {
  const collectionItems = [
    {
      firstImg: firstCollection1,
      lastImg: firstCollection2,
      thirdImg: firstCollection3,
      name: "DSGN Animals",
      avatar: Avatar1,
      author: "MrFox",
    },
    {
      firstImg: lastCollection1,
      lastImg: lastCollection2,
      thirdImg: lastCollection3,
      name: "Magic Mushrooms",
      avatar: Avatar2,
      author: "Shroomie",
    },
    {
      firstImg: thirdCollection1,
      lastImg: thirdCollection2,
      thirdImg: thirdCollection3,
      name: "Disco Machines",
      avatar: Avatar3,
      author: "BeKind2Robots",
    },
  ];

  return (
    <div className="max-w-[1180px] mx-auto my-[60px] lg:my-[150px] font-global text-white px-[30px] xl:px-0">
      <div className="mb-[30px]">
        <h2 className="text-[28px] lg:text-[38px] font-semibold">
          Trending Collection
        </h2>
        <p className="text-[18px] lg:text-[22px]">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="hidden lg:flex items-center justify-between gap-[20px]">
        {collectionItems.map((item, index) => {
          return (
            <div key={index} className="">
              <img src={item.firstImg} alt="first_img" className="w-[380px]" />
              <div className="flex items-center gap-[15px] my-[15px]">
                <img src={item.lastImg} alt="last_img" className="w-[117px]" />
                <img
                  src={item.thirdImg}
                  alt="third_img"
                  className="w-[117px]"
                />
                <div className="flex items-center justify-center font-spacemono bg-[#A259FF] w-[117px] h-[117px] rounded-[20px] cursor-pointer">
                  <p className="text-[20px] font-bold">1025+</p>
                </div>
              </div>
              <p className="text-[22px] font-semibold">{item.name}</p>
              <div className="flex items-center gap-[8px] my-[10px]">
                <img src={item.avatar} alt="avatar" />
                <p>{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden md:flex lg:hidden items-center gap-[20px]">
        {collectionItems.slice(0, 2).map((item, index) => {
          return (
            <div key={index} className="">
              <img src={item.firstImg} alt="first_img" className="w-[380px]" />
              <div className="flex items-center gap-[15px] my-[15px]">
                <img src={item.lastImg} alt="last_img" className="w-[117px]" />
                <img
                  src={item.thirdImg}
                  alt="third_img"
                  className="w-[117px]"
                />
                <div className="flex items-center justify-center font-spacemono bg-[#A259FF] w-[117px] h-[117px] rounded-[20px] cursor-pointer">
                  <p className="text-[20px] font-bold">1025+</p>
                </div>
              </div>
              <p className="text-[22px] font-semibold">{item.name}</p>
              <div className="flex items-center gap-[8px] my-[10px]">
                <img src={item.avatar} alt="avatar" />
                <p>{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex md:hidden items-center gap-[20px]">
        {collectionItems.slice(0, 1).map((item, index) => {
          return (
            <div key={index} className="">
              <img src={item.firstImg} alt="first_img" />
              <div className="flex items-center gap-[15px] my-[15px]">
                <img src={item.lastImg} alt="last_img" />
                <img src={item.thirdImg} alt="third_img" />
                <div className="flex items-center justify-center font-spacemono bg-[#A259FF] w-[100px] h-[100px] rounded-[20px] cursor-pointer">
                  <p className="text-[20px] font-bold">1025+</p>
                </div>
              </div>
              <p className="text-[22px] font-semibold">{item.name}</p>
              <div className="flex items-center gap-[8px] my-[10px]">
                <img src={item.avatar} alt="avatar" />
                <p>{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
