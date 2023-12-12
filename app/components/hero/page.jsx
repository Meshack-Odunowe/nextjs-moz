/* eslint-disable react/no-unescaped-entities */
'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxEnter } from 'react-icons/rx';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { GiWireframeGlobe } from 'react-icons/gi';
import { MdWavingHand } from 'react-icons/md';
import { FaRegHandshake } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GroupImg from '../../../public/portrait.jpeg';

function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleGetStartedClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      <div data-aos-duration="2000" data-aos="fade-up" className=" bg-purple-200 ">
        <h2 className="font-bold text-center text-3xl pt-24 md:text-4xl mb-12">
          Mozisha, Your Growth Partner{" "}
        </h2>
        <div data-aos-duration="2000" className="md:w-[600px] mx-auto " data-aos="fade-up">
          <p className="text-center text-gray-500 px-4  leading-8" data-aos="fade-up">
            Join other VC-backed companies to experience exponential growth.
          </p>
        </div>
        <div
          data-aos-duration="2000"
          className="flex max-w-[1240px] items-center justify-center gap-12 lg:flex-row flex-col mt-12 mx-auto px-6 md:px-0"
          data-aos="fade-up">
          <div
            data-aos-duration="2000"
            className="bg-white  shadow-xl p-8 rounded-md w-full">
            <p className="py-2 px-6 bg-purple-300 font-bold rounded-md w-fit">
              Premium Talents
            </p>
            <p className="text-2xl mt-4" data-aos="fade-up">
              Top 1%
            </p>
            <p className="leading-8 text-gray-500 mb-4 " data-aos="fade-up">
              We carefully identify and nurture the best talents from over 50 african countries.
            </p>
            <div
              data-aos-duration="2000"
              className="flex gap-4 justify-center items-center"
              data-aos="fade-up">
              <span className="leading-8 text-purple-500 mb-4">
                <RxEnter />
              </span>
              <p className="leading-8 text-gray-500 mb-4" data-aos="fade-up">
                Moreover, we carefully adapt each role to suit your particular requirements.
              </p>
            </div>
            <button onClick={handleGetStartedClick} className="mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto" data-aos="fade-up">
              <Link href="/business">Get Started</Link>
            </button>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-white  shadow-xl p-8 rounded-md w-full">
            <p
              className="py-2 px-6 bg-purple-300 font-bold rounded-md w-fit"
              data-aos="fade-up">
              Scalability
            </p>
            <p data-aos="fade-up" className="text-2xl mt-4">
              Seamlessly Scale Your Team
            </p>
            <p className="leading-8 text-gray-500 mb-4">
              Whether you need one or multiple talents, Mozisha streamlines the process, allowing you to scale your team within a few days.
            </p>
            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className="flex gap-4 justify-center items-center">
              <span
                data-aos="fade-up"
                className="leading-8 text-text-500  mb-4">
                <RxEnter />
              </span>
              <p data-aos="fade-up" className="leading-8 text-gray-500 mb-4">
                Our smooth onboarding process keeps your operations agile and flexible.{" "}
              </p>
            </div>
            <button onClick={handleGetStartedClick} data-aos="fade-up" className="mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto">
              <Link href="/business">Get Started</Link>
            </button>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-white  shadow-xl p-8   rounded-md w-full">
            <p
              data-aos="fade-up"
              className="py-2 px-6 bg-purple-300 font-bold rounded-md w-fit">
              Cost-Efficiency
            </p>
            <p data-aos="fade-up" className="text-2xl mt-4">
              Unbeatable Value{" "}
            </p>
            <p data-aos="fade-up" className="leading-8 text-gray-500 mb-4">
              Access top-tier talents at a remarkably competitive rate.
            </p>
            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className="flex gap-4 justify-center items-center">
              <span className="leading-8 text-purple-500 mb-4">
                <RxEnter />
              </span>
              <p data-aos="fade-up" className="leading-8 text-gray-500 mb-4">
                Enjoy the best while we handle all payroll obligations{" "}
              </p>
            </div>
            <button onClick={handleGetStartedClick} data-aos="fade-up" className="mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto">
              <Link href="/business">Get Started</Link>{" "}
            </button>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="h-full bg-white py-16  mt-24">
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="max-w-[1240px] mx-auto flex gap-16 md:gap-0 flex-col md:flex-row px-4">
            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className="mx-auto px-4">
              <h3 className="text-start mb-6 text-3xl md:text-4xl">
                Mozisha's Secret to Success is the "Integrate" Model.
              </h3>
              <p>
                We don't just offer talents; we seamlessly integrate a new team member into your company.
              </p>
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className="grid md:grid-cols-2  gap-8 mt-8 flex-col md:flex-row">
                <div data-aos-duration="2000" data-aos="fade-up">
                  <span className="text-purple-600 text-6xl ">
                    <AiOutlineFieldTime />
                  </span>
                  <p className=" text-2xl my-2 ">
                    Seamlessly integrates with your team
                  </p>
                  <p className="text-gray-500 leading-8">
                    Grant them access to your company email, Slack, Zoom, and other relevant tools. Also, remember to include them in your virtual team meetings!
                  </p>
                </div>
                <div data-aos-duration="2000" data-aos="fade-up">
                  <span className="text-purple-600 text-6xl ">
                    <GiWireframeGlobe />
                  </span>
                  <p className=" text-2xl my-2 ">
                    In sync with your time zone.
                  </p>
                  <p className="text-gray-500 leading-8">
                    Our talents operate during your standard business hours, regardless of the time zone difference.
                  </p>
                </div>
              </div>
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className="grid md:grid-cols-2 gap-8 mt-8 flex-col md:flex-row">
                <div data-aos-duration="2000" data-aos="fade-up">
                  <span className="text-purple-600 text-6xl ">
                    <MdWavingHand />
                  </span>
                  <p className=" text-2xl my-2 ">Full Time</p>
                  <p className="text-gray-500 leading-8">
                    Our skilled professionals work full-time, dedicating 40 hours a week exclusively to your tasks and projects.
                  </p>
                </div>
                <div data-aos-duration="2000" data-aos="fade-up">
                  <span className="text-purple-600 text-6xl ">
                    <FaRegHandshake />
                  </span>
                  <p className=" text-2xl my-2 ">
                    With ample support for success.
                  </p>
                  <p className="text-gray-500 leading-8">
                    Engaging global talent can seem daunting at first, but we're here to provide you with continuous support.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos-duration="2000" data-aos="fade-up">
              <Image
                data-aos-duration="2000"
                data-aos="zoom-in"
                src={GroupImg}
                alt="An image of a man and a woman sitting together"
                className="h-full w-screen object-cover md:hidden lg:block"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="bg-purple-50 "></div>
    </>
  );
}

export default Hero;
