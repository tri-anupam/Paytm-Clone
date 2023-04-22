import React from "react";
import { pytmMoney } from "../constant";
const PytmMoney = () => {
  return (
    <div className="w-[70vw] flex m-auto gap-4">
      <div>
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view/307196/1626420555412.png"
          alt="img"
          className="w-40 h-[3.6rem] mb-5"
        />
        <p className="font-semibold my-3 w-64">
          Get started on wealth creation journey with Zero brokerage fee & no
          hidden charges.
        </p>
        <p className="text-[#00baf2] cursor-pointer font-semibold">
          Learn More
        </p>
      </div>

      <div className="flex ml-4 gap-6 p-5 ">
        {pytmMoney.map((data) => (
          <div key={data.name} className="bg-[#00baf2] p-3 rounded-lg overflowx-x-auto">
            <img src={data.image} alt={data.name} className="h-[9.375rem] over" />
            <p className="text-white font-semibold">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PytmMoney;
