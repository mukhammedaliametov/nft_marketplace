import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Header = () => {

    const [nav, setNav] = useState(0);
    const handleClick = () => setNav(!nav);

  return (
    <div className="bg-[#2B2B2B] font-global z-999 fixed w-full">
      <div className="max-w-[1280px] bg-[#2B2B2B] py-[20px] mx-auto px-[16px] xl:px-0 flex items-center justify-between">
        <a href="#">
          <img src={Logo} alt="logo" className="w-[200px] lg:w-auto" />
        </a>
        <nav className='hidden md:flex items-center md:gap-[20px] xl:gap-[40px] text-white font-[600]'>
          <a href="#">Marketplace</a>
          <a href="#">Rankings</a>
          <a href="#">Connect a wallet</a>
          <button onClick={handleClick} className="flex items-center gap-[5px] bg-[#A259FF] text-white py-[10px] lg:py-[15px] px-[10px] lg:px-[25px] rounded-[10px] lg:rounded-[20px] opacity-90 hover:opacity-100 cursor-pointer font-[500]">
           <FaRegUser /> Sign Up
          </button>
        </nav>
        <div className="text-white text-[24px] block md:hidden" onClick={handleClick}>
            {nav ? <IoClose /> : <CgMenuLeft />}
        </div>
        <nav className={`absolute flex md:hidden flex-col w-full -z-1 left-0 bg-[#2B2B2B] px-[20px] text-white font-[500] py-[40px] transition-all duration-500 ${nav ? 'top-[70px]' : 'top-[-250px]'}`}>
          <a href="#" onClick={handleClick} className="border-b md:border-none border-[#ffffff28] pb-[20px] md:pb-0 mb-[20px] md:mb-0">Marketplace</a>
          <a href="#" onClick={handleClick} className="border-b md:border-none border-[#ffffff28] pb-[20px] md:pb-0 mb-[20px] md:mb-0">Rankings</a>
          <a href="#" onClick={handleClick} className="mb-[30px] md:mb-0">Connect a wallet</a>
          <button onClick={handleClick} className="flex items-center gap-[5px] bg-transparent border border-[#A259FF] text-white py-[15px] px-[25px] rounded-[10px] opacity-100 cursor-pointer">
           <FaRegUser /> Sign Up
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
