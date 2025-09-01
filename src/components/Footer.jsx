import React from "react";
import FooterBg from "../assets/images/footer-bg.png";
import Logo from "../assets/images/logo.png";
import Linked from "../assets/images/social/linked.png";
import X from "../assets/images/social/x.png";
import Social from "../assets/images/social/social.png";

export default function Footer() {
  return (
    <div
      className="grid grid-cols-12 px-4 md:px-0 pt-[80px] pb-[80px] border-t border-[#1F1F1F]"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 ">
        <footer className="footer sm:footer-horizontal text-white flex flex-col items-center md:items-start md:flex-row md:pr-[96px] md:pl-[96px] justify-between">
          <aside>
            <img src={Logo} alt="logo img" />
          </aside>
          <nav>
            <h6 className="footer-title text-[13px] font-[400] opacity-60 uppercase mx-auto md:mx-0">
              links
            </h6>
            <div className="flex md:flex-col gap-2">
              <a className="link link-hover text-[16px] text-center md:text-left">
                Features
              </a>
              <a className="link link-hover text-[16px] text-center md:text-left">
                Pricing
              </a>
              <a className="link link-hover text-[16px] text-center md:text-left">
                Docs
              </a>
              <a className="link link-hover text-[16px] text-center md:text-left">
                Blog
              </a>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title text-[13px] font-[400] opacity-60 uppercase mx-auto md:mx-0">
              solutions
            </h6>
            <div className="flex md:flex-col gap-2">
              <a className="link link-hover text-[16px] text-center md:text-left">
                Slack Bot
              </a>
              <a className="link link-hover text-[16px] text-center md:text-left">
                Discord Bot
              </a>
              <a className="link link-hover text-[16px] text-center md:text-left">
                Command
              </a>
              <a className="link link-hover text-[16px] text-center md:text-left">
                Onsite Chat
              </a>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title text-[13px] font-[400] opacity-60 uppercase mx-auto md:mx-0">
              legal
            </h6>
            <div className="flex md:flex-col gap-2">
              <a className="link link-hover text-[16px] text-center md:text-left">
                Terms of Service
              </a>
              <a className="link link-hover text-[16px] text-center md:text-left">
                Privacy Policy
              </a>
            </div>
          </nav>
        </footer>

        {/* copy right and social icons */}
        <div className="mt-[70px] flex flex-col justify-between gap-3 items-center md:flex-row md:pr-[96px] md:pl-[96px] ">
          <p className="text-white font-[400] text-[16px] opacity-60">
            Copyright © 2024 Scout. All rights reserved.
          </p>
          <div className="flex">
            <div className="w-14 h-[64px] flex items-center justify-center">
              <img src={Social} alt="" />
            </div>
            <div className="w-14 h-[64px] flex items-center justify-center">
              <img src={X} alt="" />
            </div>
            <div className="w-14 h-[64px] flex items-center justify-center">
              <img src={Linked} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
