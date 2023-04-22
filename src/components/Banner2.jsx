import React from "react";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";

const Banner2 = () => {
  return (
    <div className="w-[75vw] m-auto">
      <h1 className="font-bold text-5xl py-8">Paytm Payment Instruments</h1>

      <div className="h-[43.43rem]  flex justify-center items-center drop-shadow-xl">
        <div className="w-[40.62rem]">
          <div className="flex justify-center items-center w-fit gap-6">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png"
              alt="pytm"
              className="h-20 w-20 drop-shadow-lg my-4"
            />
            <h2 className="w-min font-bold">Paytm Wallet</h2>
          </div>

          <h1 className="font-bold text-4xl py-8">
            The Fastest Way to Pay In-store & Online.
          </h1>
          <p className="font-semibold text-[1.3rem] w-[33rem]">
            Load up your Paytm Wallet for free and make payments in a jiffy at
            over 21 million stores, websites and apps.
          </p>
          <button className="border-[1px] border-black bg-black text-white hover:text-black hover:bg-white flex items-center justify-center p-3 rounded-full mt-7">
            Download Paytm App
            <span className="px-2 text-xl">
              <IoLogoApple />
            </span>
            <span className="px-2 text-xl">
              <IoLogoGooglePlaystore />
            </span>
          </button>
        </div>

        <div className="float-right">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png"
            alt="image"
            className="w-[33rem] h-[31.43rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
