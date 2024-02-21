/* eslint-disable react/no-unescaped-entities */
'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image"; // Import Image component
import img from "../../../public/christian.jpeg";
import img2 from "../../../public/noel1.jpeg";
import testimoniallogo from "../../../public/authentickitchen.png";
import testimoniallogo2 from "../../../public/platinumlogo.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";

export default function Testimonial() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Swiper
      className="px-4 "
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>
      <SwiperSlide>
        <div
          className="flex flex-col md:flex-row justify-between items-center bg-purple-200 my-32 md:w-[800px] mx-auto p-16 md rounded-md"
          data-aos-duration="2000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic" >
          <div>
            <Image
              src={img2}
              alt=""
              className="rounded-full object-cover w-40 h-40 mb-16 md:mb-0"
              data-aos-duration="2000"
              data-aos="fade-in"
              width={160}
              height={160}
            />
          </div>
          <div className=" md:w-[400px]">
            <span>
              <Image
                src={testimoniallogo}
                alt="logo"
                className="mb-6"
                width={200}
                height={40}
              />
            </span>
            <p
              className="leading-8 italic text-purple-950"
              data-aos-duration="2000"
              data-aos="fade-left">
              "Thinking of Mozisha: Professional, Committed, and Result-Driven.
              Since February 2023, Mozisha has been a critical part of Authentic
              Kitchens' success, fueling exponential growth this year with
              exceptional service."
            </p>
            <p
              className="text-sm text-purple-900 mt-8"
              data-aos-duration="2000"
              data-aos="fade-right">
              Noel Sinaga
            </p>
            <p
              className="text-[12px] text-purple-400 mt-8"
              data-aos-duration="2000"
              data-aos="zoom-in">
              {" "}
              Co-founder/CEO, Authentic Kitchens
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="flex flex-col md:flex-row justify-between items-center bg-purple-200 my-32 md:w-[800px] mx-auto p-16 rounded-md"
          data-aos-duration="2000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic">
          <div>
            <Image
              src={img}
              alt=""
              className="rounded-full object-cover w-40 h-40 mb-16 md:mb-0"
              data-aos-duration="2000"
              data-aos="fade-in"
              width={160}
              height={160}
            />
          </div>
          <div className=" md:w-[400px]">
            <span>
              <Image
                src={testimoniallogo2}
                alt="logo"
                className="mb-6"
                width={200}
                height={40}
              />
            </span>

            <p
              className="leading-8 italic text-purple-950"
              data-aos-duration="2000"
              data-aos="fade-left">
              "Mozisha's team not only understood our educational mission but
              also enhanced it with their strategic insights. With their
              support, we've seen remarkable growth, and our tutors can now
              focus more on what they do best—educating."
            </p>
            <p
              className="text-sm text-purple-900 mt-8"
              data-aos-duration="2000"
              data-aos="fade-right">
              Christian Nwigwe
            </p>
            <p
              className="text-[12px] text-purple-400 mt-8"
              data-aos-duration="2000"
              data-aos="zoom-in">
              Founder/CEO, Platinum Edge
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
