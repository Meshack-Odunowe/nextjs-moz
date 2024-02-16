'use client'
import Image from "next/image";
import NewsletterSubscribe from "../NewsletterSubscribe";

const HeroSection = () => {
  return (
    <div className="lg:px-24 px-4 py-16  md:px-20">
      <div className="flex flex-col md:flex-row justify-center items-center">
        
        <NewsletterSubscribe />
        
        <div className="flex justify-center flex-1  bg-pink-50  rounded-s-full">
          <Image
            className="rounded-lg object-cover hidden md:block"
            src="/drumm.png"
            alt="image of a talking drum"
            width={800}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
