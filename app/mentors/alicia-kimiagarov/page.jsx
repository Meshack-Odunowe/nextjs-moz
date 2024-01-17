import React from "react";
import alicia from "../../../public/alicia.jpeg";
import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkDone } from "react-icons/io5";
function Alicia() {
  return (
    <div className="  px-8 md:px-32">
      <div className="flex max-w-4xl flex-col md:flex-row gap-8 justify-center items-start ">
        <Image
          width={200}
          height={100}
          src={alicia}
          alt="Alicia"
          className=" rounded-full"
        />
        <div className=" leading-8">
          <h1 className=" text-2xl font-bold">Alicia Kimiagarov</h1>
          <span className="flex  gap-4">
            <p className=" font-semibold">Job title :</p>
            <p> Data Strategy Leader </p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> LinkedIn:</p>
            <p className=" text-blue-500 underline">
              <Link
                href={"https://www.linkedin.com/in/aliciakimiagarov/"}
                target="_blank">
                https://www.linkedin.com/in/aliciakimiagarov/{" "}
              </Link>
            </p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> Availability :</p>
            <p>Available</p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> Years of Experience:</p>
            <p>5yrs +</p>
          </span>
        </div>
      </div>
      <div className=" border-gray-300 mt-16 border-b-8"></div>
      <div>
        <h2 className=" font-bold text-2xl my-16">About Alicia</h2>
        <p className="  leading-8 mb-16">
          I turn data analytics into visualizations, detailed reports, and
          viable action plans to solve real business problems and enhance
          operational performance. My focus is on working efficiently and with
          exceptional attention to detail as I conduct data analyses, create
          informative models, build reports, and present insights to key
          stakeholders. I consider myself a collaborative strategist who enjoys
          working on cross-functional teams and is passionate about helping
          others develop professionally.
        </p>
      </div>
      <div>
        <h2 className=" font-bold text-2xl my-16">Career Highlights</h2>
        <ul className="  leading-8 mb-16">
          <li>
            {" "}
            Built detailed models for a Fortune 500 company to enhance sales
            strategies
          </li>
          <li>
            {" "}
            Designed automated dashboards to save time in reporting each month
          </li>
          <li>
            {" "}
            Presented data-driven plans to increase productivity and reduce
            errors
          </li>
          <li>
            {" "}
            Collaborated with diverse teams across the U.S., Japan, France, and
            South Africa
          </li>
          <li>Trained team members and helped 11 employees earn promotions</li>
        </ul>
      </div>
      <div>
        <h2 className=" font-bold text-2xl my-16">Notable Credentials</h2>
        <ul className="  leading-8 mb-16">
          
          <li>
          Raytheon Technologies Data Science & Analytics Certificate
          </li>
          <li>Master of Business Administration</li>
        </ul>
      </div>
    </div>
  );
}

export default Alicia;
