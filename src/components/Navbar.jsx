/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import Resume from "../download/resume.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-black  font-bold text-lg cursor-pointer">
            <h1>FAZIL SHAIKH</h1>
          </div>
          
          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} 
              to="home"
              className="block text-[#78350f] hover:text-[#78350f] py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="Experience" className="block hover:text-[#78350f] py-2 px-4 cursor-pointer">
            Experience
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="skills" className="block  hover:text-[#78350f] py-2 px-4 cursor-pointer">
              
              Skills
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="portfolio" className="block  hover:text-[#78350f] py-2 px-4 cursor-pointer">
              
              Portfolio
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="Educations" className="block  hover:text-[#78350f] py-2 px-4 cursor-pointer">
             Educations
            </Link>
          </div>

          {/* contact me btn */}
          <div className="lg:block hidden">
          <a href={Resume}  download="Fazil_Shaikh_Resume"
        target="_blank"
        rel="noreferrer">
            <button className="px-4 py-2 bg-transparent border border-[#78350f] text-[#78350f] rounded hover:bg-[#78350f] hover:text-white transition-all duration-300">
              Download Resume
            </button>
            </a>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-white">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="home" className="block hover:text-gray-400 py-2">
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="Experience" className="block hover:text-gray-400 py-2">
            Experience
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="skills" className="block hover:text-gray-400 py-2">
              Skills
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="portfolio" className="block hover:text-gray-400 py-2">
              Portfolio
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="Educations" className="block hover:text-gray-400 py-2">
            Education
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
