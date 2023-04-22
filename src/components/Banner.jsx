import React from "react";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="h-[43.43rem] w-full flex justify-center items-center">
      <div className="w-[40.62rem]">
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png"
          alt="pytm"
          className="h-20 w-20 drop-shadow-lg my-4"
        />
        <h1 className="font-bold text-6xl py-8">
          India's Most-loved Payments App
        </h1>
        <p className="font-semibold text-[1.3rem] w-[33rem]">
          Recharge & pay bills, book flights & movie tickets, open a savings
          account, invest in stocks & mutual funds, and do a lot more.
        </p>
        <button className="border-[1px] border-black bg-black text-white hover:text-black hover:bg-white flex items-center justify-center p-3 rounded-full mt-7">
          Download Paytm App 
          <span className="px-2 text-xl"><IoLogoApple /></span> 
          <span className="px-2 text-xl"><IoLogoGooglePlaystore /></span>
        </button>
      </div>

      <div className="float-right">
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1656568118664.png"
          alt="image"
          className="w-[33rem] h-[31.43rem]"
        />
      </div>
    </div>
  );
};

export default Banner;
