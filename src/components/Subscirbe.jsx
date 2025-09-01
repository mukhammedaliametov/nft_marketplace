import React from 'react';
import { CiMail } from "react-icons/ci";
import Image from '../assets/subs_img.png';

const Subscirbe = () => {
    return (
        <div className="max-w-[1180px] mx-auto font-global text-white px-[30px] xl:px-0 my-[90px]">
            <div className='flex flex-col sm:flex-row items-center justify-evenly gap-[30px] bg-[#3B3B3B] py-[20px] lg:py-[60px] px-[30px] rounded-[20px]'>
                <div>
                    <img src={Image} alt="image" className='w-[100%]' />
                </div>
                <div className='w-full lg:w-[50%]'> 
                    <h2 className='text-[24px] sm:text-[28px] lg:text-[38px] font-semibold capitalize mb-[10px]'>Join our weekly <br /> digest</h2>
                    <p className='text-[16px] lg:text-[20px] w-full lg:w-[425px] mb-[25px]'>Get exclusive promotions & updates straight to your inbox.</p>
                    <div className='flex flex-col lg:flex-row items-center my-[10px] gap-[10px] lg:gap-0'>
                        <input type="email" placeholder='Enter your email here' className='py-[8px] lg:py-[15px] px-[25px] rounded-[20px] outline-none bg-white text-black w-full lg:w-[50%]' />
                        <button className='flex items-center justify-center lg:justify-start gap-[10px] py-[8px] lg:py-[15px] px-[35px] rounded-[20px] cursor-pointer bg-[#A259FF] ml-[10px] lg:ml-[-50px] w-full lg:w-auto'><CiMail />Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscirbe;