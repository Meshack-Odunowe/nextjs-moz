/* eslint-disable react/no-unescaped-entities */
import interview from "../../public/interview.jpg";
import Arrow from "../../public/arrow.png";
import { FaGraduationCap, FaSearch, FaSuitcase } from "react-icons/fa";
import InterviewForm from "../components/AllAboutMentors/InterviewForm";
import Image from "next/image";
export default function MockInterview() {
  return (
    <div className=" max-w-6xl mx-auto p-4">
      <div className=" flex flex-col gap-8 md:flex-row  items-center">
        <div>
          <h1 className=" text-center text-4xl md:text-6xl font-bold text-emerald-700 leading-8 tracking-wide mb-8 ">
            Mozisha Mock Interviews: Elevate Your Confidence, Ace Your Career
          </h1>
          <p className=" font-bold text-lg">
            Practice Makes Perfect, Success Follows Suit{" "}
          </p>
          <p className=" text-sm leading-8 mt-4">
            Welcome to Mozisha's Mock Interview Program,. Your gateway to
            mastering the art of interviews and landing your dream job!
          </p>
        </div>
        <Image
          width={500}
          src={interview}
          alt="interview"
          className=" rounded-md"
        />
      </div>

      <div>
        <h2 className=" font-bold text-2xl mb-8 text-center mt-8">
          Why Mozisha Mock Interviews?
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className=" border  shadow-xl p-4">
            <p className=" gap-4 flex flex-row items-center font-bold">
              <span>
                <FaSearch />{" "}
              </span>
              Realistic Simulations:
            </p>
            <p>
              {" "}
              Experience the real deal before the big day. Our mock interviews
              are designed to simulate actual job interviews, ensuring you're
              prepared for any question that comes your way.
            </p>
          </div>
          <div className=" border shadow-xl p-4">
            <p className=" gap-4 flex flex-row items-center font-bold">
              <span>
                <FaGraduationCap />{" "}
              </span>
              Expert Feedback:
            </p>
            <p>
              {" "}
              Receive constructive feedback from seasoned professionals who know
              the ins and outs of the industry. Learn not just what to say, but
              how to say it with impact.
            </p>
          </div>
          <div className=" border shadow-xl p-4">
            <p className=" gap-4 flex flex-row items-center font-bold">
              <span>
                <FaSuitcase />{" "}
              </span>
              Tailored to your field{" "}
            </p>
            <p>
              {" "}
              Whether you're in tech, finance, healthcare, or any other
              industry, our mock interviews are customized to your specific
              field. Get industry-specific insights and tips to stand out.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className=" font-bold text-2xl mb-8 text-center my-16">
          How Mozisha Mock Interviews Work:
        </h2>
        <div className=" grid md:grid-cols-4  gap-8 mb-8">
          <div className=" rounded-xl border p-4 shadow-xl relative">
            <Image
              width={400}
              src={Arrow}
              alt="arrow"
              className="hidden md:block w-12 h-4 md:absolute md:-right-8 md:top-2/4"
            />

            <p className=" text-red-600 px-4 mb-4 py-2 border-red-300 border w-fit rounded-xl">
              Sign Up
            </p>
            <p className=" font-semibold tracking-wide leading-8">
              Choose your industry, share your job interview details, and select
              your preferred time.
            </p>
          </div>
          <div className="relative rounded-xl border p-4 shadow-xl">
            <Image
              width={400}
              src={Arrow}
              alt="arrow"
              className="hidden md:block w-12 h-4 md:absolute md:-right-8 md:top-2/4"
            />
            <p className=" text-red-600 px-4 py-2 border-red-300 border w-fit mb-4 rounded-xl">
              Simulate the Experience{" "}
            </p>
            <p className=" font-semibold tracking-wide leading-8">
              Engage in a realistic, one-on-one mock interview with an
              experienced professional from your field.
            </p>
          </div>
          <div className="relative rounded-xl border p-4 shadow-xl">
            <Image
              width={400}
              src={Arrow}
              alt="arrow"
              className="hidden md:block w-12 h-4 md:absolute md:-right-8 md:top-2/4"
            />
            <p className=" text-red-600 px-6 py-2 border-red-300 border w-fit mb-4 rounded-xl">
              Receive Feedback{" "}
            </p>

            <p className=" font-semibold tracking-wide leading-8">
              Get detailed feedback on your performance, including strengths,
              areas for improvement, and strategies to enhance your interview
              skills. Boost Your Confidence: Armed with insights and practice,
              enter your real interview with confidence and poise.
            </p>
          </div>
          <div className="relative rounded-xl border p-4 shadow-xl">
            <p className=" text-red-600 px-4 py-2 border-red-300 border w-fit mb-4 rounded-xl">
              Boost Your Confidence{" "}
            </p>
            <p className=" font-semibold tracking-wide leading-8">
              Armed with insights and practice, enter your real interview with
              confidence and poise.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h5 className=" font-bold text-2xl mb-8 text-center my-16">
          Ready to Shine? Schedule Your Mock Interview Today!
        </h5>
        <p className=" leading-8">
          Don't let nerves get in the way of your success. Join Mozisha's Mock
          Interview Program and turn every interview into an opportunity to
          showcase your skills and potential.
        </p>
        <p className="font-bold text-xl mb-8 text-center my-16">
          Book Your Mock Interview Now
        </p>
      </div>
      <InterviewForm />
    </div>
  );
}
