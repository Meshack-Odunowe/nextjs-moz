/* eslint-disable react/no-unescaped-entities */
'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function HowItWorks() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); const handleGetStartedClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className="bg-purple-50 px-8 lg:px-36 py-16 ">
      <h2 className="text-4xl my-4 font-semibold" data-aos-duration="2000" data-aos="fade-up">How It Works</h2>
      <p className="max-w-[400px] leading-8" data-aos-duration="2000" data-aos="fade-up">
        When you partner with Mozisha, you won't need to review resumes or
        take part in any interviews – we completely handle this process for you!
      </p>

      <div data-aos-duration="2000" data-aos="fade-up">
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex flex-col md:grid lg:grid-cols-3 md:flex-row gap-16 mt-8">
          <div data-aos-duration="2000" data-aos="fade-up ">
            <span
              data-aos="fade-zoom-in"
              data-aos-duration="2000"
              className="text-9xl text-purple-600 font-extrabold ">
              1
            </span>
            <h6 className="text-3xl font-semibold my-4">Complete the Needs Assessment Form</h6>
            <p className="leading-8">
Simply fill out the form with the relevant information            </p>
          </div>
          <div data-aos-duration="2000" data-aos="fade-up">
            <span className="text-9xl text-purple-700 font-extrabold ">2</span>
            <h6 className="text-3xl font-semibold my-4">Recruitment</h6>
            <p className="leading-8">
            We select and onboard your desired talent(s) tailored to your specific requirements, including working hours, and this process typically takes around 7 days.
            </p>
          </div>
          <div data-aos-duration="2000" data-aos="fade-up">
            <span className="text-9xl text-purple-800 font-extrabold ">3</span>
            <h6 className="text-3xl font-semibold my-4">Meet Your Talent(s)</h6>
            <p className="leading-8">
            And let's grow together! Your newly onboarded talent(s) is seamlessly integrated as a full-time member of your team.
            </p>
          </div>

        </div>
        <button  onClick={handleGetStartedClick} className='mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto'><Link href='/business#'>Get Started</Link></button>

      </div>
    </div>
  );
}

export default HowItWorks;
