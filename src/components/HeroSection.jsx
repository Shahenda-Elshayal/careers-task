import React from "react";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <div className="w-full grid grid-cols-12 px-2 md:px-0 bg-transparent">
      {" "}
      <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
        <div className="">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}
