import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BgImg from "./assets/images/bgImg.jpg";

export default function App() {
  return (
    // <div className="bg-gradient-to-r from-[#1F1F1F] from-25% via-[#FFBDE8] via-40% via-[#BDFFDF] via-50% to-[#1F1F1F] to-90%">
    <div style={{ backgroundImage: `url(${BgImg})` }} className="bg-cover">
      <Navbar />
      {/* <div className="grid grid-cols-12 px-4 md:px-0">
        <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8"></div>
      </div> */}
      <HeroSection />
    </div>
  );
}
