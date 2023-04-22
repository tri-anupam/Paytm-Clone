import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Helmet } from "react-helmet-async";
import { routes } from "../constant";
import SubMenu from "./SubMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full">
      <Helmet>
        <title>Paytm: Secure & Fast UPI Payments</title>
      </Helmet>
      <div className="flex justify-between items-center px-10 h-[92px] shadow-lg z-10">
        {/* Toggle Buttons */}
        {toggle ? (
          <GrClose
            className="text-black text-3xl md:hidden block cursor-pointer duration-200"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineMenu
            className="text-black text-2xl md:hidden block cursor-pointer duration-200"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <img
          src="https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png"
          alt=""
          className="h-[55.24px]"
        />

        <ul className="font-bold p-1 hidden md:block">
          {routes.map((route) => {
            if (route.subroute) {
              return <SubMenu route={route} key={route.name} />;
            }

            return (
              <li
                className="inline-block relative px-[12px] py-[8px] hover:bg-[#cccccc3f] duration-300 text-[17px] cursor-pointer font-inter"
                key={route.name}
              >
                {route.name}
              </li>
            );
          })}
        </ul>

        <button className="text-center flex justify-center items-center bg-[#00baf2] rounded-2xl p-1 hover:bg-[rgb(0,41,112)]">
          <span className="inline-block p-1 text-[17px] font-bold text-white ml-[15px]">
            Sign In
          </span>
          <span className="inline-block p-1 text-[17px] rounded-full bg-white">
            <AiOutlineUser />
          </span>
        </button>

        {/* Responsive Menu Bar */}
        <ul
          className={`duration-300 z-0 md:hidden w-full  text-black fixed bg-white top-[92px] font-bold grid grid-flow-row
        ${toggle ? "left-[0]" : "left-[-100%]"}
        `}
        >
          <li className="inline-block relative p-4 hover:bg-[#cccccc3f] duration-300 text-[17px] cursor-pointer">
            Investor Relations
          </li>
          <li className="inline-block relative p-4 hover:bg-[#cccccc3f] duration-300 text-[17px] cursor-pointer">
            Company
          </li>
          <li className="inline-block relative p-4 hover:bg-[#cccccc3f] duration-300 text-[17px] cursor-pointer">
            Career
          </li>
        </ul>
      </div>
      <p className="text-center w-full p-3 bg-[#f6f6f6] hidden md:block">
        <span className="font-semibold">No Wallet KYC Required</span> <span className="px-1 text-2xl">😊</span> to pay using UPI on
        Paytm. <span className="cursor-pointer font-semibold">Learn more.</span>
      </p>
    </div>
  );
};

export default Header;
