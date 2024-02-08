import Image from "next/image";
import Team from "../components/Team/page";
import { FcSearch } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcOrgUnit } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { FcOrganization } from "react-icons/fc";
export const metadata = {
  title: "About Us",
  description:
    "At Mozisha, our mission is clear: to nurture premium African talents and connect them with businesses worldwide.  ",
};
const About = () => {
  return (
    <>
      <div className="md:p-20 p-8">
        <div className=" max-w-6xl mx-auto">

        
        <h1 className="text-4xl text-gray-600 font-bold text-center">
          Mozisha - Africa’s Skills Factory.
        </h1>
        <p className="md:px-8 leading-8 py-8 text-gray-500">
          Mozisha is a technology workforce development firm that nurtures
          premium African talents. We empower young Africans with the in-demand
          skills they need to succeed in today’s global market, thereby
          addressing the challenge of skill mismatch where formal education
          falls short. <br /> <br/> How do we do it? Through our innovative
          practice-based training model, encompassing immersive skills training,
          capstone projects, mentorship, and apprenticeship programs. We equip
          young Africans to compete on a global scale.<br /> <br/> But we don't stop there.
          Mozisha is committed to bridging the gap between talent and
          opportunity. We help global businesses to access top-tier remote
          talents and invest in workforce development. By forging strategic
          partnerships, we enable companies to scale efficiently while
          simultaneously tackling youth unemployment in Africa.
        </p></div>

        <h2 className="text-2xl font-bold text-center text-gray-600 mb-8">
          Our Core Values
        </h2>
        <div className=" flex flex-col lg:flex-row gap-16 my-16">
          <div className=" shadow-lg p-2 bg-gray-50 rounded-2xl   w-fit flex  flex-col items-center justify-center">
            <div className=" rounded-full w-40 h-40 shadow-xl flex justify-center items-center overflow-hidden">
              <div className=" rounded-full w-32 h-32 flex items-center justify-center    bg-purple-100 mx-auto overflow-hidden">
                {/* <FcSearch className=" text-4xl text-green-400 " />
                 */}
                <Image width={ 200} height={200} src='/transparency.avif' alt='transparent image' />
              </div>
            </div>
            <h4 className=" text-gray-600 font-bold mt-7 text-center">
              Transparency
            </h4>

            <p className=" text-gray-500 my-4 text-center">
              We believe in open communication, honesty, and accountability in
              everything we do.
            </p>
          </div>
          <div className=" shadow-lg p-2 bg-gray-50 rounded-2xl  w-fit flex  flex-col items-center justify-center ">
            <div className=" rounded-full w-40 h-40 shadow-xl flex justify-center items-center  overflow-hidden">
              <div className=" rounded-full w-32 h-32 flex items-center justify-center   overflow-hidden  bg-purple-100 mx-auto">
                {/* <FcOk className=" text-4xl text-green-400 " /> */}
                <Image width={ 200} height={200} src='/excellence.jpg' alt='excellence image' />
              </div>
            </div>
            <h4 className=" text-gray-600 font-bold mt-7 text-center">
              Excellence
            </h4>

            <p className=" text-gray-500 my-4 text-center">
              We are committed to achieving the highest standards, constantly
              pushing ourselves to deliver unparalleled services.
            </p>
          </div>
          <div className=" shadow-lg p-2 bg-gray-50 rounded-2xl  w-fit flex  flex-col items-center justify-center ">
            <div className=" rounded-full w-40 h-40 shadow-xl flex justify-center items-center overflow-hidden">
              <div className=" rounded-full w-32 h-32 flex items-center justify-center   overflow-hidden  bg-purple-100 mx-auto">
              <Image width={ 200} height={200} src='/diversity.jpg' alt='image denoting diversity image' />
                {/* <FcOrganization className=" text-4xl text-green-400 " /> */}
              </div>
            </div>
            <h4 className=" text-gray-600 font-bold mt-7 text-center">
              Diversity
            </h4>

            <p className=" text-gray-500 my-4 text-center">
              We empower our team through inclusivity, leading to richer
              experiences and better results.
            </p>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row gap-16 my-16">
          <div className=" shadow-lg p-2 bg-gray-50 rounded-2xl  w-fit flex  flex-col items-center justify-center">
            <div className=" rounded-full w-40 h-40 shadow-xl flex justify-center items-center overflow-hidden">
              <div className=" rounded-full w-32 h-32 flex items-center justify-center   overflow-hidden  bg-purple-100 mx-auto">
              <Image width={ 200} height={200} src='/teamwork.jpg' alt='teamwork image' />
                {/* <FcOrgUnit className=" text-4xl text-green-400 " /> */}
              </div>
            </div>
            <h4 className=" text-gray-600 font-bold mt-7 text-center">
              Collaboration{" "}
            </h4>

            <p className=" text-gray-500 my-4 text-center">
              We value collective efforts as a team because everyone contributes
              to amplifying our impact.
            </p>
          </div>
          <div className=" shadow-lg p-2 bg-gray-50 rounded-2xl  w-fit flex  flex-col items-center justify-center">
            <div className=" rounded-full w-40 h-40 shadow-xl flex justify-center items-center overflow-hidden">
              <div className=" rounded-full w-32 h-32 flex items-center justify-center  overflow-hidden   bg-purple-100 mx-auto">
              <Image width={ 200} height={200} src='/empowerment.jpg' alt='empowerment image' />
                {/* <FcSportsMode className=" text-4xl text-green-400 " /> */}
              </div>
            </div>
            <h4 className=" text-gray-600 font-bold mt-7 text-center">
              Empowerment{" "}
            </h4>

            <p className=" text-gray-500 my-4 text-center">
              Our mission is to set up individuals and organizations for
              success, equipping them with the resources required to thrive.
            </p>
          </div>
          <div className=" shadow-lg p-2 bg-gray-50 rounded-2xl  w-fit flex  flex-col items-center justify-center ">
            <div className=" rounded-full w-40 h-40 shadow-xl flex justify-center items-center overflow-hidden">
              <div className=" rounded-full w-32 h-32 flex items-center justify-center  overflow-hidden   bg-purple-100 mx-auto">
              <Image width={ 200} height={200} src='/innovation.jpeg' alt='innovation image' />
                {/* <FcServices className=" text-4xl text-green-400 " /> */}
              </div>
            </div>
            <h4 className=" text-gray-600 font-bold mt-7 text-center">
              Innovation{" "}
            </h4>

            <p className=" text-gray-500 my-4 text-center">
              We embrace creativity by adapting to the ever-evolving trends
              driving progress through forward-thinking.
            </p>
          </div>
        </div>

        <p className=" italic animate-pulse font-bold mb-16 text-red-500">
          These values shape our culture, define our approach, and guide us in
          creating meaningful impact every day.
        </p>

        <Team />
      </div>
    </>
  );
};

export default About;
