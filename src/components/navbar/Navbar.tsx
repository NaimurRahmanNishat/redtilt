import { Link } from "react-scroll";
import { navLinksdata } from '../../constants';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Theme from "../theme/Theme";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // Get pathname from useLocation

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full h-[80px] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-between z-10 
        ${isScroll ? "bg-[#f8f6f6] top-0 h-[77px] text-black shadow-md" : "bg-[#dddbdb] text-black"}`}
    >
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-semibold hover:text-orange-700">Redtilt</h1>
      </div>
      {/* Desktop Navigation */}
      <div>
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            className={`text-base font-normal text-black tracking-wide cursor-pointer 
              hover:text-designColor duration-300 hover:text-orange-500 
              ${pathname === link ? "font-bold text-orange-600" : ""}`}
            key={_id}
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
        </ul>
      </div>
      {/* Theme Toggle and Project Button */}
      <div className="flex gap-5 items-center">
        <Theme />
        <button
          className="bg-orange-600 px-4 py-2 rounded-md font-medium shadow-md hover:bg-orange-700 transition duration-300"
          onClick={() => console.log("Project button clicked")}
        >
          Start a Project
        </button>
        <button
          className="md:hidden flex items-center justify-end gap-4 text-black hover:text-gray-700 transition duration-300"
          onClick={handleClick}
        >
          {open ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <>
          {/* Background Overlay */}
          <div
            className="absolute inset-0 top-20 bg-slate-300 opacity-75 z-10"
            onClick={handleClick}
          />
          <nav
            className="absolute top-20 right-0 w-2/3 pt-5 bg-gray-500 h-[1080px] flex flex-col items-center space-y-4 md:hidden z-10"
          >
            <ul className="flex flex-col items-center space-y-4">
              {navLinksdata.map(({ _id, title, link }) => (
                <li
                className={`text-base font-normal text-black tracking-wide cursor-pointer 
                  hover:text-designColor duration-300 hover:text-orange-500 
                  ${pathname === link ? "font-bold text-orange-600" : ""}`}
                  key={_id}
                >
                  <Link
                    onClick={handleClick}
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;
