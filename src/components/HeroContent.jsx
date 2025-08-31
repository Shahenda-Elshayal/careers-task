import React from "react";

export default function HeroContent() {
  return (
    <div className="text-center pt-[92px]">
      <h2 className="font-medium text-[30px] md:text-[64px] bg-gradient-to-r md:leading-[62.72px] from-[#FFFFFF] to-[#BABABA] text-transparent bg-clip-text">
        AI for teams building
      </h2>
      <h2 className="font-medium text-[30px] md:text-[64px] bg-gradient-to-r from-[#FFFFFF] to-[#BABABA] text-transparent bg-clip-text">
        what's next.
      </h2>
      <p className="md:w-[502px] ml-auto mr-auto font-[400] md:text-xl leading-[26px] text-white opacity-[50%] mt-4">
        Scout gives you the tools to build custom agents and workflows in record
        time.
      </p>
      <button className="btn mt-10 rounded-[26px] bg-[#F3F2FF] font-medium text-[14px] text-[#09090A] shadow-none border-0 mb-[96px] px-5">
        Get Started{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="#09090A"
          className="size-2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
