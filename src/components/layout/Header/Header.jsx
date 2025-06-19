import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import logoImg from "../../../assets/images/logo.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <header className="container fixed left-1/2 -translate-x-1/2 top-4 z-50">
      <div
        className={`flex flex-col lg:flex-row items-center justify-between gap-4 px-4 py-2 bg-black/50 backdrop-blur-3xl shadow-md rounded-4xl 
          overflow-hidden transition-all duration-500 ease-in-out max-h-[60px] ${
            activeNav ? "max-h-[500px] lg:max-h-[60px]" : ""
          }`}
      >
        <div className="flex items-center justify-between gap-2 w-full lg:w-auto">
          <img src={logoImg} />
          <span className="text-3xl cursor-pointer lg:hidden">
            {activeNav ? (
              <IoClose onClick={() => setActiveNav(false)} />
            ) : (
              <HiMenu onClick={() => setActiveNav(true)} />
            )}
          </span>
        </div>

        <nav className="flex flex-col items-center lg:flex-row gap-8">
          <a href="#Home" className="navLink">
            Home
          </a>
          <a href="#Projects" className="navLink">
            Projects
          </a>
          <a href="#Services" className="navLink">
            Services
          </a>
          <a href="#About" className="navLink">
            About
          </a>
          <a href="#Careers" className="navLink">
            Careers
          </a>
        </nav>

        <button className="mainBtn">
          Join Waitlist <GoArrowUpRight />
        </button>
      </div>
    </header>
  );
};

export default Header;
