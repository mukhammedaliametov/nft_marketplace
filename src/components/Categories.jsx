import React from "react";
import Category1 from "../assets/category_1.png";
import Category2 from "../assets/category_2.png";
import Category3 from "../assets/category_3.png";
import Category4 from "../assets/category_4.png";
import Category5 from "../assets/category_5.png";
import Category6 from "../assets/category_6.png";
import Category7 from "../assets/category_7.png";
import Category8 from "../assets/category_8.png";

const Categories = () => {
  const CategoriesItems = [
    { img: Category1, name: "Art" },
    { img: Category2, name: "Collectibles" },
    { img: Category3, name: "Music" },
    { img: Category4, name: "Photography" },
    { img: Category5, name: "Video" },
    { img: Category6, name: "Utility" },
    { img: Category7, name: "Sport" },
    { img: Category8, name: "Virtual Worlds" },
  ];

  return (
    <div className="max-w-[1180px] mx-auto font-global text-white px-[30px] xl:px-0 my-[70px]">
      <h2 className="text-[28px] lg:text-[38px] font-semibold mb-[25px]">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[30px]">
        {CategoriesItems.map((item, index) => {
          return (
            <div key={index} className="bg-[#3B3B3B] rounded-[20px]">
              <img src={item.img} alt={item.name} className="w-[110%]" />
              <p className="p-[20px] font-semibold text-[18px]">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
