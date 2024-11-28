import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import footerbg from "../../assets/footerbg.jpg";

const Footer = () => {
  return (
    <div className="pt-10 w-full bg-cover items-center absolute opacity-80 z-10" style={{backgroundImage:`url(${footerbg})`}}>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="grid grid-cols-1 md:grid-cols-3 pb-10">
          {/* left side */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold text-purple-600 cursor-pointer hover:-translate-y-0.5 pb-4">Company</h1>
            <p className="font-semibold text-orange-600 hover:text-blue-700 cursor-pointer hover:-translate-y-0.5 pb-2">About</p>
            <p className="font-semibold text-orange-600 hover:text-blue-700 cursor-pointer hover:-translate-y-0.5 pb-2">Services</p>
            <p className="font-semibold text-orange-600 hover:text-blue-700 cursor-pointer hover:-translate-y-0.5 pb-2">Works</p>
            <p className="font-semibold text-orange-600 hover:text-blue-700 cursor-pointer hover:-translate-y-0.5 pb-2">Career</p>
          </div>
          {/* middle  */}
          <div className="flex items-center flex-col pt-4">
            <h1 className="text-2xl font-bold text-purple-600 cursor-pointer hover:-translate-y-0.5 pb-4">Help</h1>
            <p className="font-semibold text-blue-600 hover:text-orange-700 cursor-pointer hover:-translate-y-0.5 pb-2">Customar support</p>
            <p className="font-semibold text-blue-600 hover:text-orange-700 cursor-pointer hover:-translate-y-0.5 pb-2">Terms & Conditions</p>
            <p className="font-semibold text-blue-600 hover:text-orange-700 cursor-pointer hover:-translate-y-0.5 pb-2">Privacy Policy</p>
          </div>
          {/* right side */}
          <div className="flex md:items-end flex-col items-center pt-4">
            <h1 className="text-2xl font-bold text-purple-600 cursor-pointer hover:-translate-y-0.5 pb-4">Resources</h1>
            <p className="font-semibold text-orange-600 hover:text-blue-700 cursor-pointer hover:-translate-y-0.5 pb-2">Free eBooks</p>
            <p className="font-semibold text-orange-600 hover:text-blue-700 cursor-pointer hover:-translate-y-0.5 pb-2">Devlopment Tutorial</p>
            <p className="font-semibold text-orange-600 hover:text-blue-700 cursor-pointer hover:-translate-y-0.5 pb-2">How to Blog</p>
            <p className="font-semibold text-orange-600 hover:text-blue-700 cursor-pointer hover:-translate-y-0.5 pb-2">Career</p>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row gap-5 pb-5">
            {/* copywrite text */}
            <p className="order-2 md:order-1 font-semibold text-xs md:text-base">
              Copyright @{new Date().getFullYear()}, All Rights Reserved By Redtilt
            </p>
          {/* right side bottom */}
          <div className="flex items-center gap-3 order-1">
            <BsGithub size={32} className="bg-white rounded-full hover:-translate-y-0.5 cursor-pointer hover:bg-slate-300"/>
            <BsLinkedin size={32} className="text-blue-600 bg-white rounded-full hover:-translate-y-0.5 cursor-pointer hover:bg-slate-300"/>
            <BsFacebook size={32} className="text-blue-600 bg-white rounded-full hover:-translate-y-0.5 cursor-pointer hover:bg-slate-300"/>
            <AiFillTwitterCircle size={32} className="text-blue-600 bg-white rounded-full hover:-translate-y-0.5 cursor-pointer hover:bg-slate-300"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;