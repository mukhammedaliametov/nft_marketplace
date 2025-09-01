import React from "react";
import Logo from "../assets/logo.png";
import {
  AiOutlineDiscord,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#3B3B3B]">
    <div className="max-w-[1180px] mx-auto font-global px-[30px] xl:px-0 py-[30px] text-[#CCCCCC] font-global">
      <div className="flex flex-col lg:flex-row items-top justify-between gap-[30px]">
        <div className="flex flex-col gap-[15px]">
          <img src={Logo} alt="logo" className="w-[70%] lg:w-[100%]" />
          <p>NFT marketplace UI created <br /> with Anima for Figma.</p>
          <p className="mb-[-10px]">Join our community</p>
          <div className="flex items-center gap-[5px] text-[30px]">
            <a href="#">
              <AiOutlineDiscord />
            </a>
            <a href="#">
              <AiOutlineYoutube />
            </a>
            <a href="#">
              <AiOutlineTwitter />
            </a>
            <a href="#">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="text-white">Explore</p>
          <a href="#">Marketplace</a>
          <a href="#">Rankings</a>
          <a href="#">Connect a wallet</a>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="text-white">Join our weekly digest</p>
          <p>Get exclusive promotions & updates <br /> straight to your inbox.</p>
          <div className="flex flex-col lg:flex-row items-center my-[10px] gap-[10px] lg:gap-0">
            <input
              type="email"
              placeholder="Enter your email here"
              className="py-[8px] lg:py-[15px] px-[25px] rounded-[20px] outline-none bg-white text-black w-full"
            />
            <button className="flex items-center justify-center lg:justify-start text-white gap-[10px] py-[8px] lg:py-[15px] px-[35px] rounded-[20px] cursor-pointer bg-[#A259FF] ml-[0px] lg:ml-[-50px] w-full lg:w-auto">
              <CiMail />
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#858584] pt-[25px] mt-[20px]">
        <p>&copy;NFT Market. Use this template freely.</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
