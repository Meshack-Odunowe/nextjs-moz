import Image from "next/image";
import Link from "next/link";
import M from "../../../public/m.png";
import locked from "../../../public/locked.jpg";


import support from "../../../public/network.jpeg";
import network from "../../../public/relevance.jpeg";
import Arrow from "../../../public/arrow.png";

import mentees from "../../../public/mentee.jpg";
import Details from "./Details";
import { FaGraduationCap } from "react-icons/fa";
function MenteesTab() {
  return (
    <div>

    <div
      data-aos-duration="2000"
      data-aos="fade-up"
      className="flex flex-col md:flex-row mt-8  gap-8 items-center h-full">
      <div data-aos-duration="2000" data-aos="fade-up" className="md:w-1/2">
        <h1 className="my-8 text-3xl md:text-4xl font-bold">
          Welcome to Mozisha Mentoring
        </h1>
        <p className=" leading-8 mb-8">
          Your gateway to personalized guidance, hands-on insights, and a direct
          path to success!
        </p>
        <button className="bg-purple-700 text-white rounded-md px-6 py-2 mb-8 hover:bg-white hover:text-purple-700 hover:font-bold">
          <Link
            href="/menteeform"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            Become a Mentee
          </Link>
        </button>
      </div>
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="bg-purple-500 h-full md:w-1/2 ">
        <Image
          height={400}
          width={600}
          className=" object-cover"
          data-aos-duration="2000"
          data-aos="fade-left"
          src={mentees}
          alt=""
        />
      </div>
     

      </div>
      <div data-aos-duration="2000" data-aos="fade-up">
            <h2 className=" font-bold text-2xl mb-8 text-center">
              Why Mozisha Mentoring?
            </h2>

            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className=" bg-teal-100 relative flex-col md:flex-row  p-8  flex gap-8 items-center ">
              <div data-aos-duration="2000" data-aos="fade-up">
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className="  max-w-[600px] justify-center items-center shadow-2xl rounded-md bg-green-300  gap-12 p-4 mb-8">
                  <div
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-green-600 p-4 rounded-lg text-white">
                      Tailored Guidance
                    </h4>
                    <p className=" ">
                      Our mentoring program is crafted to suit your unique
                      journey. Whether you're a budding professional or an
                      aspiring talent, we connect you with seasoned experts
                      who've been there and conquered that!
                    </p>
                  </div>
                </div>
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className="  max-w-[600px] justify-center items-center shadow-2xl bg-yellow-100 rounded-md p-4text-white  gap-12 p-4 mb-8">
                  <div
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-red-800 p-4 rounded-lg text-white">
                      Career Insights
                    </h4>
                    <p className=" ">
                      Gain exclusive access to real-world industry knowledge.
                      Your mentor is more than a guide; they're your gateway to
                      the latest trends, challenges, and triumphs in your field.
                    </p>
                  </div>
                </div>
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className="  max-w-[600px] justify-center items-center shadow-2xl bg-gray-100 rounded-md p-4text-white  gap-12 p-4 mb-8">
                  <div
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-gray-800 p-4 rounded-lg text-white">
                      Mock Job Interviews
                    </h4>
                    <p className=" ">
                      Gain exclusive access to real-world industry knowledge.
                      Your mentor is more than a guide; they're your gateway to
                      the latest trends, challenges, and triumphs in your field.
                    </p>
                  </div>
                </div>
              </div>
              <Image width={400}
                data-aos-duration="2000"
                data-aos="fade-left"
                src={M}
                alt="mentoring"
                className=" object-cover h-96 "
              />
            </div>
      </div>
      


      <div data-aos-duration="2000" data-aos="fade-up">
            <h2 className=" font-bold text-2xl mb-8 text-center my-24">
              Connecting Talents with Experience{" "}
            </h2>

            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className=" bg-yellow-100 relative p-8  flex  flex-col ">
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className=" flex flex-col  gap-8 md:flex-row justify-center items-center my-16">
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className="  max-w-[600px]  shadow-2xl rounded-md bg-green-300  gap-12 p-4 mb-8">
                  <div
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-green-600 p-4 rounded-lg text-white">
                      Personalized Matches
                    </h4>
                    <p className=" ">
                      Your mentorship journey begins with a match tailored to
                      your goals and aspirations. We ensure compatibility, so
                      every session is a step closer to your dreams.
                    </p>
                  </div>
                </div>
                <Image width={400}
                  data-aos-duration="2000"
                  data-aos="fade-left"
                  src={locked}
                  alt="mentor"
                  className="hidden md:block w-64 h-56 object-cover"
                />
              </div>
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className="flex flex-col  gap-8 md:flex-row-reverse justify-center items-center my-16">
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className="  max-w-[600px] justify-center items-center shadow-2xl bg-amber-200 rounded-md p-4text-white  gap-12 p-4 mb-8">
                  <div
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-red-800 p-4 rounded-lg text-white">
                      Continuous Support
                    </h4>
                    <p className=" ">
                      Beyond advice, our mentors are committed to your success.
                      From resume reviews to career strategy, they've got your
                      back every step of the way.
                    </p>
                  </div>
                </div>
                <Image width={400}
                  data-aos-duration="2000"
                  data-aos="fade-left"
                  src={support}
                  alt=""
                  className="hidden md:block w-64 h-56"
                />
              </div>
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className="flex flex-col  gap-8 md:flex-row justify-center items-center my-16">
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className="  max-w-[600px] justify-center items-center shadow-2xl bg-gray-100 rounded-md p-4text-white  gap-12 p-4 mb-8">
                  <div
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-gray-800 p-4 rounded-lg text-white">
                      Global Network
                    </h4>
                    <p className=" ">
                      Mozisha's mentoring doesn't just stop at advice; it opens
                      doors. Connect with professionals from diverse
                      backgrounds, expanding your network and horizons.
                    </p>
                  </div>
                </div>
                <Image width={400}
                  data-aos-duration="2000"
                  data-aos="fade-left"
                  src={network}
                  alt=""
                  className="hidden md:block w-64 h-56 object-cover"
                />
              </div>
            </div>
            <Details />

            <div data-aos-duration="2000" data-aos="fade-up">
              <h5 className=" text-2xl font-bold text-center my-8">
                How It Works
              </h5>
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className=" flex flex-col md:flex-row gap-8 mb-8">
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className=" rounded-xl border p-4 shadow-xl relative">
                  <Image width={400}
                    data-aos-duration="2000"
                    data-aos="fade-left"
                    src={Arrow}
                    alt="arrow"
                    className="hidden md:block w-12 h-4 md:absolute md:-right-8 md:top-2/4"
                  />

                  <p className=" text-red-600 px-6 py-2 border-red-300 border w-fit rounded-xl">
                    Sign Up
                  </p>
                  <p className=" font-semibold tracking-wide leading-8">
                    Join the Mozisha Mentoring community. Tell us about your
                    goals, dreams, and the skills you want to develop.
                  </p>
                </div>
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className="relative rounded-xl border p-4 shadow-xl">
                  <Image width={400}
                    data-aos-duration="2000"
                    data-aos="fade-left"
                    src={Arrow}
                    alt="arrow"
                    className="hidden md:block w-12 h-4 md:absolute md:-right-8 md:top-2/4"
                  />
                  <p className=" text-red-600 px-6 py-2 border-red-300 border w-fit rounded-xl">
                    Get Matched{" "}
                  </p>
                  <p className=" font-semibold tracking-wide leading-8">
                    Our powerful algorithm connects you with the perfect mentor
                    based on your profile, ensuring a meaningful and impactful
                    relationship.
                  </p>
                </div>
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className="relative rounded-xl border p-4 shadow-xl">
                  <p className=" text-red-600 px-6 py-2 border-red-300 border w-fit rounded-xl">
                    Experience Growth
                  </p>
                  <Image width={400}
                    data-aos-duration="2000"
                    data-aos="fade-left"
                    src={Arrow}
                    alt="arrow"
                    className="hidden md:block w-12 h-4 md:absolute md:-right-8 md:top-2/4"
                  />
                  <p className=" font-semibold tracking-wide leading-8">
                    {" "}
                    Engage in one-on-one sessions, mock interviews, and
                    skill-building exercises. Watch your confidence soar and
                    your skills sharpen.
                  </p>
                </div>
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className=" rounded-xl border p-4 shadow-xl">
                  <p className=" text-red-600 px-6 py-2 border-red-300 border w-fit rounded-xl">
                    Achieve Success
                  </p>
                  <p className=" font-semibold tracking-wide leading-8">
                    With Mozisha Mentoring, success is not just a goal; it's an
                    inevitable outcome. Your journey to a thriving career starts
                    here.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos-duration="2000" data-aos="fade-up">
              <p className="flex flex-row items-center gap-4 text-2xl font-bold tracking-wide leading-8 my-8">
                <span>
                  <FaGraduationCap />
                </span>
                <span>Ready to Soar? Get Started Today!</span>
              </p>
              <p className=" leading-8 max-w-3xl mb-8">
                Don't just dream about success; make it a reality with Mozisha
                Mentoring. Sign up now and embark on a journey where talents are
                nurtured, skills are honed, and success is inevitable.
              </p>
              <p className="mb-12">
                <Link
                  href="menteeform"
                  className=" text-purple-700 underline mr-4 "
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                  }}>
                  Sign Up
                </Link>{" "}
                Now to Unlock Your Potential and Shape Your Future
              </p>
            </div>
          </div>
      </div>
  );
}

export default MenteesTab;
