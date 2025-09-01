import React from "react";
import PriceCard from "./PriceCard";
import Custom from "../assets/images/padge-logo/custom.png";
import Heart from "../assets/images/padge-logo/heart.png";
import Stars from "../assets/images/padge-logo/stars.png";

export default function PriceSection() {
  const listItems = [
    [
      "100 Interactions (GPT-3.5 Only)",
      "Deploy 1 App",
      "Connect 1 Collection",
      "10GB of Storage",
      "Community Support (Discord)",
    ],
    [
      "Unlimited Interactions",
      "$0.09 per Interaction",
      "Deploy 10 Apps",
      "Connect 10 Collections",
      "1TB of Storage",
      "Community & Email Support",
    ],
    [
      "Unlimited Interactions",
      "Custom Interaction Pricing",
      "Unlimited Apps",
      "Unlimited Collections",
      "Unlimited Storage",
      "Dedicated Support",
    ],
  ];
  return (
    <div className="grid grid-cols-12 px-4 md:px-0 pt-[120px] pb-[120px] text-center">
      <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
        {/* headers of pricing */}
        <div className="mb-14">
          <p className="text-2xl md:text-4xl leading-10 font-[400] text-white">
            A plan for every need.
          </p>
          <p className="md:text-xl leading-[26px] font-[400] text-[#828386] mt-4">
            Whether you are just starting or require massive scale, we have a
            solution.
          </p>
        </div>
        {/* cards of pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PriceCard
            bgColor="bg-transparent"
            PadgeSrc={Heart}
            padgeTitle="HOBBY"
            price="$0"
            PadgeBg="bg-gradient-to-r from-[#108D5133] to-[#17171733]"
            title="Great for personal use or a first step to explore the Scout platform."
            btnTitle="Sign Up"
            bgTextColor="text-white"
            bgBtn="bg-gradient-to-b from-[#1B1B1D] to-[#1B1B1B]"
            listItems={listItems[0]}
          />
          <PriceCard
            bgColor="bg-gradient-to-b from-[#1B1B1B00] via-[#C38CF533] to-[#1A1A1A33]"
            PadgeSrc={Stars}
            padgeTitle="PRO"
            price="$50"
            PadgeBg="bg-gradient-to-r from-[#C070D84D] to-[#1717174D]"
            title="Perfect for building and scaling models with limited context."
            btnTitle="Sign Up"
            bgTextColor="text-[#09090A]"
            bgBtn="bg-white"
            listItems={listItems[1]}
            vip={true}
          />
          <PriceCard 
            bgColor="bg-transparent"
            PadgeSrc={Custom}
           padgeTitle="ENTERPRISE"
           price="Custom"
           PadgeBg="bg-gradient-to-r from-[#C070D84D] to-[#1717174D]"
           title="For large scale models with large and ever-changing context."
           btnTitle="Request Access"
           bgTextColor="text-white"
           bgBtn="bg-gradient-to-b from-[#1B1B1D] to-[#1B1B1B]"
           listItems={listItems[2]} />
        </div>
      </div>
    </div>
  );
}
