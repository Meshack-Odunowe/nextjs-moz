"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import img from "../../public/mozishapurple.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleGetStartedClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="p-8 md:px-28 md:justify-center  flex flex-col md:flex-row bg-purple-700 text-white gap-[5rem] leading-10 md:items-center">
      <div className="md:w-1/2">
        <Image src={img} alt="Mozisha website logo" />
      </div>{" "}
      <div data-aos-duration="1000" data-aos="fade-up">
        <p className="font-semibold ">
          {" "}
          <Link href="/about" onClick={handleGetStartedClick}>
            About Mozisha
          </Link>
        </p>
        <p className="" onClick={handleGetStartedClick}>
          <Link href="/business">Businesses</Link>
        </p>
        <p className="" onClick={handleGetStartedClick}>
          <Link href="/fortalents">Talents</Link>
        </p>
        <p className="" onClick={handleGetStartedClick}>
          <Link href="/blog">Blog</Link>
        </p>

        <p className="mt-8" onClick={handleGetStartedClick}>
          <Link href="/termsofuse">Terms of Use</Link>
        </p>
        <p onClick={handleGetStartedClick}>
          <Link href="/privacypolicy">Privacy Policy</Link>
        </p>
        <p onClick={handleGetStartedClick}>
          <Link href="/faq">Frequently Asked Questions</Link>
        </p>
      </div>
      <div data-aos-duration="1000" data-aos="fade-up">
        <h6
          data-aos-duration="1000"
          data-aos="fade-up"
          className="font-semibold "
          onClick={handleGetStartedClick}>
          <Link href="tel:+27824277902">Contact Us</Link>
        </h6>
        <Link href="mailto:info@mozisha.com">info@mozisha.com</Link>
        <div className="text-3xl flex gap-4 mt-36">
          <Link
            href="https://www.instagram.com/mozishaorg/"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram data-aos="zoom-in" className="hover:text-purple-500" />
          </Link>
         <Link href="https://www.linkedin.com/company/mozisha/?originalSubdomain=ng"
          target="_blank" rel="noopener noreferrer">
          <FaLinkedin data-aos="zoom-in" className="hover:text-purple-500" /></Link>
         <Link href="https://wa.me/+27824277902" target="_blank" rel="noopener
          noreferrer">
          <FaWhatsapp data-aos="zoom-in" className="hover:text-purple-500" /></Link>
         <Link href="https://twitter.com/MozishaOrg" target="_blank" rel="noopener
          noreferrer">
          <FaTwitter data-aos="zoom-in" className="hover:text-purple-500" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
