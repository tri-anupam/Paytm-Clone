import React from "react";
import { payBills } from "../constant";

const RechargePayBar = () => {
  return (
    <div className="h-[23rem] bg-[#00baf2] p-[2rem] py-[5rem]">
      <h1 className="text-4xl font-bold text-white ml-20">Recharge & Pay Bills on Paytm.</h1>

      <div className="flex justify-around w-[75rem] ml-20 mt-10 ">
        {payBills.map((data) => (
          <div key={data.name} className="hover:bg-[#38383821] p-2 rounded-md">
            <img src={data.image} alt={data.name} className="h-[4rem] w-[4rem]" />
            <p className="text-white flex justify-center w-[7rem] items-center text-l font-bold mt-3">{data.name}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default RechargePayBar;
