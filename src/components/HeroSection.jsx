import React from "react";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <div className="w-full grid grid-cols-12 px-2 md:px-0 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
        <div className="">
          {/* <div> */}
          <HeroContent />
        </div>
      </div>
    </div>
  );
}
