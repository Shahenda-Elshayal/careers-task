import React from "react";

export default function LogoCloudCard({ imgSrc }) {
  return (
    <div className="flex items-center justify-center h-[118px] md:border-r md:border-l border-[#1F1F1F]">
      <img src={imgSrc} alt="logo img" className="h-[30px]" />
    </div>
  );
}
