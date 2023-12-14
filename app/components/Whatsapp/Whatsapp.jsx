'use client'
import Link from "next/link";
import { useState } from "react";


const { FaWhatsapp } = require("react-icons/fa");
function Whatsapp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

  };
  return (
    <div>

<div
className="fixed top-[80%] md:right-16 right-4 z-40"
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}>
<Link href="https://wa.me/+27824277902" target="_blank" rel="noreferrer">
  <div className="relative">
    <FaWhatsapp
      data-aos="zoom-in"
      className="hover:text-green-500 w-8 h-8 text-green-600 font-extrabold cursor-pointer"
    />
    {isHovered && (
      <div className="absolute text-[10px] text-black mb-4 rounded-md  bottom-full">
        Contact us now!
      </div>
    )}
  </div>
</Link>
</div>
    </div>
  )
}

export default Whatsapp
