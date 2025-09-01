import React from "react";
import LogoCloudCard from "./LogoCloudCard";
import DenoLogo from "../assets/images/icons/deno.png";
import HyperLogo from "../assets/images/icons/hyper.png";
import ModalLogo from "../assets/images/icons/modal.png";
import StatsLogo from "../assets/images/icons/statsig.png";

import EvidenceLogo from "../assets/images/icons/evidence.png";
import SouthLogo from "../assets/images/icons/south.png";
import DagsterLogo from "../assets/images/icons/dagster.png";
import CasestatusLogo from "../assets/images/icons/case-status.png";

export default function LogoCloud() {
  const firstLogos = [DenoLogo, HyperLogo, ModalLogo, StatsLogo];
  const secondLogos = [EvidenceLogo, SouthLogo, DagsterLogo, CasestatusLogo];
  return (
    <div className="grid grid-cols-12 px-4 md:px-0 mt-[113px] ">
      <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {firstLogos.map((logo, index) => (
            <LogoCloudCard key={index} imgSrc={logo} />
          ))}
        </div>
        <div className="max-w-xl text-xl md:text-4xl font-medium text-white mr-auto ml-auto text-center mb-16 mt-16">
          Used by teams at Statsig, Deno, Dagster, Evidence and more.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {secondLogos.map((logo, index) => (
            <LogoCloudCard key={index} imgSrc={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}
