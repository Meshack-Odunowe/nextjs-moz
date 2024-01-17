"use client";
import { FaDatabase, FaDesktop, FaGlobeAfrica } from "react-icons/fa";

import { ImStatsBars } from "react-icons/im";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiBmcsoftware} from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";
function Details() {
  function handleGetStartedClick() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="my-24">
      <p className=" text-center leading-8 my-8">
        Discover mentors specializing in product fields worldwide.
      </p>

      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="flex flex-col md:grid md:grid-cols-2  gap-16 mt-12">
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div data-aos-duration="2000" data-aos="fade-up">
            <FaDesktop className="text-3xl text-teal-700" />
          </div>
          <div data-aos-duration="2000" data-aos="fade-up">
            <h2 className="md:text-2xl font-extrabold text-purple-500">
              Design
            </h2>
            <p className="text-teal-700 font-bold">Creative problem-solving</p>
          </div>
        </div>

        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <FaDatabase  className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="md:text-2xl font-extrabold text-purple-700">Data</h2>
            <p className="text-teal-700 font-bold">
              Extracting valuable insights and knowledge from data .
            </p>
          </div>
        </div>

        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <FaGlobeAfrica className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="md:text-2xl font-extrabold text-purple-700">
              International Development
            </h2>
            <p className="text-teal-700 font-bold">
              Fostering sustainable economic growth.
            </p>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <ImStatsBars className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="md:text-2xl font-extrabold text-purple-700">
              Sales and Marketing{" "}
            </h2>
            <p className="text-teal-700 font-bold">
              Promote, sell, and distribute products or services .
            </p>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <SiBmcsoftware className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="md:text-2xl font-extrabold text-purple-700">Software Engineering            </h2>
            <p className="text-teal-700 font-bold">
            Design, development, testing, deployment, and maintenance of software systems.            </p>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <GiArchiveResearch className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="md:text-2xl font-extrabold text-purple-700">Academic and Business Research          </h2>
            <p className="text-teal-700 font-bold">
            Generate insights for practical applications and organizational decision-making.          </p>
          </div>
        </div>
      </div>
      <button className=" text-center font-bold my-8 bg-purple-700 text-white px-6 py-2 rounded-md cursor-pointer hover:underline">
        <Link href="explorementors" onClick={handleGetStartedClick}>
          Explore Mentors
        </Link>
      </button>
    </div>
  );
}

export default Details;
