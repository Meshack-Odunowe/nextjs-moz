// Apprenticeship.js
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { GrConnect } from "react-icons/gr";
import { GiSecretBook } from "react-icons/gi";
import { RxTransform } from "react-icons/rx";
import backgroundImage from "../../public/apprenticeship.jpg";

function Apprenticeship() {


  return (
    <div className="px-4 md:px-24">
      <div className="flex  flex-col leading-8 lg:flex-row items-center justify-center gap-8 ">
        <div>
          <h1 className="text-5xl  font-bold  tracking-normal leading-[70px] my-5 lg:text-7xl text-center  md:text-start">
            <strong className=" text-gray-600">Mozisha Appren<span className=" text-purple-700 ">tice</span></strong>{" "}
            
          </h1>
          <p className="text-gray-600"> Closing Africa’s Skills Gap through Experiential Learning</p>
        </div>
        <div className="">
          <Image
          className="rounded-md"
          src='/executive.jpg'
            width={900}
            height={900}
            alt="image of a girl"
          />
        </div>
      </div>
      <div className="flex gap-4  items-center justify-center my-8">
        <button className=" bg-purple-700 text-white rounded-md mt-4 px-4 py-2 hover:bg-white hover:text-purple-700 mb-4">
        <Link href='/apprenticeship/apprenticesignup'>
        Become an Apprentice
        </Link>

        </button>
        <button className=" bg-purple-700 text-white rounded-md mt-4 px-4 py-2 hover:bg-white hover:text-purple-700 mb-4">
          <Link href='/apprenticeship/get-apprentice'>Get an Apprentice</Link>
         
        </button>
      </div>
      <section>
        <div className=" max-w-[700px] flex justify-center items-center mx-auto">
          <p className="  text-center my-8 text-gray-600">
            Mozisha Apprenticeship is where African talents are merged with
            businesses for three months of hands-on training. The programme is
            designed to empower young Africans with practical skills for
            real-world success.
          </p>
        </div>
        <p className=" font-bold text-2xl text-center my-8">How it works</p>

        <div className=" flex flex-col lg:flex-row gap-8 justify-center items-center">
          <div className=" leading-8 shadow-lg p-4 mb-8 w-fit">
            <div className=" bg-green-500 text-white rounded-md w-fit p-6">
              <GrConnect size={35} />
            </div>
            <p className=" font-bold">Connect</p>
            <div className=" transition-all delay-300 border-b-2 hover:w-[55px] border w-[40px] rounded-md  border-red-700"></div>
            <p className=" w-[300px] text-gray-600">
              We pair apprentices with businesses for a 3-month practical
              journey.
            </p>
          </div>

          <div className=" leading-8 shadow-lg p-4 mb-8 w-fit">
            <div className=" bg-blue-500 text-white rounded-md w-fit p-6">
              <GiSecretBook size={35} />
            </div>
            <p className=" font-bold">Learn</p>
            <div className=" transition-all delay-300 border-b-2 hover:w-[55px] border w-[40px] rounded-md  border-red-700"></div>
            <p className="text-gray-600 w-[300px]">
              Apprentices dive into real-world projects, refining skills and
              gaining insights.
            </p>
          </div>

          <div className=" leading-8 shadow-lg p-4 mb-8 w-fit">
            <div className=" bg-black text-white rounded-md w-fit p-6">
              <RxTransform size={35} />
            </div>
            <p className=" font-bold">Transform</p>
            <div className="  border w-[40px] rounded-md  transition-all delay-300 border-b-2 hover:w-[55px] border-red-700"></div>
            <p className="text-gray-600 w-[300px]">
              Turn learning into earning, kickstarting a career with a solid
              foundation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Apprenticeship;
