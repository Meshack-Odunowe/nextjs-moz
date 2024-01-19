"use client";
import { useState } from "react";
import noel from "../../public/noel.jpg";
import frederick from "../../public/fred-mentor.png";
import chinedu from "../../public/chineduanayo.jpeg";
import bolaji from "../../public/bolajisamson.jpeg";
import Victor from "../../public/victormentor.png";
import alicia from "../../public/alicia.jpeg";
import achumboro from "../../public/achumboroataande.jpeg";

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import Link from "next/link";
const Explore = () => {
  
  return (
    <div >
      <div className=" mx-auto px-16 mt-24 flex flex-col lg:flex-row gap-16">
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50">
            <div>
              <Image
                src={frederick}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48  object-cover"
                width={200}
                height={200}
              />{" "}
            </div>
            <div >
              <h2 className=" font-bold my-4 text-lg"> Frederick Ohen</h2>
              <p className="mb-4">Software Engineer</p>
              <div className="flex gap-4 items-center">
                <FaLocationDot className=" text-red-500 text-xl" />
                <p className="  text-sm mb-4">United states of America</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <FaCommentDots className=" text-red-500 text-xl"  />
                <p className="   text-sm">
                  '...eager to leverage my knowledge and robust expertise to give back...'
                </p>
              </div>
            </div>
            <Link href='mentors/frederickohen'>
            <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md" >
              <span>
                <IoArrowRedo />
              </span>
              <p>View</p>
            </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50">
            <div>
              <Image
                src={Victor}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48 object-cover"
                width={200}
                height={200}
              />{" "}
            </div>
            <div >
              <h2 className=" font-bold my-4 text-lg"> Victor Ouko</h2>
              <p className="mb-4">Consultant</p>
              <div className="flex gap-4 items-center">
                <FaLocationDot className=" text-red-500 text-xl" />
                <p className="  text-sm mb-4">Germany</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <FaCommentDots className=" text-red-500 text-xl"  />
                <p className="   text-sm">
                  '...Skilled communicator with
          experience delivering training content...'
                </p>
              </div>
            </div>
            <Link href='mentors/victorouko'>
            <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md" >
              <span>
                <IoArrowRedo />
              </span>
              <p>View</p>
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mx-auto px-16 mt-24 flex flex-col lg:flex-row gap-16">
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50">
            <div>
              <Image
                src={chinedu}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48  object-cover"
                width={200}
                height={200}
              />{" "}
            </div>
            <div >
              <h2 className=" font-bold my-4 text-lg"> Chinedu Anayo</h2>
              <p className="mb-4"> Data Analyst | Business Intelligence Developer | SQL Expert | Instructor</p>
              <div className="flex gap-4 items-center">
                <FaLocationDot className=" text-red-500 text-xl" />
                <p className="  text-sm mb-4">Calgary, Alberta, Canada</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <FaCommentDots className=" text-red-500 text-xl"  />
                <p className="   text-sm">
                  'I provide actionable recommendations that drive informed business decisions'
                </p>
              </div>
            </div>
            <Link href='/mentors/chineduanayo'>
            <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md" >
              <span>
                <IoArrowRedo />
              </span>
              <p>View</p>
            </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50">
            <div>
              <Image
                src={bolaji}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48 object-cover"
                width={200}
                height={200}
              />{" "}
            </div>
            <div >
              <h2 className=" font-bold my-4 text-lg"> Bolaji Samson</h2>
              <p className="mb-4">Data Scientist | Operation Research Specialist | Business Analyst </p>
              <div className="flex gap-4 items-center ">
                <FaLocationDot className=" text-red-500 text-xl flex justify-center" />
                <p className="  text-sm mb-4">Lancaster, England, United Kingdom </p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <FaCommentDots className=" text-red-500 text-xl  flex justify-center"  />
                <p className="   text-sm">
                  "research-oriented and diligent goal-getter who is committed to achieving results"
                </p>
              </div>
            </div>
            <Link href='mentors/bolajisamson'>
            <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md" >
              <span>
                <IoArrowRedo />
              </span>
              <p>View</p>
            </button>
            </Link>
          </div>
        </div>
        
      </div>
      <div className=" mx-auto px-16 mt-24 flex flex-col lg:flex-row gap-16">
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50">
            <div>
              <Image
                src={alicia}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48  object-cover"
                width={200}
                height={200}
              />{" "}
            </div>
            <div >
              <h2 className=" font-bold my-4 text-lg"> Alicia Kimiagarov</h2>
              <p className="mb-4">Data Strategy Leader </p>
              <div className="flex gap-4 items-center">
                <FaLocationDot className=" text-red-500 text-xl" />
                <p className="  text-sm mb-4">Huntsville-Decatur-Albertville Area</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <FaCommentDots className=" text-red-500 text-xl"  />
                <p className="   text-sm">
                  '...passionate about helping others develop professionally.'
                </p>
              </div>
            </div>
            <Link href='mentors/alicia-kimiagarov'>
            <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md" >
              <span>
                <IoArrowRedo />
              </span>
              <p>View</p>
            </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50">
            <div>
              <Image
                src={achumboro}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48 object-cover"
                width={200}
                height={200}
              />{" "}
            </div>
            <div >
              <h2 className=" font-bold my-4 text-lg"> Achumboro Ataande</h2>
              <p className="mb-4"> Attorney | Entrepreneur</p>
              <div className="flex gap-4 items-center">
                <FaLocationDot className=" text-red-500 text-xl" />
                <p className="  text-sm mb-4"> New York, United States</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <FaCommentDots className=" text-red-500 text-xl"  />
                <p className="   text-sm">
                  "...educates thousands of people yearly ...
                </p>
              </div>
            </div>
            <Link href='mentors/achumboroataande'>
            <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md" >
              <span>
                <IoArrowRedo />
              </span>
              <p>View</p>
            </button>
            </Link>
          </div>
        </div>
      </div>
     
      
    </div>
  );
};

export default Explore;
