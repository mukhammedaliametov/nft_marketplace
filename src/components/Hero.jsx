import React from "react";
import { LuRocket } from "react-icons/lu";
import HeroImg from "../assets/hero_img.png";
import Avatar from "../assets/avatar.svg";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="min-h-[100vh] font-global">
      <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row justify-between items-top gap-[20px] pt-[150px] px-[30px] xl:px-0">
        <div className="w-full sm:w-[330px] md:w-[510px] text-white flex flex-col gap-[20px]">
          <h1 className="text-[28px]/[35px] sm:text-[38px]/[45px] lg:text-[65px]/[72px] font-semibold">
            Discover <br className="hidden md:block" /> Digital{" "}
            <br className="hidden sm:Lblock md:hidden" /> Art &{" "} 
            <br className="block sm:hidden md:block" /> Collect{" "}
            <br className="hidden sm:Lblock md:hidden" /> NFTs
          </h1>
          <p className="text-[18px] lg:text-[22px] capitalize">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="hidden lg:block">
            <Button name="Get Started" icon={LuRocket} />
          </div>
          <div>
            <button className="hidden sm:flex md:hidden items-center gap-[5px] bg-[#A259FF] text-white py-[15px] px-[40px] rounded-[20px] lg:rounded-[20px] opacity-90 hover:opacity-100 cursor-pointer font-[500]">
              <LuRocket /> Get Started
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-[40px]">
            <div>
              <h3 className="text-[28px] font-spacemono font-bold">240k+</h3>
              <p className="text-[20px]">Total Sale</p>
            </div>
            <div>
              <h3 className="text-[28px] font-spacemono font-bold">100k+</h3>
              <p className="text-[20px]">Auctions</p>
            </div>
            <div>
              <h3 className="text-[28px] font-spacemono font-bold">240k+</h3>
              <p className="text-[20px]">Artists</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={HeroImg}
            alt="hero_img"
            className="w-full md:w-[330px] lg:w-[490px]"
          />
          <div className="bg-[#3B3B3B] text-white rounded-bl-[20px] rounded-br-[20px] px-[20px] py-[15px]">
            <p className="text-[20px] font-semibold">Space Walking</p>
            <div className="flex items-center gap-[8px] py-[8px]">
              <img src={Avatar} alt="avatar" />
              <p>Animakid</p>
            </div>
          </div>
          <div className="block sm:hidden w-full text-white my-[40px]">
            <div className="">
            <button className="flex w-full justify-center lg:hidden items-center gap-[5px] bg-[#A259FF] text-white py-[15px] px-[40px] rounded-[20px] lg:rounded-[20px] opacity-90 hover:opacity-100 cursor-pointer font-[500]">
              <LuRocket /> Get Started
            </button>
          </div>
          <div className="flex items-center gap-[40px] mt-[20px]">
            <div>
              <h3 className="text-[22px] font-spacemono font-bold">240k+</h3>
              <p className="text-[18px]">Total Sale</p>
            </div>
            <div>
              <h3 className="text-[22px] font-spacemono font-bold">100k+</h3>
              <p className="text-[18px]">Auctions</p>
            </div>
            <div>
              <h3 className="text-[22px] font-spacemono font-bold">240k+</h3>
              <p className="text-[18px]">Artists</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
