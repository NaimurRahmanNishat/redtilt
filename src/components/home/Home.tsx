import { BsCalendarCheckFill } from "react-icons/bs";
import { BsCalendarHeartFill } from "react-icons/bs";
import { BsCaretRightSquareFill } from "react-icons/bs";
import { BsCaretLeftSquareFill } from "react-icons/bs";
import { HiArrowLongDown } from "react-icons/hi2";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { ImSkype } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="md:pt-[80px] pt-[80px] h-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side image */}
        <div className="pt-4 md:pt-8 order-2 md:order-1">
          <img
            src="/src/assets/hero.jpg"
            alt="hero_image"
            className="rounded-sm"
          />
        </div>
        {/* Right side text */}
        <div className="pt-4 md:pt-8 order-1">
          <h1 className="md:text-4xl text-center text-2xl font-bold text-pink-800 hover:text-pink-700 hover:-translate-y-0.5 cursor-pointer pb-5">
            Welcome to the page
          </h1>
          <p className="font-semibold text-center hover:-translate-x-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            ducimus. Placeat neque id aliquid possimus veritatis voluptate animi
            corrupti harum omnis impedit facere ab quaerat, eligendi incidunt
            repellendus voluptatum voluptas dicta repellat expedita unde atque
            corporis sit inventore. Dolorem nostrum, ratione animi corporis nemo
            perspiciatis, id obcaecati quaerat ea assumenda quos soluta
            aspernatur. Iure ab fugiat molestiae eaque harum culpa, ipsam sint
            nobis vitae ipsum voluptate blanditiis eius hic assumenda quia
            aliquam nulla voluptatibus facilis tempore, excepturi perferendis?
            Voluptatibus qui, tenetur nihil nisi cum vel, sequi nemo totam
            harum, similique autem voluptatem quibusdam eaque perspiciatis non
            enim facere quis amet.
          </p>
          <div className="flex items-center justify-center gap-5 pt-6 pb-2 md:pt-20">
            <BsCalendarCheckFill
              size={32}
              className="text-purple-700 hover:-translate-x-1 hover:text-orange-600"
            />
            <BsCalendarHeartFill
              size={32}
              className="text-purple-700 hover:text-orange-600 hover:-translate-y-1"
            />
            <BsCaretRightSquareFill
              size={32}
              className="text-purple-700 hover:text-orange-600 hover:translate-y-1"
            />
            <BsCaretLeftSquareFill
              size={32}
              className="text-purple-700 hover:text-orange-600 hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      {/* Download button */}
      <div className="flex justify-center pt-6 md:pt-16">
        <a
          href="/src/assets/processor.jpg"
          download="processor.jpg"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 active:scale-95"
        >
          Download
        </a>
      </div>
      <div className="flex justify-center">
        <HiArrowLongDown size={96} className="text-slate-600" />
      </div>
      <div className="pt-12 grid grid-cols-2 md:grid-cols-6 gap-8 place-items-center pb-16">
        <ImFacebook2 size={48} className="text-blue-600 cursor-pointer hover:-translate-y-1" />
        <FaLinkedin size={48} className="text-blue-600 cursor-pointer hover:-translate-y-1" />
        <SiGithub size={48} className="text-gray-300 cursor-pointer hover:-translate-y-1" />
        <BsTwitter size={48} className="text-blue-600 cursor-pointer hover:-translate-y-1" />
        <FaWhatsapp size={48} className="text-green-600 cursor-pointer hover:-translate-y-1" />
        <ImSkype size={48} className="text-blue-600 cursor-pointer hover:-translate-y-1" />
      </div>
    </div>
  );
};

export default Home;
