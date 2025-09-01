import React from "react";
import PriceCard from "./PriceCard";
import Custom from "../assets/images/padge-logo/custom.png";
import Heart from "../assets/images/padge-logo/heart.png";
import Stars from "../assets/images/padge-logo/stars.png";
import BgImg from "../assets/images/bg-pricing.png";
import ListIcon from "../assets/images/list.png";
import PlusIcon from "../assets/images/plus.png";

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
    <div
      className="grid grid-cols-12 px-4 md:px-0 pt-[120px] pb-[120px] text-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
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
            listItems={listItems[2]}
          />
        </div>
        {/* dedicated support */}
        <div className="mt-[20px] border-2 border-[#25252733] rounded-2xl flex flex-col md:flex-row">
          {/* right div */}
          <div className="bg-gradient-to-r rounded-l-2xl from-[#111112] via-[#25252733] to-[#1B1B1D] p-[14px] flex-1">
            <div className="pt-[27px] pb-[27px] pl-[20px] pr-[20px] border-2 border-[#25252733] rounded-tl-2xl rounded-bl-2xl text-left">
              <h3 className="font-[400] text-[28px] mb-3 text-white">
                Dedicated Support
              </h3>
              <p className="text-white opacity-50 text-[16px] font-[400] mb-5">
                We are here to help get you started with a dedicated <br />{" "}
                support engineer who can assist with scoping your first <br />{" "}
                models and getting them deployed.
              </p>
              <p className="uppercase text-[13px] font-[400] text-white opacity-80 mb-5">
                What’s included
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div className="flex items-center gap-3">
                  <img src={ListIcon} alt="List Icon" />
                  <span className="text-[16px] font-[400] text-white opacity-80">
                    Shared Slack Channel
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={ListIcon} alt="List Icon" />
                  <span className="text-[16px] font-[400] text-white opacity-80">
                    Dedicated Support <br /> Engineer
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={ListIcon} alt="List Icon" />
                  <span className="text-[16px] font-[400] text-white opacity-80">
                    Prompt Engineering <br /> Guidance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={ListIcon} alt="List Icon" />
                  <span className="text-[16px] font-[400] text-white opacity-80">
                    Context Sourcing Guidance
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* left div */}
          <div
            className="p-3 text-center"
            style={{
              background:
                "linear-gradient(to bottom, #0C0A0B 50%, #0C0A0B 50%)",
            }}
          >
            <div className="pt-7 pb-7 pl-5 pr-5 border-2 border-[#25252733] rounded-tr-xl rounded-br-xl">
              <div
                className={`w-fit mx-auto rounded-2xl bg-gradient-to-r from-[#C070D84D] to-[#1717174D] border border-[#FFFFFF0F] text-[#CECECE] font-[400] text-[13px] pt-1 pb-1 pl-1 pr-3 flex gap-2 items-center mb-3 cursor-pointer`}
              >
                <img src={PlusIcon} alt="Plus Logo" />
                ADD ON
              </div>
              <p className="text-white font-[400] text-4xl mb-1">$750</p>
              <p className="text-white font-[400] text-[16px] opacity-80 mb-6">
                monthly
              </p>
              <button className="w-[240px] cursor-pointer rounded-[26px] text-[#09090A] text-[14px] font-medium bg-white mb-3 p-2">
                Request Access
              </button>
              <p className="text-white text-left font-[400] text-[12px] opacity-50 ">
                No long term contract obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
