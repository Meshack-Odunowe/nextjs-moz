"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
import { FaTimes, faTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import img from "../../../public/mozishaweb.svg";

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

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isNavbarFixed
    ? "fixed top-0 left-0 right-0 bg-white z-30"
    : "sticky top-0 bg-white z-30";

  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
    window.scrollTo(0, 0);
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
                <Link href="/mentors">Mentoring </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/mockinterview">Mock Interviews </Link>
              </li>

              <li onClick={closeMenu} className="cursor-pointer">
                <Link href="/workinprogress">Blog</Link>
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
          <ul className="flex justify-between gap-8 font-extrabold">
            <li className="px-4 py-4">
              <Link href="/" onClick={navigateToHome}>
                Home
              </Link>
            </li>
            <li onClick={handleGetStartedClick} className="px-4 py-4 ">
              <Link href="/about">About Us</Link>
            </li>
            <li onClick={handleGetStartedClick} className="px-4 py-4 ">
              <Link href="/mentors">Mentoring </Link>
            </li>
            <li onClick={handleGetStartedClick} className="px-4 py-4 ">
              <Link href="/mockinterview">Mock Interviews </Link>
            </li>

            <li className="px-4 py-4" onClick={handleGetStartedClick}>
              <Link href="/workinprogress">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
