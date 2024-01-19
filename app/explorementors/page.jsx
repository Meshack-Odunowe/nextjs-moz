"use client";
import { useState } from "react";
import noel from "../../public/noel.jpg";
import frederick from "../../public/fred-mentor.png";
import chinedu from "../../public/chineduanayo.jpeg";
import bolaji from "../../public/bolajisamson.jpeg";
import Victor from "../../public/victormentor.png";
import alicia from "../../public/alicia.jpeg";
import achumboro from "../../public/achumboroataande.jpeg";
import faustine from "../../public/Faustine.jpg";

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import Link from "next/link";
const Explore = () => {
  return (
    <div>
      <div className=" mx-auto px-16 mt-24 flex flex-col lg:flex-row gap-16">
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50 max-w-[620px]">
            <div>
              <Image
                src={frederick}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48  object-cover w-[220px]"
                width={200}
                height={200}
              />{" "}
            </div>
            <div>
              <h2 className=" font-bold my-4 text-lg"> Frederick Ohen</h2>
              <p className="mb-4">Software Engineer</p>
              <div className="flex gap-4 items-center">
                <span>
                  <FaLocationDot className=" text-lg " />
                </span>
                <p className="  text-sm mb-4">United States of America</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
              <span>
                  <FaCommentDots className=" text-lg " />
                </span>                <p className="   text-sm">
                  '...eager to leverage my knowledge and robust expertise to
                  give back...'
                </p>
              </div>
            </div>
            <Link href="mentors/frederickohen">
              <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md">
                <span>
                  <IoArrowRedo />
                </span>
                <p>View</p>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50 max-w-[620px]">
            <div>
              <Image
                src={Victor}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48 object-cover"
                width={200}
                height={200}
              />{" "}
            </div>
            <div>
              <h2 className=" font-bold my-4 text-lg"> Victor Ouko</h2>
              <p className="mb-4">IT/ Business Consultant</p>
              <div className="flex gap-4 items-center">
                <span>
                  <FaLocationDot className=" text-lg " />
                </span>
                <p className="  text-sm mb-4">Germany</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <span>
                  <FaCommentDots className=" text-lg " />
                </span>
                <p className="   text-sm">
                  '...Skilled communicator with experience delivering training
                  content...'
                </p>
              </div>
            </div>
            <Link href="mentors/victorouko">
              <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md">
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
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50 max-w-[620px]">
            <div>
              <Image
                src={chinedu}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48  object-cover w-[220px]"
                width={200}
                height={200}
              />{" "}
            </div>
            <div>
              <h2 className=" font-bold my-4 text-lg"> Chinedu Anayokafor</h2>
              <p className="mb-4">
                {" "}
                Data Analyst | Business Intelligence Developer | SQL Expert |
                Instructor
              </p>
              <div className="flex gap-4 items-center">
                <span>
                  <FaLocationDot className=" text-lg " />
                </span>
                <p className="  text-sm mb-4">Canada</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
              <span>
                  <FaCommentDots className=" text-lg " />
                </span>                <p className="   text-sm">
                  'I provide actionable recommendations that drive informed
                  business decisions'
                </p>
              </div>
            </div>
            <Link href="/mentors/chineduanayo">
              <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md">
                <span>
                  <IoArrowRedo />
                </span>
                <p>View</p>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50 max-w-[620px]">
            <div>
              <Image
                src={bolaji}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48 object-cover"
                width={200}
                height={200}
              />{" "}
            </div>
            <div>
              <h2 className=" font-bold my-4 text-lg"> Bolaji Samson</h2>
              <p className="mb-4">
                Data Scientist | Operation Research Specialist | Business
                Analyst{" "}
              </p>
              <div className="flex gap-4 items-center ">
                <span><FaLocationDot className=" text-lg  flex justify-center" /></span>
                <p className="  text-sm mb-4">United Kingdom </p>
              </div>
              <div className="flex gap-4 justify-center items-center">
              <span>
                  <FaCommentDots className=" text-lg " />
                </span>                <p className="   text-sm">
                  "research-oriented and diligent goal-getter who is committed
                  to achieving results"
                </p>
              </div>
            </div>
            <Link href="mentors/bolajisamson">
              <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md">
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
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50 max-w-[620px]">
            <div>
              <Image
                src={alicia}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48  object-cover w-[220px]"
                width={200}
                height={200}
              />{" "}
            </div>
            <div>
              <h2 className=" font-bold my-4 text-lg"> Alicia Kimiagarov</h2>
              <p className="mb-4">Data Strategy Leader </p>
              <div className="flex gap-4 items-center">
                <span>
                  <FaLocationDot className=" text-lg " />
                </span>
                <p className="  text-sm mb-4">United States of America</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
              <span>
                  <FaCommentDots className=" text-lg " />
                </span>                <p className="   text-sm">
                  '...passionate about helping others develop professionally.'
                </p>
              </div>
            </div>
            <Link href="mentors/alicia-kimiagarov">
              <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md">
                <span>
                  <IoArrowRedo />
                </span>
                <p>View</p>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50 max-w-[620px]">
            <div className="max-w-[200px]">
              <Image
                src={achumboro}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48 object-cover w-[220px]"
                width={200}
                height={200}
              />{" "}
            </div>
            <div>
              <h2 className=" font-bold my-4 text-lg"> Achumboro Ataande</h2>
              <p className="mb-4"> Attorney | Entrepreneur</p>
              <div className="flex gap-4 items-center">
                <span>
                  <FaLocationDot className=" text-lg " />
                </span>
                <p className="  text-sm mb-4"> United States of America</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
              <span>
                  <FaCommentDots className=" text-lg " />
                </span>                <p className="   text-sm">
                  "...a licensed
          lawyer,  who invests in early-stage startups in the US and Africa ...
                </p>
              </div>
            </div>
            <Link href="mentors/achumboroataande">
              <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md">
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
          <div className="flex flex-col  md:flex-row gap-8 shadow-md p-4 bg-gray-50 max-w-[620px] ">
            <div>
              <Image
                src={faustine}
                alt="main image, showing a diverse group of people smiling."
                className="rounded-lg h-48  object-cover w-[220px]"
                width={200}
                height={200}
              />{" "}
            </div>
            <div>
              <h2 className=" font-bold my-4 text-lg"> Faustine Wabwire</h2>
              <p className="mb-4">
                {" "}
                Senior Program Officer, Global Policy & Advocacy at Bill &
                Melinda Gates Foundation{" "}
              </p>
              <div className="flex gap-4 items-center">
                <span>
                  <FaLocationDot className=" text-lg " />
                </span>
                <p className="  text-sm mb-4">United States of America</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
              <span>
                  <FaCommentDots className=" text-lg " />
                </span>                <p className="   text-sm">
                  '...a regular commentator on multimedia platforms including
                  Voice of America'
                </p>
              </div>
            </div>
            <Link href="mentors/faustine">
              <button className="px-6 py-4 bg-green-600 h-20 font-bold text-white flex flex-col items-center justify-center rounded-md">
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
