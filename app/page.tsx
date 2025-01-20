import CarouselMaquee from "@/components/carousel-maquee";
import Hero from "@/components/hero";
import HowToBuy from "@/components/how-to-buy";
import MeetJorge from "@/components/meet-jorge";
import Memes from "@/components/memes";
import Navbar from "@/components/navbar";
import Roadmap from "@/components/roadmap";
import StayInTouch from "@/components/stay-in-touch";
import Tokenomics from "@/components/tokenomics";

export default function Home() {
  return (
    <>
    <div className="w-full h-[100%] overflow-hidden  bg-slate-100">
    <div className="max-w-7xl flex flex-col mx-auto">
      <Navbar/>
    </div>
    <Hero/>
    <CarouselMaquee/>
    <MeetJorge/>
    <div className="max-w-7xl flex flex-col mx-auto">
    <Tokenomics/>
    <HowToBuy/>
    </div>
      <Roadmap />
      <Memes/>
      <StayInTouch/>
    </div>

    </>
  );
}


