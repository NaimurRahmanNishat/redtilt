import { IoHardwareChipOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { FiUploadCloud } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandFlutter } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const Services = () => {
  return (
    <div id="services" className="pt-10 pb-10">
      <h1 className="flex items-center justify-center text-red-700 font-bold text-2xl md:text-3xl cursor-pointer hover:-translate-y-0.5">
        Our Services
      </h1>
      <div className="pt-10">
        {/* Top offer section */}
        <h1 className="text-xl font-bold text-yellow-600 hover:text-yellow-700 cursor-pointer text-center pb-4">
          What we offer
        </h1>
        <div className="flex items-center justify-center">
          <p className="font-semibold px-4 py-2 hover:ring-2 rounded-full bg-red-600 hover:bg-inherit cursor-pointer text-center">
            Our Experts Will Help You In Following Fields
          </p>
        </div>
        {/* Service boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 text-white gap-4">
          <div className="bg-[#b11a56] h-[220px] px-4 py-8 md:px-6 md:py-12 rounded-lg relative hover:-translate-y-0.5">
            <div className="flex items-center gap-5 justify-center">
              <IoHardwareChipOutline size={40} />
              <p className="font-bold text-xl">Development</p>
            </div>
            <div className="absolute bg-[#d62068] md:text-end right-0 left-20 bottom-0 px-4 py-2 rounded">
              <p>Software Software</p>
              <p>Frontend Development</p>
              <p>Backend Development</p>
              <p>UI/UX Design</p>
            </div>
          </div>
          <div className="bg-[#b11a56] h-[220px] px-4 py-8 md:px-6 md:py-12 rounded-lg relative hover:-translate-y-0.5">
            <div className="flex items-center gap-5 justify-center">
              <IoEarthOutline size={40} />
              <p className="font-bold text-xl">MSP</p>
            </div>
            <div className="absolute bg-[#d62068] md:text-end right-0 left-20 bottom-0 px-4 py-2 rounded">
              <p>Network Management</p>
              <p>Data Security</p>
              <p>Technical Support</p>
              <p>Backup Solutions</p>
            </div>
          </div>
          <div className="bg-[#b11a56] h-[220px] px-4 py-8 md:px-6 md:py-12 rounded-lg relative hover:-translate-y-0.5">
            <div className="flex items-center gap-5 justify-center">
              <FiUploadCloud size={40} />
              <p className="font-bold text-xl">Cloud</p>
            </div>
            <div className="absolute bg-[#d62068] md:text-end right-0 left-20 bottom-0 px-4 py-2 rounded">
              <p>Cloud Hosting</p>
              <p>Storage Solutions</p>
              <p>SaaS Integration</p>
              <p>Cloud Migration</p>
            </div>
          </div>
          <div className="bg-[#b11a56] h-[220px] px-4 py-8 md:px-6 md:py-12 rounded-lg relative hover:-translate-y-0.5">
            <div className="flex items-center gap-5 justify-center">
              <IoShieldCheckmarkOutline size={40} />
              <p className="font-bold text-xl">Cyber</p>
            </div>
            <div className="absolute bg-[#d62068] md:text-end right-0 left-20 bottom-0 px-4 py-2 rounded">
              <p>Cybersecurity Audits</p>
              <p>Penetration Testing</p>
              <p>Threat Analysis</p>
              <p>Incident Response</p>
            </div>
          </div>
        </div>
        {/* icons list */}
          <h1 className="text-center pt-10 font-bold md:text-3xl text-xl">Our Superpowers</h1>
          <div className="pt-10 grid grid-cols-2 md:grid-cols-6 gap-8 place-content-center place-items-center">
          <RiJavascriptFill size={56} className="text-yellow-600"/>
          <TbBrandFlutter size={56} className="text-purple-600"/>
          <SiPrisma size={56} className="text-red-900"/>
          <SiMongodb size={56} className="text-green-600"/>
          <AiOutlinePython size={56} className="text-yellow-600"/>
          <SiTypescript size={56} className="text-blue-600"/>
          </div>
      </div>
    </div>
  );
};

export default Services;
