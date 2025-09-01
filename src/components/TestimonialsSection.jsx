import React from "react";
import Logo1 from "../assets/images/testi-logos/logo-1.png";
import Logo2 from "../assets/images/testi-logos/logo-2.png";
import Logo3 from "../assets/images/testi-logos/logo-3.png";
import Logo4 from "../assets/images/testi-logos/logo-4.png";
import Logo5 from "../assets/images/testi-logos/logo-5.png";
import Logo6 from "../assets/images/testi-logos/logo-6.png";
import StarBgImg from "../assets/images/bg-stars-bento.png";
import PersonImg from "../assets/images/person-testi.png";

export default function TestimonialsSection() {
  return (
    <div className="grid grid-cols-12 px-4 md:px-0 pt-[120px] pb-[120px]">
      <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 flex flex-col lg:flex-row justify-center flex-1 border border-[#1F1F1F]">
        {/* left card logos */}
        <div className="flex flex-row lg:flex-col">
          <div className="h-[142px] border flex-1 border-[#E5E7EB] w-[142px] flex items-center justify-center hover:border-[#E5E7EB]">
            <img src={Logo1} alt="Logo one" />
          </div>
          <div className="h-[142px] w-[142px] flex-1 flex items-center justify-center border border-t-0 border-[#1F1F1F] hover:border-[#E5E7EB] hover:border transition">
            <img src={Logo2} alt="Logo two" />
          </div>
          <div className="h-[142px] w-[142px] flex-1  flex items-center justify-center lg:border-r border-b lg:border-b-0 lg:border-l border-[#1F1F1F] hover:border-[#E5E7EB] hover:border transition">
            <img src={Logo3} alt="Logo three" />
          </div>
        </div>
        {/* middle content */}
        <div
          style={{ backgroundImage: `url(${StarBgImg})` }}
          className="max-w-[742px] p-8 flex-1  text-center flex flex-col justify-center items-center"
        >
          <p className=" max-w-[470px] leading-[34px] font-medium md:text-[32px] text-white">
            "Scout is an indispensable tool for our Engineering, DS and Sales
            teams to engage with our customers. We rely on Scout daily, making
            it an rely on Scout daily, making it an integral part of our
            operations."
          </p>
          <div className="mt-8 ">
            <img
              src={PersonImg}
              alt="Avatar"
              className="rounded-full w-10 h-10 ml-auto mr-auto"
            />
            <p className="text-[16px] font-[400] text-white leading-[20.8px] pt-[11px]">
              Vijaye Raji
            </p>
            <p className="text-[16px] font-[200] text-white opacity-[50%] leading-[20.8px]">
              CEO of Statsig
            </p>
          </div>
        </div>
        {/* right card logos */}
        <div className="flex flex-row lg:flex-col">
          <div className="h-[142px] border-t lg:border lg:border-t-0 border-[##1F1F1F] flex-1 w-[142px] flex items-center justify-center hover:border-[#E5E7EB] hover:border transition">
            <img src={Logo4} alt="Logo four" />
          </div>
          <div className="h-[142px] w-[142px] flex items-center flex-1 justify-center border-t border-l lg:border lg:border-t-0 border-[##1F1F1F] hover:border-[#E5E7EB] hover:border transition">
            <img src={Logo5} alt="Logo five" />
          </div>
          <div className="h-[142px] w-[142px] flex items-center flex-1 justify-center border-l border-t lg:border-t-0 lg:border-r lg:border-l border-[#1F1F1F] hover:border-[#E5E7EB] hover:border transition">
            <img src={Logo6} alt="Logo six" />
          </div>
        </div>
      </div>
    </div>
  );
}
