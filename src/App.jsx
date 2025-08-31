import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 px-4 md:px-0 ">
        <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
        </div>
      </div>
          <HeroSection/>
    </>
  );
}
