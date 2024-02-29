"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
import { FaTimes, faTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import img from "../../../public/mozishaweb.svg";
import {  ChevronDown } from "lucide-react";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };
  const handleGetStartedClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  };

 

  const navbarClass = isNavbarFixed
    ? "fixed top-0 left-0 right-0 bg-white z-30"
    : "sticky top-0 bg-white z-30";

  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
    window.scrollTo(0, 0);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div>
        <header className={navbarClass}>
          <nav className="flex relative md:hidden py-8 mx-4 justify-between items-center">
            <Link href="/" onClick={navigateToHome}>
              <Image className="w-40" src={img} alt="" width={50} height={50} />
            </Link>

            <ul
              className={`h-screen text-purple-700 top-8 z-20 justify-center items-center absolute bg-white underline cursor-pointer w-full flex flex-col leading-[80px] font-semibold text-xl ${
                menuOpen ? "block" : "hidden"
              }`}>
              <li onClick={closeMenu} className="cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/about">About Us</Link>
              </li>
              <li onClick={closeMenu} className="px-4 py-4 ">
                <Link href="/mentors">Mentorship </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/apprenticeship">Apprenticeship</Link>
              </li>

              <li onClick={closeMenu} className="cursor-pointer">
                <Link href="/blog">Blog</Link>
              </li>
              <li onClick={closeMenu} className="cursor-pointer">
                <Link href="/team">Our Team</Link>
              </li>
            </ul>
            <div>
              <FcMenu
                className={`absolute top-6 right-4 text-3xl z-30 md:hidden ${
                  menuOpen ? "hidden" : "block"
                }`}
                onClick={toggleMenu}
              />
              {menuOpen && (
                <FaTimes
                  className={`absolute md:hidden top-6 right-4 text-3xl z-30`}
                  onClick={closeMenu}
                />
              )}
            </div>
          </nav>
        </header>
      </div>

      {/* ********************************************* DESKTOP VERSION *******************************************/}

      <div
        className={`md:flex hidden justify-between items-center py-8 mx-auto ${navbarClass} px-24 z-30`}>
        <div>
          <Link href="/" onClick={navigateToHome}>
            <Image src={img} alt="logo" className="w-48" />
          </Link>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-8 font-extrabold">
            <li className="px-4 py-4">
              <Link href="/" onClick={navigateToHome}>
                Home
              </Link>
            </li>
            <li
              className="group px-4 py-4 flex justify-center items-center gap-2 relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <span>About</span>
              <ChevronDown
                className={`text-sm transition-transform ${
                  isHovered ? "rotate-180" : ""
                }`}
              />
              <div
                className="w-0 h-0 absolute left-4 top-10
  border-l-[10px] border-l-transparent hidden group-hover:block
  border-b-[55px] border-b-gray-200 shadow-lg
  border-r-[10px] border-r-transparent"></div>
              <div className="hidden absolute bg-white rounded-md shadow-md  w-32 text-center z-10 top-full left-0 group-hover:block transition-all">
                <Link
                  href="/about"
                  className="block font-normal text-left px-4 py-2 hover:bg-gray-100">
                  About
                </Link>
                <Link
                  href="/team"
                  className="block text-left font-normal  px-4 py-2 hover:bg-gray-100">
                  Our Team
                </Link>
              </div>
            </li>

            <li onClick={handleGetStartedClick} className="px-4 py-4 ">
              <Link href="/mentors">Mentorship </Link>
            </li>
            <li onClick={handleGetStartedClick} className="px-4 py-4 ">
              <Link href="/apprenticeship">Apprenticeship </Link>
            </li>

            <li className="px-4 py-4" onClick={handleGetStartedClick}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
