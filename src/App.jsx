import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BgImg from "./assets/images/bgImg.jpg";
import Dashboard from "./components/Dashboard";
import LogoCloud from "./components/LogoCloud";
import FeatureSection from "./components/FeatureSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PriceSection from "./components/PriceSection";

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#1B1B1D] to-[#070708]">
        {/* <div style={{ backgroundImage: `url(${BgImg})` }} className="bg-cover"> */}
        <Navbar />
        <HeroSection />
        <Dashboard />
        <LogoCloud />
        <FeatureSection />
        <TestimonialsSection />
        <PriceSection/>
      </div>
    </>
  );
}

{
  /* <div className="grid grid-cols-12 px-4 md:px-0">
        <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8"></div>
      </div> */
}
