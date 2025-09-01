import React from "react";
import ListIcon from "../assets/images/list.png";

export default function PriceCard({
  bgColor,
  PadgeSrc,
  padgeTitle,
  price,
  PadgeBg,
  title,
  btnTitle,
  bgBtn,
  listItems,
  bgTextColor,
  vip
}) {
  return (
    <div
      className={`card shadow-sm rounded-2xl ${bgColor} border border-[#FFFFFF0F] h-[534px]`}
    >
      <div className="card-body flex-0 p-0 pl-[25px] pr-[25px] pt-[33px] pb-[25px]">
        {vip && (
          <span className="badge border-0 absolute bg-transparent bg-gradient-to-r from-[#C070D84D] to-[#1717174D] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[16px] font-medium text-white px-4 py-3 text-[13px]">
            MOST POPULAR
          </span>
        )}

        {/* hobby padge */}
        <span
          className={`badge rounded-2xl bg-transparent border-[#FFFFFF0F] text-[#CECECE] font-medium text-[13px] pt-3.5 pb-3.5 pl-1 pr-3 flex gap-2 items-center mb-4 ${PadgeBg}`}
        >
          <img src={PadgeSrc} alt="Padge Logo" />
          {padgeTitle}
        </span>

        <p className="text-white font-[400] text-4xl mb-2 w-[40px] h-[40px] ">
          {price}
        </p>

        <p className="w-[179px] text-left font-[400] text-[16px] text-white opacity-[50%]">
          {title}
        </p>
        <div className="mt-[24px] mb-[24px]">
          <button
            className={`btn btn-block border-0 shadow-none rounded-3xl ${bgTextColor} ${bgBtn} text-[14px] font-[400]`}
          >
            {btnTitle}
          </button>
        </div>

        <ul className="text-left flex flex-col gap-3 ">
          {listItems.map((item, index) => (
            <li className="flex items-center gap-3" key={index}>
              <img src={ListIcon} alt="list icon" />
              <span className="text-[#E2E8F0] text-[14px] font-[400]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
