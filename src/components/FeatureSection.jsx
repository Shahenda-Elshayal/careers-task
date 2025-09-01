import React from "react";
import BgBentoImg from "../assets/images/bg-bento.png";
import FeatureImg from "../assets/images/featureimg.png";

export default function FeatureSection() {
  return (
    <div className="grid grid-cols-12 px-4 md:px-0">
      <div
        className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 flex items-center justify-center "
        style={{ backgroundImage: `url(${BgBentoImg})` }}
      >
        <img src={FeatureImg} alt="feature img" className="mt-[120px] mb-[120px]" />
      </div>
    </div>
  );
}
