import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="lg:px-24 px-4 py-16  md:px-20">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col  p-4 space-y-4 justify-end py-8 flex-1">
          <h1 className="capitalize text-5xl md:text-5xl font-bold leading-10">
            Mozisha Blog {" "}
          </h1>
          <p className=" leading-8">
            Your reliable source for the latest
            updates in education, technology,  business, and human capital development in Africa.
            
          </p>

          <h6 className="font-semibold  pt-8">
            <Link href="tel:+27824277902">Contact Us</Link>
          </h6>
          <Link href="mailto:info@mozisha.com">info@mozisha.com</Link>
          <div className="text-3xl flex gap-4 mt-36">
            <Link
              href="https://www.instagram.com/mozishaorg/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram
                data-aos="zoom-in"
                className="hover:text-purple-500"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/mozisha/?originalSubdomain=ng"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin
                data-aos="zoom-in"
                className="hover:text-purple-500"
              />
            </Link>
            <Link
              href="https://wa.me/+27824277902"
              target="_blank"
              rel="noopener
          noreferrer">
              <FaWhatsapp
                data-aos="zoom-in"
                className="hover:text-purple-500"
              />
            </Link>
            <Link
              href="https://twitter.com/MozishaOrg"
              target="_blank"
              rel="noopener
          noreferrer">
              <FaTwitter data-aos="zoom-in" className="hover:text-purple-500" />
            </Link>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center flex-1 ">
          <Image
            className="rounded-lg object-cover"
            src="/people.avif"
            alt="extended family hero image"
            width={500}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
