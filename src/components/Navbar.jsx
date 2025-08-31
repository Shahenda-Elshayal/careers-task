import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-gradient-to-r from-black via-gray-900 to-black shadow-sm h-[73px]">
      <div className="w-full grid grid-cols-12 px-2 md:px-0">
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between items-center">
          {/* Left side: Logo + Nav links */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <p className="text-white flex items-center gap-2 text-3xl ">
              <span className="text-6xl translate-y-3 inline-block">*</span>
              scout
            </p>

            {/* Navigation links */}
            <ul className="hidden md:flex gap-6 text-[16px] font-[400] text-text-nav-color ">
              <li>
                <a className="hover:text-white">Features</a>
              </li>
              <li>
                <a className="hover:text-white">Pricing</a>
              </li>
              <li>
                <a className="hover:text-white">Docs</a>
              </li>
              <li>
                <a className="hover:text-white">Blog</a>
              </li>
            </ul>
          </div>

          {/* Right side: Auth buttons */}
          <div className="flex gap-4">
            <button className="btn bg-transparent text-[#E6E6F0] border border-text-nav-color shadow-none text-[14px] font-medium rounded-[26px]">
              Login
            </button>
            <button className="btn bg-[#F3F2FF] text-black border-white border shadow-none rounded-[26px]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
