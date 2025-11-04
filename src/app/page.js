import About from "@/components/About";
import Ad from "@/components/Ad";
import Chatbot from "@/components/Chatbot";
import Foot from "@/components/Foot";
import Meet from "@/components/Meet";
import Navbar from "@/components/Navbar";
import Rev from "@/components/Rev";
import Space from "@/components/Space";

export default function Home() {
  return (
    <div className="relative">
    <Navbar />

    <Ad slideHeightVh={90} autoplay={true} autoplayInterval={5000} />
    {/* other page content */}
    <Meet/>
    <Chatbot />
    <About/>
    <Rev/>
    <Foot/>
    {/* <Space/> */}

  </div>
  );
}
