import React from "react";
import victor from "../../../public/victormentor.png";
import Image from "next/image";
import Link from "next/link";

function Victor() {
  return (
    <div className="  px-8 md:px-32">
      <div className="flex max-w-4xl flex-col md:flex-row gap-8 justify-center items-start ">
        <Image
          width={200}
          height={100}
          src={victor}
          alt="Victor Ouko"
          className=" rounded-full"
        />
        <div className=" leading-8">
          <h1 className=" text-2xl font-bold">Victor Ouko</h1>
          <span className="flex  gap-4">
            <p className=" font-semibold">Job title :</p>
            <p> Consultant</p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> LinkedIn:</p>
            <p className=" text-blue-500 underline">
              <Link
                href={"https://www.linkedin.com/in/victor-ouko-b53b8488/"}
                target="_blank">
               www.linkedin.com/in/victor-ouko-b53b8488/{" "}
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
        <h2 className=" font-bold text-2xl my-16">About Victor</h2>
        <p className="  leading-8 mb-16">
          Experienced IT & Business consultant with strong background in
          analyzing customer network requirements to offer targeted set-up
          recommendations with impactful results. Skilled communicator with
          experience delivering training content to customers with range of
          IT-proficiency.
        </p>

        <h3 className=" font-bold text-xl mb-8">Education</h3>
        <ol className=" leading-8 mb-14">
          <li>Master of Science Computer Science</li>
          <li>University of Bonn - Bonn, NW, Germany</li>
          <li>Bachelor of Science Computer Science</li>
          <li>University of Stellenbosch - Stellenbosch, South Africa</li>
        </ol>
        <h3 className=" font-bold text-xl mb-8">Experience</h3>
        <ol className=" leading-8 mb-14">
          <li>IT Consultant (Digital Transformation) at Ernst & Young GmbH - Currently</li>
          <li>IT Consultant (Cloud & Transformation) at PricewaterhouseCoopers GmbH - Düsseldorf</li>
          <li>Business Analyst at Deloitte GmbH</li>
          
        </ol>
        <h3 className=" font-bold text-xl mb-8">Certification</h3>
        <ol className=" leading-8 mb-14">
          <li>AWS Cloud Architect</li>
          <li>Azure Cloud Administrator</li>
          
        </ol>
      </div>
    </div>
  );
}

export default Victor;
